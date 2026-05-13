import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/site-config";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Welcome to Kunta Devi Health Care</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark tracking-tight leading-[1.1]">
                Your Trusted <br />
                <span className="text-primary">Health Partner</span> <br />
                in Kathmandu
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Dedicated to providing professional, compassionate, and affordable healthcare services to our community since 2011.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20" asChild>
                <Link href="/appointment">Find a Doctor</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-2 bg-white/50 backdrop-blur-sm" asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-dark">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-dark">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-dark">Expert Doctors</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white bg-white">
              <div className="aspect-[4/5] bg-slate-200 relative group">
                <div className="absolute inset-0 bg-linear-to-t from-dark/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                   <div className="text-9xl font-bold">HERO</div>
                </div>
                
                {/* Floating Emergency Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Emergency Contact</p>
                      <p className="text-lg font-bold text-dark">{clinicInfo.emergencyPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-5 rounded-3xl shadow-xl border border-border/50 hidden md:flex items-center gap-4 animate-bounce-subtle">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Reports</p>
                <p className="text-sm font-bold text-dark">100% Accurate</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
