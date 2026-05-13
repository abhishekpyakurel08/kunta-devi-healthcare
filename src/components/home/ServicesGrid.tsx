import Link from "next/link";
import { ArrowRight, Home, Beaker, Baby, Syringe, Stethoscope, Activity } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  const services = [
    {
      title: "General OPD",
      desc: "Expert primary care for daily health concerns and routine checkups.",
      icon: Home,
    },
    {
      title: "Lab Services",
      desc: "Advanced diagnostic testing with high precision and rapid reporting.",
      icon: Beaker,
    },
    {
      title: "Maternal & Child",
      desc: "Dedicated care for expectant mothers and pediatric health.",
      icon: Baby,
    },
    {
      title: "Vaccination",
      desc: "Essential immunizations for children and adults of all ages.",
      icon: Syringe,
    },
    {
      title: "Specialist Consult",
      desc: "Consultation with top specialists in Cardiology, Orthopedics, and more.",
      icon: Stethoscope,
    },
    {
      title: "Minor Procedures",
      desc: "Safe and efficient minor surgical and therapeutic procedures.",
      icon: Activity,
    },
  ];

  return (
    <Section className="bg-white py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Services</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Comprehensive Care for Every Stage of Life</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group flex items-start gap-6">
            <div className="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <service.icon className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-[240px]">
                {service.desc}
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="pill" className="h-14 px-12 text-primary font-bold border-2" asChild>
          <Link href="/services">
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
