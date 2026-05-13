import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

import { services } from "@/data/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Healthcare Services",
  description: "Explore our wide range of healthcare services including general OPD, specialist consultations, and maternal health.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Healthcare Services" 
          subtitle="Comprehensive medical care tailored to your needs, from primary care to specialized treatments."
          breadcrumb="Services"
        />

        <Section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-5xl bg-slate-50 hover:bg-white border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
                  <div className="h-20 w-20 rounded-3xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-primary font-bold tracking-widest uppercase text-[10px]">{service.category}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-dark group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm font-semibold text-dark">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button className="rounded-xl group/btn" asChild>
                        <Link href="/appointment">
                          Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
