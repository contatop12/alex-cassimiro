/**
 * Worker do site. Serve os arquivos estáticos (dist/) via binding ASSETS e roda
 * primeiro apenas para:
 *   - POST /api/lead  → pedido de proposta (validação, antiabuso, entrega)
 *   - /robots.txt     → bloqueia indexação fora do domínio canônico (prévias)
 */
import { handleLead } from './lead.ts';

export interface AppEnv extends Env {
  /* Segredos opcionais (wrangler secret put …) */
  RESEND_API_KEY?: string;
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_AUTH?: string;
  TURNSTILE_SECRET_KEY?: string;
  /* Binding opcional de KV para armazenamento durável e deduplicação */
  LEADS?: KVNamespace;
}

function isCanonicalHost(url: URL, env: AppEnv): boolean {
  try {
    return url.hostname === new URL(env.SITE_URL).hostname;
  } catch {
    return false;
  }
}

async function robots(request: Request, url: URL, env: AppEnv): Promise<Response> {
  if (isCanonicalHost(url, env)) return env.ASSETS.fetch(request);
  return new Response(
    '# Prévia: indexação bloqueada fora do domínio canônico\nUser-agent: *\nDisallow: /\n',
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'no-store',
      },
    },
  );
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') return robots(request, url, env);
    if (url.pathname === '/api/lead') return handleLead(request, env, ctx);
    if (url.pathname.startsWith('/api/')) {
      return Response.json({ ok: false, error: 'not_found' }, { status: 404 });
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<AppEnv>;
