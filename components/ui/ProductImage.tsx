"use client";
import { useState } from "react";
import { ProductVisual } from "./ProductVisual";
import { cn } from "@/lib/cn";
import type { ProductCategory } from "@/data/products";

interface Props {
  src?: string;
  alt: string;
  category: ProductCategory;
  accent?: "graphite" | "champagne" | "bone";
  label?: string;
  className?: string;
  imageClassName?: string;
  variant?: "full" | "thumb";
  priority?: boolean;
  sizes?: string;
}

export function ProductImage({
  src,
  alt,
  category,
  accent = "bone",
  label,
  className,
  imageClassName,
  variant = "full",
  priority,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <ProductVisual
        category={category}
        accent={accent}
        label={label}
        className={className}
        variant={variant}
      />
    );
  }

  const bg =
    accent === "graphite"
      ? "from-graphite-800 via-graphite-900 to-graphite-950"
      : accent === "champagne"
        ? "from-bone-100 via-bone-200 to-champagne-300/40"
        : "from-bone-50 via-bone-100 to-bone-200";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bezel bg-gradient-to-br",
        bg,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setErrored(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-contain p-3 md:p-5 product-shadow",
          imageClassName,
        )}
      />
      {label && (
        <div
          className={cn(
            "absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] z-10",
            accent === "graphite" ? "text-bone-100/70" : "text-ink-muted",
          )}
        >
          <span>ARSEVA</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
