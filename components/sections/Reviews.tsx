import { Star } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const reviews = [
  { name: "Анна", city: "Москва", text: "Беру массажер каждый вечер после работы — спина и шея заметно расслабляются. Удобно лежит в руке, не вибрирует громко.", product: "ARSEVA Pro Max" },
  { name: "Игорь", city: "Санкт-Петербург", text: "Купил после тренировок. Хорошо прорабатывает ноги и спину, насадки разные — на каждую зону своя.", product: "ARSEVA Pro Max Plus" },
  { name: "Мария", city: "Казань", text: "Массажер для глаз стал частью вечернего ритуала. После компьютера ощущение усталости уходит.", product: "ARSEVA PRO COMFORT" },
  { name: "Дмитрий", city: "Краснодар", text: "Carbon-версия выглядит дорого, ощущается как премиум техника. Жене подарил — она довольна.", product: "Pro Max Carbon" },
];

export function Reviews() {
  return (
    <Section className="!py-24 md:!py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Отзывы</Eyebrow>
            <Reveal>
              <h2 className="mt-5 text-display-lg font-display max-w-[18ch]">
                Покупатели выбирают ARSEVA для ежедневного ухода.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-champagne-500" />
                ))}
              </div>
              <div>
                <div className="font-medium">4.8 / 5</div>
                <div className="text-xs text-ink-muted">по отзывам на маркетплейсах</div>
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <StaggerItem key={r.name}>
              <article className="h-full rounded-3xl bezel bg-bone-50 p-6 flex flex-col">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-champagne-500" />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-soft flex-1">«{r.text}»</p>
                <div className="mt-6 pt-4 border-t border-ink/10">
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-ink-muted">{r.city} · {r.product}</div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
