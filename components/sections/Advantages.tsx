import { Truck, FlaskConical, Clock, BadgeRussianRuble, FileText } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Свой автопарк",
    desc: "Собственный парк миксеров и бетононасосов. Доставка в любой район города и области без посредников.",
  },
  {
    icon: FlaskConical,
    title: "Материалы по ГОСТ",
    desc: "Собственная лаборатория контроля качества. Все партии сертифицированы и соответствуют ГОСТ 7473-2010.",
  },
  {
    icon: Clock,
    title: "Круглосуточная доставка",
    desc: "Принимаем заказы 24/7, без выходных и праздников. Выезд миксера в течение 1–2 часов.",
  },
  {
    icon: BadgeRussianRuble,
    title: "Конкурентные цены",
    desc: "Прямые поставки с завода без наценок посредников. Скидки при объёме от 5 м³ и постоянным клиентам.",
  },
  {
    icon: FileText,
    title: "Работа с юрлицами",
    desc: "Заключаем договоры с НДС и без. Полный пакет документов: накладные, сертификаты, счета-фактуры.",
  },
];

export function Advantages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Почему выбирают нас</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            16 заводов по всей Свердловской области — надёжная цепочка от производства до вашего объекта.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-6 hover:bg-green-50 hover:border-green-200 border border-transparent transition-colors group">
              <div className="w-12 h-12 bg-green-700 group-hover:bg-green-600 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
