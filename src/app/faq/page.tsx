import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { faqs } from "@/data/faqs";
import { HelpCircle, ChevronRight, MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/site-config";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

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
          subtitle="Everything you need to know about our medical services, appointments, and diagnostic processes."
          breadcrumb="FAQ"
        />

        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="group p-10 rounded-4xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <HelpCircle className="h-8 w-8" />
                    </div>
                    <div className="space-y-6 flex-1">
                      <div className="space-y-3">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Question {i + 1}</span>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <p className="text-slate-500 leading-relaxed font-bold border-l-4 border-slate-100 pl-6 py-1 italic">
                        {faq.answer}
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                         <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Answer</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-24 p-12 md:p-20 rounded-4xl bg-slate-900 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-48 -mt-48 blur-3xl"></div>
               <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Support Center</span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight">Still have questions?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto font-bold leading-relaxed">
                      If you couldn't find the answer to your question, our medical support team is ready to assist you.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <Button size="pill" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 text-lg font-black shadow-2xl shadow-primary/20" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                           <MessageSquare className="mr-3 h-6 w-6" /> Chat on WhatsApp
                        </a>
                     </Button>
                     <Button size="pill" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-slate-900 px-12 h-16 text-lg font-black transition-all" asChild>
                        <Link href="/contact">Contact Support</Link>
                     </Button>
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
