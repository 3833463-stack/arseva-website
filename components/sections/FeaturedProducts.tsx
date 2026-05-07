import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.filter((p) =>
    ["pro-max", "pro-max-carbon", "pro-relax-2", "eye-comfort-steam"].includes(p.id),
  );
  return (
    <Section className="!py-24 md:!py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Продукты</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display max-w-[20ch]">
                Главные модели линейки ARSEVA.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-ink-soft max-w-md text-[15px] leading-relaxed">
              Подобраны для разных задач: глубокая проработка тела, уход за ногами, расслабление зоны вокруг глаз и роликовый массаж.
            </p>
          </Reveal>
        </div>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
