import { Search, ChevronDown, Stethoscope } from "lucide-react";
import { Container } from "@/components/layout/container";

export function ServicesHero() {
  return (
    <section className="bg-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl pointer-events-none rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-primary/5 blur-3xl pointer-events-none rounded-full -translate-x-1/2"></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Healthcare Excellence</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
               Specialized Care for <br />
               <span className="text-primary italic">Every Health Need</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
               From general consultations to advanced diagnostics, explore our comprehensive range of medical services designed for you.
            </p>
          </div>

          {/* Quick Search / Filter for Services */}
          <div className="bg-white p-3 rounded-5xl shadow-2xl shadow-slate-200/80 border border-slate-100 flex flex-col lg:flex-row gap-2 mt-12">
            <div className="flex-1 flex items-center gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
              <Search className="h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search services (e.g., Blood test, Cardiology)..." 
                className="bg-transparent border-none outline-none w-full text-sm font-bold text-slate-700 placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center justify-between gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 min-w-[180px] cursor-pointer hover:bg-white transition-colors">
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Department</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
              
              <button className="bg-primary text-white px-10 py-4 rounded-full font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                Find Service
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
