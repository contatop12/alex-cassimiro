import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { validateLead } from '../src/shared/lead.ts';
import type { AppEnv } from '../src/worker/index.ts';
import worker from '../src/worker/index.ts';
import { buildEmail } from '../src/worker/lead.ts';

const valid = {
  name: 'Maria Souza',
  company: 'Empresa Exemplo S.A.',
  email: 'maria@empresa.com',
  objective: 'Abrir a semana de liderança com uma conversa sobre pressão e feedback.',
};

describe('validateLead', () => {
  it('aceita o mínimo obrigatório e normaliza espaços e caixa do e-mail', () => {
    const r = validateLead({ ...valid, name: '  Maria   Souza ', email: 'Maria@Empresa.com ' });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.name).toBe('Maria Souza');
      expect(r.data.email).toBe('maria@empresa.com');
    }
  });

  it('aponta campos obrigatórios ausentes', () => {
    const r = validateLead({});
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors).toMatchObject({
        name: 'required',
        company: 'required',
        email: 'required',
        objective: 'required',
      });
    }
  });

  it('rejeita e-mail, telefone e opções inválidas', () => {
    const r = validateLead({
      ...valid,
      email: 'maria@',
      phone: 'abc',
      topic: 'astrologia',
      talkLanguage: 'es',
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.email).toBe('invalid_email');
      expect(r.errors.phone).toBe('invalid_phone');
      expect(r.errors.topic).toBe('invalid_choice');
      expect(r.errors.talkLanguage).toBe('invalid_choice');
    }
  });

  it('aceita campos opcionais válidos', () => {
    const r = validateLead({
      ...valid,
      topic: 'emotional-intelligence',
      talkLanguage: 'en',
      format: 'online',
    });
    expect(r.ok && r.data.talkLanguage).toBe('en');
  });
});

/* ---------- Worker ---------- */

function kv() {
  const store = new Map<string, string>();
  return {
    store,
    get: vi.fn(async (k: string) => store.get(k) ?? null),
    put: vi.fn(async (k: string, v: string) => {
      store.set(k, v);
    }),
  };
}

function makeEnv(over: Partial<Record<string, unknown>> = {}) {
  return {
    SITE_URL: 'https://alexcassimiro.com.br',
    LEAD_TO_EMAIL: 'destino@teste.dev',
    LEAD_FROM_EMAIL: 'propostas@alexcassimiro.com.br',
    RESEND_API_KEY: 're_test',
    ASSETS: { fetch: vi.fn(async () => new Response('asset')) },
    LEAD_RATE_LIMITER: { limit: vi.fn(async () => ({ success: true })) },
    ...over,
  } as unknown as AppEnv;
}

const ctx = {
  waitUntil: () => undefined,
  passThroughOnException: () => undefined,
} as unknown as ExecutionContext;
type WorkerRequest = Parameters<typeof worker.fetch>[0];
const run = (req: Request, env: AppEnv) => worker.fetch(req as unknown as WorkerRequest, env, ctx);

function post(body: unknown, headers: Record<string, string> = {}) {
  return new Request('https://alexcassimiro.com.br/api/lead', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://alexcassimiro.com.br', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

const payload = (over: Record<string, unknown> = {}) => ({
  ...valid,
  website: '',
  elapsedMs: 9000,
  idempotencyKey: 'key-12345678',
  meta: { siteLang: 'pt', page: '/contato/', utm: { utm_source: 'google', utm_campaign: 'teste' } },
  ...over,
});

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  fetchMock = vi.fn(async () => new Response('{"id":"x"}', { status: 200 }));
  vi.stubGlobal('fetch', fetchMock);
  vi.stubGlobal('caches', { default: { match: async () => undefined, put: async () => undefined } });
});
afterEach(() => vi.unstubAllGlobals());

describe('POST /api/lead', () => {
  it('recusa métodos diferentes de POST', async () => {
    const r = await run(new Request('https://alexcassimiro.com.br/api/lead'), makeEnv());
    expect(r.status).toBe(405);
  });

  it('recusa origem externa e corpo que não é JSON', async () => {
    const env = makeEnv();
    expect((await run(post(payload(), { origin: 'https://malicioso.example' }), env)).status).toBe(403);
    expect((await run(post('nome=x', { 'content-type': 'text/plain' }), env)).status).toBe(415);
    expect((await run(post('{quebrado'), env)).status).toBe(400);
  });

  it('bloqueia robôs (honeypot e envio rápido demais) sem entregar', async () => {
    const env = makeEnv();
    const a = await run(post(payload({ website: 'http://spam' })), env);
    const b = await run(post(payload({ elapsedMs: 300 })), env);
    expect(a.status).toBe(400);
    expect(b.status).toBe(400);
    expect(await a.json()).toMatchObject({ error: 'spam' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('retorna 422 com os erros por campo quando os dados são inválidos', async () => {
    const r = await run(post(payload({ email: 'invalido', objective: 'curto' })), makeEnv());
    expect(r.status).toBe(422);
    const body = (await r.json()) as { errors: Record<string, string> };
    expect(body.errors).toMatchObject({ email: 'invalid_email', objective: 'too_short' });
  });

  it('retorna 503 not_configured quando não há destino configurado', async () => {
    const env = makeEnv({ RESEND_API_KEY: undefined, LEAD_FROM_EMAIL: '' });
    const r = await run(post(payload()), env);
    expect(r.status).toBe(503);
    expect(await r.json()).toMatchObject({ error: 'not_configured' });
  });

  it('entrega pelo Resend com Reply-To do visitante e remetente verificado', async () => {
    const r = await run(post(payload()), makeEnv());
    expect(r.status).toBe(200);
    expect(await r.json()).toMatchObject({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.resend.com/emails');
    const sent = JSON.parse(String(init.body));
    expect(sent.reply_to).toBe('maria@empresa.com');
    expect(sent.from).toBe('propostas@alexcassimiro.com.br');
    expect(sent.to).toEqual(['destino@teste.dev']);
    expect(sent.text).toContain('utm_source: google');
  });

  it('falha do provedor sem alternativa → 502 e nenhuma confirmação', async () => {
    fetchMock.mockResolvedValueOnce(new Response('erro', { status: 500 }));
    const r = await run(post(payload()), makeEnv());
    expect(r.status).toBe(502);
    expect(await r.json()).toMatchObject({ ok: false, error: 'delivery_failed' });
  });

  it('se o e-mail falhar mas o webhook aceitar, o lead é confirmado', async () => {
    fetchMock
      .mockResolvedValueOnce(new Response('erro', { status: 500 }))
      .mockResolvedValueOnce(new Response('ok', { status: 200 }));
    const r = await run(post(payload()), makeEnv({ LEAD_WEBHOOK_URL: 'https://hooks.teste.dev/lead' }));
    expect(r.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('não entrega duas vezes a mesma tentativa (idempotência) nem o mesmo conteúdo', async () => {
    const env = makeEnv({ LEADS: kv() });
    const first = await run(post(payload()), env);
    const again = await run(post(payload()), env);
    const sameContent = await run(post(payload({ idempotencyKey: 'outra-chave-999' })), env);
    expect(first.status).toBe(200);
    expect(await again.json()).toMatchObject({ ok: true, duplicate: true });
    expect(await sameContent.json()).toMatchObject({ ok: true, duplicate: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('respeita o limite de envios por IP', async () => {
    const env = makeEnv({ LEAD_RATE_LIMITER: { limit: vi.fn(async () => ({ success: false })) } });
    const r = await run(post(payload()), env);
    expect(r.status).toBe(429);
  });
});

describe('robots.txt', () => {
  it('bloqueia indexação fora do domínio canônico', async () => {
    const r = await run(new Request('https://alex-cassimiro.conta.workers.dev/robots.txt'), makeEnv());
    expect(await r.text()).toContain('Disallow: /');
    expect(r.headers.get('x-robots-tag')).toContain('noindex');
  });
  it('serve o robots.txt de produção no domínio canônico', async () => {
    const env = makeEnv();
    await run(new Request('https://alexcassimiro.com.br/robots.txt'), env);
    expect((env.ASSETS.fetch as ReturnType<typeof vi.fn>).mock.calls.length).toBe(1);
  });
});

describe('vídeo com Range', () => {
  const bytes = new Uint8Array(1000).map((_, i) => i % 256);
  const assetEnv = () =>
    makeEnv({
      ASSETS: {
        fetch: vi.fn(
          async () =>
            new Response(bytes, {
              status: 200,
              headers: { 'content-type': 'video/mp4', 'content-length': '1000' },
            }),
        ),
      },
    });
  it('responde 206 com o trecho pedido', async () => {
    const r = await run(
      new Request('https://alexcassimiro.com.br/video/hero.mp4', { headers: { range: 'bytes=100-199' } }),
      assetEnv(),
    );
    expect(r.status).toBe(206);
    expect(r.headers.get('content-range')).toBe('bytes 100-199/1000');
    const body = new Uint8Array(await r.arrayBuffer());
    expect(body.length).toBe(100);
    expect(body[0]).toBe(100);
  });
  it('aceita sufixo e intervalo aberto; recusa intervalo inválido', async () => {
    const tail = await run(
      new Request('https://alexcassimiro.com.br/video/hero.mp4', { headers: { range: 'bytes=-10' } }),
      assetEnv(),
    );
    expect(tail.headers.get('content-range')).toBe('bytes 990-999/1000');
    const open = await run(
      new Request('https://alexcassimiro.com.br/video/hero.mp4', { headers: { range: 'bytes=900-' } }),
      assetEnv(),
    );
    expect((await open.arrayBuffer()).byteLength).toBe(100);
    const bad = await run(
      new Request('https://alexcassimiro.com.br/video/hero.mp4', { headers: { range: 'bytes=5000-' } }),
      assetEnv(),
    );
    expect(bad.status).toBe(416);
  });
  it('recorta também quando o tamanho não vem no cabeçalho', async () => {
    const env = makeEnv({ ASSETS: { fetch: vi.fn(async () => new Response(bytes, { status: 200 })) } });
    const r = await run(
      new Request('https://alexcassimiro.com.br/video/hero.mp4', { headers: { range: 'bytes=10-19' } }),
      env,
    );
    expect(r.status).toBe(206);
    expect(r.headers.get('content-range')).toBe('bytes 10-19/1000');
    expect((await r.arrayBuffer()).byteLength).toBe(10);
  });
  it('sem Range devolve o arquivo inteiro anunciando suporte a Range', async () => {
    const r = await run(new Request('https://alexcassimiro.com.br/video/hero.mp4'), assetEnv());
    expect(r.status).toBe(200);
    expect(r.headers.get('accept-ranges')).toBe('bytes');
  });
});

describe('e-mail do lead', () => {
  it('escapa HTML vindo do formulário', () => {
    const { html } = buildEmail(
      { ...valid, objective: '<script>alert(1)</script> objetivo' },
      { siteLang: 'pt', page: '/' },
      'id-1',
    );
    expect(html).not.toContain('<script>');
    expect(html).toContain('&#60;script&#62;');
  });
});
