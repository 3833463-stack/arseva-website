import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  { tag: "01", title: "Восстановление после спорта", body: "Помогает мышцам быстрее возвращаться в комфортное состояние после тренировок и нагрузки." },
  { tag: "02", title: "Расслабление после рабочего дня", body: "Спокойный домашний ритуал, который снимает накопленное напряжение." },
  { tag: "03", title: "Уход за ногами", body: "Бережная проработка стоп после ходьбы и длительной нагрузки." },
  { tag: "04", title: "Забота о глазах", body: "Расслабление зоны вокруг глаз после работы за компьютером." },
  { tag: "05", title: "Домашний wellness-ритуал", body: "Регулярный уход без сложных настроек и без визита в салон." },
];

export function BrandIntro() {
  return (
    <Section className="!py-24 md:!py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <Eyebrow>О бренде</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display">
                Техника, которая помогает телу восстанавливаться.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[17px] text-ink-soft leading-relaxed">
              ARSEVA создает устройства для регулярного домашнего ухода: расслабления мышц, восстановления после нагрузки и заботы о теле без сложных настроек. Спокойная инженерия, продуманная эргономика и понятная польза — каждый день.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <Tile className="md:col-span-3 md:row-span-2 md:min-h-[420px] bg-graphite-900 text-bone-100" t={tiles[0]} dark large />
          <Tile className="md:col-span-3" t={tiles[1]} />
          <Tile className="md:col-span-2 bg-bone-200" t={tiles[2]} />
          <Tile className="md:col-span-1 bg-champagne-300/50" t={tiles[3]} compact />
          <Tile className="md:col-span-6 bg-graphite-950 text-bone-100" t={tiles[4]} dark wide />
        </div>
      </Container>
    </Section>
  );
}

function Tile({
  t,
  className,
  dark,
  large,
  wide,
  compact,
}: {
  t: { tag: string; title: string; body: string };
  className?: string;
  dark?: boolean;
  large?: boolean;
  wide?: boolean;
  compact?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`group relative overflow-hidden rounded-3xl p-7 md:p-9 ${dark ? "bezel-dark" : "bezel bg-bone-50"} ${className ?? ""}`}
      >
        <div className={`text-[11px] uppercase tracking-[0.22em] ${dark ? "text-bone-100/40" : "text-ink-muted"}`}>
          {t.tag}
        </div>
        <h3
          className={`mt-4 font-display tracking-tight ${large ? "text-3xl md:text-4xl" : compact ? "text-xl" : wide ? "text-2xl md:text-3xl" : "text-2xl"}`}
        >
          {t.title}
        </h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-bone-100/65" : "text-ink-soft"} ${compact ? "max-w-[220px]" : wide ? "max-w-2xl" : "max-w-md"}`}
        >
          {t.body}
        </p>
        {large && (
          <div aria-hidden className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-champagne-500/15 blur-3xl" />
        )}
      </div>
    </Reveal>
  );
}
