import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GalleryMasonry() {
  const images = [
    { src: "/gallery/1.jpg", alt: "Modern Clinic Interior", className: "col-span-1 row-span-1" },
    { src: "/gallery/2.jpg", alt: "Dental Consultation", className: "col-span-1 row-span-1" },
    { src: "/gallery/3.jpg", alt: "Surgeon at Work", className: "col-span-1 row-span-2" },
    { src: "/gallery/4.jpg", alt: "Radiology Analysis", className: "col-span-1 row-span-2" },
    { src: "/gallery/5.jpg", alt: "Blood Pressure Check", className: "col-span-1 row-span-1" },
    { src: "/gallery/6.jpg", alt: "Doctor Consultation", className: "col-span-1 row-span-1" },
  ];

  return (
    <Section className="bg-white py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Health Resources</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Latest Health Tips & Updates</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "relative rounded-4xl overflow-hidden group shadow-lg",
              img.className
            )}
          >
            <img 
              src={[
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
                "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070",
                "https://images.unsplash.com/photo-1505751172177-51ad18670404?q=80&w=2070",
                "https://images.unsplash.com/photo-1631549448353-461bb77718cc?q=80&w=2072"
              ][i % 6]} 
              alt={img.alt} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
               <p className="text-white text-sm font-bold">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="pill" className="h-14 px-12 text-primary font-bold border-2" asChild>
          <Link href="/gallery">
            View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
