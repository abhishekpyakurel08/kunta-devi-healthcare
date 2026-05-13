import Link from "next/link";
import { CheckCircle2, User, Users, ClipboardList } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Welcome to Kunta Devi Health Care
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Your Trusted <br />
                Health Partner <br />
                in Kathmandu
              </h1>
              <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                Quality healthcare, expert doctors, modern diagnostics, and trusted medical products—all under one roof.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl px-10 h-14 border-primary text-primary font-bold border-2" asChild>
                <Link href="/services">Explore Service</Link>
              </Button>
              <Button size="lg" className="w-full sm:w-auto rounded-xl px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20" asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>

            {/* Feature List */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
              {[
                { icon: CheckCircle2, text: "Licensed Healthcare Center" },
                { icon: Users, text: "Experienced Specialists" },
                { icon: ClipboardList, text: "Fast And Reliable Service" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-[13px] font-bold text-slate-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
            {/* Background Decorative Shape */}
            <div className="absolute inset-[-8%] bg-emerald-50/50 rounded-[4rem] -z-10"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-white border-8 bg-white">
              <div className="aspect-square bg-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
                  alt="Professional doctor consulting patient" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Info Cards */}
            {/* Top Left: 20+ Specialist Doctors */}
            <div className="absolute -top-6 -left-10 bg-white p-4 pr-8 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 group hover:scale-105 transition-all duration-300">
               <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50">
                 <Users className="h-6 w-6" />
               </div>
               <div>
                 <p className="text-xl font-black text-slate-900 leading-none mb-1">20 +</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specialist Doctors</p>
               </div>
            </div>

            {/* Right: 100+ Happy Patients */}
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-4 pr-8 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 group hover:scale-105 transition-all duration-300 z-20">
               <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50">
                 <User className="h-6 w-6" />
               </div>
               <div>
                 <p className="text-xl font-black text-slate-900 leading-none mb-1">100+</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Patients</p>
               </div>
            </div>

            {/* Bottom: Same Day Lab Reports */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 pr-10 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 group hover:scale-105 transition-all duration-300 whitespace-nowrap">
               <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50">
                 <ClipboardList className="h-8 w-8" />
               </div>
               <div>
                 <p className="text-xl font-black text-slate-900 leading-none mb-1">Same Day</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lab Reports</p>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
