import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { concreteGrades } from "@/data/concrete";
import { ContactSection } from "@/components/sections/ContactSection";
import { Calculator } from "@/components/sections/Calculator";
import { OrderButton } from "@/components/ui/OrderButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return concreteGrades.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const grade = concreteGrades.find((g) => g.slug === slug);
  if (!grade) return {};
  return {
    title: `Бетон ${grade.grade} (${grade.class}) — цена от ${grade.deliveryPrice.toLocaleString("ru")} ₽/м³`,
    description: `Купить бетон ${grade.grade} (${grade.class}) в Екатеринбурге. ${grade.use}. Доставка круглосуточно.`,
  };
}

export default async function BetonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const grade = concreteGrades.find((g) => g.slug === slug);
  if (!grade) notFound();

  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <ChevronRight size={14} />
            <Link href="/beton/m100" className="hover:text-white transition">Бетон</Link>
            <ChevronRight size={14} />
            <span className="text-white">{grade.grade}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1">
            Бетон {grade.grade} ({grade.class})
          </h1>
          <p className="text-green-200">{grade.use}</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Класс прочности", value: grade.class },
                  { label: "Морозостойкость", value: grade.frost },
                  { label: "Водонепроницаемость", value: grade.water },
                  { label: "Подвижность", value: grade.mobility },
                ].map((p) => (
                  <div key={p.label} className="border border-gray-200 rounded-xl p-4">
                    <div className="text-xs text-gray-400 mb-1">{p.label}</div>
                    <div className="text-xl font-extrabold text-gray-900">{p.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Область применения</h2>
                <p className="text-gray-600">{grade.use}. Бетон {grade.grade} соответствует ГОСТ 7473-2010 и ГОСТ 26633-2015.</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 h-fit">
              <div className="text-sm text-gray-500 mb-1">Цена самовывоз</div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">от {grade.price.toLocaleString("ru")} ₽</div>
              <div className="text-xs text-gray-400 mb-4">за 1 м³, с НДС</div>

              <div className="text-sm text-gray-500 mb-1">С доставкой</div>
              <div className="text-3xl font-extrabold text-green-700 mb-1">от {grade.deliveryPrice.toLocaleString("ru")} ₽</div>
              <div className="text-xs text-gray-400 mb-5">за 1 м³, с НДС</div>

              <OrderButton label={`Заказать бетон ${grade.grade}`} />
            </div>
          </div>
        </div>
      </section>

      <Calculator />
      <ContactSection />
    </>
  );
}
