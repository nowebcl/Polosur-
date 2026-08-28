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
    title: 'IMIV - Informe de Mitigación de Impacto Vial',
    tag: 'LEY 20.958 / SISTEMA SEIM MTT',
    category: 'Ingeniería de Tránsito',
    shortDesc: 'Evaluamos el impacto de proyectos inmobiliarios, comerciales e industriales proponiendo medidas de mitigación eficientes según D.S. N° 30.',
    longDesc: 'Elaboramos expedientes técnicos completos para las categorías Básica, Intermedia y Mayor. Analizamos la interacción del proyecto con la red vial circundante mediante modelaciones de capacidad, demoras y niveles de servicio (LOS) para obtener la aprobación formal ante la SEREMI de Transportes y Telecomunicaciones.',
    specs: [
      { label: 'Categorías SEIM', value: 'Básico (< 250 veh/h), Intermedio (250-800) y Mayor (> 800)' },
      { label: 'Plazo Estimado', value: '3 a 6 semanas según envergadura' },
      { label: 'Plataforma Oficial', value: 'SEIM (Ministerio de Transportes y Telecomunicaciones)' },
      { label: 'Tasa de Éxito', value: '98% de aprobación en primera revisión' },
    ],
    methodology: [
      'Levantamiento en terreno de flujos vehiculares, peatonales y ciclos en horas punta mañana y tarde.',
      'Definición y justificación técnica del Área de Influencia (AI) según D.S. N° 30.',
      'Modelación de capacidad de intersecciones y niveles de servicio (LOS) sin y con proyecto.',
      'Diseño y dimensionamiento de medidas de mitigación vial óptimas y costo-eficientes.',
      'Ingreso, tramitación y seguimiento en la plataforma SEIM hasta la obtención de la resolución aprobatoria.',
    ],
    deliverables: [
      'Memoria Técnica Explicativa del Estudio de Impacto Vial',
      'Planos de Señalización, Demarcación y Obras de Mitigación en formato CAD/PDF',
      'Archivos nativos de modelación (VISSIM, Synchro o SIDRA)',
      'Resolución de Aprobación de la SEREMI de Transportes',
    ],
    normative: 'Ley N° 20.958 sobre Aportes al Espacio Público, D.S. N° 30 MTT y Manual REDEVU.',
    software: ['PTV VISSIM 2024', 'Synchro 11', 'SIDRA Intersection', 'AutoCAD Civil 3D'],
  },
  movilidad: {
    slug: 'movilidad',
    title: 'Estudios de Movilidad Urbana & Transporte',
    tag: 'PLANIFICACIÓN MULTIMODAL',
    category: 'Planificación Urbana',
    shortDesc: 'Analizamos y diseñamos estrategias de movilidad sustentable, redes de transporte público y ciclofacilidades para ciudades y campus.',
    longDesc: 'Diseño integral de sistemas de movilidad urbana y planes maestros de transporte. Analizamos patrones de origen-destino, demanda de transporte público, integración de ciclovías de alto estándar y accesibilidad universal para desarrollos urbanos sustentables.',
    specs: [
      { label: 'Enfoque', value: 'Multimodal (Peatón, Ciclos, TP, Auto)' },
      { label: 'Herramientas GIS', value: 'ArcGIS / QGIS / Modelos O-D' },
      { label: 'Ámbito', value: 'Planes Maestros, Campus Universitarios, Loteos' },
      { label: 'Estándar', value: 'Ciudades Inteligentes y Sustentables' },
    ],
    methodology: [
      'Diagnóstico territorial de conectividad y accesibilidad peatonal y vehicular.',
      'Encuestas de preferencias declaradas y caracterización de modos de viaje.',
      'Proyección de demanda futura y modelación de redes multimodales.',
      'Propuesta de trazados de ciclofacilidades y pacificación de tránsito.',
    ],
    deliverables: [
      'Plan Maestro de Movilidad Urbana y Accesibilidad Sustentable',
      'Planimetría detallada de perfiles viales y ciclovías integradas',
      'Informe de Indicadores de Conectividad y Reducción de Emisiones',
    ],
    normative: 'Manual de Vialidad Cicloinclusiva Minvu, REDEVU y Ley de Convivencia Vial.',
    software: ['ArcGIS Pro', 'QGIS', 'TransCAD', 'AutoCAD Civil 3D'],
  },
  modelacion: {
    slug: 'modelacion',
    title: 'Modelación y Simulación de Tránsito (VISSIM 3D)',
    tag: 'SIMULACIÓN MICROSCÓPICA',
    category: 'Modelación Computacional',
    shortDesc: 'Simulamos escenarios complejos para una toma de decisiones informada, optimizando tiempos de semaforización y nudos críticos.',
    longDesc: 'Simulación dinámica y microscópica de tránsito vehicular y peatonal para evaluar el comportamiento en tiempo real de nudos críticos, rotondas, autopistas urbanas y accesos a grandes centros comerciales.',
    specs: [
      { label: 'Software Principal', value: 'PTV VISSIM 2024, Synchro 11, SIDRA 9' },
      { label: 'Métricas Obtenidas', value: 'Demoras (s/veh), Longitud de Colas, Nivel de Servicio (LOS)' },
      { label: 'Visualización', value: 'Videos 3D fotorrealistas de simulación para presentaciones' },
    ],
    methodology: [
      'Configuración de la red vial con geometría real y radios de giro.',
      'Calibración de parámetros psicofísicos de conductores según condiciones locales chilenas.',
      'Simulación de múltiples corridas con semillas aleatorias para resultados estadísticamente válidos.',
    ],
    deliverables: [
      'Informe comparativo de demoras y colas en escenarios Base vs Con Proyecto',
      'Archivos de simulación VISSIM (.inpx) y Synchro (.syn)',
      'Renderizado de video 3D en alta definición',
    ],
    normative: 'Metodología oficial de modelación MTT y HCM 6th Edition.',
    software: ['PTV VISSIM 2024', 'PTV Viswalk', 'Synchro 11', 'SimTraffic'],
  },
  ambiental: {
    slug: 'ambiental',
    title: 'Evaluación Ambiental (Capítulos de Vialidad DIA/EIA)',
    tag: 'SISTEMA SEIA & PERMISOS SECTORIALES',
    category: 'Medio Ambiente',
    shortDesc: 'Estudios de impacto ambiental, modelación de emisiones y asesoría en obtención de RCA y permisos sectoriales ante el SEA.',
    longDesc: 'Elaboración de capítulos de vialidad, transporte, ruido, vibraciones y emisiones atmosféricas para Declaraciones de Impacto Ambiental (DIA) y Estudios de Impacto Ambiental (EIA) ante el Servicio de Evaluación Ambiental (SEA).',
    specs: [
      { label: 'Alcance', value: 'Línea de Base y Modelación de Emisiones' },
      { label: 'Permisos', value: 'PAS 156, PAS 160 y sectoriales viales MOP/SERVIU' },
      { label: 'Estatus', value: '100% de RCA favorables obtenidas' },
    ],
    methodology: [
      'Levantamiento de línea de base de flujos vehiculares y rutas de transporte de carga.',
      'Estimación de emisiones de material particulado (MP10, MP2.5) y gases de combustión.',
      'Diseño de planes de manejo de rutas y compromisos ambientales voluntarios.',
    ],
    deliverables: [
      'Capítulo de Transporte y Vialidad para expediente DIA/EIA',
      'Plan de Manejo de Rutas y Compromisos Ambientales',
      'Resolución de Calificación Ambiental (RCA) Favorable',
    ],
    normative: 'Ley N° 19.300 sobre Bases Generales del Medio Ambiente y D.S. N° 40 RSEIA.',
    software: ['CALINE4', 'AERMOD', 'ArcGIS Pro'],
  },
  normativa: {
    slug: 'normativa',
    title: 'Asesoría Normativa y Gestión Sectorial',
    tag: 'CUMPLIMIENTO LEGAL & D.O.M.',
    category: 'Gestión Legal-Técnica',
    shortDesc: 'Acompañamiento integral ante Direcciones de Obras Municipales (DOM), SERVIU y Dirección de Vialidad MOP.',
    longDesc: 'Asesoría experta para desarrolladores inmobiliarios y constructoras en la obtención de permisos ante Direcciones de Obras Municipales (DOM), SERVIU y Dirección de Vialidad MOP.',
    specs: [
      { label: 'Cobertura', value: 'Municipalidades a nivel nacional, SERVIU, MOP, MTT' },
      { label: 'Especialidad', value: 'Accesos sobre calzadas nacionales y locales' },
    ],
    methodology: [
      'Revisión preventiva de planos de arquitectura y dotación de estacionamientos.',
      'Gestión de autorizaciones de empalme y acceso vehicular sobre vías estructurantes.',
      'Defensa técnica de observaciones ante comisiones revisoras.',
    ],
    deliverables: [
      'Informes de Factibilidad Normativa y Análisis de Cabida Vial',
      'Resoluciones de Aprobación de Accesos SERVIU / MOP',
    ],
    normative: 'Ordenanza General de Urbanismo y Construcciones (OGUC) y DFL N° 850.',
    software: ['AutoCAD Civil 3D', 'Normativa Digital MINVU'],
  },
  diseno: {
    slug: 'diseno',
    title: 'Diseño de Soluciones Viales & Geometría',
    tag: 'INGENIERÍA DE DETALLE & CAD',
    category: 'Ingeniería Vial',
    shortDesc: 'Propuestas técnicas a medida para mejorar la operación vial, radios de giro para vehículos pesados (AutoTURN) y pavimentación.',
    longDesc: 'Desarrollo de proyectos de ingeniería de detalle para obras viales: geometría de intersecciones, rotondas, pistas de aceleración/desaceleración, peraltes, radios de giro para vehículos pesados (AutoTURN) y pavimentación.',
    specs: [
      { label: 'Software CAD', value: 'AutoCAD Civil 3D + Transoft AutoTURN' },
      { label: 'Tipología Vehicular', value: 'WB-20, Bus Articulado, Vehículo Liviano' },
    ],
    methodology: [
      'Análisis de barrido de giro vehicular para camiones y buses de transporte público.',
      'Trazado en planta y perfil longitudinal con curvas de transición y visibilidad de frenado.',
      'Cálculo de paquete estructural de pavimentos según Manual de Carreteras.',
    ],
    deliverables: [
      'Juego de Planos Constructivos en AutoCAD (.dwg) y PDF firmado por Ingeniero Civil',
      'Especificaciones Técnicas Especiales (ETE) y Memoria de Cálculo',
    ],
    normative: 'Manual de Carreteras Volumen 3 y Manual REDEVU.',
    software: ['AutoCAD Civil 3D', 'Transoft AutoTURN', 'AASHTO Design Tool'],
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
