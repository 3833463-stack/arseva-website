"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List as MenuIcon, X } from "lucide-react";
import { mainNav, OZON_URL, OZON_SELLER_URL } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pt-3 md:pt-5 pointer-events-none">
        <div className="container mx-auto flex justify-center pointer-events-auto">
          <motion.div
            initial={false}
            animate={{
              backgroundColor: scrolled ? "rgba(247,244,239,0.78)" : "rgba(247,244,239,0.4)",
              borderColor: scrolled ? "rgba(20,20,20,0.08)" : "rgba(20,20,20,0.04)",
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "flex w-full max-w-[1200px] items-center justify-between gap-4",
              "rounded-full border px-4 md:px-5 py-2.5",
              "backdrop-blur-xl",
            )}
          >
            <Link href="/" className="flex items-center gap-2 pl-1">
              <Wordmark />
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-[13px] text-ink-soft hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button
                href={OZON_URL}
                external
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Купить на Ozon
              </Button>
              <Button
                href={OZON_SELLER_URL}
                external
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex md:hidden"
              >
                Задать вопрос
              </Button>
              <button
                aria-label="Меню"
                onClick={() => setOpen(true)}
                className="lg:hidden h-9 w-9 grid place-items-center rounded-full bg-bone-100/60 hover:bg-bone-200 transition bezel"
              >
                <MenuIcon size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function Wordmark() {
  return (
    <span className="font-display font-semibold text-[18px] tracking-[0.18em] text-ink">
      ARSEVA
    </span>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] bg-bone-100"
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Wordmark />
        <button
          aria-label="Закрыть"
          onClick={onClose}
          className="h-10 w-10 grid place-items-center rounded-full bezel bg-bone-100"
        >
          <X size={18} />
        </button>
      </div>
      <nav className="container mx-auto pt-6 flex flex-col">
        {mainNav.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-5 text-[28px] font-display tracking-tight border-b border-ink/10"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <div className="mt-10 flex flex-col gap-3">
          <Button href={OZON_URL} external size="lg">Купить на Ozon</Button>
          <Button href={OZON_SELLER_URL} external variant="secondary" size="lg" onClick={onClose as any}>
            Задать вопрос продавцу
          </Button>
        </div>
      </nav>
    </motion.div>
  );
}
