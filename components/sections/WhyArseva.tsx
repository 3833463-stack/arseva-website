import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductImage } from "@/components/ui/ProductImage";
import { products } from "@/data/products";

const points = [
  { num: "01", title: "Продуманная эргономика", body: "Корпус, баланс и ручка — для удобного длительного использования." },
  { num: "02", title: "Надежная сборка", body: "Аккуратное исполнение и материалы, которые сохраняют вид со временем." },
  { num: "03", title: "Современный дизайн", body: "Спокойные формы, графит и шампань — техника, которой не стыдно на полке." },
  { num: "04", title: "Удобное управление", body: "Понятные режимы, без перегруженных меню и скрытых функций." },
  { num: "05", title: "Поддержка после покупки", body: "Команда ARSEVA поможет разобраться и подсказать дальнейшие шаги." },
  { num: "06", title: "Гарантия до 2 лет", body: "Расширенная гарантия и помощь по гарантийным случаям." },
];

export function WhyArseva() {
  return (
    <Section className="!py-24 md:!py-32 bg-bone-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-16">
          <div className="lg:col-span-6">
            <Eyebrow>Почему ARSEVA</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display max-w-[16ch]">
                Спокойная инженерия для регулярного ритуала.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[17px] text-ink-soft leading-relaxed">
              Мы делаем технику, которая остается с человеком надолго: ее удобно держать в руках, удобно убирать на полку и удобно использовать каждый день. Без визуального шума и сложных настроек.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full rounded-3xl overflow-hidden bezel">
              <ProductImage
                src={products.find((p) => p.id === "pro-max-carbon")?.images[0]}
                alt="ARSEVA Pro Max Carbon"
                category="percussion"
                accent="graphite"
                label="Engineering"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/5] lg:aspect-auto lg:h-full rounded-none"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <Reveal key={p.num}>
                <div className="h-full rounded-2xl bezel bg-bone-100 p-6">
                  <div className="font-mono text-[11px] text-champagne-600">{p.num}</div>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
