import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

// Terms & Conditions - Kunta Devi Health Care
import { Scale, Stethoscope, Calendar, FileCheck, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = generateSEO({
  title: "Terms & Conditions",
  description: "Terms and conditions for using our healthcare and diagnostic services at Kunta Devi Health Care.",
  path: "/terms",
});

export default function TermsPage() {
  const sections = [
    {
      icon: Scale,
      title: "1. Acceptance of Terms",
      content: "By accessing our website and using our healthcare or diagnostic services, you agree to comply with and be bound by the following terms and conditions. These terms apply to all visitors, patients, and users of our digital platforms."
    },
    {
      icon: Stethoscope,
      title: "2. Medical Advice Disclaimer",
      content: "The content on this website is for informational purposes only and does not constitute professional medical advice. Always seek the advice of your physician or other qualified health provider for medical conditions."
    },
    {
      icon: Calendar,
      title: "3. Appointments & Cancellations",
      content: "Appointments scheduled through our website are subject to confirmation. We reserve the right to reschedule due to unforeseen clinical emergencies or physician availability. Please provide at least 2 hours notice for cancellations."
    },
    {
      icon: FileCheck,
      title: "4. Diagnostic Reports",
      content: "Diagnostic reports are issued based on laboratory standards. While we ensure maximum accuracy, results should be interpreted by a qualified medical professional in the context of clinical findings."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Terms & Conditions" 
          subtitle="Legal guidelines for using our services."
          breadcrumb="Terms"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Legal Framework</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Service Agreement</h2>
                <p className="text-slate-500 font-bold leading-relaxed max-w-2xl">
                  Please read these terms carefully before using our services. They outline your rights and responsibilities as a patient and user of our facilities.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10">
                {sections.map((section, i) => (
                  <div key={i} className="group p-10 rounded-4xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                       <div className="h-14 w-14 rounded-2xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                          <section.icon className="h-7 w-7" />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-2xl font-black text-slate-900">{section.title}</h3>
                          <p className="text-slate-500 font-bold leading-relaxed">{section.content}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-10 rounded-5xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                       <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-slate-400">Effective Date</p>
                       <p className="font-bold">May 15, 2026</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-400 font-medium max-w-md text-center md:text-left">
                   For inquiries regarding our terms, please email <span className="text-white font-bold">compliance@kuntadevi.com</span> or call our front desk.
                 </p>
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
