import { facts, publish, site } from '../site/config.ts';
import type { ImageKey } from '../site/images.ts';
import { htmlLang, langs, type PageId, parents, path } from '../site/routes.ts';
import {
  breadcrumb,
  btnEmail,
  btnProposal,
  btnWhatsapp,
  faqList,
  figure,
  finalCta,
  itemGrid,
  picture,
  sectionHead,
  srcset,
  statsBlock,
  steps,
  textLink,
  themeDetails,
  waHref,
} from './components.ts';
import { form } from './form.ts';
import { icons } from './icons.ts';
import { abs, jsonLd, pageUrl, talkLanguagesLd } from './seo.ts';
import { type Ctx, e, fill, splitWords } from './util.ts';

export interface PageOutput {
  title: string;
  description: string;
  body: string;
  jsonLd: string;
  preloadImage?: { avif: string; sizes: string };
  bodyClass?: string;
  ogType?: 'website' | 'profile';
  noindex?: boolean;
}

const HERO_SIZES = '(min-width: 1100px) 460px, (min-width: 961px) 40vw, 100vw';
/** Caixa 5:4 com foto 3:2 → a foto precisa ser ~1,2× mais larga que a caixa. */
const PHERO_SIZES = '(min-width: 1100px) 560px, (min-width: 961px) 46vw, 110vw';

function trail(ctx: Ctx, page: PageId) {
  const items: { label: string; href?: string }[] = [
    { label: ctx.t.breadcrumbHome, href: path('home', ctx.lang) },
  ];
  const parent = parents[page];
  if (parent) items.push({ label: ctx.t.nav[parent as 'talks'] ?? '', href: path(parent, ctx.lang) });
  items.push({ label: pageLabel(ctx, page) });
  return items;
}

function pageLabel(ctx: Ctx, page: PageId): string {
  const n = ctx.t.nav;
  switch (page) {
    case 'ei':
      return ctx.t.themes[0]!.title;
    case 'privacy':
      return ctx.t.footer.privacy;
    case 'home':
      return n.home;
    default:
      return n[page];
  }
}

function ldBreadcrumb(ctx: Ctx, page: PageId) {
  return trail(ctx, page).map((c, i, arr) => ({
    name: c.label,
    url: i === arr.length - 1 ? pageUrl(page, ctx.lang) : abs(c.href!),
  }));
}

function pageHero(
  ctx: Ctx,
  page: PageId,
  h1: string,
  intro: string,
  opts: { image?: ImageKey; actions?: string; langs?: boolean; tall?: boolean } = {},
): string {
  const media = opts.image
    ? `<div class="phero-media${opts.tall ? ' phero-media--tall' : ''}" data-curtain>${picture(ctx, opts.image, { sizes: opts.tall ? HERO_SIZES : PHERO_SIZES, eager: true })}</div>`
    : '';
  return `<section class="phero${opts.image ? '' : ' phero--plain'}" aria-labelledby="ph-title"><div class="wrap phero-grid"><div class="phero-copy">${breadcrumb(ctx, trail(ctx, page))}<h1 id="ph-title" class="display display--page" data-split>${splitWords(h1)}</h1><p class="lede lede--lg" data-rise>${e(intro)}</p>${opts.actions ? `<div class="btn-row" data-rise>${opts.actions}</div>` : ''}${opts.langs === false ? '' : `<p class="talk-langs" data-rise>${icons.mic(18)}<span>${e(ctx.t.talkLanguagesLine)}</span></p>`}</div>${media}</div></section>`;
}

function preloadFor(key: ImageKey, sizes: string) {
  return { avif: srcset(key, 'avif'), sizes };
}

function faqSection(_ctx: Ctx, id: string, title: string, items: ctx_faq) {
  return `<section class="sec sec-faq" aria-labelledby="${id}"><div class="wrap faq-grid">${sectionHead(id, title)}<div data-reveal>${faqList(items, id)}</div></div></section>`;
}
type ctx_faq = Ctx['t']['pages']['home']['faq'];

/** Vídeo do hero: pôster como imagem principal (LCP) e vídeo sem som por cima, iniciado após o carregamento. */
function heroVideo(ctx: Ctx): string {
  const v = ctx.t.video;
  return `<div class="hero-media hero-media--video" data-curtain><div class="video-frame">${picture(ctx, 'heroPoster', { sizes: HERO_SIZES, eager: true, alt: v.label })}<video class="hero-video" muted loop playsinline preload="none" disablepictureinpicture aria-label="${e(v.label)}" data-hero-video><source src="/video/hero.webm" type="video/webm"><source src="/video/hero.mp4" type="video/mp4"></video></div><div class="video-ctrl"><button type="button" class="vbtn" data-video-toggle data-play="${e(v.play)}" data-pause="${e(v.pause)}" aria-label="${e(v.play)}">${icons.play()}${icons.pause()}</button><button type="button" class="vbtn" data-video-sound data-on="${e(v.soundOn)}" data-off="${e(v.soundOff)}" aria-pressed="false">${icons.soundOff()}${icons.soundOn()}<span>${e(v.soundOn)}</span></button></div></div>`;
}

/* ───────────────────────────── Home ───────────────────────────── */

export function home(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const h = t.pages.home;
  const [ei, ...others] = t.themes;
  const english = publish.kurarayName ? h.english.textNamed : h.english.text;
  const spCase = t.cases.english;
  const vCase = t.cases.voilier;

  const hero = `<section class="hero" aria-labelledby="hero-title"><div class="wrap hero-grid"><div class="hero-copy"><p class="hero-id" data-rise>${e(t.identity)}</p><h1 id="hero-title" class="display" data-split>${splitWords(h.h1)}</h1><p class="lede lede--lg" data-rise>${e(h.support)}</p><div class="btn-row" data-rise>${btnProposal(ctx, 'hero')}<a class="btn btn-ghost" href="${path('talks', ctx.lang)}" data-cta="hero-secondary"><span>${e(t.cta.topics)}</span></a></div><p class="talk-langs" data-rise>${icons.mic(18)}<span>${e(t.talkLanguagesLine)}</span></p></div>${heroVideo(ctx)}</div></section>`;

  const proof = `<section class="proof" aria-labelledby="proof-title"><div class="aperture" data-aperture>${figure(ctx, 'talkWalk', { sizes: '100vw', className: 'aperture-fig', reveal: false })}</div><div class="wrap proof-grid"><div class="proof-card" data-reveal><h2 id="proof-title" class="h2">${e(h.english.title)}</h2><p>${e(english)}</p>${textLink(path('english', ctx.lang), h.english.link)}</div>${statsBlock(ctx, facts.referenceYear)}</div></section>`;

  const topics = `<section class="sec topics" aria-labelledby="topics-title"><div class="wrap topics-grid"><div class="topics-head">${sectionHead('topics-title', h.topics.title, h.topics.intro, `<p>${textLink(path('talks', ctx.lang), h.topics.more)}</p>`)}</div><ul class="topic-list" role="list"><li class="topic topic--lead" data-reveal><div class="topic-lead-head"><h3 class="topic-title">${e(ei!.title)}</h3><p class="topic-sub">${e(ei!.subtitle)}</p></div><p class="topic-sum">${e(ei!.summary)}</p>${themeDetails(ctx, ei!)}<div class="btn-row">${btnProposal(ctx, 'topics-ei', { topic: ei!.id, label: t.cta.proposalForTopic, variant: 'btn-primary btn-sm' })}${textLink(path('ei', ctx.lang), t.cta.seeEi)}</div></li>${others
    .map(
      (th, i) =>
        `<li class="topic" data-reveal style="--i:${i}"><details><summary><span class="topic-head"><span class="topic-title">${e(th.title)}</span><span class="topic-sub">${e(th.subtitle)}</span></span><span class="topic-icon">${icons.plus(22)}</span></summary><div class="topic-body"><p class="topic-sum">${e(th.summary)}</p>${themeDetails(ctx, th)}<div class="btn-row">${btnProposal(ctx, `topics-${th.id}`, { topic: th.id, label: t.cta.proposalForTopic, variant: 'btn-ghost btn-sm' })}${textLink(`${path('talks', ctx.lang)}#${th.anchor}`, t.cta.seeTalks)}</div></div></details></li>`,
    )
    .join('')}</ul></div></section>`;

  const cases = `<section class="sec cases" aria-labelledby="cases-title"><div class="wrap">${sectionHead('cases-title', h.cases.title, h.cases.intro)}<article class="case case--sp" aria-labelledby="case-sp"><div class="case-text" data-reveal><h3 id="case-sp" class="h3">${e(spCase.label)}</h3><p class="case-place">${e(spCase.place)}</p><p>${e(publish.kurarayName ? spCase.textNamed : spCase.text)}</p>${textLink(path('english', ctx.lang), t.cta.seeEnglish)}</div><div class="mosaic">${figure(ctx, 'talkEnergy', { sizes: '(min-width: 961px) 800px, 100vw', className: 'm-a' })}${figure(ctx, 'talkQuestion', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-b' })}${figure(ctx, 'talkListening', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-c' })}</div></article><article class="case case--vl" aria-labelledby="case-vl">${figure(ctx, 'valinhosGroup', { sizes: '(min-width: 961px) 800px, 100vw', className: 'case-wide' })}<div class="case-text" data-reveal><h3 id="case-vl" class="h3">${e(vCase.label)}</h3><p class="case-place">${e(vCase.place)}</p><p>${e(publish.voilierName ? vCase.textNamed : vCase.text)}</p>${textLink(path('ei', ctx.lang), t.cta.seeEi)}</div></article></div></section>`;

  const about = `<section class="sec about-teaser" aria-labelledby="about-title"><div class="wrap about-grid"><div class="about-media" data-parallax>${picture(ctx, 'aboutPortrait', { sizes: '(min-width: 961px) 460px, 90vw' })}</div><div class="about-copy" data-reveal><h2 id="about-title" class="h2">${e(h.about.title)}</h2><p class="lede">${e(h.about.text)}</p><blockquote class="pull"><p>${e(h.about.quote)}</p></blockquote>${textLink(path('about', ctx.lang), t.cta.readBio)}</div></div></section>`;

  const L = t.solutionLabels;
  const solutions = `<section class="sec solutions" aria-labelledby="sol-title"><div class="wrap">${sectionHead('sol-title', h.solutions.title, h.solutions.intro)}<div class="sol-grid">${t.solutions
    .map(
      (s, i) =>
        `<article class="sol" data-reveal style="--i:${i}"><h3 class="sol-name">${e(s.name)}</h3><p class="sol-what">${e(s.what)}</p><dl><div><dt>${e(L.indicated)}</dt><dd>${e(s.indicated)}</dd></div><div><dt>${e(L.format)}</dt><dd>${e(s.format)}</dd></div><div><dt>${e(L.depth)}</dt><dd>${e(s.depth)}</dd></div></dl>${textLink(path(s.page, ctx.lang), s.id === 'talk' ? t.cta.seeTalks : s.id === 'program' ? t.cta.seeLeadership : t.cta.seeConsulting)}</article>`,
    )
    .join('')}</div></div></section>`;

  const hire = `<section class="sec hire" aria-labelledby="hire-title"><div class="wrap">${sectionHead('hire-title', h.hire.title, h.hire.intro)}${steps(t.hireSteps)}<div class="btn-row center" data-reveal>${btnProposal(ctx, 'hire')}${btnWhatsapp(ctx, 'hire')}</div></div></section>`;

  const body =
    hero +
    proof +
    topics +
    cases +
    about +
    solutions +
    hire +
    faqSection(ctx, 'faq-title', h.faqTitle, h.faq) +
    finalCta(ctx, h.final.title, h.final.text);

  return {
    title: t.meta.home.title,
    description: t.meta.home.description,
    body,
    bodyClass: 'is-home',
    preloadImage: preloadFor('heroPoster', HERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'home',
      title: t.meta.home.title,
      description: t.meta.home.description,
      faq: h.faq,
      image: abs('/img/heroPortrait-754.webp'),
      video: {
        name: h.h1,
        description: t.video.label,
        contentUrl: abs('/video/hero.mp4'),
        thumbnailUrl: abs('/img/heroPoster-1200.webp'),
        duration: 'PT2M10S',
      },
    }),
  };
}

/* ─────────────────────────── Palestras ─────────────────────────── */

export function talks(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.talks;
  const actions = btnProposal(ctx, 'page-hero') + btnWhatsapp(ctx, 'page-hero');
  const themes = `<section class="sec" aria-labelledby="themes-title"><div class="wrap">${sectionHead('themes-title', p.themesTitle)}<div class="theme-cards">${t.themes
    .map(
      (th, i) =>
        `<article class="theme-card${i === 0 ? ' theme-card--lead' : ''}" id="${e(th.anchor)}" data-reveal aria-labelledby="th-${e(th.anchor)}"><header><h3 id="th-${e(th.anchor)}" class="theme-title">${e(th.title)}</h3><p class="topic-sub">${e(th.subtitle)}</p></header><p class="topic-sum">${e(th.summary)}</p>${themeDetails(ctx, th)}<div class="btn-row">${btnProposal(ctx, `talks-${th.id}`, { topic: th.id, label: t.cta.proposalForTopic, variant: i === 0 ? 'btn-primary btn-sm' : 'btn-ghost btn-sm' })}${i === 0 ? textLink(path('ei', ctx.lang), t.cta.seeEi) : ''}</div></article>`,
    )
    .join('')}</div></div></section>`;
  const leadership = `<section class="sec band" aria-labelledby="lead-title"><div class="wrap band-grid"><h2 id="lead-title" class="h2" data-reveal>${e(p.leadership.title)}</h2><div data-reveal><p class="lede">${e(p.leadership.text)}</p>${textLink(path('leadership', ctx.lang), t.cta.seeLeadership)}</div></div></section>`;
  const personal = `<section class="sec" aria-labelledby="pers-title"><div class="wrap">${sectionHead('pers-title', p.personalizationTitle)}${itemGrid(p.personalization, 'grid-items grid-4')}</div></section>`;
  const formats = `<section class="sec sec-tight" aria-labelledby="fmt-title"><div class="wrap split">${sectionHead('fmt-title', p.formatsTitle)}${itemGrid(p.formats, 'grid-items grid-2')}</div></section>`;
  const gallery = `<section class="sec sec-tight" aria-label="${e(t.cases.english.label)}"><div class="wrap gallery-3">${figure(ctx, 'talkMic', { sizes: '(min-width: 961px) 440px, 100vw' })}${figure(ctx, 'talkRoom', { sizes: '(min-width: 961px) 440px, 100vw' })}${figure(ctx, 'valinhosGroup', { sizes: '(min-width: 961px) 440px, 100vw' })}</div></section>`;
  const body =
    pageHero(ctx, 'talks', p.h1, p.intro, { image: 'talkWalk', actions }) +
    themes +
    leadership +
    personal +
    formats +
    gallery +
    faqSection(ctx, 'faq-title', p.faqTitle, p.faq) +
    finalCta(ctx, p.final.title, p.final.text);
  return {
    title: t.meta.talks.title,
    description: t.meta.talks.description,
    body,
    preloadImage: preloadFor('talkWalk', PHERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'talks',
      type: 'CollectionPage',
      title: t.meta.talks.title,
      description: t.meta.talks.description,
      breadcrumb: ldBreadcrumb(ctx, 'talks'),
      faq: p.faq,
      service: { name: p.h1, description: p.intro, languages: talkLanguagesLd },
    }),
  };
}

/* ─────────────────────── Inteligência emocional ─────────────────────── */

export function ei(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.ei;
  const theme = t.themes[0]!;
  const actions =
    btnProposal(ctx, 'page-hero', { topic: 'emotional-intelligence' }) +
    btnWhatsapp(ctx, 'page-hero', { topicLabel: theme.title, topic: 'emotional-intelligence' });
  const situations = `<section class="sec situations" aria-labelledby="sit-title"><div class="wrap">${sectionHead('sit-title', p.situationsTitle, p.situationsIntro)}<ul class="sit-list" role="list">${p.situations
    .map(
      (s, i) =>
        `<li class="sit" data-reveal style="--i:${i}"><div class="sit-media">${picture(ctx, s.image, { sizes: '(min-width: 960px) 260px, 44vw' })}</div><div><h3 class="h3">${e(s.title)}</h3><p>${e(s.text)}</p></div></li>`,
    )
    .join('')}</ul></div></section>`;
  const audiences = `<section class="sec sec-tight" aria-labelledby="aud-title"><div class="wrap split">${sectionHead('aud-title', p.audiencesTitle)}${itemGrid(p.audiences, 'grid-items grid-3')}</div></section>`;
  const covers = `<section class="sec band" aria-labelledby="cov-title"><div class="wrap band-grid"><h2 id="cov-title" class="h2" data-reveal>${e(t.themeLabels.covers)}</h2><div data-reveal>${themeDetails(ctx, theme)}</div></div></section>`;
  const formats = `<section class="sec" aria-labelledby="fmt-title"><div class="wrap two-col"><div>${sectionHead('fmt-title', p.formatsTitle)}${itemGrid(p.formats, 'grid-items grid-1')}</div><div>${sectionHead('cus-title', p.customTitle)}<ul class="ticks ticks--lg" role="list" data-reveal>${p.custom.map((c) => `<li>${icons.check(18)}<span>${e(c)}</span></li>`).join('')}</ul></div></div></section>`;
  const evidence = `<section class="sec" aria-labelledby="ev-title"><div class="wrap">${sectionHead('ev-title', p.evidenceTitle, p.evidenceText)}<div class="mosaic mosaic--wide">${figure(ctx, 'talkEnglish', { sizes: '(min-width: 961px) 960px, 100vw', className: 'm-a' })}${figure(ctx, 'valinhosGroup', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-b' })}${figure(ctx, 'talkQuestion', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-c' })}</div><p class="center-link">${textLink(path('english', ctx.lang), t.cta.seeEnglish)}</p></div></section>`;
  const body =
    pageHero(ctx, 'ei', p.h1, p.intro, { image: 'talkListening', actions }) +
    situations +
    covers +
    audiences +
    formats +
    evidence +
    faqSection(ctx, 'faq-title', p.faqTitle, p.faq) +
    finalCta(ctx, p.final.title, p.final.text, { topic: 'emotional-intelligence', topicLabel: theme.title });
  return {
    title: t.meta.ei.title,
    description: t.meta.ei.description,
    body,
    preloadImage: preloadFor('talkListening', PHERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'ei',
      title: t.meta.ei.title,
      description: t.meta.ei.description,
      breadcrumb: ldBreadcrumb(ctx, 'ei'),
      faq: p.faq,
      service: { name: p.h1, description: p.intro, languages: talkLanguagesLd },
    }),
  };
}

/* ───────────────────────── Palestras em inglês ───────────────────────── */

export function english(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.english;
  const actions = btnProposal(ctx, 'page-hero', { lang: 'en' }) + btnWhatsapp(ctx, 'page-hero');
  const contexts = `<section class="sec" aria-labelledby="ctx-title"><div class="wrap">${sectionHead('ctx-title', p.contextsTitle)}${itemGrid(p.contexts, 'grid-items grid-3 grid-lined')}</div></section>`;
  const record = `<section class="sec record" aria-labelledby="rec-title"><div class="wrap record-grid"><div class="record-copy" data-reveal><h2 id="rec-title" class="h2">${e(p.recordTitle)}</h2><p class="lede">${e(publish.kurarayName ? p.recordTextNamed : p.recordText)}</p></div><div class="mosaic">${figure(ctx, 'talkWalk', { sizes: '(min-width: 961px) 800px, 100vw', className: 'm-a' })}${figure(ctx, 'talkQuestion', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-b' })}${figure(ctx, 'talkEnergy', { sizes: '(min-width: 961px) 480px, 50vw', className: 'm-c' })}</div></div></section>`;
  const how = `<section class="sec" aria-labelledby="how-title"><div class="wrap">${sectionHead('how-title', p.howTitle)}${steps(p.how)}</div></section>`;
  const topicsBand = `<section class="sec band" aria-labelledby="tp-title"><div class="wrap band-grid"><h2 id="tp-title" class="h2" data-reveal>${e(p.topicsTitle)}</h2><div data-reveal><p class="lede">${e(p.topicsText)}</p>${textLink(path('ei', ctx.lang), t.cta.seeEi)}</div></div></section>`;
  const body =
    pageHero(ctx, 'english', p.h1, p.intro, { image: 'talkEnglish', actions }) +
    contexts +
    record +
    how +
    topicsBand +
    faqSection(ctx, 'faq-title', p.faqTitle, p.faq) +
    finalCta(ctx, p.final.title, p.final.text, { lang: 'en' });
  return {
    title: t.meta.english.title,
    description: t.meta.english.description,
    body,
    preloadImage: preloadFor('talkEnglish', PHERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'english',
      title: t.meta.english.title,
      description: t.meta.english.description,
      breadcrumb: ldBreadcrumb(ctx, 'english'),
      faq: p.faq,
      service: { name: p.h1, description: p.intro, languages: ['English'] },
    }),
  };
}

/* ─────────────────────────── Trilhas ─────────────────────────── */

export function leadership(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.leadership;
  const actions =
    btnProposal(ctx, 'page-hero', { topic: 'leadership-program' }) +
    btnWhatsapp(ctx, 'page-hero', { topicLabel: t.nav.leadership, topic: 'leadership-program' });
  const compare = `<section class="sec" aria-labelledby="cmp-title"><div class="wrap">${sectionHead('cmp-title', p.compareTitle)}<div class="table-wrap" data-reveal><table class="compare"><thead><tr><th scope="col">${e(p.compareHead.aspect)}</th><th scope="col">${e(p.compareHead.talk)}</th><th scope="col" class="is-hl">${e(p.compareHead.program)}</th></tr></thead><tbody>${p.compare
    .map(
      (r) =>
        `<tr><th scope="row">${e(r.aspect)}</th><td data-label="${e(p.compareHead.talk)}">${e(r.talk)}</td><td class="is-hl" data-label="${e(p.compareHead.program)}">${e(r.program)}</td></tr>`,
    )
    .join('')}</tbody></table></div></div></section>`;
  const pillars = `<section class="sec band" aria-labelledby="pil-title"><div class="wrap">${sectionHead('pil-title', p.pillarsTitle)}${itemGrid(p.pillars, 'grid-items grid-4 grid-on-dark')}</div></section>`;
  const journey = `<section class="sec" aria-labelledby="jr-title"><div class="wrap">${sectionHead('jr-title', p.journeyTitle, p.journeyIntro)}<ol class="journey" data-steps>${p.journey
    .map(
      (m, i) =>
        `<li class="jr" data-reveal style="--i:${i % 5}"><span class="jr-n">${e(p.journeyUnit)} ${String(i + 1).padStart(2, '0')}</span><h3 class="h3">${e(m.title)}</h3><p>${e(m.text)}</p></li>`,
    )
    .join('')}</ol></div></section>`;
  const formats = `<section class="sec sec-tight" aria-labelledby="fmt-title"><div class="wrap split">${sectionHead('fmt-title', p.formatsTitle, p.scopeNote)}${itemGrid(p.formats, 'grid-items grid-3')}</div></section>`;
  const body =
    pageHero(ctx, 'leadership', p.h1, p.intro, { image: 'talkRoom', actions, langs: false }) +
    compare +
    pillars +
    journey +
    formats +
    faqSection(ctx, 'faq-title', p.faqTitle, p.faq) +
    finalCta(ctx, p.final.title, p.final.text, { topic: 'leadership-program', topicLabel: t.nav.leadership });
  return {
    title: t.meta.leadership.title,
    description: t.meta.leadership.description,
    body,
    preloadImage: preloadFor('talkRoom', PHERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'leadership',
      title: t.meta.leadership.title,
      description: t.meta.leadership.description,
      breadcrumb: ldBreadcrumb(ctx, 'leadership'),
      faq: p.faq,
      service: { name: p.h1, description: p.intro },
    }),
  };
}

/* ─────────────────────────── Consultoria ─────────────────────────── */

export function consulting(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.consulting;
  const actions =
    btnProposal(ctx, 'page-hero', { topic: 'consulting' }) +
    btnWhatsapp(ctx, 'page-hero', { topicLabel: t.nav.consulting, topic: 'consulting' });
  const when = `<section class="sec" aria-labelledby="when-title"><div class="wrap split">${sectionHead('when-title', p.whenTitle)}<ul class="ticks ticks--lg" role="list" data-reveal>${p.when.map((w) => `<li>${icons.check(18)}<span>${e(w)}</span></li>`).join('')}</ul></div></section>`;
  const process = `<section class="sec band" aria-labelledby="proc-title"><div class="wrap">${sectionHead('proc-title', p.processTitle)}${steps(p.process, 'steps steps--5 steps--dark')}</div></section>`;
  const scope = `<section class="sec" aria-labelledby="scope-title"><div class="wrap split">${sectionHead('scope-title', p.scopeTitle)}<ul class="ticks ticks--lg" role="list" data-reveal>${p.scope.map((w) => `<li>${icons.check(18)}<span>${e(w)}</span></li>`).join('')}</ul></div></section>`;
  const body =
    pageHero(ctx, 'consulting', p.h1, p.intro, { image: 'valinhosPortrait', actions, langs: false }) +
    when +
    process +
    scope +
    faqSection(ctx, 'faq-title', p.faqTitle, p.faq) +
    finalCta(ctx, p.final.title, p.final.text, { topic: 'consulting', topicLabel: t.nav.consulting });
  return {
    title: t.meta.consulting.title,
    description: t.meta.consulting.description,
    body,
    preloadImage: preloadFor('valinhosPortrait', PHERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'consulting',
      title: t.meta.consulting.title,
      description: t.meta.consulting.description,
      breadcrumb: ldBreadcrumb(ctx, 'consulting'),
      faq: p.faq,
      service: { name: p.h1, description: p.intro },
    }),
  };
}

/* ─────────────────────────── Sobre ─────────────────────────── */

export function about(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.about;
  const actions = btnProposal(ctx, 'page-hero') + btnWhatsapp(ctx, 'page-hero');
  const bio = `<section class="sec bio" aria-labelledby="bio-title"><div class="wrap bio-grid"><div class="bio-text" data-reveal><h2 id="bio-title" class="sr-only">${e(t.nav.about)}</h2>${p.bio.map((para) => `<p>${e(para)}</p>`).join('')}<p>${e(p.honor)} <a class="src-link" href="${facts.honor.sourceUrl}" target="_blank" rel="noopener">${e(p.honorSource)}${icons.external(14)}</a></p></div><aside class="bio-aside" data-reveal><h2 class="h3">${e(p.factsTitle)}</h2><dl class="facts">${p.facts.map((f) => `<div><dt>${e(f.value)}</dt><dd>${e(f.label)}</dd></div>`).join('')}</dl><p class="stats-src">${e(fill(t.stats.source, { year: String(facts.referenceYear) }))}</p></aside></div></section>`;
  const quote = `<section class="sec quote-sec" aria-label="${e(p.quoteSource)}"><div class="wrap quote-grid"><div class="quote-media" data-parallax>${picture(ctx, 'podium', { sizes: '(min-width: 961px) 460px, 90vw' })}</div><figure class="quote-fig" data-reveal><blockquote><p>${e(p.quote)}</p></blockquote><figcaption>${e(p.quoteSource)}</figcaption></figure></div></section>`;
  const approach = `<section class="sec" aria-labelledby="appr-title"><div class="wrap">${sectionHead('appr-title', p.approachTitle)}${itemGrid(p.approach, 'grid-items grid-3 grid-lined')}<p class="center-link">${textLink(path('talks', ctx.lang), t.cta.seeTalks)}</p></div></section>`;
  const body =
    pageHero(ctx, 'about', p.h1, p.lead, { image: 'aboutPortrait', actions, tall: true }) +
    bio +
    quote +
    approach +
    finalCta(ctx, p.final.title, p.final.text);
  return {
    title: t.meta.about.title,
    description: t.meta.about.description,
    body,
    ogType: 'profile',
    preloadImage: preloadFor('aboutPortrait', HERO_SIZES),
    jsonLd: jsonLd(ctx, {
      page: 'about',
      type: 'ProfilePage',
      title: t.meta.about.title,
      description: t.meta.about.description,
      breadcrumb: ldBreadcrumb(ctx, 'about'),
      image: abs('/img/aboutPortrait-942.webp'),
    }),
  };
}

/* ─────────────────────────── Contato ─────────────────────────── */

export function contactPage(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.contact;
  const body = `<section class="phero phero--plain phero--contact" aria-labelledby="ph-title"><div class="wrap">${breadcrumb(ctx, trail(ctx, 'contact'))}<h1 id="ph-title" class="display display--page" data-split>${splitWords(p.h1)}</h1><p class="lede lede--lg" data-rise>${e(p.intro)}</p></div></section><section class="sec contact-sec" id="proposta" aria-label="${e(t.form.title)}"><div class="wrap contact-grid">${form(ctx)}<aside class="contact-aside"><div class="direct" data-reveal><h2 class="h3">${e(p.directTitle)}</h2><p>${e(p.directText)}</p><div class="btn-col">${btnWhatsapp(ctx, 'contact-aside', { variant: 'btn-wa-wide' })}${btnEmail(ctx, 'contact-aside')}</div><p class="direct-num">WhatsApp: <a href="${e(waHref(ctx))}" target="_blank" rel="noopener" data-cta="contact-number" data-event="whatsapp_click">+55 19 99109-9007</a></p></div><div class="next" data-reveal><h2 class="h3">${e(p.nextTitle)}</h2>${steps(p.next, 'steps steps--compact')}</div><p class="talk-langs">${icons.mic(18)}<span>${e(t.talkLanguagesLine)}</span></p></aside></div></section>`;
  return {
    title: t.meta.contact.title,
    description: t.meta.contact.description,
    body,
    bodyClass: 'is-contact',
    jsonLd: jsonLd(ctx, {
      page: 'contact',
      type: 'ContactPage',
      title: t.meta.contact.title,
      description: t.meta.contact.description,
      breadcrumb: ldBreadcrumb(ctx, 'contact'),
    }),
  };
}

/* ─────────────────────────── Privacidade ─────────────────────────── */

export function privacy(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.privacy;
  const sections = site.gtmId ? [...p.sections, p.analytics] : p.sections;
  const body = `<section class="phero phero--plain" aria-labelledby="ph-title"><div class="wrap">${breadcrumb(ctx, trail(ctx, 'privacy'))}<h1 id="ph-title" class="display display--page">${e(p.h1)}</h1><p class="muted">${e(p.updated)}</p></div></section><section class="sec sec-tight"><div class="wrap prose"><p class="lede">${e(p.intro)}</p>${sections.map((s) => `<h2 class="h3">${e(s.title)}</h2>${s.paragraphs.map((x) => `<p>${e(x)}</p>`).join('')}`).join('')}</div></section>`;
  return {
    title: t.meta.privacy.title,
    description: t.meta.privacy.description,
    body,
    jsonLd: jsonLd(ctx, {
      page: 'privacy',
      title: t.meta.privacy.title,
      description: t.meta.privacy.description,
      breadcrumb: ldBreadcrumb(ctx, 'privacy'),
    }),
  };
}

/* ─────────────────────────── 404 ─────────────────────────── */

export function notFound(ctx: Ctx): PageOutput {
  const t = ctx.t;
  const p = t.pages.notFound;
  const links: PageId[] = ['home', 'talks', 'ei', 'english', 'about', 'contact'];
  const label = (id: PageId) => (id === 'home' ? t.nav.home : pageLabel(ctx, id));
  const body = `<section class="phero phero--plain nf" aria-labelledby="ph-title"><div class="wrap"><p class="nf-code" aria-hidden="true">404</p><h1 id="ph-title" class="display display--page">${e(p.h1)}</h1><p class="lede lede--lg">${e(p.text)}</p><h2 class="sr-only">${e(p.linksTitle)}</h2><ul class="nf-links" role="list">${links.map((id) => `<li><a href="${path(id, ctx.lang)}">${e(label(id))}</a></li>`).join('')}</ul><div class="btn-row">${btnProposal(ctx, '404')}</div><p class="muted">${langs
    .filter((l) => l !== ctx.lang)
    .map(
      (l) =>
        `<a href="${path('home', l)}" hreflang="${htmlLang[l]}" lang="${htmlLang[l]}">${l === 'pt' ? 'Português' : l === 'en' ? 'English' : 'Español'}</a>`,
    )
    .join(' · ')}</p></div></section>`;
  return {
    title: t.meta.notFound.title,
    description: t.meta.notFound.description,
    body,
    noindex: true,
    jsonLd: '',
  };
}

export const renderers: Record<PageId, (ctx: Ctx) => PageOutput> = {
  home,
  talks,
  ei,
  english,
  leadership,
  consulting,
  about,
  contact: contactPage,
  privacy,
};
