import type { Dict } from './types.ts';

export const en: Dict = {
  langName: 'English',
  skipLink: 'Skip to content',
  identity: 'Alex Cassimiro · Corporate speaker',
  role: 'Corporate speaker and consultant in leadership, people and culture development',
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
      id: 'gambling',
      anchor: 'impacts-of-gambling',
      title: 'Gambling addiction',
      subtitle: 'Illness caused by betting',
      summary: 'The impacts of betting on behavior, productivity and relationships, and how to prevent them.',
      forWhom: 'Teams and leaders in companies attentive to the growth of online betting.',
      whenToHire: 'Health initiatives, financial education, SIPAT or prevention campaigns.',
      covers: [
        'How betting affects behavior and relationships',
        'Warning signs in the workplace',
        'Paths for prevention and for seeking help',
      ],
      note: 'Educational and preventive approach, with no clinical character.',
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
      what: 'Diagnosis and design of people, leadership and culture solutions.',
      indicated: 'The challenge involves several departments or it is not yet clear which format fits.',
      format: 'A tailored project, with stages defined in the scope.',
      depth: 'Diagnosis, design, implementation support and follow-up.',
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
      label: 'Emotional intelligence talk',
      place: 'Valinhos, SP',
      text: 'An emotional intelligence talk for the team of a company in Valinhos, in the interior of the state of São Paulo.',
      textNamed:
        'An emotional intelligence talk for the Voilier team, in Valinhos, in the interior of the state of São Paulo.',
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
      caption: 'Emotional intelligence talk · Valinhos, SP',
      captionNamed: 'Emotional intelligence talk at Voilier · Valinhos, SP',
    },
    valinhosPortrait: {
      alt: 'Alex Cassimiro seated and smiling in a room with plants',
      caption: 'Alex Cassimiro on the day of the talk in Valinhos, SP',
    },
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
      gambling: 'Impacts of gambling',
      'leadership-program': 'Leadership program',
      consulting: 'Consulting',
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
      h1: 'Corporate talks on emotional intelligence and leadership',
      support:
        'For leaders and teams looking to navigate pressure, handle difficult conversations and work better together. Talks available in English and Portuguese.',
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
        intro:
          'Records of emotional intelligence talks delivered at companies in the state of São Paulo, Brazil.',
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
          q: 'In which languages does Alex give talks?',
          a: 'In Portuguese and in English. The talk language is agreed with the company in the proposal and does not depend on the language in which you are reading this website.',
        },
        {
          q: 'Are the talks in person or online?',
          a: 'Both options are available. The format is agreed in the briefing, according to the event, the audience and the schedule.',
        },
        {
          q: 'Can the talk be customized for my company?',
          a: 'Yes. Before the proposal, Alex aligns goal, audience, language and format. Examples, activities and emphasis are adapted to the organization’s reality.',
        },
        {
          q: 'What information do I need to send to receive a proposal?',
          a: 'The company name and the goal of the event are the starting point. If you have them, include topic, expected date or month, city, format, estimated audience size and language. You can start without a date, topic or audience size defined.',
        },
        {
          q: 'How long is the talk?',
          a: 'The duration is defined in the briefing, according to the format and the event schedule.',
        },
        {
          q: 'Does Alex work with companies outside São Paulo?',
          a: 'Alex has delivered talks in São Paulo and in Valinhos (SP). In-person events in other cities and online events are assessed in the proposal, depending on schedule and travel.',
        },
      ],
      final: {
        title: 'Shall we talk about your event?',
        text: 'Send whatever briefing you have. Date, topic and audience size can be defined together.',
      },
    },
    talks: {
      h1: 'Corporate talks for leaders and teams',
      intro:
        'Alex Cassimiro is a corporate speaker who gives talks in English and Portuguese on emotional intelligence, ethics, mental health, prevention and a culture of care. Each keynote topic starts from real work situations and is adapted to the audience and the goal of the event.',
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
          a: 'Leadership is a thread that runs through every topic. For work focused on developing leaders, the recommendation is a leadership program, designed around the company’s challenges.',
        },
        {
          q: 'Can two topics be combined in the same talk?',
          a: 'Combinations can be assessed in the briefing, depending on goal, audience and available time.',
        },
        {
          q: 'Are the talks on mental health, alcohol and gambling clinical in nature?',
          a: 'No. These topics have an educational and preventive approach and do not replace professional health care.',
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
        'The emotional intelligence talk has been delivered in English in São Paulo and in Portuguese in Valinhos (SP).',
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
      h1: 'Leadership development programs',
      intro:
        'Continuous development for leaders, with sessions, practice and follow-up. For companies that need behavior change over time, not just a single event.',
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
          q: 'Does the program have to have ten modules?',
          a: 'No. The annual journey is an example. The number and order of modules are defined with the company.',
        },
        {
          q: 'Can the program be delivered in English?',
          a: 'The language is agreed in the proposal. Alex’s talks are delivered in Portuguese and in English.',
        },
      ],
      final: {
        title: 'Shall we design your leaders’ program?',
        text: 'Tell us how many leaders would take part and which challenges the company wants to work on.',
      },
    },
    consulting: {
      h1: 'Leadership, people and culture consulting',
      intro:
        'For when the challenge is bigger than an event: diagnosis, solution design, implementation support and follow-up, connecting human development to business strategy.',
      whenTitle: 'When consulting is the right fit',
      when: [
        'The challenge involves more than one department or hierarchical level.',
        'The company wants to understand the cause before choosing a format.',
        'Talks, programs and other initiatives need to be combined in a single project.',
        'The culture is changing and leaders need support to sustain the change.',
      ],
      processTitle: 'How it works',
      process: [
        {
          title: 'Connection and briefing',
          text: 'Understanding the context, challenges and goals of the organization.',
        },
        {
          title: 'Tailored diagnosis',
          text: 'Mapping people, processes and culture to identify real needs.',
        },
        {
          title: 'Solution design',
          text: 'A proposal with content, methodology and format aligned with the business.',
        },
        {
          title: 'Implementation',
          text: 'Delivering activities with interaction, practice and a link to the company’s reality.',
        },
        {
          title: 'Follow-up',
          text: 'Ongoing support with indicators and feedback to sustain day-to-day application.',
        },
      ],
      scopeTitle: 'What may be part of the scope',
      scope: [
        'Diagnosis and design of tailored solutions',
        'Culture, leadership and people projects',
        'Implementation support',
        'Connecting human development to business strategy',
      ],
      faqTitle: 'Questions about consulting',
      faq: [
        {
          q: 'How does a consulting project start?',
          a: 'With a briefing conversation about the context and goals. From there, Alex proposes the scope of the diagnosis and the following stages.',
        },
        {
          q: 'Does consulting include talks and programs?',
          a: 'It can, when that makes sense for the goal. The combination of initiatives is defined in the solution design.',
        },
      ],
      final: {
        title: 'Tell us about your company’s challenge',
        text: 'A first conversation helps clarify whether the path is a talk, a program or consulting.',
      },
    },
    about: {
      h1: 'About Alex Cassimiro',
      lead: 'Corporate speaker and consultant in leadership, people and culture development.',
      bio: [
        'Alex Cassimiro has worked for more than 17 years in people and leadership development, across different industries and organizational contexts. His approach combines content, hands-on experience and applicable methodologies to turn human and organizational challenges into development that matters to the business.',
        'With a degree in Business Administration with an emphasis on Foreign Trade and a postgraduate degree in Neuropsychopedagogy, Alex brings together knowledge of learning, emotional intelligence and corporate practice. His career includes work at SESI, the founding of Escola Associativa Waldorf Aracê in Indaiatuba, and experience in industry, technology, services, education and the nonprofit sector.',
        'Today, Alex works with companies on three fronts: corporate talks, in English and Portuguese; leadership development programs; and consulting in people, leadership and culture.',
      ],
      honor:
        'In 2018, Alex Cassimiro received the honorary title of Citizen of Indaiatuba (Cidadão Indaiatubano) from the Indaiatuba City Council.',
      honorSource:
        'Source: minutes of the solemn session of December 7, 2018, page 2 (Indaiatuba City Council)',
      factsTitle: 'By the numbers',
      facts: [
        { value: '17+ years', label: 'of experience in people and leadership development' },
        { value: '1,000+', label: 'leaders trained in leadership programs' },
        { value: 'EN · PT', label: 'talk languages' },
      ],
      approachTitle: 'How Alex works',
      approach: [
        { title: 'People at the center', text: 'Human development integrated with business strategy.' },
        { title: 'From knowledge to action', text: 'Interactive experiences tied to everyday work.' },
        { title: 'Genuine customization', text: 'Content adapted to the reality of each organization.' },
      ],
      quote:
        'I believe in the power of people and of organizations that learn, connect and grow together. I turn knowledge into action and development into real results.',
      quoteSource: 'Alex Cassimiro (translated from Portuguese)',
      final: {
        title: 'Want to bring Alex to your event?',
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
        'Corporate speaker Alex Cassimiro: emotional intelligence and leadership talks in English and Portuguese for leaders and teams. Request a proposal.',
    },
    talks: {
      title: 'Corporate speaker · Keynote topics | Alex Cassimiro',
      description:
        'Corporate talk topics by Alex Cassimiro: emotional intelligence, ethics and integrity, mental health, alcohol and drugs, active care and gambling. In English and Portuguese.',
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
        'Leadership development programs with sessions, practice and follow-up. See how a talk differs from a program, plus an adaptable annual journey.',
    },
    consulting: {
      title: 'Leadership, people and culture consulting | Alex Cassimiro',
      description:
        'Leadership, people and culture consulting: diagnosis, solution design, implementation and follow-up.',
    },
    about: {
      title: 'About Alex Cassimiro · Speaker biography',
      description:
        'Biography of Alex Cassimiro: 17+ years in people and leadership development, talks in English and Portuguese, and Citizen of Indaiatuba title (2018).',
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
