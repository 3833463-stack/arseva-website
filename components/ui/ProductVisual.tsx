import { cn } from "@/lib/cn";
import type { ProductCategory } from "@/data/products";

interface Props {
  category: ProductCategory;
  accent?: "graphite" | "champagne" | "bone";
  label?: string;
  className?: string;
  variant?: "full" | "thumb";
}

// Premium SVG product placeholders — silhouettes, no stock photos.
export function ProductVisual({ category, accent = "bone", label, className, variant = "full" }: Props) {
  const bg =
    accent === "graphite"
      ? "from-graphite-800 via-graphite-900 to-graphite-950 text-bone-100"
      : accent === "champagne"
        ? "from-bone-100 via-bone-200 to-champagne-300/40 text-ink"
        : "from-bone-50 via-bone-100 to-bone-200 text-ink";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bg-gradient-to-br",
        bg,
        "bezel grain",
        className,
      )}
    >
      {/* ambient highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full blur-3xl opacity-40"
        style={{
          background:
            accent === "graphite"
              ? "radial-gradient(closest-side, rgba(232,214,176,0.35), transparent)"
              : "radial-gradient(closest-side, rgba(255,255,255,0.9), transparent)",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center p-8">
        <Silhouette category={category} className={variant === "thumb" ? "h-32 w-32" : "h-56 w-56 md:h-72 md:w-72"} />
      </div>
      {label && (
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] opacity-70">
          <span>ARSEVA</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function Silhouette({ category, className }: { category: ProductCategory; className?: string }) {
  switch (category) {
    case "percussion":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <defs>
            <linearGradient id="pg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <rect x="78" y="20" width="44" height="58" rx="14" fill="url(#pg)" />
          <rect x="86" y="78" width="28" height="60" rx="10" fill="currentColor" opacity="0.85" />
          <rect x="80" y="138" width="40" height="46" rx="14" fill="currentColor" opacity="0.7" />
          <circle cx="100" cy="49" r="9" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "neck":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <path d="M30 110c0-30 30-50 70-50s70 20 70 50v18c0 14-10 22-22 22h-20c-12 0-18-8-18-18v-8c0-8-6-14-14-14h-12c-8 0-14 6-14 14v8c0 10-6 18-18 18H32c-12 0-22-8-22-22z" fill="currentColor" opacity="0.85" />
          <circle cx="65" cy="110" r="8" fill="currentColor" opacity="0.4" />
          <circle cx="135" cy="110" r="8" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "foot":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <rect x="20" y="60" width="160" height="100" rx="28" fill="currentColor" opacity="0.85" />
          <rect x="40" y="80" width="50" height="60" rx="14" fill="currentColor" opacity="0.45" />
          <rect x="110" y="80" width="50" height="60" rx="14" fill="currentColor" opacity="0.45" />
          <circle cx="100" cy="170" r="6" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <rect x="14" y="70" width="172" height="70" rx="34" fill="currentColor" opacity="0.9" />
          <circle cx="64" cy="105" r="14" fill="currentColor" opacity="0.4" />
          <circle cx="136" cy="105" r="14" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "roller":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <rect x="20" y="84" width="160" height="32" rx="16" fill="currentColor" opacity="0.85" />
          <circle cx="40" cy="100" r="20" fill="currentColor" opacity="0.5" />
          <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.5" />
          <circle cx="160" cy="100" r="20" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "pro":
      return (
        <svg viewBox="0 0 200 200" className={cn("product-shadow", className)} fill="none">
          <rect x="40" y="40" width="120" height="120" rx="24" fill="currentColor" opacity="0.8" />
          <rect x="60" y="60" width="80" height="14" rx="6" fill="currentColor" opacity="0.4" />
          <rect x="60" y="86" width="50" height="10" rx="5" fill="currentColor" opacity="0.4" />
          <rect x="60" y="120" width="80" height="20" rx="8" fill="currentColor" opacity="0.5" />
        </svg>
      );
  }
}
