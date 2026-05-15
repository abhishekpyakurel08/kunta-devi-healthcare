import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { MedicalServicesSection } from "@/components/home/MedicalServicesSection";
import { NotSureSection } from "@/components/home/NotSureSection";
import { StatsBanner } from "@/components/home/StatsBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <ServicesGrid />
        <MedicalServicesSection />
        <NotSureSection />
        <StatsBanner />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}