"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Star, MessageCircle, Box } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { OZON_SELLER_URL } from "@/data/nav";
import { products } from "@/data/products";
import { buildOzonUrl } from "@/lib/ozon";
import { trackSellerChatClick } from "@/lib/analytics";

const trust = [
  { icon: ShieldCheck, label: "Гарантия до 2 лет" },
  { icon: MessageCircle, label: "Поддержка после покупки" },
  { icon: Star, label: "Высокий рейтинг на маркетплейсах" },
  { icon: Box, label: "Техника для дома и восстановления" },
];

export function Hero() {
  const sellerHref = buildOzonUrl(OZON_SELLER_URL, "hero", undefined, "question_to_seller") ?? OZON_SELLER_URL;

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(232,214,176,0.18), transparent 70%), linear-gradient(180deg, #FAF8F4 0%, #F7F4EF 100%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>ARSEVA · Wellness Tech</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mt-6 text-display-xl font-display"
            >
              Восстановление, <br className="hidden md:block" /> которое становится <br className="hidden md:block" /> частью вашего дня.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft"
            >
              Массажеры и wellness-устройства ARSEVA помогают расслабить мышцы, снизить ощущение усталости и сделать уход за телом регулярным — дома, после спорта и после рабочего дня.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button href="/catalog" size="lg" iconRight={<ArrowRight size={16} />}>
                Перейти в каталог
              </Button>
              <Button href="/quiz" size="lg" variant="secondary">
                Подобрать массажер
              </Button>
              <a
                href={sellerHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSellerChatClick({ source: "hero" })}
                className="inline-flex items-center gap-1.5 rounded-full px-5 h-12 text-[14px] font-medium text-ink-soft hover:text-ink hover:bg-bone-100 transition"
              >
                Задать вопрос продавцу
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4"
            >
              {trust.map((t) => (
                <motion.li
                  key={t.label}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-start gap-2 text-[13px] text-ink-soft"
                >
                  <t.icon size={16} className="mt-0.5 text-ink" />
                  <span>{t.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="relative"
            >
              <ProductImage
                src={products.find((p) => p.id === "pro-max")?.images[0]}
                alt="ARSEVA Pro Max"
                category="percussion"
                accent="graphite"
                label="Pro Max"
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="aspect-[4/5] md:aspect-[5/6] shadow-lift"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block w-44 rounded-2xl bg-bone-100 p-4 bezel shadow-lift">
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">Рейтинг</div>
                <div className="mt-1 flex items-center gap-1">
                  <Star size={14} className="text-champagne-500" />
                  <span className="font-medium">4.9</span>
                  <span className="text-ink-muted text-sm">/ 5</span>
                </div>
                <div className="mt-2 text-xs text-ink-muted">Более 2 000 покупателей</div>
              </div>
              <div className="absolute -top-4 right-4 hidden md:block rounded-full bg-graphite-900 text-bone-100 px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
                Pro Max · Carbon · Plus
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
