import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { StatsBanner } from "@/components/home/StatsBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { Target, Eye, ShieldCheck, Heart, Lightbulb, Award, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "About Us",
  description: "Learn about the history, mission, and values of Kunta Devi Health Care & Diagnostic Center.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Building Healthier Communities" 
          subtitle="For over a decade, Kunta Devi Health Care has been dedicated to providing excellence in medical care with a focus on trust and technology."
          breadcrumb="About Us"
        />

        {/* Our Journey */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="relative aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl border-8 border-slate-50 bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center">
                    <Image 
                      src="/logo.jpg" 
                      alt="Our Journey – Kunta Devi Health Care" 
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-8 hover:scale-105 transition-all duration-700"
                    />
                 </div>
                 {/* Floating badge */}
                 <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl text-white text-center hidden md:block border-4 border-white">
                    <p className="text-4xl font-black mb-1">15+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest">Years of Trust</p>
                 </div>
              </div>
              
              <div className="space-y-10">
                 <div className="space-y-4">
                    <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Our History</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Our Journey of <br /><span className="text-primary italic">Trust and Care</span></h2>
                 </div>
                 
                 <p className="text-lg text-slate-500 leading-relaxed font-bold">
                    Founded in 2011, Kunta Devi Health Care started with a small vision of making diagnostic services accessible to everyone. Today, we are a leading healthcare provider in Kathmandu, serving thousands of families with advanced medical technology and expert consultations.
                 </p>
                 
                 <ul className="space-y-5">
                    {[
                      "ISO 9001:2015 Certified Laboratory",
                      "Over 15 Years of Healthcare Excellence",
                      "Advanced Diagnostic & Imaging Technology",
                      "Team of 50+ Specialized Doctors",
                      "Patient-First Compassionate Approach",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                         <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-emerald-600 stroke-[4px]" />
                         </div>
                         <span className="text-slate-700 font-black text-sm tracking-tight">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="bg-slate-50/50 py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
           <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {[
                    { icon: Target, title: "Our Mission", color: "bg-emerald-50 text-emerald-600", desc: "To provide accessible, high-quality, and affordable healthcare services through innovation and compassion, ensuring the well-being of every patient we serve." },
                    { icon: Eye, title: "Our Vision", color: "bg-primary/5 text-primary", desc: "To be the most trusted and preferred healthcare destination in Nepal, recognized for excellence in diagnostic accuracy and patient-centric medical care." },
                 ].map((card, i) => (
                    <div key={i} className="bg-white p-12 md:p-16 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:translate-y-[-8px] transition-all duration-500">
                       <div className={cn("h-20 w-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform", card.color)}>
                          <card.icon className="h-10 w-10" />
                       </div>
                       <h3 className="text-3xl font-black text-slate-900 mb-6">{card.title}</h3>
                       <p className="text-slate-500 text-lg leading-relaxed font-bold">{card.desc}</p>
                    </div>
                 ))}
              </div>
           </Container>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
           <Container>
              <div className="text-center mb-20 space-y-4">
                 <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Our Core Values</span>
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Values That Guide Us</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { icon: ShieldCheck, title: "Integrity", desc: "We maintain the highest ethical standards in all our medical practices." },
                    { icon: Heart, title: "Compassion", desc: "Every patient is treated with kindness, empathy, and utmost respect." },
                    { icon: Lightbulb, title: "Innovation", desc: "We continuously upgrade our technology to provide the best diagnostics." },
                    { icon: Award, title: "Excellence", desc: "We strive for perfection in every service, from consultation to reports." },
                 ].map((value, i) => (
                    <div key={i} className="bg-slate-50 p-10 rounded-4xl text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
                       <div className="h-16 w-16 rounded-2xl bg-white text-primary flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <value.icon className="h-8 w-8" />
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-4">{value.title}</h3>
                       <p className="text-xs text-slate-500 font-bold leading-relaxed">{value.desc}</p>
                    </div>
                 ))}
              </div>
           </Container>
        </section>

        {/* Leadership Message */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
           <Container className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="relative">
                    <div className="aspect-4/5 bg-slate-800 rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5">
                       <Image 
                         src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974" 
                         alt="Dr. Kunta Devi" 
                         fill
                         sizes="(max-width: 1024px) 100vw, 50vw"
                         className="object-cover"
                       />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-4xl shadow-2xl border border-slate-100 hidden md:block">
                       <p className="font-black text-slate-900 text-2xl">Dr. Kunta Devi</p>
                       <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mt-1">Medical Director</p>
                    </div>
                 </div>
                 
                 <div className="space-y-10">
                    <div className="space-y-4">
                       <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Medical Director&apos;s Message</span>
                       <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">A Vision for <br /><span className="text-primary">Better Health</span></h2>
                    </div>
                    
                    <div className="relative">
                       <p className="text-2xl md:text-3xl font-bold leading-relaxed italic relative z-10 text-slate-300">
                          &quot;At Kunta Devi Health Care, our mission is simple: to provide the best possible medical care with integrity and excellence. We are committed to your health journey.&quot;
                       </p>
                       <div className="absolute -top-16 -left-16 text-primary/10 text-[240px] font-black pointer-events-none">“</div>
                    </div>
                    
                    <div className="pt-10 border-t border-white/10 flex items-center gap-6">
                       <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                          <Award className="h-8 w-8 text-primary" />
                       </div>
                       <div>
                          <p className="font-black text-xl">Award Winning Excellence</p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Best Diagnostic Center 2024</p>
                       </div>
                    </div>
                 </div>
              </div>
           </Container>
        </section>

        <StatsBanner />
        <FAQSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
