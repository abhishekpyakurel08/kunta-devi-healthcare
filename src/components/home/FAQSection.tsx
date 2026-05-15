"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../layout/container";
import { cn } from "../../lib/utils";

const faqs = [
  {
    question: "What are your business hours?",
    answer: "We are open from 8:00 AM to 8:00 PM, Sunday through Friday. Saturday hours are 9:00 AM to 2:00 PM for emergency consultations and lab services."
  },
  {
    question: "Do I need an appointment for OPD?",
    answer: "While walk-ins are welcome, we recommend booking an appointment to minimize your wait time and ensure the availability of your preferred specialist."
  },
  {
    question: "Are your lab reports reliable?",
    answer: "Yes, our laboratory is equipped with state-of-the-art diagnostic tools and is staffed by certified pathologists. We follow strict quality control protocols to ensure accurate results."
  },
  {
    question: "Do you provide home collection services?",
    answer: "Yes, we offer home collection for blood tests within a 5km radius of our facility. Please call us at least 2 hours in advance to schedule a collection."
  },
  {
    question: "What insurance providers do you accept?",
    answer: "We accept most major health insurance providers in Nepal. Please contact our front desk with your policy details to verify coverage before your visit."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Clear your doubt</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Common Questions About Our Service</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={cn(
                  "border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300",
                  openIndex === i ? "shadow-md ring-1 ring-primary/10" : "hover:bg-slate-50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-slate-700">{faq.question}</span>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                    openIndex === i ? "rotate-180 text-primary" : ""
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
