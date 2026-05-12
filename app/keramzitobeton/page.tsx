import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import { keramzitGrades } from "@/data/concrete";

export const metadata: Metadata = {
  title: "Керамзитобетон в Екатеринбурге — цена и доставка",
  description:
    "Купить керамзитобетон в Екатеринбурге. Марки М-50–М-200, производство по ГОСТ 25820-2014. Доставка по Свердловской области круглосуточно.",
};

export default function KeramzitobetonPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Керамзитобетон</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Керамзитобетон</h1>
          <p className="text-green-200 max-w-2xl">
            Лёгкий конструкционный бетон на керамзитовом заполнителе. Марки М-50–М-200,
            производство по ГОСТ 25820-2014.
          </p>
        </div>
      </div>

      {/* Прайс */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Цены на керамзитобетон</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
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
                    <td className="px-5 py-3.5 font-bold text-green-700">{g.grade}</td>
                    <td className="px-4 py-3.5 text-gray-600">{g.density}</td>
                    <td className="px-4 py-3.5 text-gray-600">{g.class || "—"}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{g.use}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-green-700">
                      от {g.price.toLocaleString("ru")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Преимущества */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Преимущества керамзитобетона</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { title: "Малый вес", desc: "Плотность от 500 кг/м³ — в 2–4 раза легче тяжёлого бетона. Снижает нагрузку на фундамент и перекрытия." },
              { title: "Теплоизоляция", desc: "Керамзитовый заполнитель — пористый материал с низкой теплопроводностью. Стены из керамзитобетона теплее бетонных." },
              { title: "Экономия", desc: "Меньший вес — меньшие нагрузки на несущие конструкции — экономия на фундаменте и арматуре." },
              { title: "Экологичность", desc: "Керамзит — обожжённая глина. Не выделяет вредных веществ, безопасен для жилых помещений." },
              { title: "Огнестойкость", desc: "Выдерживает воздействие открытого огня без разрушения. Не поддерживает горение." },
              { title: "Морозостойкость", desc: "Хорошо переносит циклы замораживания–оттаивания благодаря пористой структуре заполнителя." },
            ].map((a) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl p-6">
                <div className="font-bold text-gray-900 mb-2">{a.title}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Что такое керамзитобетон</h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Керамзитобетон — разновидность лёгкого бетона, в котором в качестве крупного заполнителя
              используется керамзит — гранулы из обожжённой вспученной глины с пористой структурой.
              Материал обладает значительно меньшей плотностью (500–1800 кг/м³ против 2300–2500 кг/м³
              у тяжёлого бетона), при этом сохраняя достаточную несущую способность для большинства
              гражданских и промышленных конструкций.
            </p>
            <p>
              Марка керамзитобетона обозначает среднюю прочность материала.
              Для теплоизоляционных засыпок и перегородок достаточно М-50–М-75,
              для несущих стен малоэтажных зданий — М-100–М-150,
              для перекрытий и колонн — М-200.
            </p>
            <p>
              БЕТОН-ЗАВОД производит керамзитобетон по ГОСТ 25820-2014 «Бетоны лёгкие».
              Используем керамзит Сухоложского завода фракций 5–10 мм и 10–20 мм.
              Доставка осуществляется автомиксерами. Минимальный заказ — 2 м³.
            </p>
            <p>
              Состав керамзитобетонной смеси: портландцемент, керамзитовый гравий или щебень,
              кварцевый песок, вода и при необходимости пластифицирующие добавки.
              Точная рецептура подбирается лабораторией под требования заказчика.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
