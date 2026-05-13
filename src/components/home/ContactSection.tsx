import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { clinicInfo } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      text: "Ghattekulo , Kathmandu ,Nepal",
    },
    {
      icon: Phone,
      text: "+977 01-XXXXXXX",
    },
    {
      icon: Mail,
      text: "info@kuntadevi.com",
    },
    {
      icon: Clock,
      text: "Sunday – Friday: 7:00 AM – 7:00 PM",
    },
  ];

  return (
    <Section className="bg-white py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Map */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-white border-8 aspect-square lg:aspect-auto lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4816669941424!2d85.32832447614488!3d27.702410325732152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0718519e5%3A0xe54e3f3050a41753!2sGhattekulo%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1715582345678!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          {/* Right: Contact Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Health Resources</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Visit Us Today</h2>
              <p className="text-slate-500 font-medium">We are here for you — walk in or book ahead.</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-5 bg-[#F0F9F9] rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    <item.icon className={cn(
                      "h-7 w-7",
                      i === 0 ? "text-red-500" : "text-slate-800"
                    )} />
                  </div>
                  <p className="font-bold text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button variant="outline" className="w-full sm:w-auto rounded-xl h-14 px-8 border-primary/30 text-primary font-bold" asChild>
                <Link href={clinicInfo.mapLink} target="_blank">
                  Get Direction <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button className="w-full sm:w-auto rounded-xl h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20" asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
    </Section>
  );
}
