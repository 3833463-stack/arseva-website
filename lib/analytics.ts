export type AnalyticsEvent =
  | "ozon_click_product_card"
  | "ozon_click_product_page"
  | "ozon_click_quiz_recommendation"
  | "ozon_click_sticky_mobile"
  | "ozon_click_hero"
  | "ozon_click_final_cta"
  | "ozon_seller_chat_click"
  | "seller_question_click"
  | "ozon_seller_page_click"
  | "review_click_ozon";

interface TrackOzonClickParams {
  productId: string;
  productName: string;
  source: "product_card" | "product_page" | "quiz" | "hero" | "sticky_mobile_cta" | "final_cta";
}

export function trackOzonClick({ productId, productName, source }: TrackOzonClickParams) {
  const eventMap: Record<string, AnalyticsEvent> = {
    product_card: "ozon_click_product_card",
    product_page: "ozon_click_product_page",
    quiz: "ozon_click_quiz_recommendation",
    hero: "ozon_click_hero",
    sticky_mobile_cta: "ozon_click_sticky_mobile",
    final_cta: "ozon_click_final_cta",
  };
  const event = eventMap[source];
  logEvent(event, { productId, productName, source });
}

interface TrackSellerChatClickParams {
  productId?: string;
  productName?: string;
  source: "header" | "hero" | "product_card" | "product_page" | "quiz" | "b2b" | "footer" | "warranty" | "contacts" | "about" | "delivery" | "final_cta" | "sticky_mobile_cta";
}

export function trackSellerChatClick({ productId, productName, source }: TrackSellerChatClickParams) {
  logEvent("seller_question_click", {
    ...(productId ? { productId } : {}),
    ...(productName ? { productName } : {}),
    source,
  });
}

export function trackReviewClick(productId: string) {
  logEvent("review_click_ozon", { productId });
}

function logEvent(event: AnalyticsEvent, params: Record<string, string>) {
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", event, params);
  }

  // Яндекс.Метрика
  // if (typeof window !== "undefined" && (window as any).ym) {
  //   (window as any).ym(METRIKA_ID, "reachGoal", event, params);
  // }

  // VK Pixel
  // if (typeof window !== "undefined" && (window as any).VK) {
  //   (window as any).VK.Goal(event, params);
  // }

  // Google Analytics 4
  // if (typeof window !== "undefined" && (window as any).gtag) {
  //   (window as any).gtag("event", event, params);
  // }
}
