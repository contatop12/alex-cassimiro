import type { Dict } from './types.ts';

export const pt: Dict = {
  langName: 'Português',
  skipLink: 'Pular para o conteúdo',
  identity: 'Alex Cassimiro · Palestrante corporativo',
  role: 'Educador, palestrante e comunicador',
  nav: {
    label: 'Navegação principal',
    talks: 'Palestras',
    english: 'Palestras em inglês',
    leadership: 'Trilhas de liderança',
    consulting: 'Consultoria',
    about: 'Sobre',
    contact: 'Contato',
    home: 'Início',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    language: 'Idioma do site',
  },
  cta: {
    proposal: 'Solicitar proposta',
    topics: 'Conhecer as palestras',
    whatsapp: 'Conversar no WhatsApp',
    email: 'Enviar e-mail',
    readBio: 'Ler a biografia completa',
    seeEnglish: 'Ver palestras em inglês',
    seeTalks: 'Ver todos os temas',
    seeEi: 'Ver a palestra de inteligência emocional',
    seeLeadership: 'Conhecer as trilhas de liderança',
    seeConsulting: 'Conhecer a consultoria',
    backHome: 'Voltar ao início',
    proposalForTopic: 'Pedir proposta para este tema',
  },
  whatsapp: {
    message: 'Olá, Alex! Vim pelo site e gostaria de conversar sobre uma palestra para a minha empresa.',
    messageTopic: 'Olá, Alex! Vim pelo site e gostaria de conversar sobre: {topic}.',
    floatingLabel: 'Conversar com Alex no WhatsApp',
  },
  talkLanguagesLine: 'Palestras em português e inglês',
  video: {
    label: 'Vídeo de Alex Cassimiro falando sobre inteligência emocional, com legendas em português',
    soundOn: 'Ativar som',
    soundOff: 'Desativar som',
    pause: 'Pausar vídeo',
    play: 'Reproduzir vídeo',
  },
  stats: {
    years: '+17 anos',
    yearsLabel: 'de experiência em desenvolvimento de pessoas e lideranças',
    leaders: '+1.000',
    leadersLabel: 'líderes treinados em programas de liderança',
    languages: '2 idiomas',
    languagesLabel: 'palestras em português e em inglês',
    source: 'Números do media kit institucional de {year}.',
  },
  themeLabels: {
    forWhom: 'Para quem faz sentido',
    whenToHire: 'Quando contratar',
    covers: 'O que é abordado',
    scope: 'Escopo',
  },
  solutionLabels: {
    indicated: 'Indicada quando',
    format: 'Formato',
    depth: 'Profundidade',
  },
  themes: [
    {
      id: 'emotional-intelligence',
      anchor: 'inteligencia-emocional',
      title: 'Inteligência emocional',
      subtitle: 'Emoções, pressão e relações no dia a dia do trabalho',
      summary:
        'Como reconhecer o que sentimos sob pressão e escolher a resposta antes de reagir — em conversas difíceis, no feedback e na colaboração entre áreas.',
      forWhom:
        'Líderes e equipes que trabalham sob prazos apertados, lidam com clientes exigentes ou dependem de outras áreas para entregar.',
      whenToHire:
        'Convenções, semanas internas, encontros de liderança, programas de integração ou fases de mudança que aumentam a tensão no dia a dia.',
      covers: [
        'Reconhecer sinais de pressão em si e na equipe antes que virem conflito',
        'Conduzir conversas difíceis com clareza e respeito',
        'Dar e receber feedback sem transformar a conversa em disputa',
        'Colaborar entre áreas com metas e ritmos diferentes',
      ],
    },
    {
      id: 'ethics-harassment',
      anchor: 'etica-e-integridade',
      title: 'Ética e integridade',
      subtitle: 'Tolerância zero ao assédio',
      summary:
        'Ambientes mais seguros, respeitosos e éticos, com foco na construção de uma cultura de integridade.',
      forWhom: 'Lideranças e equipes de empresas que estão fortalecendo a cultura de integridade e respeito.',
      whenToHire:
        'Campanhas internas de integridade, integração de novos líderes, revisão do código de conduta ou ações de prevenção ao assédio.',
      covers: [
        'Comportamentos que tornam o ambiente inseguro e como reconhecê-los',
        'O papel de cada líder na prevenção e no acolhimento',
        'Respeito como prática cotidiana nas relações de trabalho',
      ],
      note: 'Conteúdo educativo. Não substitui orientação jurídica nem os canais e políticas de compliance da empresa.',
    },
    {
      id: 'mental-health',
      anchor: 'saude-mental',
      title: 'Saúde mental em debate',
      subtitle: 'Conscientização e bem-estar no trabalho',
      summary:
        'Conscientização, autocuidado e estratégias para promover o bem-estar no ambiente de trabalho.',
      forWhom: 'Equipes e lideranças de qualquer área, especialmente em períodos de sobrecarga.',
      whenToHire:
        'Campanhas como o Setembro Amarelo, semanas de saúde e bem-estar ou ações de cuidado com as equipes.',
      covers: [
        'Sinais de sobrecarga que merecem atenção',
        'Autocuidado como responsabilidade individual e coletiva',
        'Como a liderança pode abrir espaço para o tema',
      ],
      note: 'Abordagem educativa, sem caráter clínico ou terapêutico. Não substitui acompanhamento profissional de saúde.',
    },
    {
      id: 'alcohol-drugs',
      anchor: 'alcool-e-outras-drogas',
      title: 'Mitos e verdades',
      subtitle: 'O impacto do álcool e outras drogas na atualidade',
      summary: 'Informação baseada em ciência para decisões mais conscientes e responsáveis.',
      forWhom: 'Equipes operacionais e administrativas, lideranças e áreas de saúde e segurança.',
      whenToHire: 'SIPAT, campanhas de prevenção e ações de saúde e segurança do trabalho.',
      covers: [
        'Mitos comuns sobre álcool e outras drogas',
        'Impactos no comportamento, na segurança e nas relações',
        'Decisões conscientes no trabalho e fora dele',
      ],
      note: 'Abordagem educativa e preventiva, sem caráter clínico.',
    },
    {
      id: 'active-care',
      anchor: 'cultura-do-cuidado-ativo',
      title: 'A cultura do cuidado ativo',
      subtitle: 'Fortalecendo a base da empresa',
      summary: 'Segurança, bem-estar e relações humanas como pilares da sustentabilidade do negócio.',
      forWhom: 'Empresas que querem envolver lideranças e equipes na segurança e no cuidado com as pessoas.',
      whenToHire: 'SIPAT, lançamento de programas de segurança e bem-estar e encontros de liderança.',
      covers: [
        'Cuidado ativo: perceber, agir e acompanhar',
        'Segurança e bem-estar como responsabilidade compartilhada',
        'Relações de confiança que sustentam a cultura',
      ],
    },
    {
      id: 'financial-health',
      anchor: 'saude-financeira-e-comportamento',
      title: 'Saúde financeira e comportamento',
      subtitle: 'Emoções, escolhas e a relação com o dinheiro',
      summary:
        'Como emoções, hábitos e decisões influenciam a relação com o dinheiro, e o que isso tem a ver com saúde mental, relações e trabalho.',
      forWhom:
        'Equipes e lideranças de empresas que querem cuidar do bem-estar das pessoas de forma integral.',
      whenToHire:
        'Semanas de saúde e bem-estar, SIPAT, ações de educação financeira ou campanhas de cuidado com as equipes.',
      covers: [
        'Como emoções e hábitos influenciam as decisões financeiras',
        'Relações entre dívidas, estresse e saúde mental',
        'Consumo por impulso, apostas e outros sinais de alerta',
        'Escolhas mais conscientes no trabalho e fora dele',
      ],
      note: 'Abordagem educativa e de conscientização, sem caráter clínico. Não substitui acompanhamento psicológico, médico ou orientação financeira especializada.',
    },
  ],
  solutions: [
    {
      id: 'talk',
      page: 'talks',
      name: 'Palestra',
      what: 'Um encontro para mobilizar o público em torno de um tema.',
      indicated: 'O evento precisa abrir uma conversa, alinhar um tema ou marcar um momento da empresa.',
      format: 'Presencial ou on-line, em português ou inglês, com duração definida no briefing.',
      depth: 'Um encontro, com conteúdo ajustado ao público e ao objetivo do evento.',
    },
    {
      id: 'program',
      page: 'leadership',
      name: 'Trilha de liderança',
      what: 'Uma jornada de desenvolvimento para líderes, com prática entre os encontros.',
      indicated:
        'A empresa precisa desenvolver comportamentos de liderança ao longo do tempo, e não só inspirar.',
      format: 'Encontros presenciais, on-line ao vivo ou híbridos, mensais ou intensivos.',
      depth: 'Vários módulos, com desafios aplicados, ferramentas e acompanhamento.',
    },
    {
      id: 'consulting',
      page: 'consulting',
      name: 'Consultoria',
      what: 'Consultoria estratégica em gestão, processos e desenvolvimento organizacional, com o consultor Sergio Del Corso.',
      indicated:
        'A empresa quer aprimorar a gestão, revisar processos ou encontrar soluções para desafios estratégicos.',
      format: 'Projeto sob medida, estruturado a partir de uma conversa sobre o contexto da empresa.',
      depth: 'Análise do contexto, identificação de oportunidades e proposta de atuação.',
    },
  ],
  hireSteps: [
    {
      title: 'Você compartilha o briefing',
      text: 'Conte o objetivo do evento e o que já sabe sobre público, data e formato. Dá para começar sem todas as respostas.',
    },
    {
      title: 'Alex alinha os detalhes',
      text: 'Em uma conversa curta, Alex alinha objetivo, público, idioma da palestra e formato com quem está organizando.',
    },
    {
      title: 'Você recebe a proposta',
      text: 'A proposta chega de acordo com o escopo: tema, abordagem, formato, duração e investimento.',
    },
  ],
  cases: {
    english: {
      label: 'Palestra de inteligência emocional em inglês',
      place: 'São Paulo, SP',
      text: 'Palestra sobre inteligência emocional conduzida em inglês para colaboradores de uma empresa com atuação internacional, em São Paulo.',
      textNamed:
        'Palestra sobre inteligência emocional conduzida em inglês para colaboradores da Kuraray, em São Paulo.',
    },
    voilier: {
      label: 'Palestra de inteligência emocional',
      place: 'Valinhos, SP',
      text: 'Palestra sobre inteligência emocional para a equipe de uma empresa em Valinhos, no interior de São Paulo.',
      textNamed:
        'Palestra sobre inteligência emocional para a equipe da Voilier, em Valinhos, no interior de São Paulo.',
    },
  },
  images: {
    heroPortrait: { alt: 'Alex Cassimiro sorrindo, de camiseta azul-marinho, diante de uma parede vermelha' },
    aboutPortrait: {
      alt: 'Alex Cassimiro de braços cruzados, com expressão serena, diante de uma parede vermelha',
    },
    invitePortrait: { alt: 'Alex Cassimiro estendendo a mão em gesto de convite' },
    statePressure: { alt: 'Alex Cassimiro com as mãos na cabeça, encenando um momento de pressão' },
    stateDoubt: { alt: 'Alex Cassimiro encolhendo os ombros, encenando dúvida' },
    stateExplain: { alt: 'Alex Cassimiro gesticulando como quem explica algo com calma' },
    stateOpen: { alt: 'Alex Cassimiro sorrindo, com os braços abertos' },
    podium: {
      alt: 'Alex Cassimiro falando ao microfone em um púlpito',
      caption: 'Alex Cassimiro em apresentação ao microfone.',
    },
    talkEnglish: {
      alt: 'Alex Cassimiro fala ao microfone para participantes sentados, com um slide em inglês projetado ao fundo',
      caption: 'Palestra de inteligência emocional conduzida em inglês · São Paulo, SP',
      captionNamed: 'Palestra de inteligência emocional conduzida em inglês na Kuraray · São Paulo, SP',
    },
    talkEnergy: {
      alt: 'Alex Cassimiro sorri ao microfone entre as mesas dos participantes',
      caption: 'Interação com o público durante a palestra em inglês · São Paulo, SP',
    },
    talkQuestion: {
      alt: 'Participante faz uma pergunta a Alex Cassimiro diante de um slide com perguntas do público',
      caption: 'Momento de perguntas, conduzido em inglês · São Paulo, SP',
    },
    talkListening: {
      alt: 'Alex Cassimiro lê ao microfone a anotação de uma participante enquanto o grupo escreve',
      caption: 'Atividade escrita com os participantes · São Paulo, SP',
    },
    talkRoom: {
      alt: 'Sala em formato de U com dezenas de participantes e Alex Cassimiro ao centro',
      caption: 'Visão geral da sala durante a palestra · São Paulo, SP',
    },
    talkWalk: {
      alt: 'Alex Cassimiro caminha pelo centro da sala enquanto fala com os participantes',
      caption: 'Palestra de inteligência emocional em inglês · São Paulo, SP',
    },
    talkMic: {
      alt: 'Alex Cassimiro fala ao microfone de pé, próximo aos participantes',
      caption: 'Palestra de inteligência emocional em inglês · São Paulo, SP',
    },
    valinhosGroup: {
      alt: 'Foto em grupo dos participantes com Alex Cassimiro ao final de uma palestra',
      caption: 'Palestra de inteligência emocional · Valinhos, SP',
      captionNamed: 'Palestra de inteligência emocional na Voilier · Valinhos, SP',
    },
    valinhosPortrait: {
      alt: 'Alex Cassimiro sentado, sorrindo, em um ambiente com plantas',
      caption: 'Alex Cassimiro no dia da palestra em Valinhos, SP',
    },
    sergioPortrait: {
      alt: 'Sergio Del Corso, consultor estratégico, sorrindo, de terno azul-marinho e gravata',
    },
  },
  footer: {
    tagline:
      'Palestras corporativas, trilhas de liderança e consultoria em desenvolvimento de pessoas e cultura. Palestras em português e inglês.',
    contactTitle: 'Contato',
    pagesTitle: 'Páginas',
    followTitle: 'Redes',
    languagesTitle: 'Idiomas do site',
    privacy: 'Política de privacidade',
    rights: 'Todos os direitos reservados.',
    instagramLabel: 'Instagram de Alex Cassimiro',
    linkedinLabel: 'LinkedIn de Alex Cassimiro',
    creditPrefix: 'Desenvolvido por',
  },
  consent: {
    text: 'Usamos cookies de medição para entender quais páginas ajudam empresas a encontrar as palestras. Nenhum dado do formulário é enviado para essas ferramentas.',
    accept: 'Aceitar medição',
    reject: 'Recusar',
    policy: 'Política de privacidade',
  },
  form: {
    title: 'Pedido de proposta',
    requiredHint: 'Campos com * são obrigatórios.',
    detailsLegend: 'Detalhes do evento (opcional)',
    labels: {
      name: 'Nome',
      company: 'Empresa',
      email: 'E-mail corporativo',
      objective: 'Objetivo do evento',
      phone: 'Telefone ou WhatsApp',
      topic: 'Tema de interesse',
      date: 'Data ou mês previsto',
      location: 'Cidade e país',
      format: 'Formato',
      audience: 'Estimativa de público',
      talkLanguage: 'Idioma da palestra',
    },
    placeholders: {
      objective: 'Ex.: abrir a semana de liderança com uma conversa sobre pressão e feedback.',
      date: 'Ex.: março de 2027',
      location: 'Ex.: São Paulo, Brasil',
      phone: 'Ex.: +55 11 90000-0000',
    },
    hints: {
      objective: 'Conte o que o evento precisa provocar no público. Pode ser uma ideia inicial.',
      talkLanguage: 'O idioma da palestra é independente do idioma deste site.',
    },
    selectPlaceholder: 'Selecione',
    topicOptions: {
      'emotional-intelligence': 'Inteligência emocional',
      'ethics-harassment': 'Ética e integridade (assédio)',
      'mental-health': 'Saúde mental no trabalho',
      'alcohol-drugs': 'Álcool e outras drogas',
      'active-care': 'Cultura do cuidado ativo',
      'financial-health': 'Saúde financeira e comportamento',
      'leadership-program': 'Trilha de liderança',
      consulting: 'Consultoria estratégica',
      other: 'Outro ou ainda não sei',
    },
    formatOptions: {
      'in-person': 'Presencial',
      online: 'On-line',
      hybrid: 'Híbrido',
      undecided: 'A definir',
    },
    audienceOptions: {
      'up-to-50': 'Até 50 pessoas',
      '50-150': '50 a 150 pessoas',
      '150-500': '150 a 500 pessoas',
      '500-plus': 'Mais de 500 pessoas',
      undecided: 'A definir',
    },
    talkLanguageOptions: {
      pt: 'Português',
      en: 'Inglês',
      tbd: 'A definir',
    },
    submit: 'Enviar pedido de proposta',
    sending: 'Enviando…',
    successTitle: 'Pedido recebido',
    successText:
      'Obrigado. Alex vai ler o seu briefing e responder pelo e-mail informado. Se preferir adiantar a conversa, chame no WhatsApp.',
    sendAnother: 'Enviar outro pedido',
    errorSummary: 'Revise os campos destacados para enviar o pedido.',
    errors: {
      required: 'Preencha este campo.',
      too_short: 'Escreva um pouco mais.',
      too_long: 'Texto longo demais. Resuma em menos caracteres.',
      invalid_email: 'Informe um e-mail válido, como nome@empresa.com.',
      invalid_choice: 'Escolha uma das opções da lista.',
      invalid_phone: 'Use apenas números, espaços, +, ( ) e -.',
    },
    failure: {
      network:
        'Não foi possível enviar: verifique a conexão e tente de novo. Seus dados continuam no formulário.',
      server:
        'O envio falhou do nosso lado. Tente de novo em instantes ou fale direto pelo WhatsApp ou e-mail.',
      rateLimited: 'Muitos envios em sequência. Aguarde um minuto e tente de novo.',
      notConfigured:
        'O formulário ainda não está ativo nesta versão do site. Envie o pedido pelo WhatsApp ou por e-mail.',
      spam: 'Não foi possível validar o envio. Tente de novo ou fale pelo WhatsApp ou e-mail.',
    },
    privacy: 'Os dados são usados apenas para responder a este pedido. Saiba mais na {link}.',
    alternatives: 'Prefere outro canal?',
  },
  pages: {
    home: {
      h1: 'Compreender o comportamento humano é compreender os desafios do nosso tempo.',
      support:
        'Alex Cassimiro traduz conhecimento científico em palestras e experiências que conectam emoções, escolhas e comportamento aos desafios reais da vida e do trabalho.',
      portraitAlt: 'Alex Cassimiro sorrindo, de camiseta azul-marinho, diante de uma parede vermelha',
      english: {
        title: 'Experiência com palestras em inglês',
        text: 'Em São Paulo, Alex conduziu em inglês uma palestra sobre inteligência emocional para colaboradores de uma empresa com atuação internacional. A apresentação, as atividades e o momento de perguntas foram conduzidos em inglês.',
        textNamed:
          'Em São Paulo, Alex conduziu em inglês uma palestra sobre inteligência emocional para colaboradores da Kuraray. A apresentação, as atividades e o momento de perguntas foram conduzidos em inglês.',
        link: 'Como funcionam as palestras em inglês',
      },
      topics: {
        title: 'Temas de palestras',
        intro:
          'Cada palestra parte de situações reais de trabalho e é ajustada ao público, ao objetivo e ao formato do evento.',
        more: 'Detalhes de cada tema',
      },
      cases: {
        title: 'Experiências realizadas',
        intro:
          'Registros de palestras de inteligência emocional conduzidas em empresas do estado de São Paulo.',
      },
      about: {
        title: 'Sobre Alex',
        text: 'Alex Cassimiro trabalha há mais de 17 anos com desenvolvimento de pessoas e lideranças, em diferentes segmentos e contextos organizacionais. Sua abordagem combina conteúdo, experiência prática e metodologias aplicáveis para traduzir desafios humanos em desenvolvimento com relevância para o negócio.',
        quote: 'Transformo conhecimento em ação e desenvolvimento em resultados reais.',
      },
      solutions: {
        title: 'Palestra, trilha ou consultoria?',
        intro:
          'Nem todo desafio se resolve em um evento. Quando a empresa precisa de um projeto mais amplo, a conversa pode evoluir para uma trilha de liderança ou uma consultoria.',
      },
      hire: {
        title: 'Como contratar',
        intro:
          'Um processo curto, pensado para quem organiza eventos e precisa defender a contratação internamente.',
      },
      faqTitle: 'Perguntas frequentes',
      faq: [
        {
          q: 'Quais temas Alex Cassimiro aborda em suas palestras?',
          a: 'Alex aborda temas relacionados ao comportamento humano, às emoções e às relações no trabalho, incluindo inteligência emocional, saúde mental, liderança, cultura organizacional, ética e desenvolvimento humano. Cada experiência é construída considerando os desafios e objetivos da organização.',
        },
        {
          q: 'As palestras são personalizadas para cada empresa?',
          a: 'Sim. O conteúdo, os exemplos e as atividades são adaptados ao contexto da empresa, ao perfil do público e aos objetivos do encontro. A proposta é conectar conhecimento e situações reais do cotidiano.',
        },
        {
          q: 'As palestras são presenciais ou on-line?',
          a: 'As duas modalidades estão disponíveis. O formato é definido em conjunto, considerando o objetivo do evento, o público e a disponibilidade.',
        },
        {
          q: 'Em quais idiomas Alex realiza palestras?',
          a: 'Em português e inglês. O idioma é definido conforme a necessidade da empresa e o perfil dos participantes.',
        },
        {
          q: 'Qual é a duração de uma palestra?',
          a: 'A duração é definida de acordo com o objetivo e a programação do evento. As experiências podem ser estruturadas em diferentes formatos, desde encontros mais curtos até atividades ampliadas com interação.',
        },
        {
          q: 'Quais informações preciso enviar para solicitar uma proposta?',
          a: 'O nome da empresa e o objetivo do evento são suficientes para iniciar a conversa. Se disponíveis, também ajudam informações sobre data, cidade, público estimado, tema de interesse e formato desejado.',
        },
      ],
      final: {
        title: 'Vamos conversar sobre o seu evento?',
        text: 'Envie o briefing que tiver. Data, tema e tamanho de público podem ser definidos juntos.',
      },
    },
    talks: {
      h1: 'Palestras sobre comportamento humano e os desafios do nosso tempo.',
      intro:
        'Experiências de comunicação que traduzem conhecimento científico em reflexões e aprendizados sobre emoções, escolhas, relações e comportamento no trabalho.',
      langsNote: 'As experiências podem ser realizadas em português ou inglês.',
      themesTitle: 'Temas disponíveis',
      leadership: {
        title: 'Liderança em todos os temas',
        text: 'Liderança atravessa todas as palestras: como o líder conduz a conversa, dá o exemplo e sustenta o tema depois do evento. Para desenvolver líderes ao longo do tempo, conheça as trilhas de liderança.',
      },
      personalizationTitle: 'Como cada palestra é ajustada',
      personalization: [
        {
          title: 'Objetivo do evento',
          text: 'O que o público precisa levar para o trabalho na segunda-feira seguinte.',
        },
        {
          title: 'Público',
          text: 'Lideranças, equipes operacionais, áreas administrativas ou públicos mistos.',
        },
        { title: 'Exemplos e linguagem', text: 'Situações próximas do dia a dia da empresa e do setor.' },
        { title: 'Idioma e formato', text: 'Português ou inglês; presencial ou on-line.' },
      ],
      formatsTitle: 'Formatos',
      formats: [
        {
          title: 'Presencial',
          text: 'Em convenções, auditórios, salas de treinamento e encontros de liderança.',
        },
        {
          title: 'On-line ao vivo',
          text: 'Para equipes distribuídas, com interação pelo chat e por atividades guiadas.',
        },
      ],
      faqTitle: 'Dúvidas sobre as palestras',
      faq: [
        {
          q: 'Existe uma palestra específica sobre liderança?',
          a: 'A liderança é um tema transversal às experiências. Para empresas que desejam desenvolver competências de liderança de forma contínua, também existem as trilhas de desenvolvimento, estruturadas conforme os desafios da organização.',
        },
        {
          q: 'É possível combinar dois ou mais temas em uma palestra?',
          a: 'Sim. Os temas podem ser relacionados e adaptados conforme o objetivo do evento, o perfil do público e o tempo disponível. A proposta é construir uma experiência coerente, sem sobrecarregar o conteúdo.',
        },
        {
          q: 'As palestras sobre saúde mental, saúde financeira e comportamento têm caráter clínico?',
          a: 'Não. São experiências educativas e de conscientização, fundamentadas em conhecimento científico. Não substituem acompanhamento psicológico, médico ou orientação financeira especializada.',
        },
        {
          q: 'As palestras podem ser adaptadas para diferentes públicos e segmentos?',
          a: 'Sim. A linguagem, os exemplos e as atividades são ajustados à realidade dos participantes, sejam lideranças, equipes operacionais, áreas administrativas ou públicos mistos.',
        },
      ],
      final: {
        title: 'Encontrou o tema do seu evento?',
        text: 'Peça uma proposta. Se ainda não tiver certeza do tema, conte o objetivo e a escolha é feita junto.',
      },
    },
    ei: {
      h1: 'Palestra de inteligência emocional para empresas',
      intro:
        'Uma palestra sobre o que acontece com as pessoas quando o trabalho aperta — e sobre como escolher a resposta antes de reagir. Para líderes e equipes, em português ou inglês.',
      situationsTitle: 'Situações de trabalho abordadas',
      situationsIntro: 'A palestra parte de momentos que todo time conhece.',
      situations: [
        {
          title: 'Pressão e prazos',
          text: 'Perceber os próprios sinais de tensão e evitar que a pressão vire reação no automático.',
          image: 'statePressure',
        },
        {
          title: 'Conversas difíceis',
          text: 'Preparar e conduzir conversas delicadas com clareza, sem fugir do assunto nem atropelar o outro.',
          image: 'stateDoubt',
        },
        {
          title: 'Feedback',
          text: 'Dar e receber feedback de forma que a conversa melhore o trabalho em vez de gerar disputa.',
          image: 'stateExplain',
        },
        {
          title: 'Colaboração entre áreas',
          text: 'Lidar com metas, ritmos e prioridades diferentes sem transformar a diferença em conflito.',
          image: 'stateOpen',
        },
      ],
      audiencesTitle: 'Para quais públicos',
      audiences: [
        {
          title: 'Lideranças',
          text: 'Gestores que conduzem equipes sob pressão e precisam de conversas mais claras.',
        },
        { title: 'Equipes', text: 'Times que dependem uns dos outros e querem colaborar com menos atrito.' },
        {
          title: 'Times internacionais',
          text: 'Equipes que trabalham em inglês ou recebem participantes de outros países.',
        },
      ],
      formatsTitle: 'Formatos',
      formats: [
        {
          title: 'Presencial',
          text: 'Auditórios, salas de treinamento, convenções e encontros de liderança.',
        },
        { title: 'On-line ao vivo', text: 'Para equipes distribuídas, com interação e atividades guiadas.' },
        { title: 'Português ou inglês', text: 'O idioma da palestra é escolhido pela empresa na proposta.' },
      ],
      customTitle: 'O que pode ser personalizado',
      custom: [
        'Exemplos ligados ao setor e à rotina da empresa',
        'Ênfase em liderança, em equipes ou em ambos',
        'Atividades individuais ou em grupo, conforme o espaço',
        'Duração e encaixe na programação do evento',
        'Idioma da palestra: português ou inglês',
      ],
      evidenceTitle: 'Registros da palestra',
      evidenceText:
        'A palestra de inteligência emocional já foi conduzida em inglês em São Paulo e em português em Valinhos (SP).',
      faqTitle: 'Dúvidas sobre a palestra de inteligência emocional',
      faq: [
        {
          q: 'Para quem é a palestra de inteligência emocional?',
          a: 'Para líderes e equipes que lidam com pressão, conversas difíceis, feedback e colaboração entre áreas. O conteúdo é ajustado ao público de cada evento.',
        },
        {
          q: 'A palestra de inteligência emocional pode ser feita em inglês?',
          a: 'Sim. Alex já conduziu essa palestra em inglês para colaboradores de uma empresa com atuação internacional, em São Paulo.',
        },
        {
          q: 'A palestra tem caráter terapêutico?',
          a: 'Não. É uma palestra corporativa e educativa, voltada a situações de trabalho.',
        },
      ],
      final: {
        title: 'Inteligência emocional no seu próximo evento',
        text: 'Conte o objetivo e o público. O tema já vem preenchido no formulário.',
      },
    },
    english: {
      h1: 'Palestrante corporativo em inglês no Brasil',
      intro:
        'Para empresas que precisam de uma palestra conduzida inteiramente em inglês, no Brasil: equipes multinacionais, eventos com convidados de outros países e programas de liderança que acontecem em inglês.',
      contextsTitle: 'Quando uma palestra em inglês faz sentido',
      contexts: [
        {
          title: 'Equipes multinacionais',
          text: 'Times que trabalham em inglês no dia a dia e participam de eventos internos no mesmo idioma.',
        },
        {
          title: 'Convidados internacionais',
          text: 'Encontros no Brasil com participantes ou lideranças de outros países.',
        },
        {
          title: 'Programas globais',
          text: 'Iniciativas de desenvolvimento definidas pela matriz e conduzidas em inglês na operação brasileira.',
        },
      ],
      recordTitle: 'Registro: inteligência emocional em inglês, em São Paulo',
      recordText:
        'Alex conduziu em inglês uma palestra sobre inteligência emocional para colaboradores de uma empresa com atuação internacional, em São Paulo. A apresentação, as atividades e o momento de perguntas foram conduzidos em inglês.',
      recordTextNamed:
        'Alex conduziu em inglês uma palestra sobre inteligência emocional para colaboradores da Kuraray, em São Paulo. A apresentação, as atividades e o momento de perguntas foram conduzidos em inglês.',
      howTitle: 'Como funciona',
      how: [
        {
          title: 'Briefing no idioma que preferir',
          text: 'A conversa de alinhamento pode acontecer em português ou em inglês.',
        },
        { title: 'Palestra em inglês', text: 'Exposição, atividades e perguntas do público em inglês.' },
        {
          title: 'Exemplos do contexto da empresa',
          text: 'Situações próximas da rotina das equipes envolvidas.',
        },
      ],
      topicsTitle: 'Temas em inglês',
      topicsText:
        'A palestra de inteligência emocional já foi conduzida em inglês. A disponibilidade dos demais temas em inglês é confirmada na proposta.',
      faqTitle: 'Dúvidas sobre palestras em inglês',
      faq: [
        {
          q: 'A palestra é toda em inglês?',
          a: 'Sim. Quando a empresa escolhe o inglês, a apresentação, as atividades e as perguntas do público acontecem em inglês.',
        },
        {
          q: 'O briefing também precisa ser em inglês?',
          a: 'Não. A conversa de alinhamento pode ser em português ou em inglês, como for mais prático para quem organiza.',
        },
        {
          q: 'Alex faz palestras em espanhol?',
          a: 'Não. As palestras são conduzidas em português e em inglês.',
        },
      ],
      final: {
        title: 'Precisa de uma palestra em inglês?',
        text: 'O formulário já chega com o inglês selecionado como idioma da palestra.',
      },
    },
    leadership: {
      h1: 'Desenvolver líderes é transformar comportamentos na prática.',
      intro:
        'Jornadas de aprendizagem que conectam comportamento humano, relações e visão de negócio para desenvolver lideranças mais conscientes, preparadas e responsáveis.',
      presentation: [
        'As organizações enfrentam desafios que não se resolvem com um treinamento isolado. Desenvolver lideranças exige continuidade, reflexão, prática e aplicação no cotidiano.',
        'As Trilhas de Liderança são jornadas personalizadas que combinam conhecimento, experiências práticas e acompanhamento para transformar aprendizados em comportamentos observáveis no ambiente de trabalho.',
      ],
      compareTitle: 'Palestra pontual ou trilha?',
      compareHead: { aspect: 'Aspecto', talk: 'Palestra pontual', program: 'Trilha de liderança' },
      compare: [
        {
          aspect: 'Objetivo',
          talk: 'Abrir uma conversa e mobilizar o público',
          program: 'Desenvolver comportamentos de liderança',
        },
        { aspect: 'Duração', talk: 'Um encontro', program: 'Vários módulos ao longo de meses' },
        {
          aspect: 'Prática',
          talk: 'Reflexões e atividades no próprio evento',
          program: 'Desafios aplicados entre os encontros',
        },
        {
          aspect: 'Acompanhamento',
          talk: 'Não se aplica',
          program: 'Ferramentas, materiais e suporte para o dia a dia',
        },
      ],
      pillarsTitle: 'Como a trilha funciona',
      pillars: [
        { title: 'Desenvolvimento contínuo', text: 'Jornada estruturada de aprendizagem ao longo do ano.' },
        { title: 'Metodologias práticas', text: 'Conteúdos aplicáveis à realidade da organização.' },
        { title: 'Foco no trabalho', text: 'Evolução de comportamentos observáveis na rotina dos líderes.' },
        { title: 'Acompanhamento e aplicação', text: 'Ferramentas, desafios e suporte entre os encontros.' },
      ],
      journeyTitle: 'Exemplo de jornada anual',
      journeyIntro:
        'Um exemplo de sequência de módulos. Os conteúdos são escolhidos e ordenados conforme os desafios da sua organização.',
      journeyUnit: 'Módulo',
      journey: [
        { title: 'Atenção e desempenho sustentável', text: 'Liderança na era da IA.' },
        { title: 'Liderança multigeracional', text: 'Conexões e engajamento entre gerações.' },
        { title: 'Visão sistêmica e pensamento crítico', text: 'Decisões mais conscientes e estratégicas.' },
        { title: 'Comunicação e cultura de feedback', text: 'Diálogo, confiança e alta performance.' },
        { title: 'Inovação e criatividade', text: 'Transformando desafios em oportunidades.' },
        { title: 'Inteligência emocional e autocuidado', text: 'Bem-estar para liderar com equilíbrio.' },
        { title: 'Gestão da mudança', text: 'Adaptação e protagonismo em novos cenários.' },
        { title: 'Protagonismo e senso de propriedade', text: 'Da atitude individual ao impacto coletivo.' },
        { title: 'ESG e liderança responsável', text: 'Pessoas, negócios e sociedade.' },
        { title: 'Consolidação e plano de ação', text: 'Aplicação prática e próximos passos.' },
      ],
      formatsTitle: 'Formatos',
      formats: [
        { title: 'Presencial', text: 'Encontros mensais ou intensivos.' },
        { title: 'On-line ao vivo', text: 'Encontros interativos, sem deslocamento.' },
        { title: 'Híbrido', text: 'Combinação de encontros presenciais e on-line.' },
      ],
      scopeNote: 'A proposta é personalizada conforme duração, formato e número de participantes.',
      faqTitle: 'Dúvidas sobre as trilhas',
      faq: [
        {
          q: 'A trilha precisa ter dez módulos?',
          a: 'Não. A jornada apresentada é apenas uma referência. A quantidade de encontros, os temas e a duração são definidos conforme os desafios, os objetivos e a realidade de cada organização.',
        },
        {
          q: 'Como são definidos os temas da trilha?',
          a: 'A construção começa pela compreensão dos desafios da empresa e das necessidades de desenvolvimento dos líderes. A partir disso, são definidos os temas, a sequência dos módulos e as atividades práticas.',
        },
        {
          q: 'Como funciona o acompanhamento entre os encontros?',
          a: 'A aprendizagem continua entre os módulos por meio de desafios aplicados, reflexões, ferramentas e atividades relacionadas à rotina de liderança. O objetivo é favorecer a transferência do aprendizado para o trabalho.',
        },
        {
          q: 'A trilha pode ser realizada presencialmente, on-line ou em formato híbrido?',
          a: 'Sim. Os encontros podem acontecer presencialmente, on-line ao vivo ou em formato híbrido. A escolha considera a estrutura da empresa, a localização dos participantes e os objetivos do programa.',
        },
      ],
      final: {
        title: 'Vamos desenvolver as próximas lideranças da sua organização?',
        text: 'Conte quais desafios sua empresa enfrenta e quais comportamentos deseja desenvolver. A partir dessa conversa, podemos desenhar uma jornada de aprendizagem alinhada à realidade do negócio.',
      },
    },
    consulting: {
      h1: 'Estratégia e gestão para transformar desafios em resultados.',
      intro:
        'Soluções de consultoria estratégica para empresas que buscam aprimorar sua gestão, otimizar processos e fortalecer seu desenvolvimento organizacional.',
      presentationTitle: 'Consultoria estratégica empresarial',
      presentation: [
        'Por meio de uma parceria com o consultor Sergio Del Corso, conectamos experiência executiva e visão estratégica para apoiar empresas na identificação de oportunidades, melhoria da gestão e desenvolvimento de soluções práticas para seus negócios.',
        'A atuação combina conhecimento em gestão empresarial, análise de processos e compreensão dos desafios organizacionais, com foco em resultados consistentes.',
      ],
      focusTitle: 'Frentes de atuação',
      focus: [
        'Melhoria da gestão',
        'Otimização de processos',
        'Desenvolvimento organizacional',
        'Soluções práticas, com foco em resultados',
      ],
      partner: {
        role: 'Consultor estratégico',
        name: 'Sergio Del Corso',
        highlight:
          'Mais de 30 anos de experiência em gestão empresarial e desenvolvimento organizacional no Brasil e na Europa.',
        bio: [
          'Sergio Del Corso é consultor estratégico, graduado em Ciências Contábeis e especialista em Management. Com mais de 30 anos de experiência no Brasil e na Europa, construiu uma sólida trajetória executiva em gestão empresarial e desenvolvimento organizacional.',
          'Sua atuação é orientada à melhoria da gestão, otimização de processos e construção de soluções práticas para os desafios dos negócios, sempre com foco em resultados.',
        ],
      },
      faqTitle: 'Dúvidas sobre a consultoria',
      faq: [
        {
          q: 'Que tipo de empresa pode contratar a consultoria?',
          a: 'Empresas que desejam aprimorar sua gestão, revisar processos, identificar oportunidades de melhoria e desenvolver soluções para seus desafios estratégicos e organizacionais.',
        },
        {
          q: 'Como funciona o trabalho de consultoria?',
          a: 'O trabalho começa com uma conversa para compreender o contexto e os desafios da empresa. A partir dessa análise, são identificadas oportunidades e estruturada uma proposta de atuação adequada às necessidades do negócio.',
        },
        {
          q: 'Quem conduz os projetos de consultoria?',
          a: 'Os projetos são conduzidos pelo consultor Sergio Del Corso, profissional com mais de 30 anos de experiência em gestão empresarial e desenvolvimento organizacional, em parceria com Alex Cassimiro.',
        },
        {
          q: 'A consultoria oferece soluções personalizadas?',
          a: 'Sim. Cada projeto considera a realidade, os objetivos e as necessidades específicas da empresa. As soluções são construídas de acordo com o contexto de cada negócio.',
        },
      ],
      final: {
        title: 'Vamos conversar sobre os desafios do seu negócio?',
        text: 'Conte o contexto e os desafios da sua empresa. A partir dessa conversa, estruturamos uma proposta de atuação adequada ao negócio.',
      },
    },
    about: {
      h1: 'Conhecimento sobre o comportamento humano, conectado à vida real.',
      lead: 'Sou Alex Cassimiro. Educador, palestrante e comunicador. Traduzo conhecimento científico em experiências que conectam emoções, escolhas, aprendizagem e comportamento aos desafios do nosso tempo.',
      bio: [
        'Há mais de 17 anos trabalho com desenvolvimento humano, aprendizagem e comportamento em diferentes contextos educacionais e organizacionais. Minha trajetória inclui atuação no SESI-SP como Instrutor Corporativo, a fundação da Escola Associativa Waldorf Aracê, em Indaiatuba, e experiência com indústrias, tecnologia, serviços, educação e terceiro setor.',
        'Minha atuação nasce de uma inquietação: compreender como as pessoas sentem, aprendem, tomam decisões e se relacionam diante dos desafios da vida contemporânea.',
        'Com formação em Administração e Neuropsicopedagogia, conecto conhecimentos sobre aprendizagem, emoções e comportamento a situações reais do cotidiano.',
        'Meu trabalho é traduzir conceitos complexos em experiências de comunicação acessíveis, sensíveis e fundamentadas, aproximando conhecimento científico da realidade das pessoas.',
        'Atualmente, dedico especial atenção à relação entre saúde financeira, comportamento humano e saúde mental, sem deixar de atuar no desenvolvimento de lideranças e nas relações organizacionais.',
      ],
      honor:
        'Em 2018, fui homenageado pela Câmara Municipal de Indaiatuba com o título honorífico de Cidadão Indaiatubano.',
      honorSource:
        'Fonte: ata da sessão solene de 7 de dezembro de 2018, página 2 (Câmara Municipal de Indaiatuba)',
      award:
        'Título honorífico de Cidadão Indaiatubano, concedido pela Câmara Municipal de Indaiatuba (2018)',
      factsTitle: 'Em números',
      facts: [
        { value: '+17 anos', label: 'de experiência em desenvolvimento de pessoas e lideranças' },
        { value: '+1.000', label: 'líderes treinados em programas de liderança' },
      ],
      approachTitle: 'Como trabalho',
      approach: [
        { title: 'Pessoas no centro', text: 'Desenvolvimento humano integrado à estratégia do negócio.' },
        {
          title: 'Do conhecimento à ação',
          text: 'Experiências interativas, ligadas ao dia a dia do trabalho.',
        },
        { title: 'Personalização de verdade', text: 'Conteúdo ajustado à realidade de cada organização.' },
      ],
      quote:
        'Acredito que educar não é apenas transmitir informações. É criar condições para que as pessoas compreendam melhor sua realidade, ampliem perspectivas e façam escolhas mais conscientes.',
      quoteSource: 'Alex Cassimiro',
      final: {
        title: 'Vamos conversar sobre o que podemos construir juntos?',
        text: 'Envie o briefing e receba uma proposta de acordo com o escopo.',
      },
    },
    contact: {
      h1: 'Solicitar proposta',
      intro:
        'Você pode iniciar a conversa mesmo sem data, tema ou tamanho de público definidos. Conte o objetivo do evento e Alex ajuda a montar o restante.',
      directTitle: 'Fale direto com Alex',
      directText: 'Se preferir conversar antes de preencher o formulário, use o WhatsApp ou o e-mail.',
      nextTitle: 'O que acontece depois',
      next: [
        {
          title: 'Leitura do briefing',
          text: 'Alex lê o pedido e, se necessário, pede detalhes pelo canal que você indicar.',
        },
        {
          title: 'Alinhamento',
          text: 'Objetivo, público, idioma da palestra e formato são alinhados em uma conversa curta.',
        },
        { title: 'Proposta', text: 'Você recebe a proposta de acordo com o escopo combinado.' },
      ],
    },
    privacy: {
      h1: 'Política de privacidade',
      updated: 'Última atualização: 9 de novembro de 2026',
      intro:
        'Esta política explica quais dados este site coleta, por que coleta e como você pode exercer seus direitos, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
      sections: [
        {
          title: 'Quem é o responsável',
          paragraphs: [
            'O controlador dos dados é Alex Cassimiro, que pode ser contatado pelo e-mail oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'Dados coletados pelo formulário',
          paragraphs: [
            'Ao pedir uma proposta, você informa nome, empresa, e-mail e objetivo do evento. Opcionalmente, pode informar telefone, tema, data ou mês previsto, cidade e país, formato, estimativa de público e idioma da palestra.',
            'Junto com o pedido, registramos dados técnicos não identificáveis sobre a origem da visita (página, idioma do site e parâmetros de campanha, como utm_source), para entender quais canais trazem pedidos.',
          ],
        },
        {
          title: 'Para que usamos os dados',
          paragraphs: [
            'Os dados são usados exclusivamente para responder ao seu pedido, preparar a proposta e conduzir a negociação. A base legal é a execução de procedimentos preliminares relacionados a contrato, a seu pedido (art. 7º, V, da LGPD).',
            'Não vendemos dados nem os usamos para enviar comunicações não solicitadas.',
          ],
        },
        {
          title: 'Com quem os dados são compartilhados',
          paragraphs: [
            'O site é hospedado na Cloudflare, que processa as requisições e pode registrar dados técnicos, como endereço IP, para segurança e prevenção de abuso.',
            'O pedido é entregue ao e-mail de Alex por um provedor de envio de e-mails contratado para essa finalidade. Esses fornecedores atuam como operadores e tratam os dados apenas para prestar o serviço.',
          ],
        },
        {
          title: 'Por quanto tempo guardamos',
          paragraphs: [
            'Os pedidos são mantidos pelo tempo necessário para a negociação e, se houver contratação, pelo prazo exigido por obrigações legais. Você pode pedir a exclusão a qualquer momento.',
          ],
        },
        {
          title: 'Seus direitos',
          paragraphs: [
            'Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de informações sobre compartilhamento, pelo e-mail oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'WhatsApp, e-mail e redes sociais',
          paragraphs: [
            'Ao clicar em links de WhatsApp, e-mail, Instagram ou LinkedIn, você passa a usar serviços de terceiros, sujeitos às políticas de privacidade de cada um.',
          ],
        },
      ],
      analytics: {
        title: 'Cookies e medição de audiência',
        paragraphs: [
          'Ferramentas de medição (Google Tag Manager e Google Analytics) só são carregadas depois que você aceita no aviso de cookies. Elas registram páginas visitadas e cliques em botões de contato, sem dados digitados no formulário.',
          'Você pode recusar a medição sem prejuízo para o uso do site.',
        ],
      },
    },
    notFound: {
      h1: 'Página não encontrada',
      text: 'O endereço pode ter mudado ou estar incorreto. Estes caminhos levam ao que a maioria das pessoas procura:',
      linksTitle: 'Páginas principais',
    },
  },
  meta: {
    home: {
      title: 'Alex Cassimiro · Palestrante corporativo de inteligência emocional e liderança',
      description:
        'Palestras e experiências sobre comportamento humano, emoções e escolhas no trabalho: inteligência emocional, saúde mental, liderança e cultura. Em português e inglês. Solicite uma proposta.',
    },
    talks: {
      title: 'Palestras corporativas sobre comportamento humano | Alex Cassimiro',
      description:
        'Palestras de Alex Cassimiro sobre comportamento humano: inteligência emocional, ética e integridade, saúde mental, álcool e drogas, cultura do cuidado e saúde financeira. Em português ou inglês.',
    },
    ei: {
      title: 'Palestra de inteligência emocional para empresas | Alex Cassimiro',
      description:
        'Palestra de inteligência emocional para líderes e equipes: pressão, conversas difíceis, feedback e colaboração entre áreas. Presencial ou on-line, em português ou inglês.',
    },
    english: {
      title: 'Palestrante corporativo em inglês no Brasil | Alex Cassimiro',
      description:
        'Palestras corporativas conduzidas em inglês no Brasil para equipes multinacionais e eventos internacionais. Registro em São Paulo. Solicite uma proposta.',
    },
    leadership: {
      title: 'Trilhas de desenvolvimento de liderança | Alex Cassimiro',
      description:
        'Trilhas de Liderança: jornadas personalizadas que conectam comportamento humano, relações e visão de negócio, com encontros, prática e acompanhamento entre os módulos.',
    },
    consulting: {
      title: 'Consultoria estratégica empresarial | Alex Cassimiro',
      description:
        'Consultoria estratégica para aprimorar a gestão, otimizar processos e fortalecer o desenvolvimento organizacional, conduzida por Sergio Del Corso em parceria com Alex Cassimiro.',
    },
    about: {
      title: 'Sobre Alex Cassimiro · Educador, palestrante e comunicador',
      description:
        'Alex Cassimiro é educador, palestrante e comunicador. Há mais de 17 anos traduz conhecimento científico sobre emoções, aprendizagem e comportamento em experiências para empresas. Cidadão Indaiatubano (2018).',
    },
    contact: {
      title: 'Solicitar proposta de palestra | Alex Cassimiro',
      description:
        'Peça uma proposta de palestra, trilha de liderança ou consultoria. Comece mesmo sem data ou tema definidos. WhatsApp e e-mail disponíveis.',
    },
    privacy: {
      title: 'Política de privacidade | Alex Cassimiro',
      description:
        'Como o site de Alex Cassimiro coleta, usa e protege os dados enviados no pedido de proposta.',
    },
    notFound: {
      title: 'Página não encontrada | Alex Cassimiro',
      description: 'O endereço não foi encontrado. Veja as páginas principais do site de Alex Cassimiro.',
    },
  },
  breadcrumbHome: 'Início',
};
