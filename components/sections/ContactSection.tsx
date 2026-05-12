"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PHONE1, PHONE2, PHONE1_HREF, PHONE2_HREF, EMAIL, ADDRESS, HOURS } from "@/data/nav";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Оставить заявку</h2>
          <p className="text-gray-500 mt-2">Перезвоним в течение 15 минут и уточним все детали заказа</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Наш менеджер свяжется с вами в ближайшее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-green-700 font-semibold hover:text-green-800 transition text-sm">
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Адрес доставки</label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Улица, дом"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Комментарий</label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    placeholder="Марка бетона, объём, пожелания..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Контактная информация</h3>
              <div className="flex flex-col gap-4">
                <a href={PHONE1_HREF}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Телефон (основной)</div>
                    <div className="font-bold text-gray-900">{PHONE1}</div>
                  </div>
                </a>
                <a href={PHONE2_HREF}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Телефон (городской)</div>
                    <div className="font-bold text-gray-900">{PHONE2}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                    <Mail size={18} className="text-green-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <div className="font-bold text-gray-900">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-green-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Адрес</div>
                    <div className="font-semibold text-gray-900">{ADDRESS}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-700 rounded-xl text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-green-200">Режим работы</div>
                    <div className="font-bold">{HOURS}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
