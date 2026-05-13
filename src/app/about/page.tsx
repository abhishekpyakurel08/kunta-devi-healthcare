import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/home/StatsBanner";
import { CheckCircle2, History, Target, Eye, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "About Us",
  description: "Learn about the history, mission, and values of Kunta Devi Health Care & Diagnostic Center.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Our Story & Vision" 
          subtitle="Dedicated to excellence in healthcare and diagnostics for over 15 years."
          breadcrumb="About Us"
        />

        {/* History Section */}
        <Section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <History className="h-7 w-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">Established with a Purpose</h2>
              <p className="text-lg text-muted leading-relaxed">
                Founded in 2011, Kunta Devi Health Care was established with the vision of bringing world-class diagnostic services and professional healthcare to the residents of Kathmandu. Named in honor of a legacy of care, we have grown from a small laboratory to a full-fledged healthcare center.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Over the years, we have invested in cutting-edge medical technology and a team of highly qualified specialists to ensure that our community doesn't have to look far for reliable medical reports and expert consultations.
              </p>
            </div>
            <div className="bg-slate-100 aspect-video rounded-6xl shadow-xl relative overflow-hidden flex items-center justify-center">
               <div className="text-primary/10 text-9xl font-bold">HISTORY</div>
               <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent"></div>
            </div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section className="bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-none shadow-sm hover:shadow-xl transition-all">
              <CardContent className="p-0 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To provide accurate, timely, and affordable diagnostic and healthcare services through innovation, expertise, and a patient-centric approach that honors human dignity.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 border-none shadow-sm hover:shadow-xl transition-all">
              <CardContent className="p-0 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-dark text-white flex items-center justify-center shadow-lg shadow-dark/20">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To be the most trusted healthcare and diagnostic partner in Nepal, recognized for clinical excellence, advanced technology, and compassionate care.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Values Grid */}
        <Section title="Our Core Values" subtitle="What We Stand For" className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy and respect." },
              { icon: Award, title: "Excellence", desc: "Commitment to the highest standards of medical care." },
              { icon: CheckCircle2, title: "Integrity", desc: "Honesty and transparency in everything we do." },
              { icon: Users, title: "Community", desc: "Serving the health needs of our local community." },
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20 group">
                <div className="h-14 w-14 rounded-2xl bg-white border border-border flex items-center justify-center text-primary mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-dark mb-3">{value.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
