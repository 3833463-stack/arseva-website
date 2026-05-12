import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { footerNav, PHONE1, PHONE2, PHONE1_HREF, PHONE2_HREF, EMAIL, ADDRESS, HOURS } from "@/data/nav";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xl">Б</div>
              <div>
                <div className="font-extrabold text-white tracking-wide">БЕТОН-ЗАВОД</div>
                <div className="text-[11px] text-gray-400">сеть бетонных заводов</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Продажа бетона и строительных материалов в Екатеринбурге и Свердловской области.
              Собственный автопарк, лабораторный контроль качества.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={PHONE1_HREF} className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition">
                <Phone size={14} />{PHONE1}
              </a>
              <a href={PHONE2_HREF} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <Phone size={14} />{PHONE2}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Mail size={14} />{EMAIL}
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="shrink-0" />{ADDRESS}
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <Clock size={14} />{HOURS}
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} БЕТОН-ЗАВОД. Все права защищены.</p>
          <p>Содержание сайта не является публичной офертой.</p>
        </div>
      </div>
    </footer>
  );
}
