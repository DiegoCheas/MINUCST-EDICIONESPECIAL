export const COLORS = {
  primary: '#C62828',
  secondary: '#FFFFFF', 
  accent: '#F9A825',
  dark: '#333333',
  light: '#F5F5F5'
};

export const COMMITTEES = [
  {
    id: '1',
    name: 'Pontificium Consilium: Sacro Colegio Cardenalicio',
    description: 'Sacro Colegio Cardenalicio',
    topics: ['Reforma de la Iglesia Católica', 'Diálogo Interreligioso', 'Justicia Social'],
    language: 'Español',
    delegates: 20,
    mode: 'Educación Secundaria (4to A 6to) - Individual'
  },
  {
    id: '2',
    name: 'Comisión Internacional de Monjas',
    description: 'Congregación de Hermanas Religiosas',
    topics: ['Educación Católica', 'Asistencia Social', 'Derechos de la Mujer en la Iglesia'],
    language: 'Español',
    delegates: 20,
    mode: 'Educación Secundaria (3to A 6to) - Individual'
  },
  {
    id: '3',
    name: 'Consejo de Seguridad',
    description: 'Consejo de Seguridad de las Naciones Unidas',
    topics: ['Conflictos en el Medio Oriente', 'Proliferación Nuclear', 'Terrorismo Internacional'],
    language: 'Español',
    delegates: 15,
    mode: 'Educación Secundaria (3ro A 6to) – Individual'
  },
  {
    id: '4',
    name: 'Security Council',
    description: 'United Nations Security Council',
    topics: ['Middle East Conflicts', 'Nuclear Proliferation', 'International Terrorism'],
    language: 'Inglés',
    delegates: 15,
    mode: 'Educación Secundaria (3ro A 6to) – Individual'
  },
  {
    id: '5',
    name: 'Comité de Prensa',
    description: 'Comité de Prensa y Comunicaciones',
    topics: ['Cobertura del Evento', 'Periodismo Digital', 'Comunicación Estratégica'],
    language: 'Español/Inglés',
    delegates: 12,
    mode: 'Educación Secundaria (3ro A 6to) – En Pareja'
  },
  {
    id: '6',
    name: 'INTERPOL',
    description: 'Organización Internacional de Policía Criminal',
    topics: ['Crimen Organizado Transnacional', 'Ciberseguridad', 'Tráfico de Personas'],
    language: 'Español',
    delegates: 30,
    mode: 'Educación Secundaria (4to A 6to) - Individual'
  },
  {
    id: '7',
    name: 'Asamblea General Plenaria',
    description: 'Corazón del diálogo multilateral y la cooperación global',
    topics: ['Negociación', 'Resoluciones de la ONU', 'Diplomacia en Crisis'],
    language: 'Español',
    delegates: 25,
    mode: 'Educación Secundaria (1ro A 2do) – En Pareja'
  },
  {
    id: '8',
    name: 'UNICEF',
    description: 'Fondo de las Naciones Unidas para la Infancia',
    topics: ['Derechos del Niño', 'Educación Global', 'Nutrición Infantil'],
    language: 'Español',
    delegates: 30,
    mode: 'Educación Primaria (5to A 6to) – En Pareja'
  },
  {
    id: '9',
    name: 'Senado de la República Dominicana',
    description: 'Senado de la República Dominicana',
    topics: ['Reforma Constitucional', 'Políticas Públicas', 'Legislación Nacional'],
    language: 'Español',
    delegates: 31,
    mode: 'Educación Secundaria (3to A 6to) - Individual'
  },
  {
    id: '10',
    name: 'TC-RD',
    description: 'Tribunal Constitucional de República Dominicana',
    topics: ['Constitucionalidad de Leyes', 'Derechos Fundamentales', 'Amparo Constitucional'],
    language: 'Español',
    delegates: 12,
    mode: 'Educación Secundaria (4to A 6to) - Individual'
  },
  {
    id: '11',
    name: 'Foro Económico Mundial',
    description: 'World Economic Forum',
    topics: ['Desarrollo Sostenible', 'Innovación Tecnológica', 'Cooperación Económica Global'],
    language: 'Español',
    delegates: 32,
    mode: 'Educación Secundaria (2do A 4to) – Individual'
  },
  {
    id: '12',
    name: 'ACNUDH',
    description: 'Alto Comisionado de las Naciones Unidas para los Derechos Humanos',
    topics: ['Protección de Derechos Humanos', 'Justicia Transicional', 'Migración y Refugiados'],
    language: 'Español',
    delegates: 30,
    mode: 'Educación Secundaria (1ro A 2do) – Individual'
  }
];

export const NEWS_ITEMS = [
  {
    id: '1',
    title: 'Abierto el proceso de inscripciones para MINUCST 2026',
    summary: 'Ya está disponible el formulario oficial de inscripción para participar en nuestra edición especial.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Inscripciones'
  },
  {
    id: '2',
    title: 'Doce comités confirmados para la edición 2026',
    summary: 'Conoce los doce comités que estarán activos durante el evento y sus respectivos temas de debate.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Comités'
  },
  {
    id: '3',
    title: 'Becas disponibles para delegados internacionales',
    summary: 'Programa especial de becas para estudiantes de América Latina y el Caribe.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Becas'
  }
];

export const FAQS = [
  {
    id: '1',
    question: '¿Cuáles son las fechas del evento?',
    answer: 'MINUCST 2026 se realizará del 20 al 22 de marzo de 2026 en las instalaciones del Colegio Santa Teresa.',
    category: 'General'
  },
  {
    id: '2',
    question: '¿Cómo puedo inscribirme?',
    answer: 'Puedes inscribirte a través del formulario oficial en esta página web. Hay dos modalidades: delegados individuales y delegaciones en parejas.',
    category: 'Inscripción'
  },
  {
    id: '3',
    question: '¿Cuál es el costo de inscripción?',
    answer: 'El costo de inscripción es de RD$3,900 para todas las modalidades de participación.',
    category: 'Inscripción'
  },
  {
    id: '4',
    question: '¿Hay alojamiento disponible?',
    answer: 'Proporcionamos información sobre hoteles cercanos en Santo Domingo Este y recomendaciones de transporte.',
    category: 'Logística'
  },
  {
    id: '5',
    question: '¿Dónde se realizará el evento?',
    answer: 'El evento se realizará en el Colegio Santa Teresa, ubicado en la Calle Jesús de Galíndez, Santo Domingo Este, República Dominicana.',
    category: 'Logística'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'María González',
    country: 'México',
    quote: 'MINUCST transformó mi perspectiva sobre la diplomacia internacional. Fue una experiencia única que me preparó para mi carrera en relaciones internacionales.',
    year: '2024',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Carlos Mendez',
    country: 'Colombia',
    quote: 'La calidad académica y el nivel de debate en MINUCST es excepcional. Cada sesión es una oportunidad de crecimiento personal y profesional.',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Ana Rodríguez',
    country: 'Argentina',
    quote: 'MINUCST no solo es un modelo de Naciones Unidas, es una plataforma para formar líderes comprometidos con la paz mundial.',
    year: '2023',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];