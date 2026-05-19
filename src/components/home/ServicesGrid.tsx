import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ServicesGrid() {
  const services = [
    {
      title: "General OPD Consultation",
      category: "OPD Consultation",
      desc: "Our primary care service matches your health needs to the right specialist for comprehensive care.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
      badge: "Popular",
      features: ["Doctor consultation", "Dietician consult", "Follow-up", "Personalized care"],
      color: "bg-emerald-500",
    },
    {
      title: "Maternal Care",
      category: "Prenatal Care",
      desc: "Comprehensive antenatal care for health search and early detection to ensure healthy future for you and your child.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800",
      badge: "Expert Care",
      features: ["Stress evaluation", "Echo cardiology", "Prevention", "Wellness initiatives"],
      color: "bg-orange-400",
    },
    {
      title: "Specialist Consultation",
      category: "Specialist Consult",
      desc: "Expertise across disciplines for surgical and chronic illness management focused on patient-centered outcomes.",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?q=80&w=800",
      badge: "Specialty",
      features: ["Check up sessions", "Safe and reliable", "Formulation", "Advanced equipment"],
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-50/30">
      <Container>
        <div className="text-center mb-16 space-y-3">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Main Services</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Most Requested Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-4xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:translate-y-[-8px] transition-all duration-500">
              {/* Image with Badge */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={`absolute top-4 left-4 ${service.color} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                  {service.badge}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Category and Title */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{service.category}</p>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Button */}
                <div className="mt-8">
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                    <Link href="/appointment">Book Consultation</Link>
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
