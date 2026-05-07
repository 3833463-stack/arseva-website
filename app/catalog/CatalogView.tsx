"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { categories, products, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/cn";

const filters: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "Все товары" },
  { key: "percussion", label: "Перкуссионные" },
  { key: "neck", label: "Шея и плечи" },
  { key: "foot", label: "Для ног" },
  { key: "eye", label: "Для глаз" },
  { key: "roller", label: "Роликовые" },
  { key: "pro", label: "Профессиональные" },
];

export function CatalogView() {
  const params = useSearchParams();
  const initial = (params.get("cat") as ProductCategory | null) ?? "all";
  const [active, setActive] = useState<ProductCategory | "all">(initial);
  useEffect(() => {
    const c = params.get("cat") as ProductCategory | null;
    if (c) setActive(c);
  }, [params]);
  const list = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <Container>
        <div className="mb-12">
          <Eyebrow>Каталог</Eyebrow>
          <h1 className="mt-5 text-display-lg font-display max-w-[20ch]">
            Техника ARSEVA для регулярного ухода.
          </h1>
          <p className="mt-6 text-[17px] text-ink-soft max-w-2xl leading-relaxed">
            Подберите устройство под задачу: глубокая проработка тела, уход за ногами, расслабление зоны вокруг глаз и роликовый массаж.
          </p>
        </div>

        <div className="sticky top-24 z-30 mb-10">
          <div className="rounded-full bg-bone-100/80 backdrop-blur-xl bezel p-1.5 inline-flex flex-wrap gap-1 max-w-full overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  "px-4 h-9 rounded-full text-[13px] whitespace-nowrap transition-all",
                  active === f.key ? "bg-graphite-900 text-bone-100" : "text-ink-soft hover:text-ink",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {active !== "all" && (
          <div className="mb-8 text-ink-soft max-w-xl">{categories[active].description}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {list.length === 0 && (
          <div className="py-20 text-center text-ink-muted">В этой категории товаров пока нет — скоро появятся.</div>
        )}
      </Container>
    </div>
  );
}
