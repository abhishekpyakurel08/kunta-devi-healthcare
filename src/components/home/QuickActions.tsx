import Link from "next/link";
import { User, Calendar, Stethoscope, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";

export function QuickActions() {
  const actions = [
    {
      icon: User,
      title: "Find a Doctor",
      desc: "Search by specialty",
      href: "/doctors",
      color: "bg-primary",
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      desc: "Schedule your visit",
      href: "/appointment",
      color: "bg-emerald-500",
    },
    {
      icon: Stethoscope,
      title: "Our Services",
      desc: "What we offer",
      href: "/services",
      color: "bg-blue-500",
    },
    {
      icon: PhoneCall,
      title: "Emergency Contact",
      desc: clinicInfo.emergencyPhone,
      href: `tel:${clinicInfo.emergencyPhone}`,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="relative z-20 -mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <Link 
              key={i} 
              href={action.href}
              className="group bg-white p-8 rounded-4xl shadow-xl shadow-dark/5 border border-border/50 flex items-center gap-6 hover:translate-y-[-5px] transition-all duration-300 hover:shadow-2xl hover:border-primary/20"
            >
              <div className={`h-16 w-16 rounded-2xl ${action.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <action.icon className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-dark group-hover:text-primary transition-colors">{action.title}</h3>
                <p className="text-sm text-muted font-medium">{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
