/**
 * Build de produção → dist/
 *  1. Copia public/ (imagens otimizadas) e as fontes woff2 auto-hospedadas
 *  2. Empacota o TypeScript do cliente (esbuild, minificado, com hash) e minifica o CSS (inline)
 *  3. Gera o HTML estático das 9 páginas × 3 idiomas + 404 localizadas
 *  4. Gera imagens Open Graph por URL, ícones e manifest
 *  5. Gera sitemap.xml (com hreflang), robots.txt, llms.txt, llms-full.txt, _headers (CSP por hash) e _redirects
 */
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import * as esbuild from 'esbuild';
import { dicts } from '../src/content/index.ts';
import type { Dict } from '../src/content/types.ts';
import { contact, facts, site } from '../src/site/config.ts';
import {
  hreflang,
  type Lang,
  langPrefix,
  langs,
  type PageId,
  pageIds,
  path,
  routes,
} from '../src/site/routes.ts';
import { type Assets, layout } from '../src/templates/layout.ts';
import { notFound, renderers } from '../src/templates/pages.ts';
import { ogImage, pngToIco, svgToPng } from './og.ts';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const publicDir = join(root, 'public');
const require = createRequire(import.meta.url);
const t0 = performance.now();

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(publicDir, dist, { recursive: true });

/* 1. Fontes */
mkdirSync(join(dist, 'fonts'), { recursive: true });
const fontFiles: [string, string][] = [
  ['@fontsource-variable/schibsted-grotesk', 'schibsted-grotesk-latin-wght-normal.woff2'],
  ['@fontsource/bodoni-moda', 'bodoni-moda-latin-500-normal.woff2'],
  ['@fontsource/bodoni-moda', 'bodoni-moda-latin-500-italic.woff2'],
];
for (const [pkg, file] of fontFiles) {
  cpSync(require.resolve(`${pkg}/files/${file}`), join(dist, 'fonts', file));
}

/* 2. JS e CSS */
const js = await esbuild.build({
  entryPoints: { app: join(root, 'src/client/main.ts') },
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020', 'safari15'],
  outdir: join(dist, 'assets'),
  entryNames: '[name].[hash]',
  metafile: true,
  legalComments: 'none',
  write: true,
});
const jsFile = Object.keys(js.metafile.outputs).find((f) => f.endsWith('.js'))!;
const jsUrl = `/assets/${jsFile.split('/').pop()}`;
const css = (
  await esbuild.transform(readFileSync(join(root, 'src/styles/main.css'), 'utf8'), {
    loader: 'css',
    minify: true,
    target: ['chrome100', 'safari15', 'firefox100'],
  })
).code.trim();

const inline = {
  boot: "document.documentElement.classList.add('js');setTimeout(function(){window.__ac||document.documentElement.classList.add('no-motion')},3500)",
  speculation: JSON.stringify({
    prerender: [
      {
        where: {
          and: [
            { href_matches: '/*' },
            { not: { href_matches: '/api/*' } },
            { not: { selector_matches: '[target=_blank]' } },
          ],
        },
        eagerness: 'moderate',
      },
    ],
  }),
  consent:
    "window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});",
};
const assets: Assets = { css, js: jsUrl, inline };

/* 3. HTML */
function write(file: string, content: string | Buffer) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}
function outFile(urlPath: string): string {
  return join(dist, urlPath, 'index.html');
}

let pagesWritten = 0;
for (const lang of langs) {
  const t = dicts[lang];
  for (const page of pageIds) {
    const ctx = { lang, t, page };
    const out = renderers[page](ctx);
    const html = layout(
      ctx,
      {
        title: out.title,
        description: out.description,
        body: out.body,
        page,
        jsonLd: out.jsonLd,
        preloadImage: out.preloadImage,
        bodyClass: out.bodyClass,
        ogType: out.ogType,
        noindex: out.noindex,
      },
      assets,
    );
    write(outFile(path(page, lang)), html);
    pagesWritten++;
  }
  const ctx404 = { lang, t, page: 'notFound' as const };
  const nf = notFound(ctx404);
  write(
    join(dist, langPrefix[lang], '404.html'),
    layout(
      ctx404,
      { title: nf.title, description: nf.description, body: nf.body, page: null, noindex: true },
      assets,
    ),
  );
}

/* 4. Open Graph, ícones e manifest */
const domain = site.url.replace(/^https?:\/\//, '');
const ogTitle = (t: Dict, page: PageId): string => {
  const p = t.pages;
  const map: Record<PageId, string> = {
    home: p.home.h1,
    talks: p.talks.h1,
    ei: p.ei.h1,
    english: p.english.h1,
    leadership: p.leadership.h1,
    consulting: p.consulting.h1,
    about: p.about.h1,
    contact: p.contact.h1,
    privacy: p.privacy.h1,
  };
  return map[page];
};
mkdirSync(join(dist, 'og'), { recursive: true });
await Promise.all(
  langs.flatMap((lang) =>
    pageIds.map(async (page) => {
      const t = dicts[lang];
      const buf = await ogImage({
        title: ogTitle(t, page),
        tagline: t.talkLanguagesLine,
        domain,
        publicDir,
      });
      write(join(dist, 'og', `${lang}-${page}.jpg`), buf);
    }),
  ),
);
const mono = readFileSync(join(publicDir, 'img', 'monogram.svg'), 'utf8');
write(join(dist, 'favicon.svg'), mono);
write(join(dist, 'apple-touch-icon.png'), svgToPng(mono, 180));
write(join(dist, 'icon-192.png'), svgToPng(mono, 192));
write(join(dist, 'icon-512.png'), svgToPng(mono, 512));
write(join(dist, 'favicon.ico'), pngToIco(svgToPng(mono, 32)));
write(
  join(dist, 'site.webmanifest'),
  JSON.stringify(
    {
      name: 'Alex Cassimiro · Palestrante corporativo',
      short_name: 'Alex Cassimiro',
      start_url: '/',
      display: 'minimal-ui',
      background_color: '#f2f5f9',
      theme_color: '#0a2850',
      lang: 'pt-BR',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      ],
    },
    null,
    2,
  ),
);

/* 5. Sitemap com alternâncias de idioma */
const abs = (p: string) => `${site.url}${p}`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pageIds
  .flatMap((page) =>
    langs.map((lang) => {
      const alts = langs
        .map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${abs(routes[page][l])}"/>`,
        )
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(routes[page].pt)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(routes[page][lang])}</loc>\n    <lastmod>${site.updated}</lastmod>\n${alts}\n  </url>`;
    }),
  )
  .join('\n')}
</urlset>
`;
write(join(dist, 'sitemap.xml'), sitemap);

/* robots.txt de produção (na prévia o Worker responde Disallow: /) */
const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
];
write(
  join(dist, 'robots.txt'),
  `# Alex Cassimiro — ${domain}
User-agent: *
Allow: /
Disallow: /api/

# Buscadores e assistentes de IA podem ler e citar o conteúdo público
${aiBots.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /
Disallow: /api/

Sitemap: ${abs('/sitemap.xml')}
`,
);

/* llms.txt e llms-full.txt (GEO/AEO): respostas diretas + mapa de páginas */
function pageList(t: Dict, lang: Lang): string {
  const desc = (p: PageId) => t.meta[p].description;
  return pageIds
    .filter((p) => p !== 'privacy')
    .map((p) => `- [${t.meta[p].title}](${abs(path(p, lang))}): ${desc(p)}`)
    .join('\n');
}
const pt = dicts.pt;
const en = dicts.en;
const es = dicts.es;
const llms = `# Alex Cassimiro

> ${pt.role}. Palestras corporativas sobre inteligência emocional e liderança, em português e inglês, para líderes e equipes de empresas. Também oferece trilhas de desenvolvimento de liderança e consultoria em pessoas, liderança e cultura. Site oficial: ${site.url}

## Respostas rápidas

- Quem é: Alex Cassimiro, palestrante corporativo e consultor em desenvolvimento de lideranças, pessoas e cultura, com mais de ${facts.yearsExperience} anos de experiência e mais de ${facts.leadersTrained.toLocaleString('pt-BR')} líderes treinados (fonte: ${facts.source} ${facts.referenceYear}).
- O que oferece: palestras corporativas (inteligência emocional, ética e integridade, saúde mental, álcool e outras drogas, cultura do cuidado ativo e impactos das apostas), trilhas de liderança e consultoria.
- Para quem: RH, T&D, People & Culture, comunicação interna, lideranças e organizadores de eventos corporativos.
- Idiomas das palestras: português e inglês. O site está em português, inglês e espanhol; as palestras não são conduzidas em espanhol.
- Evidências: palestra de inteligência emocional conduzida em inglês em São Paulo (SP) e palestra de inteligência emocional em Valinhos (SP). ${pt.pages.about.honor} Fonte oficial: ${facts.honor.sourceUrl}
- Como contratar: enviar o briefing pelo formulário (${abs(path('contact', 'pt'))}), WhatsApp (${contact.whatsappDisplay}) ou e-mail (${contact.email}). Alex alinha objetivo, público, idioma e formato e envia uma proposta conforme o escopo. Não há preços públicos.

## Páginas (português)

${pageList(pt, 'pt')}

## Pages (English)

${pageList(en, 'en')}

## Páginas (español)

${pageList(es, 'es')}

## Contato

- WhatsApp: https://wa.me/${contact.whatsappE164}
- E-mail: ${contact.email}
- LinkedIn: ${contact.linkedin}
- Instagram: ${contact.instagram}

## Optional

- [Conteúdo completo em texto](${abs('/llms-full.txt')})
- [Sitemap](${abs('/sitemap.xml')})
`;
write(join(dist, 'llms.txt'), llms);

function fullText(t: Dict, lang: Lang): string {
  const P = t.pages;
  const faq = (items: { q: string; a: string }[]) => items.map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  const items = (list: { title: string; text: string }[]) =>
    list.map((i) => `- **${i.title}:** ${i.text}`).join('\n');
  const themes = t.themes
    .map(
      (th) =>
        `### ${th.title} — ${th.subtitle}\n${th.summary}\n\n- ${t.themeLabels.forWhom}: ${th.forWhom}\n- ${t.themeLabels.whenToHire}: ${th.whenToHire}\n- ${t.themeLabels.covers}: ${th.covers.join('; ')}${th.note ? `\n- ${t.themeLabels.scope}: ${th.note}` : ''}`,
    )
    .join('\n\n');
  return `# ${t.meta.home.title}
URL: ${abs(path('home', lang))}

## ${P.home.h1}
${P.home.support}

## ${P.home.english.title}
${P.home.english.text}

${t.stats.years} ${t.stats.yearsLabel}. ${t.stats.leaders} ${t.stats.leadersLabel}. (${t.stats.source.replace('{year}', String(facts.referenceYear))})

## ${P.talks.h1}
URL: ${abs(path('talks', lang))}
${P.talks.intro}

${themes}

## ${P.ei.h1}
URL: ${abs(path('ei', lang))}
${P.ei.intro}

${items(P.ei.situations)}

${P.ei.evidenceText}

## ${P.english.h1}
URL: ${abs(path('english', lang))}
${P.english.intro}

${P.english.recordText}

${P.english.topicsText}

## ${P.leadership.h1}
URL: ${abs(path('leadership', lang))}
${P.leadership.intro}

${P.leadership.compare.map((r) => `- ${r.aspect}: ${P.leadership.compareHead.talk} — ${r.talk}; ${P.leadership.compareHead.program} — ${r.program}`).join('\n')}

${P.leadership.journeyIntro}
${P.leadership.journey.map((m, i) => `${i + 1}. ${m.title}: ${m.text}`).join('\n')}

## ${P.consulting.h1}
URL: ${abs(path('consulting', lang))}
${P.consulting.intro}

${items(P.consulting.process)}

## ${P.about.h1}
URL: ${abs(path('about', lang))}
${P.about.bio.join('\n\n')}

${P.about.honor} (${facts.honor.sourceUrl})

## ${P.home.hire.title}
${items(t.hireSteps)}

## ${P.home.faqTitle}
${faq([...P.home.faq, ...P.talks.faq, ...P.ei.faq, ...P.english.faq, ...P.leadership.faq, ...P.consulting.faq])}

## ${P.contact.h1}
URL: ${abs(path('contact', lang))}
${P.contact.intro}
WhatsApp: ${contact.whatsappDisplay} · E-mail: ${contact.email}
`;
}
write(join(dist, 'llms-full.txt'), langs.map((l) => fullText(dicts[l], l)).join('\n\n---\n\n'));

/* _headers (cache + segurança + CSP com hash dos scripts inline) e _redirects */
const hash = (s: string) => `'sha256-${createHash('sha256').update(s).digest('base64')}'`;
const scriptHashes = [inline.boot, inline.speculation, ...(site.gtmId ? [inline.consent] : [])]
  .map(hash)
  .join(' ');
const csp = [
  "default-src 'self'",
  `script-src 'self' ${scriptHashes} https://www.googletagmanager.com https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://challenges.cloudflare.com",
  'frame-src https://challenges.cloudflare.com https://www.googletagmanager.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');
write(
  join(dist, '_headers'),
  `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Cross-Origin-Opener-Policy: same-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: ${csp}

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *

/img/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400

/og/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400

/llms.txt
  Content-Type: text/plain; charset=utf-8

/llms-full.txt
  Content-Type: text/plain; charset=utf-8

# Prévias em *.workers.dev nunca são indexadas
https://:version.:account.workers.dev/*
  X-Robots-Tag: noindex, nofollow
`,
);
write(
  join(dist, '_redirects'),
  `/proposta ${path('contact', 'pt')} 301
/orcamento ${path('contact', 'pt')} 301
/en/proposal ${path('contact', 'en')} 301
/es/propuesta ${path('contact', 'es')} 301
/whatsapp https://wa.me/${contact.whatsappE164} 302
/linkedin ${contact.linkedin} 302
/instagram ${contact.instagram} 302
`,
);

if (!existsSync(join(dist, 'robots.txt'))) throw new Error('robots.txt não gerado');
console.log(
  `build ok · ${pagesWritten} páginas + 3 × 404 · ${langs.length * pageIds.length} OG · css ${(css.length / 1024).toFixed(1)} KB inline · js ${jsUrl} · ${((performance.now() - t0) / 1000).toFixed(1)} s`,
);
