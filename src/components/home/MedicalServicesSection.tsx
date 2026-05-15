"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Container } from "../layout/container";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const services = [
  {
    id: "general-opd",
    title: "General OPD & Primary Care",
    description: "Our General OPD service matches your health needs to the right specialist for comprehensive care that you and your family deserve.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200",
    features: [
      "Expert primary care",
      "Specialist referral",
      "Chronic disease management",
      "Preventive screenings",
      "Vaccination services",
      "Personalized counseling"
    ]
  },
  {
    id: "maternal-care",
    title: "Maternal Health & Antenatal Care",
    description: "Comprehensive care for expectant mothers, ensuring a healthy pregnancy and a safe delivery with expert guidance every step of the way.",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1200",
    features: [
      "Prenatal checkups",
      "Ultrasound services",
      "Nutritional guidance",
      "Postnatal support",
      "High-risk pregnancy care",
      "Lactation consulting"
    ]
  },
  {
    id: "diagnostics",
    title: "Laboratory & Diagnostic Services",
    description: "State-of-the-art laboratory services with high precision and rapid reporting to aid in accurate diagnosis and effective treatment.",
    image: "https://images.unsplash.com/photo-1579154234431-da6781d706c1?q=80&w=1200",
    features: [
      "Blood tests",
      "Biochemistry",
      "Microbiology",
      "Imaging services",
      "Hormone profiles",
      "Home collection"
    ]
  },
  {
    id: "vaccination",
    title: "Vaccination & Immunization",
    description: "Protecting you and your loved ones from preventable diseases with a full range of vaccines for all age groups.",
    image: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?q=80&w=1200",
    features: [
      "Childhood vaccines",
      "Flu shots",
      "Travel immunizations",
      "Hepatitis screening",
      "Cervical cancer vaccine",
      "Corporate vaccination"
    ]
  }
];

export function MedicalServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16 space-y-3">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">All Medical Care</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Our Complete Medical Services</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-left transition-all group border-b border-slate-50 last:border-0",
                    activeTab === service.id 
                      ? "bg-primary text-white" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <span className="font-bold text-[15px]">{service.title}</span>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    activeTab === service.id ? "translate-x-1" : "text-slate-300 group-hover:translate-x-1"
                  )} />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white rounded-4xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Learn More
              </div>
            </div>

            <div className="p-8 md:p-12 flex-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-2xl">
                  {activeService.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Service Features</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button className="w-full sm:w-auto h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold px-8">
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full sm:w-auto h-12 rounded-xl border-slate-200 text-slate-700 font-bold px-8">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
