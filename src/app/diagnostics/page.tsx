import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

import { diagnostics } from "@/data/diagnostics";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Info, FlaskConical, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Diagnostic Services",
  description: "Advanced diagnostic services including blood tests, X-ray, ultrasound, and cardiology screenings.",
  path: "/diagnostics",
});

export default function DiagnosticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Diagnostic Excellence" 
          subtitle="Precise results you can trust, delivered with speed and care."
          breadcrumb="Diagnostics"
        />

        <Section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnostics.map((test) => (
              <Card key={test.id} className="flex flex-col border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group rounded-5xl overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <FlaskConical className="h-7 w-7" />
                    </div>
                    <Badge variant="secondary" className="rounded-lg py-1 px-3 uppercase tracking-widest text-[10px] font-bold">{test.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{test.title}</CardTitle>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 py-1.5 px-3 rounded-full w-fit">
                    <Clock className="h-3.5 w-3.5" />
                    Turnaround: {test.turnaround}
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 grow space-y-6">
                  <p className="text-muted text-sm leading-relaxed">
                    {test.description}
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-dark font-bold text-xs uppercase tracking-widest">
                      <Info className="h-3.5 w-3.5 text-primary" />
                      Preparation
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed font-medium">
                      {test.preparation}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full rounded-2xl h-12 shadow-lg shadow-primary/10 group/btn" asChild>
                      <Link href="/appointment">
                        Schedule Test <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
