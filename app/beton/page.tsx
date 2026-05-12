import type { Metadata } from "next";
import Link from "next/link";
import { concreteGrades } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";
import { Calculator } from "@/components/sections/Calculator";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Купить бетон в Екатеринбурге — все марки с доставкой",
  description:
    "Бетон всех марок от М100 до М550 с доставкой по Екатеринбургу и Свердловской области. Производство по ГОСТ, лабораторный контроль. Работаем круглосуточно.",
};

export default function BetonPage() {
  return (
    <>
      {/* Шапка страницы */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Бетон</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Бетон в Екатеринбурге</h1>
          <p className="text-green-200 max-w-2xl">
            Производим и доставляем бетонные смеси всех марок — от М100 до М550.
            Собственный автопарк, круглосуточная подача миксеров, ГОСТ-качество.
          </p>
        </div>
      </div>

      {/* Карточки марок */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concreteGrades.map((g) => (
              <Link key={g.slug} href={`/beton/${g.slug}`}
                className="border border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-2xl font-extrabold text-green-700 group-hover:text-green-800 transition">{g.grade}</div>
                    <div className="text-sm text-gray-500">{g.class} · {g.frost} · {g.water}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl px-3 py-1.5 text-right">
                    <div className="text-xs text-gray-400">с доставкой</div>
                    <div className="font-extrabold text-green-700 text-sm">от {g.deliveryPrice.toLocaleString("ru")} ₽</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{g.use}</p>
                <div className="flex items-center gap-1.5 text-green-700 text-sm font-semibold">
                  Подробнее <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Текстовый блок SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">О бетонных смесях БЕТОН-ЗАВОД</h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Бетон — основной строительный материал для возведения фундаментов, перекрытий, колонн,
              дорожных покрытий и гидротехнических сооружений. Его марка определяет прочность на сжатие
              и подбирается в зависимости от назначения конструкции и условий её эксплуатации.
            </p>
            <p>
              Все бетонные смеси БЕТОН-ЗАВОД производятся на современных автоматизированных узлах.
              Соотношение цемента, заполнителей и воды задаётся программно для каждого замеса.
              Входящее сырьё — цемент марки ЦЕМ II 42,5Н, сертифицированный щебень фракции 5–20 мм,
              мытый речной или карьерный песок — проверяется в собственной лаборатории.
            </p>
            <p>
              Готовая продукция сопровождается паспортом качества и протоколом испытаний.
              По запросу предоставляем сертификат соответствия. Бетон соответствует
              ГОСТ 7473-2010 «Смеси бетонные» и ГОСТ 26633-2015 «Бетоны тяжёлые и мелкозернистые».
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">Состав бетонной смеси</h3>
            <p>
              Тяжёлый бетон состоит из четырёх основных компонентов: портландцемент (вяжущее),
              щебень (крупный заполнитель), песок (мелкий заполнитель) и вода. В зависимости от марки
              и назначения смеси добавляются пластификаторы, ускорители или замедлители схватывания,
              противоморозные добавки, фиброволокно.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">Как выбрать марку бетона</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>М100–М150</strong> — подготовительные работы: подбетонка, стяжки, отмостки.</li>
              <li><strong>М200</strong> — монолитные фундаменты частных домов, перекрытия, лестницы.</li>
              <li><strong>М250–М300</strong> — несущие колонны, плиты перекрытий многоэтажных зданий.</li>
              <li><strong>М350</strong> — гидротехнические сооружения, дороги, мосты.</li>
              <li><strong>М400–М500</strong> — промышленные и специальные конструкции повышенной прочности.</li>
            </ul>
          </div>
        </div>
      </section>

      <Calculator />
      <ContactSection />
    </>
  );
}
