/**
 * POST /api/lead — pedido de proposta.
 *
 * Ordem: método/tipo/tamanho → origem → limite por IP → antirrobô (honeypot, tempo,
 * Turnstile opcional) → validação → idempotência/duplicidade → entrega.
 * Só responde ok:true quando ao menos um destino durável aceitou o lead
 * (Resend, webhook ou KV). Sem destino configurado: 503 not_configured.
 */
import { type LeadInput, type LeadMeta, MIN_FILL_MS, sanitizeMeta, validateLead } from '../shared/lead.ts';
import type { AppEnv } from './index.ts';

const MAX_BYTES = 16 * 1024;
const DEDUPE_TTL = 60 * 60 * 24; // 24 h para a chave de idempotência
const CONTENT_TTL = 60 * 10; // 10 min para o mesmo e-mail + objetivo

type Json = Record<string, unknown>;

function reply(status: number, body: Json): Response {
  return Response.json(body, {
    status,
    headers: { 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });
}

function log(level: 'info' | 'warn' | 'error', message: string, data: Json = {}) {
  // Logs estruturados, sem dados pessoais
  console[level](JSON.stringify({ level, message, ...data }));
}

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

/* ---------- Deduplicação: KV (global) quando houver; senão Cache API (por região) ---------- */
interface Dedupe {
  seen(key: string): Promise<boolean>;
  mark(key: string, ttl: number): Promise<void>;
}

function dedupeStore(env: AppEnv, origin: string): Dedupe {
  if (env.LEADS) {
    const kv = env.LEADS;
    return {
      seen: async (k) => (await kv.get(`dedupe:${k}`)) !== null,
      mark: (k, ttl) => kv.put(`dedupe:${k}`, '1', { expirationTtl: ttl }),
    };
  }
  const cache = (caches as unknown as { default: Cache }).default;
  const req = (k: string) => new Request(`${origin}/__dedupe/${k}`);
  return {
    seen: async (k) => !!(await cache.match(req(k))),
    mark: (k, ttl) =>
      cache.put(req(k), new Response('1', { headers: { 'cache-control': `max-age=${ttl}` } })),
  };
}

/* ---------- Turnstile ---------- */
async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const data = (await r.json().catch(() => ({}))) as { success?: boolean };
  return data.success === true;
}

/* ---------- Conteúdo do e-mail ---------- */
const labelsPt: Record<keyof LeadInput, string> = {
  name: 'Nome',
  company: 'Empresa',
  email: 'E-mail',
  objective: 'Objetivo do evento',
  phone: 'Telefone',
  topic: 'Tema',
  date: 'Data ou mês previsto',
  location: 'Cidade e país',
  format: 'Formato',
  audience: 'Estimativa de público',
  talkLanguage: 'Idioma da palestra',
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function buildEmail(lead: LeadInput, meta: LeadMeta, id: string) {
  const rows = (Object.keys(labelsPt) as (keyof LeadInput)[])
    .filter((k) => lead[k])
    .map((k) => [labelsPt[k], String(lead[k])] as const);
  const metaRows: [string, string][] = [
    ['Idioma do site', meta.siteLang],
    ['Página do envio', meta.page],
  ];
  if (meta.ctaPosition) metaRows.push(['Último CTA clicado', meta.ctaPosition]);
  if (meta.landingPage) metaRows.push(['Página de entrada', meta.landingPage]);
  if (meta.referrer) metaRows.push(['Origem', meta.referrer]);
  for (const [k, v] of Object.entries(meta.utm ?? {})) metaRows.push([k, v]);
  metaRows.push(['ID do pedido', id]);

  const subject = `Pedido de proposta — ${lead.company}${lead.topic ? ` (${lead.topic})` : ''}`;
  const text = [...rows, ['—', '—'] as const, ...metaRows].map(([k, v]) => `${k}: ${v}`).join('\n');
  const tr = (k: string, v: string) =>
    `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top;color:#55657d;font-weight:600">${esc(k)}</th><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0e2240"><h2 style="font-size:18px">Novo pedido de proposta pelo site</h2><table cellspacing="0" cellpadding="0">${rows.map(([k, v]) => tr(k, v)).join('')}</table><hr style="border:0;border-top:1px solid #d3dce8;margin:18px 0"><table cellspacing="0" cellpadding="0" style="font-size:13px">${metaRows.map(([k, v]) => tr(k, v)).join('')}</table><p style="font-size:13px;color:#55657d">Responda a este e-mail para falar direto com ${esc(lead.name)}.</p></div>`;
  return { subject, text, html };
}

/* ---------- Destinos ---------- */
interface Delivery {
  channel: 'resend' | 'webhook' | 'kv';
  ok: boolean;
  status?: number;
}

async function sendResend(env: AppEnv, lead: LeadInput, meta: LeadMeta, id: string): Promise<Delivery> {
  const { subject, text, html } = buildEmail(lead, meta, id);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
      'idempotency-key': id,
    },
    body: JSON.stringify({
      from: env.LEAD_FROM_EMAIL,
      to: [env.LEAD_TO_EMAIL],
      reply_to: lead.email,
      subject,
      text,
      html,
      tags: [{ name: 'source', value: 'site' }],
    }),
  });
  return { channel: 'resend', ok: r.ok, status: r.status };
}

async function sendWebhook(env: AppEnv, lead: LeadInput, meta: LeadMeta, id: string): Promise<Delivery> {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (env.LEAD_WEBHOOK_AUTH) headers.authorization = env.LEAD_WEBHOOK_AUTH;
  const r = await fetch(env.LEAD_WEBHOOK_URL!, {
    method: 'POST',
    headers,
    body: JSON.stringify({ id, receivedAt: new Date().toISOString(), lead, meta }),
  });
  return { channel: 'webhook', ok: r.ok, status: r.status };
}

async function storeKv(env: AppEnv, lead: LeadInput, meta: LeadMeta, id: string): Promise<Delivery> {
  await env.LEADS!.put(`lead:${new Date().toISOString()}:${id}`, JSON.stringify({ id, lead, meta }), {
    expirationTtl: 60 * 60 * 24 * 365,
  });
  return { channel: 'kv', ok: true };
}

export function configuredChannels(env: AppEnv): Delivery['channel'][] {
  const ch: Delivery['channel'][] = [];
  if (env.RESEND_API_KEY && env.LEAD_FROM_EMAIL && env.LEAD_TO_EMAIL) ch.push('resend');
  if (env.LEAD_WEBHOOK_URL) ch.push('webhook');
  if (env.LEADS) ch.push('kv');
  return ch;
}

/* ---------- Handler ---------- */
export async function handleLead(request: Request, env: AppEnv, _ctx: ExecutionContext): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { allow: 'POST' } });
  }
  const url = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) return reply(403, { ok: false, error: 'forbidden_origin' });
  if (!(request.headers.get('content-type') ?? '').includes('application/json')) {
    return reply(415, { ok: false, error: 'unsupported_media_type' });
  }
  const length = Number(request.headers.get('content-length') ?? '0');
  if (length > MAX_BYTES) return reply(413, { ok: false, error: 'too_large' });

  const ip = request.headers.get('cf-connecting-ip') ?? '';
  if (env.LEAD_RATE_LIMITER) {
    const { success } = await env.LEAD_RATE_LIMITER.limit({ key: ip || 'unknown' });
    if (!success) return reply(429, { ok: false, error: 'rate_limited' });
  }

  let raw: Json;
  try {
    const text = await request.text();
    if (text.length > MAX_BYTES) return reply(413, { ok: false, error: 'too_large' });
    raw = JSON.parse(text) as Json;
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('not an object');
  } catch {
    return reply(400, { ok: false, error: 'invalid_json' });
  }

  // Antirrobô: honeypot preenchido ou envio rápido demais
  const elapsed = Number(raw.elapsedMs ?? 0);
  if ((typeof raw.website === 'string' && raw.website.trim() !== '') || !(elapsed >= MIN_FILL_MS)) {
    log('warn', 'lead_rejected_spam', { reason: raw.website ? 'honeypot' : 'too_fast' });
    return reply(400, { ok: false, error: 'spam' });
  }
  if (env.TURNSTILE_SECRET_KEY) {
    const passed = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, String(raw.turnstileToken ?? ''), ip);
    if (!passed) return reply(400, { ok: false, error: 'challenge' });
  }

  const result = validateLead(raw);
  if (!result.ok) return reply(422, { ok: false, error: 'validation', errors: result.errors });
  const lead = result.data;
  const meta = sanitizeMeta((raw.meta ?? {}) as Json);

  const channels = configuredChannels(env);
  if (!channels.length) {
    log('warn', 'lead_not_configured');
    return reply(503, { ok: false, error: 'not_configured' });
  }

  const idem =
    typeof raw.idempotencyKey === 'string' && /^[\w-]{8,64}$/.test(raw.idempotencyKey)
      ? raw.idempotencyKey
      : '';
  const contentKey = await sha256(`${lead.email}|${lead.objective}`);
  const dedupe = dedupeStore(env, url.origin);
  if ((idem && (await dedupe.seen(`k:${idem}`))) || (await dedupe.seen(`c:${contentKey}`))) {
    log('info', 'lead_duplicate', { idem: !!idem });
    return reply(200, { ok: true, duplicate: true });
  }

  const id = idem || crypto.randomUUID();
  const jobs: Promise<Delivery>[] = [];
  if (channels.includes('resend')) jobs.push(sendResend(env, lead, meta, id));
  if (channels.includes('webhook')) jobs.push(sendWebhook(env, lead, meta, id));
  if (channels.includes('kv')) jobs.push(storeKv(env, lead, meta, id));
  const settled = await Promise.allSettled(jobs);
  const deliveries = settled.map((s, i) =>
    s.status === 'fulfilled' ? s.value : ({ channel: channels[i]!, ok: false } as Delivery),
  );
  const accepted = deliveries.some((d) => d.ok);
  log(accepted ? 'info' : 'error', accepted ? 'lead_accepted' : 'lead_delivery_failed', {
    id,
    siteLang: meta.siteLang,
    topic: lead.topic ?? null,
    deliveries: deliveries.map((d) => ({ channel: d.channel, ok: d.ok, status: d.status ?? null })),
  });
  if (!accepted) return reply(502, { ok: false, error: 'delivery_failed' });

  await Promise.all([
    idem ? dedupe.mark(`k:${idem}`, DEDUPE_TTL) : Promise.resolve(),
    dedupe.mark(`c:${contentKey}`, CONTENT_TTL),
  ]).catch(() => undefined);
  return reply(200, { ok: true, id });
}
