import type { Faq } from '../content/types.ts';
import { contact, facts, site } from '../site/config.ts';
import { hreflang, htmlLang, type Lang, langs, type PageId, path } from '../site/routes.ts';
import { imgUrl } from './components.ts';
import type { Ctx } from './util.ts';

export const personId = `${site.url}/#alex`;
export const websiteId = `${site.url}/#website`;

export function abs(p: string): string {
  return `${site.url}${p}`;
}

export function pageUrl(page: PageId, lang: Lang): string {
  return abs(path(page, lang));
}

export function ogImage(page: PageId | 'notFound', lang: Lang): string {
  return abs(`/og/${lang}-${page === 'notFound' ? 'home' : page}.jpg`);
}

/** Links de hreflang autorreferentes e recíprocos + x-default (português). */
export function alternates(page: PageId): string {
  const links = langs.map(
    (l) => `<link rel="alternate" hreflang="${hreflang[l]}" href="${pageUrl(page, l)}">`,
  );
  links.push(`<link rel="alternate" hreflang="x-default" href="${pageUrl(page, 'pt')}">`);
  return links.join('');
}

function person(ctx: Ctx, full: boolean): Record<string, unknown> {
  const p: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: 'Alex Cassimiro',
    jobTitle: ctx.t.role,
    description: ctx.t.footer.tagline,
    url: pageUrl('about', ctx.lang),
    image: abs(imgUrl('heroPortrait')),
    email: `mailto:${contact.email}`,
    telephone: `+${contact.whatsappE164}`,
    sameAs: [contact.instagram, contact.linkedin],
    knowsLanguage: [
      { '@type': 'Language', name: 'Portuguese', alternateName: 'pt' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    knowsAbout: ctx.t.themes.map((t) => t.title).concat([ctx.t.nav.leadership, ctx.t.nav.consulting]),
  };
  if (full) {
    p.award = ctx.t.pages.about.honor;
  }
  return p;
}

export interface LdOpts {
  page: PageId;
  title: string;
  description: string;
  breadcrumb?: { name: string; url: string }[];
  faq?: Faq[];
  service?: { name: string; description: string; languages?: string[] };
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'ProfilePage' | 'CollectionPage';
  image?: string;
  video?: { name: string; description: string; contentUrl: string; thumbnailUrl: string; duration: string };
}

export function jsonLd(ctx: Ctx, o: LdOpts): string {
  const url = pageUrl(o.page, ctx.lang);
  const graph: Record<string, unknown>[] = [];
  graph.push({
    '@type': 'WebSite',
    '@id': websiteId,
    url: abs('/'),
    name: 'Alex Cassimiro',
    inLanguage: langs.map((l) => htmlLang[l]),
    publisher: { '@id': personId },
  });
  graph.push(person(ctx, o.page === 'about'));
  const webPage: Record<string, unknown> = {
    '@type': o.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: o.title,
    description: o.description,
    inLanguage: htmlLang[ctx.lang],
    isPartOf: { '@id': websiteId },
    about: { '@id': personId },
    dateModified: site.updated,
  };
  if (o.page === 'about') webPage.mainEntity = { '@id': personId };
  if (o.image) webPage.primaryImageOfPage = { '@type': 'ImageObject', url: o.image };
  if (o.breadcrumb) webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
  graph.push(webPage);
  if (o.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: o.breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }
  if (o.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: htmlLang[ctx.lang],
      mainEntity: o.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  if (o.video) {
    graph.push({
      '@type': 'VideoObject',
      '@id': `${url}#video`,
      ...o.video,
      uploadDate: site.updated,
      inLanguage: 'pt-BR',
      publisher: { '@id': personId },
    });
  }
  if (o.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: o.service.name,
      description: o.service.description,
      provider: { '@id': personId },
      url,
      inLanguage: htmlLang[ctx.lang],
      ...(o.service.languages ? { availableLanguage: o.service.languages } : {}),
    });
  }
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

export const talkLanguagesLd = facts.talkLanguages.map((l) => (l === 'pt' ? 'Portuguese' : 'English'));
