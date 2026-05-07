import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "ARSEVA — техника для восстановления и ухода за телом",
    template: "%s · ARSEVA",
  },
  description:
    "ARSEVA — премиальная техника для массажа, восстановления и ухода за телом: перкуссионные массажеры, массажеры для ног и глаз, роликовый массажер. Гарантия до 2 лет.",
  keywords: [
    "ARSEVA", "массажер ARSEVA", "перкуссионный массажер", "массажер для ног",
    "массажер для глаз", "роликовый массажер", "техника для восстановления",
    "массажер для спортсменов", "массажер для дома", "wellness техника",
  ],
  openGraph: {
    title: "ARSEVA — техника для восстановления и ухода за телом",
    description:
      "Премиальная техника для массажа, восстановления и ухода за телом. Гарантия до 2 лет.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,600,700,800&f[]=satoshi@400,500,700&f[]=jetbrains-mono@400,500&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        <style>{`
          :root {
            --font-sans: "Plus Jakarta Sans", "Satoshi", system-ui, sans-serif;
            --font-display: "Cabinet Grotesk", "Satoshi", system-ui, sans-serif;
            --font-mono: "JetBrains Mono", ui-monospace, monospace;
          }
        `}</style>
      </head>
      <body className="min-h-[100dvh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
