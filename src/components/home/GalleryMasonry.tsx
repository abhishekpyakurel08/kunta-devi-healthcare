import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
    <Section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">Health Resources</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Latest Health Tips & Updates</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[240px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "info-card relative rounded-4xl overflow-hidden group shadow-lg",
              img.className
            )}
          >
            <Image 
              src={[
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
                "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070",
                "https://images.unsplash.com/photo-1505751172177-51ad18670404?q=80&w=2070",
                "https://images.unsplash.com/photo-1631549448353-461bb77718cc?q=80&w=2072"
              ][i % 6]} 
              alt={img.alt} 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 sm:p-6">
               <p className="text-white text-xs sm:text-sm font-bold">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 sm:px-12 text-primary font-bold border-2 hover:bg-primary hover:text-white transition-all group rounded-full" asChild>
          <Link href="/gallery">
             View Full Gallery <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
