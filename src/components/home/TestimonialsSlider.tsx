import { Star } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/layout/section";

export function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sunita Karki",
      role: "Cardiac Patient",
      content: '"Dr. Sushma and the entire maternity team at Kunta Devi made my pregnancy journey feel safe and supported. The antenatal care here is exceptional — thorough, compassionate, and always on time."',
    },
    {
      name: "Sunita Karki",
      role: "Cardiac Patient",
      content: '"Dr. Sushma and the entire maternity team at Kunta Devi made my pregnancy journey feel safe and supported. The antenatal care here is exceptional — thorough, compassionate, and always on time."',
    },
    {
      name: "Sunita Karki",
      role: "Cardiac Patient",
      content: '"Dr. Sushma and the entire maternity team at Kunta Devi made my pregnancy journey feel safe and supported. The antenatal care here is exceptional — thorough, compassionate, and always on time."',
    },
  ];

  return (
    <Section className="bg-[#F4F9F9] py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">Patient Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="info-card bg-white p-8 sm:p-10 rounded-4xl shadow-xl shadow-slate-200/50 flex flex-col space-y-6 sm:space-y-8 group hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed flex-1 italic">
                {item.content}
              </p>

              <div className="h-px bg-slate-100 w-full"></div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-50 overflow-hidden relative flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Image 
                    src={[
                      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"
                    ][i % 3]} 
                    alt={item.name} 
                    fill
                    sizes="(max-width: 768px) 48px, 56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm sm:text-base">{item.name}</p>
                  <p className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
