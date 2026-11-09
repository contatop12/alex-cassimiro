/**
 * Formulário de pedido de proposta.
 * - Pré-preenche tema e idioma da palestra a partir da URL (?tema=…&idioma=…), sempre editáveis.
 * - Valida no cliente com o mesmo contrato do Worker (src/shared/lead.ts).
 * - Evita envio duplicado (botão travado + chave de idempotência por preenchimento).
 * - Preserva os campos em erros recuperáveis e só confirma quando o servidor aceita.
 * - Dispara generate_lead somente após confirmação, sem dados pessoais.
 */
import {
  type ErrorCode,
  type FieldName,
  MIN_FILL_MS,
  type TalkLanguageId,
  type TopicId,
  talkLanguageIds,
  topicIds,
  validateLead,
} from '../shared/lead.ts';
import { attribution, track } from './analytics.ts';

interface Messages {
  errors: Record<ErrorCode, string>;
  failure: Record<'network' | 'server' | 'rateLimited' | 'notConfigured' | 'spam', string>;
  sending: string;
  submit: string;
  summary: string;
}

const FIELDS: FieldName[] = [
  'name',
  'company',
  'email',
  'objective',
  'phone',
  'topic',
  'date',
  'location',
  'format',
  'audience',
  'talkLanguage',
];

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

function newKey(): string {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function initForm() {
  const form = document.querySelector<HTMLFormElement>('[data-lead-form]');
  if (!form) return;
  const card = form.closest('.form-card')!;
  const success = card.querySelector<HTMLElement>('[data-success]')!;
  const summary = form.querySelector<HTMLElement>('[data-summary]')!;
  const failure = form.querySelector<HTMLElement>('[data-failure]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = submit.querySelector('span')!;
  const msg = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  let startedAt = Date.now();
  let idemKey = newKey();
  let sending = false;
  let turnstileToken = '';
  let turnstileId: string | undefined;
  const touched = new Set<FieldName>();

  /* Pré-preenchimento pela URL */
  const params = new URLSearchParams(location.search);
  const topic = params.get('tema') as TopicId | null;
  if (topic && (topicIds as readonly string[]).includes(topic)) {
    const sel = form.elements.namedItem('topic') as HTMLSelectElement | null;
    if (sel) sel.value = topic;
  }
  const lang = params.get('idioma') as TalkLanguageId | null;
  if (lang && (talkLanguageIds as readonly string[]).includes(lang)) {
    const radio = form.querySelector<HTMLInputElement>(`input[name="talkLanguage"][value="${lang}"]`);
    if (radio) radio.checked = true;
  }

  /* Turnstile opcional */
  const ts = form.querySelector<HTMLElement>('[data-turnstile]');
  if (ts) {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => {
      turnstileId = window.turnstile?.render(ts, {
        sitekey: ts.dataset.sitekey,
        language: document.documentElement.lang,
        callback: (token: string) => {
          turnstileToken = token;
        },
        'expired-callback': () => {
          turnstileToken = '';
        },
      });
    };
    document.head.appendChild(script);
  }

  const values = (): Record<string, string> => {
    const fd = new FormData(form);
    const out: Record<string, string> = {};
    for (const f of FIELDS) out[f] = String(fd.get(f) ?? '');
    return out;
  };

  function setError(field: FieldName, code?: ErrorCode) {
    const holder = form!.querySelector<HTMLElement>(`[data-field="${field}"]`);
    const errEl = form!.querySelector<HTMLElement>(`#err-${field}`);
    const controls = form!.querySelectorAll<HTMLElement>(`[name="${field}"]`);
    if (!holder || !errEl) return;
    if (code) {
      errEl.textContent = msg.errors[code];
      errEl.hidden = false;
      for (const c of controls) c.setAttribute('aria-invalid', 'true');
    } else {
      errEl.textContent = '';
      errEl.hidden = true;
      for (const c of controls) c.removeAttribute('aria-invalid');
    }
  }

  function showErrors(errors: Partial<Record<FieldName, ErrorCode>>, focus: boolean) {
    for (const f of FIELDS) setError(f, errors[f]);
    const first = FIELDS.find((f) => errors[f]);
    if (first && focus) {
      summary.textContent = msg.summary;
      summary.hidden = false;
      const details = form!.querySelector<HTMLDetailsElement>('.details-opt');
      if (details && !['name', 'company', 'email', 'objective'].includes(first)) details.open = true;
      form!.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
  }

  /* Validação no blur, sem acusar campos ainda não tocados */
  form.addEventListener('focusout', (ev) => {
    const el = ev.target as HTMLInputElement;
    const name = el.name as FieldName;
    if (!FIELDS.includes(name)) return;
    if (!el.value && !touched.has(name)) return;
    touched.add(name);
    const res = validateLead(values());
    setError(name, res.ok ? undefined : res.errors[name]);
  });
  form.addEventListener('input', (ev) => {
    const name = (ev.target as HTMLInputElement).name as FieldName;
    if (!touched.has(name)) return;
    const res = validateLead(values());
    setError(name, res.ok ? undefined : res.errors[name]);
  });

  function setSending(on: boolean) {
    sending = on;
    form!.classList.toggle('is-sending', on);
    submit.disabled = on;
    submit.setAttribute('aria-busy', String(on));
    submitLabel.textContent = on ? msg.sending : msg.submit;
  }

  function showFailure(text: string) {
    failure.textContent = text;
    failure.hidden = false;
    failure.focus?.();
  }

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (sending) return;
    failure.hidden = true;
    summary.hidden = true;
    const raw = values();
    const res = validateLead(raw);
    if (!res.ok) {
      for (const f of FIELDS) touched.add(f);
      showErrors(res.errors, true);
      return;
    }
    showErrors({}, false);
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement | null)?.value ?? '';
    const attr = attribution();
    const payload = {
      ...res.data,
      website: honeypot,
      elapsedMs: Date.now() - startedAt,
      idempotencyKey: idemKey,
      turnstileToken,
      meta: {
        siteLang: document.body.dataset.lang,
        page: location.pathname,
        ctaPosition: attr.ctaPosition,
        landingPage: attr.landingPage,
        referrer: attr.referrer,
        utm: attr.utm,
      },
    };
    if (Date.now() - startedAt < MIN_FILL_MS) {
      // Preenchimento instantâneo: espera o mínimo antes de enviar (autofill legítimo também passa)
      await new Promise((r) => setTimeout(r, MIN_FILL_MS));
      payload.elapsedMs = Date.now() - startedAt;
    }
    setSending(true);
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await resp.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Partial<Record<FieldName, ErrorCode>>;
      };
      if (resp.ok && data.ok) {
        track('generate_lead', {
          topic: res.data.topic,
          talk_language: res.data.talkLanguage,
          cta_position: attr.ctaPosition,
          form_language: document.body.dataset.lang,
          utm_source: attr.utm.utm_source,
          utm_campaign: attr.utm.utm_campaign,
        });
        form.hidden = true;
        success.hidden = false;
        success.focus();
        return;
      }
      if (resp.status === 422 && data.errors) {
        showErrors(data.errors, true);
      } else if (resp.status === 429) {
        showFailure(msg.failure.rateLimited);
      } else if (resp.status === 503 && data.error === 'not_configured') {
        showFailure(msg.failure.notConfigured);
      } else if (data.error === 'spam' || data.error === 'challenge') {
        showFailure(msg.failure.spam);
        if (turnstileId !== undefined) window.turnstile?.reset(turnstileId);
      } else {
        showFailure(msg.failure.server);
      }
    } catch {
      showFailure(msg.failure.network);
    } finally {
      setSending(false);
    }
  });

  card.querySelector('[data-reset]')?.addEventListener('click', () => {
    form.reset();
    touched.clear();
    showErrors({}, false);
    idemKey = newKey();
    startedAt = Date.now();
    success.hidden = true;
    form.hidden = false;
    form.querySelector<HTMLElement>('[name="name"]')?.focus();
  });
}
