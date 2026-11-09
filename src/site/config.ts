/**
 * Configuração central do site: contatos, fatos aprovados e permissões de publicação.
 * Tudo que é "fato" (números, nomes de clientes, credenciais) passa por aqui para
 * que uma atualização aconteça em um único lugar.
 */

export const site = {
  /** Domínio canônico proposto. Pode ser sobrescrito no build com SITE_URL. */
  url: (process.env.SITE_URL || 'https://alexcassimiro.com.br').replace(/\/$/, ''),
  name: 'Alex Cassimiro',
  /** Data da última revisão editorial (ISO). Usada em sitemap e páginas legais. */
  updated: '2026-11-09',
  gtmId: process.env.PUBLIC_GTM_ID || '',
  turnstileSiteKey: process.env.PUBLIC_TURNSTILE_SITE_KEY || '',
  noindex: process.env.PUBLIC_NOINDEX === '1',
} as const;

export const contact = {
  whatsappE164: '5519991099007',
  whatsappDisplay: '+55 19 99109-9007',
  email: 'oalexcassimiro@gmail.com',
  instagram: 'https://www.instagram.com/oalexcassimiro/',
  linkedin: 'https://www.linkedin.com/in/alexcassimiro/',
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${contact.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Números institucionais. Fonte: Media kit Alex Cassimiro 2026.
 * Atualize `referenceYear` junto com os valores.
 */
export const facts = {
  source: 'Media kit Alex Cassimiro',
  referenceYear: 2026,
  yearsExperience: 17,
  leadersTrained: 1000,
  /** Idiomas em que Alex conduz palestras (independe do idioma da interface). */
  talkLanguages: ['pt', 'en'] as const,
  honor: {
    year: 2018,
    date: '2018-12-07',
    /** Ata oficial da 1ª Sessão Solene de 07/12/2018, página 2. */
    sourceUrl: 'https://sapl.indaiatuba.sp.leg.br/sapl_documentos/ata_sessao/79_ata_sessao.pdf#page=2',
  },
} as const;

/**
 * Permissões de publicação. Mantenha `false` até haver autorização por escrito.
 * Ao virar `true`, o nome da empresa aparece em títulos, legendas, alt e JSON-LD.
 */
export const publish = {
  /** Nome "Kuraray" na palestra em inglês de São Paulo. */
  kurarayName: false,
  /** Nome "Voilier" na palestra de Valinhos. */
  voilierName: false,
  /** Link público para o PDF do media kit (exige versão aprovada para distribuição). */
  mediaKit: false,
  /** Credencial TEDx (exige edição identificada ou publicação oficial). */
  tedx: false,
} as const;

export { type TopicId, topicIds } from '../shared/lead.ts';
