import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";
import { ShieldCheck, MessageCircle, Wrench, BookOpen } from "lucide-react";

export const metadata: Metadata = { title: "Гарантия" };

const items = [
  { icon: ShieldCheck, title: "Расширенная гарантия", body: "До 2 лет на технику ARSEVA при бытовом использовании." },
  { icon: MessageCircle, title: "Консультация", body: "Подскажем по работе устройства и режимам." },
  { icon: Wrench, title: "Гарантийный случай", body: "Поможем разобраться и подскажем дальнейшие шаги." },
  { icon: BookOpen, title: "Эксплуатация", body: "Рекомендации по уходу и хранению." },
];

export default function WarrantyPage() {
  return (
    <article className="pt-32 md:pt-40">
      <Section className="!py-10 md:!py-16">
        <Container>
          <Eyebrow>Гарантия</Eyebrow>
          <h1 className="mt-5 text-display-xl font-display max-w-[18ch]">
            Расширенная гарантия ARSEVA до 2 лет.
          </h1>
          <p className="mt-8 text-[17px] text-ink-soft max-w-2xl leading-relaxed">
            Мы уверены в качестве техники ARSEVA и поддерживаем покупателей после покупки. Если возникнет вопрос по работе устройства, команда ARSEVA поможет разобраться и подскажет дальнейшие действия.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={OZON_SELLER_URL} external size="lg">Задать вопрос продавцу</Button>
            <Button href="/contacts" variant="secondary" size="lg">Контакты</Button>
          </div>
        </Container>
      </Section>

      <Section className="!py-20 bg-bone-50">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl bezel bg-bone-100 p-6">
                <it.icon size={24} />
                <h3 className="mt-4 font-display text-lg tracking-tight">{it.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft">{it.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="!py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-display-md font-display">Как оформить гарантийный случай</h2>
            <ol className="mt-8 space-y-5 text-[16px] text-ink-soft leading-relaxed">
              <li><span className="font-mono text-champagne-600 mr-2">01</span>Задайте вопрос продавцу на Ozon или заполните форму на сайте.</li>
              <li><span className="font-mono text-champagne-600 mr-2">02</span>Опишите ситуацию и пришлите фото или видео работы устройства.</li>
              <li><span className="font-mono text-champagne-600 mr-2">03</span>Мы подскажем дальнейшие шаги и поможем разобраться.</li>
            </ol>
            <p className="mt-10 text-sm text-ink-muted max-w-2xl">
              Условия гарантии распространяются на бытовое использование. При нарушении правил эксплуатации, механических повреждениях и несанкционированном вмешательстве гарантия может не действовать.
            </p>
          </div>
        </Container>
      </Section>
    </article>
  );
}
