import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  const stats = [
    { label: "80+", desc: "Doctors" },
    { label: "50+", desc: "Services" },
    { label: "5000+", desc: "Patients" },
    { label: "100+", desc: "Health Camps" },
  ];

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="relative rounded-6xl overflow-hidden shadow-2xl border-8 border-slate-50">
            <div className="aspect-[4/5] bg-slate-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent"></div>
              <div className="text-primary/10 text-9xl font-bold">ABOUT</div>
            </div>
          </div>
          
          {/* Decorative element like in the image */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6 text-center lg:text-left">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">About Our Clinic</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
              Compassionate Healthcare <br />
              <span className="text-primary italic">for Every Family</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kunta Devi Health Care & Diagnostic Center is committed to providing world-class healthcare and diagnostic services in Kathmandu. We believe in high-quality care that honors human dignity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-4xl border border-border/30 hover:border-primary/30 transition-colors group">
                <p className="text-3xl font-extrabold text-dark group-hover:text-primary transition-colors">{stat.label}</p>
                <p className="text-sm font-bold text-muted uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center lg:text-left">
            <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-xl shadow-primary/10 group" asChild>
              <Link href="/about">
                Know More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
