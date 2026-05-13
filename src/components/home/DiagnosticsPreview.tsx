import Link from "next/link";
import { ArrowRight, Clock, FlaskConical } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { diagnostics } from "@/data/diagnostics";

export function DiagnosticsPreview() {
  return (
    <Section
      id="diagnostics"
      subtitle="Advanced Diagnostics"
      title="Precise Results, Trusted Reports"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-primary/5 p-8 rounded-4xl border border-primary/10">
            <FlaskConical className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-dark mb-4">Why Choose Our Laboratory?</h3>
            <p className="text-muted leading-relaxed mb-6">
              We use the latest automated technology to ensure the highest accuracy in every test. Our lab is ISO certified and follows international quality standards.
            </p>
            <ul className="space-y-4">
              {["ISO Certified Lab", "Qualified Pathologists", "Home Sample Collection", "Digital Reports via WhatsApp"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-dark text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8 rounded-2xl" asChild>
              <Link href="/diagnostics">View All Tests</Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {diagnostics.slice(0, 4).map((test) => (
            <Card key={test.id} className="border-border hover:border-primary/30 group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="rounded-md">{test.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">
                    <Clock className="h-3 w-3" />
                    {test.turnaround}
                  </div>
                </div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-2">
                  {test.description}
                </CardDescription>
                <Link href="/diagnostics" className="text-sm font-bold text-primary flex items-center group-hover:underline">
                  Test Details <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
