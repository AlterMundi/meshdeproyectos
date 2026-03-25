// ─── Ecosystem Mesh Data ────────────────────────────────────────────────────
// Each node maps to one hex in the beehive grid.
// col/row define position: row 0 is top, row 1 is bottom (offset by half).

export const ECO_NODES = [
  // ── ROW 0 ──────────────────────────────────────────────────────────────────
  {
    id: 'networks',
    col: 0, row: 0,
    shortLabel: 'Community Networks',
    title: 'Community Networks / LibreMesh / 44Mesh',
    subtitle: 'Infraestructura abierta de conectividad distribuida',
    color: '#0d9488',
    group: 'conectividad',
    tagline: 'Redes mesh abiertas y comunitarias',
    description: 'Es el punto de partida histórico y técnico del ecosistema. AlterMundi construyó conectividad comunitaria desde cero: firmware libre, hardware abierto, ruteo distribuido y redes replicables.',
    longDescription: 'Esta rama reúne el recorrido de AlterMundi en redes libres y comunitarias. No es un bloque técnico secundario: es la infraestructura que permitió pensar después sensores, monitoreo, observación distribuida y circulación de datos entre nodos. Acá empieza la lógica de red que más tarde se expande a otros dominios.\n\n44Mesh / 44Net expande esa lógica: une una capa de interconexión pública y direccionamiento que vuelve pensable una red de mayor escala, más abierta, más interoperable y más apta para sostener flujos de datos entre nodos heterogéneos.',
    features: [
      'Firmware libre LibreMesh',
      'Hardware abierto LibreRouter',
      'Ruteo distribuido sin centro',
      '44Mesh / 44Net: capa pública de routing',
      'Redes mesh comunitarias desplegadas en territorio',
      'Documentación y formación abierta',
    ],
    actors: ['Comunidades rurales', 'Gobiernos locales', 'Cooperativas', 'ONGs aliadas', 'Radioaficionados'],
    website: 'https://altermundi.net',
    links: [
      { label: 'altermundi.net', url: 'https://altermundi.net' },
      { label: 'GitHub AlterMundi', url: 'https://github.com/AlterMundi' },
    ],
    repos: [],
    status: 'Operativo + en expansión',
  },
  {
    id: 'agro',
    col: 1, row: 0,
    shortLabel: 'Agro',
    title: 'Agro',
    subtitle: 'Familia de tecnologías abiertas para producción agroecológica',
    color: '#16a34a',
    group: 'agro',
    tagline: 'Tecnología abierta para producción',
    description: 'Agro reúne desarrollos orientados a resolver necesidades concretas de producción desde una lógica de tecnología apropiada, abierta y territorial. No es un único producto: es una familia de herramientas.',
    longDescription: 'Conecta sensores, datos, automatización y gestión con procesos productivos reales. El pasaje desde la experiencia en conectividad hacia tecnologías productivas y soberanía alimentaria. Cada herramienta nace en conversación con quienes producen.\n\nEsta familia incluye LibreIncu (incubación avícola), LibreAgro (monitoreo y control integral) y potencialmente más herramientas orientadas a la agricultura familiar, campesina e indígena.',
    features: [
      'Enfoque en agricultura familiar y campesina',
      'Hardware libre + software libre',
      'Desarrollo participativo y territorial',
      'Conectividad IoT en borde',
    ],
    actors: ['Productores familiares', 'Agricultura familiar', 'Cooperativas', 'AFCI', 'Comunidades indígenas'],
    links: [],
    repos: [],
    status: 'Activo',
  },
  {
    id: 'sai',
    col: 2, row: 0,
    shortLabel: 'SAI',
    title: 'SAI — Sistema de Alerta de Incendios',
    subtitle: 'Sistema abierto de alerta temprana con IA en el borde',
    color: '#f59e0b',
    group: 'percepcion',
    tagline: 'Detección temprana de incendios con IA',
    description: 'SAI es una plataforma abierta de detección temprana de incendios. Funciona con nodos de vigilancia autónomos, cámaras, inferencia con modelos de visión y alertas cuando aparece una señal relevante.',
    longDescription: 'Es uno de los proyectos donde más claramente se ve el pasaje desde infraestructura de red hacia percepción distribuida del territorio. Cada nodo captura imágenes, las analiza localmente y genera alertas cuando detecta humo o fuego.\n\nEl sistema está diseñado para operar 24/7 con validación humana y aprendizaje continuo a partir de cada evento. No es solo una app: es infraestructura territorial con IA.',
    features: [
      'Nodos con cámaras Raspberry Pi',
      'Inferencia local con modelos de visión (SAINet)',
      'Alertas por Telegram',
      'Orquestación con N8n',
      'Validación humana + aprendizaje continuo',
      'Despliegue territorial en Córdoba',
      'Gestión comunitaria del riesgo',
    ],
    actors: ['Bomberos voluntarios', 'Brigadas forestales', 'Gobiernos locales', 'Comunidades rurales'],
    website: 'https://sainet.info',
    links: [
      { label: 'sainet.info', url: 'https://sainet.info' },
    ],
    repos: [
      { label: 'sai-server', url: 'https://github.com/AlterMundi/sai-server' },
      { label: 'sai-inference', url: 'https://github.com/AlterMundi/sai-inference' },
      { label: 'sai-cam', url: 'https://github.com/AlterMundi/sai-cam' },
      { label: 'sai-benchmark', url: 'https://github.com/AlterMundi/sai-benchmark' },
      { label: 'sai-web-astro', url: 'https://github.com/AlterMundi/sai-web-astro' },
    ],
    status: 'Prototipos operativos en Córdoba',
  },
  {
    id: 'phideus',
    col: 3, row: 0,
    shortLabel: 'Phideus',
    title: 'Phideus',
    subtitle: 'IA orientada a relaciones proporcionales entre señales',
    color: '#2563eb',
    group: 'inteligencia',
    tagline: 'Aprendizaje transmodal entre señales',
    description: 'Phideus es una línea de investigación en IA que explora si distintos tipos de señales pueden compararse a partir de sus relaciones internas. Hoy su banco de prueba principal está en cruces entre audio y MIDI.',
    longDescription: 'Dentro del ecosistema AlterMundi, Phideus representa el paso desde captar y organizar información hacia investigar nuevas formas de leerla. No arranca desde categorías humanas habituales: busca representaciones basadas en proporciones y relaciones entre señales en bruto.\n\nEl camino previsto incluye escalones sucesivos: primero audio ↔ MIDI, luego speech ↔ EGG y ECG ↔ PPG. Cada escalón es también una validación de la hipótesis central: que la estructura relacional de señales heterogéneas puede ser un lenguaje común.',
    features: [
      'IA relacional y transmodal',
      'Banco de prueba activo: audio ↔ MIDI',
      'Escalones futuros: speech ↔ EGG, ECG ↔ PPG',
      'Representaciones por proporciones (no por categorías)',
      'Desarrollo de modelos + validación experimental',
      'Relación directa con HIT',
    ],
    actors: ['Investigadores', 'Instituciones científicas', '+completar con texto+'],
    website: 'https://phideus.net',
    links: [
      { label: 'phideus.net', url: 'https://phideus.net' },
      { label: 'Phideus Lab', url: 'https://altermundi.github.io/Phideus/' },
      { label: 'CrossATH', url: 'https://altermundi.github.io/Phideus/crossatt' },
      { label: 'Constellation', url: 'https://altermundi.github.io/Phideus/constellation' },
      { label: 'Roseta', url: 'https://altermundi.github.io/Phideus/roseta' },
      { label: 'HRM', url: 'https://altermundi.github.io/Phideus/hrm' },
    ],
    repos: [
      { label: 'Phideus (principal)', url: 'https://github.com/Mar-IA-no/Phideus' },
    ],
    status: 'En desarrollo',
  },
  {
    id: 'hit',
    col: 4, row: 0,
    shortLabel: 'HIT',
    title: 'Harmonic Information Theory',
    subtitle: 'Marco conceptual del ecosistema',
    color: '#7c3aed',
    group: 'conceptual',
    tagline: 'Información como relación y proporción',
    description: 'Harmonic Information Theory es un marco conceptual que propone leer la información como estructura de relaciones, proporciones, ritmos e interferencias. No es un producto: organiza preguntas y líneas de investigación.',
    longDescription: 'Funciona como el horizonte conceptual del ecosistema. Desde esta perspectiva, distintos proyectos de AlterMundi comparten una hipótesis de trabajo: que una parte importante de la información puede entenderse mejor cuando se la observa como relación y no solo como dato aislado.\n\nAudio, MIDI, imágenes, bioseñales, vibraciones, espectros electromagnéticos, eventos de red: a primera vista parecen mundos separados. HIT propone que existe una gramática relacional más profunda que los atraviesa.',
    features: [
      'Marco conceptual transversal al ecosistema',
      'Hipótesis: la información puede leerse como proporción y relación',
      'Conecta Phideus, GEAS, Beacon y derivados',
      'Es un terreno técnico investigable, no una doctrina cerrada',
    ],
    actors: ['+completar con texto+'],
    links: [{ label: '+completar con texto+', url: '#' }],
    repos: [],
    status: 'Investigación activa',
  },

  // ── ROW 1 ──────────────────────────────────────────────────────────────────
  {
    id: 'libreincu',
    col: 0, row: 1,
    shortLabel: 'LibreIncu',
    title: 'LibreIncu',
    subtitle: 'Incubadora avícola abierta para soberanía alimentaria',
    color: '#22c55e',
    group: 'agro',
    tagline: 'Incubadora avícola libre y conectada',
    description: 'LibreIncu es una incubadora avícola con monitoreo y control remoto desarrollada junto a organizaciones productivas. Permite automatizar temperatura, humedad y rotación, y visualizar datos en línea.',
    longDescription: 'Es un proyecto concreto, territorial y replicable. Muestra con claridad cómo AlterMundi lleva tecnología abierta a necesidades productivas reales. Se desarrolló junto a organizaciones de la Agricultura Familiar, Campesina e Indígena.\n\nLa triple dependencia que busca romper: genética (oligopolio del pollito bebé híbrido), alimentaria (dieta industrial) y tecnológica (incubadoras inaccesibles). Con 86% de eclosión documentado en pruebas.',
    features: [
      'Hardware libre (ESP32)',
      'Conectividad WiFi',
      'Visualización histórica en Grafana',
      'App Android LibrePollo',
      'Control automático de temperatura, humedad y rotación',
      'Capacidad ~150 huevos + nacedora',
      '86% de eclosión documentado',
      'Desarrollo participativo y territorial',
    ],
    actors: ['Productores familiares', 'AFCI', 'Comunidades indígenas', 'Cooperativas'],
    links: [{ label: '+completar con texto+', url: '#' }],
    repos: [
      { label: 'libreincu-web', url: 'https://github.com/SairaAsua/libreincu-web-web' },
    ],
    status: '86% de eclosión',
  },
  {
    id: 'libreagro',
    col: 1, row: 1,
    shortLabel: 'LibreAgro',
    title: 'LibreAgro / Monitoreo y Control',
    subtitle: 'Plataforma agroecológica con IoT, trazabilidad e IA',
    color: '#65a30d',
    group: 'agro',
    tagline: 'Monitoreo integral y trazabilidad productiva',
    description: 'LibreAgro amplía la lógica de LibreIncu hacia una plataforma más general. Integra sensores, automatización, datos de gestión, trazabilidad y análisis para acompañar distintos procesos productivos.',
    longDescription: 'La idea no es solo controlar equipos, sino organizar mejor la información y convertirla en alertas, seguimiento y criterios de decisión. Integra IoT con ERP (Odoo) e IA no conversacional.\n\nEmite certificaciones digitales con QR para trazabilidad por lote. Escala desde avicultura a horticultura y forestación, con alianza estratégica con el programa Gen Nativo.',
    features: [
      'IoT + integración con Odoo ERP',
      'Datos productivos y de gestión unificados',
      'Trazabilidad por lote con QR',
      'Alertas tempranas e insights accionables',
      'Expansión: avicultura → horticultura → forestación',
      'Alianza con Gen Nativo para forestación',
    ],
    actors: ['Productores familiares', 'Cooperativas', 'Gen Nativo', '+completar con texto+'],
    links: [{ label: '+completar con texto+', url: '#' }],
    repos: [],
    status: 'Implementación inicial',
  },
  {
    id: 'wanda',
    col: 2, row: 1,
    shortLabel: 'WANDA',
    title: 'WANDA',
    subtitle: 'Red abierta de astronomía distribuida y ciencia ciudadana',
    color: '#ea580c',
    group: 'percepcion',
    tagline: 'Observación astronómica distribuida',
    description: 'WANDA es una iniciativa de ciencia abierta para construir nodos de observación astronómica y radioastronómica de bajo costo, replicables y conectables entre sí.',
    longDescription: 'Combina hardware accesible, software libre, documentación abierta y una dimensión educativa fuerte. Dentro del ecosistema, muestra cómo la misma arquitectura de nodos, captura y coordinación puede desplegarse también en la observación del cielo.\n\nA largo plazo, los nodos se integran en 44Mesh / 44Net para formar un radiotelescopio virtual distribuido capaz de coordinar observaciones simultáneas y explorar técnicas interferométricas VLBI.',
    features: [
      'Raspberry Pi + montura go-to + cámaras + antenas',
      'Software abierto en Python',
      'Integración futura con 44Mesh / 44Net',
      'Potencial interferometría VLBI entre nodos',
      'Fuerte dimensión educativa',
      'Ciencia ciudadana accesible',
    ],
    actors: ['Escuelas', 'Radioaficionados', 'Clubes de astronomía', 'Instituciones científicas'],
    links: [],
    repos: [
      { label: 'wanda-telescope', url: 'https://github.com/AlterMundi/wanda-telescope' },
    ],
    status: 'Prototipo inicial',
  },
  {
    id: 'geas',
    col: 3, row: 1,
    shortLabel: 'GEAS',
    title: 'GEAS',
    subtitle: 'Sistema nervioso distribuido del ecosistema',
    color: '#4f46e5',
    group: 'inteligencia',
    tagline: 'Arquitectura sensorial y de datos distribuida',
    description: 'GEAS es la arquitectura de infraestructura que conecta sensores, redes y capas de inteligencia. Organiza el flujo de datos entre nodos físicos y sistemas de análisis sin depender de un centro.',
    longDescription: 'Su organización interna distingue tres niveles: Perceptores (unidades mínimas en contacto con el mundo físico), Integradores (capas locales que agrupan perceptores y filtran relevancia), e Inteligencias (entidades humanas o artificiales que consumen información integrada).\n\nLa conectividad se apoya en 44mesh / 44net, IXPs comunitarios, Tink VPN, Reticulum en el borde, Kafka/Pub-Sub para metadatos e IPFS para payloads pesados.',
    features: [
      'Taxonomía Perceptor / Integrador / Inteligencia',
      '44Mesh / 44Net como columna vertebral',
      'Tink VPN para conectividad no confiable',
      'Kafka / Pub-Sub para metadatos',
      'IPFS para payloads pesados',
      'Ontologías dinámicas autodescriptivas',
    ],
    actors: ['+completar con texto+'],
    links: [],
    repos: [],
    status: 'Arquitectura definida',
  },
  {
    id: 'beacon',
    col: 4, row: 1,
    shortLabel: 'Harmonic Beacon',
    title: 'Harmonic Beacon',
    subtitle: 'Experimento aplicado en escucha, resonancia y experiencia',
    color: '#f43f5e',
    group: 'experimental',
    tagline: 'Exploración en escucha y resonancia',
    description: 'Harmonic Beacon es una rama experimental del ecosistema. Traduce patrones armónicos en una interfaz de escucha accesible. Es una exploración en curso, vinculada a la dimensión más experiencial de HIT.',
    longDescription: 'No debe sobreexplicarse ni prometer más de lo que está efectivamente desarrollado. Funciona como una aplicación lateral que conecta la investigación sobre proporciones y resonancias con una experiencia concreta de escucha.\n\nLa app ofrece una transmisión continua 24/7 de armónicos naturales junto con overlays de audio curados. Los participantes describen la experiencia como una referencia auditiva a la que sintonizarse.',
    features: [
      'Live Stream 24/7 de armónicos naturales',
      'Audio overlays por categoría (Calm, Sleep, Focus, etc.)',
      'Mix beacon / voz en tiempo real',
      'Protocolo de validación con encuestas pre/post',
      'Rama experimental de HIT',
    ],
    actors: ['Usuarios experimentales', '+completar con texto+'],
    website: 'https://harmonicbeacon.com',
    links: [
      { label: 'harmonicbeacon.com', url: 'https://harmonicbeacon.com' },
    ],
    repos: [
      { label: 'web-beacon', url: 'https://github.com/SairaAsua/web-beacon' },
    ],
    status: 'App en validación',
  },
];

// ─── Connections ─────────────────────────────────────────────────────────────
// [sourceId, targetId]
export const ECO_CONNECTIONS = [
  ['networks', 'agro'],
  ['networks', 'libreincu'],
  ['networks', 'sai'],
  ['agro', 'libreincu'],
  ['agro', 'libreagro'],
  ['libreincu', 'libreagro'],
  ['sai', 'libreagro'],
  ['sai', 'wanda'],
  ['wanda', 'geas'],
  ['phideus', 'geas'],
  ['phideus', 'hit'],
  ['geas', 'hit'],
  ['hit', 'beacon'],
  ['phideus', 'beacon'],
];

// ─── Grid geometry constants (exported for EcoMesh) ──────────────────────────
export const HEX_W = 130;
export const HEX_H = 150;
export const COL_STEP = 138;
export const ROW1_OFFSET = 69;
export const ROW_STEP_Y = 110;

export function getHexPos(col, row) {
  return {
    left: col * COL_STEP + (row === 1 ? ROW1_OFFSET : 0),
    top: row * ROW_STEP_Y,
  };
}

export function getHexCenter(col, row) {
  const { left, top } = getHexPos(col, row);
  return { cx: left + HEX_W / 2, cy: top + HEX_H / 2 };
}

// Container dimensions
export const GRID_W = 4 * COL_STEP + ROW1_OFFSET + HEX_W + 4; // ~757
export const GRID_H = ROW_STEP_Y + HEX_H + 4;                  // ~264
