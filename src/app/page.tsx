import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

import { HeroSection } from "@/components/home/HeroSection";
import { QuickActions } from "@/components/home/QuickActions";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { DoctorsGrid } from "@/components/home/DoctorsGrid";
import { PackagesPricing } from "@/components/home/PackagesPricing";
import { StatsBanner } from "@/components/home/StatsBanner";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { BlogCards } from "@/components/home/BlogCards";
import { GalleryMasonry } from "@/components/home/GalleryMasonry";
import { VisitUsSection } from "@/components/home/VisitUsSection";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = generateSEO({
  title: "Kunta Devi Health Care | Trusted Healthcare in Kathmandu",
  description: "Your trusted health partner in Kathmandu. Quality healthcare, expert doctors, modern diagnostics, and trusted medical products all under one roof.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow overflow-hidden">
        {/* 1. Hero – "Your Trusted Health Partner in Kathmandu" */}
        <HeroSection />

        {/* 2. Quick action row – Find Doctor / Book / Products / Emergency */}
        <ScrollReveal delay={100}><QuickActions /></ScrollReveal>

        {/* 3. About – "Compassionate Healthcare for Every Family" + stats */}
        <ScrollReveal><AboutPreview /></ScrollReveal>

        {/* 4. Services – "Comprehensive Care for Every Stage of Life" */}
        <ScrollReveal><ServicesGrid /></ScrollReveal>

        {/* 5. Products – "Trusted Medical Products" */}
        <ScrollReveal><ProductsGrid /></ScrollReveal>

        {/* 6. Doctors – "Our Specialist Doctors" */}
        <ScrollReveal><DoctorsGrid /></ScrollReveal>

        {/* 7. Packages – "Affordable Health Packages" */}
        <ScrollReveal><PackagesPricing /></ScrollReveal>

        {/* 8. Stats banner – "Why Families Trust Us" (dark teal) */}
        <ScrollReveal direction="none"><StatsBanner /></ScrollReveal>

        {/* 9. Testimonials – "What Our Patients Say" */}
        <ScrollReveal><TestimonialsSlider /></ScrollReveal>

        {/* 10. Blog – "Latest Health Tips & Updates" */}
        <ScrollReveal><BlogCards /></ScrollReveal>

        {/* 11. Gallery masonry */}
        <ScrollReveal><GalleryMasonry /></ScrollReveal>

        {/* 12. Map + contact – "Visit Us Today" */}
        <ScrollReveal><VisitUsSection /></ScrollReveal>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}