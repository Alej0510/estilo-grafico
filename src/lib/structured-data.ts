import { SITE, absoluteUrl } from "../data/site";
import { products } from "../data/products";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PrintShop"],
    name: SITE.name,
    alternateName: ["Estilo Grafico", "Estilo Grafico Medellin"],
    description: SITE.description,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.defaultOgImage),
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: {
      "@type": "City",
      name: SITE.address.city,
    },
    foundingDate: String(SITE.founded),
    sameAs: [SITE.social.facebook, SITE.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de litografía e impresión",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: product.navLabel,
          description: product.description,
          url: absoluteUrl(`/productos/${product.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: ["Estilo Grafico"],
    url: SITE.url,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: SITE.address.city,
    },
  };
}
