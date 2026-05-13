import Link from "next/link";
import { Stethoscope, Beaker, Baby, Activity, Users, PlusCircle, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  const services = [
    {
      icon: Stethoscope,
      title: "General OPD",
      desc: "Comprehensive routine checkups",
      href: "/services",
    },
    {
      icon: Beaker,
      title: "Lab Services",
      desc: "ISO Certified diagnostic tests",
      href: "/diagnostics",
    },
    {
      icon: Baby,
      title: "Maternal & Child",
      desc: "Specialized care for moms & kids",
      href: "/services",
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      desc: "Professional physical therapy",
      href: "/services",
    },
    {
      icon: Users,
      title: "Specialist Consult",
      desc: "Expert specialized doctors",
      href: "/doctors",
    },
    {
      icon: PlusCircle,
      title: "More Procedures",
      desc: "Explore all medical services",
      href: "/services",
    },
  ];

  return (
    <Section 
      subtitle="Our Services" 
      title="Comprehensive Care for Every Stage of Life"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group bg-white p-10 rounded-5xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 text-center flex flex-col items-center"
          >
            <div className="h-20 w-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <service.icon className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
            <p className="text-muted mb-8 leading-relaxed">{service.desc}</p>
            <Link 
              href={service.href} 
              className="mt-auto inline-flex items-center text-primary font-bold hover:gap-3 transition-all"
            >
              Know More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button size="lg" variant="outline" className="rounded-full px-12 border-2" asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </Section>
  );
}
