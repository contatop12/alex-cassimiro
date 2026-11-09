/**
 * Equivalência central de rotas entre idiomas.
 * Português na raiz; inglês em /en/; espanhol em /es/.
 */

export const langs = ['pt', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];

export const pageIds = [
  'home',
  'talks',
  'ei',
  'english',
  'leadership',
  'consulting',
  'about',
  'contact',
  'privacy',
] as const;
export type PageId = (typeof pageIds)[number];

export const routes: Record<PageId, Record<Lang, string>> = {
  home: { pt: '/', en: '/en/', es: '/es/' },
  talks: { pt: '/palestras/', en: '/en/talks/', es: '/es/conferencias/' },
  ei: {
    pt: '/palestras/inteligencia-emocional/',
    en: '/en/talks/emotional-intelligence/',
    es: '/es/conferencias/inteligencia-emocional/',
  },
  english: {
    pt: '/palestras-em-ingles/',
    en: '/en/english-speaking-engagements/',
    es: '/es/conferencias-en-ingles/',
  },
  leadership: {
    pt: '/trilhas-de-lideranca/',
    en: '/en/leadership-development/',
    es: '/es/desarrollo-de-liderazgo/',
  },
  consulting: { pt: '/consultoria/', en: '/en/consulting/', es: '/es/consultoria/' },
  about: { pt: '/sobre/', en: '/en/about/', es: '/es/sobre-alex/' },
  contact: { pt: '/contato/', en: '/en/contact/', es: '/es/contacto/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/', es: '/es/privacidad/' },
};

/** Valores de hreflang por idioma. */
export const hreflang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
/** Atributo lang do <html>. */
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
/** Prefixo da pasta de saída (404 localizada é servida pela 404.html mais próxima). */
export const langPrefix: Record<Lang, string> = { pt: '/', en: '/en/', es: '/es/' };

export function path(page: PageId, lang: Lang): string {
  return routes[page][lang];
}

/** Páginas que são pais na trilha de navegação (breadcrumb). */
export const parents: Partial<Record<PageId, PageId>> = {
  ei: 'talks',
};

/** Ordem das páginas no sitemap e prioridade relativa. */
export const sitemapPriority: Record<PageId, number> = {
  home: 1,
  talks: 0.9,
  ei: 0.9,
  english: 0.9,
  leadership: 0.8,
  consulting: 0.7,
  about: 0.7,
  contact: 0.8,
  privacy: 0.2,
};
