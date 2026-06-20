export const SITE = {
  name: "Estilo Gráfico",
  url: "https://estilo-grafico.com",
  locale: "es_CO",
  description:
    "Litografía e impresión gráfica en Medellín. Etiquetas, empaques, material impreso, gran formato y diseño profesional. Cotiza hoy.",
  email: "marketingestilografico@gmail.com",
  phone: "+57 321 642 6377",
  whatsapp: "https://wa.me/573216426377",
  founded: 2007,
  address: {
    city: "Medellín",
    region: "Antioquia",
    country: "CO",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/Estilo-gr%C3%A1fico/61572260665014/",
    instagram: "https://www.instagram.com/estilografico__",
  },
  defaultOgImage: "/og-image.jpg",
  logo: "/HorizontalLogo.png",
  themeColor: "#212120",
} as const;

export const WHATSAPP_URL = SITE.whatsapp;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function truncateDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

export const PAGE_SEO = {
  home: {
    title: "Impresión Litográfica y Diseño Gráfico en Medellín",
    description:
      "Litografía e impresión gráfica en Medellín. Etiquetas, empaques, material impreso, gran formato y diseño. Cotiza con Estilo Gráfico.",
  },
  nosotros: {
    title: "Sobre Nosotros — Litografía en Medellín",
    description:
      "Conoce Estilo Gráfico: litografía e impresión en Medellín desde 2007. Calidad, creatividad e innovación para empresas y marcas.",
  },
} as const;

export function productSeoTitle(navLabel: string): string {
  return `${navLabel} en Medellín`;
}

export function productSeoDescription(description: string): string {
  const withLocation = description.includes("Medellín")
    ? description
    : `${description.replace(/\.$/, "")} en Medellín.`;
  return truncateDescription(withLocation);
}
