# Alex Cassimiro — site institucional

Site trilíngue (pt-BR, en, es) de Alex Cassimiro, palestrante corporativo e consultor em desenvolvimento de lideranças, pessoas e cultura. Objetivo: gerar pedidos de proposta qualificados para palestras e abrir conversas sobre trilhas de liderança e consultoria. Preparado para receber tráfego de anúncios.

**Stack:** HTML estático gerado em TypeScript + CSS puro + TypeScript no cliente (~5 KB gzip), servido por **Cloudflare Workers com Static Assets**. O Worker roda apenas para `POST /api/lead` (formulário) e `/robots.txt` (bloqueio de indexação em prévias). Sem framework e sem CMS: conteúdo editável em arquivos TypeScript.

| Ferramenta | Versão testada       |
| ---------- | -------------------- |
| Node.js    | 24.11 (mínimo 20.19) |
| TypeScript | 7.0                  |
| Wrangler   | 4.158                |
| esbuild    | 0.28                 |
| Vitest     | 5.1                  |
| Biome      | 2.6                  |

## Comandos

```bash
npm ci                 # instala dependências (lockfile versionado)
npm run build          # gera dist/ (HTML, OG, sitemap, robots, llms.txt, _headers, _redirects)
npm run preview        # build + prévia local com o Worker em http://127.0.0.1:8790
npm run typecheck      # checagem de tipos
npm run lint           # Biome (lint + formatação)
npm test               # Vitest (requer build antes para os testes de HTML)
npm run check          # tudo acima, na ordem
npm run media          # re-otimiza imagens/vídeos a partir de materiais/originais (fora do Git)
npm run deploy         # build + wrangler deploy (use só no lançamento)
```

## Estrutura

```
src/
  content/        pt.ts · en.ts · es.ts  ← TODA a copy, alt, legendas, metadados e FAQ
                  types.ts               ← contrato que obriga os 3 idiomas a ficarem completos
  site/           config.ts  ← contatos, números do media kit, permissões de publicação (Kuraray/Voilier/TEDx/media kit)
                  routes.ts  ← equivalência de rotas entre idiomas (único lugar)
                  images.ts  ← inventário de imagens, recortes e larguras
  templates/      layout, páginas, componentes, formulário, SEO/JSON-LD
  styles/main.css design system (tokens, seções, animações, responsivo) — inline no HTML
  client/         main.ts (scroll, menu, contadores), form.ts, analytics.ts
  shared/lead.ts  validação do formulário usada no navegador E no Worker
  worker/         index.ts (roteamento) · lead.ts (API do formulário)
scripts/          build.ts · media.ts · og.ts
public/img/       imagens otimizadas (AVIF + WebP) — versionadas
materiais/        inventario.md (versionado) · originais/ (NÃO versionado)
tests/            lead.test.ts (validação + Worker) · build.test.ts (HTML gerado)
```

## Mapa de rotas

| Página                 | Português                            | Inglês                              | Espanhol                                   |
| ---------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------------ |
| Início                 | `/`                                  | `/en/`                              | `/es/`                                     |
| Palestras              | `/palestras/`                        | `/en/talks/`                        | `/es/conferencias/`                        |
| Inteligência emocional | `/palestras/inteligencia-emocional/` | `/en/talks/emotional-intelligence/` | `/es/conferencias/inteligencia-emocional/` |
| Palestras em inglês    | `/palestras-em-ingles/`              | `/en/english-speaking-engagements/` | `/es/conferencias-en-ingles/`              |
| Trilhas de liderança   | `/trilhas-de-lideranca/`             | `/en/leadership-development/`       | `/es/desarrollo-de-liderazgo/`             |
| Consultoria            | `/consultoria/`                      | `/en/consulting/`                   | `/es/consultoria/`                         |
| Sobre                  | `/sobre/`                            | `/en/about/`                        | `/es/sobre-alex/`                          |
| Contato                | `/contato/`                          | `/en/contact/`                      | `/es/contacto/`                            |
| Privacidade            | `/privacidade/`                      | `/en/privacy/`                      | `/es/privacidad/`                          |

404 localizada em `/404.html`, `/en/404.html`, `/es/404.html` (servida automaticamente pela pasta do idioma).
Atalhos para campanhas/peças: `/proposta`, `/orcamento`, `/en/proposal`, `/es/propuesta` → contato; `/whatsapp`, `/linkedin`, `/instagram`.

**Links de anúncio com tema e idioma pré-preenchidos** (editáveis no formulário):
`/contato/?tema=emotional-intelligence&idioma=en#proposta` — temas: `emotional-intelligence`, `ethics-harassment`, `mental-health`, `alcohol-drugs`, `active-care`, `gambling`, `leadership-program`, `consulting`, `other`; idioma: `pt`, `en`, `tbd`. Parâmetros `utm_*`, `gclid` e `fbclid` são preservados na sessão e anexados ao lead.

## Formulário de proposta (`POST /api/lead`)

- Obrigatórios: nome, empresa, e-mail, objetivo do evento. Opcionais: telefone, tema, data/mês, cidade e país, formato, público, idioma da palestra (português, inglês, a definir).
- Validação idêntica no cliente e no servidor (`src/shared/lead.ts`). Erros por campo, resumo acessível e campos preservados após falhas.
- Antiabuso: verificação de origem, limite de 4 envios/min por IP (Rate Limiting binding), honeypot, tempo mínimo de preenchimento, Turnstile opcional.
- Duplicidade: botão travado durante o envio + chave de idempotência por preenchimento + bloqueio do mesmo e-mail/objetivo por 10 min (KV quando houver; senão Cache API).
- **Confirmação só quando um destino durável aceita**: Resend (e-mail) e/ou webhook (n8n, Make, CRM) e/ou KV. Sem destino configurado a API responde `503 not_configured` e a página orienta usar WhatsApp/e-mail (estado atual da prévia).
- E-mail vai para `LEAD_TO_EMAIL` com remetente verificado `LEAD_FROM_EMAIL` e **Reply-To = e-mail do visitante**.

Configuração (ver `.env.example`):

```bash
npx wrangler secret put RESEND_API_KEY        # e defina LEAD_FROM_EMAIL em wrangler.jsonc (domínio verificado no Resend)
npx wrangler secret put LEAD_WEBHOOK_URL      # opcional
npx wrangler secret put LEAD_WEBHOOK_AUTH     # opcional
npx wrangler secret put TURNSTILE_SECRET_KEY  # opcional; também defina PUBLIC_TURNSTILE_SITE_KEY no build
npx wrangler kv namespace create LEADS        # opcional; cole o id em wrangler.jsonc
```

Teste local com destino de teste: crie `.dev.vars` com `LEAD_WEBHOOK_URL=http://127.0.0.1:8899/lead` e um receptor HTTP local.

## Medição (GA4/GTM)

Defina `PUBLIC_GTM_ID` no ambiente de build. Com ele, o site mostra o aviso de cookies e só carrega o GTM após aceite (Consent Mode com padrão negado); a política de privacidade passa a incluir a seção de medição. Eventos em `dataLayer`, **sem dados pessoais nem texto do briefing**:

| Evento               | Quando                                            | Parâmetros                                                                              |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `whatsapp_click`     | clique em qualquer link de WhatsApp               | `cta_position`, `topic`, `site_language`, `page_type`, `page_path`                      |
| `email_click`        | clique em `mailto:`                               | idem                                                                                    |
| `generate_lead`      | **após** o servidor confirmar o recebimento       | `topic`, `talk_language`, `cta_position`, `form_language`, `utm_source`, `utm_campaign` |
| `media_kit_download` | preparado; ativa quando o media kit for publicado | —                                                                                       |

## SEO, GEO e AEO

- HTML completo no build (conteúdo, títulos, navegação e links sem depender de JS).
- Por URL: `lang`, title, description, canonical próprio, Open Graph/Twitter com imagem própria (`/og/{idioma}-{página}.jpg`), `hreflang` autorreferente e recíproco + `x-default` → português.
- Seletor de idioma por links rastreáveis para a página equivalente; sem redirecionamento por IP/idioma.
- JSON-LD: `Person` (`@id` estável, foto aprovada, `sameAs`), `WebSite`, `WebPage`/`ProfilePage`/`ContactPage`/`CollectionPage`, `BreadcrumbList`, `FAQPage` e `Service` alinhados ao conteúdo visível. Sem avaliações, endereço ou eventos futuros.
- `sitemap.xml` com alternâncias, `robots.txt` liberando buscadores e assistentes de IA, `llms.txt` (respostas diretas: quem é, o que oferece, idiomas, evidências, como contratar) e `llms-full.txt` (conteúdo integral nos 3 idiomas).
- Prévia protegida: em `*.workers.dev` o `robots.txt` responde `Disallow: /` e há `X-Robots-Tag: noindex`; no domínio canônico, indexação normal.

## Performance e acessibilidade

- Imagens AVIF/WebP com `srcset`, dimensões fixas, placeholder borrado inline, hero com `preload` + `fetchpriority=high`, demais `lazy`.
- Fontes auto-hospedadas (Bodoni Moda 500 + Schibsted Grotesk variável, subset latino, ~79 KB), `preload`, `font-display: swap` e fallbacks com métricas ajustadas.
- CSS inline (sem requisição bloqueante), um módulo JS com hash e cache imutável, Speculation Rules (pré-renderização ao passar o mouse).
- Animações de entrada em CSS puro (não atrasam o LCP); revelação ao rolar, abertura de foto e linha das etapas via JS leve; tudo desligado com `prefers-reduced-motion`.
- Link para pular navegação, foco visível, menu móvel com foco preso e Esc, formulários com `aria-invalid`/`aria-describedby`, alvos de toque ≥ 44–52 px.
- Segurança: CSP com hash dos scripts inline, HSTS, `X-Frame-Options`, `Permissions-Policy`.
- Metas de campo (p75): LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. Medições de laboratório (Lighthouse) não substituem dados reais (CrUX/RUM) — acompanhe no Search Console após o lançamento.

## Testes executados (09/11/2026)

- `npm run typecheck` e `npm run lint`: sem erros.
- `npm test`: 50 testes — validação; Worker com método/origem/tipo inválidos, honeypot e envio rápido, dados inválidos (422), sem provedor (503), entrega Resend com Reply-To, falha do provedor (502), fallback para webhook, idempotência e duplicidade, rate limit (429), robots de prévia; HTML gerado nas 27 URLs (canonical, hreflang recíproco, `lang`, H1 único, JSON-LD válido, OG existente, seletor de idioma), links internos e imagens existentes, sitemap, robots, llms.txt, 404 localizadas, headers, aviso de idiomas em espanhol, ausência de nomes de clientes não autorizados.
- `wrangler dev`: rotas nos 3 idiomas, 404 localizadas, redirecionamentos, headers e robots de prévia.
- Navegador (Chrome): home e páginas em desktop (1568 px) e celular (390 px) sem rolagem horizontal; formulário com pré-preenchimento por URL, validação e foco, falha sem provedor com campos preservados, envio válido ponta a ponta para webhook de teste local, deduplicação e `generate_lead` só após confirmação; preferência de movimento reduzido respeitada.
- Não testado: entrega real por e-mail (sem credenciais Resend e remetente verificado) e Turnstile (sem chaves).

## Deploy (GitHub → Cloudflare Workers Builds)

1. Cloudflare Dashboard → Workers & Pages → **Create** → **Import a repository** → selecione `contatop12/alex-cassimiro`.
2. Build command: `npm run build` · Deploy command: `npx wrangler deploy` · Branch de produção: `main`. Variáveis de build (opcionais): `SITE_URL`, `PUBLIC_GTM_ID`, `PUBLIC_TURNSTILE_SITE_KEY`.
3. Configure os segredos do formulário (seção acima).
4. Cada push em `main` publica; branches geram versões de prévia (`*.workers.dev`, não indexáveis).

CI do GitHub (`.github/workflows/ci.yml`) roda typecheck, lint, build e testes em PRs e na `main`.

## Pendências específicas

- [ ] **Domínio**: comprar/validar `alexcassimiro.com.br` (proposto) e decidir sobre `oalexcassimiro.com.br` (redirecionar 301 para o canônico via Redirect Rules). Se o domínio final mudar, ajuste `SITE_URL` (build e `wrangler.jsonc`).
- [ ] **Logo oficial e manual**: não recebidos (link Adobe exige login). Substituir o wordmark tipográfico e o monograma "AC" e regenerar favicon/OG.
- [ ] **Autorização Kuraray** (nome e logo) e confirmação do segmento antes de usar "farmacêutica" → `publish.kurarayName = true` em `src/site/config.ts`.
- [ ] **Autorização Voilier** (nome) e dados verificados (idioma, data, público) → `publish.voilierName = true`.
- [ ] **Depoimentos**: destaque do Instagram exige login; enviar arquivos com nome, cargo, empresa e autorização.
- [ ] **TEDx**: identificar a edição ou publicação oficial antes de citar (`publish.tedx`).
- [ ] **Media kit**: versão aprovada para distribuição (sem TEDx não verificado e sem condição comercial datada "contratações em 2026 → trilha em 2027") → `publish.mediaKit`.
- [ ] **Biografia**: confirmar formação (Administração/Comércio Exterior, pós em Neuropsicopedagogia), fundação da Escola Waldorf Aracê e cargo/período no SESI (dados do currículo).
- [ ] **Formulário em produção**: domínio verificado no Resend (ou outro provedor) + `LEAD_FROM_EMAIL` + `RESEND_API_KEY`, ou webhook do CRM.
- [ ] **Privacidade**: revisão jurídica; confirmar operador de e-mail e prazo de retenção.
- [ ] **Analytics**: criar contêiner GTM/GA4 e definir `PUBLIC_GTM_ID`.

## Checklist de lançamento

- [ ] Domínio na Cloudflare, Custom Domain apontado para o Worker, redirecionamentos `www` e `oalexcassimiro.com.br` → canônico (301).
- [ ] `SITE_URL` correto; segredos do formulário configurados; envio real testado com destino autorizado.
- [ ] Search Console: propriedade de domínio verificada, `sitemap.xml` enviado, inspeção de URL de `/`, `/en/` e `/es/` e de uma página interna por idioma.
- [ ] Bing Webmaster Tools (importar do Search Console).
- [ ] Teste de pré-visualização social (LinkedIn Post Inspector, WhatsApp) das páginas principais.
- [ ] GTM publicado com consentimento; conferir `generate_lead` no DebugView.
- [ ] Rodar PageSpeed Insights nas páginas de destino dos anúncios; acompanhar Core Web Vitals reais após 28 dias.
