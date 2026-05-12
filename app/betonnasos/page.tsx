import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Услуги бетононасоса в Екатеринбурге — аренда с оператором",
  description:
    "Аренда бетононасоса в Екатеринбурге и Свердловской области. Подача бетона на высоту до 52 м и расстояние до 150 м. Опытные операторы, работа круглосуточно.",
};

const equipment = [
  {
    name: "Автобетононасос Putzmeister 28м",
    reach: "28 м по высоте / 22 м по горизонтали",
    flow: "до 80 м³/ч",
    use: "Малоэтажное строительство, фундаменты, стяжки",
    price: "от 8 000 ₽/ч",
  },
  {
    name: "Автобетононасос Putzmeister 36м",
    reach: "36 м по высоте / 32 м по горизонтали",
    flow: "до 100 м³/ч",
    use: "Многоэтажные здания, перекрытия, колонны",
    price: "от 10 000 ₽/ч",
  },
  {
    name: "Автобетононасос Schwing 52м",
    reach: "52 м по высоте / 46 м по горизонтали",
    flow: "до 160 м³/ч",
    use: "Высотные здания, сложные конструкции",
    price: "от 14 000 ₽/ч",
  },
  {
    name: "Стационарный бетононасос",
    reach: "подача по трубопроводу до 300 м",
    flow: "до 60 м³/ч",
    use: "Подвалы, тоннели, труднодоступные объекты",
    price: "от 6 000 ₽/ч",
  },
];

const advantages = [
  "Собственный парк бетононасосов — не субподряд",
  "Опытные операторы с допуском к работе на высоте",
  "Подача в труднодоступные места — подвалы, шахты",
  "Работа круглосуточно, в т.ч. в ночное время",
  "Минимальное время простоя между заливками",
  "Согласование с диспетчером за 2–3 часа",
];

export default function BetonnasoPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Бетононасос</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Услуги бетононасоса</h1>
          <p className="text-green-200 max-w-2xl">
            Подача бетонной смеси на высоту до 52 м и расстояние до 300 м.
            Собственный парк автобетононасосов Putzmeister и Schwing.
          </p>
        </div>
      </div>

      {/* Оборудование */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Наше оборудование</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {equipment.map((e) => (
              <div key={e.name} className="border border-gray-200 rounded-2xl p-6 hover:border-green-300 transition">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-bold text-gray-900 text-[16px]">{e.name}</h3>
                  <div className="shrink-0 bg-green-50 rounded-xl px-3 py-2 text-right">
                    <div className="text-xs text-gray-400">Стоимость</div>
                    <div className="font-extrabold text-green-700 text-sm">{e.price}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-gray-400 w-28 shrink-0">Досягаемость:</span>
                    <span className="text-gray-700 font-medium">{e.reach}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-400 w-28 shrink-0">Производит.:</span>
                    <span className="text-gray-700 font-medium">{e.flow}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-400 w-28 shrink-0">Применение:</span>
                    <span className="text-gray-600">{e.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Преимущества */}
          <div className="bg-green-50 rounded-2xl p-7">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Почему заказывают у нас</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {advantages.map((a) => (
                <div key={a} className="flex items-start gap-3 text-[15px] text-gray-700">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Как работает */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Как заказать бетононасос</h2>
          <div className="grid sm:grid-cols-4 gap-5 mb-10">
            {[
              { step: "1", title: "Заявка", desc: "Позвоните или оставьте заявку на сайте. Укажите объём, этажность, адрес объекта." },
              { step: "2", title: "Согласование", desc: "Менеджер подберёт подходящее оборудование и рассчитает стоимость в течение 30 минут." },
              { step: "3", title: "Выезд", desc: "Автобетононасос прибывает на объект за 1–3 часа. Оператор проводит инструктаж по месту подачи." },
              { step: "4", title: "Работа", desc: "Непрерывная подача бетонной смеси. Оператор управляет стрелой и контролирует качество подачи." },
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
            <h3 className="text-lg font-bold text-gray-900">Когда необходим бетононасос</h3>
            <p>
              Бетононасос незаменим в ситуациях, когда прямая подача миксера к месту укладки невозможна:
              высотные этажи, подвальные помещения, сложная конфигурация объекта, ограниченный доступ.
              Механизированная подача по трубопроводу исключает ручной труд и ускоряет заливку в 3–5 раз
              по сравнению с подачей вёдрами или тачками.
            </p>
            <p>
              Стоимость аренды зависит от типа насоса, продолжительности работы (минимум 3 часа),
              удалённости объекта. В базовую стоимость включено: выезд в черте Екатеринбурга,
              оператор, промывка оборудования после окончания работ.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
