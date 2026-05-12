import { HeroSection } from "@/components/sections/HeroSection";
import { PriceTable } from "@/components/sections/PriceTable";
import { Calculator } from "@/components/sections/Calculator";
import { Advantages } from "@/components/sections/Advantages";
import { AboutSection } from "@/components/sections/AboutSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PriceTable />
      <Calculator />
      <Advantages />
      <AboutSection />
      <DeliverySection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
