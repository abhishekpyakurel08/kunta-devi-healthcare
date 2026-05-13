import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { StatsBanner } from "@/components/home/StatsBanner";
import { GalleryMasonry } from "@/components/home/GalleryMasonry";
import { CheckCircle2, History, Target, Eye, Users, Award, Heart, ShieldCheck, Zap, Lightbulb, TrendingUp, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
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
        {/* About Hero */}
        <section className="bg-slate-50 pt-24 pb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 pointer-events-none"></div>
          <Container className="relative z-10 text-center space-y-8">
             <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Learn About Us</span>
             <h1 className="text-4xl md:text-7xl font-black text-dark tracking-tighter leading-[1.1]">
                Caring for Families. <br />
                <span className="text-primary">Building Healthier Communities.</span>
             </h1>
             <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto font-medium leading-relaxed">
                For over a decade, Kunta Devi Health Care has been dedicated to providing excellence in medical care with a focus on trust, technology, and compassion.
             </p>
          </Container>
        </section>

        {/* Our Journey */}
        <Section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053" 
                    alt="Our Journey" 
                    className="w-full aspect-square object-cover"
                  />
               </div>
               {/* Small floating image */}
               <div className="absolute -top-10 -right-10 w-48 h-48 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070" 
                    alt="Early days" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
            <div className="space-y-8">
               <div className="space-y-4">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Our History</span>
                  <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-tight">Our Journey of <br /><span className="text-primary italic">Trust and Care</span></h2>
               </div>
               <p className="text-lg text-muted leading-relaxed font-medium">
                  Founded in 2011, Kunta Devi Health Care started with a small vision of making diagnostic services accessible to everyone. Today, we are a leading healthcare provider in Kathmandu, serving thousands of families with advanced medical technology and expert consultations.
               </p>
               <ul className="space-y-4">
                  {[
                    "ISO 9001:2015 Certified Laboratory",
                    "Over 15 Years of Healthcare Excellence",
                    "Advanced Diagnostic & Imaging Technology",
                    "Team of 50+ Specialized Doctors",
                    "Patient-First Compassionate Approach",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-white stroke-3" />
                       </div>
                       <span className="text-dark font-bold text-sm tracking-tight">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <section className="bg-slate-50 py-24">
           <Container>
              <div className="text-center mb-16 space-y-4">
                 <span className="text-primary font-bold tracking-widest uppercase text-xs">Purpose</span>
                 <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight">Mission & Vision</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                    { icon: Target, title: "Our Mission", desc: "To provide accessible, high-quality, and affordable healthcare services through innovation and compassion, ensuring the well-being of every patient we serve." },
                    { icon: Eye, title: "Our Vision", desc: "To be the most trusted and preferred healthcare destination in Nepal, recognized for excellence in diagnostic accuracy and patient-centric medical care." },
                 ].map((card, i) => (
                    <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl shadow-dark/5 border border-border/50 group hover:border-primary/50 transition-all duration-500">
                       <div className="h-20 w-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <card.icon className="h-10 w-10" />
                       </div>
                       <h3 className="text-2xl font-black text-dark mb-4">{card.title}</h3>
                       <p className="text-muted leading-relaxed font-medium">{card.desc}</p>
                    </div>
                 ))}
              </div>
           </Container>
        </section>

        {/* Values */}
        <Section className="bg-white">
           <div className="text-center mb-20 space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Core</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight">Values That Guide <br />Everything We Do</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                 { icon: ShieldCheck, title: "Integrity", desc: "We maintain the highest ethical standards in all our medical practices and patient interactions." },
                 { icon: Heart, title: "Compassion", desc: "Every patient is treated with kindness, empathy, and respect, prioritizing their emotional well-being." },
                 { icon: Lightbulb, title: "Innovation", desc: "We continuously upgrade our technology and methods to provide the most accurate diagnostic results." },
                 { icon: Award, title: "Excellence", desc: "We strive for perfection in every service we provide, from consultation to final diagnostic reports." },
              ].map((value, i) => (
                 <div key={i} className="bg-slate-50 p-10 rounded-5xl text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
                    <div className="h-16 w-16 rounded-2xl bg-white text-primary flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-black text-dark mb-4">{value.title}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">{value.desc}</p>
                 </div>
              ))}
           </div>
        </Section>

        {/* Leadership Message */}
        <section className="bg-slate-50 py-24">
           <Container>
              <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl border border-border/30 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 pointer-events-none"></div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                       <div className="aspect-4/5 bg-slate-100 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                          <img 
                            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974" 
                            alt="Dr. Kunta Devi" 
                            className="w-full h-full object-cover"
                          />
                       </div>
                       <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-border/50">
                          <p className="font-black text-dark text-lg">Dr. Kunta Devi</p>
                          <p className="text-primary font-bold text-xs uppercase tracking-widest">Medical Director</p>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <span className="text-primary font-bold tracking-widest uppercase text-xs">Medical Director's Message</span>
                       <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-tight">A Message From <br />Our Leadership</h2>
                       <div className="relative">
                          <p className="text-2xl font-medium text-muted leading-relaxed italic relative z-10">
                             "At Kunta Devi Health Care, our mission is simple: to provide the best possible medical care to our community with integrity and excellence. We are committed to your health journey."
                          </p>
                          <div className="absolute -top-10 -left-10 text-primary/5 text-[200px] font-black pointer-events-none">“</div>
                       </div>
                       <div className="pt-8 border-t border-border/50 flex items-center gap-4">
                          <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
                             <Award className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                             <p className="font-black text-dark">Award Winning Excellence</p>
                             <p className="text-xs text-muted font-bold uppercase tracking-widest">Best Diagnostic Center 2024</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </Container>
        </section>

        {/* Timeline */}
        <Section className="bg-white">
           <div className="text-center mb-24 space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight">A Decade of Growth <br />and Commitment</h2>
           </div>
           
           <div className="relative pt-12 pb-24">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
              <div className="absolute top-1/2 left-0 w-1/4 h-1 bg-primary -translate-y-1/2 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 relative">
                 {[
                    { year: "2011", title: "Establishment", desc: "Started with a vision of accessible diagnostic services." },
                    { year: "2015", title: "ISO Certification", desc: "Achieved ISO 9001:2015 for quality management." },
                    { year: "2019", title: "New Department", desc: "Opened specialized cardiology and orthopedic units." },
                    { year: "2024", title: "Digital Transformation", desc: "Implemented fully automated diagnostic systems." },
                 ].map((milestone, i) => (
                    <div key={i} className="relative group text-center lg:text-left lg:px-6">
                       <div className="hidden lg:flex absolute top-[-50px] left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-white shadow-lg transition-transform group-hover:scale-150 z-20"></div>
                       <div className="inline-flex items-center justify-center h-16 w-32 bg-primary text-white font-black text-2xl rounded-2xl mb-8 shadow-xl shadow-primary/20 transition-transform group-hover:scale-110">
                          {milestone.year}
                       </div>
                       <h3 className="text-xl font-black text-dark mb-2">{milestone.title}</h3>
                       <p className="text-sm text-muted font-medium leading-relaxed">{milestone.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </Section>

        <GalleryMasonry />
        
        {/* Accreditation */}
        <section className="bg-white py-24 border-t border-border/30">
           <Container>
              <div className="text-center mb-16 space-y-4">
                 <span className="text-primary font-bold tracking-widest uppercase text-xs">Trust Indicators</span>
                 <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight">Licensed, Recognized, and Trusted</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                 {["Ministry of Health", "ISO 9001:2015", "Nepal Medical Council", "NPHL Accredited"].map((brand, i) => (
                    <div key={i} className="bg-slate-50 h-32 rounded-3xl border border-border/50 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 group">
                       <div className="h-10 w-10 bg-primary/10 rounded-xl mb-2 flex items-center justify-center text-primary">
                          <ShieldCheck className="h-6 w-6" />
                       </div>
                       <p className="text-xs font-black text-muted group-hover:text-primary transition-colors text-center">{brand}</p>
                    </div>
                 ))}
              </div>
           </Container>
        </section>

        <StatsBanner />
      </main>
      <Footer />
    </div>
  );
}
