export { WHATSAPP_URL } from "./site";

export interface Subcategory {
  title: string;
  description: string;
}

export type ProductSlug =
  | "etiquetas-empaques"
  | "material-impreso"
  | "gran-formato"
  | "diseno-imagen";

export interface Product {
  slug: ProductSlug;
  title: string;
  navLabel: string;
  description: string;
  longDescription: string;
  color: string;
  accent: string;
  number: string;
  features: string[];
  subcategories?: Subcategory[];
  faqs: { q: string; a: string }[];
  ctaHeadline?: string;
  ctaSubtext?: string;
}

export const products: Product[] = [
  {
    slug: "etiquetas-empaques",
    title: "Etiquetas y Empaquetado Personalizadas",
    navLabel: "Etiquetas y empaques",
    description:
      "Descubre nuestras soluciones de etiquetas y empaquetado diseñadas para destacar tus productos. Ofrecemos una amplia gama de opciones personalizadas que combinan calidad y creatividad.",
    longDescription:
      "Descubre nuestras soluciones de etiquetas y empaquetado diseñadas para destacar tus productos. Ofrecemos una amplia gama de opciones personalizadas que combinan calidad y creatividad, desde bolsas y cajas hasta etiquetas adhesivas y en papel.",
    color: "from-brand-500 to-brand-600",
    accent: "text-brand-600",
    number: "01",
    ctaHeadline:
      "¿Interesado en nuestras soluciones de etiquetas y empaquetado?",
    ctaSubtext:
      "Contáctanos hoy mismo y descubre cómo podemos ayudarte a destacar tus productos.",
    features: [
      "Bolsas personalizadas en diversos tamaños y diseños",
      "Cajas adaptadas a las necesidades de tu producto",
      "Etiquetas adhesivas en diferentes materiales y acabados",
      "Etiquetas en papel de alta calidad y presentación",
    ],
    subcategories: [
      {
        title: "Bolsas",
        description:
          "Nuestras bolsas personalizadas son ideales para empaquetar productos pequeños con estilo y seguridad. Disponibles en diversos tamaños y diseños.",
      },
      {
        title: "Cajas",
        description:
          "Ofrecemos cajas personalizadas que se adaptan a las necesidades de tu producto, garantizando protección y una presentación atractiva.",
      },
      {
        title: "Etiquetas Adhesivas",
        description:
          "Nuestras etiquetas adhesivas son perfectas para identificar y decorar tus productos. Disponibles en diferentes materiales y acabados.",
      },
      {
        title: "Etiquetas en Papel",
        description:
          "Ofrecemos etiquetas en papel de alta calidad, ideales para una presentación elegante y profesional de tus productos.",
      },
    ],
    faqs: [
      {
        q: "¿Qué materiales utilizan para las etiquetas adhesivas?",
        a: "Utilizamos materiales de alta calidad como papel, vinilo y poliéster, garantizando durabilidad y una excelente presentación.",
      },
      {
        q: "¿Pueden personalizar las cajas según mis necesidades?",
        a: "Sí, ofrecemos cajas personalizadas en diversos tamaños y diseños para adaptarse a las necesidades específicas de tu producto.",
      },
      {
        q: "¿Cuál es el proceso para realizar un pedido?",
        a: "Para realizar un pedido, simplemente contáctanos a través de nuestra zona de contacto o llámanos. Nuestro equipo te guiará en cada paso, desde la selección del producto hasta la personalización y el envío.",
      },
      {
        q: "¿Ofrecen descuentos por pedidos al por mayor?",
        a: "Sí, ofrecemos descuentos especiales para pedidos al por mayor. Contáctanos para obtener más información sobre nuestras tarifas y cómo podemos adaptarnos a tus necesidades.",
      },
    ],
  },
  {
    slug: "material-impreso",
    title: "Soluciones de Material Impreso de Alta Calidad",
    navLabel: "Material Impreso litográfico",
    description:
      "Explora nuestras soluciones de material impreso diseñadas para satisfacer todas tus necesidades de comunicación visual. Ofrecemos una amplia gama de productos impresos con la mejor calidad y precisión.",
    longDescription:
      "Explora nuestras soluciones de material impreso diseñadas para satisfacer todas tus necesidades de comunicación visual. Ofrecemos una amplia gama de productos impresos con la mejor calidad y precisión, desde catálogos y libros hasta flyers y tarjetas de presentación.",
    color: "from-amber-500 to-orange-500",
    accent: "text-amber-600",
    number: "02",
    ctaHeadline: "¿Interesado en nuestras soluciones de material impreso?",
    ctaSubtext:
      "Contáctanos hoy mismo y descubre cómo podemos ayudarte a comunicar tu mensaje de manera efectiva.",
    features: [
      "Catálogos personalizados con papeles de alta calidad",
      "Impresión de libros con acabados profesionales",
      "Brochures informativos en diferentes tamaños y formatos",
      "Carpetas personalizadas que combinan funcionalidad y diseño",
      "Plegables impresos de alta calidad",
      "Flyers con colores vibrantes y materiales duraderos",
      "Tarjetas de presentación personalizadas",
    ],
    subcategories: [
      {
        title: "Catálogos",
        description:
          "Nuestros catálogos personalizados son perfectos para mostrar tus productos y servicios con detalle y elegancia. Utilizamos papeles de alta calidad y técnicas de impresión avanzadas para asegurar que cada página refleje profesionalismo y atractivo visual.",
      },
      {
        title: "Libros",
        description:
          "Ofrecemos servicios de impresión de libros con acabados profesionales, ideales para autores y editoriales que buscan calidad y durabilidad. Desde novelas hasta manuales técnicos, garantizamos una presentación impecable y resistente al uso.",
      },
      {
        title: "Brochures",
        description:
          "Creamos brochures informativos y atractivos que comunican tu mensaje de manera efectiva. Disponibles en diferentes tamaños y formatos, nuestros brochures son perfectos para presentaciones corporativas, eventos y promociones.",
      },
      {
        title: "Carpetas",
        description:
          "Nuestras carpetas personalizadas son ideales para presentaciones y almacenamiento de documentos, combinando funcionalidad y diseño. Ofrecemos una variedad de materiales y acabados para asegurar que tus carpetas reflejen la identidad de tu marca.",
      },
      {
        title: "Plegables",
        description:
          "Ofrecemos plegables impresos de alta calidad, perfectos para folletos informativos y promocionales. Nuestros plegables están diseñados para ser fáciles de manejar y atractivos, asegurando que tu mensaje llegue de manera clara y efectiva.",
      },
      {
        title: "Flyers",
        description:
          "Los flyers impresos son una herramienta eficaz para promocionar eventos y ofertas especiales. Disponibles en varios tamaños y diseños, nuestros flyers están impresos con colores vibrantes y materiales duraderos para captar la atención de tu audiencia.",
      },
      {
        title: "Tarjetas de Presentación",
        description:
          "Nuestras tarjetas de presentación personalizadas son ideales para causar una excelente primera impresión. Disponibles en diversos acabados y materiales, nuestras tarjetas combinan diseño elegante y calidad superior para representar tu marca de manera profesional.",
      },
    ],
    faqs: [
      {
        q: "¿Qué tipos de papel utilizan para el material impreso?",
        a: "Utilizamos una variedad de papeles de alta calidad, incluyendo papel couché, papel reciclado y papeles especiales con diferentes acabados.",
      },
      {
        q: "¿Pueden ayudarme con el diseño de mis materiales impresos?",
        a: "Sí, contamos con un equipo de diseño gráfico que puede ayudarte a crear diseños personalizados y atractivos para tus materiales impresos.",
      },
      {
        q: "¿Cuál es el tiempo de entrega para los materiales impresos?",
        a: "El tiempo de entrega varía según la complejidad y cantidad del pedido, pero generalmente oscila entre 5 y 7 días hábiles. Nos esforzamos por garantizar que recibas tus productos a tiempo y con la mejor calidad.",
      },
      {
        q: "¿Ofrecen servicios de impresión urgente?",
        a: "Sí, ofrecemos servicios de impresión urgente para aquellos proyectos que requieren una entrega rápida. Contáctanos para más detalles y disponibilidad.",
      },
    ],
  },
  {
    slug: "gran-formato",
    title: "Impresión y Avisos Gran Formato que Impactan",
    navLabel: "Impresión a gran formato",
    description:
      "Descubre nuestras soluciones de impresión a gran formato diseñadas para captar la atención y comunicar tu mensaje de manera efectiva. Ofrecemos una amplia gama de productos de alta calidad que destacan a gran escala.",
    longDescription:
      "Descubre nuestras soluciones de impresión a gran formato diseñadas para captar la atención y comunicar tu mensaje de manera efectiva. Ofrecemos una amplia gama de productos de alta calidad que destacan a gran escala, desde vallas y avisos luminosos hasta vinilos comerciales y vehiculares.",
    color: "from-orange-500 to-yellow-400",
    accent: "text-orange-600",
    number: "03",
    ctaHeadline:
      "¿Interesado en nuestras soluciones de impresión a gran formato?",
    ctaSubtext:
      "Contáctanos hoy mismo y descubre cómo podemos ayudarte a captar la atención con impresiones de alta calidad.",
    features: [
      "Vallas publicitarias de alto impacto",
      "Avisos luminosos con tecnología LED",
      "Avisos luminosos Neoflex flexibles y modernos",
      "Señalización personalizada para tu negocio",
      "Vinilo comercial versátil y económico",
      "Vinilo vehicular para marketing móvil",
    ],
    subcategories: [
      {
        title: "Vallas",
        description:
          "Las vallas publicitarias son una herramienta poderosa para captar la atención de tu audiencia. Con nuestras vallas de alta calidad, tu mensaje será visible desde lejos, garantizando una exposición continua y efectiva. Ideales para campañas publicitarias de gran impacto.",
      },
      {
        title: "Avisos luminosos",
        description:
          "Los avisos luminosos son perfectos para destacar tu negocio, incluso en la oscuridad. Utilizamos tecnología LED de última generación para asegurar que tu marca brille con intensidad y claridad, atrayendo a clientes potenciales tanto de día como de noche.",
      },
      {
        title: "Avisos luminosos Neoflex",
        description:
          "Los avisos luminosos Neoflex combinan la flexibilidad del neón con la eficiencia del LED. Estos avisos son ideales para crear diseños únicos y llamativos que capturan la esencia de tu marca, ofreciendo una solución moderna y duradera para tu señalización.",
      },
      {
        title: "Señalización",
        description:
          "La señalización adecuada es esencial para guiar a tus clientes y mejorar la experiencia en tu negocio. Ofrecemos una amplia gama de opciones de señalización personalizadas que no solo cumplen con su función informativa, sino que también refuerzan la identidad visual de tu marca.",
      },
      {
        title: "Vinilo comercial",
        description:
          "El vinilo comercial es una opción versátil y económica para promocionar tu negocio. Desde escaparates hasta paredes interiores, nuestros vinilos de alta calidad pueden transformar cualquier superficie en un espacio publicitario atractivo y profesional.",
      },
      {
        title: "Vinilo vehicular",
        description:
          "Convierte tu vehículo en una herramienta de marketing móvil con nuestros vinilos vehiculares. Diseñados para resistir las condiciones más exigentes, estos vinilos garantizan que tu mensaje llegue a una audiencia amplia mientras te desplazas por la ciudad.",
      },
    ],
    faqs: [
      {
        q: "¿Qué materiales utilizan para las impresiones a gran formato?",
        a: "Utilizamos materiales de alta calidad como lona, vinilo, papel fotográfico y tela, garantizando durabilidad y una excelente presentación.",
      },
      {
        q: "¿Pueden imprimir en tamaños personalizados?",
        a: "Sí, ofrecemos impresiones a gran formato en tamaños personalizados para adaptarse a las necesidades específicas de tu proyecto.",
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito, transferencias bancarias y pagos en efectivo. Contáctanos para más detalles sobre las opciones disponibles.",
      },
      {
        q: "¿Ofrecen servicios de envío?",
        a: "Sí, ofrecemos servicios de envío a nivel local y nacional. Trabajamos con empresas de mensajería confiables para asegurar que tus productos lleguen a tiempo y en perfectas condiciones.",
      },
    ],
  },
  {
    slug: "diseno-imagen",
    title: "Creatividad y Diseño a tu Alcance",
    navLabel: "Servicio de Diseño e Imagen",
    description:
      "Descubre nuestros servicios de diseño e imagen, creados para dar vida a tus ideas y fortalecer la identidad de tu marca. Ofrecemos soluciones integrales que combinan creatividad y tecnología avanzada.",
    longDescription:
      "Descubre nuestros servicios de diseño e imagen, creados para dar vida a tus ideas y fortalecer la identidad de tu marca. Ofrecemos soluciones integrales que combinan creatividad y tecnología avanzada, desde logotipos e identidad corporativa hasta fotografía, video y diseño web.",
    color: "from-yellow-500 to-amber-600",
    accent: "text-yellow-600",
    number: "04",
    ctaHeadline: "¿Interesado en nuestros servicios de diseño e imagen?",
    ctaSubtext:
      "Contáctanos hoy mismo y descubre cómo podemos ayudarte a dar vida a tus ideas y fortalecer la identidad de tu marca.",
    features: [
      "Creación de logotipos profesionales",
      "Identidad corporativa completa",
      "Diseño de materiales promocionales",
      "Campañas visuales integrales",
      "Fotografía profesional de alta calidad",
      "Videos promocionales y corporativos",
      "Diseño de página web atractivo y funcional",
    ],
    subcategories: [
      {
        title: "Afiches",
        description:
          "Nuestros afiches a gran formato son ideales para publicidad y eventos, garantizando una impresión de alta calidad y durabilidad.",
      },
      {
        title: "Banners",
        description:
          "Ofrecemos banners personalizados que son perfectos para promociones y señalización, disponibles en diversos tamaños y materiales.",
      },
      {
        title: "Lonas",
        description:
          "Nuestras lonas impresas son resistentes y versátiles, ideales para exteriores e interiores, con una calidad de impresión excepcional.",
      },
      {
        title: "Vinilos",
        description:
          "Los vinilos a gran formato son perfectos para decoración y publicidad, ofreciendo una excelente adherencia y durabilidad.",
      },
      {
        title: "Fotografía profesional",
        description:
          "Captura la esencia de tu marca con nuestra fotografía profesional. Ya sea para productos, eventos o retratos corporativos, nuestras imágenes de alta calidad te ayudarán a destacar y a comunicar tu mensaje de manera efectiva. Confía en nosotros para obtener fotos que impresionen y atraigan a tu audiencia.",
      },
      {
        title: "Videos promocionales y corporativos",
        description:
          "Los videos son una herramienta poderosa para contar la historia de tu marca. Ofrecemos servicios de producción de videos promocionales y corporativos que capturan la atención y transmiten tu mensaje de manera clara y atractiva. Desde la conceptualización hasta la edición final, nos encargamos de todo el proceso para que puedas enfocarte en tu negocio.",
      },
      {
        title: "Diseño de página web",
        description:
          "Una página web bien diseñada es esencial para cualquier negocio en la era digital. Nuestro equipo de expertos en diseño web creará un sitio atractivo, funcional y optimizado para dispositivos móviles que refleje la identidad de tu marca y mejore la experiencia del usuario. Aumenta tu presencia en línea y atrae a más clientes con una página web profesional.",
      },
    ],
    faqs: [
      {
        q: "¿Qué incluye el servicio de creación de logotipos?",
        a: "Nuestro servicio de creación de logotipos incluye varias propuestas de diseño, revisiones ilimitadas hasta la aprobación final y la entrega de archivos en diferentes formatos para su uso en diversos medios.",
      },
      {
        q: "¿Pueden trabajar con mi equipo de marketing para desarrollar una campaña visual?",
        a: "Sí, colaboramos estrechamente con tu equipo de marketing para desarrollar campañas visuales que se alineen con tus objetivos y estrategias, asegurando un resultado cohesivo y efectivo.",
      },
      {
        q: "¿Ofrecen servicios de rediseño de logotipos existentes?",
        a: "Sí, ofrecemos servicios de rediseño para actualizar y modernizar logotipos existentes, manteniendo la esencia de tu marca mientras mejoramos su apariencia y funcionalidad.",
      },
      {
        q: "¿Cuál es el tiempo de entrega para los proyectos de diseño?",
        a: "El tiempo de entrega varía según la complejidad del proyecto, pero generalmente oscila entre 1 y 3 semanas. Nos aseguramos de cumplir con los plazos acordados sin comprometer la calidad del diseño.",
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
