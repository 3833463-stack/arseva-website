"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, MapPin, Mail, Clock } from "lucide-react";
import { mainNav, betonSubmenu, PHONE1, PHONE2, PHONE1_HREF, PHONE2_HREF, EMAIL, ADDRESS, HOURS } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-green-800 text-white text-xs hidden md:block">
        <div className="container mx-auto flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-green-100">
              <MapPin size={11} className="shrink-0" />{ADDRESS}
            </span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 text-green-100 hover:text-white transition">
              <Mail size={11} className="shrink-0" />{EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-green-100">
              <Clock size={11} className="shrink-0" />{HOURS}
            </span>
            <a href={PHONE2_HREF} className="flex items-center gap-1.5 text-green-100 hover:text-white transition">
              <Phone size={11} className="shrink-0" />{PHONE2}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn("sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow", scrolled && "shadow-md")}>
        <div className="container mx-auto flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 bg-green-700 rounded flex items-center justify-center text-white font-bold text-xl select-none">
              Б
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-[15px] text-gray-900 tracking-wide">БЕТОН-ЗАВОД</div>
              <div className="text-[10px] text-gray-500 font-normal">сеть бетонных заводов</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0">
            {mainNav.map((item) =>
              item.submenu ? (
                <div key={item.href} className="relative group">
                  <button className="flex items-center gap-1 px-2.5 py-2 text-[13px] text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-colors">
                    {item.label}
                    <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-b-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
                    {item.submenu.map((sub) => (
                      <Link key={sub.href} href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href}
                  className="px-2.5 py-2 text-[13px] text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-colors">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: phones + CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:block text-right">
              <a href={PHONE1_HREF} className="block font-bold text-green-700 text-[15px] leading-tight hover:text-green-800 transition">
                {PHONE1}
              </a>
              <a href={PHONE2_HREF} className="block text-xs text-gray-500 leading-tight hover:text-gray-700 transition">
                {PHONE2}
              </a>
            </div>
            <CallButton />
            <button
              aria-label="Меню"
              onClick={() => setMobileOpen(true)}
              className="xl:hidden h-9 w-9 grid place-items-center rounded border border-gray-200 hover:bg-gray-50 transition"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function CallButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
      className={cn(
        "hidden md:inline-flex bg-green-700 hover:bg-green-800 active:bg-green-900 text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors whitespace-nowrap",
        className
      )}
    >
      Заказать звонок
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [betonOpen, setBetonOpen] = useState(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[60] bg-white flex flex-col overflow-y-auto"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-700 rounded flex items-center justify-center text-white font-bold">Б</div>
          <span className="font-extrabold text-gray-900">БЕТОН-ЗАВОД</span>
        </div>
        <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded border border-gray-200 hover:bg-gray-50">
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 px-5 py-2">
        {mainNav.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.025, duration: 0.28 }}
          >
            {item.submenu ? (
              <div>
                <button
                  onClick={() => setBetonOpen((v) => !v)}
                  className="flex items-center justify-between w-full py-3.5 text-base text-gray-800 border-b border-gray-100 hover:text-green-700 transition-colors"
                >
                  {item.label}
                  <ChevronDown size={16} className={cn("transition-transform", betonOpen && "rotate-180")} />
                </button>
                {betonOpen && (
                  <div className="pl-4 pb-1">
                    {item.submenu.map((sub) => (
                      <Link key={sub.href} href={sub.href} onClick={onClose}
                        className="block py-2.5 text-sm text-gray-600 border-b border-gray-50 hover:text-green-700 transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={item.href} onClick={onClose}
                className="block py-3.5 text-base text-gray-800 border-b border-gray-100 hover:text-green-700 transition-colors">
                {item.label}
              </Link>
            )}
          </motion.div>
        ))}
      </nav>

      <div className="px-5 py-6 flex flex-col gap-3 border-t border-gray-100 shrink-0">
        <a href={PHONE1_HREF} className="flex items-center justify-center gap-2 bg-green-700 text-white font-bold py-3.5 rounded text-lg">
          <Phone size={18} />{PHONE1}
        </a>
        <a href={PHONE2_HREF} className="flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 font-semibold py-3 rounded text-base">
          <Phone size={16} />{PHONE2}
        </a>
      </div>
    </motion.div>
  );
}
