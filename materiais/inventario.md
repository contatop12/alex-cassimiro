# Inventário de ativos

Originais em `materiais/originais/` (fora do Git, baixados do Drive do projeto em 09/11/2026).
Versões otimizadas em `public/img/` (AVIF + WebP responsivos), geradas por `npm run media`.

| Chave publicada | Original | Contexto | Destino no site | Publicação |
| --- | --- | --- | --- | --- |
| `heroPoster` + `public/video/hero.{webm,mp4}` | Vídeo/Palestra Voiler.mp4 (vertical 2160×3840, 2min10s, legendas gravadas) | Alex falando; reels da palestra | Hero da home (vídeo sem som em loop + pôster como LCP), JSON-LD `VideoObject` | Aprovado pelo cliente (09/11/2026). Recorte 4:5 (`crop=2160:2700:0:280`), 720×900, MP4 11 MB / WebM 10,5 MB |
| `heroPortrait` | Retratos/Retrato sorridente diante da parede vermelha.png | Estúdio; fundo trocado pelo azul da logo | OG, JSON-LD `Person.image` | Aprovado (escolhido entre os 2 candidatos do briefing pela expressão e pelo recorte 4:5) |
| `aboutPortrait` | Retratos/Retrato confiante contra fundo vermelho.png | Estúdio, braços cruzados | Sobre (home e página) | Aprovado |
| `invitePortrait` | Retratos/Homem em Fundo Vermelho Fazendo Convite.png | Estúdio, gesto de convite | CTA final de todas as páginas | Aprovado |
| `statePressure`, `stateDoubt`, `stateExplain`, `stateOpen` | Retratos/Homem preocupado…, Retrato de homem barbudo em dúvida…, Homem Gesticulando…, Retrato acolhedor com braços abertos… | Expressões encenadas | Página de inteligência emocional (situações de trabalho) | Aprovado |
| `podium` | Retratos/Alex Perfil.png | Alex ao microfone em púlpito | Página Sobre (citação) | Aprovado — evento sem identificação no site |
| `talkEnglish` | Palestras/palestra-alex-cassimiro-em-ingles-…-kuraray (slide "Now you already know…") | Palestra em inglês, São Paulo | Hero da página de palestras em inglês, registros da página de IE | Publicada sem nome da empresa. Texto do slide não é usado como afirmação |
| `talkWalk`, `talkRoom`, `talkEnergy`, `talkQuestion`, `talkListening`, `talkMic` | Palestras/…kuraray… (6 fotos) | Mesma palestra em inglês, São Paulo | Abertura da home, mosaicos, página de palestras | Publicadas sem nome da empresa |
| `valinhosGroup` | Palestras/palestra-alex-cassimiro-inteligencia-emocional-para-voilier-em-valinho.jpeg | Foto de grupo, Valinhos | Experiências, IE, palestras | Publicada sem nome da empresa, composição horizontal preservada |
| `valinhosPortrait` | Retratos/Perfil Palestra Voilier.jpeg | Retrato no dia da palestra em Valinhos | Hero da consultoria | Publicada sem nome da empresa |

## Documentos internos (não publicados)

| Arquivo | Uso |
| --- | --- |
| Media Kit Alex Cassimiro.pdf (2026) | Fonte de temas, trilha, processo, números (+17 anos, +1.000 líderes). **Não publicado**: contém credencial TEDx não verificada e condição comercial datada |
| Curriculo Alex.png | Conferência da biografia (formação, Waldorf Aracê, SESI). Não publicado |
| Ata da 1ª Sessão Solene de 07/12/2018 (Câmara de Indaiatuba), p. 2 | Fonte pública do título de Cidadão Indaiatubano — vinculada na página Sobre |

## Pendências de ativos

- **Logo**: recebida em 09/11/2026 (SVGs clara, escura e monograma) e aplicada no cabeçalho, menu, rodapé, favicon e imagens de compartilhamento. Manual de marca não recebido.
- **Fundo dos retratos**: o vermelho de estúdio foi trocado pelo azul da logo (#0A2850) a pedido do cliente (`scripts/recolor.ts`, aplicado por `npm run media`).
- **Depoimentos**: destaque do Instagram exige login e não há autorização registrada → bloco omitido.
- **Vídeos**: "Palestra Voiler.mp4" no hero da home. Outros vídeos: colocar em `materiais/originais/videos/` e ajustar `scripts/media.ts`.
