"use client";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { OZON_SELLER_URL } from "@/data/nav";
import { buildOzonUrl } from "@/lib/ozon";
import { trackSellerChatClick } from "@/lib/analytics";

export function OzonSellerCTA() {
  const href = buildOzonUrl(OZON_SELLER_URL, "footer", undefined, "question_to_seller") ?? OZON_SELLER_URL;

  return (
    <Section dark className="!py-24 md:!py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-0" style={{
        background: "radial-gradient(60% 60% at 50% 50%, rgba(232,214,176,0.12), transparent 70%)",
      }} />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-lg font-display">
              Не уверены, какая модель подойдет?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[17px] text-bone-100/70 leading-relaxed">
              Задайте вопрос продавцу на Ozon — подскажем, какой массажер ARSEVA лучше выбрать под вашу задачу.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSellerChatClick({ source: "footer" })}
                className="inline-flex items-center gap-2 rounded-full bg-champagne-400 hover:bg-champagne-300 text-graphite-900 px-8 h-13 text-[15px] font-medium transition"
              >
                Задать вопрос продавцу
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
