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
    <Section className="bg-white py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Health Packages</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Affordable Health Packages</h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
          Comprehensive diagnostic packages designed for every need and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <div 
            key={i} 
            className={cn(
              "group relative p-8 rounded-4xl border transition-all duration-500 flex flex-col h-full bg-white",
              pkg.highlight 
                ? "border-primary shadow-2xl scale-105 z-10 py-12" 
                : "border-slate-100 hover:border-primary/20 shadow-sm"
            )}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            <div className="space-y-2 mb-8">
              <h3 className="text-lg font-bold text-slate-800">{pkg.name}</h3>
              <p className="text-3xl font-black text-slate-900 tracking-tight">{pkg.price}</p>
            </div>

            <div className="h-px bg-slate-100 w-full mb-8"></div>

            <ul className="space-y-5 mb-10 flex-1">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-500">{feature}</span>
                  <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald-600 stroke-3" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button 
                variant={pkg.highlight ? "default" : "secondary"} 
                className={cn(
                  "w-full rounded-2xl h-14 font-bold transition-all",
                  pkg.highlight 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
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
