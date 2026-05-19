import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { diagnostics } from "@/data/diagnostics";
import { Button } from "@/components/ui/button";
import { Clock, Info, FlaskConical, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Diagnostic Services",
  description: "Advanced diagnostic services including blood tests, X-ray, ultrasound, and cardiology screenings.",
  path: "/diagnostics",
});

export default function DiagnosticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Diagnostic Excellence" 
          subtitle="Precise results you can trust, delivered with speed and professional care."
          breadcrumb="Diagnostics"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Full Spectrum Testing</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Advanced Laboratory Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {diagnostics.map((test) => (
                <div key={test.id} className="flex flex-col bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:translate-y-[-8px] transition-all duration-500 group rounded-5xl overflow-hidden">
                  <div className="p-10 flex-1 flex flex-col space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="h-16 w-16 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                        <FlaskConical className="h-8 w-8" />
                      </div>
                      <div className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-slate-100">
                        {test.category}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                        {test.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                        <Clock className="h-3.5 w-3.5" />
                        Turnaround: {test.turnaround}
                      </div>
                    </div>

                    <p className="text-slate-500 font-bold text-sm leading-relaxed">
                      {test.description}
                    </p>
                    
                    <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 space-y-3 mt-auto">
                      <div className="flex items-center gap-2 text-slate-800 font-black text-[10px] uppercase tracking-widest">
                        <Info className="h-3.5 w-3.5 text-primary" />
                        Preparation
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-bold italic">
                        {test.preparation}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full rounded-2xl h-14 bg-primary hover:bg-primary/90 text-white font-black shadow-xl shadow-primary/20 group/btn" asChild>
                        <Link href="/appointment">
                          Schedule Test <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Lab Quality Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
          <Container className="relative z-10 text-center space-y-16">
            <div className="space-y-4">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Quality First</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Modern Technology <br />
                <span className="text-primary italic">Precision Reports</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: ShieldCheck, title: "NMC Certified", desc: "Our laboratory strictly follows the guidelines set by Nepal Medical Council." },
                { icon: Activity, title: "High Precision", desc: "Utilizing state-of-the-art automated machines for error-free diagnostic results." },
                { icon: Clock, title: "Same Day Reporting", desc: "Most routine test reports are delivered on the same day via WhatsApp or Portal." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-5xl space-y-6 hover:bg-white/10 transition-colors">
                  <div className="h-16 w-16 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
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
