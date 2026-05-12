import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Отсев, песок, щебень в Екатеринбурге — цена и доставка",
  description:
    "Купить щебень, строительный песок и отсев в Екатеринбурге. Доставка по Свердловской области. Сертифицированные материалы по ГОСТ.",
};

const materials = [
  {
    name: "Щебень гранитный 5–20 мм",
    category: "Щебень",
    desc: "Основная строительная фракция. Применяется в производстве бетона, дорожном строительстве, устройстве оснований. ГОСТ 8267-93.",
    price: "от 1 800 ₽/т",
    uses: ["Производство бетонных смесей", "Основания дорог и площадок", "Дренажные системы", "Отсыпка территорий"],
  },
  {
    name: "Щебень гранитный 20–40 мм",
    category: "Щебень",
    desc: "Крупная фракция для дорожных работ и производства бетона с повышенной прочностью. Коэффициент лещадности — Л1.",
    price: "от 1 700 ₽/т",
    uses: ["Дорожное строительство", "Железнодорожный балласт", "Строительство мостов", "Монолитные конструкции"],
  },
  {
    name: "Отсев гранитный (0–5 мм)",
    category: "Отсев",
    desc: "Мелкодисперсный материал — побочный продукт дробления гранита. Используется как замена песка и для подготовки оснований.",
    price: "от 900 ₽/т",
    uses: ["Замена строительного песка", "Подготовка оснований", "Отмостки и дорожки", "Наполнитель для строительных смесей"],
  },
  {
    name: "Песок речной строительный",
    category: "Песок",
    desc: "Промытый речной песок без посторонних включений. Модуль крупности 2,0–2,5. ГОСТ 8736-2014. Подходит для бетонных смесей высших марок.",
    price: "от 1 100 ₽/т",
    uses: ["Производство бетона и растворов", "Кладочные и штукатурные работы", "Стяжки полов", "Детские площадки"],
  },
  {
    name: "Песок карьерный сеяный",
    category: "Песок",
    desc: "Карьерный песок, очищенный от крупных включений. Более доступная альтернатива речному песку для работ, не требующих высокой чистоты.",
    price: "от 800 ₽/т",
    uses: ["Обратная засыпка", "Подготовка основания под фундамент", "Планировочные работы", "Производство строительных растворов М100–М150"],
  },
];

const categories = ["Щебень", "Отсев", "Песок"];

export default function MateriajlyPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Отсев, Песок, Щебень</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Нерудные материалы</h1>
          <p className="text-green-200 max-w-2xl">
            Отсев, речной и карьерный песок, гранитный щебень различных фракций.
            Сертифицированные материалы с доставкой по Свердловской области.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          {categories.map((cat) => {
            const items = materials.filter((m) => m.category === cat);
            return (
              <div key={cat} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">{cat}</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((m) => (
                    <div key={m.name} className="border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-bold text-gray-900 text-[17px] leading-snug">{m.name}</h3>
                        <div className="shrink-0 text-right">
                          <div className="font-extrabold text-green-700 text-lg">{m.price}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{m.desc}</p>
                      <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Применение</div>
                      <ul className="grid grid-cols-2 gap-1.5">
                        {m.uses.map((u) => (
                          <li key={u} className="flex items-center gap-1.5 text-xs text-gray-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SEO */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Информация о доставке материалов</h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Доставка нерудных материалов осуществляется самосвалами грузоподъёмностью 10, 20 и 30 тонн.
              Минимальный объём заказа — 10 тонн. Для крупных объектов предусмотрена поставка
              автопоездами (30–40 т за рейс). Возможна самовывоз с площадки на Сибирском тракте, 57.
            </p>
            <p>
              Цены указаны без учёта доставки и зависят от объёма партии. При заказе от 100 тонн
              предоставляется персональная скидка. Для юридических лиц — безналичная оплата,
              договор поставки, полный пакет документов.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
