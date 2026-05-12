import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "oblast-primeneniya-betona",
    title: "Область применения бетона",
    excerpt: "Бетон — универсальный материал, который используется в жилищном, промышленном и дорожном строительстве. Разбираемся, какая марка подходит для вашей задачи.",
    date: "15 января 2024",
    readTime: "5 мин",
  },
  {
    slug: "defekty-betona",
    title: "Дефекты бетона и способы их устранения",
    excerpt: "Трещины, расслоение, пористость — основные дефекты бетонных конструкций и их причины. Как избежать проблем при заливке и что делать, если они уже появились.",
    date: "8 февраля 2024",
    readTime: "7 мин",
  },
  {
    slug: "faktory-stoimosti-betona",
    title: "От каких факторов зависит стоимость бетона",
    excerpt: "Цена кубометра бетонной смеси определяется маркой, составом, расстоянием доставки и сезонностью. Рассказываем, на чём можно сэкономить без потери качества.",
    date: "22 марта 2024",
    readTime: "4 мин",
  },
  {
    slug: "uhod-za-betonom",
    title: "Уход за бетоном после заливки",
    excerpt: "Правильный уход за свежезалитым бетоном — залог его прочности и долговечности. Увлажнение, укрытие и оптимальные температурные условия в первые 28 суток.",
    date: "5 апреля 2024",
    readTime: "6 мин",
  },
];

export function ArticlesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Статьи</h2>
            <p className="text-gray-500 mt-2">Полезные материалы о бетоне и строительстве</p>
          </div>
          <Link href="/stati" className="text-green-700 font-semibold hover:text-green-800 transition text-sm flex items-center gap-1">
            Все статьи <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a) => (
            <article key={a.slug} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-green-700 to-green-600 h-36 flex items-end p-4">
                <span className="text-xs text-green-200 bg-white/15 rounded-full px-2.5 py-1">{a.readTime} чтения</span>
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-400 mb-2">{a.date}</div>
                <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-2 group-hover:text-green-700 transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">{a.excerpt}</p>
                <Link href={`/stati/${a.slug}`}
                  className="text-sm text-green-700 font-semibold hover:text-green-800 transition flex items-center gap-1">
                  Читать <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
