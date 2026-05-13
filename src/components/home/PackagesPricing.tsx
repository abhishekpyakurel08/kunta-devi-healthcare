import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { healthPackages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function PackagesPricing() {
  return (
    <Section
      id="packages"
      subtitle="Health Screenings"
      title="Preventive Health Packages"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthPackages.slice(0, 3).map((pkg) => (
          <Card key={pkg.id} className={cn(
            "relative flex flex-col h-full overflow-hidden transition-all duration-500",
            pkg.recommended ? "border-primary shadow-2xl scale-105 z-10 bg-white" : "border-border/50 shadow-sm bg-white/50"
          )}>
            {pkg.recommended && (
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-10 py-1 rotate-45 translate-x-10 translate-y-4 shadow-lg">
                  Popular
                </div>
              </div>
            )}
            <CardHeader className="text-center pt-10">
              <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
              </div>
              <CardDescription className="font-medium text-muted">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow pb-8">
              <ul className="space-y-4">
                {pkg.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-dark font-semibold">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="h-3 w-3 stroke-3" />
                    </div>
                    {feature}
                  </li>
                ))}
                {pkg.features.length > 6 && (
                  <li className="text-xs text-primary font-bold pl-8 hover:underline cursor-help">
                    + {pkg.features.length - 6} more tests included
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter className="pb-10">
              <Button 
                className="w-full rounded-2xl h-14 text-base shadow-lg shadow-primary/10" 
                variant={pkg.recommended ? "default" : "outline"}
                asChild
              >
                <Link href="/appointment">Book This Package</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button variant="ghost" className="text-primary font-bold text-lg hover:bg-primary/5 rounded-full px-8" asChild>
          <Link href="/packages">View All Packages & Compare <Check className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </Section>
  );
}
