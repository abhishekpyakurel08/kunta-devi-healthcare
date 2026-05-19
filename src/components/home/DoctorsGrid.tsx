import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";

export function DoctorsGrid() {
  const featuredDoctors = doctors.slice(0, 4);

  return (
    <Section className="bg-[#F4F8F8]">
      <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
        <span className="text-[#0A7075] font-semibold tracking-[0.2em] uppercase text-[11px]">Meet Our Specialists</span>
        <h2 className="text-[36px] md:text-[28px] font-bold text-[#0D2137] tracking-tight">Our Specialist Doctors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {featuredDoctors.map((doctor, i) => (
          <div key={i} className="info-card bg-white p-5 sm:p-6 rounded-4xl sm:rounded-5xl shadow-xl shadow-slate-200/50 flex flex-col group transition-all duration-500 hover:-translate-y-2">
            {/* Image Placeholder */}
            <div className="aspect-square bg-slate-100 rounded-3xl sm:rounded-4xl overflow-hidden mb-5 sm:mb-6 relative group/img">
              <Image 
                src={doctor.image || "/placeholder.jpg"} 
                alt={doctor.name} 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-3 sm:space-y-4 flex-1">
              <div>
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#DCFCE7] text-[#16A34A] text-[9px] sm:text-[10px] font-bold rounded-[100px] uppercase tracking-wider mb-3 sm:mb-4">
                  {doctor.available ? "Available" : "Off Today"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0D2137] mb-1">{doctor.name}</h3>
                <p className="text-[13px] sm:text-sm font-bold text-[#0A7075]">{doctor.specialty}</p>
              </div>

              <div className="h-px bg-[#E0EDED] w-full"></div>

              <div className="space-y-1 sm:space-y-2">
                <p className="text-[11px] sm:text-xs font-medium text-[#555F6D]">
                  <span className="font-bold text-[#8A9BAC]">Experience :</span> {doctor.experience} years
                </p>
                <p className="text-[11px] sm:text-xs font-medium text-[#555F6D]">
                  <span className="font-bold text-[#8A9BAC]">Rating :</span> {doctor.rating} ({doctor.reviewCount} reviews)
                </p>
              </div>

              <div className="pt-3 sm:pt-4">
                <Button variant="outline" className="w-full rounded-[8px] h-10 sm:h-12 border-[#0A7075]/30 text-[#0A7075] font-semibold hover:bg-[#E6F4F4] transition-all group/btn" asChild>
                  <Link href="/doctors">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <Button variant="outline" className="w-full sm:w-auto h-14 px-10 sm:px-12 text-[#0A7075] font-semibold border-2 hover:bg-[#0A7075] hover:text-white transition-all group" asChild>
          <Link href="/doctors">
            View All Doctors <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
