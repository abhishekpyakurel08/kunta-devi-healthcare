import Link from "next/link";
import { MessageCircle, Phone, FileSearch, ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";

const actions = [
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    desc: "Chat with our team instantly on WhatsApp to book your slot or ask questions.",
    label: "Chat Now",
    href: `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`,
    external: true,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Phone,
    title: "For Helpline",
    desc: "Speak directly with our medical coordinator for immediate assistance.",
    label: "Call Now",
    href: `tel:${clinicInfo.phone}`,
    external: false,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/10",
  },
  {
    icon: FileSearch,
    title: "Document Inquiry",
    desc: "Ask about your lab reports, prescriptions, or any medical document.",
    label: "Inquire Now",
    href: "/contact",
    external: false,
    color: "text-white",
    bg: "bg-slate-800",
    border: "border-slate-700",
    dark: true,
  },
  {
    icon: ShoppingBag,
    title: "Product Inquiry",
    desc: "Browse our pharmacy products or ask about availability and pricing.",
    label: "Ask Now",
    href: "/products",
    external: false,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export function QuickAssistSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-10 space-y-2">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
            Fast Support
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Need Faster Assistance?
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Choose your preferred way to reach us — we&apos;re here to help right away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, i) => {
            const Icon = action.icon;
            const cardCls = action.dark
              ? "bg-slate-800 border border-slate-700 rounded-3xl p-6 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300 shadow-xl"
              : "bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md";

            return (
              <div key={i} className={cardCls}>
                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center ${action.dark ? "bg-white/10" : action.bg}`}
                >
                  <Icon
                    className={`h-6 w-6 ${action.dark ? "text-white" : action.color}`}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-black text-[15px] mb-1 ${action.dark ? "text-white" : "text-slate-900"}`}
                  >
                    {action.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${action.dark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {action.desc}
                  </p>
                </div>
                <Link
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center h-9 px-5 rounded-xl text-xs font-bold transition-all ${
                    action.dark
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : `${action.bg} ${action.dark ? "text-white" : action.color} hover:opacity-80`
                  }`}
                >
                  {action.label}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
