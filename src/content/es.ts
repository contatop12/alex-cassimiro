import type { Dict } from './types.ts';

export const es: Dict = {
  langName: 'Español',
  skipLink: 'Saltar al contenido',
  identity: 'Alex Cassimiro · Conferencista corporativo',
  role: 'Conferencista corporativo y consultor en desarrollo de liderazgo, personas y cultura',
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
    proposal: 'Solicitar una propuesta',
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
      id: 'gambling',
      anchor: 'impactos-de-las-apuestas',
      title: 'Ludopatía',
      subtitle: 'La enfermedad provocada por las apuestas',
      summary:
        'Impactos de las apuestas en el comportamiento, la productividad y las relaciones, y cómo prevenirlos.',
      forWhom: 'Equipos y líderes de empresas atentas al crecimiento de las apuestas en línea.',
      whenToHire: 'Acciones de salud, educación financiera, SIPAT o campañas de prevención.',
      covers: [
        'Cómo las apuestas afectan el comportamiento y las relaciones',
        'Señales de alerta en el entorno laboral',
        'Caminos de prevención y de búsqueda de ayuda',
      ],
      note: 'Enfoque educativo y preventivo, sin carácter clínico.',
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
      what: 'Diagnóstico y diseño de soluciones en personas, liderazgo y cultura.',
      indicated: 'El desafío involucra varias áreas o aún no está claro qué formato lo resuelve.',
      format: 'Proyecto a la medida, con etapas definidas en el alcance.',
      depth: 'Diagnóstico, diseño, apoyo a la implementación y acompañamiento.',
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
      label: 'Conferencia de inteligencia emocional',
      place: 'Valinhos, SP',
      text: 'Conferencia sobre inteligencia emocional para el equipo de una empresa en Valinhos, en el interior del estado de São Paulo.',
      textNamed:
        'Conferencia sobre inteligencia emocional para el equipo de Voilier, en Valinhos, en el interior del estado de São Paulo.',
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
      caption: 'Conferencia de inteligencia emocional · Valinhos, SP',
      captionNamed: 'Conferencia de inteligencia emocional en Voilier · Valinhos, SP',
    },
    valinhosPortrait: {
      alt: 'Alex Cassimiro sentado y sonriendo, en un ambiente con plantas',
      caption: 'Alex Cassimiro el día de la conferencia en Valinhos, SP',
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
      gambling: 'Impactos de las apuestas',
      'leadership-program': 'Programa de liderazgo',
      consulting: 'Consultoría',
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
      h1: 'Conferencias corporativas sobre inteligencia emocional y liderazgo',
      support:
        'Para líderes y equipos que buscan manejar la presión, afrontar conversaciones difíciles y colaborar mejor. Conferencias disponibles en portugués e inglés.',
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
        intro:
          'Registros de conferencias de inteligencia emocional dictadas en empresas del estado de São Paulo.',
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
          q: '¿En qué idiomas dicta conferencias Alex?',
          a: 'En portugués y en inglés. Las conferencias no se dictan en español. El idioma del evento se define con la empresa en la propuesta, de forma independiente del idioma en que usted lee este sitio.',
        },
        {
          q: '¿Las conferencias son presenciales o en línea?',
          a: 'Ambas opciones están disponibles. El formato se acuerda en el briefing, según el evento, el público y la agenda.',
        },
        {
          q: '¿La conferencia puede personalizarse para mi empresa?',
          a: 'Sí. Antes de la propuesta, Alex alinea objetivo, público, idioma y formato. Los ejemplos, las actividades y los énfasis se ajustan a la realidad de la organización.',
        },
        {
          q: '¿Qué información debo enviar para recibir una propuesta?',
          a: 'El nombre de la empresa y el objetivo del evento son el punto de partida. Si ya los tiene, incluya tema, fecha o mes previsto, ciudad, formato, estimación de público e idioma. Se puede comenzar sin fecha, tema o tamaño de público definidos.',
        },
        {
          q: '¿Cuál es la duración de la conferencia?',
          a: 'La duración se define en el briefing, según el formato y la programación del evento.',
        },
        {
          q: '¿Alex atiende a empresas fuera de São Paulo?',
          a: 'Alex ya ha dictado conferencias en São Paulo y en Valinhos (SP). Los eventos presenciales en otras ciudades y los eventos en línea se evalúan en la propuesta, según la agenda y el desplazamiento.',
        },
      ],
      final: {
        title: '¿Conversamos sobre su evento?',
        text: 'Envíe el briefing que tenga. La fecha, el tema y el tamaño del público pueden definirse en conjunto.',
      },
    },
    talks: {
      h1: 'Conferencias corporativas para líderes y equipos',
      intro:
        'Alex Cassimiro es conferencista corporativo y dicta conferencias en portugués e inglés sobre inteligencia emocional, ética, salud mental, prevención y cultura del cuidado. Cada tema parte de situaciones reales de trabajo y se ajusta al público y al objetivo del evento.',
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
          a: 'El liderazgo es un eje presente en todos los temas. Para un trabajo centrado en desarrollar líderes, lo recomendable es un programa de liderazgo, diseñado según los desafíos de la empresa.',
        },
        {
          q: '¿Es posible combinar dos temas en la misma conferencia?',
          a: 'Las combinaciones pueden evaluarse en el briefing, según el objetivo, el público y el tiempo disponible.',
        },
        {
          q: '¿Las conferencias sobre salud mental, alcohol y apuestas tienen carácter clínico?',
          a: 'No. Estos temas tienen un enfoque educativo y preventivo, y no sustituyen el acompañamiento profesional de salud.',
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
        'La conferencia de inteligencia emocional ya se dictó en inglés en São Paulo y en portugués en Valinhos (SP).',
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
      h1: 'Programas de desarrollo de liderazgo',
      intro:
        'Desarrollo continuo para líderes, con encuentros, práctica y acompañamiento. Para empresas que necesitan un cambio de comportamiento a lo largo del tiempo, y no solo un evento.',
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
          a: 'No. El recorrido anual es un ejemplo. La cantidad y el orden de los módulos se definen con la empresa.',
        },
        {
          q: '¿El programa puede conducirse en inglés?',
          a: 'El idioma se alinea en la propuesta. Las conferencias de Alex se dictan en portugués y en inglés.',
        },
      ],
      final: {
        title: '¿Diseñamos el programa para sus líderes?',
        text: 'Cuéntenos cuántos líderes participarían y qué desafíos quiere trabajar la empresa.',
      },
    },
    consulting: {
      h1: 'Consultoría en liderazgo, personas y cultura',
      intro:
        'Para cuando el desafío es mayor que un evento: diagnóstico, diseño de la solución, apoyo a la implementación y acompañamiento, conectando el desarrollo humano con la estrategia del negocio.',
      whenTitle: 'Cuándo se recomienda la consultoría',
      when: [
        'El desafío involucra más de un área o nivel jerárquico.',
        'La empresa quiere entender la causa antes de elegir un formato.',
        'Es necesario combinar conferencias, programas y otras acciones en un mismo proyecto.',
        'La cultura está cambiando y los líderes necesitan apoyo para sostener el cambio.',
      ],
      processTitle: 'Cómo funciona',
      process: [
        {
          title: 'Conexión y briefing',
          text: 'Entender el contexto, los desafíos y los objetivos de la organización.',
        },
        {
          title: 'Diagnóstico personalizado',
          text: 'Mapear personas, procesos y cultura para identificar necesidades reales.',
        },
        {
          title: 'Diseño de la solución',
          text: 'Propuesta con contenido, metodología y formato alineados con el negocio.',
        },
        {
          title: 'Implementación',
          text: 'Conducción de las actividades con interacción, práctica y conexión con la realidad de la empresa.',
        },
        {
          title: 'Acompañamiento',
          text: 'Apoyo continuo con indicadores y retroalimentación para sostener la aplicación en el día a día.',
        },
      ],
      scopeTitle: 'Qué puede formar parte del alcance',
      scope: [
        'Diagnóstico y diseño de soluciones a la medida',
        'Proyectos de cultura, liderazgo y personas',
        'Apoyo a la implementación',
        'Conexión entre el desarrollo humano y la estrategia del negocio',
      ],
      faqTitle: 'Preguntas sobre la consultoría',
      faq: [
        {
          q: '¿Cómo comienza un proyecto de consultoría?',
          a: 'Con una conversación de briefing sobre el contexto y los objetivos. A partir de ella, Alex propone el alcance del diagnóstico y de las etapas siguientes.',
        },
        {
          q: '¿La consultoría incluye conferencias y programas?',
          a: 'Puede incluirlos, cuando tenga sentido para el objetivo. La combinación de acciones se define en el diseño de la solución.',
        },
      ],
      final: {
        title: 'Cuéntenos el desafío de su empresa',
        text: 'Una primera conversación ayuda a entender si el camino es una conferencia, un programa o una consultoría.',
      },
    },
    about: {
      h1: 'Acerca de Alex Cassimiro',
      lead: 'Conferencista corporativo y consultor en desarrollo de liderazgo, personas y cultura.',
      bio: [
        'Alex Cassimiro trabaja desde hace más de 17 años en el desarrollo de personas y líderes, en distintos sectores y contextos organizacionales. Su enfoque combina contenido, experiencia práctica y metodologías aplicables para traducir desafíos humanos y organizacionales en desarrollo con relevancia para el negocio.',
        'Graduado en Administración con énfasis en Comercio Exterior y con posgrado en Neuropsicopedagogía, Alex une conocimientos sobre aprendizaje, inteligencia emocional y práctica corporativa. Su trayectoria incluye su actuación en el SESI, la fundación de la Escola Associativa Waldorf Aracê, en Indaiatuba, y experiencia con industrias, tecnología, servicios, educación y tercer sector.',
        'Hoy, Alex trabaja con empresas en tres frentes: conferencias corporativas, en portugués e inglés; programas de desarrollo de liderazgo; y consultoría en personas, liderazgo y cultura.',
      ],
      honor:
        'En 2018, Alex Cassimiro recibió de la Cámara Municipal de Indaiatuba el título honorífico de Ciudadano Indaiatubano.',
      honorSource:
        'Fuente: acta de la sesión solemne del 7 de diciembre de 2018, página 2 (Cámara Municipal de Indaiatuba)',
      factsTitle: 'En cifras',
      facts: [
        { value: '+17 años', label: 'de experiencia en desarrollo de personas y liderazgo' },
        { value: '+1.000', label: 'líderes capacitados en programas de liderazgo' },
        { value: 'PT · EN', label: 'idiomas de las conferencias' },
      ],
      approachTitle: 'Cómo trabaja Alex',
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
        'Creo en el poder de las personas y de las organizaciones que aprenden, se conectan y evolucionan juntas. Transformo el conocimiento en acción y el desarrollo en resultados reales.',
      quoteSource: 'Alex Cassimiro (traducido del portugués)',
      final: {
        title: '¿Quiere invitar a Alex a su evento?',
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
        'Conferencista corporativo: conferencias de inteligencia emocional y liderazgo en portugués e inglés para líderes y equipos. Solicite una propuesta.',
    },
    talks: {
      title: 'Conferencias corporativas · Temas para empresas | Alex Cassimiro',
      description:
        'Temas de conferencias corporativas de Alex Cassimiro: inteligencia emocional, ética, salud mental, alcohol y drogas, cuidado activo y apuestas. En portugués e inglés.',
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
        'Programas de liderazgo con encuentros, práctica y acompañamiento. Vea la diferencia entre conferencia y programa y un ejemplo de recorrido anual adaptable.',
    },
    consulting: {
      title: 'Consultoría en liderazgo, personas y cultura | Alex Cassimiro',
      description:
        'Consultoría en desarrollo de liderazgo, personas y cultura: diagnóstico, diseño de la solución, implementación y acompañamiento.',
    },
    about: {
      title: 'Acerca de Alex Cassimiro · Biografía del conferencista',
      description:
        'Biografía de Alex Cassimiro: más de 17 años en desarrollo de personas y líderes, conferencias en portugués e inglés y título de Ciudadano Indaiatubano (2018).',
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
