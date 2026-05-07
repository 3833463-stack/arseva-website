import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogView } from "./CatalogView";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог техники ARSEVA: перкуссионные массажеры, массажеры для ног, глаз, роликовый массажер.",
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="pt-40 pb-24" />}>
      <CatalogView />
    </Suspense>
  );
}
