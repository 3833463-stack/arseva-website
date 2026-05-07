import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";

export const metadata: Metadata = { title: "ARSEVA для бизнеса" };

const audience = [
  { title: "Массажные кабинеты", body: "Техника для регулярной работы с клиентами." },
  { title: "Фитнес-клубы", body: "Восстановление участников после тренировок." },
  { title: "Салоны красоты", body: "Дополнение к процедурам и уходу." },
  { title: "Студии восстановления", body: "Оборудование для wellness-программ." },
  { title: "Корпоративные клиенты", body: "Подарки сотрудникам и партнерам." },
  { title: "Оптовые партнеры", body: "Поставки в розницу и онлайн-площадки." },
];

export default function B2BPage() {
  return (
    <article className="pt-32 md:pt-40">
      <Section className="!py-10 md:!py-16">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>B2B</Eyebrow>
              <h1 className="mt-5 text-display-xl font-display">
                ARSEVA для бизнеса.
              </h1>
              <p className="mt-6 text-[17px] text-ink-soft max-w-2xl leading-relaxed">
                Мы открыты к сотрудничеству с компаниями и специалистами, которым важны качественные wellness-устройства, понятная поддержка и надежный бренд. Поможем подобрать линейку под формат вашего бизнеса.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#partner" size="lg">Запросить условия</Button>
                <Button href={OZON_SELLER_URL} external variant="secondary" size="lg">Связаться через Ozon</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!py-20 bg-bone-50">
        <Container>
          <Eyebrow>Кому подходит</Eyebrow>
          <h2 className="mt-5 text-display-md font-display max-w-[20ch]">
            С кем мы сотрудничаем.
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {audience.map((a) => (
              <div key={a.title} className="rounded-2xl bezel bg-bone-100 p-6">
                <h3 className="font-display text-xl tracking-tight">{a.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="partner" className="!py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>Заявка</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Стать партнером ARSEVA.</h2>
              <p className="mt-6 text-[15px] text-ink-soft leading-relaxed">
                Заполните форму — мы свяжемся, уточним детали и пришлем коммерческое предложение под ваш формат.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl bezel bg-bone-50 p-6 md:p-10">
                <ContactForm mode="partner" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
