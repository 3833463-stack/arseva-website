import Link from "next/link";
import { MapPin } from "lucide-react";
import { deliveryPrices } from "@/data/concrete";

export function DeliverySection() {
  const cityList = [
    { name: "Берёзовский",      slug: "berezovskiy" },
    { name: "Верхняя Пышма",    slug: "verhnyaya-pyishma" },
    { name: "Арамиль",          slug: "aramil" },
    { name: "Сысерть",          slug: "syisert" },
    { name: "Первоуральск",     slug: "pervouralsk" },
    { name: "Ревда",            slug: "revda" },
    { name: "Полевской",        slug: "polevskoy" },
    { name: "Каменск-Уральский",slug: "kamensk-uralskiy" },
    { name: "Нижний Тагил",     slug: "nijniy-tagil" },
    { name: "Асбест",           slug: "asbest" },
    { name: "Реж",              slug: "rej" },
    { name: "Алапаевск",        slug: "alapaevsk" },
    { name: "Артёмовский",      slug: "artemovskiy" },
    { name: "Богданович",       slug: "bogdanovich" },
    { name: "Камышлов",         slug: "kamyishlov" },
    { name: "Заречный",         slug: "zarechnyiy" },
    { name: "Новоуральск",      slug: "novouralsk" },
    { name: "Невьянск",         slug: "nevyansk" },
    { name: "Среднеуральск",    slug: "sredneuralsk" },
    { name: "Белоярский",       slug: "beloyarskiy" },
    { name: "Кировград",        slug: "kirovgrad" },
    { name: "Сухой Лог",        slug: "suhoy-log" },
    { name: "Дегтярск",         slug: "degtyarsk" },
    { name: "Михайловск",       slug: "mihaylovsk" },
    { name: "Нижние Серги",     slug: "nijnii-sergi" },
    { name: "Красноуфимск",     slug: "krasnoufimsk" },
    { name: "Талица",           slug: "talitsa" },
    { name: "Косулино",         slug: "kosulino" },
    { name: "Кольцово",         slug: "koltsovo" },
    { name: "Горный Щит",       slug: "gornyiy-schit" },
  ];

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Территория доставки</h2>
            <p className="text-green-200 mt-2">
              Доставляем бетон в 40+ городов и посёлков Свердловской области. Нажмите на город — узнайте цены и условия.
            </p>
          </div>
          <Link href="/dostavka"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shrink-0">
            Подробнее о доставке →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {cityList.map((city) => (
            <Link
              key={city.slug}
              href={`/dostavka/${city.slug}`}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/25 transition rounded-full px-3 py-1.5 text-sm text-white border border-white/10 hover:border-white/30"
            >
              <MapPin size={11} className="text-green-300 shrink-0" />{city.name}
            </Link>
          ))}
          <Link href="/dostavka"
            className="flex items-center bg-white/5 hover:bg-white/15 transition rounded-full px-3 py-1.5 text-sm text-green-300 border border-white/10">
            и другие города →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-sm text-green-200 mb-1">По Екатеринбургу</div>
            <div className="text-2xl font-extrabold text-white">{deliveryPrices.cityPerM3} ₽/м³</div>
            <div className="text-xs text-green-300 mt-1">в черте города</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-sm text-green-200 mb-1">За пределы города</div>
            <div className="text-2xl font-extrabold text-white">{deliveryPrices.perKm} ₽/км</div>
            <div className="text-xs text-green-300 mt-1">от заводских ворот</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-sm text-green-200 mb-1">Минимальная стоимость</div>
            <div className="text-2xl font-extrabold text-white">{deliveryPrices.minOrder.toLocaleString("ru")} ₽</div>
            <div className="text-xs text-green-300 mt-1">при заказе менее 6 м³</div>
          </div>
        </div>
      </div>
    </section>
  );
}
