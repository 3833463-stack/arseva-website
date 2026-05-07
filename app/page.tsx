import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { QuizTeaser } from "@/components/sections/QuizTeaser";
import { WhyArseva } from "@/components/sections/WhyArseva";
import { Reviews } from "@/components/sections/Reviews";
import { WarrantyBlock } from "@/components/sections/WarrantyBlock";
import { OzonSellerCTA } from "@/components/sections/OzonSellerCTA";
import { B2BBlock } from "@/components/sections/B2BBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Categories />
      <FeaturedProducts />
      <QuizTeaser />
      <WhyArseva />
      <Reviews />
      <WarrantyBlock />
      <OzonSellerCTA />
      <B2BBlock />
    </>
  );
}
