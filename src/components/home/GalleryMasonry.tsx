import Link from "next/link";
import { Plus } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function GalleryMasonry() {
  const images = [
    { title: "Our Modern Lab", category: "Equipment", size: "col-span-2 row-span-2" },
    { title: "Specialist Consultation", category: "Clinic", size: "col-span-1 row-span-1" },
    { title: "Friendly Environment", category: "Clinic", size: "col-span-1 row-span-1" },
    { title: "Expert Staff", category: "Doctors", size: "col-span-1 row-span-1" },
    { title: "Advanced USG", category: "Equipment", size: "col-span-1 row-span-1" },
  ];

  return (
    <Section
      subtitle="Visual Tour"
      title="Our Clinic & Facilities"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={cn(
              "group relative rounded-4xl overflow-hidden bg-slate-200 border-4 border-white shadow-sm hover:shadow-xl transition-all duration-500",
              img.size
            )}
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-dark/80 via-dark/20 to-transparent">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
              <h4 className="text-white font-bold text-lg leading-tight">{img.title}</h4>
            </div>
            <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
              <Plus className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full px-8" asChild>
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </div>
    </Section>
  );
}

import { cn } from "@/lib/utils";
