"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import { ProductsHero } from "@/components/products/ProductsHero";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { ShopByNeed } from "@/components/products/ShopByNeed";
import { ExploreProducts } from "@/components/products/ExploreProducts";
import { SpecialistRecs } from "@/components/products/SpecialistRecs";
import { HealthGuides } from "@/components/products/HealthGuides";
import { FAQSection } from "@/components/home/FAQSection";
import { generateSEO } from "@/lib/seo";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <ProductsHero onSearch={setSearchQuery} onCategoryChange={setActiveCategory} />
        <FeaturedProducts />
        <ShopByNeed onCategorySelect={setActiveCategory} />
        <ExploreProducts searchQuery={searchQuery} activeCategory={activeCategory} />
        <SpecialistRecs />
        <HealthGuides />
        <FAQSection />

        {/* Need Help Choosing CTA */}
        <section className="py-24 bg-white">
          <Container>
            <div className="bg-teal-500 p-12 md:p-20 rounded-6xl text-white text-center relative overflow-hidden group">
               {/* Decorative background blurs */}
               <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl rounded-full translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
               <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/10 blur-3xl rounded-full -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>

               <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <span className="text-white/80 font-black tracking-[0.3em] uppercase text-xs">Product Support</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                       Need Help Choosing <br />
                       the Right Product?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                       Our medical experts can guide you to the right equipment for your specific health needs.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <Button size="pill" className="bg-white text-teal-600 hover:bg-white/90 px-12 h-16 text-lg font-black shadow-2xl" asChild>
                        <a href="https://wa.me/9779841000000" target="_blank" rel="noopener noreferrer">
                           Consult Now
                        </a>
                     </Button>
                     <Button size="pill" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 h-16 text-lg font-black transition-all" asChild>
                        <a href="tel:+977014400000">Call Pharmacy</a>
                     </Button>
                  </div>
               </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
