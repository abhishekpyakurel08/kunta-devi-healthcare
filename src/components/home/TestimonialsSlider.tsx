import { Star, User } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

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
    <Section className="bg-[#F4F9F9] py-24">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-4xl shadow-xl shadow-slate-200/50 flex flex-col space-y-8 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-500 font-medium leading-relaxed flex-1 italic">
                {item.content}
              </p>

              <div className="h-px bg-slate-100 w-full"></div>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-emerald-50 overflow-hidden flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <img 
                    src={[
                      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"
                    ][i % 3]} 
                    alt={item.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
