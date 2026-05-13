import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/home/StatsBanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Visual Gallery",
  description: "Take a visual tour of Kunta Devi Health Care, our facilities, equipment, and community health camps.",
  path: "/gallery",
});

export default function GalleryPage() {
  const categories = ["All", "Clinic", "Equipment", "Doctors", "Health Camps", "Community Events"];
  
  const galleryItems = [
    { title: "Modern Reception Area", category: "Clinic", size: "md:col-span-2 md:row-span-2" },
    { title: "Automated Lab Equipment", category: "Equipment", size: "md:col-span-1 md:row-span-1" },
    { title: "Senior Consultant Room", category: "Clinic", size: "md:col-span-1 md:row-span-1" },
    { title: "Mobile Health Camp 2026", category: "Health Camps", size: "md:col-span-1 md:row-span-1" },
    { title: "Digital X-Ray Unit", category: "Equipment", size: "md:col-span-1 md:row-span-2" },
    { title: "Our Medical Team", category: "Doctors", size: "md:col-span-2 md:row-span-1" },
    { title: "Patient Waiting Lounge", category: "Clinic", size: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Visual Tour" 
          subtitle="Explore our state-of-the-art facilities and glimpse into our healthcare environment."
          breadcrumb="Gallery"
        />

        <Section className="bg-white">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, i) => (
              <Button 
                key={cat} 
                variant={i === 0 ? "default" : "outline"} 
                className="rounded-full px-8"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {galleryItems.map((item, i) => (
              <div 
                key={i} 
                className={cn(
                  "group relative rounded-5xl overflow-hidden bg-slate-100 border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer",
                  item.size
                )}
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-t from-dark/90 via-dark/20 to-transparent translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-2">{item.category}</span>
                  <h4 className="text-white font-bold text-xl leading-tight">{item.title}</h4>
                </div>
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                  <Maximize2 className="h-5 w-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
