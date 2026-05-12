import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import { PHONE1, PHONE2, PHONE1_HREF, PHONE2_HREF, EMAIL, ADDRESS, HOURS } from "@/data/nav";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контактная информация БЕТОН-ЗАВОД. Телефоны, адрес, email. Заказ бетона круглосуточно.",
};

export default function KontaktyPage() {
  return (
    <>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Контакты</h1>
          <p className="text-green-200">Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: Phone, label: "Мобильный", value: PHONE1, href: PHONE1_HREF },
              { icon: Phone, label: "Городской", value: PHONE2, href: PHONE2_HREF },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Clock, label: "Режим работы", value: HOURS, href: undefined },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-green-700" />
                </div>
                <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="font-bold text-gray-900 hover:text-green-700 transition">
                    {item.value}
                  </a>
                ) : (
                  <div className="font-bold text-gray-900">{item.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Address + map placeholder */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Как нас найти</h2>
              <div className="flex items-start gap-3 p-5 bg-gray-50 rounded-xl mb-4">
                <MapPin size={20} className="text-green-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{ADDRESS}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Основной завод и офис компании. Самовывоз доступен ежедневно, круглосуточно.
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>На автомобиле:</strong> Двигайтесь по Сибирскому тракту в сторону Берёзовского, поворот на бетонный завод по указателям.</p>
                <p><strong>Ближайшие остановки:</strong> автобусы 14, 27, 56 — остановка «Сибирский тракт, 57».</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl min-h-[300px] flex items-center justify-center text-gray-400">
              <div className="text-center">
                <MapPin size={40} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">Карта</p>
                <p className="text-xs mt-1">Сибирский тракт, 57, Екатеринбург</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
