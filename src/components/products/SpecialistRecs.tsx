import { Star, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SpecialistRecs() {
  const recommendations = [
    {
      name: "Dr. Sita Sharma",
      specialty: "Radiologist | 12+ Years Experience",
      text: "I highly recommend the Omron BP Monitor for home use. Its clinical accuracy is essential for monitoring heart health between visits.",
      rating: 4.9,
      reviews: 286,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974"
    },
    {
      name: "Dr. Anita Sharma",
      specialty: "MBBS, MD | Senior Gynecologist",
      text: "The Glucometer Starter Kit is a must-have for gestational diabetes management. It's reliable and very easy for patients to use daily.",
      rating: 4.8,
      reviews: 154,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070"
    },
    {
      name: "Dr. Rajesh KC",
      specialty: "Pediatrician | Senior Consultant",
      text: "The Philips Nebulizer is excellent for children with respiratory issues. It's quiet and highly effective for fast relief.",
      rating: 5.0,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Expert Choice</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Recommended by Our Specialists</h2>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, i) => (
            <div key={i} className="group flex flex-col md:flex-row items-center bg-slate-50 rounded-5xl p-8 md:p-10 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 gap-8 md:gap-12">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shrink-0 border-4 border-white shadow-xl">
                  <Image src={rec.image} alt={rec.name} fill sizes="(max-width: 768px) 128px, 192px" className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
               </div>
               
               <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="space-y-2">
                     <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <h3 className="text-2xl font-black text-slate-900">{rec.name}</h3>
                        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                           <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                           <span className="text-xs font-black text-slate-700">{rec.rating}</span>
                           <span className="text-xs font-bold text-slate-400">({rec.reviews})</span>
                        </div>
                     </div>
                     <p className="text-primary font-black text-[10px] uppercase tracking-widest">{rec.specialty}</p>
                  </div>
                  
                  <p className="text-lg font-bold text-slate-500 leading-relaxed italic">
                    &quot;{rec.text}&quot;
                  </p>
                  
                  <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
                     <Button className="rounded-xl h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-900/10">
                        View Product
                     </Button>
                     <Button variant="outline" className="rounded-xl h-12 px-8 border-slate-200 text-slate-500 font-black text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                        <MessageSquare className="mr-2 h-4 w-4" /> Ask Specialist
                     </Button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
