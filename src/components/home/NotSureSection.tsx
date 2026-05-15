import Link from "next/link";
import { Activity, Beaker, Zap, Stethoscope, BriefcaseMedical, TestTube } from "lucide-react";
import { Container } from "../layout/container";
import { cn } from "../../lib/utils";

const items = [
  {
    title: "General Checkup",
    desc: "For daily health needs and routine.",
    linkText: "Consult Now",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Maternal Health services",
    desc: "For health search and screening.",
    linkText: "Consult Now",
    icon: Stethoscope,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Vaccination",
    desc: "Essential health screening services.",
    linkText: "Consult Now",
    icon: Zap,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Child Care Consultation",
    desc: "For health search and screening.",
    linkText: "Consult Now",
    icon: BriefcaseMedical,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Dietetics / Nutrition",
    desc: "Nutrition guidance and screening services.",
    linkText: "Consult Now",
    icon: Beaker,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Blood Testing / Reports",
    desc: "Fast and reliable laboratory diagnostics.",
    linkText: "Consult Now",
    icon: TestTube,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
];

export function NotSureSection() {
  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <Container>
        <div className="text-center mb-16 space-y-3">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Helpful Medical Guide</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Not Sure What You Need?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Take a look at our quick guides or reach out to our experts for assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-6">
                <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", item.bg)}>
                  <item.icon className={cn("h-8 w-8", item.color)} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                  <Link href="/appointment" className="text-xs font-bold text-primary underline underline-offset-4 hover:text-primary/80">
                    {item.linkText}
                  </Link>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6">
                 <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors">
                    Book Now
                 </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
