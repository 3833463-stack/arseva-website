import { ShieldCheck, MessageCircle, BookOpen, Wrench } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";

const items = [
  { icon: ShieldCheck, title: "Гарантия до 2 лет", body: "Расширенная гарантия на технику ARSEVA." },
  { icon: MessageCircle, title: "Консультация по использованию", body: "Подскажем, как настроить и какой режим выбрать." },
  { icon: Wrench, title: "Помощь с гарантийным случаем", body: "Поможем разобраться и подскажем дальнейшие шаги." },
  { icon: BookOpen, title: "Рекомендации по эксплуатации", body: "Уход, хранение, безопасное использование." },
];

export function WarrantyBlock() {
  return (
    <Section className="!py-24 md:!py-32 bg-bone-50">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Гарантия</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display">
                Расширенная гарантия ARSEVA до 2 лет.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] text-ink-soft leading-relaxed">
                Мы уверены в качестве техники ARSEVA и поддерживаем покупателей после покупки. Если возникнет вопрос по работе устройства, команда ARSEVA поможет разобраться и подскажет дальнейшие действия.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={OZON_SELLER_URL} external size="lg">Задать вопрос продавцу</Button>
                <Button href="/warranty" variant="secondary" size="lg">Условия гарантии</Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <Reveal key={it.title}>
                <div className="rounded-2xl bezel bg-bone-100 p-6 h-full">
                  <it.icon size={22} />
                  <h3 className="mt-4 font-display text-lg tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-soft">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
