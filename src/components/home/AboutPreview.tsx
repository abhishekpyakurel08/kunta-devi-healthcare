import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function AboutPreview() {
  const stats = [
    { label: "10+", desc: "Years Experience" },
    { label: "20+", desc: "Doctors" },
    { label: "5000+", desc: "Patients" },
    { label: "100+", desc: "Services" },
  ];

  return (
    <Section className="bg-white py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: Overlapping Images */}
          <div className="relative">
            <div className="relative rounded-6xl overflow-hidden shadow-2xl border-8 border-slate-50 w-full aspect-4/5 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964" 
                alt="Expert medical professional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-3/4 aspect-square bg-slate-100 rounded-5xl shadow-2xl border-8 border-white z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070" 
                alt="Modern clinical laboratory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Compassionate Healthcare <br />
                for Every Family
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-xl">
                Kunta Devi Health Care & Diagnostic Center has been committed to delivering trusted, affordable, and patient-centered healthcare services with modern facilities and experienced professionals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 border-l-4 border-l-primary flex flex-col justify-center">
                  <p className="text-3xl font-black text-slate-900">{stat.label}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" size="pill" className="h-14 px-12 text-primary font-bold border-2" asChild>
                <Link href="/about">
                  About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
      </div>
    </Section>
  );
}
