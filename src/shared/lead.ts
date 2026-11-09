/**
 * Contrato do pedido de proposta, compartilhado entre o navegador (validação imediata)
 * e o Worker (validação definitiva). Sem dependências de Node ou DOM.
 */

export const topicIds = [
  'emotional-intelligence',
  'ethics-harassment',
  'mental-health',
  'alcohol-drugs',
  'active-care',
  'gambling',
  'leadership-program',
  'consulting',
  'other',
] as const;
export type TopicId = (typeof topicIds)[number];

export const formatIds = ['in-person', 'online', 'hybrid', 'undecided'] as const;
export type FormatId = (typeof formatIds)[number];

export const audienceIds = ['up-to-50', '50-150', '150-500', '500-plus', 'undecided'] as const;
export type AudienceId = (typeof audienceIds)[number];

export const talkLanguageIds = ['pt', 'en', 'tbd'] as const;
export type TalkLanguageId = (typeof talkLanguageIds)[number];

export const siteLangs = ['pt', 'en', 'es'] as const;
export type SiteLang = (typeof siteLangs)[number];

export interface LeadInput {
  name: string;
  company: string;
  email: string;
  objective: string;
  phone?: string;
  topic?: TopicId;
  date?: string;
  location?: string;
  format?: FormatId;
  audience?: AudienceId;
  talkLanguage?: TalkLanguageId;
}

/** Metadados não pessoais de atribuição e contexto. */
export interface LeadMeta {
  siteLang: SiteLang;
  page: string;
  ctaPosition?: string;
  utm?: Partial<
    Record<
      'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_term' | 'utm_content' | 'gclid' | 'fbclid',
      string
    >
  >;
  landingPage?: string;
  referrer?: string;
}

export type FieldName = keyof LeadInput;
export type ErrorCode =
  | 'required'
  | 'too_short'
  | 'too_long'
  | 'invalid_email'
  | 'invalid_choice'
  | 'invalid_phone';

export type ValidationResult =
  | { ok: true; data: LeadInput }
  | { ok: false; errors: Partial<Record<FieldName, ErrorCode>> };

export const limits = {
  name: { min: 2, max: 120 },
  company: { min: 2, max: 160 },
  email: { max: 254 },
  objective: { min: 10, max: 2000 },
  phone: { max: 40 },
  date: { max: 80 },
  location: { max: 120 },
} as const;

/** Tempo mínimo (ms) entre abrir o formulário e enviar; abaixo disso é tratado como robô. */
export const MIN_FILL_MS = 2500;

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{6,40}$/;

function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  // Remove caracteres de controle (exceto quebras de linha) e espaços nas pontas
  // biome-ignore lint/suspicious/noControlCharactersInRegex: remoção intencional de caracteres de controle
  return value.replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '').trim();
}

function oneLine(value: unknown): string {
  return clean(value).replace(/\s+/g, ' ');
}

function pick<T extends readonly string[]>(list: T, value: unknown): T[number] | undefined | null {
  const v = oneLine(value);
  if (!v) return undefined;
  return (list as readonly string[]).includes(v) ? (v as T[number]) : null;
}

export function validateLead(raw: Record<string, unknown>): ValidationResult {
  const errors: Partial<Record<FieldName, ErrorCode>> = {};

  const name = oneLine(raw.name);
  const company = oneLine(raw.company);
  const email = oneLine(raw.email).toLowerCase();
  const objective = clean(raw.objective);
  const phone = oneLine(raw.phone);
  const date = oneLine(raw.date);
  const location = oneLine(raw.location);

  const lengthCheck = (field: FieldName, value: string, min: number, max: number) => {
    if (!value) errors[field] = 'required';
    else if (value.length < min) errors[field] = 'too_short';
    else if (value.length > max) errors[field] = 'too_long';
  };
  lengthCheck('name', name, limits.name.min, limits.name.max);
  lengthCheck('company', company, limits.company.min, limits.company.max);
  lengthCheck('objective', objective, limits.objective.min, limits.objective.max);

  if (!email) errors.email = 'required';
  else if (email.length > limits.email.max) errors.email = 'too_long';
  else if (!EMAIL_RE.test(email)) errors.email = 'invalid_email';

  if (phone && !PHONE_RE.test(phone)) errors.phone = 'invalid_phone';
  if (date.length > limits.date.max) errors.date = 'too_long';
  if (location.length > limits.location.max) errors.location = 'too_long';

  const topic = pick(topicIds, raw.topic);
  const format = pick(formatIds, raw.format);
  const audience = pick(audienceIds, raw.audience);
  const talkLanguage = pick(talkLanguageIds, raw.talkLanguage);
  if (topic === null) errors.topic = 'invalid_choice';
  if (format === null) errors.format = 'invalid_choice';
  if (audience === null) errors.audience = 'invalid_choice';
  if (talkLanguage === null) errors.talkLanguage = 'invalid_choice';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const data: LeadInput = { name, company, email, objective };
  if (phone) data.phone = phone;
  if (topic) data.topic = topic;
  if (date) data.date = date;
  if (location) data.location = location;
  if (format) data.format = format;
  if (audience) data.audience = audience;
  if (talkLanguage) data.talkLanguage = talkLanguage;
  return { ok: true, data };
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

export function sanitizeMeta(raw: Record<string, unknown>): LeadMeta {
  const siteLang = (siteLangs as readonly string[]).includes(String(raw.siteLang))
    ? (raw.siteLang as SiteLang)
    : 'pt';
  const short = (v: unknown, max = 200) => oneLine(v).slice(0, max);
  const meta: LeadMeta = { siteLang, page: short(raw.page, 300) || '/' };
  const cta = short(raw.ctaPosition, 60);
  if (cta) meta.ctaPosition = cta;
  const landing = short(raw.landingPage, 300);
  if (landing) meta.landingPage = landing;
  const ref = short(raw.referrer, 300);
  if (ref) meta.referrer = ref;
  const utmRaw = raw.utm && typeof raw.utm === 'object' ? (raw.utm as Record<string, unknown>) : {};
  const utm: LeadMeta['utm'] = {};
  for (const key of UTM_KEYS) {
    const v = short(utmRaw[key], 150);
    if (v) utm[key] = v;
  }
  if (Object.keys(utm).length) meta.utm = utm;
  return meta;
}
