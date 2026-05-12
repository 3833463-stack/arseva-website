import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Truck, Clock, MapPin, BadgeRussianRuble } from "lucide-react";
import { cities } from "@/data/cities";
import { deliveryPrices } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Доставка бетона в Екатеринбурге и Свердловской области",
  description:
    "Доставка бетона по Екатеринбургу — 450 ₽/м³. За пределами города — 50 ₽/км. Собственный автопарк, круглосуточно, без выходных. 40+ городов Свердловской области.",
};

export default function DostavkaPage() {
  const mainCities = cities.filter((c) => c.slug !== "sverdlovskaya-oblast");

  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Доставка</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Доставка бетона</h1>
          <p className="text-green-200 max-w-2xl">
            По Екатеринбургу и всей Свердловской области. Собственный парк миксеров,
            круглосуточно без выходных.
          </p>
        </div>
      </div>

      {/* Ключевые факты */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Truck,               title: "Собственный автопарк", desc: "15 миксеров 7–10 м³, не считая пикового резерва" },
              { icon: Clock,               title: "Круглосуточно", desc: "Без выходных и праздников, 365 дней в году" },
              { icon: MapPin,              title: "40+ городов", desc: "Вся Свердловская область, 16 заводов" },
              { icon: BadgeRussianRuble,   title: "От 450 ₽/м³", desc: "По Екатеринбургу, за пределы — 50 ₽/км" },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-green-700" />
                </div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Тарифы на доставку</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="border-2 border-green-700 rounded-2xl p-6">
              <div className="text-sm font-semibold text-green-700 mb-1 uppercase tracking-wide">В черте Екатеринбурга</div>
              <div className="text-4xl font-extrabold text-gray-900 mb-1">{deliveryPrices.cityPerM3} ₽</div>
              <div className="text-gray-500 text-sm">за 1 м³</div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Время подачи 1–2 ч</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Все районы города</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Круглосуточно</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">За пределы города</div>
              <div className="text-4xl font-extrabold text-gray-900 mb-1">{deliveryPrices.perKm} ₽</div>
              <div className="text-gray-500 text-sm">за 1 км пути</div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Любой район области</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Согласование за сутки</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> GPS-навигация</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">Минимальная стоимость</div>
              <div className="text-4xl font-extrabold text-gray-900 mb-1">{deliveryPrices.minOrder.toLocaleString("ru")} ₽</div>
              <div className="text-gray-500 text-sm">при заказе менее 6 м³</div>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Минимальный объём — 1 м³</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Скидки от 10 м³</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Опт по договору</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>Важно:</strong> стоимость доставки рассчитывается от ворот ближайшего к вашему объекту завода.
            При заказе бетоннасоса доставка рассчитывается отдельно.
            Для точного расчёта позвоните менеджеру или оставьте заявку.
          </div>
        </div>
      </section>

      {/* Города */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Города и посёлки доставки
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Нажмите на город — узнайте цены и условия доставки бетона именно туда.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {mainCities.map((city) => (
              <Link
                key={city.slug}
                href={`/dostavka/${city.slug}`}
                className="flex items-center justify-between gap-2 bg-white border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-xl px-4 py-3 transition group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin size={14} className="text-green-600 shrink-0" />
                  <span className="font-medium text-gray-800 group-hover:text-green-700 transition text-sm truncate">
                    {city.name}
                  </span>
                </div>
                {city.distanceKm > 0 && (
                  <span className="text-xs text-gray-400 shrink-0">{city.distanceKm} км</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Как работает доставка */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Как осуществляется доставка</h2>
          <div className="grid sm:grid-cols-4 gap-6 mb-10">
            {[
              { step: "1", title: "Заявка", desc: "Позвоните или оставьте заявку онлайн. Укажите марку, объём и адрес доставки." },
              { step: "2", title: "Расчёт", desc: "Менеджер рассчитает точную стоимость с учётом доставки и перезвонит в течение 15 минут." },
              { step: "3", title: "Замес", desc: "Смесь готовится на ближайшем к вашему объекту заводе непосредственно перед отгрузкой." },
              { step: "4", title: "Доставка", desc: "Миксер прибывает в назначенное время. Водитель оформляет документы на месте." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-3">
                  {s.step}
                </div>
                <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">Технические особенности доставки</h3>
            <p>
              Бетонная смесь — скоропортящийся материал. С момента окончания замеса до начала укладки
              должно пройти не более 1,5–2 часов. Поэтому принципиально важно заранее подготовить
              опалубку, арматуру и команду для приёма бетона.
            </p>
            <p>
              Автомиксер выгружает смесь через лоток длиной до 4 м. Если миксер не может подъехать
              вплотную к месту укладки, потребуется аренда бетонного насоса для подачи по трубопроводу.
              <Link href="/betonnasos" className="ml-1 text-green-700 font-semibold hover:underline">
                Узнайте об услуге бетононасоса →
              </Link>
            </p>
            <p>
              Объём одного миксера — 7 или 10 м³. При крупных заливках (от 30 м³) мы организуем
              непрерывный конвейер из нескольких машин с минимальным интервалом между рейсами.
              Такой режим исключает «холодные швы» в монолитных конструкциях.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
