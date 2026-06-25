export const SITE = {
  name: "Estilo Gráfico",
  url: "https://www.estilografico.co",
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
    geo: {
      latitude: 6.2442,
      longitude: -75.5812,
    },
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

export const BUSINESS_ALTERNATE_NAMES = [
  "Estilo Grafico",
  "Estilo Grafico Medellin",
  "Litografía Medellín",
  "Litografia Medellin",
  "Imprenta Medellín",
] as const;

export const WHATSAPP_URL = SITE.whatsapp;

export function formatAddress(): string {
  return `${SITE.address.city}, ${SITE.address.region}, Colombia`;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function truncateDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  const cut =
    lastSpace > maxLength * 0.6 ? truncated.slice(0, lastSpace) : truncated;
  return `${cut.trimEnd()}...`;
}

export const PAGE_SEO = {
  home: {
    title: "Impresión Litográfica y Diseño Gráfico en Medellín",
    description:
      "Litografía e impresión gráfica en Medellín. Etiquetas, empaques, material impreso, gran formato y diseño. Cotiza con Estilo Gráfico.",
  },
  nosotros: {
    title: "Litografía en Medellín — Sobre Estilo Gráfico",
    description:
      "Conoce Estilo Gráfico: empresa de litografía e impresión en Medellín desde 2007. Calidad, creatividad e innovación para empresas y marcas.",
  },
} as const;

export function productSeoTitle(navLabel: string): string {
  return `${navLabel} en Medellín`;
}

export function productSeoH1(navLabel: string): string {
  return `${navLabel} en Medellín`;
}

export function productSeoDescription(description: string): string {
  const withLocation = description.includes("Medellín")
    ? description
    : `${description.replace(/\.$/, "")} en Medellín.`;
  return truncateDescription(withLocation);
}
