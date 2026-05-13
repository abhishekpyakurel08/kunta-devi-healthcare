import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Our commitment to protecting your privacy and personal health information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Privacy Policy" 
          subtitle="Your privacy and data security are our top priorities."
          breadcrumb="Privacy"
        />

        <Section className="bg-white">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2 className="text-2xl font-bold text-dark mb-6">1. Introduction</h2>
            <p className="text-muted leading-relaxed mb-8">
              Kunta Devi Health Care & Diagnostic Center ("we," "our," or "us") is committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our clinic or use our website.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-6">2. Information We Collect</h2>
            <p className="text-muted leading-relaxed mb-4">We collect information that is necessary to provide you with healthcare services, including:</p>
            <ul className="list-disc pl-6 text-muted space-y-2 mb-8">
              <li>Contact details (name, phone, email, address)</li>
              <li>Medical history and diagnostic results</li>
              <li>Insurance information (if applicable)</li>
              <li>Information provided via our appointment forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-6">3. How We Use Your Information</h2>
            <p className="text-muted leading-relaxed mb-4">Your information is used solely for:</p>
            <ul className="list-disc pl-6 text-muted space-y-2 mb-8">
              <li>Providing medical consultation and diagnostic reports</li>
              <li>Scheduling appointments and follow-ups</li>
              <li>Improving our services and patient experience</li>
              <li>Legal and regulatory compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-6">4. Data Security</h2>
            <p className="text-muted leading-relaxed mb-8">
              We implement industry-standard security measures to protect your data from unauthorized access, loss, or disclosure. Medical records are stored securely and accessed only by authorized personnel.
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
