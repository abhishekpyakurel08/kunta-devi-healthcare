import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/site-config";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Get in Touch With Us</h2>
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              Have questions about our services or need to book an appointment? Our team is here to assist you. Contact us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactInfoCard 
              icon={MapPin} 
              title="Our Location" 
              value={clinicInfo.address} 
              subValue="Chakrapath, Kathmandu"
            />
            <ContactInfoCard 
              icon={Phone} 
              title="Call Us" 
              value={clinicInfo.phone} 
              subValue="Available 7 AM - 8 PM"
            />
            <ContactInfoCard 
              icon={Mail} 
              title="Email Us" 
              value={clinicInfo.email} 
              subValue="Response within 24h"
            />
            <ContactInfoCard 
              icon={Clock} 
              title="Clinic Hours" 
              value="Sun-Fri: 7AM - 8PM" 
              subValue="Sat: 8AM - 2PM"
            />
          </div>

          <div className="pt-6">
            <Button size="lg" className="rounded-full px-10 gap-2 shadow-xl shadow-primary/20" asChild>
              <Link href="/appointment">
                Book Online Appointment <Send className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square lg:aspect-video rounded-5xl bg-slate-100 border-8 border-white shadow-2xl overflow-hidden relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce" />
                <p className="font-bold text-dark">Google Maps Embed Location</p>
                <p className="text-xs text-muted font-bold tracking-widest uppercase mt-2">Kunta Devi Health Care</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl">
              <h4 className="font-bold text-dark mb-1">Easy to Reach</h4>
              <p className="text-xs text-muted leading-relaxed">Located at the heart of Chakrapath, easily accessible via public transport with ample parking space.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactInfoCard({ icon: Icon, title, value, subValue }: { icon: any, title: string, value: string, subValue: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-3xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300">
      <div className="h-10 w-10 rounded-2xl bg-white border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold text-dark text-sm mb-1">{title}</h4>
        <p className="text-xs text-dark font-medium mb-0.5">{value}</p>
        <p className="text-[10px] text-muted font-bold uppercase tracking-wider">{subValue}</p>
      </div>
    </div>
  );
}

import Link from "next/link";
