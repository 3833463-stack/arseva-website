import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Статьи о бетоне и строительстве",
  description:
    "Полезные материалы о бетоне: выбор марки, правила заливки, уход за бетоном, дефекты и способы их устранения, стоимость и факторы ценообразования.",
};

const categories = ["Все", "Выбор материала", "Качество", "Технология", "Цены"];

export default function StatiPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <span className="text-white">Статьи</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Статьи о бетоне</h1>
          <p className="text-green-200">Полезные материалы для строителей и заказчиков</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          {/* Категории */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <span key={c}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition cursor-pointer
                  ${c === "Все"
                    ? "bg-green-700 text-white border-green-700"
                    : "border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700"}`}>
                {c}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.slug}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="bg-gradient-to-br from-green-700 to-green-500 h-40 flex flex-col justify-between p-5">
                  <span className="text-xs text-green-200 bg-white/15 rounded-full px-2.5 py-1 w-fit">
                    {a.category}
                  </span>
                  <div className="flex items-center gap-2 text-green-100 text-xs">
                    <Clock size={11} />
                    {a.readTime} чтения
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-gray-400 mb-2">{a.date}</div>
                  <h2 className="font-bold text-gray-900 text-[16px] leading-snug mb-3 group-hover:text-green-700 transition-colors flex-1">
                    {a.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <Link href={`/stati/${a.slug}`}
                    className="flex items-center gap-1.5 text-sm text-green-700 font-semibold hover:text-green-800 transition mt-auto">
                    Читать статью <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
