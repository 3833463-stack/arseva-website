"use client";
import { useState } from "react";
import { ProductImage } from "@/components/ui/ProductImage";
import { cn } from "@/lib/cn";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const imgs = product.images.length > 0 ? product.images : [undefined, undefined, undefined, undefined];
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImage
        src={imgs[active]}
        alt={product.name}
        category={product.category}
        accent={product.accent}
        label={product.shortName}
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="aspect-[3/4] shadow-lift"
      />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-2xl transition-all",
              active === i ? "ring-2 ring-graphite-900 ring-offset-2 ring-offset-bone-100" : "opacity-80 hover:opacity-100",
            )}
            aria-label={`Фото ${i + 1}`}
          >
            <ProductImage
              src={src}
              alt={`${product.name} фото ${i + 1}`}
              category={product.category}
              accent={i % 2 === 0 ? product.accent : "bone"}
              variant="thumb"
              sizes="20vw"
              className="absolute inset-0"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
