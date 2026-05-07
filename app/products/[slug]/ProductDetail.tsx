"use client";
import { useState } from "react";
import { Star, ShieldCheck, MessageCircle, ArrowUpRight, CheckCircle, Plus, Minus, ExternalLink } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Reveal } from "@/components/ui/Reveal";
import { buildOzonUrl, getSellerChatHref } from "@/lib/ozon";
import { trackOzonClick, trackSellerChatClick, trackReviewClick } from "@/lib/analytics";
import type { Product } from "@/data/products";

const defaultFaqs = [
  { q: "Можно ли использовать массажер каждый день?", a: "Массажер подходит для регулярного домашнего ухода. Длительность сеанса и интенсивность выбирайте по своему ощущению комфорта." },
  { q: "Подходит ли после спорта?", a: "Да, массажер подходит для использования после спорта и нагрузки. Помогает расслабить мышцы и сделать восстановление регулярным." },
  { q: "Что делать, если возникли сомнения?", a: "При наличии заболеваний и хронических состояний рекомендуем проконсультироваться со специалистом перед использованием." },
  { q: "Как оформить гарантийный случай?", a: "Задайте вопрос продавцу на Ozon — поможем разобраться и подскажем дальнейшие шаги по гарантии." },
];

export function ProductDetail({ product }: { product: Product }) {
  const ozonUrl = buildOzonUrl(product.ozonUrl, "product_page", product.id);
  const ozonReviewsUrl = buildOzonUrl(product.ozonReviewsUrl, "reviews", product.id);
  const sellerChatBase = getSellerChatHref(product);
  const sellerChatUrl = buildOzonUrl(sellerChatBase, "product_page", product.id, "question_to_seller");

  function handleOzonClick() {
    trackOzonClick({ productId: product.id, productName: product.name, source: "product_page" });
  }
  function handleSellerClick() {
    trackSellerChatClick({ productId: product.id, productName: product.name, source: "product_page" });
  }
  function handleReviewClick() {
    trackReviewClick(product.id);
  }

  return (
    <article className="pt-28 md:pt-36">

      {/* ── HERO ────────────────────────────────────────────── */}
      <Section className="!py-10 md:!py-16">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <ProductGallery product={product} />
            </div>

            <div className="lg:col-span-5">
              <Eyebrow>{product.tagline}</Eyebrow>
              <h1 className="mt-5 text-display-md font-display">{product.name}</h1>

              {product.rating && (
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-champagne-500 fill-champagne-500" />
                    <span className="font-medium">{product.rating.score}</span>
                  </div>
                  <span className="text-ink-muted">·</span>
                  <span className="text-ink-muted">{product.rating.count.toLocaleString("ru-RU")} отзывов</span>
                  {product.ratingSource === "ozon" && (
                    <span className="text-[11px] text-ink-subtle uppercase tracking-wider">по данным Ozon</span>
                  )}
                </div>
              )}

              <p className="mt-6 text-[17px] text-ink-soft leading-relaxed">{product.shortDescription}</p>

              {/* CTA Block */}
              <div className="mt-8 rounded-3xl bezel bg-bone-50 p-6 space-y-4">
                {/* Price */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Цена</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-display text-2xl">
                      {product.priceLabel ?? "Актуальная цена на Ozon"}
                    </span>
                    <ExternalLink size={14} className="text-ink-muted" />
                  </div>
                </div>

                {/* Primary CTA */}
                {ozonUrl ? (
                  <a
                    href={ozonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleOzonClick}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-graphite-900 hover:bg-graphite-800 text-bone-100 h-13 px-6 text-[15px] font-medium transition"
                  >
                    Купить на Ozon
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <div className="flex w-full items-center justify-center gap-2 rounded-full bg-ink/10 text-ink-muted h-13 px-6 text-[15px] cursor-not-allowed">
                    Скоро на Ozon
                  </div>
                )}

                {/* Secondary CTAs */}
                <div className="grid grid-cols-2 gap-2">
                  {ozonReviewsUrl ? (
                    <a
                      href={ozonReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleReviewClick}
                      className="flex items-center justify-center gap-1.5 rounded-full border border-ink/15 hover:bg-bone-100 h-10 px-4 text-[13px] text-ink-soft transition"
                    >
                      <Star size={12} />
                      Смотреть отзывы
                    </a>
                  ) : (
                    <span />
                  )}
                  {sellerChatUrl ? (
                    <a
                      href={sellerChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSellerClick}
                      className="flex items-center justify-center gap-1.5 rounded-full border border-ink/15 hover:bg-bone-100 h-10 px-4 text-[13px] text-ink-soft transition"
                    >
                      <MessageCircle size={13} />
                      Задать вопрос
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5 rounded-full border border-ink/10 h-10 px-4 text-[13px] text-ink-muted cursor-not-allowed">
                      Скоро доступно
                    </span>
                  )}
                </div>

                {/* Trust signals */}
                <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row gap-3 text-sm text-ink-soft">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-champagne-600 flex-shrink-0" />
                    {product.warranty}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="flex-shrink-0" />
                    Поддержка ARSEVA
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14px] text-ink-soft">
                    <CheckCircle size={16} className="mt-0.5 text-champagne-600 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ПОЧЕМУ ВЫБИРАЮТ ─────────────────────────────────── */}
      <Section className="!py-20 bg-bone-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Почему эту модель выбирают</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Создана для регулярного ухода.</h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {product.features.map((f) => (
                <Reveal key={f}>
                  <div className="rounded-2xl bezel bg-bone-100 p-5 text-[15px] flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 text-champagne-600 flex-shrink-0" />
                    {f}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── КОМУ ПОДОЙДЕТ ───────────────────────────────────── */}
      <Section className="!py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Кому подойдёт</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Для домашнего ритуала.</h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {product.useCases.map((u) => (
                <Reveal key={u}>
                  <div className="rounded-2xl bezel bg-bone-50 p-5 text-[15px]">{u}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ЧТО ВАЖНО ЗНАТЬ ─────────────────────────────────── */}
      <Section className="!py-16 bg-bone-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Что важно знать</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Перед покупкой.</h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {[
                "Не является медицинским изделием",
                "При наличии заболеваний проконсультируйтесь со специалистом",
                "Использовать согласно инструкции из комплекта",
                "Не применять при наличии противопоказаний",
              ].map((item) => (
                <div key={item} className="rounded-2xl bezel bg-bone-100 p-5 text-[14px] text-ink-soft flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-champagne-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ХАРАКТЕРИСТИКИ ──────────────────────────────────── */}
      <Section className="!py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Характеристики</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Спокойная инженерия.</h2>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {product.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-2 sm:grid-cols-3 py-5 gap-4">
                    <dt className="text-ink-muted text-sm">{s.label}</dt>
                    <dd className="sm:col-span-2 text-[15px]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── РЕЖИМЫ ──────────────────────────────────────────── */}
      {product.modes && (
        <Section dark className="!py-20">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <Eyebrow className="text-bone-100/60">Режимы работы</Eyebrow>
                <h2 className="mt-5 text-display-md font-display">Понятное управление.</h2>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.modes.map((m, i) => (
                  <div key={m} className="rounded-2xl bezel-dark bg-white/5 p-5">
                    <div className="font-mono text-[11px] text-champagne-300/80">0{i + 1}</div>
                    <div className="mt-2 text-lg">{m}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── КОМПЛЕКТАЦИЯ ────────────────────────────────────── */}
      <Section className="!py-20 bg-bone-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Комплектация</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Что внутри коробки.</h2>
            </div>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {product.packageItems.map((item) => (
                <li key={item} className="rounded-xl bezel bg-bone-100 px-5 py-4 text-[14px] flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ── ОТЗЫВЫ ──────────────────────────────────────────── */}
      <Section className="!py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <Eyebrow>Отзывы покупателей</Eyebrow>
              {product.rating ? (
                <>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-display text-5xl">{product.rating.score}</span>
                    <div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.round(product.rating!.score) ? "text-champagne-500 fill-champagne-500" : "text-ink/20"}
                          />
                        ))}
                      </div>
                      <div className="mt-1 text-sm text-ink-muted">
                        {product.rating.count.toLocaleString("ru-RU")} отзывов
                      </div>
                    </div>
                  </div>
                  {product.ratingSource === "ozon" && (
                    <p className="mt-3 text-sm text-ink-muted">по данным Ozon</p>
                  )}
                </>
              ) : (
                <p className="mt-5 text-[15px] text-ink-soft leading-relaxed">
                  Актуальные отзывы доступны на странице товара на Ozon
                </p>
              )}
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Все отзывы покупателей ARSEVA собраны на Ozon — с фотографиями, оценками и подробными комментариями. Там можно задать вопрос продавцу и получить ответ.
              </p>
              {ozonReviewsUrl && (
                <a
                  href={ozonReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleReviewClick}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 hover:bg-bone-50 px-6 h-11 text-[14px] font-medium transition w-fit"
                >
                  <Star size={14} className="text-champagne-500" />
                  Смотреть отзывы на Ozon
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ГАРАНТИЯ ────────────────────────────────────────── */}
      <Section className="!py-20 bg-bone-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Гарантия</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Расширенная гарантия ARSEVA до 2 лет.</h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="rounded-2xl bezel bg-bone-100 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-champagne-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{product.warranty}</div>
                    <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
                      Мы поддерживаем покупателей после покупки. Если возникнет вопрос по работе устройства — задайте вопрос продавцу на Ozon, и мы поможем разобраться.
                    </p>
                  </div>
                </div>
              </div>
              {sellerChatUrl ? (
                <a
                  href={sellerChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSellerClick}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 hover:bg-bone-100 px-6 h-11 text-[14px] font-medium transition"
                >
                  <MessageCircle size={14} />
                  Задать вопрос продавцу
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-6 h-11 text-[14px] text-ink-muted cursor-not-allowed">
                  Скоро доступно
                </span>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── КОНСУЛЬТАЦИЯ ────────────────────────────────────── */}
      <Section className="!py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow>Не уверены, какая модель подойдет?</Eyebrow>
            <h2 className="mt-5 text-display-md font-display">Задайте вопрос продавцу</h2>
            <p className="mt-4 text-[17px] text-ink-soft leading-relaxed">
              Задайте вопрос продавцу на Ozon — подскажем, какая модель ARSEVA лучше подойдет под вашу задачу.
            </p>
            {sellerChatUrl ? (
              <a
                href={sellerChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSellerClick}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 hover:bg-bone-50 px-8 h-12 text-[15px] font-medium transition"
              >
                <MessageCircle size={15} />
                Задать вопрос продавцу
              </a>
            ) : null}
            <p className="mt-4 text-xs text-ink-muted">Вопрос откроется через интерфейс Ozon</p>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <Section className="!py-20 bg-bone-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-5 text-display-md font-display">Частые вопросы.</h2>
            </div>
            <div className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
              {(product.faqs ?? defaultFaqs).map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ФИНАЛЬНЫЙ CTA ───────────────────────────────────── */}
      <Section dark className="!py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow className="text-bone-100/60">Готовы выбрать ARSEVA?</Eyebrow>
            <h2 className="mt-5 text-display-md font-display">{product.name}</h2>
            <p className="mt-4 text-[17px] text-bone-100/70 leading-relaxed">
              Оформите заказ на Ozon — доставка, оплата и защита покупателя уже включены.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {ozonUrl ? (
                <a
                  href={ozonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOzonClick({ productId: product.id, productName: product.name, source: "final_cta" })}
                  className="inline-flex items-center gap-2 rounded-full bg-bone-100 hover:bg-white text-graphite-900 px-8 h-13 text-[15px] font-medium transition"
                >
                  Купить на Ozon
                  <ExternalLink size={15} />
                </a>
              ) : null}
              {sellerChatUrl ? (
                <a
                  href={sellerChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSellerChatClick({ productId: product.id, productName: product.name, source: "final_cta" })}
                  className="inline-flex items-center gap-2 rounded-full border border-bone-100/20 hover:border-bone-100/40 text-bone-100 px-8 h-13 text-[15px] font-medium transition"
                >
                  Задать вопрос продавцу
                  <ArrowUpRight size={15} />
                </a>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── STICKY MOBILE CTA ───────────────────────────────── */}
      {ozonUrl && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-bone-100/90 backdrop-blur-xl border-t border-ink/10">
          <div className="flex gap-2 max-w-lg mx-auto">
            <a
              href={ozonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOzonClick({ productId: product.id, productName: product.name, source: "sticky_mobile_cta" })}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-graphite-900 hover:bg-graphite-800 text-bone-100 h-12 text-[14px] font-medium transition"
            >
              Купить на Ozon
            </a>
            {sellerChatUrl ? (
              <a
                href={sellerChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSellerChatClick({ productId: product.id, productName: product.name, source: "sticky_mobile_cta" })}
                className="inline-flex items-center justify-center rounded-full border border-ink/15 hover:bg-bone-200 h-12 px-4 text-[13px] font-medium transition flex-shrink-0"
              >
                Задать вопрос
              </a>
            ) : null}
          </div>
        </div>
      )}

      {/* Legal disclaimer */}
      <Section className="!py-12 bg-graphite-950 text-bone-100/70">
        <Container>
          <p className="text-sm max-w-3xl">
            Информация носит справочный характер. Товар не является медицинским изделием. При наличии заболеваний и хронических состояний проконсультируйтесь со специалистом перед использованием.
          </p>
        </Container>
      </Section>
    </article>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-5 text-left">
        <span className="font-medium text-[16px]">{q}</span>
        <span className="h-8 w-8 grid place-items-center rounded-full bezel bg-bone-50 flex-shrink-0">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && <p className="pb-5 pr-12 text-[15px] text-ink-soft leading-relaxed">{a}</p>}
    </div>
  );
}
