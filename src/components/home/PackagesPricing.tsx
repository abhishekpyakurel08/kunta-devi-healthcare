import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PackagesPricing() {
  const packages = [
    {
      name: "Basic Checkup",
      price: "NPR.2,500",
      features: ["CBC Test", "Blood Sugar", "Urine Analysis", "BMI Check", "Doctor Consult"],
    },
    {
      name: "Standard",
      price: "NPR.5,000",
      features: ["All Basic Tests", "Lipid Profile", "Liver function", "Kidney Function", "ECG", "Doctor Consult"],
    },
    {
      name: "Comprehensive",
      price: "NPR.8,500",
      features: ["All Standard Tests", "Thyroid Panel", "Chest X-Ray", "Ultrasound", "Vitamin Panel", "Eye Check Up", "Doctor Consult"],
      highlight: true,
    },
    {
      name: "Corporate",
      price: "Custom Pricing",
      features: ["Custom Test Panel", "Bulk Discounts", "Home Collection", "Digital Reports", "Dedicated Manager", "Annual Contract"],
    },
  ];

  return (
    <Section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">Health Packages</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Affordable Health Packages</h2>
        <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto">
          Comprehensive diagnostic packages designed for every need and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <div 
            key={i} 
            className={cn(
              "info-card group relative p-6 sm:p-8 rounded-4xl border transition-all duration-500 flex flex-col h-full bg-white hover:-translate-y-2",
              pkg.highlight 
                ? "border-primary shadow-2xl z-10 py-10 sm:py-12 scale-100 sm:scale-[1.03]" 
                : "border-slate-100 hover:border-primary/20 shadow-sm"
            )}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-800">{pkg.name}</h3>
            
            </div>

            <div className="h-px bg-slate-100 w-full mb-6 sm:mb-8"></div>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start justify-between gap-3">
                  <span className="text-[13px] sm:text-sm font-medium text-slate-500">{feature}</span>
                  <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-emerald-600 stroke-3" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2 sm:pt-6">
              <Button 
                variant={pkg.highlight ? "default" : "secondary"} 
                className={cn(
                  "w-full rounded-2xl h-12 sm:h-14 font-bold transition-transform hover:scale-[1.02]",
                  pkg.highlight 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90" 
                    : "bg-emerald-50 text-primary hover:bg-emerald-100 shadow-none"
                )}
                asChild
              >
                <Link href="/appointment">Book Package</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
