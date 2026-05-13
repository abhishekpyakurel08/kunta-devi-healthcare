import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

import { faqs } from "@/data/faqs";
import { HelpCircle, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/site-config";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our healthcare services, laboratory tests, and clinic procedures.",
  path: "/faq",
});

export default function FAQPage() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Common Questions" 
          subtitle="Everything you need to know about our services and processes."
          breadcrumb="FAQ"
        />

        <Section className="bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-5xl bg-slate-50 hover:bg-white border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <div className="space-y-4 pt-1.5">
                    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{faq.question}</h3>
                    <p className="text-muted leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 md:p-16 rounded-6xl bg-dark text-white text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
             <h3 className="text-3xl font-bold relative z-10">Still have questions?</h3>
             <p className="text-gray-400 max-w-xl mx-auto relative z-10">If you couldn't find the answer to your question, feel free to contact us directly via WhatsApp or phone.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button size="lg" className="rounded-full px-10 h-14" asChild>
                   <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                   </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 border-white/20 text-white hover:bg-white hover:text-dark" asChild>
                   <Link href="/contact">Contact Support</Link>
                </Button>
             </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
