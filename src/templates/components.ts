import type { Faq, ImageText, Item, Theme } from '../content/types.ts';
import { contact, publish, whatsappUrl } from '../site/config.ts';
import generated from '../site/images.generated.json' with { type: 'json' };
import type { GeneratedImage, ImageKey } from '../site/images.ts';
import { path } from '../site/routes.ts';
import { icons } from './icons.ts';
import { type Ctx, e, fill, join } from './util.ts';

const images = generated as Record<ImageKey, GeneratedImage>;

/** Textos da imagem já resolvidos conforme as permissões de publicação. */
export function imageText(ctx: Ctx, key: ImageKey): { alt: string; caption?: string } {
  const it: ImageText | undefined = ctx.t.images[key];
  if (!it) return { alt: '' };
  const named =
    (key.startsWith('talk') && publish.kurarayName) || (key.startsWith('valinhos') && publish.voilierName);
  const alt = (named && it.altNamed) || it.alt;
  const caption = (named && it.captionNamed) || it.caption;
  return caption ? { alt, caption } : { alt };
}

export function srcset(key: ImageKey, format: 'avif' | 'webp'): string {
  return images[key].widths.map((w) => `/img/${key}-${w}.${format} ${w}w`).join(', ');
}

export function imgUrl(key: ImageKey, width?: number): string {
  const img = images[key];
  const w = width && img.widths.includes(width) ? width : img.widths[img.widths.length - 1]!;
  return `/img/${key}-${w}.webp`;
}

export function imageSize(key: ImageKey) {
  return images[key];
}

interface PictureOpts {
  sizes: string;
  eager?: boolean;
  className?: string;
  alt?: string;
}

/** <picture> responsivo com AVIF/WebP, dimensões fixas (evita CLS) e placeholder borrado. */
export function picture(ctx: Ctx, key: ImageKey, opts: PictureOpts): string {
  const img = images[key];
  const alt = opts.alt ?? imageText(ctx, key).alt;
  const fallback = imgUrl(key, img.widths.find((w) => w >= 800) ?? img.widths[img.widths.length - 1]);
  return `<picture class="${e(join(['pic', opts.className], ' '))}"><source type="image/avif" srcset="${srcset(key, 'avif')}" sizes="${e(opts.sizes)}"><source type="image/webp" srcset="${srcset(key, 'webp')}" sizes="${e(opts.sizes)}"><img src="${fallback}" width="${img.width}" height="${img.height}" alt="${e(alt)}" ${opts.eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" style="background-image:url(${img.lqip})"></picture>`;
}

/** Foto sem legenda visível: o contexto fica no texto alternativo (alt), lido por leitores de tela e buscadores. */
export function figure(ctx: Ctx, key: ImageKey, opts: PictureOpts & { reveal?: boolean }): string {
  return `<figure class="${e(join(['fig', opts.className], ' '))}"${opts.reveal === false ? '' : ' data-reveal'}>${picture(ctx, key, { ...opts, className: undefined })}</figure>`;
}

export function contactHref(ctx: Ctx, params?: { topic?: string; lang?: string }): string {
  const q = new URLSearchParams();
  if (params?.topic) q.set('tema', params.topic);
  if (params?.lang) q.set('idioma', params.lang);
  const qs = q.toString();
  return `${path('contact', ctx.lang)}${qs ? `?${qs}` : ''}#proposta`;
}

export function btnProposal(
  ctx: Ctx,
  cta: string,
  opts: { topic?: string; lang?: string; label?: string; variant?: string } = {},
): string {
  return `<a class="btn ${opts.variant ?? 'btn-primary'}" href="${e(contactHref(ctx, opts))}" data-cta="${e(cta)}"${opts.topic ? ` data-topic="${e(opts.topic)}"` : ''}><span>${e(opts.label ?? ctx.t.cta.proposal)}</span></a>`;
}

export function waHref(ctx: Ctx, topicLabel?: string): string {
  const msg = topicLabel ? fill(ctx.t.whatsapp.messageTopic, { topic: topicLabel }) : ctx.t.whatsapp.message;
  return whatsappUrl(msg);
}

export function btnWhatsapp(
  ctx: Ctx,
  cta: string,
  opts: { topicLabel?: string; variant?: string; topic?: string } = {},
): string {
  return `<a class="btn ${opts.variant ?? 'btn-ghost'}" href="${e(waHref(ctx, opts.topicLabel))}" target="_blank" rel="noopener" data-cta="${e(cta)}" data-event="whatsapp_click"${opts.topic ? ` data-topic="${e(opts.topic)}"` : ''}>${icons.whatsapp(18)}<span>${e(ctx.t.cta.whatsapp)}</span></a>`;
}

export function btnEmail(_ctx: Ctx, cta: string, variant = 'btn-ghost'): string {
  return `<a class="btn ${variant}" href="mailto:${contact.email}" data-cta="${e(cta)}" data-event="email_click">${icons.mail(18)}<span>${e(contact.email)}</span></a>`;
}

export function textLink(href: string, label: string, attrs = ''): string {
  return `<a class="tlink" href="${e(href)}"${attrs}><span>${e(label)}</span>${icons.arrow(16)}</a>`;
}

export function sectionHead(id: string, title: string, intro?: string, extra = ''): string {
  return `<header class="sec-head" data-reveal><h2 id="${e(id)}" class="h2">${e(title)}</h2>${intro ? `<p class="lede">${e(intro)}</p>` : ''}${extra}</header>`;
}

export function faqList(items: Faq[], idPrefix: string): string {
  return `<div class="faq">${items
    .map(
      (f, i) =>
        `<details class="faq-item" id="${e(idPrefix)}-${i + 1}"><summary><span class="faq-q">${e(f.q)}</span><span class="faq-icon">${icons.plus(20)}</span></summary><div class="faq-a"><p>${e(f.a)}</p></div></details>`,
    )
    .join('')}</div>`;
}

export function itemGrid(items: Item[], className = 'grid-items', reveal = true): string {
  return `<ul class="${e(className)}" role="list">${items
    .map(
      (it, i) =>
        `<li${reveal ? ` data-reveal style="--i:${i}"` : ''}><h3 class="h3">${e(it.title)}</h3><p>${e(it.text)}</p></li>`,
    )
    .join('')}</ul>`;
}

export function steps(items: Item[], className = 'steps'): string {
  return `<ol class="${e(className)}" data-steps>${items
    .map(
      (s, i) =>
        `<li class="step" data-reveal style="--i:${i}"><span class="step-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3 class="h3">${e(s.title)}</h3><p>${e(s.text)}</p></li>`,
    )
    .join('')}</ol>`;
}

export function themeDetails(ctx: Ctx, theme: Theme): string {
  const L = ctx.t.themeLabels;
  return `<dl class="theme-dl"><div><dt>${e(L.forWhom)}</dt><dd>${e(theme.forWhom)}</dd></div><div><dt>${e(L.whenToHire)}</dt><dd>${e(theme.whenToHire)}</dd></div><div><dt>${e(L.covers)}</dt><dd><ul class="ticks" role="list">${theme.covers.map((c) => `<li>${icons.check(16)}<span>${e(c)}</span></li>`).join('')}</ul></dd></div></dl>${theme.note ? `<p class="theme-note"><strong>${e(L.scope)}:</strong> ${e(theme.note)}</p>` : ''}`;
}

export function statsBlock(ctx: Ctx, year: number): string {
  const s = ctx.t.stats;
  const num = (label: string) => {
    const m = label.match(/([\d.,]+)/);
    if (!m) return e(label);
    const raw = m[1]!;
    const value = Number(raw.replace(/[.,]/g, ''));
    return e(label).replace(e(raw), `<span data-count="${value}" data-format="${e(raw)}">${e(raw)}</span>`);
  };
  return `<div class="stats" data-reveal><dl><div><dt>${num(s.years)}</dt><dd>${e(s.yearsLabel)}</dd></div><div><dt>${num(s.leaders)}</dt><dd>${e(s.leadersLabel)}</dd></div><div><dt>${e(s.languages)}</dt><dd>${e(s.languagesLabel)}</dd></div></dl><p class="stats-src">${e(fill(s.source, { year: String(year) }))}</p></div>`;
}

export function breadcrumb(_ctx: Ctx, trail: { label: string; href?: string }[]): string {
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${trail
    .map((c, i) =>
      i === trail.length - 1 || !c.href
        ? `<li><span aria-current="page">${e(c.label)}</span></li>`
        : `<li><a href="${e(c.href)}">${e(c.label)}</a></li>`,
    )
    .join('')}</ol></nav>`;
}

export function finalCta(
  ctx: Ctx,
  title: string,
  text: string,
  opts: { topic?: string; lang?: string; topicLabel?: string } = {},
): string {
  return `<section class="final" aria-labelledby="final-title"><div class="wrap final-grid"><div class="final-copy" data-reveal><h2 id="final-title" class="h2">${e(title)}</h2><p class="lede">${e(text)}</p><div class="btn-row">${btnProposal(ctx, 'final', { ...opts, variant: 'btn-light' })}${btnWhatsapp(ctx, 'final', { topicLabel: opts.topicLabel, variant: 'btn-outline-light', topic: opts.topic })}</div><p class="final-mail">${icons.mail(16)}<a href="mailto:${contact.email}" data-cta="final" data-event="email_click">${e(contact.email)}</a></p></div><div class="final-media" data-reveal>${picture(ctx, 'invitePortrait', { sizes: '(min-width: 960px) 380px, 70vw' })}</div></div></section>`;
}
