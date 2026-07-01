import { products } from "../data/products";

const WHATSAPP_NUMBER = "573216426377";

const GENERAL_MESSAGE =
  "Hola Estilo Gráfico 👋 Vi su sitio web y me gustaría recibir más información. ¿Me pueden ayudar?";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productFromPath(pathname: string) {
  const match = pathname.match(/^\/productos\/([^/]+)/);
  if (!match) return undefined;
  return products.find((p) => p.slug === match[1]);
}

export function getWhatsAppMessage(
  pathname = "/",
  productName?: string,
): string {
  const product = productFromPath(pathname);
  const label = productName ?? product?.navLabel;

  if (product && label) {
    return `Hola Estilo Gráfico 👋, me interesa cotizar ${label}. ¿Me pueden ayudar?`;
  }

  return GENERAL_MESSAGE;
}

export function whatsappUrl(pathname = "/", productName?: string): string {
  return buildWhatsAppUrl(getWhatsAppMessage(pathname, productName));
}
