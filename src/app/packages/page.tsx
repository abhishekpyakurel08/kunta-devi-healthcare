import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/home/StatsBanner";
import { healthPackages } from "@/data/packages";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Health Screening Packages",
  description: "Comprehensive health screening packages for individuals and families. Early detection for a healthier life.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Preventive Health Packages" 
          subtitle="Choose the right screening package for you and your family to stay ahead of health risks."
          breadcrumb="Packages"
        />

        <Section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {healthPackages.map((pkg) => (
              <Card key={pkg.id} className={cn(
                "relative flex flex-col h-full overflow-hidden transition-all duration-500 rounded-6xl",
                pkg.recommended ? "border-primary shadow-2xl scale-105 z-10 bg-white" : "border-border/50 shadow-sm bg-slate-50/50"
              )}>
                {pkg.recommended && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-10 py-1 rotate-45 translate-x-10 translate-y-4 shadow-lg">
                      Best Value
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pt-12 px-8">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl mb-2">{pkg.title}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                  </div>
                  <CardDescription className="font-semibold text-muted text-base px-4">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="grow px-10 pb-10">
                  <div className="h-px w-full bg-border/50 mb-8"></div>
                  <h4 className="text-sm font-bold text-dark uppercase tracking-widest mb-6">Included Screenings</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-dark font-semibold leading-tight">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Check className="h-3 w-3 stroke-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-12 px-10">
                  <Button 
                    className="w-full rounded-2xl h-14 text-lg shadow-xl shadow-primary/20 group/btn" 
                    variant={pkg.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/appointment">
                      Book Package <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* Comparison Section Placeholder */}
        <Section title="Why Invest in Health Packages?" className="bg-slate-50">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Cost Effective", desc: "Save up to 40% compared to individual tests." },
                { title: "Early Detection", desc: "Identify potential health risks before they become serious." },
                { title: "Peace of Mind", desc: "Detailed insights into your overall body health." },
                { title: "Expert Consultation", desc: "Free follow-up consultation with our GP included." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-4xl shadow-sm border border-border/50">
                  <h4 className="font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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
