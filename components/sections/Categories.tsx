import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { categories, products } from "@/data/products";

const order: { key: keyof typeof categories; size: "lg" | "md" | "sm" | "xl"; accent: "graphite" | "champagne" | "bone" }[] = [
  { key: "percussion", size: "xl", accent: "graphite" },
  { key: "neck", size: "md", accent: "champagne" },
  { key: "foot", size: "md", accent: "bone" },
  { key: "eye", size: "lg", accent: "bone" },
  { key: "roller", size: "lg", accent: "champagne" },
  { key: "pro", size: "lg", accent: "graphite" },
];

const sizeClass: Record<string, string> = {
  xl: "md:col-span-7 md:row-span-2 min-h-[520px]",
  lg: "md:col-span-5 min-h-[320px]",
  md: "md:col-span-5 min-h-[260px]",
  sm: "md:col-span-3",
};

export function Categories() {
  return (
    <Section id="categories" className="!py-24 md:!py-32 bg-bone-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Каталог</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display max-w-[18ch]">
                Категории, собранные вокруг вашего ритуала.
              </h2>
            </Reveal>
          </div>
          <Link href="/catalog" className="text-sm inline-flex items-center gap-1 hover:text-champagne-600 transition">
            Все категории <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {order.map(({ key, size, accent }) => {
            const c = categories[key];
            const sample = products.find((p) => p.category === key);
            return (
              <Reveal key={key} className={`relative ${sizeClass[size]}`}>
                <Link
                  href={`/catalog?cat=${c.slug}`}
                  className={`group relative h-full block overflow-hidden rounded-3xl ${accent === "graphite" ? "bezel-dark" : "bezel"}`}
                >
                  <ProductImage
                    src={sample?.images[0]}
                    alt={c.label}
                    category={key as any}
                    accent={accent}
                    label={c.label}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full rounded-none"
                  />
                  <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 ${accent === "graphite" ? "text-bone-100" : "text-ink"}`}>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight">{c.label}</h3>
                    <p className={`mt-2 text-sm max-w-md ${accent === "graphite" ? "text-bone-100/70" : "text-ink-soft"}`}>
                      {c.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm">
                      Смотреть модели
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
