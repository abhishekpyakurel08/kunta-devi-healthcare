import Link from "next/link";
import { ArrowRight, Clock, FlaskConical } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { diagnostics } from "@/data/diagnostics";

export function DiagnosticsPreview() {
  return (
    <Section
      id="diagnostics"
      subtitle="Advanced Diagnostics"
      title="Precise Results, Trusted Reports"
      className="bg-white py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 p-10 rounded-6xl border border-slate-100 shadow-sm">
            <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-8">
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Why Choose Our Laboratory?</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              We use the latest automated technology to ensure the highest accuracy in every test. Our lab is ISO certified and follows international quality standards.
            </p>
            <ul className="space-y-5">
              {["ISO Certified Lab", "Qualified Pathologists", "Home Sample Collection", "Digital Reports via WhatsApp"].map((item) => (
                <li key={item} className="flex items-center gap-4 font-bold text-slate-700">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-10 rounded-2xl h-14 bg-primary text-white font-bold shadow-xl shadow-primary/20" asChild>
              <Link href="/diagnostics">View All Tests</Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {diagnostics.slice(0, 4).map((test) => (
            <div key={test.id} className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {test.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    {test.turnaround}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-primary transition-colors">{test.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3">
                  {test.description}
                </p>
              </div>
              <Link href="/diagnostics" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Test Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
