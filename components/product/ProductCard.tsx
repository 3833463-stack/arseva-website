"use client";
import Link from "next/link";
import { Star, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { buildOzonUrl } from "@/lib/ozon";
import { trackOzonClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  const dark = product.accent === "graphite";
  const ozonUrl = buildOzonUrl(product.ozonUrl, "product_card", product.id);

  function handleOzonClick() {
    trackOzonClick({ productId: product.id, productName: product.name, source: "product_card" });
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl",
        dark ? "bg-graphite-900 text-bone-100 bezel-dark" : "bg-bone-50 text-ink bezel",
        large ? "lg:col-span-2" : "",
      )}
    >
      <Link href={`/products/${product.slug}`} className="relative block">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          category={product.category}
          accent={product.accent}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn("aspect-square rounded-none rounded-t-3xl")}
        />
        {product.badge && (
          <span
            className={cn(
              "absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
              dark ? "bg-bone-100/90 text-graphite-900" : "bg-graphite-900 text-bone-100",
            )}
          >
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className={cn("text-[11px] uppercase tracking-[0.22em]", dark ? "text-bone-100/50" : "text-ink-muted")}>
            {product.category === "percussion" && "Перкуссионный"}
            {product.category === "neck" && "Шея и плечи"}
            {product.category === "foot" && "Для ног"}
            {product.category === "eye" && "Для глаз"}
            {product.category === "roller" && "Роликовый"}
            {product.category === "pro" && "Профессиональный"}
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 font-display text-2xl tracking-tight leading-tight">
              {product.name}
            </h3>
          </Link>
          <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-bone-100/65" : "text-ink-soft")}>
            {product.shortDescription}
          </p>
        </div>

        <ul className={cn("mt-1 grid grid-cols-2 gap-2 text-xs", dark ? "text-bone-100/60" : "text-ink-muted")}>
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-1.5">
              <span className="mt-1 h-1 w-1 rounded-full bg-current opacity-60" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 space-y-3">
          {/* Rating */}
          {product.rating ? (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Star size={13} className="text-champagne-500 fill-champagne-500" />
                <span className="font-medium">{product.rating.score}</span>
              </div>
              <span className={dark ? "text-bone-100/40" : "text-ink-muted"}>·</span>
              <span className={dark ? "text-bone-100/50" : "text-ink-muted"}>
                {product.rating.count.toLocaleString("ru-RU")} отзывов
              </span>
              {product.ratingSource === "ozon" && (
                <span className={cn("text-[10px] uppercase tracking-wide", dark ? "text-bone-100/30" : "text-ink-subtle")}>
                  Ozon
                </span>
              )}
            </div>
          ) : (
            <div className={cn("text-xs", dark ? "text-bone-100/40" : "text-ink-muted")}>
              Отзывы на Ozon
            </div>
          )}

          {/* Price label */}
          <div className={cn("text-xs", dark ? "text-bone-100/50" : "text-ink-muted")}>
            <ExternalLink size={11} className="inline mr-1 opacity-60" />
            {product.priceLabel ?? "Актуальная цена на Ozon"}
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-2">
            {ozonUrl ? (
              <a
                href={ozonUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOzonClick}
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 rounded-full px-4 h-10 text-[13px] font-medium transition",
                  dark
                    ? "bg-champagne-400 text-graphite-900 hover:bg-champagne-300"
                    : "bg-graphite-900 text-bone-100 hover:bg-graphite-800",
                )}
              >
                Купить на Ozon
              </a>
            ) : (
              <span className={cn(
                "inline-flex items-center justify-center rounded-full px-4 h-10 text-[13px] opacity-50 cursor-not-allowed",
                dark ? "bg-white/10 text-bone-100" : "bg-ink/10 text-ink",
              )}>
                Скоро на Ozon
              </span>
            )}
            <Button
              href={`/products/${product.slug}`}
              variant={dark ? "outline-dark" : "secondary"}
              size="sm"
              iconRight={<ArrowUpRight size={14} />}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
