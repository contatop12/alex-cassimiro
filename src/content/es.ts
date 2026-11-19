import type { Dict } from './types.ts';

export const es: Dict = {
  langName: 'Español',
  skipLink: 'Saltar al contenido',
  identity: 'Alex Cassimiro · Conferencista corporativo',
  role: 'Educador, conferencista y comunicador',
  nav: {
    label: 'Navegación principal',
    talks: 'Conferencias',
    english: 'Conferencias en inglés',
    leadership: 'Programas de liderazgo',
    consulting: 'Consultoría',
    about: 'Acerca de',
    contact: 'Contacto',
    home: 'Inicio',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    language: 'Idioma del sitio',
  },
  cta: {
    proposal: 'Solicitar propuesta',
    topics: 'Ver temas de las conferencias',
    whatsapp: 'Conversar por WhatsApp',
    email: 'Enviar correo',
    readBio: 'Leer la biografía completa',
    seeEnglish: 'Ver conferencias en inglés',
    seeTalks: 'Ver todos los temas',
    seeEi: 'Ver la conferencia de inteligencia emocional',
    seeLeadership: 'Conocer los programas de liderazgo',
    seeConsulting: 'Conocer la consultoría',
    backHome: 'Volver al inicio',
    proposalForTopic: 'Solicitar propuesta para este tema',
  },
  whatsapp: {
    message:
      'Hola, Alex. Llegué desde su sitio web y me gustaría conversar sobre una conferencia para mi empresa.',
    messageTopic: 'Hola, Alex. Llegué desde su sitio web y me gustaría conversar sobre: {topic}.',
    floatingLabel: 'Conversar con Alex por WhatsApp',
  },
  talkLanguagesLine: 'Conferencias disponibles en portugués e inglés',
  video: {
    label: 'Video de Alex Cassimiro hablando sobre inteligencia emocional, con subtítulos en portugués',
    soundOn: 'Activar sonido',
    soundOff: 'Desactivar sonido',
    pause: 'Pausar video',
    play: 'Reproducir video',
  },
  stats: {
    years: '+17 años',
    yearsLabel: 'de experiencia en desarrollo de personas y liderazgo',
    leaders: '+1.000',
    leadersLabel: 'líderes capacitados en programas de liderazgo',
    languages: '2 idiomas',
    languagesLabel: 'conferencias en portugués e inglés',
    source: 'Cifras del media kit institucional de {year}.',
  },
  themeLabels: {
    forWhom: 'Para quién tiene sentido',
    whenToHire: 'Cuándo contratar',
    covers: 'Qué se aborda',
    scope: 'Alcance',
  },
  solutionLabels: {
    indicated: 'Se recomienda cuando',
    format: 'Formato',
    depth: 'Profundidad',
  },
  themes: [
    {
      id: 'emotional-intelligence',
      anchor: 'inteligencia-emocional',
      title: 'Inteligencia emocional',
      subtitle: 'Emociones, presión y relaciones en el día a día laboral',
      summary:
        'Cómo reconocer lo que sentimos bajo presión y elegir la respuesta antes de reaccionar: en conversaciones difíciles, en la retroalimentación y en la colaboración entre áreas.',
      forWhom:
        'Líderes y equipos que trabajan con plazos ajustados, atienden a clientes exigentes o dependen de otras áreas para entregar.',
      whenToHire:
        'Convenciones, semanas internas, encuentros de liderazgo, programas de integración o etapas de cambio que aumentan la tensión cotidiana.',
      covers: [
        'Reconocer señales de presión en uno mismo y en el equipo antes de que se conviertan en conflicto',
        'Conducir conversaciones difíciles con claridad y respeto',
        'Dar y recibir retroalimentación sin convertir la conversación en una disputa',
        'Colaborar entre áreas con metas y ritmos distintos',
      ],
    },
    {
      id: 'ethics-harassment',
      anchor: 'etica-e-integridad',
      title: 'Ética e integridad',
      subtitle: 'Tolerancia cero al acoso',
      summary:
        'Entornos más seguros, respetuosos y éticos, con foco en la construcción de una cultura de integridad.',
      forWhom: 'Líderes y equipos de empresas que están fortaleciendo su cultura de integridad y respeto.',
      whenToHire:
        'Campañas internas de integridad, integración de nuevos líderes, revisión del código de conducta o acciones de prevención del acoso.',
      covers: [
        'Comportamientos que vuelven inseguro el entorno y cómo reconocerlos',
        'El papel de cada líder en la prevención y en la acogida',
        'El respeto como práctica cotidiana en las relaciones laborales',
      ],
      note: 'Contenido educativo. No sustituye la asesoría jurídica ni los canales y políticas de cumplimiento (compliance) de la empresa.',
    },
    {
      id: 'mental-health',
      anchor: 'salud-mental',
      title: 'Salud mental en debate',
      subtitle: 'Concientización y bienestar en el trabajo',
      summary: 'Concientización, autocuidado y estrategias para promover el bienestar en el entorno laboral.',
      forWhom: 'Equipos y líderes de cualquier área, especialmente en períodos de sobrecarga.',
      whenToHire:
        'Campañas como el Septiembre Amarillo (mes de prevención del suicidio en Brasil), semanas de salud y bienestar o acciones de cuidado con los equipos.',
      covers: [
        'Señales de sobrecarga que merecen atención',
        'El autocuidado como responsabilidad individual y colectiva',
        'Cómo el liderazgo puede abrir espacio para el tema',
      ],
      note: 'Enfoque educativo, sin carácter clínico ni terapéutico. No sustituye el acompañamiento profesional de salud.',
    },
    {
      id: 'alcohol-drugs',
      anchor: 'alcohol-y-otras-drogas',
      title: 'Mitos y verdades',
      subtitle: 'El impacto del alcohol y otras drogas en la actualidad',
      summary: 'Información basada en la ciencia para tomar decisiones más conscientes y responsables.',
      forWhom: 'Equipos operativos y administrativos, líderes y áreas de salud y seguridad.',
      whenToHire:
        'SIPAT (semana interna de prevención de accidentes laborales en Brasil), campañas de prevención y acciones de salud y seguridad en el trabajo.',
      covers: [
        'Mitos comunes sobre el alcohol y otras drogas',
        'Impactos en el comportamiento, la seguridad y las relaciones',
        'Decisiones conscientes en el trabajo y fuera de él',
      ],
      note: 'Enfoque educativo y preventivo, sin carácter clínico.',
    },
    {
      id: 'active-care',
      anchor: 'cultura-del-cuidado-activo',
      title: 'La cultura del cuidado activo',
      subtitle: 'Fortaleciendo la base de la empresa',
      summary: 'Seguridad, bienestar y relaciones humanas como pilares de la sostenibilidad del negocio.',
      forWhom:
        'Empresas que quieren involucrar a líderes y equipos en la seguridad y el cuidado de las personas.',
      whenToHire: 'SIPAT, lanzamiento de programas de seguridad y bienestar, y encuentros de liderazgo.',
      covers: [
        'Cuidado activo: percibir, actuar y dar seguimiento',
        'Seguridad y bienestar como responsabilidad compartida',
        'Relaciones de confianza que sostienen la cultura',
      ],
    },
    {
      id: 'financial-health',
      anchor: 'salud-financiera-y-comportamiento',
      title: 'Salud financiera y comportamiento',
      subtitle: 'Emociones, decisiones y la relación con el dinero',
      summary:
        'Cómo las emociones, los hábitos y las decisiones influyen en la relación con el dinero, y qué tiene que ver eso con la salud mental, las relaciones y el trabajo.',
      forWhom:
        'Equipos y líderes de empresas que quieren cuidar el bienestar de las personas de forma integral.',
      whenToHire:
        'Semanas de salud y bienestar, semanas de seguridad laboral, acciones de educación financiera o campañas de cuidado de los equipos.',
      covers: [
        'Cómo las emociones y los hábitos influyen en las decisiones financieras',
        'La relación entre deudas, estrés y salud mental',
        'Compras impulsivas, apuestas y otras señales de alerta',
        'Decisiones más conscientes dentro y fuera del trabajo',
      ],
      note: 'Enfoque educativo y de concienciación, sin carácter clínico. No sustituye el acompañamiento psicológico o médico ni la orientación financiera especializada.',
    },
  ],
  solutions: [
    {
      id: 'talk',
      page: 'talks',
      name: 'Conferencia',
      what: 'Un encuentro para movilizar al público en torno a un tema.',
      indicated:
        'El evento necesita abrir una conversación, alinear un tema o marcar un momento de la empresa.',
      format: 'Presencial o en línea, en portugués o inglés, con duración definida en el briefing.',
      depth: 'Un encuentro, con contenido ajustado al público y al objetivo del evento.',
    },
    {
      id: 'program',
      page: 'leadership',
      name: 'Programa de liderazgo',
      what: 'Un recorrido de desarrollo para líderes, con práctica entre los encuentros.',
      indicated:
        'La empresa necesita desarrollar comportamientos de liderazgo a lo largo del tiempo, y no solo inspirar.',
      format: 'Encuentros presenciales, en línea en vivo o híbridos, mensuales o intensivos.',
      depth: 'Varios módulos, con desafíos aplicados, herramientas y acompañamiento.',
    },
    {
      id: 'consulting',
      page: 'consulting',
      name: 'Consultoría',
      what: 'Consultoría estratégica en gestión, procesos y desarrollo organizacional, con el consultor Sergio Del Corso.',
      indicated:
        'La empresa quiere mejorar la gestión, revisar procesos o encontrar soluciones para desafíos estratégicos.',
      format:
        'Proyecto a la medida, estructurado a partir de una conversación sobre el contexto de la empresa.',
      depth: 'Análisis del contexto, identificación de oportunidades y propuesta de actuación.',
    },
  ],
  hireSteps: [
    {
      title: 'Usted comparte el briefing',
      text: 'Cuéntenos el objetivo del evento y lo que ya sabe sobre público, fecha y formato. Se puede comenzar sin tener todas las respuestas.',
    },
    {
      title: 'Alex alinea los detalles',
      text: 'En una conversación breve, Alex alinea con quien organiza el objetivo, el público, el idioma de la conferencia y el formato.',
    },
    {
      title: 'Usted recibe la propuesta',
      text: 'La propuesta llega según el alcance: tema, enfoque, formato, duración e inversión.',
    },
  ],
  cases: {
    english: {
      label: 'Conferencia de inteligencia emocional en inglés',
      place: 'São Paulo, SP',
      text: 'Conferencia sobre inteligencia emocional dictada en inglés para colaboradores de una empresa con actuación internacional, en São Paulo.',
      textNamed:
        'Conferencia sobre inteligencia emocional dictada en inglés para colaboradores de Kuraray, en São Paulo.',
    },
    voilier: {
      label: 'Gestión de Energía y Desempeño Sostenible',
      place: 'Valinhos, SP',
      text: 'La empresa pidió una conferencia sobre gestión del tiempo. Después del diagnóstico, se amplió el alcance y el encuentro con el equipo, en Valinhos, en el interior del estado de São Paulo, abordó la gestión de la energía y el desempeño sostenible.',
      textNamed:
        'Voilier pidió una conferencia sobre gestión del tiempo. Después del diagnóstico, se amplió el alcance y el encuentro con el equipo, en Valinhos, en el interior del estado de São Paulo, abordó la gestión de la energía y el desempeño sostenible.',
    },
  },
  images: {
    heroPortrait: { alt: 'Alex Cassimiro sonriendo, con una camiseta azul marino, frente a una pared roja' },
    aboutPortrait: {
      alt: 'Alex Cassimiro con los brazos cruzados y expresión serena, frente a una pared roja',
    },
    invitePortrait: { alt: 'Alex Cassimiro extendiendo la mano en un gesto de invitación' },
    statePressure: { alt: 'Alex Cassimiro con las manos en la cabeza, representando un momento de presión' },
    stateDoubt: { alt: 'Alex Cassimiro encogiéndose de hombros, representando duda' },
    stateExplain: { alt: 'Alex Cassimiro gesticulando como quien explica algo con calma' },
    stateOpen: { alt: 'Alex Cassimiro sonriendo, con los brazos abiertos' },
    podium: {
      alt: 'Alex Cassimiro hablando al micrófono en un atril',
      caption: 'Alex Cassimiro en una presentación al micrófono.',
    },
    talkEnglish: {
      alt: 'Alex Cassimiro habla al micrófono ante participantes sentados, con una diapositiva en inglés proyectada al fondo',
      caption: 'Conferencia de inteligencia emocional dictada en inglés · São Paulo, SP',
      captionNamed: 'Conferencia de inteligencia emocional dictada en inglés en Kuraray · São Paulo, SP',
    },
    talkEnergy: {
      alt: 'Alex Cassimiro sonríe al micrófono entre las mesas de los participantes',
      caption: 'Interacción con el público durante la conferencia en inglés · São Paulo, SP',
    },
    talkQuestion: {
      alt: 'Una participante hace una pregunta a Alex Cassimiro frente a una diapositiva con preguntas del público',
      caption: 'Momento de preguntas, conducido en inglés · São Paulo, SP',
    },
    talkListening: {
      alt: 'Alex Cassimiro lee al micrófono la anotación de una participante mientras el grupo escribe',
      caption: 'Actividad escrita con los participantes · São Paulo, SP',
    },
    talkRoom: {
      alt: 'Sala en forma de U con decenas de participantes y Alex Cassimiro al centro',
      caption: 'Vista general de la sala durante la conferencia · São Paulo, SP',
    },
    talkWalk: {
      alt: 'Alex Cassimiro camina por el centro de la sala mientras habla con los participantes',
      caption: 'Conferencia de inteligencia emocional en inglés · São Paulo, SP',
    },
    talkMic: {
      alt: 'Alex Cassimiro habla de pie al micrófono, cerca de los participantes',
      caption: 'Conferencia de inteligencia emocional en inglés · São Paulo, SP',
    },
    valinhosGroup: {
      alt: 'Foto grupal de los participantes con Alex Cassimiro al final de una conferencia',
      caption: 'Conferencia de gestión de la energía y desempeño sostenible · Valinhos, SP',
      captionNamed: 'Conferencia de gestión de la energía y desempeño sostenible en Voilier · Valinhos, SP',
    },
    valinhosPortrait: {
      alt: 'Alex Cassimiro sentado y sonriendo, en un ambiente con plantas',
      caption: 'Alex Cassimiro el día de la conferencia en Valinhos, SP',
    },
    sergioPortrait: {
      alt: 'Sergio Del Corso, consultor estratégico, sonriendo, con traje azul marino y corbata',
    },
  },
  footer: {
    tagline:
      'Conferencias corporativas, programas de liderazgo y consultoría en desarrollo de personas y cultura. Conferencias disponibles en portugués e inglés.',
    contactTitle: 'Contacto',
    pagesTitle: 'Páginas',
    followTitle: 'Redes',
    languagesTitle: 'Idiomas del sitio',
    privacy: 'Política de privacidad',
    rights: 'Todos los derechos reservados.',
    instagramLabel: 'Instagram de Alex Cassimiro',
    linkedinLabel: 'LinkedIn de Alex Cassimiro',
    creditPrefix: 'Desarrollado por',
  },
  consent: {
    text: 'Usamos cookies de medición para entender qué páginas ayudan a las empresas a encontrar las conferencias. Ningún dato del formulario se envía a estas herramientas.',
    accept: 'Aceptar medición',
    reject: 'Rechazar',
    policy: 'Política de privacidad',
  },
  form: {
    title: 'Solicitud de propuesta',
    requiredHint: 'Los campos con * son obligatorios.',
    detailsLegend: 'Detalles del evento (opcional)',
    labels: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo corporativo',
      objective: 'Objetivo del evento',
      phone: 'Teléfono o WhatsApp',
      topic: 'Tema de interés',
      date: 'Fecha o mes previsto',
      location: 'Ciudad y país',
      format: 'Formato',
      audience: 'Estimación de público',
      talkLanguage: 'Idioma de la conferencia',
    },
    placeholders: {
      objective: 'Ej.: abrir la semana de liderazgo con una conversación sobre presión y retroalimentación.',
      date: 'Ej.: marzo de 2027',
      location: 'Ej.: São Paulo, Brasil',
      phone: 'Ej.: +55 11 90000-0000',
    },
    hints: {
      objective: 'Cuéntenos qué debe provocar el evento en el público. Puede ser una idea inicial.',
      talkLanguage:
        'El idioma de la conferencia es independiente del idioma de este sitio web. Las conferencias están disponibles en portugués e inglés.',
    },
    selectPlaceholder: 'Seleccione',
    topicOptions: {
      'emotional-intelligence': 'Inteligencia emocional',
      'ethics-harassment': 'Ética e integridad (acoso)',
      'mental-health': 'Salud mental en el trabajo',
      'alcohol-drugs': 'Alcohol y otras drogas',
      'active-care': 'Cultura del cuidado activo',
      'financial-health': 'Salud financiera y comportamiento',
      'leadership-program': 'Programa de liderazgo',
      consulting: 'Consultoría estratégica',
      other: 'Otro o aún no lo sé',
    },
    formatOptions: {
      'in-person': 'Presencial',
      online: 'En línea',
      hybrid: 'Híbrido',
      undecided: 'Por definir',
    },
    audienceOptions: {
      'up-to-50': 'Hasta 50 personas',
      '50-150': '50 a 150 personas',
      '150-500': '150 a 500 personas',
      '500-plus': 'Más de 500 personas',
      undecided: 'Por definir',
    },
    talkLanguageOptions: {
      pt: 'Portugués',
      en: 'Inglés',
      tbd: 'Por definir',
    },
    submit: 'Enviar solicitud de propuesta',
    sending: 'Enviando…',
    successTitle: 'Solicitud recibida',
    successText:
      'Gracias. Alex leerá su briefing y responderá al correo indicado. Si prefiere adelantar la conversación, escriba por WhatsApp.',
    sendAnother: 'Enviar otra solicitud',
    errorSummary: 'Revise los campos resaltados para enviar la solicitud.',
    errors: {
      required: 'Complete este campo.',
      too_short: 'Escriba un poco más.',
      too_long: 'Texto demasiado largo. Resuma en menos caracteres.',
      invalid_email: 'Indique un correo válido, como nombre@empresa.com.',
      invalid_choice: 'Elija una de las opciones de la lista.',
      invalid_phone: 'Use solo números, espacios, +, ( ) y -.',
    },
    failure: {
      network:
        'No fue posible enviar: verifique la conexión e intente de nuevo. Sus datos siguen en el formulario.',
      server:
        'El envío falló de nuestro lado. Intente de nuevo en unos instantes o escriba directamente por WhatsApp o correo.',
      rateLimited: 'Demasiados envíos seguidos. Espere un minuto e intente de nuevo.',
      notConfigured:
        'El formulario aún no está activo en esta versión del sitio. Envíe la solicitud por WhatsApp o por correo.',
      spam: 'No fue posible validar el envío. Intente de nuevo o escriba por WhatsApp o correo.',
    },
    privacy: 'Los datos se usan solo para responder a esta solicitud. Más información en la {link}.',
    alternatives: '¿Prefiere otro canal?',
  },
  pages: {
    home: {
      h1: 'Comprender el comportamiento humano es comprender los desafíos de nuestro tiempo.',
      support:
        'Alex Cassimiro traduce el conocimiento científico en conferencias y experiencias que conectan emociones, decisiones y comportamiento con los desafíos reales de la vida y del trabajo.',
      portraitAlt: 'Alex Cassimiro sonriendo, con una camiseta azul marino, frente a una pared roja',
      english: {
        title: 'Experiencia con conferencias en inglés',
        text: 'En São Paulo, Alex dictó en inglés una conferencia sobre inteligencia emocional para colaboradores de una empresa con actuación internacional. La presentación, las actividades y el momento de preguntas se llevaron a cabo en inglés.',
        textNamed:
          'En São Paulo, Alex dictó en inglés una conferencia sobre inteligencia emocional para colaboradores de Kuraray. La presentación, las actividades y el momento de preguntas se llevaron a cabo en inglés.',
        link: 'Cómo funcionan las conferencias en inglés',
      },
      topics: {
        title: 'Temas de las conferencias',
        intro:
          'Cada conferencia parte de situaciones reales de trabajo y se ajusta al público, al objetivo y al formato del evento.',
        more: 'Detalles de cada tema',
      },
      cases: {
        title: 'Experiencias realizadas',
        intro: 'Registros de conferencias dictadas en empresas del estado de São Paulo.',
      },
      about: {
        title: 'Acerca de Alex',
        text: 'Alex Cassimiro trabaja desde hace más de 17 años en el desarrollo de personas y líderes, en distintos sectores y contextos organizacionales. Su enfoque combina contenido, experiencia práctica y metodologías aplicables para traducir desafíos humanos en desarrollo con relevancia para el negocio.',
        quote: 'Transformo el conocimiento en acción y el desarrollo en resultados reales.',
      },
      solutions: {
        title: '¿Conferencia, programa o consultoría?',
        intro:
          'No todo desafío se resuelve en un evento. Cuando la empresa necesita un proyecto más amplio, la conversación puede evolucionar hacia un programa de liderazgo o una consultoría.',
      },
      hire: {
        title: 'Cómo contratar',
        intro:
          'Un proceso breve, pensado para quienes organizan eventos y necesitan justificar la contratación internamente.',
      },
      faqTitle: 'Preguntas frecuentes',
      faq: [
        {
          q: '¿Qué temas aborda Alex Cassimiro en sus conferencias?',
          a: 'Alex aborda temas relacionados con el comportamiento humano, las emociones y las relaciones en el trabajo, como inteligencia emocional, salud mental, liderazgo, cultura organizacional, ética y desarrollo humano. Cada experiencia se construye considerando los desafíos y objetivos de la organización.',
        },
        {
          q: '¿Las conferencias se personalizan para cada empresa?',
          a: 'Sí. El contenido, los ejemplos y las actividades se adaptan al contexto de la empresa, al perfil del público y a los objetivos del encuentro. La propuesta es conectar el conocimiento con situaciones reales de la vida cotidiana.',
        },
        {
          q: '¿Las conferencias son presenciales o en línea?',
          a: 'Ambas modalidades están disponibles. El formato se define en conjunto, considerando el objetivo del evento, el público y la disponibilidad.',
        },
        {
          q: '¿En qué idiomas da conferencias Alex?',
          a: 'En portugués e inglés. El idioma se define según las necesidades de la empresa y el perfil de los participantes.',
        },
        {
          q: '¿Cuánto dura una conferencia?',
          a: 'La duración se define según el objetivo y la programación del evento. Las experiencias pueden estructurarse en distintos formatos, desde encuentros más breves hasta actividades ampliadas con interacción.',
        },
        {
          q: '¿Qué información necesito enviar para solicitar una propuesta?',
          a: 'El nombre de la empresa y el objetivo del evento son suficientes para iniciar la conversación. Si los tiene, también ayudan datos sobre fecha, ciudad, público estimado, tema de interés y formato deseado.',
        },
      ],
      final: {
        title: '¿Conversamos sobre su evento?',
        text: 'Envíe el briefing que tenga. La fecha, el tema y el tamaño del público pueden definirse en conjunto.',
      },
    },
    talks: {
      h1: 'Conferencias sobre el comportamiento humano y los desafíos de nuestro tiempo.',
      intro:
        'Experiencias de comunicación que traducen el conocimiento científico en reflexiones y aprendizajes sobre emociones, decisiones, relaciones y comportamiento en el trabajo.',
      langsNote: 'Las experiencias pueden realizarse en portugués o en inglés.',
      themesTitle: 'Temas disponibles',
      leadership: {
        title: 'Liderazgo en todos los temas',
        text: 'El liderazgo atraviesa todas las conferencias: cómo el líder conduce la conversación, da el ejemplo y sostiene el tema después del evento. Para desarrollar líderes a lo largo del tiempo, conozca los programas de liderazgo.',
      },
      personalizationTitle: 'Cómo se ajusta cada conferencia',
      personalization: [
        {
          title: 'Objetivo del evento',
          text: 'Lo que el público necesita llevar al trabajo el lunes siguiente.',
        },
        { title: 'Público', text: 'Líderes, equipos operativos, áreas administrativas o públicos mixtos.' },
        {
          title: 'Ejemplos y lenguaje',
          text: 'Situaciones cercanas al día a día de la empresa y del sector.',
        },
        { title: 'Idioma y formato', text: 'Portugués o inglés; presencial o en línea.' },
      ],
      formatsTitle: 'Formatos',
      formats: [
        {
          title: 'Presencial',
          text: 'En convenciones, auditorios, salas de capacitación y encuentros de liderazgo.',
        },
        {
          title: 'En línea en vivo',
          text: 'Para equipos distribuidos, con interacción por chat y actividades guiadas.',
        },
      ],
      faqTitle: 'Preguntas sobre las conferencias',
      faq: [
        {
          q: '¿Existe una conferencia específica sobre liderazgo?',
          a: 'El liderazgo es un tema transversal a todas las experiencias. Para las empresas que desean desarrollar competencias de liderazgo de forma continua, también existen los programas de desarrollo, estructurados según los desafíos de la organización.',
        },
        {
          q: '¿Es posible combinar dos o más temas en una conferencia?',
          a: 'Sí. Los temas pueden relacionarse y adaptarse según el objetivo del evento, el perfil del público y el tiempo disponible. La propuesta es construir una experiencia coherente, sin sobrecargar el contenido.',
        },
        {
          q: '¿Las conferencias sobre salud mental, salud financiera y comportamiento tienen carácter clínico?',
          a: 'No. Son experiencias educativas y de concienciación, basadas en conocimiento científico. No sustituyen el acompañamiento psicológico o médico ni la orientación financiera especializada.',
        },
        {
          q: '¿Las conferencias pueden adaptarse a distintos públicos y sectores?',
          a: 'Sí. El lenguaje, los ejemplos y las actividades se ajustan a la realidad de los participantes, ya sean líderes, equipos operativos, áreas administrativas o públicos mixtos.',
        },
      ],
      final: {
        title: '¿Encontró el tema de su evento?',
        text: 'Solicite una propuesta. Si aún no está seguro del tema, cuéntenos el objetivo y la elección se hace en conjunto.',
      },
    },
    ei: {
      h1: 'Conferencia de inteligencia emocional para empresas',
      intro:
        'Una conferencia sobre lo que les ocurre a las personas cuando el trabajo aprieta, y sobre cómo elegir la respuesta antes de reaccionar. Para líderes y equipos, en portugués o inglés.',
      situationsTitle: 'Situaciones de trabajo que se abordan',
      situationsIntro: 'La conferencia parte de momentos que todo equipo conoce.',
      situations: [
        {
          title: 'Presión y plazos',
          text: 'Percibir las propias señales de tensión y evitar que la presión se convierta en una reacción automática.',
          image: 'statePressure',
        },
        {
          title: 'Conversaciones difíciles',
          text: 'Preparar y conducir conversaciones delicadas con claridad, sin evadir el tema ni atropellar al otro.',
          image: 'stateDoubt',
        },
        {
          title: 'Retroalimentación',
          text: 'Dar y recibir retroalimentación de modo que la conversación mejore el trabajo en lugar de generar una disputa.',
          image: 'stateExplain',
        },
        {
          title: 'Colaboración entre áreas',
          text: 'Manejar metas, ritmos y prioridades distintos sin convertir la diferencia en conflicto.',
          image: 'stateOpen',
        },
      ],
      audiencesTitle: 'Para qué públicos',
      audiences: [
        {
          title: 'Líderes',
          text: 'Gerentes que conducen equipos bajo presión y necesitan conversaciones más claras.',
        },
        {
          title: 'Equipos',
          text: 'Equipos que dependen unos de otros y quieren colaborar con menos fricción.',
        },
        {
          title: 'Equipos internacionales',
          text: 'Equipos que trabajan en inglés o reciben participantes de otros países.',
        },
      ],
      formatsTitle: 'Formatos',
      formats: [
        {
          title: 'Presencial',
          text: 'Auditorios, salas de capacitación, convenciones y encuentros de liderazgo.',
        },
        {
          title: 'En línea en vivo',
          text: 'Para equipos distribuidos, con interacción y actividades guiadas.',
        },
        {
          title: 'Portugués o inglés',
          text: 'La empresa elige el idioma de la conferencia en la propuesta.',
        },
      ],
      customTitle: 'Qué se puede personalizar',
      custom: [
        'Ejemplos vinculados al sector y a la rutina de la empresa',
        'Énfasis en liderazgo, en equipos o en ambos',
        'Actividades individuales o grupales, según el espacio',
        'Duración y encaje en la programación del evento',
        'Idioma de la conferencia: portugués o inglés',
      ],
      evidenceTitle: 'Registros de la conferencia',
      evidenceText:
        'La conferencia de inteligencia emocional ya se dictó en inglés para colaboradores de una empresa con actuación internacional, en São Paulo.',
      faqTitle: 'Preguntas sobre la conferencia de inteligencia emocional',
      faq: [
        {
          q: '¿Para quién es la conferencia de inteligencia emocional?',
          a: 'Para líderes y equipos que enfrentan presión, conversaciones difíciles, retroalimentación y colaboración entre áreas. El contenido se ajusta al público de cada evento.',
        },
        {
          q: '¿La conferencia de inteligencia emocional puede dictarse en inglés?',
          a: 'Sí. Alex ya dictó esta conferencia en inglés para colaboradores de una empresa con actuación internacional, en São Paulo.',
        },
        {
          q: '¿La conferencia tiene carácter terapéutico?',
          a: 'No. Es una conferencia corporativa y educativa, orientada a situaciones de trabajo.',
        },
      ],
      final: {
        title: 'Inteligencia emocional en su próximo evento',
        text: 'Cuéntenos el objetivo y el público. El tema ya viene completado en el formulario.',
      },
    },
    english: {
      h1: 'Conferencista corporativo en inglés en Brasil',
      intro:
        'Para empresas que necesitan una conferencia dictada íntegramente en inglés, en Brasil: equipos multinacionales, eventos con invitados de otros países y programas de liderazgo que se realizan en inglés.',
      contextsTitle: 'Cuándo tiene sentido una conferencia en inglés',
      contexts: [
        {
          title: 'Equipos multinacionales',
          text: 'Equipos que trabajan en inglés en su día a día y participan en eventos internos en el mismo idioma.',
        },
        {
          title: 'Invitados internacionales',
          text: 'Encuentros en Brasil con participantes o líderes de otros países.',
        },
        {
          title: 'Programas globales',
          text: 'Iniciativas de desarrollo definidas por la casa matriz y conducidas en inglés en la operación brasileña.',
        },
      ],
      recordTitle: 'Registro: inteligencia emocional en inglés, en São Paulo',
      recordText:
        'Alex dictó en inglés una conferencia sobre inteligencia emocional para colaboradores de una empresa con actuación internacional, en São Paulo. La presentación, las actividades y el momento de preguntas se llevaron a cabo en inglés.',
      recordTextNamed:
        'Alex dictó en inglés una conferencia sobre inteligencia emocional para colaboradores de Kuraray, en São Paulo. La presentación, las actividades y el momento de preguntas se llevaron a cabo en inglés.',
      howTitle: 'Cómo funciona',
      how: [
        {
          title: 'Briefing en el idioma que prefiera',
          text: 'La conversación de alineación puede realizarse en portugués o en inglés.',
        },
        {
          title: 'Conferencia en inglés',
          text: 'Exposición, actividades y preguntas del público en inglés.',
        },
        {
          title: 'Ejemplos del contexto de la empresa',
          text: 'Situaciones cercanas a la rutina de los equipos involucrados.',
        },
      ],
      topicsTitle: 'Temas en inglés',
      topicsText:
        'La conferencia de inteligencia emocional ya se dictó en inglés. La disponibilidad de los demás temas en inglés se confirma en la propuesta.',
      faqTitle: 'Preguntas sobre conferencias en inglés',
      faq: [
        {
          q: '¿La conferencia es totalmente en inglés?',
          a: 'Sí. Cuando la empresa elige el inglés, la presentación, las actividades y las preguntas del público se desarrollan en inglés.',
        },
        {
          q: '¿El briefing también debe ser en inglés?',
          a: 'No. La conversación de alineación puede ser en portugués o en inglés, según resulte más práctico para quien organiza.',
        },
        {
          q: '¿Alex dicta conferencias en español?',
          a: 'No. Las conferencias se dictan en portugués y en inglés.',
        },
      ],
      final: {
        title: '¿Necesita una conferencia en inglés?',
        text: 'El formulario ya llega con el inglés seleccionado como idioma de la conferencia.',
      },
    },
    leadership: {
      h1: 'Desarrollar líderes es transformar comportamientos en la práctica.',
      intro:
        'Recorridos de aprendizaje que conectan comportamiento humano, relaciones y visión de negocio para desarrollar líderes más conscientes, preparados y responsables.',
      presentation: [
        'Las organizaciones enfrentan desafíos que no se resuelven con una capacitación aislada. Desarrollar líderes exige continuidad, reflexión, práctica y aplicación en el día a día.',
        'Los Programas de Liderazgo son recorridos personalizados que combinan conocimiento, experiencias prácticas y acompañamiento para transformar los aprendizajes en comportamientos observables en el entorno laboral.',
      ],
      compareTitle: '¿Conferencia puntual o programa?',
      compareHead: { aspect: 'Aspecto', talk: 'Conferencia puntual', program: 'Programa de liderazgo' },
      compare: [
        {
          aspect: 'Objetivo',
          talk: 'Abrir una conversación y movilizar al público',
          program: 'Desarrollar comportamientos de liderazgo',
        },
        { aspect: 'Duración', talk: 'Un encuentro', program: 'Varios módulos a lo largo de meses' },
        {
          aspect: 'Práctica',
          talk: 'Reflexiones y actividades en el propio evento',
          program: 'Desafíos aplicados entre los encuentros',
        },
        {
          aspect: 'Acompañamiento',
          talk: 'No aplica',
          program: 'Herramientas, materiales y apoyo para el día a día',
        },
      ],
      pillarsTitle: 'Cómo funciona el programa',
      pillars: [
        { title: 'Desarrollo continuo', text: 'Recorrido estructurado de aprendizaje a lo largo del año.' },
        { title: 'Metodologías prácticas', text: 'Contenidos aplicables a la realidad de la organización.' },
        {
          title: 'Foco en el trabajo',
          text: 'Evolución de comportamientos observables en la rutina de los líderes.',
        },
        {
          title: 'Acompañamiento y aplicación',
          text: 'Herramientas, desafíos y apoyo entre los encuentros.',
        },
      ],
      journeyTitle: 'Ejemplo de recorrido anual',
      journeyIntro:
        'Un ejemplo de secuencia de módulos. Los contenidos se eligen y ordenan según los desafíos de su organización.',
      journeyUnit: 'Módulo',
      journey: [
        { title: 'Atención y desempeño sostenible', text: 'Liderazgo en la era de la IA.' },
        { title: 'Liderazgo multigeneracional', text: 'Conexiones y compromiso entre generaciones.' },
        {
          title: 'Visión sistémica y pensamiento crítico',
          text: 'Decisiones más conscientes y estratégicas.',
        },
        {
          title: 'Comunicación y cultura de retroalimentación',
          text: 'Diálogo, confianza y alto desempeño.',
        },
        { title: 'Innovación y creatividad', text: 'Transformar desafíos en oportunidades.' },
        { title: 'Inteligencia emocional y autocuidado', text: 'Bienestar para liderar con equilibrio.' },
        { title: 'Gestión del cambio', text: 'Adaptación y protagonismo en nuevos escenarios.' },
        {
          title: 'Protagonismo y sentido de pertenencia',
          text: 'De la actitud individual al impacto colectivo.',
        },
        { title: 'ESG y liderazgo responsable', text: 'Personas, negocios y sociedad.' },
        { title: 'Consolidación y plan de acción', text: 'Aplicación práctica y próximos pasos.' },
      ],
      formatsTitle: 'Formatos',
      formats: [
        { title: 'Presencial', text: 'Encuentros mensuales o intensivos.' },
        { title: 'En línea en vivo', text: 'Encuentros interactivos, sin desplazamientos.' },
        { title: 'Híbrido', text: 'Combinación de encuentros presenciales y en línea.' },
      ],
      scopeNote: 'La propuesta se personaliza según la duración, el formato y el número de participantes.',
      faqTitle: 'Preguntas sobre los programas',
      faq: [
        {
          q: '¿El programa debe tener diez módulos?',
          a: 'No. El recorrido presentado es solo una referencia. La cantidad de encuentros, los temas y la duración se definen según los desafíos, los objetivos y la realidad de cada organización.',
        },
        {
          q: '¿Cómo se definen los temas del programa?',
          a: 'La construcción comienza por comprender los desafíos de la empresa y las necesidades de desarrollo de los líderes. A partir de ahí, se definen los temas, la secuencia de los módulos y las actividades prácticas.',
        },
        {
          q: '¿Cómo funciona el acompañamiento entre los encuentros?',
          a: 'El aprendizaje continúa entre los módulos mediante desafíos aplicados, reflexiones, herramientas y actividades relacionadas con la rutina de liderazgo. El objetivo es favorecer la transferencia del aprendizaje al trabajo.',
        },
        {
          q: '¿El programa puede realizarse de forma presencial, en línea o híbrida?',
          a: 'Sí. Los encuentros pueden ser presenciales, en línea en vivo o en formato híbrido. La elección considera la estructura de la empresa, la ubicación de los participantes y los objetivos del programa.',
        },
      ],
      final: {
        title: '¿Desarrollamos juntos a los próximos líderes de su organización?',
        text: 'Cuéntenos qué desafíos enfrenta su empresa y qué comportamientos desea desarrollar. A partir de esa conversación, podemos diseñar un recorrido de aprendizaje alineado con la realidad del negocio.',
      },
    },
    consulting: {
      h1: 'Estrategia y gestión para transformar desafíos en resultados.',
      intro:
        'Soluciones de consultoría estratégica para empresas que buscan mejorar su gestión, optimizar procesos y fortalecer su desarrollo organizacional.',
      presentationTitle: 'Consultoría estratégica empresarial',
      presentation: [
        'A través de una alianza con el consultor Sergio Del Corso, unimos experiencia ejecutiva y visión estratégica para apoyar a las empresas en la identificación de oportunidades, la mejora de la gestión y el desarrollo de soluciones prácticas para sus negocios.',
        'El trabajo combina conocimiento en gestión empresarial, análisis de procesos y comprensión de los desafíos organizacionales, con foco en resultados consistentes.',
      ],
      focusTitle: 'Frentes de actuación',
      focus: [
        'Mejora de la gestión',
        'Optimización de procesos',
        'Desarrollo organizacional',
        'Soluciones prácticas, con foco en resultados',
      ],
      partner: {
        role: 'Consultor estratégico',
        name: 'Sergio Del Corso',
        highlight:
          'Más de 30 años de experiencia en gestión empresarial y desarrollo organizacional en Brasil y en Europa.',
        bio: [
          'Sergio Del Corso es consultor estratégico, graduado en Contaduría y especialista en Management. Con más de 30 años de experiencia en Brasil y en Europa, construyó una sólida trayectoria ejecutiva en gestión empresarial y desarrollo organizacional.',
          'Su trabajo se orienta a mejorar la gestión, optimizar procesos y construir soluciones prácticas para los desafíos de los negocios, siempre con foco en resultados.',
        ],
      },
      faqTitle: 'Preguntas sobre la consultoría',
      faq: [
        {
          q: '¿Qué tipo de empresa puede contratar la consultoría?',
          a: 'Empresas que desean mejorar su gestión, revisar procesos, identificar oportunidades de mejora y desarrollar soluciones para sus desafíos estratégicos y organizacionales.',
        },
        {
          q: '¿Cómo funciona el trabajo de consultoría?',
          a: 'El trabajo comienza con una conversación para comprender el contexto y los desafíos de la empresa. A partir de ese análisis, se identifican oportunidades y se estructura una propuesta de actuación adecuada a las necesidades del negocio.',
        },
        {
          q: '¿Quién conduce los proyectos de consultoría?',
          a: 'Los proyectos los conduce el consultor Sergio Del Corso, profesional con más de 30 años de experiencia en gestión empresarial y desarrollo organizacional, en alianza con Alex Cassimiro.',
        },
        {
          q: '¿La consultoría ofrece soluciones personalizadas?',
          a: 'Sí. Cada proyecto considera la realidad, los objetivos y las necesidades específicas de la empresa. Las soluciones se construyen según el contexto de cada negocio.',
        },
      ],
      final: {
        title: '¿Conversamos sobre los desafíos de su negocio?',
        text: 'Cuéntenos el contexto y los desafíos de su empresa. A partir de esa conversación, estructuramos una propuesta de actuación adecuada al negocio.',
      },
    },
    about: {
      h1: 'Conocimiento sobre el comportamiento humano, conectado con la vida real.',
      lead: 'Soy Alex Cassimiro. Educador, conferencista y comunicador. Traduzco el conocimiento científico en experiencias que conectan emociones, decisiones, aprendizaje y comportamiento con los desafíos de nuestro tiempo.',
      bio: [
        'Desde hace más de 17 años trabajo con desarrollo humano, aprendizaje y comportamiento en distintos contextos educativos y organizacionales. Mi trayectoria incluye mi labor como Instructor Corporativo en el SESI-SP, la fundación de la Escuela Asociativa Waldorf Aracê, en Indaiatuba, y experiencia con industrias, tecnología, servicios, educación y el tercer sector.',
        'Mi trabajo nace de una inquietud: comprender cómo las personas sienten, aprenden, toman decisiones y se relacionan frente a los desafíos de la vida contemporánea.',
        'Con formación en Administración y Neuropsicopedagogía, conecto conocimientos sobre aprendizaje, emociones y comportamiento con situaciones reales de la vida cotidiana.',
        'Mi labor es traducir conceptos complejos en experiencias de comunicación accesibles, sensibles y fundamentadas, acercando el conocimiento científico a la realidad de las personas.',
        'Actualmente, dedico especial atención a la relación entre salud financiera, comportamiento humano y salud mental, sin dejar de trabajar en el desarrollo de líderes y en las relaciones organizacionales.',
      ],
      honor:
        'En 2018, fui homenajeado por la Cámara Municipal de Indaiatuba con el título honorífico de Ciudadano Indaiatubano.',
      honorSource:
        'Fuente: acta de la sesión solemne del 7 de diciembre de 2018, página 2 (Cámara Municipal de Indaiatuba)',
      award: 'Título honorífico de Ciudadano Indaiatubano, Cámara Municipal de Indaiatuba (2018)',
      factsTitle: 'En cifras',
      facts: [
        { value: '+17 años', label: 'de experiencia en desarrollo de personas y liderazgo' },
        { value: '+1.000', label: 'líderes capacitados en programas de liderazgo' },
      ],
      approachTitle: 'Cómo trabajo',
      approach: [
        {
          title: 'Las personas en el centro',
          text: 'Desarrollo humano integrado a la estrategia del negocio.',
        },
        {
          title: 'Del conocimiento a la acción',
          text: 'Experiencias interactivas, vinculadas al día a día laboral.',
        },
        { title: 'Personalización real', text: 'Contenido ajustado a la realidad de cada organización.' },
      ],
      quote:
        'Creo que educar no es solo transmitir información. Es crear las condiciones para que las personas comprendan mejor su realidad, amplíen perspectivas y tomen decisiones más conscientes.',
      quoteSource: 'Alex Cassimiro (traducido del portugués)',
      final: {
        title: '¿Conversamos sobre lo que podemos construir juntos?',
        text: 'Envíe el briefing y reciba una propuesta según el alcance.',
      },
    },
    contact: {
      h1: 'Solicitar una propuesta',
      intro:
        'Puede iniciar la conversación aunque no tenga definidos la fecha, el tema o el tamaño del público. Cuéntenos el objetivo del evento y Alex ayuda a armar el resto.',
      directTitle: 'Hable directamente con Alex',
      directText:
        'Si prefiere conversar antes de completar el formulario, use WhatsApp o el correo electrónico.',
      nextTitle: 'Qué ocurre después',
      next: [
        {
          title: 'Lectura del briefing',
          text: 'Alex lee la solicitud y, si es necesario, pide detalles por el canal que usted indique.',
        },
        {
          title: 'Alineación',
          text: 'El objetivo, el público, el idioma de la conferencia y el formato se alinean en una conversación breve.',
        },
        { title: 'Propuesta', text: 'Usted recibe la propuesta según el alcance acordado.' },
      ],
    },
    privacy: {
      h1: 'Política de privacidad',
      updated: 'Última actualización: 9 de noviembre de 2026',
      intro:
        'Esta política explica qué datos recopila este sitio, por qué los recopila y cómo usted puede ejercer sus derechos, de acuerdo con la Ley General de Protección de Datos de Brasil (LGPD, Ley n.º 13.709/2018).',
      sections: [
        {
          title: 'Quién es el responsable',
          paragraphs: [
            'El controlador de los datos es Alex Cassimiro, a quien se puede contactar por correo electrónico en oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'Datos recopilados mediante el formulario',
          paragraphs: [
            'Al solicitar una propuesta, usted informa nombre, empresa, correo electrónico y objetivo del evento. De forma opcional, puede informar teléfono, tema, fecha o mes previsto, ciudad y país, formato, estimación de público e idioma de la conferencia.',
            'Junto con la solicitud, registramos datos técnicos no identificables sobre el origen de la visita (página, idioma del sitio y parámetros de campaña, como utm_source), para entender qué canales generan solicitudes.',
          ],
        },
        {
          title: 'Para qué usamos los datos',
          paragraphs: [
            'Los datos se usan exclusivamente para responder a su solicitud, preparar la propuesta y conducir la negociación. La base legal es la ejecución de procedimientos preliminares relacionados con un contrato, a pedido suyo (art. 7, V, de la LGPD).',
            'No vendemos datos ni los usamos para enviar comunicaciones no solicitadas.',
          ],
        },
        {
          title: 'Con quién se comparten los datos',
          paragraphs: [
            'El sitio está alojado en Cloudflare, que procesa las solicitudes y puede registrar datos técnicos, como la dirección IP, por motivos de seguridad y prevención de abusos.',
            'La solicitud se entrega al correo de Alex mediante un proveedor de envío de correos contratado para esa finalidad. Estos proveedores actúan como operadores y tratan los datos únicamente para prestar el servicio.',
          ],
        },
        {
          title: 'Por cuánto tiempo los conservamos',
          paragraphs: [
            'Las solicitudes se conservan durante el tiempo necesario para la negociación y, si hay contratación, durante el plazo exigido por obligaciones legales. Usted puede pedir su eliminación en cualquier momento.',
          ],
        },
        {
          title: 'Sus derechos',
          paragraphs: [
            'Usted puede solicitar la confirmación del tratamiento, el acceso, la corrección, la anonimización, la portabilidad o la eliminación de sus datos, además de información sobre su compartición, escribiendo a oalexcassimiro@gmail.com.',
          ],
        },
        {
          title: 'WhatsApp, correo electrónico y redes sociales',
          paragraphs: [
            'Al hacer clic en enlaces de WhatsApp, correo electrónico, Instagram o LinkedIn, usted pasa a usar servicios de terceros, sujetos a las políticas de privacidad de cada uno.',
          ],
        },
      ],
      analytics: {
        title: 'Cookies y medición de audiencia',
        paragraphs: [
          'Las herramientas de medición (Google Tag Manager y Google Analytics) solo se cargan después de que usted acepta en el aviso de cookies. Registran las páginas visitadas y los clics en los botones de contacto, sin datos escritos en el formulario.',
          'Usted puede rechazar la medición sin perjuicio para el uso del sitio.',
        ],
      },
    },
    notFound: {
      h1: 'Página no encontrada',
      text: 'La dirección puede haber cambiado o ser incorrecta. Estos caminos llevan a lo que la mayoría de las personas busca:',
      linksTitle: 'Páginas principales',
    },
  },
  meta: {
    home: {
      title: 'Alex Cassimiro · Conferencista corporativo en liderazgo',
      description:
        'Conferencias y experiencias sobre comportamiento humano, emociones y decisiones en el trabajo: inteligencia emocional, salud mental, liderazgo y cultura. En portugués e inglés. Solicite una propuesta.',
    },
    talks: {
      title: 'Conferencias corporativas sobre comportamiento humano | Alex Cassimiro',
      description:
        'Conferencias de Alex Cassimiro sobre comportamiento humano: inteligencia emocional, ética, salud mental, alcohol y drogas, cuidado activo y salud financiera. En portugués o inglés.',
    },
    ei: {
      title: 'Conferencia de inteligencia emocional para empresas | Alex Cassimiro',
      description:
        'Conferencia de inteligencia emocional para líderes y equipos: presión, conversaciones difíciles, retroalimentación y colaboración. En portugués o inglés.',
    },
    english: {
      title: 'Conferencista corporativo en inglés en Brasil | Alex Cassimiro',
      description:
        'Conferencias corporativas dictadas en inglés en Brasil para equipos multinacionales y eventos internacionales. Registro en São Paulo. Solicite una propuesta.',
    },
    leadership: {
      title: 'Programas de desarrollo de liderazgo | Alex Cassimiro',
      description:
        'Programas de Liderazgo: recorridos personalizados que conectan comportamiento humano, relaciones y visión de negocio, con encuentros, práctica y acompañamiento entre módulos.',
    },
    consulting: {
      title: 'Consultoría estratégica empresarial | Alex Cassimiro',
      description:
        'Consultoría estratégica para mejorar la gestión, optimizar procesos y fortalecer el desarrollo organizacional, conducida por Sergio Del Corso en alianza con Alex Cassimiro.',
    },
    about: {
      title: 'Acerca de Alex Cassimiro · Educador, conferencista y comunicador',
      description:
        'Alex Cassimiro es educador, conferencista y comunicador. Desde hace más de 17 años traduce conocimiento científico sobre emociones, aprendizaje y comportamiento en experiencias para empresas. Ciudadano Indaiatubano (2018).',
    },
    contact: {
      title: 'Solicitar una propuesta de conferencia | Alex Cassimiro',
      description:
        'Solicite una propuesta de conferencia, programa de liderazgo o consultoría. Comience aunque no tenga fecha o tema definidos. WhatsApp y correo disponibles.',
    },
    privacy: {
      title: 'Política de privacidad | Alex Cassimiro',
      description:
        'Cómo el sitio de Alex Cassimiro recopila, usa y protege los datos enviados en la solicitud de propuesta.',
    },
    notFound: {
      title: 'Página no encontrada | Alex Cassimiro',
      description: 'No se encontró la dirección. Vea las páginas principales del sitio de Alex Cassimiro.',
    },
  },
  breadcrumbHome: 'Inicio',
};
