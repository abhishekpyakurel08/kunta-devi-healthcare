"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200",
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
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="services">
      <Container>
        <div className="text-center mb-12 lg:mb-16 space-y-3 lg:space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">All Medical Care</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Our Complete Medical Services</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">Providing a comprehensive range of premium healthcare services tailored for you and your family.</p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="w-full relative z-10">
            <div className="bg-white border border-slate-100 rounded-4xl overflow-hidden shadow-sm flex flex-row lg:flex-col overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={(e) => {
                    setActiveTab(service.id);
                    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                  }}
                  className={cn(
                    "min-w-[180px] sm:min-w-[220px] lg:min-w-0 lg:w-full flex items-center justify-between p-4 sm:p-5 text-left transition-all group border-r lg:border-r-0 lg:border-b border-slate-100 last:border-0 shrink-0 snap-start",
                    activeTab === service.id 
                      ? "bg-primary text-white" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <span className="font-bold text-[13px] sm:text-[15px]">{service.title}</span>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform hidden sm:block",
                    activeTab === service.id ? "translate-x-1" : "text-slate-300 group-hover:translate-x-1"
                  )} />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-4xl lg:rounded-5xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[400px]">
            <div className="w-full md:w-2/5 relative h-64 sm:h-72 md:h-auto shrink-0">
              <Image 
                src={activeService.image} 
                alt={activeService.title} 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                Learn More
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Service Features</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px] sm:text-sm font-bold text-slate-600">
                      <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="leading-tight pt-0.5">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button className="w-full sm:w-auto h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold px-6 sm:px-8 transition-transform hover:scale-[1.02]" asChild>
                   <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto h-12 rounded-xl border-slate-200 text-slate-700 font-bold px-6 sm:px-8 hover:bg-slate-50 transition-transform hover:scale-[1.02]" asChild>
                   <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
