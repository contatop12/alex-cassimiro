/**
 * JavaScript do cliente (≈ poucos KB). Melhora progressivamente o HTML estático:
 * revelação ao rolar, cabeçalho, menu móvel, contadores, abertura de foto, barra fixa,
 * medição (dataLayer) sem dados pessoais, atribuição por UTM e formulário de proposta.
 */

import { initAnalytics } from './analytics.ts';
import { initForm } from './form.ts';

declare global {
  interface Window {
    __ac?: boolean;
  }
}

const doc = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
window.__ac = true;

/* Revelação ao rolar */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduced) {
    for (const el of els) el.classList.add('is-in');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  for (const el of els) io.observe(el);
}

/* Cabeçalho: fundo ao rolar, esconde ao descer e volta ao subir */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let last = scrollY;
  let ticking = false;
  const update = () => {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    const menuOpen = document.body.classList.contains('menu-open');
    header.classList.toggle('is-hidden', !menuOpen && y > 320 && y > last + 2);
    if (y < last - 2) header.classList.remove('is-hidden');
    last = y;
    ticking = false;
  };
  addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/* Menu móvel com foco preso, Esc e retorno do foco */
function initMenu() {
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  const main = document.getElementById('main');
  if (!menu || !openBtn || !closeBtn) return;
  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
      (el) => el.offsetParent !== null,
    );
  const onKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') close();
    if (ev.key !== 'Tab') return;
    const list = focusables();
    const first = list[0];
    const lastEl = list[list.length - 1];
    if (!first || !lastEl) return;
    if (ev.shiftKey && document.activeElement === first) {
      ev.preventDefault();
      lastEl.focus();
    } else if (!ev.shiftKey && document.activeElement === lastEl) {
      ev.preventDefault();
      first.focus();
    }
  };
  function open() {
    menu!.hidden = false;
    requestAnimationFrame(() => menu!.classList.add('is-open'));
    openBtn!.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    main?.setAttribute('inert', '');
    document.addEventListener('keydown', onKey);
    closeBtn!.focus();
  }
  function close() {
    menu!.classList.remove('is-open');
    openBtn!.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    main?.removeAttribute('inert');
    document.removeEventListener('keydown', onKey);
    setTimeout(
      () => {
        menu!.hidden = true;
      },
      reduced ? 0 : 300,
    );
    openBtn!.focus();
  }
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  menu.addEventListener('click', (ev) => {
    if ((ev.target as HTMLElement).closest('a')) close();
  });
  matchMedia('(min-width: 1121px)').addEventListener('change', (ev) => {
    if (ev.matches && !menu.hidden) close();
  });
}

/* Contadores numéricos (respeitam o formato do idioma já escrito no HTML) */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length || reduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.count);
        const finalText = el.dataset.format ?? String(target);
        const sep = finalText.match(/\d([.,])\d{3}/)?.[1] ?? '';
        const fmt = (n: number) => (sep ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(n));
        const start = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - (1 - t) ** 3;
          el.textContent = t < 1 ? fmt(Math.round(target * eased)) : finalText;
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    },
    { threshold: 0.6 },
  );
  for (const el of els) io.observe(el);
}

/* Progresso de rolagem: abertura da foto, linha das etapas e paralaxe */
function initScrollEffects() {
  if (reduced) return;
  const aperture = document.querySelector<HTMLElement>('[data-aperture]');
  const proof = aperture?.closest<HTMLElement>('.proof') ?? null;
  const stepLists = Array.from(document.querySelectorAll<HTMLElement>('[data-steps]'));
  const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!aperture && !stepLists.length && !parallax.length) return;
  if (proof) proof.style.setProperty('--p', '0');
  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  let ticking = false;
  const update = () => {
    const vh = innerHeight;
    if (aperture && proof) {
      const r = aperture.getBoundingClientRect();
      // 0 quando o topo entra pela base da tela; 1 quando o topo chega a 20% da altura
      proof.style.setProperty('--p', clamp((vh - r.top) / (vh * 0.8)).toFixed(3));
    }
    for (const list of stepLists) {
      const r = list.getBoundingClientRect();
      list.style.setProperty('--p', clamp((vh * 0.85 - r.top) / (r.height + vh * 0.25)).toFixed(3));
    }
    for (const el of parallax) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.setProperty('--py', `${(center * -0.06).toFixed(1)}px`);
    }
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  update();
}

/* Barra fixa de CTA no celular: aparece depois do topo, some no CTA final e no rodapé */
function initStickyCta() {
  const bar = document.querySelector<HTMLElement>('[data-sticky-cta]');
  const hero = document.querySelector<HTMLElement>('.hero, .phero');
  if (!bar || !hero || !('IntersectionObserver' in window)) return;
  const blockers = Array.from(document.querySelectorAll<HTMLElement>('.final, .site-footer'));
  let heroVisible = true;
  let blocked = false;
  const apply = () => {
    const show = !heroVisible && !blocked;
    bar.classList.toggle('is-visible', show);
    if (show) bar.removeAttribute('inert');
    else bar.setAttribute('inert', '');
  };
  new IntersectionObserver(([entry]) => {
    heroVisible = !!entry?.isIntersecting;
    apply();
  }).observe(hero);
  const visible = new Set<Element>();
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) visible.add(en.target);
      else visible.delete(en.target);
    }
    blocked = visible.size > 0;
    apply();
  });
  for (const b of blockers) io.observe(b);
}

/* Guarda a posição do último CTA clicado (para atribuição do lead, sem dados pessoais) */
function initCtaMemory() {
  document.addEventListener('click', (ev) => {
    const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[data-cta]');
    if (!a) return;
    try {
      sessionStorage.setItem('ac_cta', a.dataset.cta ?? '');
    } catch {
      /* armazenamento indisponível */
    }
  });
}

function boot() {
  initReveal();
  initHeader();
  initMenu();
  initCounters();
  initScrollEffects();
  initStickyCta();
  initCtaMemory();
  initAnalytics();
  initForm();
  doc.classList.add('is-ready');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
else boot();
