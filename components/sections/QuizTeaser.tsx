import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function QuizTeaser() {
  return (
    <Section dark className="!py-24 md:!py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-0 opacity-[0.5]" style={{
        background: "radial-gradient(50% 50% at 80% 20%, rgba(232,214,176,0.15), transparent 70%), radial-gradient(40% 40% at 20% 80%, rgba(255,255,255,0.05), transparent 70%)",
      }} />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow className="text-bone-100/60">Подбор массажера</Eyebrow>
            <Reveal>
              <h2 className="mt-6 text-display-lg font-display">
                Три вопроса — <br /> и подходящий массажер найден.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-bone-100/70 text-[17px] leading-relaxed max-w-xl">
                Расскажите, что хотите проработать, для кого выбираете и какой формат удобнее. Мы покажем модель ARSEVA, которая подходит лучше всего.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/quiz" variant="champagne" size="lg" iconRight={<ArrowRight size={16} />}>
                  Начать подбор
                </Button>
                <Button href="/catalog" variant="outline-dark" size="lg">
                  Сразу в каталог
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              {["Что хотите проработать?", "Для кого покупаете?", "Какой формат нужен?"].map((q, i) => (
                <Reveal key={q} delay={0.1 + i * 0.08}>
                  <div className="rounded-2xl bezel-dark bg-white/5 backdrop-blur-sm p-5 flex items-center gap-4">
                    <span className="font-mono text-[11px] text-champagne-300/80">0{i + 1}</span>
                    <span className="text-[15px]">{q}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
