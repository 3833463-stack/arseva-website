"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { products } from "@/data/products";
import { buildOzonUrl, getSellerChatHref } from "@/lib/ozon";
import { trackOzonClick, trackSellerChatClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Q = { id: string; question: string; options: { value: string; label: string }[] };

const questions: Q[] = [
  {
    id: "zone",
    question: "Что хотите проработать?",
    options: [
      { value: "back", label: "Спина" },
      { value: "neck", label: "Шея и плечи" },
      { value: "legs", label: "Ноги" },
      { value: "feet", label: "Стопы" },
      { value: "eyes", label: "Глаза" },
      { value: "all", label: "Все тело" },
      { value: "sport", label: "Восстановление после спорта" },
    ],
  },
  {
    id: "for",
    question: "Для кого покупаете?",
    options: [
      { value: "self", label: "Для себя" },
      { value: "family", label: "Для семьи" },
      { value: "athlete", label: "Для спортсмена" },
      { value: "senior", label: "Для пожилого человека" },
      { value: "specialist", label: "Для специалиста" },
      { value: "gift", label: "Для подарка" },
    ],
  },
  {
    id: "format",
    question: "Какой формат нужен?",
    options: [
      { value: "powerful", label: "Мощный для тела" },
      { value: "feet", label: "Для ног и стоп" },
      { value: "eyes", label: "Для глаз" },
      { value: "compact", label: "Компактный" },
      { value: "recovery", label: "Для восстановления после тренировок" },
      { value: "neck", label: "Для шеи и плеч" },
      { value: "pro", label: "Для профессионального использования" },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const total = questions.length;
  const done = step >= total;

  const recommendation = useMemo(() => {
    if (!done) return null;
    const { zone, format, for: who } = answers as Record<string, string>;
    if (who === "specialist" || format === "pro") return products.find((p) => p.id === "pro-max-plus")!;
    if (zone === "neck" || format === "neck") return products.find((p) => p.id === "pro-relax-2")!;
    if (zone === "eyes" || format === "eyes") return products.find((p) => p.id === "eye-comfort-steam")!;
    if (zone === "feet" || format === "feet") return products.find((p) => p.id === "foot")!;
    if (zone === "all" || format === "compact") return products.find((p) => p.id === "flexroll")!;
    if (format === "powerful" || zone === "sport" || zone === "back") return products.find((p) => p.id === "pro-max")!;
    if (who === "gift") return products.find((p) => p.id === "pro-max-carbon")!;
    return products.find((p) => p.id === "pro-max")!;
  }, [done, answers]);

  const ozonUrl = recommendation ? buildOzonUrl(recommendation.ozonUrl, "quiz", recommendation.id) : null;
  const sellerBase = recommendation ? getSellerChatHref(recommendation) : null;
  const sellerUrl = sellerBase ? buildOzonUrl(sellerBase, "quiz", recommendation?.id, "question_to_seller") : null;

  return (
    <div className="pt-32 md:pt-40 pb-24 min-h-[100dvh]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Подбор массажера</Eyebrow>
          <h1 className="mt-5 text-display-md font-display">
            {done ? "Подходящая модель" : "Подберем массажер ARSEVA под вас"}
          </h1>

          {/* progress */}
          <div className="mt-10 flex items-center gap-2">
            {questions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i < step ? "bg-graphite-900" : i === step && !done ? "bg-graphite-900/50" : "bg-ink/10",
                )}
              />
            ))}
          </div>

          <div className="mt-12 min-h-[420px]">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-mono text-[12px] text-ink-muted mb-2">Вопрос {step + 1} из {total}</div>
                  <h2 className="text-display-md font-display">{questions[step].question}</h2>
                  <div className="mt-8 grid sm:grid-cols-2 gap-3">
                    {questions[step].options.map((o) => (
                      <button
                        key={o.value}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, [questions[step].id]: o.value }));
                          setStep((s) => s + 1);
                        }}
                        className={cn(
                          "group rounded-2xl bezel bg-bone-50 hover:bg-bone-100 px-6 py-5 text-left transition-colors",
                          answers[questions[step].id] === o.value && "ring-2 ring-graphite-900",
                        )}
                      >
                        <span className="text-[15px]">{o.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-between">
                    <Button
                      variant="ghost"
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      iconLeft={<ArrowLeft size={14} />}
                    >
                      Назад
                    </Button>
                    {answers[questions[step].id] && (
                      <Button onClick={() => setStep((s) => s + 1)} iconRight={<ArrowRight size={14} />}>
                        Дальше
                      </Button>
                    )}
                  </div>
                </motion.div>
              ) : (
                recommendation && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-3xl overflow-hidden bezel">
                      <ProductImage
                        src={recommendation.images[0]}
                        alt={recommendation.name}
                        category={recommendation.category}
                        accent={recommendation.accent}
                        label="Рекомендация"
                        sizes="100vw"
                        className="aspect-[16/9]"
                      />
                    </div>
                    <div className="mt-8">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">Подходит вам</div>
                      <h2 className="mt-3 text-display-md font-display">{recommendation.name}</h2>
                      <p className="mt-4 text-[17px] text-ink-soft leading-relaxed max-w-2xl">
                        {recommendation.shortDescription}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button href={`/products/${recommendation.slug}`} size="lg" iconRight={<ArrowRight size={16} />}>
                          Подробнее о модели
                        </Button>
                        {ozonUrl && (
                          <Button
                            href={ozonUrl}
                            external
                            variant="secondary"
                            size="lg"
                            onClick={() => trackOzonClick({ productId: recommendation.id, productName: recommendation.name, source: "quiz" })}
                          >
                            Купить на Ozon
                          </Button>
                        )}
                        {sellerUrl ? (
                          <a
                            href={sellerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSellerChatClick({ productId: recommendation.id, productName: recommendation.name, source: "quiz" })}
                            className="inline-flex items-center gap-1.5 rounded-full px-5 h-12 text-[14px] font-medium text-ink-soft hover:text-ink hover:bg-bone-100 transition"
                          >
                            Задать вопрос продавцу
                            <ArrowUpRight size={14} />
                          </a>
                        ) : null}
                      </div>
                      <div className="mt-10 text-sm">
                        <button onClick={() => { setStep(0); setAnswers({}); }} className="text-ink-muted hover:text-ink underline-offset-4 hover:underline">
                          Пройти подбор заново
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
