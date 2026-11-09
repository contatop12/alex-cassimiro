/**
 * Medição sem dados pessoais.
 * - Eventos vão para window.dataLayer (lidos pelo GTM, se configurado e consentido).
 * - Parâmetros de campanha (UTM, gclid, fbclid) são guardados na sessão para atribuir o lead.
 * - Nunca enviamos nome, e-mail, telefone ou texto do briefing para GA4/GTM.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const;
const CONSENT_KEY = 'ac_consent';

export function track(event: string, params: Record<string, string | undefined> = {}) {
  window.dataLayer = window.dataLayer || [];
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) if (v) clean[k] = v;
  window.dataLayer.push({
    event,
    site_language: document.body.dataset.lang ?? '',
    page_type: document.body.dataset.page ?? '',
    page_path: location.pathname,
    ...clean,
  });
}

function store(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* modo privado ou bloqueado */
  }
}
function read(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Primeiro toque da sessão: campanha, página de entrada e referência. */
function captureAttribution() {
  const params = new URLSearchParams(location.search);
  const utm: Record<string, string> = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) utm[k] = v.slice(0, 150);
  }
  if (Object.keys(utm).length && !read('ac_utm')) store('ac_utm', JSON.stringify(utm));
  if (!read('ac_landing')) {
    store('ac_landing', location.pathname);
    if (document.referrer && !document.referrer.startsWith(location.origin)) {
      store('ac_ref', new URL(document.referrer).hostname);
    }
  }
}

export function attribution() {
  let utm: Record<string, string> = {};
  try {
    utm = JSON.parse(read('ac_utm') ?? '{}');
  } catch {
    utm = {};
  }
  return {
    utm,
    landingPage: read('ac_landing') ?? location.pathname,
    referrer: read('ac_ref') ?? '',
    ctaPosition: read('ac_cta') ?? '',
  };
}

function initClicks() {
  document.addEventListener('click', (ev) => {
    const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[data-event]');
    if (!a) return;
    track(a.dataset.event!, {
      cta_position: a.dataset.cta,
      topic: a.dataset.topic,
    });
  });
}

/** Consentimento (modo básico): o GTM só é carregado depois do aceite. */
function initConsent() {
  const gtmId = document.body.dataset.gtm;
  const banner = document.querySelector<HTMLElement>('[data-consent]');
  if (!gtmId || !banner) return;
  let choice: string | null = null;
  try {
    choice = localStorage.getItem(CONSENT_KEY);
  } catch {
    choice = null;
  }
  const loadGtm = () => {
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    w.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    document.head.appendChild(s);
  };
  const save = (v: string) => {
    try {
      localStorage.setItem(CONSENT_KEY, v);
    } catch {
      /* sem armazenamento: a escolha vale só para esta página */
    }
  };
  if (choice === 'granted') return loadGtm();
  if (choice === 'denied') return;
  banner.hidden = false;
  banner.querySelector('[data-consent-accept]')?.addEventListener('click', () => {
    save('granted');
    banner.hidden = true;
    loadGtm();
  });
  banner.querySelector('[data-consent-reject]')?.addEventListener('click', () => {
    save('denied');
    banner.hidden = true;
  });
}

export function initAnalytics() {
  captureAttribution();
  initClicks();
  initConsent();
}
