import Link from "next/link";

const facts = [
  { value: "16", label: "бетонных заводов" },
  { value: "70+", label: "городов и посёлков" },
  { value: "14", label: "лет на рынке" },
  { value: "5000+", label: "клиентов ежегодно" },
];

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              О компании<br />БЕТОН-ЗАВОД
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                БЕТОН-ЗАВОД — крупнейшая сеть бетонных заводов Свердловской области. С 2010 года мы производим
                и поставляем бетонные смеси всех марок для жилого, промышленного и дорожного строительства.
              </p>
              <p>
                Наши производственные комплексы оснащены современным оборудованием и работают в автоматическом
                режиме, что обеспечивает точное соблюдение рецептуры и неизменно высокое качество каждой партии.
              </p>
              <p>
                Собственный парк автомобилей-миксеров позволяет доставить готовую смесь на любой строительный
                объект Екатеринбурга и области в сжатые сроки. Принимаем заказы круглосуточно, без выходных.
              </p>
              <p>
                Работаем как с частными лицами, так и с организациями — заключаем договоры с НДС,
                предоставляем полный пакет сопроводительных документов и сертификаты качества.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/o-kompanii"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Подробнее о нас
              </Link>
              <Link href="/kontakty"
                className="border border-gray-300 hover:border-green-700 hover:text-green-700 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Контакты
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-white rounded-2xl border border-gray-200 p-7 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-green-700 mb-1">{f.value}</div>
                <div className="text-sm text-gray-500">{f.label}</div>
              </div>
            ))}
            <div className="col-span-2 bg-green-700 rounded-2xl p-6 text-white text-center">
              <div className="text-2xl font-extrabold mb-1">Территория доставки</div>
              <div className="text-green-100 text-sm">Екатеринбург и 70+ населённых пунктов Свердловской области</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
