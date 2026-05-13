import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/home/StatsBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Car, Info, ArrowRight } from "lucide-react";
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
          subtitle="We're here to help you with any questions or medical concerns."
          breadcrumb="Contact"
        />

        <Section className="bg-white">
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
               <div id="map" className="aspect-video w-full rounded-6xl bg-slate-100 border-8 border-white shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce" />
                      <p className="font-bold text-dark text-xl">Google Maps Embed</p>
                      <p className="text-sm text-muted font-bold tracking-[0.2em] uppercase mt-2">Kunta Devi Health Care</p>
                    </div>
                  </div>
               </div>

               {/* Quick Info Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InfoItem icon={Clock} title="Clinic Hours" text="Sun-Fri: 7AM - 8PM, Sat: 8AM - 2PM" />
                  <InfoItem icon={Car} title="Parking" text="Free parking available for patients & visitors" />
                  <InfoItem icon={Info} title="Emergency" text="24/7 emergency contact available" />
               </div>

               {/* Large Call to Action */}
               <div className="bg-primary p-10 md:p-16 rounded-6xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="relative z-10 space-y-8">
                     <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">Ready to book an <br className="hidden md:block" /> appointment?</h3>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-16 text-lg font-bold shadow-2xl" asChild>
                           <Link href="/appointment">Book Online Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-10 h-16 text-lg font-bold" asChild>
                           <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                           </a>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function ContactCard({ icon: Icon, title, lines, action }: { icon: any, title: string, lines: string[], action: { label: string, href: string } }) {
  return (
    <Card className="p-8 rounded-5xl border-none shadow-sm bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
      <CardContent className="p-0 space-y-6">
        <div className="h-14 w-14 rounded-2xl bg-white border border-border flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="h-7 w-7" />
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-dark">{title}</h4>
          <div className="space-y-1">
            {lines.map((line, i) => (
              <p key={i} className="text-muted font-medium">{line}</p>
            ))}
          </div>
        </div>
        <Button variant="link" className="p-0 text-primary font-bold group/btn" asChild>
          <a href={action.href}>
            {action.label} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function InfoItem({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h5 className="font-bold text-dark text-xs uppercase tracking-widest mb-1">{title}</h5>
        <p className="text-xs text-muted font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
