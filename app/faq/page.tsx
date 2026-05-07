"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";

const items = [
  { q: "Как выбрать массажер ARSEVA?", a: "Пройдите подбор на сайте, ответьте на 3 вопроса — мы покажем модель, которая подходит лучше всего. Можно также задать вопрос продавцу на Ozon, и мы поможем определиться." },
  { q: "Есть ли гарантия?", a: "Да, расширенная гарантия до 2 лет на технику ARSEVA при бытовом использовании." },
  { q: "Можно ли использовать каждый день?", a: "Массажеры подходят для регулярного домашнего ухода. Длительность и интенсивность выбирайте по своему ощущению комфорта." },
  { q: "Подходит ли после спорта?", a: "Да, массажеры подходят для использования после тренировок и нагрузки. Помогают расслабить мышцы и сделать восстановление регулярным." },
  { q: "Подходит ли пожилым людям?", a: "Подходит при условии комфортной интенсивности. При наличии заболеваний рекомендуем проконсультироваться со специалистом." },
  { q: "Что делать, если товар не включается?", a: "Проверьте уровень заряда и инструкцию. Если вопрос не решается — задайте вопрос продавцу на Ozon, поможем разобраться." },
  { q: "Как оформить гарантийный случай?", a: "Задайте вопрос продавцу на Ozon или заполните форму на сайте — расскажем, какие документы нужны и подскажем дальнейшие шаги." },
  { q: "Где купить оригинальный ARSEVA?", a: "На Ozon — это официальный канал продаж бренда." },
  { q: "Чем отличаются модели?", a: "Pro Max — базовая мощная модель. Pro Max Carbon — с премиальным карбоновым корпусом. Pro Max Plus — усиленная версия. Также есть массажеры для ног, глаз и роликовый FlexRoll." },
  { q: "Можно ли купить оптом?", a: "Да. Перейдите в раздел B2B и оставьте заявку — мы свяжемся и пришлем условия." },
  { q: "Можно ли использовать массажер при заболеваниях?", a: "При наличии заболеваний и хронических состояний рекомендуем проконсультироваться со специалистом перед использованием." },
  { q: "Нужно ли консультироваться с врачом?", a: "При наличии заболеваний, беременности, травм или сомнений — да, стоит проконсультироваться со специалистом." },
];

export default function FaqPage() {
  return (
    <article className="pt-32 md:pt-40 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-5 text-display-xl font-display">Частые вопросы.</h1>
          <p className="mt-6 text-[17px] text-ink-soft leading-relaxed">
            Если не нашли ответ — задайте вопрос продавцу на Ozon, поможем разобраться.
          </p>
        </div>

        <div className="mt-14 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {items.map((it) => <Item key={it.q} q={it.q} a={it.a} />)}
        </div>
      </Container>
    </article>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
        <span className="font-display text-lg tracking-tight">{q}</span>
        <span className="h-9 w-9 grid place-items-center rounded-full bezel bg-bone-50 flex-shrink-0">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && <p className="pb-6 pr-12 text-[15px] text-ink-soft leading-relaxed">{a}</p>}
    </div>
  );
}
