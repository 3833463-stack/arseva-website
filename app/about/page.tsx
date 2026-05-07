import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";

export const metadata: Metadata = { title: "О бренде" };

const values = [
  { title: "Современный дизайн", body: "Спокойные формы и материалы, которые остаются актуальными." },
  { title: "Понятная польза", body: "Без лишних обещаний — техника, которая решает конкретные задачи." },
  { title: "Надежная сборка", body: "Внимание к деталям, материалам и долговечности." },
  { title: "Поддержка после покупки", body: "Команда ARSEVA на связи и помогает разобраться." },
];

export default function AboutPage() {
  return (
    <article className="pt-32 md:pt-40">
      <Section className="!py-10 md:!py-16">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>О бренде</Eyebrow>
              <h1 className="mt-5 text-display-xl font-display">
                ARSEVA — техника <br /> для восстановления <br /> и заботы о теле.
              </h1>
              <p className="mt-8 text-[17px] text-ink-soft leading-relaxed max-w-2xl">
                Мы создаем устройства, которые помогают людям заботиться о теле регулярно: после работы, спорта, долгого дня и повседневной нагрузки. В основе ARSEVA — современный дизайн, понятная польза, надежная сборка и поддержка после покупки.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ProductImage
                src={products.find((p) => p.id === "pro-max")?.images[0]}
                alt="ARSEVA Pro Max"
                category="percussion"
                accent="graphite"
                label="ARSEVA"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/5]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!py-20 bg-bone-50">
        <Container>
          <Eyebrow>Ценности</Eyebrow>
          <h2 className="mt-5 text-display-md font-display max-w-[18ch]">
            Что для нас важно в каждом устройстве.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bezel bg-bone-100 p-6">
                <div className="font-mono text-[11px] text-champagne-600">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg tracking-tight">{v.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="!py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-md font-display">
              Хотите узнать больше или подобрать модель?
            </h2>
            <div className="mt-8">
              <Button href={OZON_SELLER_URL} external size="lg" variant="champagne">
                Задать вопрос продавцу
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
