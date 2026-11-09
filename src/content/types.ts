/**
 * Contrato de conteúdo. Cada idioma (pt, en, es) implementa `Dict` por completo,
 * garantindo que nenhuma página, campo, erro, alt ou metadado fique sem tradução.
 */

import type { AudienceId, ErrorCode, FormatId, TalkLanguageId, TopicId } from '../shared/lead.ts';
import type { ImageKey } from '../site/images.ts';
import type { PageId } from '../site/routes.ts';

export interface Faq {
  q: string;
  /** Resposta em texto simples (vai também para o JSON-LD FAQPage). */
  a: string;
}

export interface Item {
  title: string;
  text: string;
}

export interface Theme {
  id: Exclude<TopicId, 'leadership-program' | 'consulting' | 'other'>;
  /** Âncora localizada usada em /palestras/#ancora */
  anchor: string;
  title: string;
  /** Subtítulo documentado no media kit */
  subtitle: string;
  summary: string;
  forWhom: string;
  whenToHire: string;
  covers: string[];
  /** Nota de escopo para temas sensíveis (educativo, sem caráter clínico/jurídico) */
  note?: string;
}

export interface Solution {
  id: 'talk' | 'program' | 'consulting';
  page: PageId;
  name: string;
  /** Uma frase: o que é */
  what: string;
  /** Quando é indicada */
  indicated: string;
  /** Formato e duração típicos, sem prometer resultado */
  format: string;
  /** Profundidade/acompanhamento */
  depth: string;
}

export interface CaseStudy {
  /** Rótulo factual curto, ex.: "Palestra de inteligência emocional em inglês" */
  label: string;
  place: string;
  /** Texto sem nome da empresa (padrão enquanto não houver autorização) */
  text: string;
  /** Texto com nome da empresa (usado quando publish.<empresa>Name = true) */
  textNamed: string;
}

export interface ImageText {
  alt: string;
  altNamed?: string;
  caption?: string;
  captionNamed?: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Dict {
  langName: string;
  skipLink: string;
  identity: string;
  role: string;
  nav: {
    label: string;
    talks: string;
    english: string;
    leadership: string;
    consulting: string;
    about: string;
    contact: string;
    home: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
  cta: {
    proposal: string;
    topics: string;
    whatsapp: string;
    email: string;
    readBio: string;
    seeEnglish: string;
    seeTalks: string;
    seeEi: string;
    seeLeadership: string;
    seeConsulting: string;
    backHome: string;
    proposalForTopic: string;
  };
  whatsapp: {
    message: string;
    /** Use {topic} para inserir o tema */
    messageTopic: string;
    floatingLabel: string;
  };
  talkLanguagesLine: string;
  stats: {
    years: string;
    yearsLabel: string;
    leaders: string;
    leadersLabel: string;
    languages: string;
    languagesLabel: string;
    /** Use {year} */
    source: string;
  };
  themeLabels: { forWhom: string; whenToHire: string; covers: string; scope: string };
  solutionLabels: { indicated: string; format: string; depth: string };
  themes: Theme[];
  solutions: Solution[];
  hireSteps: Item[];
  cases: { english: CaseStudy; voilier: CaseStudy };
  images: Partial<Record<ImageKey, ImageText>>;
  footer: {
    tagline: string;
    contactTitle: string;
    pagesTitle: string;
    followTitle: string;
    languagesTitle: string;
    privacy: string;
    rights: string;
    instagramLabel: string;
    linkedinLabel: string;
  };
  consent: { text: string; accept: string; reject: string; policy: string };
  form: {
    title: string;
    requiredHint: string;
    detailsLegend: string;
    labels: {
      name: string;
      company: string;
      email: string;
      objective: string;
      phone: string;
      topic: string;
      date: string;
      location: string;
      format: string;
      audience: string;
      talkLanguage: string;
    };
    placeholders: { objective: string; date: string; location: string; phone: string };
    hints: { objective: string; talkLanguage: string };
    selectPlaceholder: string;
    topicOptions: Record<TopicId, string>;
    formatOptions: Record<FormatId, string>;
    audienceOptions: Record<AudienceId, string>;
    talkLanguageOptions: Record<TalkLanguageId, string>;
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    errorSummary: string;
    errors: Record<ErrorCode, string>;
    failure: {
      network: string;
      server: string;
      rateLimited: string;
      notConfigured: string;
      spam: string;
    };
    /** Use {link} para o link da política */
    privacy: string;
    alternatives: string;
  };
  pages: {
    home: {
      h1: string;
      support: string;
      portraitAlt: string;
      english: { title: string; text: string; textNamed: string; link: string };
      topics: { title: string; intro: string; more: string };
      cases: { title: string; intro: string };
      about: { title: string; text: string; quote: string };
      solutions: { title: string; intro: string };
      hire: { title: string; intro: string };
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    talks: {
      h1: string;
      intro: string;
      themesTitle: string;
      leadership: Item;
      personalizationTitle: string;
      personalization: Item[];
      formatsTitle: string;
      formats: Item[];
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    ei: {
      h1: string;
      intro: string;
      situationsTitle: string;
      situationsIntro: string;
      situations: (Item & { image: ImageKey })[];
      audiencesTitle: string;
      audiences: Item[];
      formatsTitle: string;
      formats: Item[];
      customTitle: string;
      custom: string[];
      evidenceTitle: string;
      evidenceText: string;
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    english: {
      h1: string;
      intro: string;
      contextsTitle: string;
      contexts: Item[];
      recordTitle: string;
      recordText: string;
      recordTextNamed: string;
      howTitle: string;
      how: Item[];
      topicsTitle: string;
      topicsText: string;
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    leadership: {
      h1: string;
      intro: string;
      compareTitle: string;
      compareHead: { aspect: string; talk: string; program: string };
      compare: { aspect: string; talk: string; program: string }[];
      pillarsTitle: string;
      pillars: Item[];
      journeyTitle: string;
      journeyIntro: string;
      journeyUnit: string;
      journey: Item[];
      formatsTitle: string;
      formats: Item[];
      scopeNote: string;
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    consulting: {
      h1: string;
      intro: string;
      whenTitle: string;
      when: string[];
      processTitle: string;
      process: Item[];
      scopeTitle: string;
      scope: string[];
      faqTitle: string;
      faq: Faq[];
      final: { title: string; text: string };
    };
    about: {
      h1: string;
      lead: string;
      bio: string[];
      honor: string;
      honorSource: string;
      factsTitle: string;
      facts: { label: string; value: string }[];
      approachTitle: string;
      approach: Item[];
      quote: string;
      quoteSource: string;
      final: { title: string; text: string };
    };
    contact: {
      h1: string;
      intro: string;
      directTitle: string;
      directText: string;
      nextTitle: string;
      next: Item[];
    };
    privacy: {
      h1: string;
      updated: string;
      intro: string;
      sections: { title: string; paragraphs: string[] }[];
      analytics: { title: string; paragraphs: string[] };
    };
    notFound: { h1: string; text: string; linksTitle: string };
  };
  meta: Record<PageId | 'notFound', PageMeta>;
  breadcrumbHome: string;
}
