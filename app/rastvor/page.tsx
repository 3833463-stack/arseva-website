import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { mortarGrades } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Строительный раствор в Екатеринбурге — цена, доставка",
  description:
    "Купить строительный раствор М-100–М-300 в Екатеринбурге. Производство по ГОСТ 28013-98, доставка миксером по Свердловской области. Работаем круглосуточно.",
};

const mortarDetails = [
  {
    grade: "М-100",
    use: "Кирпичная кладка, штукатурка стен и потолков",
    desc: "Универсальный строительный раствор для кирпичной и блочной кладки, штукатурных работ, заделки швов. Применяется в малонагруженных конструкциях. Состав: цемент ПЦ 300, речной песок, вода.",
    apps: ["Кладка кирпича и блоков", "Штукатурка стен и потолков", "Заделка трещин и швов", "Выравнивающие стяжки (тонкий слой)"],
  },
  {
    grade: "М-150",
    use: "Кладка несущих стен",
    desc: "Раствор повышенной прочности для кладки несущих и самонесущих стен из кирпича, керамзитобетонных и газобетонных блоков. Обеспечивает надёжное сцепление и равномерное распределение нагрузок.",
    apps: ["Кладка несущих стен", "Монтаж железобетонных изделий", "Стяжки под напольные покрытия", "Выравнивание поверхностей"],
  },
  {
    grade: "М-200",
    use: "Стяжки полов, фундаментные работы",
    desc: "Прочный раствор для стяжек полов и фундаментных работ. Устойчив к истиранию и умеренным механическим нагрузкам. Подходит для помещений с повышенной влажностью при условии гидроизоляции.",
    apps: ["Стяжки полов (в т.ч. тёплый пол)", "Подготовка основания под плитку", "Бетонирование отмосток", "Фундаменты хозяйственных построек"],
  },
  {
    grade: "М-250",
    use: "Монтаж железобетонных изделий",
    desc: "Раствор с повышенной прочностью сцепления для монтажа сборных ЖБИ, заделки стыков и швов в конструкциях с умеренными нагрузками.",
    apps: ["Монтаж плит перекрытий", "Заделка стыков ЖБК", "Ступени и лестничные марши", "Устройство промышленных полов"],
  },
  {
    grade: "М-300",
    use: "Высоконагруженные конструкции, производственные полы",
    desc: "Высокопрочный раствор для ответственных конструктивных узлов, производственных полов и специальных конструкций. Морозостойкость F100.",
    apps: ["Производственные и складские полы", "Заполнение деформационных швов", "Ремонт бетонных конструкций", "Высоконагруженные несущие узлы"],
  },
];

export default function RastvorPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Раствор</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Строительный раствор</h1>
          <p className="text-green-200 max-w-2xl">
            Цементно-песчаные растворы марок М-100–М-300.
            Производство по ГОСТ 28013-98, доставка по всей Свердловской области.
          </p>
        </div>
      </div>

      {/* Прайс */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Цены на раствор</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
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
                    <td className="px-5 py-3.5 font-bold text-green-700">{g.grade}</td>
                    <td className="px-4 py-3.5 text-gray-600">{g.use}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-green-700">
                      от {g.price.toLocaleString("ru")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Подробные карточки */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Подробнее о марках</h2>
          <div className="flex flex-col gap-6">
            {mortarDetails.map((m) => {
              const priceData = mortarGrades.find((g) => g.grade === m.grade);
              return (
                <div key={m.grade} className="border border-gray-200 rounded-2xl p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-green-700">Раствор {m.grade}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{m.use}</p>
                    </div>
                    <div className="shrink-0 bg-green-50 rounded-xl px-5 py-3 text-center">
                      <div className="text-xs text-gray-400">Цена от</div>
                      <div className="text-2xl font-extrabold text-green-700">
                        {priceData?.price.toLocaleString("ru")} ₽
                      </div>
                      <div className="text-xs text-gray-400">за 1 м³ с НДС</div>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-5">{m.desc}</p>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Применение:</div>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {m.apps.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">О строительных растворах</h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Строительный раствор — смесь цемента, песка и воды с возможными добавками
              (пластификаторы, воздухововлекающие агенты, противоморозные добавки).
              В отличие от бетона, раствор не содержит крупного заполнителя (щебня),
              что делает его незаменимым для тонкослойных работ: кладки, штукатурки, стяжек.
            </p>
            <p>
              Марка строительного раствора (М-100, М-150 и т.д.) обозначает предел прочности
              на сжатие в кгс/см² через 28 суток твердения при нормальных условиях.
              Чем выше марка, тем прочнее и плотнее затвердевший материал,
              но тем выше расход цемента и итоговая стоимость.
            </p>
            <p>
              Все растворы БЕТОН-ЗАВОД производятся по ГОСТ 28013-98 «Растворы строительные».
              Для каждой партии оформляется паспорт качества с результатами испытаний.
              Минимальный объём заказа — 1 м³. Доставка — автомобилями-миксерами круглосуточно.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
