import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { OZON_URL, OZON_SELLER_URL } from "@/data/nav";

const cols = [
  {
    title: "Каталог",
    links: [
      { label: "Все товары", href: "/catalog" },
      { label: "Подбор массажера", href: "/quiz" },
      { label: "Перкуссионные", href: "/catalog?cat=percussion" },
      { label: "Для ног", href: "/catalog?cat=foot" },
      { label: "Для шеи и плеч", href: "/catalog?cat=neck" },
      { label: "Для глаз", href: "/catalog?cat=eye" },
    ],
  },
  {
    title: "Бренд",
    links: [
      { label: "О бренде", href: "/about" },
      { label: "Гарантия", href: "/warranty" },
      { label: "B2B", href: "/b2b" },
      { label: "Контакты", href: "/contacts" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Купить",
    links: [
      { label: "Купить на Ozon", href: OZON_URL, external: true },
      { label: "Продавец ARSEVA на Ozon", href: OZON_SELLER_URL, external: true },
      { label: "Задать вопрос продавцу", href: OZON_SELLER_URL, external: true },
    ],
  },
  {
    title: "Юридическое",
    links: [
      { label: "Политика конфиденциальности", href: "/legal/privacy" },
      { label: "Пользовательское соглашение", href: "/legal/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-graphite-950 text-bone-100 pt-24 pb-10">
      <Container>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-display text-[28px] tracking-[0.2em] font-semibold">ARSEVA</div>
            <p className="mt-5 text-sm text-bone-100/60 max-w-xs">
              Техника для восстановления, массажа и ухода за телом. Создана для регулярного
              домашнего ритуала и поддержки после нагрузки.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={OZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#005BFF] hover:bg-[#0050E0] transition px-5 py-2.5 text-sm font-medium text-white w-fit"
              >
                Купить на Ozon
              </a>
              <a
                href={OZON_SELLER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition px-5 py-2.5 text-sm font-medium text-bone-100 w-fit"
              >
                Задать вопрос продавцу
              </a>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-[0.22em] text-bone-100/40">{c.title}</div>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {(l as any).external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-300 transition">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="hover:text-champagne-300 transition">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone-100/40">
          <p>© {new Date().getFullYear()} ARSEVA. Все права защищены.</p>
          <p>
            Информация на сайте носит справочный характер. Товары не являются медицинскими изделиями. При наличии заболеваний проконсультируйтесь со специалистом.
          </p>
        </div>
      </Container>
    </footer>
  );
}
