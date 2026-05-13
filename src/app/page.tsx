import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

import { HeroSection } from "@/components/home/HeroSection";
import { QuickActions } from "@/components/home/QuickActions";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { DiagnosticsPreview } from "@/components/home/DiagnosticsPreview";
import { DoctorsGrid } from "@/components/home/DoctorsGrid";
import { PackagesPricing } from "@/components/home/PackagesPricing";
import { StatsBanner, CTABanner } from "@/components/home/StatsBanner";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { BlogCards } from "@/components/home/BlogCards";
import { GalleryMasonry } from "@/components/home/GalleryMasonry";
import { ContactSection } from "@/components/home/ContactSection";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <QuickActions />
        <AboutPreview />
        <ServicesGrid />
        <ProductsGrid />
        <DiagnosticsPreview />
        <DoctorsGrid />
        <PackagesPricing />
        <StatsBanner />
        <TestimonialsSlider />
        <BlogCards />
        <GalleryMasonry />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}