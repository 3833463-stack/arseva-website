export type OzonSource =
  | "hero"
  | "catalog"
  | "product_card"
  | "product_page"
  | "quiz"
  | "sticky_mobile"
  | "reviews"
  | "final_cta"
  | "seller_chat"
  | "header"
  | "footer"
  | "b2b"
  | "warranty"
  | "contacts"
  | "about"
  | "delivery";

export type OzonCampaign = "direct_to_ozon" | "question_to_seller";

export function buildOzonUrl(
  baseUrl: string | null | undefined,
  source: OzonSource,
  productId?: string,
  campaign: OzonCampaign = "direct_to_ozon",
): string | null {
  if (!baseUrl) return null;
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", "arseva_site");
    url.searchParams.set("utm_medium", campaign === "question_to_seller" ? "seller_chat" : source);
    url.searchParams.set("utm_campaign", campaign);
    if (productId) {
      url.searchParams.set("utm_content", productId);
    }
    url.searchParams.set("utm_term", source);
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export function getSellerChatHref(product: {
  ozonSellerChatUrl?: string | null;
  ozonUrl?: string | null;
  ozonSellerUrl?: string | null;
}): string | null {
  return product.ozonSellerChatUrl || product.ozonUrl || product.ozonSellerUrl || null;
}
