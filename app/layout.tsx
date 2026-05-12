import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "БЕТОН-ЗАВОД — продажа бетона в Екатеринбурге и Свердловской области",
    template: "%s · БЕТОН-ЗАВОД",
  },
  description:
    "Сеть бетонных заводов в Екатеринбурге. Продажа бетона всех марок (М100–М550), раствора, керамзитобетона с доставкой по Свердловской области. Работаем круглосуточно.",
  keywords: [
    "бетон Екатеринбург", "купить бетон", "бетон с доставкой", "бетон М200",
    "бетон М300", "бетонный завод", "раствор Екатеринбург", "керамзитобетон",
    "цена бетона", "заказать бетон",
  ],
  openGraph: {
    title: "БЕТОН-ЗАВОД — продажа бетона в Екатеринбурге",
    description: "Бетон всех марок с доставкой по Свердловской области. Круглосуточно, без выходных.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
