import Link from "next/link";
import { User, Calendar, ShoppingBag, Siren } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function QuickActions() {
  const actions = [
    {
      title: "Find a Doctor",
      desc: "Browse our expert specialists",
      icon: User,
      href: "/doctors",
      color: "teal",
    },
    {
      title: "Book Appointment",
      desc: "Schedule your visit instantly",
      icon: Calendar,
      href: "/appointment",
      color: "teal",
    },
    {
      title: "View Products",
      desc: "Medical supplies & equipment",
      icon: ShoppingBag,
      href: "/products",
      color: "teal",
    },
    {
      title: "Emergency Contact",
      desc: "+9779860167326 · Available 24/7",
      icon: Siren,
      href: "tel:+97701XXXXXXX",
      color: "red",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {actions.map((action, i) => (
            <Link
              key={i}
              href={action.href}
              className={cn(
                "group bg-white p-6 rounded-4xl border flex flex-row items-center gap-5 transition-all duration-500 hover:translate-y-[-8px] shadow-xl shadow-slate-200/50",
                action.color === "red"
                  ? "border-red-100 hover:border-red-300"
                  : "border-slate-50 hover:border-primary/20"
              )}
            >
              <div className={cn(
                "h-14 w-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                action.color === "red" ? "bg-red-50 text-red-500" : "bg-emerald-50 text-primary"
              )}>
                <action.icon className="h-7 w-7" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-lg font-black text-slate-800 leading-tight">{action.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
