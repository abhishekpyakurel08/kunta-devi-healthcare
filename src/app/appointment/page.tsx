import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import { clinicInfo } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Book Appointment",
  description: "Schedule your visit with our expert doctors or book a diagnostic test online at Kunta Devi Health Care.",
  path: "/appointment",
});

export default function AppointmentPage() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Book Your Visit" 
          subtitle="Simple, fast, and reliable appointment booking for all our services."
          breadcrumb="Appointment"
        />

        <Section className="bg-slate-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Details Side */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-dark">Need Immediate Help?</h2>
                <p className="text-muted leading-relaxed">
                  If you have an emergency or want to book via phone/WhatsApp, please use the direct contact methods below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Button size="lg" className="h-20 rounded-3xl bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 text-white font-bold text-lg justify-start px-8 group" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-4 h-7 w-7 transition-transform group-hover:scale-110" />
                    Book via WhatsApp
                  </a>
                </Button>
                
                <Button size="lg" variant="secondary" className="h-20 rounded-3xl bg-dark text-white font-bold text-lg justify-start px-8 group" asChild>
                  <a href={`tel:${clinicInfo.phone}`}>
                    <Phone className="mr-4 h-7 w-7 transition-transform group-hover:scale-110 text-primary" />
                    Call for Inquiry
                  </a>
                </Button>
              </div>

              <div className="p-8 rounded-5xl bg-white shadow-sm border border-border/50 space-y-6">
                <h4 className="font-bold text-dark text-xl">Clinic Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted font-medium">{clinicInfo.address}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <div className="text-sm text-muted font-medium">
                      <p>Sun - Fri: 7:00 AM - 8:00 PM</p>
                      <p>Sat: 8:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <div className="mb-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-dark mb-2">Request Online Appointment</h3>
                <p className="text-muted">Fill out the form below and our coordinator will confirm your slot within 2 hours.</p>
              </div>
              <AppointmentForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
