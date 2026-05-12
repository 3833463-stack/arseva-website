import type { Metadata } from "next";
import { concreteGrades, bridgeConcreteGrades, mortarGrades, keramzitGrades } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Прайс-лист — цены на бетон, раствор, керамзитобетон",
  description:
    "Актуальный прайс-лист БЕТОН-ЗАВОД. Цены на бетон М100–М550, мостовой бетон, раствор М-100–М-300, керамзитобетон М-50–М-200. Екатеринбург.",
};

const month = new Date().toLocaleDateString("ru-RU", { month: "long", year: "numeric" });

export default function PrajslajstPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Прайс-лист</h1>
          <p className="text-green-200">Цены действительны на {month}. НДС включён.</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto space-y-14">

          {/* Тяжёлый бетон */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Бетонные смеси (тяжёлый бетон)</h2>
                <p className="text-sm text-gray-500 mt-1">ГОСТ 7473-2010, ГОСТ 26633-2015</p>
              </div>
              <Link href="/beton" className="text-sm text-green-700 font-semibold hover:text-green-800 transition shrink-0">
                Подробнее →
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Класс</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Морозост.</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Водонепр.</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Подвиж.</th>
                    <th className="text-right px-4 py-3.5 font-semibold">Самовывоз (₽/м³)</th>
                    <th className="text-right px-5 py-3.5 font-semibold">С доставкой (₽/м³)</th>
                  </tr>
                </thead>
                <tbody>
                  {concreteGrades.map((g, i) => (
                    <tr key={g.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3">
                        <Link href={`/beton/${g.slug}`} className="font-bold text-green-700 hover:underline">
                          {g.grade}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{g.class}</td>
                      <td className="px-4 py-3 text-gray-600">{g.frost}</td>
                      <td className="px-4 py-3 text-gray-600">{g.water}</td>
                      <td className="px-4 py-3 text-gray-600">{g.mobility}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">от {g.price.toLocaleString("ru")}</td>
                      <td className="px-5 py-3 text-right font-bold text-green-700">от {g.deliveryPrice.toLocaleString("ru")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Мостовой бетон */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-extrabold text-gray-900">Мостовой бетон</h2>
              <p className="text-sm text-gray-500 mt-1">Повышенная морозостойкость и водонепроницаемость для инфраструктурных объектов</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Класс</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Морозост.</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Водонепр.</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Применение</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Цена (₽/м³)</th>
                  </tr>
                </thead>
                <tbody>
                  {bridgeConcreteGrades.map((g, i) => (
                    <tr key={g.grade + g.class} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-bold text-gray-700">{g.grade}</td>
                      <td className="px-4 py-3 text-gray-600">{g.class}</td>
                      <td className="px-4 py-3 text-gray-600">{g.frost}</td>
                      <td className="px-4 py-3 text-gray-600">{g.water}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{g.use}</td>
                      <td className="px-5 py-3 text-right font-bold text-gray-700">от {g.price.toLocaleString("ru")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Растворы */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Растворы строительные</h2>
                <p className="text-sm text-gray-500 mt-1">ГОСТ 28013-98</p>
              </div>
              <Link href="/rastvor" className="text-sm text-green-700 font-semibold hover:text-green-800 transition shrink-0">
                Подробнее →
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Применение</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Цена (₽/м³)</th>
                  </tr>
                </thead>
                <tbody>
                  {mortarGrades.map((g, i) => (
                    <tr key={g.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-bold text-green-700">{g.grade}</td>
                      <td className="px-4 py-3 text-gray-600">{g.use}</td>
                      <td className="px-5 py-3 text-right font-bold text-green-700">от {g.price.toLocaleString("ru")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Керамзитобетон */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Керамзитобетон</h2>
                <p className="text-sm text-gray-500 mt-1">ГОСТ 25820-2014</p>
              </div>
              <Link href="/keramzitobeton" className="text-sm text-green-700 font-semibold hover:text-green-800 transition shrink-0">
                Подробнее →
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Плотность</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Класс прочности</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Применение</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Цена (₽/м³)</th>
                  </tr>
                </thead>
                <tbody>
                  {keramzitGrades.map((g, i) => (
                    <tr key={g.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-bold text-green-700">{g.grade}</td>
                      <td className="px-4 py-3 text-gray-600">{g.density}</td>
                      <td className="px-4 py-3 text-gray-600">{g.class || "—"}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{g.use}</td>
                      <td className="px-5 py-3 text-right font-bold text-green-700">от {g.price.toLocaleString("ru")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Доставка */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Стоимость доставки</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-4 border border-green-100">
                <div className="text-sm text-gray-500 mb-1">По Екатеринбургу</div>
                <div className="text-2xl font-extrabold text-green-700">450 ₽/м³</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-green-100">
                <div className="text-sm text-gray-500 mb-1">За пределы города</div>
                <div className="text-2xl font-extrabold text-green-700">50 ₽/км</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-green-100">
                <div className="text-sm text-gray-500 mb-1">Минимальный заказ доставки</div>
                <div className="text-2xl font-extrabold text-green-700">2 700 ₽</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Точная стоимость доставки рассчитывается индивидуально в зависимости от адреса объекта и объёма заказа.
              Уточняйте у менеджера при оформлении заказа.
              <Link href="/dostavka" className="ml-2 text-green-700 font-semibold hover:underline">
                Подробнее о доставке →
              </Link>
            </p>
          </div>

          <p className="text-xs text-gray-400 text-center">
            * Цены носят справочный характер и могут быть изменены без предупреждения.
            Все цены указаны в рублях за 1 м³ с учётом НДС 20%.
            Для получения точной стоимости свяжитесь с менеджером.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
