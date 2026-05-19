import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare, Car, Info, ArrowRight } from "lucide-react";
import { clinicInfo } from "@/data/site-config";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with Kunta Devi Health Care. Find our location, phone number, and clinic hours in Kathmandu.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Contact Our Team" 
          subtitle="We're here to help you with any questions or medical concerns. Get in touch today."
          breadcrumb="Contact"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <ContactCard 
                  icon={MapPin}
                  title="Our Location"
                  lines={[clinicInfo.address, "Chakrapath, Kathmandu", "Nepal"]}
                  action={{ label: "Get Directions", href: "#map" }}
                />
                <ContactCard 
                  icon={Phone}
                  title="Call or WhatsApp"
                  lines={[clinicInfo.phone, clinicInfo.whatsapp]}
                  action={{ label: "Call Now", href: `tel:${clinicInfo.phone}` }}
                />
                <ContactCard 
                  icon={Mail}
                  title="Email Support"
                  lines={[clinicInfo.email, "support@kuntadevi.com"]}
                  action={{ label: "Send Email", href: `mailto:${clinicInfo.email}` }}
                />
              </div>

              {/* Contact Form or Detailed Map Area */}
              <div className="lg:col-span-2 space-y-12">
                 {/* Map Placeholder */}
                 <div id="map" className="aspect-video w-full rounded-4xl bg-slate-100 border-8 border-slate-50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center transition-all group-hover:bg-primary/10">
                      <div className="text-center">
                        <MapPin className="h-20 w-20 text-primary mx-auto mb-6 animate-bounce" />
                        <h4 className="font-black text-slate-900 text-2xl">Kunta Devi Health Care</h4>
                        <p className="text-sm text-slate-500 font-bold tracking-[0.2em] uppercase mt-3">Diagnostic & Medical Center</p>
                      </div>
                    </div>
                 </div>

                 {/* Quick Info Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoItem icon={Clock} title="Clinic Hours" text="Sun-Fri: 7AM - 8PM, Sat: 8AM - 2PM" />
                    <InfoItem icon={Car} title="Parking" text="Free parking available for patients" />
                    <InfoItem icon={Info} title="Emergency" text="24/7 emergency contact active" />
                 </div>

                 {/* Large Call to Action */}
                 <div className="bg-primary p-12 md:p-20 rounded-4xl text-white relative overflow-hidden">
                    <div className="absolute top-[-20%] left-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl"></div>

                    <div className="relative z-10 space-y-10">
                       <div className="space-y-4">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20">
                            Book Online
                         </span>
                         <h3 className="text-3xl md:text-5xl font-black leading-tight">Ready to book <br /> your visit?</h3>
                       </div>

                       <div className="flex flex-col sm:flex-row gap-4">
                          <Button size="pill" className="bg-white text-primary hover:bg-white/90 px-12 h-16 text-lg font-black shadow-2xl" asChild>
                             <Link href="/appointment">Book Online Now</Link>
                          </Button>
                          <Button size="pill" variant="outline" className="border-white text-white hover:bg-white/10 px-12 h-16 text-lg font-black" asChild>
                             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="mr-3 h-6 w-6" /> WhatsApp Us
                             </a>
                          </Button>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function ContactCard({ icon: Icon, title, lines, action }: { icon: React.ElementType, title: string, lines: string[], action: { label: string, href: string } }) {
  return (
    <div className="p-10 rounded-4xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col gap-8">
      <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon className="h-8 w-8" />
      </div>
      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <h4 className="text-2xl font-black text-slate-900">{title}</h4>
          <div className="space-y-1">
            {lines.map((line, i) => (
              <p key={i} className="text-slate-500 font-bold">{line}</p>
            ))}
          </div>
        </div>
        <Button variant="link" className="p-0 text-primary font-black group/btn h-auto" asChild>
          <a href={action.href}>
            {action.label} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
          </a>
        </Button>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, title, text }: { icon: React.ElementType, title: string, text: string }) {
  return (
    <div className="flex items-center gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-100">
      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h5 className="font-black text-slate-900 text-[10px] uppercase tracking-widest mb-1">{title}</h5>
        <p className="text-xs text-slate-500 font-bold leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
