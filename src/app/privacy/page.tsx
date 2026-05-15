import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

// Privacy Policy - Kunta Devi Health Care
import { ShieldCheck, Lock, Eye, FileText, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Our commitment to protecting your privacy and personal health information at Kunta Devi Health Care.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Introduction",
      content: "Kunta Devi Health Care & Diagnostic Center (\"we,\" \"our,\" or \"us\") is committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our clinic or use our website."
    },
    {
      icon: FileText,
      title: "2. Information We Collect",
      content: "We collect information that is necessary to provide you with healthcare services, including contact details (name, phone, email, address), medical history, diagnostic results, and information provided via our online appointment forms."
    },
    {
      icon: Lock,
      title: "3. How We Use Your Information",
      content: "Your information is used solely for providing medical consultation, delivering diagnostic reports, scheduling appointments, improving our patient experience, and ensuring legal and regulatory compliance."
    },
    {
      icon: ShieldCheck,
      title: "4. Data Security",
      content: "We implement industry-standard security measures to protect your data from unauthorized access. Medical records are stored securely in our encrypted systems and accessed only by authorized clinical personnel."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Privacy Policy" 
          subtitle="How we protect your personal health information."
          breadcrumb="Privacy"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Trust & Security</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Your Privacy Matters</h2>
                <p className="text-slate-500 font-bold leading-relaxed max-w-2xl">
                  We believe in being transparent about how we handle your data. Our protocols are designed to meet international healthcare privacy standards.
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
                       <p className="text-xs font-black uppercase tracking-widest text-slate-400">Last Updated</p>
                       <p className="font-bold">May 15, 2026</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-400 font-medium max-w-md text-center md:text-left">
                   If you have any questions regarding this policy, please contact our legal team at <span className="text-white font-bold">legal@kuntadevi.com</span>
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
