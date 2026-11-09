import { contact, site } from '../site/config.ts';
import { htmlLang, type Lang, langs, ogLocale, type PageId, path, routes } from '../site/routes.ts';
import { btnProposal, waHref } from './components.ts';
import { icons } from './icons.ts';
import { abs, alternates, ogImage } from './seo.ts';
import { type Ctx, e } from './util.ts';

export interface Assets {
  css: string;
  js: string;
  /** Scripts inline cujo hash entra na CSP */
  inline: { boot: string; speculation: string; consent: string };
}

export interface LayoutOpts {
  title: string;
  description: string;
  body: string;
  /** Página com equivalentes nos 3 idiomas (null para 404) */
  page: PageId | null;
  jsonLd?: string;
  preloadImage?: { avif: string; sizes: string };
  noindex?: boolean;
  bodyClass?: string;
  ogType?: 'website' | 'profile';
}

const fontPreloads = [
  '/fonts/schibsted-grotesk-latin-wght-normal.woff2',
  '/fonts/bodoni-moda-latin-500-normal.woff2',
];

const langCode: Record<Lang, string> = { pt: 'PT', en: 'EN', es: 'ES' };
const langNames: Record<Lang, string> = { pt: 'Português', en: 'English', es: 'Español' };

function langSwitch(ctx: Ctx, page: PageId | null, cls: string, full = false): string {
  return `<ul class="${cls}" role="list">${langs
    .map((l) => {
      const href = page ? routes[page][l] : path('home', l);
      const current = l === ctx.lang;
      return `<li><a href="${href}" hreflang="${htmlLang[l]}" lang="${htmlLang[l]}"${current ? ' aria-current="true"' : ''} title="${langNames[l]}" aria-label="${langNames[l]}" data-lang-switch>${full ? langNames[l] : langCode[l]}</a></li>`;
    })
    .join('')}</ul>`;
}

function navItems(ctx: Ctx) {
  const n = ctx.t.nav;
  return [
    { id: 'talks' as const, label: n.talks },
    { id: 'english' as const, label: n.english },
    { id: 'leadership' as const, label: n.leadership },
    { id: 'consulting' as const, label: n.consulting },
    { id: 'about' as const, label: n.about },
  ];
}

function isCurrent(ctx: Ctx, id: PageId): boolean {
  return ctx.page === id || (id === 'talks' && ctx.page === 'ei');
}

function header(ctx: Ctx, page: PageId | null): string {
  const n = ctx.t.nav;
  const items = navItems(ctx)
    .map(
      (i) =>
        `<li><a href="${path(i.id, ctx.lang)}"${isCurrent(ctx, i.id) ? ' aria-current="page"' : ''}>${e(i.label)}</a></li>`,
    )
    .join('');
  return `<header class="site-header" data-header><div class="wrap header-in"><a class="brand" href="${path('home', ctx.lang)}" aria-label="Alex Cassimiro — ${e(n.home)}"><img class="brand-logo" src="/img/logo-light.svg" width="160" height="45" alt=""></a><nav class="nav" aria-label="${e(n.label)}"><ul role="list">${items}</ul></nav><div class="header-act"><nav class="lang" aria-label="${e(n.language)}">${langSwitch(ctx, page, 'lang-list')}</nav>${btnProposal(ctx, 'header', { variant: 'btn-primary btn-sm' })}<button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" data-menu-open><span class="sr-only">${e(n.menuOpen)}</span>${icons.menu()}</button></div></div></header><div class="menu" id="menu" hidden data-menu><div class="menu-in"><div class="menu-top"><img class="brand-logo" src="/img/logo-dark.svg" width="160" height="45" alt="Alex Cassimiro"><button class="menu-close" type="button" data-menu-close><span class="sr-only">${e(n.menuClose)}</span>${icons.close()}</button></div><nav aria-label="${e(n.label)}"><ul class="menu-list" role="list"><li><a href="${path('home', ctx.lang)}">${e(n.home)}</a></li>${items}<li><a href="${path('contact', ctx.lang)}">${e(n.contact)}</a></li></ul></nav><div class="menu-foot"><nav aria-label="${e(n.language)}">${langSwitch(ctx, page, 'lang-list lang-list--full', true)}</nav>${btnProposal(ctx, 'menu', { variant: 'btn-primary' })}</div></div></div>`;
}

function footer(ctx: Ctx, page: PageId | null): string {
  const t = ctx.t;
  const pages: PageId[] = ['talks', 'ei', 'english', 'leadership', 'consulting', 'about', 'contact'];
  const labels: Record<string, string> = {
    talks: t.nav.talks,
    ei: t.themes[0]!.title,
    english: t.nav.english,
    leadership: t.nav.leadership,
    consulting: t.nav.consulting,
    about: t.nav.about,
    contact: t.nav.contact,
  };
  const year = new Date(site.updated).getFullYear();
  return `<footer class="site-footer"><div class="wrap foot-grid"><div class="foot-brand"><a class="brand brand--light" href="${path('home', ctx.lang)}" aria-label="Alex Cassimiro — ${e(t.nav.home)}"><img class="brand-logo brand-logo--lg" src="/img/logo-dark.svg" width="200" height="56" alt=""></a><p>${e(t.footer.tagline)}</p></div><div><h2 class="foot-h">${e(t.footer.contactTitle)}</h2><ul class="foot-list" role="list"><li><a href="${e(waHref(ctx))}" target="_blank" rel="noopener" data-cta="footer" data-event="whatsapp_click">${icons.whatsapp(18)}<span>WhatsApp ${e(contact.whatsappDisplay)}</span></a></li><li><a href="mailto:${contact.email}" data-cta="footer" data-event="email_click">${icons.mail(18)}<span>${e(contact.email)}</span></a></li></ul><h2 class="foot-h">${e(t.footer.followTitle)}</h2><ul class="foot-social" role="list"><li><a href="${contact.linkedin}" target="_blank" rel="noopener me" aria-label="${e(t.footer.linkedinLabel)}">${icons.linkedin(20)}<span>LinkedIn</span></a></li><li><a href="${contact.instagram}" target="_blank" rel="noopener me" aria-label="${e(t.footer.instagramLabel)}">${icons.instagram(20)}<span>Instagram</span></a></li></ul></div><div><h2 class="foot-h">${e(t.footer.pagesTitle)}</h2><ul class="foot-list" role="list">${pages.map((p) => `<li><a href="${path(p, ctx.lang)}">${e(labels[p]!)}</a></li>`).join('')}</ul></div><div><h2 class="foot-h">${e(t.footer.languagesTitle)}</h2>${langSwitch(ctx, page, 'foot-list', true)}</div></div><div class="wrap foot-legal"><p>© ${year} Alex Cassimiro. ${e(t.footer.rights)}</p><a href="${path('privacy', ctx.lang)}">${e(t.footer.privacy)}</a><p class="foot-credit">${e(t.footer.creditPrefix)} <a href="https://p12digital.com.br/" target="_blank" rel="noopener">P12 Digital</a></p></div></footer>`;
}

function floating(ctx: Ctx): string {
  return `<a class="wa-float" href="${e(waHref(ctx))}" target="_blank" rel="noopener" data-cta="floating" data-event="whatsapp_click" aria-label="${e(ctx.t.whatsapp.floatingLabel)}">${icons.whatsapp(26)}</a><div class="sticky-cta" data-sticky-cta inert>${btnProposal(ctx, 'sticky', { variant: 'btn-primary' })}<a class="btn btn-wa" href="${e(waHref(ctx))}" target="_blank" rel="noopener" data-cta="sticky" data-event="whatsapp_click" aria-label="${e(ctx.t.whatsapp.floatingLabel)}">${icons.whatsapp(22)}</a></div>`;
}

function consentBanner(ctx: Ctx): string {
  if (!site.gtmId) return '';
  const c = ctx.t.consent;
  return `<div class="consent" role="region" aria-label="Cookies" hidden data-consent><p>${e(c.text)} <a href="${path('privacy', ctx.lang)}">${e(c.policy)}</a></p><div class="btn-row"><button type="button" class="btn btn-primary btn-sm" data-consent-accept>${e(c.accept)}</button><button type="button" class="btn btn-ghost btn-sm" data-consent-reject>${e(c.reject)}</button></div></div>`;
}

export function layout(ctx: Ctx, o: LayoutOpts, assets: Assets): string {
  const canonical = o.page ? abs(path(o.page, ctx.lang)) : null;
  const noindex = o.noindex || site.noindex;
  const og = ogImage(o.page ?? 'notFound', ctx.lang);
  const altLocales = langs
    .filter((l) => l !== ctx.lang)
    .map((l) => `<meta property="og:locale:alternate" content="${ogLocale[l]}">`)
    .join('');
  const preload = o.preloadImage
    ? `<link rel="preload" as="image" type="image/avif" imagesrcset="${o.preloadImage.avif}" imagesizes="${e(o.preloadImage.sizes)}" fetchpriority="high">`
    : '';
  const gtm = site.gtmId ? `<script>${assets.inline.consent}</script>` : '';
  return `<!doctype html><html lang="${htmlLang[ctx.lang]}" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>${e(o.title)}</title><meta name="description" content="${e(o.description)}">${canonical ? `<link rel="canonical" href="${canonical}">` : ''}${o.page ? alternates(o.page) : ''}<meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}"><meta name="author" content="Alex Cassimiro"><meta name="theme-color" content="#0a2850"><meta name="color-scheme" content="light">${fontPreloads.map((f) => `<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>`).join('')}${preload}<link rel="dns-prefetch" href="https://wa.me"><style>${assets.css}</style><script>${assets.inline.boot}</script><script type="module" src="${assets.js}"></script><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta property="og:type" content="${o.ogType ?? 'website'}"><meta property="og:site_name" content="Alex Cassimiro"><meta property="og:title" content="${e(o.title)}"><meta property="og:description" content="${e(o.description)}">${canonical ? `<meta property="og:url" content="${canonical}">` : ''}<meta property="og:image" content="${og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${e(o.title)}"><meta property="og:locale" content="${ogLocale[ctx.lang]}">${altLocales}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(o.title)}"><meta name="twitter:description" content="${e(o.description)}"><meta name="twitter:image" content="${og}">${o.jsonLd ?? ''}<script type="speculationrules">${assets.inline.speculation}</script>${gtm}</head><body class="${e(o.bodyClass ?? '')}" data-lang="${ctx.lang}" data-page="${ctx.page}"${site.gtmId ? ` data-gtm="${e(site.gtmId)}"` : ''}><a class="skip" href="#main">${e(ctx.t.skipLink)}</a>${header(ctx, o.page)}<main id="main" tabindex="-1">${o.body}</main>${footer(ctx, o.page)}${floating(ctx)}${consentBanner(ctx)}</body></html>`;
}
