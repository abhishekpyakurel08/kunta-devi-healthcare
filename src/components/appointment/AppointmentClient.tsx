"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Mail, 
  Clock, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  User, 
  ShieldAlert, 
  AlertCircle, 
  UserCheck, 
  Activity, 
  Stethoscope, 
  HelpCircle,
  HelpCircle as QuestionIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { clinicInfo } from "@/data/site-config";
import { cn } from "@/lib/utils";

// Kathmandu Quick Numbers
const PHONE_RECEPTION = "+977-01-4412345";
const PHONE_WHATSAPP = "+977-9801234567";
const PHONE_EMERGENCY = "+977-9812345678";

// Schema for detailed consultation booking
const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "A valid 10-digit phone number is required"),
  serviceDept: z.string().min(1, "Please choose a service department"),
  preferredDoctor: z.string().optional(),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select preferred time slot"),
  patientType: z.string().min(1, "Please select patient type"),
  urgencyLevel: z.string().min(1, "Please choose urgency level"),
  concern: z.string().min(5, "Please briefly describe your symptoms or concern"),
  agree: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted by Kunta Devi Health Care",
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function AppointmentClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      preferredDoctor: "Doctor — Any Doctor",
      preferredTime: "Morning",
      patientType: "Self",
      urgencyLevel: "Normal",
    }
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate server side submission
    console.log("Appointment Request Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
  };

  const bookingFaqs = [
    {
      question: "How soon will I receive confirmation?",
      answer: "For requests submitted during our clinic hours (Sunday - Friday: 7:00 AM - 7:00 PM), our booking team will reach out to confirm your exact timing within 30 minutes. Requests sent after-hours are prioritized first thing next morning."
    },
    {
      question: "Can I change my appointment?",
      answer: "Absolutely. You can modify, reschedule, or cancel your appointment free of charge up to 2 hours before your scheduled time. Simply call our desk directly or send us a message on WhatsApp."
    },
    {
      question: "Can I book for my parents?",
      answer: "Yes, you can easily book consultations for your family, parents, or children. In the 'Patient Type' dropdown, select 'Family' or 'Child' and write their details in the concern box."
    },
    {
      question: "Can I choose a female doctor?",
      answer: "Yes, we have highly qualified male and female general physicians and specialists on staff. You can view doctors' schedules and choose your preferred doctor directly in the dropdown."
    },
    {
      question: "Are walk-ins accepted?",
      answer: "Yes, walk-ins are highly welcome for General OPD and basic diagnostic services. However, priority is given to patients with confirmed pre-booked slots to maintain a zero-queue experience."
    }
  ];

  return (
    <div className="bg-[#FAFDFD]">
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-b from-[#F2FBFB] to-[#FAFDFD] border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A7075]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
            <span className="px-4 py-1.5 rounded-full bg-[#0A7075]/10 border border-[#0A7075]/20 text-[#0A7075] text-xs font-black tracking-[0.25em] uppercase animate-pulse">
              BOOK APPOINTMENT
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Schedule Your Visit <br className="hidden md:inline" />
              <span className="text-[#0A7075] relative inline-block">
                with Confidence
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0A7075]/15 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mt-2">
              Book a consultation, request a service, ask a question, or speak with our healthcare team — all in one place.
            </p>

            <div className="h-1.5 w-24 bg-linear-to-r from-[#0A7075] to-secondary rounded-full mt-4"></div>
          </div>
        </Container>
      </section>

      {/* 2. Two-Column Booking Section */}
      <section className="py-20 relative z-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column — Why Patients Choose Kunta Devi */}
            <div className="lg:col-span-5 bg-secondary text-white p-8 md:p-12 rounded-4xl shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0A7075]/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <span className="text-teal-400 font-black tracking-wider text-xs uppercase">BENEFITS</span>
                  <h2 className="text-2xl md:text-3xl font-black mt-2 mb-4 leading-tight">
                    Why Patients Choose <br />
                    Kunta Devi Health Care
                  </h2>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    We deliver advanced clinical precision and high-fidelity care within a supportive environment.
                  </p>
                </div>

                {/* 6 Bullet points */}
                <ul className="space-y-4">
                  {[
                    "Fast appointment confirmation within 30 minutes",
                    "Experienced clinical specialists available daily",
                    "Flexible morning to evening consulting times",
                    "Dedicated WhatsApp support open 24/7",
                    "Highly affordable and clear consultation fees",
                    "Same-day test assessments & services available"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-200">
                      <span className="h-5 w-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-teal-400 stroke-[3px]" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* 4 Stat Blocks in 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-2xl md:text-3xl font-black text-teal-300">20+</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Specialties</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-2xl md:text-3xl font-black text-teal-300">5000+</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Patients Served</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-2xl md:text-3xl font-black text-teal-300">10+</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Years of Trust</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-2xl md:text-3xl font-black text-teal-300">24/7</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Response Rate</p>
                  </div>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <p className="text-xs text-rose-300 font-bold mb-3 flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Need urgent help? Contact our emergency desk.
                </p>
                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs py-5 border-none font-bold shadow-md shadow-rose-900/20" asChild>
                  <a href={`tel:${PHONE_EMERGENCY}`}>Call Emergency Now</a>
                </Button>
              </div>
            </div>

            {/* Right Column — Book Your Appointment Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <Card className="border-none shadow-2xl rounded-4xl bg-white overflow-hidden p-8 md:p-12 text-center flex flex-col items-center justify-center gap-6 py-20">
                  <div className="h-16 w-16 bg-teal-50 rounded-full flex items-center justify-center text-[#0A7075] animate-bounce">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Request Received!</h3>
                  <p className="text-sm text-slate-500 font-bold max-w-md leading-relaxed">
                    Thank you for booking with Kunta Devi Health Care. Our scheduling desk will review your timing details and contact you via phone within 30 minutes to confirm your slot.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-[#0A7075] hover:bg-primary-dark rounded-xl px-8 py-4 h-auto font-bold"
                  >
                    Submit Another Booking
                  </Button>
                </Card>
              ) : (
                <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-4xl bg-white overflow-hidden">
                  <CardContent className="p-6 md:p-10">
                    <div className="mb-8">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">Book Your Appointment</h3>
                      <p className="text-xs font-bold text-slate-500">Fill in the fields below. Required values are marked with (*)</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      {/* Grid Inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* 1. Full Name */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-[#0A7075]" /> Full Name *
                          </label>
                          <input
                            {...register("fullName")}
                            type="text"
                            placeholder="Full name of patient"
                            className={cn(
                              "w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30",
                              errors.fullName && "border-rose-400 focus:ring-rose-500/20"
                            )}
                          />
                          {errors.fullName && (
                            <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        {/* 2. Phone Number */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5 text-[#0A7075]" /> Phone Number *
                          </label>
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+977-98XXXXXXXX"
                            className={cn(
                              "w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30",
                              errors.phone && "border-rose-400 focus:ring-rose-500/20"
                            )}
                          />
                          {errors.phone && (
                            <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors.phone.message}
                            </p>
                          )}
                        </div>

                        {/* 3. Select Service Department */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <Activity className="h-3.5 w-3.5 text-[#0A7075]" /> Select Service *
                          </label>
                          <select
                            {...register("serviceDept")}
                            className={cn(
                              "w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30 appearance-none",
                              errors.serviceDept && "border-rose-400 focus:ring-rose-500/20"
                            )}
                          >
                            <option value="">Choose service dept</option>
                            {services.map((s) => (
                              <option key={s.id} value={s.name}>{s.name}</option>
                            ))}
                          </select>
                          {errors.serviceDept && (
                            <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors.serviceDept.message}
                            </p>
                          )}
                        </div>

                        {/* 4. Preferred Doctor */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <Stethoscope className="h-3.5 w-3.5 text-[#0A7075]" /> Preferred Doctor
                          </label>
                          <select
                            {...register("preferredDoctor")}
                            className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30 appearance-none"
                          >
                            <option value="Doctor — Any Doctor">Doctor — Any Doctor</option>
                            {doctors.map((d) => (
                              <option key={d.id} value={d.name}>{d.name} ({d.specialty})</option>
                            ))}
                          </select>
                        </div>

                        {/* 5. Preferred Date */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-[#0A7075]" /> Preferred Date *
                          </label>
                          <input
                            {...register("preferredDate")}
                            type="date"
                            className={cn(
                              "w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30",
                              errors.preferredDate && "border-rose-400 focus:ring-rose-500/20"
                            )}
                          />
                          {errors.preferredDate && (
                            <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> {errors.preferredDate.message}
                            </p>
                          )}
                        </div>

                        {/* 6. Preferred Time */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-[#0A7075]" /> Preferred Time
                          </label>
                          <select
                            {...register("preferredTime")}
                            className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30 appearance-none"
                          >
                            <option value="Morning">Morning (7:00 AM – 12:00 PM)</option>
                            <option value="Afternoon">Afternoon (12:00 PM – 7:00 PM)</option>
                          </select>
                        </div>

                        {/* 7. Patient Type */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-[#0A7075]" /> Patient Type
                          </label>
                          <select
                            {...register("patientType")}
                            className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30 appearance-none"
                          >
                            <option value="Self">Self Booking</option>
                            <option value="Family">Family Member</option>
                            <option value="Child">Child (Under 18)</option>
                          </select>
                        </div>

                        {/* 8. Urgency Level */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                            <AlertCircle className="h-3.5 w-3.5 text-[#0A7075]" /> Urgency Level
                          </label>
                          <select
                            {...register("urgencyLevel")}
                            className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30 appearance-none"
                          >
                            <option value="Normal">Normal Checkup</option>
                            <option value="Priority">Priority Consult</option>
                            <option value="Urgent">Urgent Assistance</option>
                          </select>
                        </div>

                      </div>

                      {/* 9. Describe Symptoms */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">
                          Describe Your Concern *
                        </label>
                        <textarea
                          {...register("concern")}
                          rows={4}
                          placeholder="Tell us about your symptoms or request..."
                          className={cn(
                            "w-full rounded-xl border border-slate-200 p-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 focus:border-[#0A7075] transition-all bg-slate-50/30",
                            errors.concern && "border-rose-400 focus:ring-rose-500/20"
                          )}
                        />
                        {errors.concern && (
                          <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.concern.message}
                          </p>
                        )}
                      </div>

                      {/* 10. Checkbox */}
                      <div className="space-y-1.5">
                        <label className="flex items-start gap-3 cursor-pointer text-slate-600">
                          <input
                            {...register("agree")}
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-[#0A7075] focus:ring-[#0A7075] mt-0.5 cursor-pointer shrink-0"
                          />
                          <span className="text-label font-semibold leading-normal">
                            I agree to be contacted by Kunta Devi Health Care representatives for appointment details, clinic information, and health services confirmation. *
                          </span>
                        </label>
                        {errors.agree && (
                          <p className="text-[10px] text-rose-500 font-extrabold flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.agree.message}
                          </p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-xl bg-[#0A7075] hover:bg-primary-dark text-white font-extrabold text-sm shadow-xl shadow-[#0A7075]/15 mt-4 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Processing..." : (
                          <>
                            Request Appointment <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* 3. Faster Options — "Need Faster Assistance?" */}
      <section className="py-16 bg-white border-y border-slate-100">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              FASTER OPTIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
              Need Faster Assistance?
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">Bypass form processing and contact our desks directly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: WhatsApp Booking */}
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1.5">WhatsApp Booking</h3>
                <p className="text-xs text-slate-500 font-semibold mb-6">Message us for instant appointment booking</p>
              </div>
              <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700 font-extrabold flex items-center gap-1.5 justify-start text-xs h-auto w-auto" asChild>
                <a href={`https://wa.me/${PHONE_WHATSAPP.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                  Open WhatsApp <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </Button>
            </div>

            {/* Card 2: Call Reception */}
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div>
                <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#0A7075] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1.5">Call Reception</h3>
                <p className="text-xs text-slate-500 font-semibold mb-6">Speak to our team directly</p>
              </div>
              <Button variant="link" className="p-0 text-[#0A7075] hover:text-primary-dark font-extrabold flex items-center gap-1.5 justify-start text-xs h-auto w-auto" asChild>
                <a href={`tel:${PHONE_RECEPTION}`}>
                  Call Now <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </Button>
            </div>

            {/* Card 3: Corporate Inquiry (highlighted) */}
            <div className="bg-secondary text-white p-8 rounded-3xl flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div>
                <div className="h-10 w-10 rounded-xl bg-white/10 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-white text-sm mb-1.5">Corporate Inquiry</h3>
                <p className="text-xs text-white/70 font-semibold mb-6">Employee wellness packages</p>
              </div>
              <Button variant="link" className="p-0 text-teal-400 hover:text-teal-300 font-extrabold flex items-center gap-1.5 justify-start text-xs h-auto w-auto" asChild>
                <Link href="/contact">
                  Inquire Now <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </Button>
            </div>

            {/* Card 4: Product Inquiry (orange accent) */}
            <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-3xl flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-amber-900 text-sm mb-1.5">Product Inquiry</h3>
                <p className="text-xs text-amber-700 font-semibold mb-6">Ask about healthcare products</p>
              </div>
              <Button variant="link" className="p-0 text-amber-600 hover:text-amber-700 font-extrabold flex items-center gap-1.5 justify-start text-xs h-auto w-auto" asChild>
                <Link href="/products">
                  Ask Us <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Process Steps — "How Package Booking Works" */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              SIMPLE PROCESS
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              How Package Booking Works
            </h2>
            <p className="text-slate-500 font-medium">Four basic steps to configure your personal healthcare consultation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-[#0A7075] text-white flex items-center justify-center font-black text-lg">
                  1
                </span>
                <span className="h-[2px] bg-slate-200 flex-1 hidden lg:block"></span>
              </div>
              <h3 className="text-base font-black text-slate-900 mt-2">Submit Request</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Fill the simple scheduling form or message us directly on WhatsApp with your request details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-[#0A7075] text-white flex items-center justify-center font-black text-lg">
                  2
                </span>
                <span className="h-[2px] bg-slate-200 flex-1 hidden lg:block"></span>
              </div>
              <h3 className="text-base font-black text-slate-900 mt-2">Team Confirms</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Our front desk reception team contacts you to verify and confirm your exact slot within 30 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-[#0A7075] text-white flex items-center justify-center font-black text-lg">
                  3
                </span>
                <span className="h-[2px] bg-slate-200 flex-1 hidden lg:block"></span>
              </div>
              <h3 className="text-base font-black text-slate-900 mt-2">Visit the Clinic</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Arrive at our facility in Ghattekulo with any previous diagnostic reports or health documents.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-[#0A7075] text-white flex items-center justify-center font-black text-lg">
                  4
                </span>
              </div>
              <h3 className="text-base font-black text-slate-900 mt-2">Receive Reports</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Meet your specialist doctor, receive detailed assessment, and download your final reports.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. Online Benefits — "Benefits of Booking Online" */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              ONLINE BENEFITS
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Benefits of Booking Online
            </h2>
            <p className="text-slate-500 font-medium">Skip the queue, choose your doctor and schedule timing with complete autonomy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1">
              <h4 className="font-extrabold text-[#0A7075] text-xs uppercase tracking-wider mb-2">No Queue Waiting</h4>
              <p className="text-2xl font-black text-slate-900 mb-4">70% Less Wait</p>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Pre-registered bookings skip general registration desks entirely, saving significant time.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#0A7075] text-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(10,112,117,0.15)]">
              <h4 className="font-extrabold text-teal-300 text-xs uppercase tracking-wider mb-2">Choose Your Doctor</h4>
              <p className="text-2xl font-black mb-4">20+ Specialists</p>
              <p className="text-xs text-white/80 font-bold leading-relaxed">
                Filter and configure your consultation with specific specialist practitioners in Kathmandu.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-secondary text-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(13,33,55,0.15)]">
              <h4 className="font-extrabold text-teal-400 text-xs uppercase tracking-wider mb-2">Flexible Scheduling</h4>
              <p className="text-2xl font-black mb-4">12-Hour Slots</p>
              <p className="text-xs text-white/80 font-bold leading-relaxed">
                Select your preferred consultation period from 7:00 AM in the morning up to 7:00 PM in the evening.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1">
              <h4 className="font-extrabold text-[#0A7075] text-xs uppercase tracking-wider mb-2">Priority Reminders</h4>
              <p className="text-2xl font-black text-slate-900 mb-4">24/7 Support</p>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Receive rapid confirmation reminders and tracking alerts via WhatsApp or email.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. FAQ — "Common Questions About Our Service" */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Common Questions About Our Service
              </h2>
              <p className="text-slate-500 font-medium">
                Find answers regarding appointment bookings, rescheduling, and schedules.
              </p>
            </div>

            <div className="space-y-4">
              {bookingFaqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div 
                    key={i} 
                    className={cn(
                      "border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300",
                      isOpen ? "shadow-[0_4px_25px_rgba(0,0,0,0.03)] border-teal-100/80 bg-teal-50/10" : "hover:bg-slate-50/50"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-extrabold text-slate-800 text-sm md:text-base leading-snug">{faq.question}</span>
                      <span className={cn(
                        "h-6 w-6 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 transition-all duration-300 shrink-0 ml-4",
                        isOpen ? "bg-[#0A7075] border-[#0A7075] text-white rotate-180" : ""
                      )}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-[300px] opacity-100 border-t border-slate-100/60" : "max-h-0 opacity-0 pointer-events-none"
                    )}>
                      <div className="px-6 py-5 text-slate-500 font-semibold text-xs md:text-sm leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Emergency Banner (light pink/red bg) */}
      <section className="py-8 bg-white">
        <Container>
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-100/40 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
              <div className="h-14 w-14 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                <ShieldAlert className="h-8 w-8 animate-pulse" />
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-rose-200/50 text-[10px] font-black text-rose-800 uppercase tracking-widest px-3 py-1 rounded-full">
                  Medical Emergency?
                </span>
                <p className="text-sm font-bold text-rose-950 max-w-xl">
                  Our rapid response team is available 24/7 to handle critical care.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10 justify-center">
              <Button className="h-12 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white border-none font-bold" asChild>
                <a href={`tel:${PHONE_EMERGENCY}`}>Call Now</a>
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-rose-200 text-rose-700 bg-white hover:bg-rose-100/40" asChild>
                <a href="https://maps.google.com/?q=Ghattekulo,Kathmandu,Nepal" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Location Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Map Embed */}
            <div className="lg:col-span-6 flex flex-col h-full min-h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] bg-slate-50 relative group">
              <iframe
                title="Kunta Devi Health Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4567!2d85.3289!3d27.7012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a2e379471f%3A0x63ebef4cf7e7216a!2sGhattekulo%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                className="w-full h-full border-none absolute inset-0 grayscale-10 contrast-110 transition-all duration-700 group-hover:grayscale-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:pl-6">
              <div className="space-y-3">
                <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
                  VISIT US TODAY
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Reach Out In Person
                </h2>
                <p className="text-slate-500 font-medium">
                  We are conveniently located at Ghattekulo, providing easily accessible diagnostics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0A7075] shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">Address</h4>
                    <p className="text-xs font-bold text-slate-500 leading-normal">
                      Ghatekulo, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0A7075] shrink-0 mt-0.5 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">Phone</h4>
                    <p className="text-xs font-bold text-slate-500 leading-normal">
                      +977-01-4412345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0A7075] shrink-0 mt-0.5 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">Email</h4>
                    <p className="text-xs font-bold text-slate-500 leading-normal">
                      info@kuntadevi.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0A7075] shrink-0 mt-0.5 shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">Hours</h4>
                    <p className="text-xs font-bold text-slate-500 leading-normal">
                      Sunday – Friday: 7:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <Button variant="outline" className="h-12 px-6 rounded-xl border-[#0A7075] text-[#0A7075] hover:bg-primary-light" asChild>
                  <a href="https://maps.google.com/?q=Ghattekulo,Kathmandu,Nepal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Get Direction <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button className="h-12 px-6 rounded-xl bg-[#0A7075] hover:bg-primary-dark" asChild>
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Footer CTA Banner */}
      <section className="py-12 bg-white pb-20">
        <Container>
          <div className="bg-linear-to-r from-[#0A7075] to-secondary rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-32 -mb-32"></div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Your Health Shouldn&apos;t Wait
              </h2>
              <p className="text-sm md:text-base text-white/80 font-semibold leading-relaxed">
                Join thousands of families who trust Kunta Devi Health Care for precision diagnostics and medical consultations in Kathmandu.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button className="h-12 px-8 rounded-xl bg-white hover:bg-slate-50 text-[#0A7075] font-extrabold border-none shadow-md" asChild>
                  <Link href="/appointment">Book Package</Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-xl border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50" asChild>
                  <a href={`https://wa.me/${PHONE_WHATSAPP.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="h-4.5 w-4.5" /> WhatsApp us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
