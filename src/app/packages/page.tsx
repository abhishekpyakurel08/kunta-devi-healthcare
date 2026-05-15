import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { healthPackages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Heart, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Health Screening Packages",
  description: "Comprehensive health screening packages for individuals and families. Early detection for a healthier life.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Preventive Health Packages" 
          subtitle="Choose the right screening package for you and your family to stay ahead of health risks."
          breadcrumb="Packages"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Wellness First</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Invest in Your Future Health</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {healthPackages.map((pkg) => (
                <div key={pkg.id} className={cn(
                  "relative flex flex-col bg-white border rounded-6xl overflow-hidden transition-all duration-500",
                  pkg.recommended 
                    ? "border-primary shadow-2xl scale-105 z-10" 
                    : "border-slate-100 shadow-xl shadow-slate-200/50"
                )}>
                  {pkg.recommended && (
                    <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg animate-pulse">
                      Recommended
                    </div>
                  )}

                  <div className="p-12 space-y-10 flex-1 flex flex-col">
                    <div className="space-y-4 text-center">
                      <div className={cn(
                        "mx-auto h-20 w-20 rounded-3xl flex items-center justify-center mb-6",
                        pkg.recommended ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-400"
                      )}>
                        {pkg.recommended ? <Sparkles className="h-10 w-10" /> : <ShieldCheck className="h-10 w-10" />}
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">{pkg.title}</h3>
                      <div className="flex flex-col items-center">
                         <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Starting at</span>
                         <span className="text-5xl font-black text-primary tracking-tighter mt-1">{pkg.price}</span>
                      </div>
                      <p className="text-slate-500 font-bold text-sm leading-relaxed">{pkg.description}</p>
                    </div>

                    <div className="space-y-6 flex-1">
                      <div className="h-px w-full bg-slate-50"></div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Included Screenings</h4>
                      <ul className="grid grid-cols-1 gap-4">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-4 text-sm text-slate-700 font-bold leading-tight">
                            <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                              <Check className="h-3 w-3 stroke-[4px]" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 mt-auto">
                      <Button 
                        className={cn(
                          "w-full rounded-2xl h-16 text-sm font-black uppercase tracking-widest shadow-xl group/btn",
                          pkg.recommended ? "bg-primary text-white shadow-primary/20" : "bg-slate-900 text-white shadow-slate-900/10"
                        )}
                        asChild
                      >
                        <Link href="/appointment">
                          Book Package <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-slate-50/50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, title: "Cost Effective", desc: "Save up to 40% compared to individual diagnostic tests." },
                { icon: ShieldCheck, title: "Early Detection", desc: "Identify potential health risks before they become serious." },
                { icon: Heart, title: "Peace of Mind", desc: "Get detailed insights into your overall body health and status." },
                { icon: Sparkles, title: "Expert Care", desc: "Free follow-up consultation with our GP is included in all packages." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-4xl shadow-xl shadow-slate-200/30 border border-slate-100 flex flex-col items-center text-center space-y-6">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
