"use client";

import { Pill, Heart, Wind, Brain, Zap, ShieldCheck, Activity, Stethoscope } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface ShopByNeedProps {
  onCategorySelect: (category: string) => void;
}

export function ShopByNeed({ onCategorySelect }: ShopByNeedProps) {
  const needs = [
    { title: "Medicine Care", icon: Pill, color: "text-emerald-500", bg: "bg-emerald-50", category: "Pharma" },
    { title: "Heart Health", icon: Heart, color: "text-red-500", bg: "bg-red-50", category: "Monitoring" },
    { title: "Respiratory Care", icon: Wind, color: "text-sky-500", bg: "bg-sky-50", category: "Wellness" },
    { title: "Multivitamins", icon: Zap, color: "text-amber-500", bg: "bg-amber-50", category: "Pharma" },
    { title: "Dental Care", icon: ShieldCheck, color: "text-teal-500", bg: "bg-teal-50", category: "Wellness" },
    { title: "Mental Wellness", icon: Brain, color: "text-purple-500", bg: "bg-purple-50", category: "Wellness" },
    { title: "First Aid", icon: Activity, color: "text-rose-500", bg: "bg-rose-50", category: "Wellness" },
    { title: "Home Monitoring", icon: Stethoscope, color: "text-indigo-500", bg: "bg-indigo-50", category: "Monitoring" },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Categories</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Shop by Health Need</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {needs.map((need, i) => (
            <div 
              key={i} 
              onClick={() => onCategorySelect(need.category)}
              className="group p-8 rounded-4xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center space-y-6 cursor-pointer"
            >
              <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:rotate-6", need.bg)}>
                <need.icon className={cn("h-8 w-8", need.color)} />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-slate-800 tracking-tight">{need.title}</h3>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Shop Now →</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
