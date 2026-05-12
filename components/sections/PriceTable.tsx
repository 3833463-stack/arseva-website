import Link from "next/link";
import { concreteGrades } from "@/data/concrete";

export function PriceTable() {
  return (
    <section id="price-table" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Цены на бетон</h2>
            <p className="text-gray-500 mt-2">Цены указаны за 1 м³, НДС включён. Доставка — по договорённости.</p>
          </div>
          <Link href="/prajslajst"
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition text-sm shrink-0">
            Полный прайс-лист →
          </Link>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="text-left px-5 py-3.5 font-semibold">Марка</th>
                <th className="text-left px-4 py-3.5 font-semibold">Класс</th>
                <th className="text-left px-4 py-3.5 font-semibold">Морозост.</th>
                <th className="text-left px-4 py-3.5 font-semibold">Водонепр.</th>
                <th className="text-left px-4 py-3.5 font-semibold">Подвижность</th>
                <th className="text-left px-4 py-3.5 font-semibold">Область применения</th>
                <th className="text-right px-4 py-3.5 font-semibold">Самовывоз</th>
                <th className="text-right px-5 py-3.5 font-semibold">С доставкой</th>
                <th className="px-4 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {concreteGrades.map((g, i) => (
                <tr key={g.grade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3.5 font-bold text-green-700">{g.grade}</td>
                  <td className="px-4 py-3.5 text-gray-600">{g.class}</td>
                  <td className="px-4 py-3.5 text-gray-600">{g.frost}</td>
                  <td className="px-4 py-3.5 text-gray-600">{g.water}</td>
                  <td className="px-4 py-3.5 text-gray-600">{g.mobility}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-xs max-w-[200px]">{g.use}</td>
                  <td className="px-4 py-3.5 text-right font-semibold text-gray-900">
                    от {g.price.toLocaleString("ru")} ₽
                  </td>
                  <td className="px-5 py-3.5 text-right font-bold text-green-700">
                    от {g.deliveryPrice.toLocaleString("ru")} ₽
                  </td>
                  <td className="px-4 py-3.5">
                    <Link href={`/beton/${g.slug}`}
                      className="text-xs bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 rounded transition-colors whitespace-nowrap">
                      Узнать
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {concreteGrades.map((g) => (
            <div key={g.grade} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="font-extrabold text-lg text-green-700">{g.grade}</span>
                  <span className="ml-2 text-sm text-gray-500">{g.class}</span>
                </div>
                <Link href={`/beton/${g.slug}`}
                  className="text-xs bg-green-700 text-white px-3 py-1.5 rounded">
                  Узнать
                </Link>
              </div>
              <p className="text-xs text-gray-500 mb-3">{g.use}</p>
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs">Самовывоз</span>
                  <div className="font-semibold">от {g.price.toLocaleString("ru")} ₽/м³</div>
                </div>
                <div>
                  <span className="text-gray-400 text-xs">С доставкой</span>
                  <div className="font-bold text-green-700">от {g.deliveryPrice.toLocaleString("ru")} ₽/м³</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-400 text-center">
          * Цены носят справочный характер. Для уточнения стоимости свяжитесь с менеджером.
        </p>
      </div>
    </section>
  );
}
