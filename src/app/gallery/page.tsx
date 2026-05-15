"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { Button } from "@/components/ui/button";
import { Maximize2, Star, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateSEO } from "@/lib/seo";

export default function GalleryPage() {
  const categories = ["All", "Clinic", "Equipment", "Doctors", "Health Camps", "Community Events"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const allItems = [
    { title: "Modern Reception Area", category: "Clinic", size: "md:col-span-2 md:row-span-2" },
    { title: "Automated Lab Equipment", category: "Equipment", size: "md:col-span-1 md:row-span-1" },
    { title: "Senior Consultant Room", category: "Clinic", size: "md:col-span-1 md:row-span-1" },
    { title: "Mobile Health Camp 2026", category: "Health Camps", size: "md:col-span-1 md:row-span-1" },
    { title: "Digital X-Ray Unit", category: "Equipment", size: "md:col-span-1 md:row-span-2" },
    { title: "Our Medical Team", category: "Doctors", size: "md:col-span-2 md:row-span-1" },
    { title: "Patient Waiting Lounge", category: "Clinic", size: "md:col-span-1 md:row-span-1" },
    { title: "Advanced Ultrasound System", category: "Equipment", size: "md:col-span-1 md:row-span-1" },
    { title: "Community Wellness Talk", category: "Community Events", size: "md:col-span-1 md:row-span-1" },
  ];

  const filteredItems = allItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Visual Gallery" 
          subtitle="Explore our state-of-the-art facilities and glimpse into our healthcare environment."
          breadcrumb="Gallery"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">A Glimpse Inside</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Capturing Excellence in Healthcare</h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-20">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-3 rounded-xl font-black text-sm transition-all border",
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                      : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white hover:shadow-xl"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 auto-rows-[280px]">
                {filteredItems.map((item, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "group relative rounded-4xl overflow-hidden bg-slate-100 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-700 cursor-pointer",
                      item.size
                    )}
                  >
                    <img 
                      src={[
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
                        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
                        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070",
                        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070",
                        "https://images.unsplash.com/photo-1505751172177-51ad18670404?q=80&w=2070",
                        "https://images.unsplash.com/photo-1631549448353-461bb77718cc?q=80&w=2072",
                        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
                        "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070",
                        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
                      ][i % 9]} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-12 group-hover:translate-y-0 flex flex-col justify-end p-10">
                      <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3">{item.category}</span>
                      <h4 className="text-white font-black text-2xl leading-tight mb-4">{item.title}</h4>
                      <div className="flex items-center gap-2">
                         <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                         <span className="text-xs font-bold text-white/80">Kunta Devi Excellence</span>
                      </div>
                    </div>

                    {/* Icon Button */}
                    <div className="absolute top-8 right-8 h-12 w-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                      <Maximize2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
               <div className="text-center py-32 space-y-6">
                  <div className="h-24 w-24 rounded-full bg-slate-50 flex items-center justify-center mx-auto">
                     <ImageIcon className="h-10 w-10 text-slate-300" />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-slate-900">No Images Found</h3>
                     <p className="text-slate-500 font-bold">Try selecting a different category to view our gallery.</p>
                  </div>
                  <Button onClick={() => setActiveCategory("All")} variant="outline" className="rounded-full px-10 h-14">
                     View All Photos
                  </Button>
               </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
