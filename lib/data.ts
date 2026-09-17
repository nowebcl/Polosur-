export interface ServiceItem {
  slug: string;
  title: string;
  tag: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  specs: { label: string; value: string }[];
  methodology: string[];
  deliverables: string[];
  normative: string;
  software: string[];
  image?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  tag: string;
  client: string;
  location: string;
  year: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  resolution: string;
  methodology: string[];
  deliverables: string[];
  image?: string;
}

export const servicesData: Record<string, ServiceItem> = {
  imiv: {
    slug: 'imiv',
    title: 'Transporte – IMIV Básico e Intermedio',
    tag: 'LEY 20.958 / D.S. N° 30 MTT / SISTEMA SEIM',
    category: 'Ingeniería de Tránsito',
    shortDesc: 'Elaboramos y tramitamos IMIV Básico e IMIV Intermedio para proyectos inmobiliarios, comerciales, industriales y de infraestructura en todo Chile.',
    longDesc: 'En Polosur Ingeniería elaboramos y tramitamos Informes de Mitigación de Impacto Vial (IMIV) en categorías Básico e Intermedio en todo el país. Identificamos desde el inicio las medidas de mitigación que serán exigibles para incorporarlas a tiempo en el diseño y en el presupuesto antes de tramitar en el SEIM, evitando sorpresas, observaciones innecesarias y sobrecostos.',
    specs: [
      { label: 'IMIV Básico', value: 'Medidas de mitigación obligatorias (accesos, veredas, estacionamientos, visibilidad) y expediente SEIM' },
      { label: 'IMIV Intermedio', value: 'Mediciones, caracterización actual, modelación de tránsito y mitigaciones obligatorias y adicionales' },
      { label: 'Modelación Certificada', value: 'Certificación oficial en TRANSYT 17 y herramientas actualizadas' },
      { label: 'Tasa de Aprobación', value: '97% de aprobación en más de 100 proyectos desarrollados' },
    ],
    methodology: [
      'Identificación temprana de medidas exigibles para incorporarlas al presupuesto y diseño del proyecto.',
      'Levantamiento de información, caracterización de situación actual y mediciones de flujo.',
      'Modelación de tránsito con TRANSYT 17 y metodologías reconocidas por la autoridad.',
      'Definición de medidas de mitigación obligatorias y adicionales, costo-eficientes y proporcionales.',
      'Ingreso, tramitación y acompañamiento técnico continuo en la plataforma SEIM hasta la resolución final.',
    ],
    deliverables: [
      'Expediente completo IMIV Básico o Intermedio para ingreso a plataforma SEIM',
      'Memoria de cálculo y archivos de modelación de tránsito (TRANSYT 17)',
      'Planimetría detallada de medidas de mitigación y accesos',
      'Resolución de Aprobación Final de la SEREMI de Transportes / D.O.M.',
    ],
    normative: 'D.S. N° 30 MTT/MINVU, Ley N° 20.958 de Aportes al Espacio Público y plataforma SEIM.',
    software: ['TRANSYT 17', 'Synchro / SimTraffic', 'AutoCAD Civil 3D', 'Plataforma SEIM MTT'],
  },
  ambiental: {
    slug: 'ambiental',
    title: 'Medioambiente – Informes Viales',
    tag: 'SISTEMA SEIA & EVALUACIÓN AMBIENTAL',
    category: 'Medio Ambiente',
    shortDesc: 'Elaboramos Informes Viales requeridos en el marco de Declaraciones de Impacto Ambiental (DIA) y procedimientos ambientales.',
    longDesc: 'Elaboramos Informes Viales requeridos en el marco de Declaraciones de Impacto Ambiental (DIA) y otros procedimientos ambientales. Entregamos antecedentes técnicos sólidos sobre el sistema de movilidad local, compatibles con las exigencias del SEIM y de la normativa ambiental vigente.',
    specs: [
      { label: 'Alcance', value: 'Informes Viales para Declaraciones de Impacto Ambiental (DIA)' },
      { label: 'Compatibilidad', value: 'Compatibles con las exigencias del SEIM y normativa ambiental' },
      { label: 'Cobertura', value: 'Proyectos en todo Chile' },
    ],
    methodology: [
      'Levantamiento de antecedentes técnicos del sistema de movilidad local y rutas de acceso.',
      'Caracterización de flujos y evaluación de impactos viales en el área de influencia del proyecto.',
      'Elaboración de medidas de mitigación y planes viales compatibles con el SEIM y la autoridad ambiental.',
    ],
    deliverables: [
      'Informe Vial para expediente de Declaración de Impacto Ambiental (DIA)',
      'Antecedentes técnicos del sistema de movilidad local compatibles con SEIM',
      'Planimetría y respuestas a observaciones de servicios evaluadores',
    ],
    normative: 'Ley N° 19.300 sobre Bases Generales del Medio Ambiente, D.S. N° 40 RSEIA y D.S. N° 30 MTT.',
    software: ['AutoCAD Civil 3D', 'TRANSYT 17', 'ArcGIS / QGIS'],
  },
};

export const projectsData: Record<string, ProjectItem> = {
  'las-condes': {
    slug: 'las-condes',
    title: 'Proyecto Inmobiliario Las Condes - IMIV Mayor',
    tag: 'ESTUDIO DE IMPACTO VIAL / SEIM',
    client: 'Inmobiliaria Los Andes SpA',
    location: 'Av. Las Condes, Santiago, RM',
    year: '2024 - 2025',
    category: 'Residencial / IMIV Mayor',
    shortDesc: 'Evaluación y mitigación de impacto vial para conjunto residencial de 3 torres de alta densidad (720 departamentos).',
    longDesc: 'Estudio de impacto vial para megaproyecto residencial compuesto por 3 torres habitacionales (720 departamentos y 850 estacionamientos). Se modeló el nudo vial de Av. Las Condes con accesos laterales en software VISSIM 24.0, optimizando los tiempos de despeje y evitando congestión en el eje estructurante.',
    challenge: 'Alta saturación vehicular en el eje estructurante en hora punta de la mañana (4.200 veh/h) y necesidad de garantizar accesos seguros sin reducir la capacidad de la vía principal.',
    solution: 'Reconfiguración semafórica sintonizada con la UOCT, incorporación de bahía de parada segregada para transporte público y diseño de ciclovía de alto estándar conectada a la red comunal.',
    metrics: [
      { label: 'Carga Punta Mañana', value: '4.200 veh/h' },
      { label: 'Demora Promedio Mitigada', value: 'Reducción de 38s a 14s por vehículo' },
      { label: 'Estacionamientos', value: '850 unidades evaluadas' },
      { label: 'Nivel de Servicio (LOS)', value: 'Mejora de Nivel D a Nivel B' },
    ],
    resolution: 'Resolución Exenta Aprobatoria N° 8412 - SEREMI de Transportes RM / Plataforma SEIM.',
    methodology: [
      'Conteo clasificado de 12 horas continuas con cámaras de alta resolución e inteligencia artificial.',
      'Calibración microscópica de la red en VISSIM con matrices de origen y destino.',
      'Diseño de sintonía semafórica conectada a la Unidad Operativa de Control de Tránsito (UOCT).',
      'Incorporación de bahía de parada para transporte público y ciclovía segregada.',
    ],
    deliverables: [
      'Expediente completo IMIV Mayor aprobado en plataforma SEIM',
      'Planos de Proyecto de Pavimentación, Señalización y Demarcación SERVIU',
      'Simulación en video 3D de operación en hora punta',
    ],
  },
  'temuco': {
    slug: 'temuco',
    title: 'Plan de Movilidad Urbana & Red Cicloviaria Temuco',
    tag: 'PLANIFICACIÓN URBANA SOSTENIBLE',
    client: 'Municipalidad de Temuco & SECTRA',
    location: 'Comuna de Temuco, Región de la Araucanía',
    year: '2024',
    category: 'Movilidad Urbana / Ciclovías',
    shortDesc: 'Diagnóstico territorial, modelación de rotondas principales y diseño de 14.5 km de ciclovías de alto estándar.',
    longDesc: 'Plan maestro de movilidad urbana y red de ciclorrutas de alto estándar para el sector céntrico y pericentral de Temuco. El proyecto integró la reconfiguración de rotondas principales, priorización del transporte público mayor y diseño de 14.5 km de ciclovías de alto estándar.',
    challenge: 'Falta de infraestructura cicloinclusiva conectada y altos niveles de congestión en las rotondas de acceso norte y poniente de la ciudad.',
    solution: 'Rediseño geométrico de rotondas holandesas con prioridad ciclista, sincronización de ejes de transporte público y segregación física de ciclovías.',
    metrics: [
      { label: 'Extensión de Red', value: '14.5 kilómetros' },
      { label: 'Capacidad Intersecciones', value: '+28% de flujo efectivo' },
      { label: 'Población Beneficiada', value: '280.000 habitantes' },
      { label: 'Emisiones Evitadas', value: '-18% CO2 proyectado' },
    ],
    resolution: 'Aprobación Técnica Favorable SECTRA Sur / SEREMI MTT Araucanía.',
    methodology: [
      'Análisis macroscópico de viajes y partición modal con SIG (ArcGIS/QGIS).',
      'Modelación de capacidad de rotondas y accesos mediante SIDRA INTERSECTION.',
      'Talleres de participación ciudadana y validación con gremios de transporte.',
    ],
    deliverables: [
      'Plan Maestro de Movilidad Urbana Comunal',
      'Planimetría detallada a escala 1:500 de perfiles viales y calzadas',
      'Manual de Operación y Priorización Semafórica para buses',
    ],
  },
  'san-bernardo': {
    slug: 'san-bernardo',
    title: 'DIA & RCA Centro Logístico Industrial San Bernardo',
    tag: 'EVALUACIÓN AMBIENTAL SEIA',
    client: 'Inversiones Logísticas del Sur SpA',
    location: 'San Bernardo, Santiago RM',
    year: '2025',
    category: 'Industrial / Logística / DIA',
    shortDesc: 'Capítulo de Transporte, vialidad y emisiones atmosféricas para centro de 55.000 m² con 36 andenes de carga.',
    longDesc: 'Elaboración del capítulo de transporte, vialidad y emisiones atmosféricas para centro logístico e industrial de 55.000 m² con 36 andenes de carga. Se realizó el análisis de radio de giro para camiones de gran tonelaje (WB-20) y el plan de rutas de faena para mitigar el impacto en la Autopista Central.',
    challenge: 'Alta frecuencia de camiones con acoplado tipo WB-20 ingresando a autopista con riesgo de colas en el ramal de salida.',
    solution: 'Diseño de pista de aceleración de 180 metros, análisis de radios de giro computacionales con AutoTURN y plan de mitigación acústica.',
    metrics: [
      { label: 'Superficie Construida', value: '55.000 m²' },
      { label: 'Flujo Pesado', value: '120 camiones/día en hora punta' },
      { label: 'Andenes de Carga', value: '36 posiciones activas' },
      { label: 'Calificación Ambiental', value: 'RCA Favorable N° 412/2025' },
    ],
    resolution: 'Resolución de Calificación Ambiental (RCA) Favorable N° 412/2025 del SEA RM.',
    methodology: [
      'Simulación de barrido de giro vehicular (Swept Path Analysis) para camiones WB-20 y trenes de carretera.',
      'Modelación de emisiones de material particulado y plan de humectación de caminos.',
      'Diseño de pista de desaceleración y aceleración sobre calzada nacional.',
    ],
    deliverables: [
      'Capítulo de Transporte y Flujos Viales para expediente SEIA',
      'Plan de Manejo de Tránsito de Faenas Constructivas (PMT)',
      'Resolución de Calificación Ambiental (RCA) Favorable del SEA',
    ],
  },
};
