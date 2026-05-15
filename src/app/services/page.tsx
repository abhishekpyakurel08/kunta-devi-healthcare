import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { MedicalServicesSection } from "@/components/home/MedicalServicesSection";
import { NotSureSection } from "@/components/home/NotSureSection";
import { StatsBanner } from "@/components/home/StatsBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Healthcare Services",
  description: "Explore our wide range of healthcare services including general OPD, specialist consultations, and maternal health.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <ServicesHero />
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
