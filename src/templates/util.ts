import type { Dict } from '../content/types.ts';
import type { Lang, PageId } from '../site/routes.ts';

export interface Ctx {
  lang: Lang;
  t: Dict;
  page: PageId | 'notFound';
}

const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escapa texto e atributos. Todo conteúdo dinâmico passa por aqui. */
export function e(value: string | number | undefined | null): string {
  if (value === undefined || value === null) return '';
  return String(value).replace(/[&<>"']/g, (c) => ESC[c]!);
}

/** Junta fragmentos ignorando vazios. */
export function join(parts: (string | false | null | undefined)[], sep = ''): string {
  return parts.filter(Boolean).join(sep);
}

/** Converte um texto em spans por palavra para a animação de entrada do título. */
export function splitWords(text: string): string {
  return text
    .split(/\s+/)
    .map((w, i) => `<span class="w" style="--i:${i}"><span>${e(w)}</span></span>`)
    .join(' ');
}

/** Substitui {chave} em textos traduzidos. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? `{${k}}`);
}

/** Gera um id de âncora simples a partir de um texto. */
export function slug(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
