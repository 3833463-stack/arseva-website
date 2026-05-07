import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { OZON_URL, OZON_SELLER_URL } from "@/data/nav";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactsPage() {
  return (
    <article className="pt-32 md:pt-40">
      <Section className="!py-10 md:!py-16">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>Контакты</Eyebrow>
              <h1 className="mt-5 text-display-lg font-display">Свяжитесь с ARSEVA.</h1>
              <p className="mt-6 text-[17px] text-ink-soft leading-relaxed">
                Поможем подобрать модель, расскажем про доставку, оплату и гарантию.
              </p>
              <div className="mt-8 grid gap-3">
                <Button href={OZON_SELLER_URL} external size="lg">Задать вопрос продавцу</Button>
                <Button href={OZON_URL} external variant="secondary" size="lg">Перейти на Ozon</Button>
              </div>
              <div className="mt-12 space-y-3 text-[15px]">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Email</div>
                  <a href="mailto:hello@arseva.ru" className="hover:text-champagne-600">hello@arseva.ru</a>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Часы работы</div>
                  <p>Пн–Вс, 10:00–20:00</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl bezel bg-bone-50 p-6 md:p-10">
                <h2 className="font-display text-2xl tracking-tight">Получить консультацию</h2>
                <p className="mt-2 text-ink-soft text-sm">Заполните форму — мы свяжемся в ближайшее время.</p>
                <div className="mt-8">
                  <ContactForm mode="consult" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
