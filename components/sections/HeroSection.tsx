"use client";
import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { PHONE1, PHONE1_HREF } from "@/data/nav";

const stats = [
  { value: "16", label: "заводов" },
  { value: "70+", label: "городов доставки" },
  { value: "24/7", label: "без выходных" },
  { value: "с 2010", label: "на рынке" },
];

export function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Принимаем заказы круглосуточно
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            Продажа бетона<br />
            <span className="text-green-300">в Екатеринбурге</span><br />
            и Свердловской области
          </h1>

          <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-xl">
            Доступные цены, круглосуточная доставка миксером, собственный автопарк.
            Материалы по ГОСТ, лабораторный контроль качества.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href={PHONE1_HREF}
              className="flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3.5 rounded-lg text-base hover:bg-green-50 transition-colors shadow-lg">
              <Phone size={18} />{PHONE1}
            </a>
            <button
              onClick={() => document.getElementById("price-table")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3.5 rounded-lg text-base hover:bg-white/10 transition-colors">
              Смотреть цены
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white leading-none">{s.value}</div>
                <div className="text-sm text-green-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
