import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";

const audience = [
  "Массажные кабинеты", "Фитнес-клубы", "Салоны красоты", "Студии восстановления",
  "Корпоративные клиенты", "Оптовые партнеры", "Маркетплейс-партнеры", "Специалисты по восстановлению",
];

export function B2BBlock() {
  return (
    <Section className="!py-24 md:!py-32">
      <Container>
        <div className="rounded-[32px] overflow-hidden bezel bg-gradient-to-br from-bone-50 to-bone-200 grain p-8 md:p-14 lg:p-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>B2B</Eyebrow>
              <Reveal>
                <h2 className="mt-5 text-display-lg font-display">
                  ARSEVA для бизнеса.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[17px] text-ink-soft leading-relaxed max-w-xl">
                  Мы открыты к сотрудничеству с компаниями и специалистами, которым важны качественные wellness-устройства, понятная поддержка и надежный бренд.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/b2b" size="lg">Запросить условия</Button>
                  <Button href="/b2b#partner" variant="secondary" size="lg">Стать партнером</Button>
                  <Button href={OZON_SELLER_URL} external variant="ghost" size="lg">Связаться через Ozon</Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {audience.map((a) => (
                  <div key={a} className="rounded-xl bezel bg-bone-100/80 px-4 py-3">{a}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
