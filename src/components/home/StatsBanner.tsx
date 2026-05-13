import { Users, Microscope, Calendar, Award } from "lucide-react";

export function StatsBanner() {
  const stats = [
    { label: "Happy Patients", value: "10,000+", icon: Users },
    { label: "Lab Tests Done", value: "50,000+", icon: Microscope },
    { label: "Years Experience", value: "15+", icon: Calendar },
    { label: "Expert Doctors", value: "20+", icon: Award },
  ];

  return (
    <div className="bg-dark py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-primary mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight max-w-4xl mx-auto">
          Take the First Step Towards a <br /> Healthier Lifestyle Today
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Book your health checkup or diagnostic test online and experience professional healthcare at Kunta Devi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg shadow-2xl" asChild>
            <Link href="/appointment">Book Appointment Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-12 h-16 text-lg border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
