export const WHATSAPP_URL = "https://wa.me/573216426377";

export interface Product {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  accent: string;
  number: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: "etiquetas-empaques",
    title: "Etiquetas y Empaquetado",
    navLabel: "Etiquetas y empaques",
    description:
      "Soluciones de etiquetas y empaquetado que destacan por su calidad y diseño. Perfectas para darle un toque profesional y atractivo a tus productos.",
    longDescription:
      "Nuestras soluciones de etiquetas y empaquetado combinan materiales premium con diseños que capturan la esencia de tu marca. Desde etiquetas adhesivas hasta empaques personalizados, cada pieza está pensada para destacar en el estante y conectar con tu audiencia.",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>`,
    color: "from-brand-500 to-brand-600",
    accent: "bg-brand-500/10 text-brand-600",
    number: "01",
    features: [
      "Etiquetas adhesivas y colgantes personalizadas",
      "Empaques con acabados premium",
      "Diseños que reflejan la identidad de tu marca",
      "Materiales resistentes para todo tipo de producto",
    ],
    faqs: [
      {
        q: "¿Qué tipos de etiquetas y empaquetado ofrecen?",
        a: "Ofrecemos una variedad de etiquetas adhesivas, etiquetas colgantes y empaques personalizados que se adaptan a las necesidades de tu producto, garantizando calidad y diseño atractivo.",
      },
      {
        q: "¿Pueden diseñar el empaque desde cero?",
        a: "Sí, nuestro equipo de diseño puede crear empaques y etiquetas completamente personalizados, desde el concepto inicial hasta la producción final.",
      },
    ],
  },
  {
    slug: "material-impreso",
    title: "Material Impreso Litográfico",
    navLabel: "Material Impreso litográfico",
    description:
      "Impresión de alta precisión para catálogos, revistas y papelería corporativa. Desde tarjetas de presentación hasta folletos con creatividad y precisión.",
    longDescription:
      "Ofrecemos una amplia gama de materiales impresos con técnicas litográficas de vanguardia. Tarjetas de presentación, folletos, catálogos y papelería corporativa con acabados que transmiten profesionalismo y calidad en cada detalle.",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
    color: "from-amber-500 to-orange-500",
    accent: "bg-amber-500/10 text-amber-600",
    number: "02",
    features: [
      "Tarjetas de presentación y papelería corporativa",
      "Folletos, catálogos y revistas",
      "Técnicas litográficas de alta precisión",
      "Acabados especiales: barniz, troquelado y más",
    ],
    faqs: [
      {
        q: "¿Qué materiales impresos pueden realizar?",
        a: "Podemos imprimir tarjetas de presentación, folletos, catálogos, flyers y más, utilizando técnicas avanzadas para asegurar una alta calidad en cada pieza.",
      },
      {
        q: "¿Cuál es el volumen mínimo de impresión?",
        a: "Trabajamos con pedidos de todos los tamaños, desde tirajes pequeños para emprendimientos hasta grandes volúmenes para empresas consolidadas.",
      },
    ],
  },
  {
    slug: "gran-formato",
    title: "Impresión a Gran Formato",
    navLabel: "Impresión a gran formato",
    description:
      "Avisos, pendones y vinilos de alto impacto visual. Ideal para afiches, banners y más, con una calidad que no pasa desapercibida.",
    longDescription:
      "Transforma tus ideas en grandes impresiones con nuestros servicios de impresión a gran formato. Afiches, banners, lonas y vinilos diseñados para captar la atención en exteriores e interiores, con colores vibrantes y durabilidad excepcional.",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
    color: "from-orange-500 to-yellow-400",
    accent: "bg-orange-500/10 text-orange-600",
    number: "03",
    features: [
      "Afiches y banners de gran escala",
      "Lonas y vinilos para exteriores",
      "Señalización y pendones publicitarios",
      "Instalación y montaje disponible",
    ],
    faqs: [
      {
        q: "¿Qué opciones de impresión a gran formato tienen disponibles?",
        a: "Ofrecemos impresiones a gran formato como afiches, banners, lonas y vinilos, ideales para publicidad y eventos, con una calidad que destaca a gran escala.",
      },
      {
        q: "¿Los materiales son resistentes al clima?",
        a: "Sí, contamos con materiales específicos para uso exterior que resisten la intemperie, manteniendo colores vibrantes por más tiempo.",
      },
    ],
  },
  {
    slug: "diseno-imagen",
    title: "Servicio de Diseño e Imagen",
    navLabel: "Servicio de Diseño e Imagen",
    description:
      "Creamos la identidad visual perfecta que conecta con tu audiencia. Desde logotipos hasta campañas completas, reflejando la esencia de tu marca.",
    longDescription:
      "Nuestro equipo de diseño está listo para crear soluciones visuales impactantes. Desarrollamos identidades de marca completas, logotipos, materiales promocionales y campañas visuales que comunican tu mensaje con claridad y creatividad.",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>`,
    color: "from-yellow-500 to-amber-600",
    accent: "bg-yellow-500/10 text-yellow-600",
    number: "04",
    features: [
      "Diseño de logotipos e identidad corporativa",
      "Materiales promocionales y publicitarios",
      "Campañas visuales integrales",
      "Asesoría creativa personalizada",
    ],
    faqs: [
      {
        q: "¿Qué incluye su servicio de diseño e imagen?",
        a: "Nuestro servicio de diseño e imagen incluye la creación de logotipos, identidad corporativa, diseño de materiales promocionales y campañas visuales completas, adaptadas a las necesidades de tu marca.",
      },
      {
        q: "¿Pueden trabajar con mi identidad de marca existente?",
        a: "Por supuesto. Podemos desarrollar nuevas piezas respetando tu manual de marca, o ayudarte a evolucionar y fortalecer tu identidad visual actual.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const generalFaqs = [
  {
    q: "¿Qué tipos de etiquetas y empaquetado ofrecen?",
    a: "Ofrecemos una variedad de etiquetas adhesivas, etiquetas colgantes y empaques personalizados que se adaptan a las necesidades de tu producto, garantizando calidad y diseño atractivo.",
  },
  {
    q: "¿Qué materiales impresos pueden realizar?",
    a: "Podemos imprimir tarjetas de presentación, folletos, catálogos, flyers y más, utilizando técnicas avanzadas para asegurar una alta calidad en cada pieza.",
  },
  {
    q: "¿Qué opciones de impresión a gran formato tienen disponibles?",
    a: "Ofrecemos impresiones a gran formato como afiches, banners, lonas y vinilos, ideales para publicidad y eventos, con una calidad que destaca a gran escala.",
  },
  {
    q: "¿Qué incluye su servicio de diseño e imagen?",
    a: "Nuestro servicio de diseño e imagen incluye la creación de logotipos, identidad corporativa, diseño de materiales promocionales y campañas visuales completas, adaptadas a las necesidades de tu marca.",
  },
];
