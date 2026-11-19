import type { Dict } from './types.ts';

export const en: Dict = {
  langName: 'English',
  skipLink: 'Skip to content',
  identity: 'Alex Cassimiro · Corporate speaker',
  role: 'Educator, speaker and communicator',
  nav: {
    label: 'Main navigation',
    talks: 'Talks',
    english: 'Talks in English',
    leadership: 'Leadership programs',
    consulting: 'Consulting',
    about: 'About',
    contact: 'Contact',
    home: 'Home',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Website language',
  },
  cta: {
    proposal: 'Request a proposal',
    topics: 'Explore speaking topics',
    whatsapp: 'Chat on WhatsApp',
    email: 'Send an email',
    readBio: 'Read the full biography',
    seeEnglish: 'See talks in English',
    seeTalks: 'See all topics',
    seeEi: 'See the emotional intelligence talk',
    seeLeadership: 'Explore leadership programs',
    seeConsulting: 'Explore consulting',
    backHome: 'Back to home',
    proposalForTopic: 'Request a proposal for this topic',
  },
  whatsapp: {
    message:
      'Hello, Alex! I found you through your website and would like to talk about a speaking engagement for my company.',
    messageTopic: 'Hello, Alex! I found you through your website and would like to talk about: {topic}.',
    floatingLabel: 'Chat with Alex on WhatsApp',
  },
  talkLanguagesLine: 'Talks in English and Portuguese',
  video: {
    label: 'Video of Alex Cassimiro speaking about emotional intelligence, with Portuguese captions',
    soundOn: 'Turn sound on',
    soundOff: 'Turn sound off',
    pause: 'Pause video',
    play: 'Play video',
  },
  stats: {
    years: '17+ years',
    yearsLabel: 'of experience in people and leadership development',
    leaders: '1,000+',
    leadersLabel: 'leaders trained in leadership programs',
    languages: '2 languages',
    languagesLabel: 'talks in Portuguese and English',
    source: 'Figures from the {year} institutional media kit.',
  },
  themeLabels: {
    forWhom: 'Who it is for',
    whenToHire: 'When to book',
    covers: 'What it covers',
    scope: 'Scope',
  },
  solutionLabels: {
    indicated: 'Best suited when',
    format: 'Format',
    depth: 'Depth',
  },
  themes: [
    {
      id: 'emotional-intelligence',
      anchor: 'emotional-intelligence',
      title: 'Emotional intelligence',
      subtitle: 'Emotions, pressure and relationships in everyday work',
      summary:
        'How to recognize what we feel under pressure and choose a response before reacting — in difficult conversations, in feedback and in collaboration across teams.',
      forWhom:
        'Leaders and teams who work under tight deadlines, deal with demanding clients or depend on other departments to deliver.',
      whenToHire:
        'Conventions, internal weeks, leadership meetings, onboarding programs or periods of change that add tension to day-to-day work.',
      covers: [
        'Recognizing signs of pressure in yourself and your team before they turn into conflict',
        'Handling difficult conversations with clarity and respect',
        'Giving and receiving feedback without turning the conversation into a dispute',
        'Collaborating across departments with different goals and rhythms',
      ],
    },
    {
      id: 'ethics-harassment',
      anchor: 'ethics-and-integrity',
      title: 'Ethics and integrity',
      subtitle: 'Zero tolerance for harassment',
      summary:
        'Safer, more respectful and more ethical workplaces, focused on building a culture of integrity.',
      forWhom: 'Leaders and teams in companies that are strengthening a culture of integrity and respect.',
      whenToHire:
        'Internal integrity campaigns, onboarding of new leaders, code of conduct reviews or harassment prevention initiatives.',
      covers: [
        'Behaviors that make a workplace unsafe and how to recognize them',
        'The role of each leader in prevention and in supporting people',
        'Respect as a daily practice in working relationships',
      ],
      note: 'Educational content. It does not replace legal advice or the company’s compliance channels and policies.',
    },
    {
      id: 'mental-health',
      anchor: 'mental-health',
      title: 'Mental health in focus',
      subtitle: 'Awareness and well-being at work',
      summary: 'Awareness, self-care and strategies to promote well-being in the workplace.',
      forWhom: 'Teams and leaders in any area, especially during periods of overload.',
      whenToHire:
        'Campaigns such as Yellow September (Brazil’s suicide-prevention awareness month), health and well-being weeks or initiatives to support teams.',
      covers: [
        'Signs of overload that deserve attention',
        'Self-care as an individual and collective responsibility',
        'How leadership can make room for the topic',
      ],
      note: 'Educational approach, with no clinical or therapeutic character. It does not replace professional health care.',
    },
    {
      id: 'alcohol-drugs',
      anchor: 'alcohol-and-other-drugs',
      title: 'Myths and facts',
      subtitle: 'The impact of alcohol and other drugs today',
      summary: 'Science-based information for more conscious and responsible decisions.',
      forWhom: 'Operational and administrative teams, leaders, and health and safety departments.',
      whenToHire:
        'SIPAT (Brazil’s internal workplace accident-prevention week), prevention campaigns and occupational health and safety initiatives.',
      covers: [
        'Common myths about alcohol and other drugs',
        'Impacts on behavior, safety and relationships',
        'Conscious decisions at work and outside it',
      ],
      note: 'Educational and preventive approach, with no clinical character.',
    },
    {
      id: 'active-care',
      anchor: 'culture-of-active-care',
      title: 'A culture of active care',
      subtitle: 'Strengthening the foundation of the company',
      summary: 'Safety, well-being and human relationships as pillars of business sustainability.',
      forWhom: 'Companies that want to involve leaders and teams in safety and in caring for people.',
      whenToHire: 'SIPAT, launches of safety and well-being programs, and leadership meetings.',
      covers: [
        'Active care: noticing, acting and following up',
        'Safety and well-being as a shared responsibility',
        'Relationships of trust that sustain the culture',
      ],
    },
    {
      id: 'financial-health',
      anchor: 'financial-health-and-behavior',
      title: 'Financial health and behavior',
      subtitle: 'Emotions, choices and our relationship with money',
      summary:
        'How emotions, habits and decisions shape our relationship with money, and what that has to do with mental health, relationships and work.',
      forWhom: 'Teams and leaders at companies that want to care for people’s well-being as a whole.',
      whenToHire:
        'Health and well-being weeks, occupational safety weeks, financial education initiatives or employee care campaigns.',
      covers: [
        'How emotions and habits influence financial decisions',
        'The links between debt, stress and mental health',
        'Impulse spending, gambling and other warning signs',
        'More conscious choices at work and beyond',
      ],
      note: 'Educational, awareness-raising approach, not clinical. It does not replace psychological or medical care or specialized financial guidance.',
    },
  ],
  solutions: [
    {
      id: 'talk',
      page: 'talks',
      name: 'Talk',
      what: 'A session to engage the audience around a topic.',
      indicated: 'The event needs to open a conversation, align on a topic or mark a moment in the company.',
      format: 'In person or online, in Portuguese or English, with a duration set in the briefing.',
      depth: 'One session, with content adapted to the audience and the goal of the event.',
    },
    {
      id: 'program',
      page: 'leadership',
      name: 'Leadership program',
      what: 'A development journey for leaders, with practice between sessions.',
      indicated: 'The company needs to develop leadership behaviors over time, not just inspire.',
      format: 'In-person, live online or hybrid sessions, monthly or intensive.',
      depth: 'Several modules, with applied challenges, tools and follow-up.',
    },
    {
      id: 'consulting',
      page: 'consulting',
      name: 'Consulting',
      what: 'Strategic consulting in management, processes and organizational development, with consultant Sergio Del Corso.',
      indicated:
        'The company wants to improve management, review processes or find solutions to strategic challenges.',
      format: 'A tailored project, structured after a conversation about the company’s context.',
      depth: 'Context analysis, identification of opportunities and a proposed course of action.',
    },
  ],
  hireSteps: [
    {
      title: 'You share the briefing',
      text: 'Tell us the goal of the event and what you already know about audience, date and format. You can start without all the answers.',
    },
    {
      title: 'Alex aligns the details',
      text: 'In a short conversation, Alex aligns goal, audience, talk language and format with the person organizing the event.',
    },
    {
      title: 'You receive the proposal',
      text: 'The proposal arrives according to the scope: topic, approach, format, duration and investment.',
    },
  ],
  cases: {
    english: {
      label: 'Emotional intelligence talk in English',
      place: 'São Paulo, SP',
      text: 'An emotional intelligence talk delivered in English to employees of a company with international operations, in São Paulo, Brazil.',
      textNamed:
        'An emotional intelligence talk delivered in English to Kuraray employees, in São Paulo, Brazil.',
    },
    voilier: {
      label: 'Energy Management and Sustainable Performance',
      place: 'Valinhos, SP',
      text: 'The company asked for a talk on time management. After the diagnosis, the scope was broadened and the session with the team, in Valinhos, in the interior of the state of São Paulo, covered energy management and sustainable performance.',
      textNamed:
        'Voilier asked for a talk on time management. After the diagnosis, the scope was broadened and the session with the team, in Valinhos, in the interior of the state of São Paulo, covered energy management and sustainable performance.',
    },
  },
  images: {
    heroPortrait: { alt: 'Alex Cassimiro smiling, wearing a navy blue T-shirt, in front of a red wall' },
    aboutPortrait: { alt: 'Alex Cassimiro with arms crossed and a calm expression, in front of a red wall' },
    invitePortrait: { alt: 'Alex Cassimiro extending a hand in a gesture of invitation' },
    statePressure: { alt: 'Alex Cassimiro with his hands on his head, acting out a moment of pressure' },
    stateDoubt: { alt: 'Alex Cassimiro shrugging his shoulders, acting out doubt' },
    stateExplain: { alt: 'Alex Cassimiro gesturing as if calmly explaining something' },
    stateOpen: { alt: 'Alex Cassimiro smiling with open arms' },
    podium: {
      alt: 'Alex Cassimiro speaking into a microphone at a lectern',
      caption: 'Alex Cassimiro presenting at the microphone.',
    },
    talkEnglish: {
      alt: 'Alex Cassimiro speaks into a microphone to seated participants, with a slide in English projected behind him',
      caption: 'Emotional intelligence talk delivered in English · São Paulo, SP',
      captionNamed: 'Emotional intelligence talk delivered in English at Kuraray · São Paulo, SP',
    },
    talkEnergy: {
      alt: 'Alex Cassimiro smiles at the microphone among the participants’ tables',
      caption: 'Interaction with the audience during the talk in English · São Paulo, SP',
    },
    talkQuestion: {
      alt: 'A participant asks Alex Cassimiro a question in front of a slide with audience questions',
      caption: 'Question time, held in English · São Paulo, SP',
    },
    talkListening: {
      alt: 'Alex Cassimiro reads a participant’s note into the microphone while the group writes',
      caption: 'Writing activity with participants · São Paulo, SP',
    },
    talkRoom: {
      alt: 'U-shaped room with dozens of participants and Alex Cassimiro at the center',
      caption: 'Overview of the room during the talk · São Paulo, SP',
    },
    talkWalk: {
      alt: 'Alex Cassimiro walks through the center of the room while speaking with participants',
      caption: 'Emotional intelligence talk in English · São Paulo, SP',
    },
    talkMic: {
      alt: 'Alex Cassimiro speaks into the microphone standing close to the participants',
      caption: 'Emotional intelligence talk in English · São Paulo, SP',
    },
    valinhosGroup: {
      alt: 'Group photo of the participants with Alex Cassimiro at the end of a talk',
      caption: 'Energy management and sustainable performance talk · Valinhos, SP',
      captionNamed: 'Energy management and sustainable performance talk at Voilier · Valinhos, SP',
    },
    valinhosPortrait: {
      alt: 'Alex Cassimiro seated and smiling in a room with plants',
      caption: 'Alex Cassimiro on the day of the talk in Valinhos, SP',
    },
    sergioPortrait: { alt: 'Sergio Del Corso, strategy consultant, smiling, wearing a navy suit and tie' },
  },
  footer: {
    tagline:
      'Corporate talks, leadership programs and consulting in people and culture development. Talks in English and Portuguese.',
    contactTitle: 'Contact',
    pagesTitle: 'Pages',
    followTitle: 'Social',
    languagesTitle: 'Website languages',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
    instagramLabel: 'Alex Cassimiro on Instagram',
    linkedinLabel: 'Alex Cassimiro on LinkedIn',
    creditPrefix: 'Developed by',
  },
  consent: {
    text: 'We use measurement cookies to understand which pages help companies find these talks. No form data is sent to these tools.',
    accept: 'Accept measurement',
    reject: 'Decline',
    policy: 'Privacy policy',
  },
  form: {
    title: 'Proposal request',
    requiredHint: 'Fields marked * are required.',
    detailsLegend: 'Event details (optional)',
    labels: {
      name: 'Name',
      company: 'Company',
      email: 'Work email',
      objective: 'Event goal',
      phone: 'Phone or WhatsApp',
      topic: 'Topic of interest',
      date: 'Expected date or month',
      location: 'City and country',
      format: 'Format',
      audience: 'Estimated audience size',
      talkLanguage: 'Talk language',
    },
    placeholders: {
      objective: 'E.g. open the leadership week with a conversation about pressure and feedback.',
      date: 'E.g. March 2027',
      location: 'E.g. São Paulo, Brazil',
      phone: 'E.g. +55 11 90000-0000',
    },
    hints: {
      objective: 'Tell us what the event needs to spark in the audience. A first idea is fine.',
      talkLanguage: 'The talk language is independent of this website’s language.',
    },
    selectPlaceholder: 'Select',
    topicOptions: {
      'emotional-intelligence': 'Emotional intelligence',
      'ethics-harassment': 'Ethics and integrity (harassment)',
      'mental-health': 'Mental health at work',
      'alcohol-drugs': 'Alcohol and other drugs',
      'active-care': 'Culture of active care',
      'financial-health': 'Financial health and behavior',
      'leadership-program': 'Leadership program',
      consulting: 'Strategic consulting',
      other: 'Other or not sure yet',
    },
    formatOptions: {
      'in-person': 'In person',
      online: 'Online',
      hybrid: 'Hybrid',
      undecided: 'To be decided',
    },
    audienceOptions: {
      'up-to-50': 'Up to 50 people',
      '50-150': '50 to 150 people',
      '150-500': '150 to 500 people',
      '500-plus': 'More than 500 people',
      undecided: 'To be decided',
    },
    talkLanguageOptions: {
      pt: 'Portuguese',
      en: 'English',
      tbd: 'To be decided',
    },
    submit: 'Send proposal request',
    sending: 'Sending…',
    successTitle: 'Request received',
    successText:
      'Thank you. Alex will read your briefing and reply to the email address you provided. If you would rather move the conversation along sooner, message Alex on WhatsApp.',
    sendAnother: 'Send another request',
    errorSummary: 'Please review the highlighted fields to send your request.',
    errors: {
      required: 'Please fill in this field.',
      too_short: 'Please write a little more.',
      too_long: 'Text is too long. Please shorten it.',
      invalid_email: 'Enter a valid email address, such as name@company.com.',
      invalid_choice: 'Choose one of the options in the list.',
      invalid_phone: 'Use only numbers, spaces, +, ( ) and -.',
    },
    failure: {
      network:
        'We could not send your request: check your connection and try again. Your data is still in the form.',
      server:
        'Sending failed on our side. Try again in a moment or contact us directly on WhatsApp or by email.',
      rateLimited: 'Too many submissions in a row. Wait a minute and try again.',
      notConfigured:
        'The form is not active in this version of the site yet. Please send your request through WhatsApp or by email.',
      spam: 'We could not validate your submission. Try again or contact us on WhatsApp or by email.',
    },
    privacy: 'Your data is used only to reply to this request. Learn more in our {link}.',
    alternatives: 'Prefer another channel?',
  },
  pages: {
    home: {
      h1: 'Understanding human behavior is understanding the challenges of our time.',
      support:
        'Alex Cassimiro translates scientific knowledge into talks and experiences that connect emotions, choices and behavior to the real challenges of life and work.',
      portraitAlt: 'Alex Cassimiro smiling, wearing a navy blue T-shirt, in front of a red wall',
      english: {
        title: 'Experience delivering talks in English',
        text: 'In São Paulo, Alex delivered an emotional intelligence talk in English to employees of a company with international operations. The presentation, the activities and the question time were all held in English.',
        textNamed:
          'In São Paulo, Alex delivered an emotional intelligence talk in English to Kuraray employees. The presentation, the activities and the question time were all held in English.',
        link: 'How talks in English work',
      },
      topics: {
        title: 'Speaking topics',
        intro:
          'Each talk starts from real work situations and is adapted to the audience, the goal and the format of the event.',
        more: 'Details on each topic',
      },
      cases: {
        title: 'Past engagements',
        intro: 'Records of talks delivered at companies in the state of São Paulo, Brazil.',
      },
      about: {
        title: 'About Alex',
        text: 'Alex Cassimiro has worked for more than 17 years in people and leadership development, across different industries and organizational contexts. His approach combines content, hands-on experience and applicable methodologies to turn human challenges into development that matters to the business.',
        quote: 'I turn knowledge into action and development into real results.',
      },
      solutions: {
        title: 'Talk, program or consulting?',
        intro:
          'Not every challenge is solved in a single event. When a company needs a broader project, the conversation can evolve into a leadership program or consulting.',
      },
      hire: {
        title: 'How to book',
        intro:
          'A short process, designed for event organizers who need to make the case for the booking internally.',
      },
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'What topics does Alex Cassimiro cover in his talks?',
          a: 'Alex covers topics related to human behavior, emotions and relationships at work, including emotional intelligence, mental health, leadership, organizational culture, ethics and human development. Each experience is built around the organization’s challenges and goals.',
        },
        {
          q: 'Are the talks customized for each company?',
          a: 'Yes. The content, examples and activities are adapted to the company’s context, the audience profile and the goals of the event. The aim is to connect knowledge with real everyday situations.',
        },
        {
          q: 'Are the talks in person or online?',
          a: 'Both formats are available. The format is defined together, based on the goal of the event, the audience and availability.',
        },
        {
          q: 'In which languages does Alex give talks?',
          a: 'In Portuguese and English. The language is chosen according to the company’s needs and the participants’ profile.',
        },
        {
          q: 'How long is a talk?',
          a: 'The length is defined according to the goal and schedule of the event. Experiences can be structured in different formats, from shorter sessions to extended activities with interaction.',
        },
        {
          q: 'What information do I need to send to request a proposal?',
          a: 'The company name and the goal of the event are enough to start the conversation. If available, details about the date, city, estimated audience, topic of interest and preferred format also help.',
        },
      ],
      final: {
        title: 'Shall we talk about your event?',
        text: 'Send whatever briefing you have. Date, topic and audience size can be defined together.',
      },
    },
    talks: {
      h1: 'Talks on human behavior and the challenges of our time.',
      intro:
        'Communication experiences that translate scientific knowledge into reflection and learning about emotions, choices, relationships and behavior at work.',
      langsNote: 'Experiences can be delivered in Portuguese or English.',
      themesTitle: 'Available topics',
      leadership: {
        title: 'Leadership in every topic',
        text: 'Leadership runs through every talk: how the leader steers the conversation, sets the example and sustains the topic after the event. To develop leaders over time, see the leadership programs.',
      },
      personalizationTitle: 'How each talk is adapted',
      personalization: [
        { title: 'Event goal', text: 'What the audience needs to take back to work the following Monday.' },
        {
          title: 'Audience',
          text: 'Leaders, operational teams, administrative departments or mixed audiences.',
        },
        {
          title: 'Examples and language',
          text: 'Situations close to the day-to-day of the company and its industry.',
        },
        { title: 'Language and format', text: 'Portuguese or English; in person or online.' },
      ],
      formatsTitle: 'Formats',
      formats: [
        { title: 'In person', text: 'At conventions, auditoriums, training rooms and leadership meetings.' },
        {
          title: 'Live online',
          text: 'For distributed teams, with interaction through chat and guided activities.',
        },
      ],
      faqTitle: 'Questions about the talks',
      faq: [
        {
          q: 'Is there a talk specifically about leadership?',
          a: 'Leadership runs across all the experiences. For companies that want to develop leadership skills on an ongoing basis, there are also development programs, structured around the organization’s challenges.',
        },
        {
          q: 'Can two or more topics be combined in one talk?',
          a: 'Yes. Topics can be connected and adapted to the goal of the event, the audience profile and the time available. The aim is to build a coherent experience without overloading the content.',
        },
        {
          q: 'Are the talks on mental health, financial health and behavior clinical in nature?',
          a: 'No. They are educational, awareness-raising experiences grounded in scientific knowledge. They do not replace psychological or medical care or specialized financial guidance.',
        },
        {
          q: 'Can the talks be adapted to different audiences and industries?',
          a: 'Yes. The language, examples and activities are adjusted to the participants’ reality, whether leaders, operational teams, administrative departments or mixed audiences.',
        },
      ],
      final: {
        title: 'Found the topic for your event?',
        text: 'Request a proposal. If you are not sure about the topic yet, share the goal and the choice is made together.',
      },
    },
    ei: {
      h1: 'Emotional intelligence talk for companies',
      intro:
        'A talk about what happens to people when work gets tight — and about how to choose a response before reacting. For leaders and teams, in English or Portuguese.',
      situationsTitle: 'Work situations covered',
      situationsIntro: 'The talk starts from moments every team knows.',
      situations: [
        {
          title: 'Pressure and deadlines',
          text: 'Noticing your own signs of tension and keeping pressure from turning into automatic reaction.',
          image: 'statePressure',
        },
        {
          title: 'Difficult conversations',
          text: 'Preparing and holding delicate conversations with clarity, without avoiding the subject or steamrolling the other person.',
          image: 'stateDoubt',
        },
        {
          title: 'Feedback',
          text: 'Giving and receiving feedback in a way that improves the work instead of creating a dispute.',
          image: 'stateExplain',
        },
        {
          title: 'Collaboration across departments',
          text: 'Dealing with different goals, rhythms and priorities without turning the difference into conflict.',
          image: 'stateOpen',
        },
      ],
      audiencesTitle: 'Which audiences',
      audiences: [
        { title: 'Leaders', text: 'Managers who lead teams under pressure and need clearer conversations.' },
        {
          title: 'Teams',
          text: 'Teams that depend on one another and want to collaborate with less friction.',
        },
        {
          title: 'International teams',
          text: 'Teams that work in English or host participants from other countries.',
        },
      ],
      formatsTitle: 'Formats',
      formats: [
        { title: 'In person', text: 'Auditoriums, training rooms, conventions and leadership meetings.' },
        { title: 'Live online', text: 'For distributed teams, with interaction and guided activities.' },
        { title: 'English or Portuguese', text: 'The company chooses the talk language in the proposal.' },
      ],
      customTitle: 'What can be customized',
      custom: [
        'Examples tied to the company’s industry and routine',
        'Emphasis on leadership, on teams or on both',
        'Individual or group activities, depending on the space',
        'Duration and fit within the event schedule',
        'Talk language: English or Portuguese',
      ],
      evidenceTitle: 'Records of the talk',
      evidenceText:
        'The emotional intelligence talk has been delivered in English to employees of a company with international operations, in São Paulo.',
      faqTitle: 'Questions about the emotional intelligence talk',
      faq: [
        {
          q: 'Who is the emotional intelligence talk for?',
          a: 'For leaders and teams who deal with pressure, difficult conversations, feedback and collaboration across departments. The content is adapted to the audience of each event.',
        },
        {
          q: 'Can the emotional intelligence talk be given in English?',
          a: 'Yes. Alex has delivered this talk in English to employees of a company with international operations, in São Paulo.',
        },
        {
          q: 'Is the talk therapeutic in nature?',
          a: 'No. It is a corporate, educational talk focused on work situations.',
        },
      ],
      final: {
        title: 'Emotional intelligence at your next event',
        text: 'Share the goal and the audience. The topic is already filled in on the form.',
      },
    },
    english: {
      h1: 'English-speaking corporate speaker in Brazil',
      intro:
        'For companies that need a keynote in English in Brazil, delivered entirely in English: multinational teams, events with guests from other countries and leadership programs that run in English.',
      contextsTitle: 'When a talk in English makes sense',
      contexts: [
        {
          title: 'Multinational teams',
          text: 'Teams that work in English day to day and attend internal events in the same language.',
        },
        {
          title: 'International guests',
          text: 'Meetings in Brazil with participants or leaders from other countries.',
        },
        {
          title: 'Global programs',
          text: 'Development initiatives defined by headquarters and delivered in English in the Brazilian operation.',
        },
      ],
      recordTitle: 'Record: emotional intelligence in English, in São Paulo',
      recordText:
        'Alex delivered an emotional intelligence talk in English to employees of a company with international operations, in São Paulo. The presentation, the activities and the question time were all held in English.',
      recordTextNamed:
        'Alex delivered an emotional intelligence talk in English to Kuraray employees, in São Paulo. The presentation, the activities and the question time were all held in English.',
      howTitle: 'How it works',
      how: [
        {
          title: 'Briefing in the language you prefer',
          text: 'The alignment conversation can take place in Portuguese or in English.',
        },
        { title: 'Talk in English', text: 'Presentation, activities and audience questions in English.' },
        {
          title: 'Examples from your company’s context',
          text: 'Situations close to the routine of the teams involved.',
        },
      ],
      topicsTitle: 'Topics in English',
      topicsText:
        'The emotional intelligence talk has already been delivered in English. Availability of the other topics in English is confirmed in the proposal.',
      faqTitle: 'Questions about talks in English',
      faq: [
        {
          q: 'Is the talk entirely in English?',
          a: 'Yes. When the company chooses English, the presentation, the activities and the audience questions all take place in English.',
        },
        {
          q: 'Does the briefing also need to be in English?',
          a: 'No. The alignment conversation can be in Portuguese or in English, whichever is more practical for the organizer.',
        },
        {
          q: 'Does Alex give talks in Spanish?',
          a: 'No. The talks are delivered in Portuguese and in English.',
        },
      ],
      final: {
        title: 'Need a talk in English?',
        text: 'The form arrives with English already selected as the talk language.',
      },
    },
    leadership: {
      h1: 'Developing leaders means transforming behavior in practice.',
      intro:
        'Learning journeys that connect human behavior, relationships and business vision to develop more aware, prepared and responsible leaders.',
      presentation: [
        'Organizations face challenges that a one-off training cannot solve. Developing leaders takes continuity, reflection, practice and application in everyday work.',
        'Leadership Programs are customized journeys that combine knowledge, hands-on experiences and follow-up to turn learning into observable behavior in the workplace.',
      ],
      compareTitle: 'One-off talk or program?',
      compareHead: { aspect: 'Aspect', talk: 'One-off talk', program: 'Leadership program' },
      compare: [
        {
          aspect: 'Goal',
          talk: 'Open a conversation and engage the audience',
          program: 'Develop leadership behaviors',
        },
        { aspect: 'Duration', talk: 'One session', program: 'Several modules over months' },
        {
          aspect: 'Practice',
          talk: 'Reflections and activities during the event itself',
          program: 'Applied challenges between sessions',
        },
        { aspect: 'Follow-up', talk: 'Not applicable', program: 'Tools, materials and day-to-day support' },
      ],
      pillarsTitle: 'How the program works',
      pillars: [
        { title: 'Continuous development', text: 'A structured learning journey throughout the year.' },
        { title: 'Practical methodologies', text: 'Content applicable to the organization’s reality.' },
        { title: 'Focus on the work', text: 'Progress in behaviors observable in leaders’ daily routines.' },
        { title: 'Follow-up and application', text: 'Tools, challenges and support between sessions.' },
      ],
      journeyTitle: 'Example of an annual journey',
      journeyIntro:
        'An example of a module sequence. Content is selected and ordered according to your organization’s challenges.',
      journeyUnit: 'Module',
      journey: [
        { title: 'Attention and sustainable performance', text: 'Leadership in the age of AI.' },
        { title: 'Multigenerational leadership', text: 'Connection and engagement across generations.' },
        { title: 'Systems thinking and critical thinking', text: 'More conscious and strategic decisions.' },
        { title: 'Communication and feedback culture', text: 'Dialogue, trust and high performance.' },
        { title: 'Innovation and creativity', text: 'Turning challenges into opportunities.' },
        { title: 'Emotional intelligence and self-care', text: 'Well-being to lead with balance.' },
        { title: 'Change management', text: 'Adaptation and ownership in new scenarios.' },
        { title: 'Ownership and accountability', text: 'From individual attitude to collective impact.' },
        { title: 'ESG and responsible leadership', text: 'People, business and society.' },
        { title: 'Consolidation and action plan', text: 'Practical application and next steps.' },
      ],
      formatsTitle: 'Formats',
      formats: [
        { title: 'In person', text: 'Monthly or intensive sessions.' },
        { title: 'Live online', text: 'Interactive sessions, with no travel.' },
        { title: 'Hybrid', text: 'A combination of in-person and online sessions.' },
      ],
      scopeNote: 'The proposal is customized according to duration, format and number of participants.',
      faqTitle: 'Questions about the programs',
      faq: [
        {
          q: 'Does the program need to have ten modules?',
          a: 'No. The journey shown is only a reference. The number of sessions, the topics and the duration are defined according to each organization’s challenges, goals and reality.',
        },
        {
          q: 'How are the program topics defined?',
          a: 'It starts with understanding the company’s challenges and the leaders’ development needs. From there, the topics, the sequence of modules and the practical activities are defined.',
        },
        {
          q: 'How does follow-up work between sessions?',
          a: 'Learning continues between modules through applied challenges, reflections, tools and activities tied to the leadership routine. The goal is to help transfer learning to work.',
        },
        {
          q: 'Can the program be delivered in person, online or in a hybrid format?',
          a: 'Yes. Sessions can take place in person, live online or in a hybrid format. The choice takes into account the company’s structure, where participants are located and the program’s goals.',
        },
      ],
      final: {
        title: 'Shall we develop your organization’s next leaders?',
        text: 'Tell us what challenges your company faces and which behaviors you want to develop. From that conversation, we can design a learning journey aligned with the reality of the business.',
      },
    },
    consulting: {
      h1: 'Strategy and management to turn challenges into results.',
      intro:
        'Strategic consulting solutions for companies seeking to improve their management, optimize processes and strengthen their organizational development.',
      presentationTitle: 'Strategic business consulting',
      presentation: [
        'Through a partnership with consultant Sergio Del Corso, we bring together executive experience and strategic vision to help companies identify opportunities, improve management and develop practical solutions for their businesses.',
        'The work combines expertise in business management, process analysis and an understanding of organizational challenges, with a focus on consistent results.',
      ],
      focusTitle: 'Areas of work',
      focus: [
        'Better management',
        'Process optimization',
        'Organizational development',
        'Practical, results-focused solutions',
      ],
      partner: {
        role: 'Strategy consultant',
        name: 'Sergio Del Corso',
        highlight:
          'More than 30 years of experience in business management and organizational development in Brazil and Europe.',
        bio: [
          'Sergio Del Corso is a strategy consultant with a degree in Accounting and a specialization in Management. With more than 30 years of experience in Brazil and Europe, he has built a solid executive career in business management and organizational development.',
          'His work focuses on improving management, optimizing processes and building practical solutions to business challenges, always with a focus on results.',
        ],
      },
      faqTitle: 'Questions about consulting',
      faq: [
        {
          q: 'What kind of company can hire the consulting service?',
          a: 'Companies that want to improve their management, review processes, identify opportunities for improvement and develop solutions to their strategic and organizational challenges.',
        },
        {
          q: 'How does the consulting work?',
          a: 'It starts with a conversation to understand the company’s context and challenges. Based on that analysis, opportunities are identified and a proposal suited to the business’s needs is structured.',
        },
        {
          q: 'Who leads the consulting projects?',
          a: 'Projects are led by consultant Sergio Del Corso, a professional with more than 30 years of experience in business management and organizational development, in partnership with Alex Cassimiro.',
        },
        {
          q: 'Does the consulting offer customized solutions?',
          a: 'Yes. Each project takes into account the company’s reality, goals and specific needs. Solutions are built according to the context of each business.',
        },
      ],
      final: {
        title: 'Shall we talk about your business challenges?',
        text: 'Tell us about your company’s context and challenges. From that conversation, we structure a proposal suited to the business.',
      },
    },
    about: {
      h1: 'Knowledge about human behavior, connected to real life.',
      lead: 'I’m Alex Cassimiro. Educator, speaker and communicator. I translate scientific knowledge into experiences that connect emotions, choices, learning and behavior to the challenges of our time.',
      bio: [
        'For more than 17 years, I have worked with human development, learning and behavior in different educational and organizational contexts. My career includes working as a Corporate Instructor at SESI-SP, founding the Waldorf Aracê Associative School in Indaiatuba, and experience with industry, technology, services, education and the nonprofit sector.',
        'My work grows out of a deep curiosity: understanding how people feel, learn, make decisions and relate to one another in the face of the challenges of contemporary life.',
        'With a background in Business Administration and Neuropsychopedagogy, I connect knowledge about learning, emotions and behavior to real everyday situations.',
        'My work is to translate complex concepts into communication experiences that are accessible, sensitive and well grounded, bringing scientific knowledge closer to people’s reality.',
        'Today, I pay special attention to the relationship between financial health, human behavior and mental health, while continuing to work on leadership development and organizational relationships.',
      ],
      honor:
        'In 2018, I was honored by the Indaiatuba City Council with the honorary title of Citizen of Indaiatuba (Cidadão Indaiatubano).',
      honorSource:
        'Source: minutes of the solemn session of December 7, 2018, page 2 (Indaiatuba City Council)',
      award: 'Honorary title of Citizen of Indaiatuba (Cidadão Indaiatubano), Indaiatuba City Council (2018)',
      factsTitle: 'By the numbers',
      facts: [
        { value: '17+ years', label: 'of experience in people and leadership development' },
        { value: '1,000+', label: 'leaders trained in leadership programs' },
      ],
      approachTitle: 'How I work',
      approach: [
        { title: 'People at the center', text: 'Human development integrated with business strategy.' },
        { title: 'From knowledge to action', text: 'Interactive experiences tied to everyday work.' },
        { title: 'Genuine customization', text: 'Content adapted to the reality of each organization.' },
      ],
      quote:
        'I believe that educating is not just passing on information. It is creating the conditions for people to better understand their reality, broaden their perspectives and make more conscious choices.',
      quoteSource: 'Alex Cassimiro (translated from Portuguese)',
      final: {
        title: 'Shall we talk about what we can build together?',
        text: 'Send the briefing and receive a proposal according to the scope.',
      },
    },
    contact: {
      h1: 'Request a proposal',
      intro:
        'You can start the conversation even without a date, topic or audience size defined. Share the goal of the event and Alex will help put together the rest.',
      directTitle: 'Talk to Alex directly',
      directText: 'If you would rather talk before filling in the form, use WhatsApp or email.',
      nextTitle: 'What happens next',
      next: [
        {
          title: 'Briefing review',
          text: 'Alex reads your request and, if needed, asks for details through the channel you indicate.',
        },
        {
          title: 'Alignment',
          text: 'Goal, audience, talk language and format are aligned in a short conversation.',
        },
        { title: 'Proposal', text: 'You receive the proposal according to the agreed scope.' },
      ],
    },
    privacy: {
      h1: 'Privacy policy',
      updated: 'Last updated: November 9, 2026',
      intro:
        'This policy explains what data this website collects, why it collects it and how you can exercise your rights, in accordance with Brazil’s General Data Protection Law (LGPD, Law No. 13,709/2018).',
      sections: [
        {
          title: 'Who is responsible',
          paragraphs: [
            'The data controller is Alex Cassimiro, who can be contacted by email at oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'Data collected through the form',
          paragraphs: [
            'When you request a proposal, you provide your name, company, email and the goal of the event. Optionally, you may provide a phone number, topic, expected date or month, city and country, format, estimated audience size and talk language.',
            'Together with the request, we record non-identifying technical data about the origin of the visit (page, website language and campaign parameters such as utm_source), to understand which channels bring requests.',
          ],
        },
        {
          title: 'How we use the data',
          paragraphs: [
            'The data is used exclusively to respond to your request, prepare the proposal and conduct the negotiation. The legal basis is the performance of preliminary procedures related to a contract, at your request (art. 7, V, of the LGPD).',
            'We do not sell data or use it to send unsolicited communications.',
          ],
        },
        {
          title: 'Who the data is shared with',
          paragraphs: [
            'The website is hosted on Cloudflare, which processes requests and may record technical data, such as IP address, for security and abuse prevention.',
            'The request is delivered to Alex’s email by an email delivery provider engaged for that purpose. These suppliers act as processors and handle the data only to provide the service.',
          ],
        },
        {
          title: 'How long we keep it',
          paragraphs: [
            'Requests are kept for as long as needed for the negotiation and, if a contract follows, for the period required by legal obligations. You can ask for deletion at any time.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'You may request confirmation of processing, access, correction, anonymization, portability or deletion of your data, as well as information about sharing, by email at oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'WhatsApp, email and social media',
          paragraphs: [
            'When you click links to WhatsApp, email, Instagram or LinkedIn, you start using third-party services, which are subject to their own privacy policies.',
          ],
        },
      ],
      analytics: {
        title: 'Cookies and audience measurement',
        paragraphs: [
          'Measurement tools (Google Tag Manager and Google Analytics) are loaded only after you accept in the cookie notice. They record pages visited and clicks on contact buttons, without any data typed into the form.',
          'You can decline measurement without any impact on your use of the website.',
        ],
      },
    },
    notFound: {
      h1: 'Page not found',
      text: 'The address may have changed or be incorrect. These paths lead to what most people are looking for:',
      linksTitle: 'Main pages',
    },
  },
  meta: {
    home: {
      title: 'Corporate speaker for emotional intelligence and leadership',
      description:
        'Talks and experiences on human behavior, emotions and choices at work: emotional intelligence, mental health, leadership and culture. In English and Portuguese. Request a proposal.',
    },
    talks: {
      title: 'Corporate talks on human behavior | Alex Cassimiro',
      description:
        'Talks by Alex Cassimiro on human behavior: emotional intelligence, ethics and integrity, mental health, alcohol and drugs, active care and financial health. In English or Portuguese.',
    },
    ei: {
      title: 'Emotional intelligence talk for companies | Alex Cassimiro',
      description:
        'Emotional intelligence talk for leaders and teams: pressure, difficult conversations, feedback and collaboration across departments. In person or online, in English or Portuguese.',
    },
    english: {
      title: 'English-speaking corporate speaker in Brazil | Alex Cassimiro',
      description:
        'Keynote in English in Brazil for multinational teams and international events. Emotional intelligence talk delivered in São Paulo. Request a proposal.',
    },
    leadership: {
      title: 'Leadership development programs | Alex Cassimiro',
      description:
        'Leadership Programs: customized journeys that connect human behavior, relationships and business vision, with sessions, practice and follow-up between modules.',
    },
    consulting: {
      title: 'Strategic business consulting | Alex Cassimiro',
      description:
        'Strategic consulting to improve management, optimize processes and strengthen organizational development, led by Sergio Del Corso in partnership with Alex Cassimiro.',
    },
    about: {
      title: 'About Alex Cassimiro · Educator, speaker and communicator',
      description:
        'Alex Cassimiro is an educator, speaker and communicator. For more than 17 years he has translated scientific knowledge about emotions, learning and behavior into experiences for companies. Citizen of Indaiatuba (2018).',
    },
    contact: {
      title: 'Request a speaking proposal | Alex Cassimiro',
      description:
        'Request a proposal for a talk, leadership program or consulting. Start even without a set date or topic. WhatsApp and email available.',
    },
    privacy: {
      title: 'Privacy policy | Alex Cassimiro',
      description:
        'How Alex Cassimiro’s website collects, uses and protects the data sent in a proposal request.',
    },
    notFound: {
      title: 'Page not found | Alex Cassimiro',
      description: 'The address was not found. See the main pages of Alex Cassimiro’s website.',
    },
  },
  breadcrumbHome: 'Home',
};
