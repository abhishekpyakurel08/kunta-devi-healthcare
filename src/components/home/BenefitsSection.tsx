import { Container } from "@/components/layout/container";
import { Clock, ShieldCheck, CreditCard, Bell } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "No Waiting in Queue",
    desc: "Skip the long lines. Your time slot is reserved and confirmed before you arrive.",
    stat: "70%",
    statLabel: "Less Wait Time",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Choose Your Doctor",
    desc: "Browse doctor profiles and select the specialist that best matches your health concern.",
    stat: "20+",
    statLabel: "Specialist Doctors",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CreditCard,
    title: "Flexible Consulting",
    desc: "Pay securely online or on arrival. Multiple payment options available for your convenience.",
    stat: "1 Hour",
    statLabel: "Confirmation Time",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Bell,
    title: "Strong Notifications",
    desc: "Receive timely SMS reminders about your appointment and test results.",
    stat: "24/7",
    statLabel: "Support Available",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12 space-y-2">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
            Online Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Benefits of Booking Online
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Our digital appointment system is designed to give you the most seamless healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] flex flex-col gap-5"
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${b.bg}`}>
                  <Icon className={`h-6 w-6 ${b.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-900 text-[15px] mb-2">{b.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className={`text-2xl font-black ${b.color}`}>{b.stat}</span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{b.statLabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
