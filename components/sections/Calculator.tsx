"use client";
import { useState, useMemo } from "react";
import { concreteGrades } from "@/data/concrete";
import { Phone } from "lucide-react";
import { PHONE1_HREF, PHONE1 } from "@/data/nav";

export function Calculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [grade, setGrade] = useState("М200");

  const result = useMemo(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!l || !w || !h) return null;
    const volume = l * w * h * 1.02; // 2% compaction coefficient
    const selected = concreteGrades.find((g) => g.grade === grade);
    if (!selected) return null;
    return {
      volume: volume.toFixed(2),
      price: Math.ceil(volume * selected.deliveryPrice).toLocaleString("ru"),
    };
  }, [length, width, height, grade]);

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Калькулятор бетона</h2>
            <p className="text-gray-500 mt-2">Рассчитайте стоимость онлайн. Расчёт учитывает коэффициент уплотнения 1,02.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Длина, м", value: length, set: setLength, placeholder: "напр. 10" },
                { label: "Ширина, м", value: width, set: setWidth, placeholder: "напр. 5" },
                { label: "Высота, м", value: height, set: setHeight, placeholder: "напр. 0.2" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">{f.label}</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Марка бетона</label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {concreteGrades.map((g) => (
                  <option key={g.grade} value={g.grade}>
                    {g.grade} ({g.class}) — от {g.deliveryPrice.toLocaleString("ru")} ₽/м³
                  </option>
                ))}
              </select>
            </div>

            {result ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-green-700 font-medium mb-1">Результат расчёта</div>
                  <div className="text-2xl font-extrabold text-gray-900">{result.volume} м³</div>
                  <div className="text-base text-green-700 font-semibold mt-0.5">≈ {result.price} ₽ с доставкой</div>
                  <div className="text-xs text-gray-400 mt-1">*расчёт с учётом коэффициента уплотнения</div>
                </div>
                <a href={PHONE1_HREF}
                  className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                  <Phone size={16} />Заказать
                </a>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-5 text-center text-gray-400 text-sm">
                Введите размеры для расчёта стоимости
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
