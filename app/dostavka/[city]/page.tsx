import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Phone, Clock, Truck, MapPin } from "lucide-react";
import { cities, getCityBySlug, calcDeliveryPrice } from "@/data/cities";
import { concreteGrades, deliveryPrices } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";
import { PHONE1, PHONE1_HREF, PHONE2, PHONE2_HREF } from "@/data/nav";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Доставка бетона в ${city.name} — цены от ${concreteGrades[0].price.toLocaleString("ru")} ₽/м³`,
    description: `Купить бетон с доставкой в ${city.name}. Все марки М100–М400, собственный автопарк, работаем круглосуточно. ${city.distanceKm > 0 ? `Расстояние от Екатеринбурга — ${city.distanceKm} км.` : ""}`,
  };
}

export default async function CityDeliveryPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const deliveryCost =
    city.distanceKm === 0
      ? null
      : city.distanceKm <= 15
      ? deliveryPrices.cityPerM3
      : Math.round((city.distanceKm * deliveryPrices.perKm * 2) / 10) * 10;

  const nearbyCity = city.distanceKm > 0 && city.distanceKm <= 50;

  return (
    <>
      {/* Шапка */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <Link href="/dostavka" className="hover:text-white transition">Доставка</Link>
            <ChevronRight size={14} />
            <span className="text-white">{city.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Доставка бетона в {city.name}
          </h1>
          <p className="text-green-200 max-w-2xl">{city.description}</p>
        </div>
      </div>

      {/* Ключевые факты */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Truck size={22} className="text-green-700 shrink-0" />
              <div>
                <div className="text-xs text-gray-400">Автопарк</div>
                <div className="font-bold text-gray-900">15 миксеров</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Clock size={22} className="text-green-700 shrink-0" />
              <div>
                <div className="text-xs text-gray-400">Режим работы</div>
                <div className="font-bold text-gray-900">Круглосуточно</div>
              </div>
            </div>
            {city.distanceKm > 0 && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <MapPin size={22} className="text-green-700 shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Расстояние</div>
                  <div className="font-bold text-gray-900">{city.distanceKm} км от Екатеринбурга</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 p-4 bg-green-700 rounded-xl text-white">
              <Phone size={22} className="shrink-0" />
              <div>
                <div className="text-xs text-green-200">Заказать сейчас</div>
                <a href={PHONE1_HREF} className="font-bold hover:text-green-200 transition">
                  {PHONE1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Таблица цен */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Цены на бетон с доставкой в {city.name}
          </h2>
          {deliveryCost && (
            <p className="text-gray-500 text-sm mb-6">
              Стоимость доставки —{" "}
              <strong className="text-gray-700">
                {city.distanceKm <= 15
                  ? `${deliveryPrices.cityPerM3} ₽/м³`
                  : `${deliveryPrices.perKm} ₽/км (ориентировочно от ${deliveryCost.toLocaleString("ru")} ₽ за рейс)`}
              </strong>
              . Точная стоимость уточняется при заказе.
            </p>
          )}

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                  <th className="text-left px-4 py-3.5 font-semibold">Класс</th>
                  <th className="text-left px-4 py-3.5 font-semibold">Применение</th>
                  <th className="text-right px-4 py-3.5 font-semibold">Самовывоз (₽/м³)</th>
                  <th className="text-right px-5 py-3.5 font-semibold">С доставкой (₽/м³)</th>
                </tr>
              </thead>
              <tbody>
                {concreteGrades.map((g, i) => (
                  <tr key={g.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-bold text-green-700">
                      <Link href={`/beton/${g.slug}`} className="hover:underline">{g.grade}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{g.class}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-[220px]">{g.use}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">
                      от {g.price.toLocaleString("ru")}
                    </td>
                    <td className="px-5 py-3 text-right font-bold text-green-700">
                      от {g.deliveryPrice.toLocaleString("ru")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            * Цены указаны за 1 м³ с учётом НДС. Стоимость доставки в {city.name} рассчитывается отдельно.
            Минимальный заказ — 1 м³, минимальная стоимость доставки — {deliveryPrices.minOrder.toLocaleString("ru")} ₽.
          </p>
        </div>
      </section>

      {/* Текстовый блок */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
            Бетон в {city.name}: условия поставки
          </h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              БЕТОН-ЗАВОД осуществляет круглосуточную доставку бетонных смесей в {city.name}
              {city.distanceKm > 0 ? ` и ${city.region}` : ""}. Для заказа достаточно позвонить
              по телефону <a href={PHONE1_HREF} className="text-green-700 font-semibold hover:underline">{PHONE1}</a> или
              оставить заявку на сайте — менеджер свяжется в течение 15 минут.
            </p>
            <p>
              Доставка осуществляется автомобилями-миксерами объёмом 7 и 10 м³.
              {nearbyCity
                ? ` Благодаря небольшому расстоянию от наших заводов, среднее время подачи миксера в ${city.name} составляет 1–2 часа.`
                : ` При планировании заливки в ${city.name} рекомендуем согласовать заказ за сутки, чтобы гарантировать своевременную подачу.`}
            </p>
            <p>
              Для юридических лиц и индивидуальных предпринимателей заключаем договоры поставки
              с НДС. Предоставляем полный пакет документов: товарную накладную, счёт-фактуру,
              паспорт качества и сертификат соответствия.
            </p>
            <p>
              При объёме заказа от 10 м³ действуют оптовые скидки. Для постоянных клиентов —
              персональные условия. Позвоните нам для расчёта стоимости с учётом доставки в {city.name}.
            </p>
          </div>

          {/* Преимущества */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { title: "Собственный автопарк", desc: "Не работаем через посредников — ваш заказ выполняем своим транспортом." },
              { title: "Материалы по ГОСТ", desc: "Каждая партия сертифицирована и сопровождается паспортом качества." },
              { title: "Круглосуточно", desc: "Принимаем заявки 24/7, включая праздничные дни." },
              { title: "Скидки оптом", desc: "При заказе от 10 м³ — сниженная цена без ущерба качеству." },
            ].map((a) => (
              <div key={a.title} className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{a.title}</div>
                  <div className="text-sm text-gray-500">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Другие города */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Доставка в другие города</h2>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== slug && c.slug !== "sverdlovskaya-oblast")
              .slice(0, 20)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/dostavka/${c.slug}`}
                  className="flex items-center gap-1.5 bg-gray-50 hover:bg-green-50 hover:text-green-700 border border-gray-200 hover:border-green-300 rounded-full px-3 py-1.5 text-sm text-gray-600 transition"
                >
                  <MapPin size={11} className="shrink-0" />
                  {c.name}
                </Link>
              ))}
            <Link
              href="/dostavka"
              className="flex items-center gap-1.5 bg-green-700 text-white rounded-full px-3 py-1.5 text-sm hover:bg-green-800 transition"
            >
              Все города →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
