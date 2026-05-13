import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export const metadata = generateSEO({
  title: "Terms & Conditions",
  description: "Terms and conditions for using our healthcare and diagnostic services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Terms & Conditions" 
          subtitle="Legal guidelines for using our website and healthcare services."
          breadcrumb="Terms"
        />

        <Section className="bg-white">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2 className="text-2xl font-bold text-dark mb-6">1. Acceptance of Terms</h2>
            <p className="text-muted leading-relaxed mb-8">
              By accessing our website and using our healthcare or diagnostic services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-6">2. Medical Advice Disclaimer</h2>
            <p className="text-muted leading-relaxed mb-8">
              The content on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-6">3. Appointments and Cancellations</h2>
            <p className="text-muted leading-relaxed mb-8">
              Appointments scheduled through our website are subject to confirmation by our clinic staff. While we strive to honor all scheduled times, we reserve the right to reschedule due to unforeseen clinical emergencies or physician availability.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-6">4. Diagnostic Reports</h2>
            <p className="text-muted leading-relaxed mb-8">
              Diagnostic reports are issued based on the samples provided and current laboratory standards. While we ensure maximum accuracy, results should be interpreted by a qualified medical professional in the context of clinical findings.
            </p>

            <div className="p-8 rounded-3xl bg-slate-50 border border-border/50 mt-12">
               <p className="text-sm font-bold text-dark mb-2 uppercase tracking-widest">Last Updated</p>
               <p className="text-sm text-muted">May 13, 2026</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
