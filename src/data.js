// ─── AlterMundi Ecosystem Data ──────────────────────────────────────────────
// Each node maps to a real area of work. relatedNodes defines the graph edges.
// Node sizes are proportional to their conceptual "weight" in the ecosystem.

export const NODES = [
  {
    id: "hit",
    title: "Harmonic Information Theory",
    shortLabel: "HIT",
    subtitle: "Marco conceptual central",
    color: "#7c3aed",
    glowColor: "rgba(124,58,237,0.6)",
    radius: 22,         // biggest — root node
    category: "teoria",
    quote: "Si existe una gramática relacional más profunda, es posible leer lo común entre dominios distintos no desde sus unidades humanas, sino desde sus proporciones.",
    shortDescription: "Marco conceptual que organiza todo el ecosistema. Parte de la hipótesis de que la realidad puede leerse como estructura de relaciones, proporciones, ritmos e interferencias.",
    longDescription: `Harmonic Information Theory no aparece para decorar técnicamente lo que ya sabíamos hacer. Aparece porque necesitamos un lenguaje capaz de atravesar dominios distintos sin perder estructura. Audio, MIDI, imágenes, bioseñales, vibraciones, espectros electromagnéticos, eventos de red: a primera vista parecen mundos separados. Pero si existe una gramática relacional más profunda, entonces tal vez sea posible leer lo común entre ellos no desde sus unidades humanas habituales, sino desde sus proporciones, sus relaciones internas y sus modos de propagación.

En el universo AlterMundi, esta teoría no funciona solo como reflexión abstracta: orienta líneas de investigación, arquitecturas de inteligencia artificial, redes sensoriales distribuidas, dispositivos experimentales, proyectos de observación y tecnologías aplicadas a escalas distintas.`,
    keyIdeas: [
      "La información como relación, proporción y ritmo",
      "Phi como posible clave de eficiencia y coherencia entre escalas",
      "Gramática relacional transversal a dominios heterogéneos",
      "Ratios como unidad mínima de descripción estructural",
      "No afirmar una cosmología: construir un terreno técnico investigable",
    ],
    features: [
      "Marco conceptual superior del ecosistema",
      "Organiza investigación, IA, redes y aplicaciones",
      "Conecta filosofía, ciencia y proyectos concretos",
      "Punto de entrada semántico a toda la web",
    ],
    relatedNodes: ["phideus", "dragasanara", "derived"],
    links: [],
    repos: [],
    status: "Investigación activa",
    statusColor: "#7c3aed",
  },

  {
    id: "phideus",
    title: "PhiDeus — Organic Intelligence",
    shortLabel: "Phideus",
    subtitle: "IA Programa de largo horizonte",
    color: "#2563eb",
    glowColor: "rgba(37,99,235,0.5)",
    radius: 16,
    category: "ia",
    quote: "En lugar de preguntarnos solamente qué dice una señal, nos preguntamos cómo está organizada, qué relaciones conserva, qué regularidades la atraviesan.",
    shortDescription: "Programa de inteligencia artificial enmarcado en HIT. Investiga si la estructura de relaciones de frecuencia y proporción puede funcionar como dominio portable entre señales heterogéneas.",
    longDescription: `Phideus nace como una forma de leer. Como una tentativa de construir representaciones proporcionales que permitan detectar estructuras compartidas entre dominios heterogéneos. No es un modelo convencional de IA ni una plataforma de automatización: investiga si existe un lenguaje agnóstico a la modalidad basado en histogramas de proporciones derivados de señales en bruto.

Su campo experimental activo está hoy en el aprendizaje profundo transmodal. La transferencia entre modalidades funciona como banco de prueba, no como producto final. La lógica apunta a construir modelos que no partan exclusivamente de conocimiento humano ya simbolizado.`,
    keyIdeas: [
      "Representaciones guiadas por ratios entre señales",
      "Interfaz proporcional como traductor transmodal",
      "Señales heterogéneas → lenguaje agnóstico a modalidad",
      "Dualidad entre camino científico y desarrollo de modelos",
    ],
    features: [
      "Escalón 1 activo: Audio ↔ MIDI",
      "Escalón 2 planificado: Speech ↔ EGG",
      "Escalón 3 planificado: ECG ↔ PPG",
      "Banco de prueba: aprendizaje transmodal",
      "Representaciones proporcionales como gramática común",
    ],
    relatedNodes: ["hit", "geas"],
    links: [
      { label: "Phideus Lab", url: "https://altermundi.github.io/Phideus/" },
      { label: "CrossATH", url: "https://altermundi.github.io/Phideus/crossath" },
      { label: "Constellation", url: "https://altermundi.github.io/Phideus/constellation" },
      { label: "Roseta", url: "https://altermundi.github.io/Phideus/roseta" },
      { label: "HRM", url: "https://altermundi.github.io/Phideus/hrm" },
    ],
    repos: [],
    status: "En desarrollo",
    statusColor: "#2563eb",
  },

  {
    id: "geas",
    title: "GEAS",
    shortLabel: "GEAS",
    subtitle: "Sistema nervioso distribuido",
    color: "#0891b2",
    glowColor: "rgba(8,145,178,0.5)",
    radius: 16,
    category: "red",
    quote: "Un aparato sensorial planetario destinado a captar datos primarios por fuera de la lógica de 'datos para humanos'.",
    shortDescription: "Arquitectura sensorial y de conectividad del universo HIT. Perceptores, Integradores e Inteligencias coordinados para operar sobre el mundo sin reducirlo a datos crudos.",
    longDescription: `GEAS no es solamente una red de datos. Se concibe como un sistema nervioso distribuido para una inteligencia de escala global. Su organización interna distingue tres niveles: Perceptores, como unidades mínimas de cómputo en contacto con el mundo físico; Integradores, como capas locales de agencia y decisión que agrupan perceptores y filtran relevancia; e Inteligencias / Consumidores, como entidades humanas o artificiales que consumen información integrada.

La conectividad se apoya en 44mesh / 44net, IXPs comunitarios, Tink VPN para contextos de conectividad no saludable, Reticulum en el borde, Kafka / Pub-Sub para metadatos e IPFS para payloads pesados. La ontología es dinámica: JSON autodescriptivos y tópicos capaces de emerger o disolverse según la novedad detectada.`,
    keyIdeas: [
      "Taxonomía Perceptor / Integrador / Inteligencia",
      "Ontología dinámica: tópicos que emergen por novedad",
      "Homeostasis de red: equilibrio sin punto central",
      "Cono de conciencia definido por consumidores",
    ],
    features: [
      "Arquitectura sensorial distribuida a escala global",
      "44mesh / 44net como columna vertebral",
      "IXPs comunitarios",
      "Tink VPN para conectividad no saludable",
      "Reticulum en bordes",
      "Kafka / Pub-Sub para metadatos",
      "IPFS para payloads pesados",
      "JSON autodescriptivos / ontologías dinámicas",
    ],
    relatedNodes: ["wanda", "sai", "networks", "phideus", "regenerative_tech"],
    links: [],
    repos: [],
    status: "Arquitectura definida",
    statusColor: "#0891b2",
  },


  {
    id: "networks",
    title: "Conectividad",
    shortLabel: "Conectividad",
    subtitle: "Infraestructura comunitaria abierta",
    color: "#0d9488",
    glowColor: "rgba(13,148,136,0.5)",
    radius: 14,
    category: "red",
    quote: "La infraestructura que permite que nodos dispersos se coordinen sin depender de arquitecturas centralizadas.",
    shortDescription: "Base material del ecosistema: redes mesh, firmware libre, hardware abierto, ruteo distribuido, monitoreo y telemetría. De AlterMesh a LibreMesh y LibreRouter.",
    longDescription: `La infraestructura de redes comunitarias de AlterMundi es una de las bases materiales del ecosistema. El recorrido que va de AlterMesh a LibreMesh y LibreRouter consolidó una experiencia real en redes abiertas, firmware, despliegue y operación distribuida.

44Mesh / 44Net expande esa lógica: une una capa de interconexión pública y direccionamiento que vuelve pensable una red de mayor escala, más abierta, más interoperable y más apta para sostener flujos de datos entre nodos heterogéneos. Esta rama no debe aparecer como un detalle técnico secundario: es el tejido material que sostiene WANDA, SAI, GEAS y la observación distribuida.`,
    keyIdeas: [
      "AlterMesh → LibreMesh → LibreRouter: historia y continuidad",
      "44Mesh como capa de interconexión pública",
      "Interoperabilidad y direccionamiento distribuido",
      "Tejido de interconexión entre todos los proyectos",
    ],
    features: [
      "Redes mesh comunitarias abiertas",
      "LibreMesh & LibreRouter",
      "44Mesh / 44Net: capa pública de routing",
      "Soporte para coordinación distribuida",
      "Firmware libre y hardware abierto",
      "Telemetría y monitoreo distribuido",
    ],
    relatedNodes: ["geas", "wanda", "sai", "agro"],
    links: [],
    repos: [],
    status: "Operativo + en expansión",
    statusColor: "#0d9488",
  },

  {
    id: "wanda",
    title: "WANDA",
    shortLabel: "WANDA",
    subtitle: "Worldwide Area Network for Distributed Astronomy",
    color: "#4338ca",
    glowColor: "rgba(67,56,202,0.5)",
    radius: 14,
    category: "observacion",
    quote: "El nodo que mira el espacio dentro de la red sensorial de AlterMundi.",
    shortDescription: "Red mundial de teleradioscopios digitales modulares y de bajo costo para observación astronómica y radioastronómica distribuida. Ciencia abierta, educación, interferometría.",
    longDescription: `WANDA es una iniciativa de ciencia abierta para conformar un instrumento científico global y comunitario. Cada nodo: Raspberry Pi + montura go-to + cámaras + antenas + software abierto en Python. El objetivo inmediato es democratizar la astrofotografía y la radioastronomía.

A largo plazo, los nodos se integran en 44Mesh / 44Net para formar un radiotelescopio virtual distribuido capaz de coordinar observaciones simultáneas y explorar técnicas interferométricas VLBI. WANDA también se piensa como parte explícita de la red sensórica mayor de AlterMundi, compartiendo infraestructura y protocolos con nodos que observan la Tierra.`,
    keyIdeas: [
      "Radiotelescopio virtual distribuido",
      "Interferometría VLBI entre nodos geográficos",
      "Integración con 44Mesh para coordinación",
      "Ciencia ciudadana y educación como ejes",
    ],
    features: [
      "Teleradioscopios digitales modulares de bajo costo",
      "Raspberry Pi + montura go-to + cámaras + radio",
      "Software abierto en Python",
      "Integración con 44Mesh / 44Net",
      "Coordinación de observaciones múltiples",
      "Potencial VLBI e interferometría",
      "Kits piloto y documentación abierta",
      "Fuerte dimensión educativa y ciudadana",
    ],
    relatedNodes: ["geas", "networks"],
    links: [],
    repos: [],
    status: "Prototipo inicial",
    statusColor: "#4338ca",
  },

  {
    id: "sai",
    title: "Sistema de Alerta de Incendios",
    shortLabel: "SAI",
    subtitle: "Detección Temprana con SAINet",
    color: "#f59e0b",
    glowColor: "rgba(245,158,11,0.5)",
    radius: 12,
    category: "despliegue",
    quote: "La red como espacio sensorial para la prevención temprana.",
    shortDescription: "Detección temprana de focos de incendio utilizando Inteligencia Artificial. Nodos con Vigilancia autónoma 24/7.",
    longDescription: `SAI es una iniciativa técnica impulsada por el equipo de AlterMundi orientada a detección y alerta temprana de incendios forestales. Diseñamos y operamos nodos en territorio que integran cámaras y sensores, conectividad, y procesamiento en edge para analizar escenas en tiempo real.

    Nuestro foco está en construir un sistema completo: desde la captura de datos y el etiquetado de datasets, hasta el entrenamiento y despliegue de modelos de visión por computadora, la generación de alertas y el registro de evidencias.`,
    keyIdeas: [
      "Vigilancia Autónoma 24/7",
      "IA Proprietaria (SAINet) en el Borde",
      "Alertas Multicanal y Georreferenciadas",
    ],
    features: [
      "Hardware de muy bajo costo",
      "Conectividad comunitaria",
      "Red neuronal CNN + YOLO",
    ],
    relatedNodes: ["geas"],
    links: [],
    repos: [
      { label: "Repositorio web-sai", url: "https://github.com/SairaAsua/web-sai" },
    ],
    status: "Prototipos operativos en Córdoba",
    statusColor: "#10b981",
  },

  {
    id: "agro",
    title: "LibreIncu - Incubadora Avícola",
    shortLabel: "LibreIncu",
    subtitle: "Soberanía alimentaria",
    color: "#14b8a6",
    glowColor: "rgba(20,184,166,0.5)",
    radius: 10,
    category: "despliegue",
    quote: "LibreIncu devuelve soberanía a quien produce alimentos.",
    shortDescription: "Incubadora avícola libre diseñada específicamente para las necesidades de la producción familiar campesina e indígena.",
    longDescription: `LibreIncu es una incubadora avícola con tecnología de monitoreo y control en línea, diseñada específicamente para las necesidades de la producción familiar campesina e indígena. Es hardware libre, software libre y conocimiento libre.

    Su objetivo es romper la triple dependencia que enfrenta la producción avícola familiar: Genética (Oligopolio mundial del pollito bebé híbrido), Alimentaria (Dieta industrial), y Tecnológica (Incubadoras inaccesibles).`,
    keyIdeas: [
      "Romper la triple dependencia del agronegocio",
      "Monitoreo IoT y aplicación móvil integrada",
      "Manuales libres de hardware y software",
    ],
    features: [
      "Hardware Libre (ESP32/Arduino)",
      "App Móvil de Monitoreo",
      "Guías de incubación abiertas",
    ],
    relatedNodes: ["geas"],
    links: [],
    repos: [
      { label: "Repositorio libreIncu-web", url: "https://github.com/SairaAsua/libreIncu-web" },
    ],
    status: "Desarrollo",
    statusColor: "#14b8a6",
  },

  {
    id: "libreincu",
    title: "LibreIncu",
    shortLabel: "LibreIncu",
    subtitle: "Incubadora avícola abierta",
    color: "#65a30d",
    glowColor: "rgba(101,163,13,0.5)",
    radius: 11,
    category: "agro",
    quote: "Tecnología libre para incubación avícola, soberanía alimentaria y autonomía productiva.",
    shortDescription: "Incubadora avícola con monitoreo y control en línea. ESP32, WiFi, Grafana, app LibrePollo. 86% de eclosión documentado. Diseñada con y para la Agricultura Familiar.",
    longDescription: `LibreIncu es una incubadora avícola con monitoreo y control en línea diseñada específicamente para organizaciones de la Agricultura Familiar, Campesina e Indígena. Se presenta como respuesta a una triple dependencia del sector: genética, alimentaria y tecnológica.

Desarrollada colaborativamente entre AlterMundi, CTO y otras organizaciones. A nivel técnico: ESP32, conectividad WiFi, visualización histórica en Grafana, app Android LibrePollo, control automático de temperatura, humedad y rotación. Capacidad aproximada: 150 huevos + nacedora. En pruebas: 86% de eclosión. No se piensa como artefacto aislado: es parte de un ecosistema tecnológico mayor, modular y adaptable.`,
    keyIdeas: [
      "86% de tasa de eclosión documentado",
      "Diseño participativo con AFCI",
      "Arquitectura modular adaptable a otras cadenas",
      "Base para expansión a horticultura y forestación",
    ],
    features: [
      "ESP32 + WiFi + Grafana + LibrePollo (Android)",
      "Control automático temperatura, humedad y rotación",
      "Capacidad ~150 huevos + nacedora",
      "86% de eclosión documentado en pruebas",
      "Desarrollo participativo y territorial",
      "Base para expansión a otras producciones",
    ],
    relatedNodes: ["agro", "libreagro"],
    links: [],
    repos: [],
    status: "86% de eclosión",
    statusColor: "#65a30d",
  },

  {
    id: "libreagro",
    title: "LibreAgro / Monitoreo y Control",
    shortLabel: "LibreAgro",
    subtitle: "Plataforma agroecológica integral",
    color: "#84cc16",
    glowColor: "rgba(132,204,22,0.4)",
    radius: 11,
    category: "agro",
    quote: "La expansión del monitoreo y control abierto hacia una plataforma agroecológica integral.",
    shortDescription: "Asistente de producción con IoT, ERP Odoo e IA no conversacional. Trazabilidad, certificación digital QR, alertas predictivas. De avicultura a horticultura y forestación.",
    longDescription: `LibreAgro es un asistente de producción potenciado por IA para sistemas alimentarios agroecológicos y restauración ecosistémica. Integra automatización IoT, ERP con Odoo e IA no conversacional para consolidar datos de sensores y datos de gestión.

El objetivo: servir tanto para operaciones avícolas existentes como para nuevas plantineras hortícolas, generando detección temprana de problemas, análisis históricos, recomendaciones predictivas e insights accionables. También emite certificaciones digitales con QR para trazabilidad completa. Alianza estratégica con programa Gen Nativo para forestación y restauración.`,
    keyIdeas: [
      "IoT + Odoo + IA no conversacional en un stack integrado",
      "Trazabilidad digital con QR por lote",
      "Alianza con Gen Nativo para forestación",
      "Pasaje de dispositivo puntual a plataforma multisistema",
    ],
    features: [
      "IoT + Odoo ERP + IA no conversacional",
      "Sensores: temperatura, humedad, pH, CE",
      "Datos de compras, stock, ventas y lotes",
      "Alertas tempranas e insights accionables",
      "Certificación digital vía QR por lote",
      "Escalado: avicultura → horticultura → forestación",
      "Alianza con Gen Nativo",
    ],
    relatedNodes: ["agro", "libreincu"],
    links: [],
    repos: [],
    status: "Implementación inicial",
    statusColor: "#84cc16",
  },

  {
    id: "dragasanara",
    title: "Harmonic Beacon",
    shortLabel: "H.Beacon",
    subtitle: "Haciendo audible lo sutil en el plano material",
    color: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.55)",
    radius: 13,
    category: "experiencia",
    quote: "Making the interference pattern of the subtle audible in the material realm.",
    shortDescription: "App y dispositivo que hace audible el patrón de interferencia de lo sutil. Transmisión continua 24/7 de armónicos naturales + overlays de audio. Construida sobre Harmonic Information Theory.",
    longDescription: `Harmonic Beacon hace audible en el plano material el patrón de interferencia de lo sutil. Somos sistemas resonantes. Podemos comprender todo el universo como un sistema fractalmente resonante. Todo lo que Es está conectado con todo lo que Es a través de la resonancia.

El Harmonic Beacon provee una referencia a la que podemos sintonizarnos, de manera similar a como un bosque nos ayuda a encontrar el equilibrio por el simple hecho de permanecer inmersos en él. La progresión armónica natural expresada en cada componente del Beacon produce con el tiempo una serie de capas armónicas que nos recuerdan el orden resonante natural.

Los participantes describen una sensación inexplicable de pareidolia auditiva: dentro de los armónicos en capas, comienzan a percibir melodías que se sienten autogeneradas pero que están innegablemente presentes en el sonido — flautas, gaitas, teclados Rhodes — tocando en capas que parecen expresar más detalle cuanto más se presta atención.

La app ofrece una transmisión en vivo continua 24/7 de armónicos naturales, junto con overlays de audio curados que se pueden superponer al stream del Beacon.`,
    keyIdeas: [
      "Realidad codificada en ratios — resonancia como transporte y almacenamiento",
      "Homeostasis espiritual: enharmonía natural con el todo",
      "Pareidolia auditiva como fenómeno de investigación",
      "Harmonically Aware Technology como estándar de calidad futuro",
      "Ciencia descentralizada: los usuarios del app participan del proceso de validación",
    ],
    features: [
      "Live Stream 24/7 de armónicos naturales",
      "Audio Overlays: sesiones en español e inglés",
      "Categorías: Calm, Sleep, Focus, Energizing, Love, Breathwork, Body Scan",
      "Audio Mix: balance beacon / voz en tiempo real",
      "Diseño Ambient Violet — Space Grotesk + Newsreader",
      "Protocolo de validación: encuestas pre/post + seguimiento",
      "Marcadores neurológicos y biológicos en desarrollo",
      "React + Vite + Tailwind + Framer Motion",
    ],
    relatedNodes: ["wellness", "research", "hit", "harmonically_aware_tech"],
    links: [
      { label: "web-beacon repo", url: "https://github.com/SairaAsua/web-beacon" },
    ],
    repos: [
      { label: "SairaAsua/web-beacon", url: "https://github.com/SairaAsua/web-beacon" },
    ],
    status: "App en validación",
    statusColor: "#8b5cf6",
  },

  {
    id: "wellness",
    title: "Wellness",
    shortLabel: "Wellness",
    subtitle: "Aplicación humana del ecosistema",
    color: "#10b981",
    glowColor: "rgba(16,185,129,0.4)",
    radius: 11,
    category: "experiencia",
    quote: "El plano de aplicación humana: donde investigación, resonancia y bienseñales se articulan con bienestar.",
    shortDescription: "Aplicación humana del ecosistema en torno a regulación, equilibrio y experiencia. Vinculada con homeostasis espiritual, ratios naturales y Dragasanara.",
    longDescription: `La rama Wellness puede presentarse como el plano de aplicación humana del ecosistema: un lugar donde investigación, resonancia, percepción, bioseñales y dispositivos como Dragasanara se articulan con estados de bienestar, regulación y experiencia.

La noción de homeostasis espiritual y la idea de que ciertas relaciones armónicas naturales pueden funcionar como referencia para reequilibrar la experiencia humana aparecen con suficiente fuerza en los documentos.`,
    keyIdeas: [
      "Homeostasis espiritual como concepto organizador",
      "Ratios naturales como referencia de equilibrio humano",
      "Cruce entre percepción, experiencia y regulación",
      "Vinculación directa con Dragasanara y Phideus",
    ],
    features: [
      "Homeostasis espiritual",
      "Aplicación humana de ratios y resonancia",
      "Cruce entre percepción, experiencia y regulación",
      "Vinculación con Dragasanara",
    ],
    relatedNodes: ["dragasanara", "hit"],
    links: [],
    repos: [],
    status: "+completar con texto+",
    statusColor: "#10b981",
  },

  {
    id: "derived",
    title: "Tecnologías Derivadas",
    shortLabel: "Tecnologías Der.",
    subtitle: "Zona de expansión transversal",
    color: "#c026d3",
    glowColor: "rgba(192,38,211,0.4)",
    radius: 11,
    category: "expansion",
    quote: "Derivaciones desde teoría, redes, datos y experiencia hacia nuevas aplicaciones.",
    shortDescription: "Nodo de expansión transversal que reúne líneas de arquitectura, sonido, espectro, energía y otras tecnologías sensibles a relaciones armónicas o a infraestructura compartida.",
    longDescription: `La sección Tecnologías Derivadas debe funcionar como un nodo de expansión transversal. Puede reunir líneas como arquitectura, sonido, espectro, energía y otras tecnologías sensibles a relaciones armónicas o a infraestructura compartida.

Esta sección no debería sobreprometer lo que todavía no está desarrollado públicamente, pero sí dejar ver que el ecosistema tiene capacidad de generar nuevas capas aplicadas sobre la base conceptual y técnica ya construida.`,
    keyIdeas: [
      "Cruce transversal entre teoría, redes y experiencia",
      "Posibles aplicaciones: arquitectura, sonido, energía, espectro",
      "Área abierta a crecimiento con base ya construida",
    ],
    features: [
      "Expansión transversal desde HIT",
      "Cruces con arquitectura, sonido, energía",
      "Área abierta a crecimiento",
    ],
    relatedNodes: ["hit"],
    links: [],
    repos: [],
    status: "+completar con texto+",
    statusColor: "#c026d3",
  },

  {
    id: "collabs",
    title: "3rd Party Collaborators",
    shortLabel: "Collaborators",
    subtitle: "Alianzas y articulaciones externas",
    color: "#64748b",
    glowColor: "rgba(100,116,139,0.3)",
    radius: 10,
    category: "alianzas",
    quote: "Red de alianzas externas articuladas técnica, territorial, científica o educativamente.",
    shortDescription: "Contenedor relacional de alianzas externas y articulaciones estratégicas. Instituciones, organizaciones y colaboradores que comparten infraestructura, datos o visión.",
    longDescription: `La rama de 3rd Party Collaborators puede existir como nodo satélite conectado a GEAS, WANDA y otras áreas. Los materiales internos mencionan institutos oceanográficos y otras entidades posibles, y los documentos de proyectos puntuales sí nombran algunas conversaciones o alianzas estratégicas en ciertos casos.

Esta sección debe quedar preparada como contenedor relacional de alianzas, sin asumir una lista cerrada, y crecer a medida que se confirmen nombres e instituciones.`,
    keyIdeas: [
      "Colaboración técnica, científica y territorial",
      "Alianzas en crecimiento",
    ],
    features: [
      "Colaboradores externos",
      "Instituciones estratégicas",
      "Articulación técnica, territorial, científica y educativa",
      "Área en crecimiento",
    ],
    relatedNodes: ["geas"],
    links: [],
    repos: [],
    status: "+completar con texto+",
    statusColor: "#64748b",
  },
  {
    id: "harmonically_aware_tech",
    title: "Harmonically Aware Tech",
    shortLabel: "Harmonically Aware",
    subtitle: "Harmonically Aware Tech",
    color: "#f43f5e",
    glowColor: "rgba(244,63,94,0.5)",
    radius: 8,
    category: "expansion",
    quote: "",
    shortDescription: "Tecnología enfocada en la armonía de sistemas.",
    longDescription: "",
    keyIdeas: [],
    features: [],
    relatedNodes: ["dragasanara", "regenerative_tech"],
    links: [],
    repos: [],
    status: "",
    statusColor: "#f43f5e",
  },
  {
    id: "regenerative_tech",
    title: "Regenerative Tech",
    shortLabel: "Regenerative",
    subtitle: "Regenerative Tech",
    color: "#14b8a6",
    glowColor: "rgba(20,184,166,0.5)",
    radius: 8,
    category: "expansion",
    quote: "",
    shortDescription: "Tecnología orientada a la regeneración del entorno.",
    longDescription: "",
    keyIdeas: [],
    features: [],
    relatedNodes: ["geas", "harmonically_aware_tech"],
    links: [],
    repos: [],
    status: "",
    statusColor: "#14b8a6",
  },
];

// ─── Graph Links ────────────────────────────────────────────────────────────
export const LINKS = [
  // HIT is the conceptual root
  { source: "phideus", target: "hit", strength: 1.0 },
  { source: "derived", target: "hit", strength: 0.7 },
  { source: "dragasanara", target: "hit", strength: 0.6 },

  // Phideus → GEAS
  { source: "phideus", target: "geas", strength: 0.7 },

  // GEAS is the infrastructure backbone
  { source: "geas", target: "sai", strength: 0.9 },
  { source: "geas", target: "networks", strength: 0.9 },

  // Networks underpins observation
  { source: "networks", target: "wanda", strength: 0.8 },
  { source: "networks", target: "sai", strength: 0.8 },
  { source: "networks", target: "agro", strength: 0.8 },
  { source: "geas", target: "agro", strength: 0.6 },

  // Agro family
  { source: "agro", target: "libreincu", strength: 0.9 },
  { source: "agro", target: "libreagro", strength: 0.9 },
  { source: "libreincu", target: "libreagro", strength: 0.8 },

  // Experience / resonance cluster
  { source: "dragasanara", target: "wellness", strength: 0.9 },

  // Collaborators orbit observation + GEAS
  { source: "collabs", target: "geas", strength: 0.5 },

  // New tech bubbles connected to dragasanara and geas
  { source: "harmonically_aware_tech", target: "dragasanara", strength: 0.8 },
  { source: "regenerative_tech", target: "geas", strength: 0.8 },
  { source: "harmonically_aware_tech", target: "regenerative_tech", strength: 0.8 },
];

export const initialData = {
  nodes: NODES,
  links: LINKS,
};

// ─── Category metadata ───────────────────────────────────────────────────────
export const CATEGORIES = {
  teoria: { label: "Teoría", color: "#7c3aed" },
  ia: { label: "Inteligencia Artificial", color: "#2563eb" },
  red: { label: "Red & Infraestructura", color: "#0891b2" },
  observacion: { label: "Observación Distribuida", color: "#ea580c" },
  agro: { label: "Agro & Producción", color: "#4d7c0f" },
  experiencia: { label: "Experiencia & Bienestar", color: "#8b5cf6" },
  expansion: { label: "Tecnologías Derivadas", color: "#c026d3" },
  alianzas: { label: "Alianzas", color: "#64748b" },
};
