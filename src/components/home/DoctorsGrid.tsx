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
      <div className="text-center mb-[24px] md:mb-[32px] lg:mb-[48px] space-y-3">
        <span className="text-[#0A7075] font-semibold tracking-[0.2em] uppercase text-[11px]">Meet Our Specialists</span>
        <h2 className="text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#0D2137] tracking-tight leading-tight md:leading-[1.3] lg:leading-[1.2]">Our Specialist Doctors</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px]">
        {featuredDoctors.map((doctor, i) => (
          <div key={i} className="info-card bg-white p-[16px] md:p-[20px] lg:p-[24px] rounded-[12px] shadow-lg shadow-[#0A7075]/10 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0A7075]/15">
            {/* Image */}
            <div className="aspect-[4/3] md:aspect-square bg-slate-100 rounded-[12px] overflow-hidden mb-4 md:mb-5 relative group/img">
              <Image 
                src={doctor.image || "/placeholder.jpg"} 
                alt={doctor.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
            </div>

            <div className="space-y-3 md:space-y-4 flex-1">
              <div>
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#DCFCE7] text-[#16A34A] text-[10px] md:text-[11px] font-bold rounded-[100px] uppercase tracking-wider mb-3 md:mb-4">
                  {doctor.available ? "Available" : "Off Today"}
                </span>
                <h3 className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-[#0D2137] mb-1">{doctor.name}</h3>
                <p className="text-[12px] md:text-[14px] font-bold text-[#0A7075]">{doctor.specialty}</p>
              </div>

              <div className="h-px bg-[#E0EDED] w-full"></div>

              <div className="space-y-1 md:space-y-2">
                <p className="text-[11px] md:text-[12px] lg:text-[13px] font-medium text-[#555F6D]">
                  <span className="font-bold text-[#8A9BAC]">Experience :</span> {doctor.experience} years
                </p>
                <p className="text-[11px] md:text-[12px] lg:text-[13px] font-medium text-[#555F6D]">
                  <span className="font-bold text-[#8A9BAC]">Rating :</span> {doctor.rating} ({doctor.reviewCount} reviews)
                </p>
              </div>

              <div className="pt-3 md:pt-4">
                <Button variant="outline" className="w-full rounded-[8px] h-10 md:h-12 border-[#0A7075]/30 text-[#0A7075] font-semibold hover:bg-[#E6F4F4] transition-all group/btn" asChild>
                  <Link href="/doctors">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[32px] md:mt-[40px] lg:mt-[48px] text-center">
        <Button variant="outline" className="w-full md:w-auto h-12 md:h-14 px-8 md:px-10 lg:px-12 text-[#0A7075] font-semibold border-2 hover:bg-[#0A7075] hover:text-white transition-all group" asChild>
          <Link href="/doctors">
            View All Doctors <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
