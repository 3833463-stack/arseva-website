import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OZON_URL, OZON_SELLER_URL } from "@/data/nav";

export const metadata: Metadata = { title: "Доставка и оплата" };

const blocks = [
  { title: "Доставка по России", body: "Доставка в крупные города и регионы. Сроки и тарифы зависят от выбранного способа." },
  { title: "Покупка на Ozon", body: "Все товары ARSEVA представлены на Ozon с доставкой и поддержкой площадки." },
  { title: "Консультация перед покупкой", body: "Поможем выбрать модель — задайте вопрос продавцу на Ozon." },
  { title: "Гарантийное обслуживание", body: "Расширенная гарантия до 2 лет. Поддержка после покупки." },
  { title: "Возврат", body: "Возврат осуществляется согласно правилам площадки Ozon, на которой совершена покупка." },
];

export default function DeliveryPage() {
  return (
    <article className="pt-32 md:pt-40">
      <Section className="!py-10 md:!py-16">
        <Container>
          <Eyebrow>Доставка и оплата</Eyebrow>
          <h1 className="mt-5 text-display-xl font-display max-w-[20ch]">
            Удобные способы получить ARSEVA.
          </h1>
          <p className="mt-6 text-[17px] text-ink-soft max-w-2xl leading-relaxed">
            Покупайте на Ozon или задайте вопрос продавцу — мы поможем подобрать подходящую модель и подскажем удобный способ доставки.
          </p>
        </Container>
      </Section>

      <Section className="!py-16 bg-bone-50">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blocks.map((b) => (
              <div key={b.title} className="rounded-2xl bezel bg-bone-100 p-6">
                <h3 className="font-display text-xl tracking-tight">{b.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="!py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-display-md font-display">Остались вопросы?</h2>
            <p className="mt-4 text-bone-100/70">
              Задайте вопрос продавцу на Ozon — поможем выбрать модель, расскажем про сроки и оплату.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={OZON_SELLER_URL} external variant="champagne" size="lg">Задать вопрос продавцу</Button>
              <Button href={OZON_URL} external variant="outline-dark" size="lg">Купить на Ozon</Button>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
