"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare, 
  Building, 
  Heart, 
  Activity, 
  UserCheck, 
  Users, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  BookOpen, 
  HelpCircle,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";
import { cn } from "@/lib/utils";

const PHONE_WHATSAPP = "+977-9801234567";

export default function PackagesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Filter states
  const [whoFor, setWhoFor] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [budget, setBudget] = useState("");

  const [filteredMessage, setFilteredMessage] = useState("");

  const handleFilterFind = () => {
    if (!whoFor && !ageGroup && !healthGoal && !budget) {
      setFilteredMessage("Please select at least one filter option above.");
      return;
    }
    setFilteredMessage(`Found matched packages matching your criteria. Showing default recommended options below.`);
    setTimeout(() => setFilteredMessage(""), 4000);
  };

  const comparisonFeatures = [
    "CBC Blood Count",
    "Blood Sugar Fasting",
    "Liver Function Tests",
    "Kidney Function Tests",
    "Lipid Profile",
    "ECG",
    "Chest X-Ray",
    "Thyroid (TSH)",
    "Doctor Consultation",
    "Diet Consultation"
  ];

  // Table grid mappings: [Basic, Standard, Comprehensive, Corporate]
  const comparisonData: Record<string, (boolean | string)[]> = {
    "CBC Blood Count":      [true, true, true, "Custom"],
    "Blood Sugar Fasting":  [true, true, true, "Custom"],
    "Liver Function Tests":  [false, true, true, "Custom"],
    "Kidney Function Tests": [false, true, true, "Custom"],
    "Lipid Profile":        [false, true, true, "Custom"],
    "ECG":                  [false, true, true, "Custom"],
    "Chest X-Ray":          [false, false, true, "Custom"],
    "Thyroid (TSH)":        [false, true, true, "Custom"],
    "Doctor Consultation":  [true, true, true, "Custom"],
    "Diet Consultation":    [false, false, true, "Custom"],
  };

  const healthNeeds = [
    {
      icon: "🩺",
      title: "Diabetes Screening",
      badge: "Standard Package",
      desc: "Complete glucose assessment including HbA1c and follow-up consultant review.",
      href: "/appointment"
    },
    {
      icon: "❤️",
      title: "Heart Health Check",
      badge: "Comprehensive Package",
      desc: "ECG, full lipid profile, and blood pressure screening to prevent cardiac risks.",
      href: "/appointment"
    },
    {
      icon: "👩",
      title: "Women's Wellness",
      badge: "Women's Care Package",
      desc: "Specialized diagnostics targeting bone density, thyroid, and gynecological wellness.",
      href: "/appointment"
    },
    {
      icon: "👴",
      title: "Senior Care Checkup",
      badge: "Senior Health Package",
      desc: "Advanced screening to maintain healthy aging, joint vitals, and vision tests.",
      href: "/appointment"
    },
    {
      icon: "💍",
      title: "Pre-Marriage Screening",
      badge: "Basic Health Package",
      desc: "Essential diagnostic profiles for couples planning their shared health journey.",
      href: "/appointment"
    },
    {
      icon: "🏢",
      title: "Corporate Screening",
      badge: "Executive Package",
      desc: "Integrated package design focused on employee stress management and daily vitals.",
      href: "/appointment"
    }
  ];

  const faqs = [
    {
      q: "Do I need fasting before checking up?",
      a: "Yes, for our Standard, Comprehensive, and Senior packages, an 8 to 12-hour fasting is highly recommended. You can drink pure water but avoid tea, coffee, food, or sodas."
    },
    {
      q: "How long does it take to complete a package?",
      a: "The Basic Health Check takes about 30 to 45 minutes. The Standard and Comprehensive packages generally take 1.5 to 3 hours, including specialist review."
    },
    {
      q: "Can I reschedule my package appointment?",
      a: "Absolutely. You can reschedule or modify your slot anytime up to 2 hours before your scheduled visit with zero cancellation charges."
    },
    {
      q: "Are diagnostic reports available on the same day?",
      a: "Yes! 95% of basic and standard laboratory report panels are processed on the same day and instantly delivered to you securely on WhatsApp and email."
    }
  ];

  return (
    <div className="bg-[#FAFDFD]">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 bg-linear-to-b from-[#F2FBFB] to-[#FAFDFD] overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0A7075]/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48"></div>
        
        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
            <span className="px-4 py-1.5 rounded-full bg-[#0A7075]/10 border border-[#0A7075]/20 text-[#0A7075] text-xs font-black tracking-[0.25em] uppercase">
              HEALTH PACKAGES
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Preventive Healthcare Packages <br className="hidden md:inline" />
              <span className="text-[#0A7075] relative inline-block">
                for Every Stage of Life
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0A7075]/15 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mt-2">
              Affordable, professionally designed health packages for individuals, families, seniors, and organizations.
            </p>

            <div className="h-1.5 w-24 bg-[#0A7075] rounded-full mt-2"></div>
          </div>
        </Container>
      </section>

      {/* 2. Filter Bar */}
      <section className="relative -mt-10 z-30 px-4">
        <Container>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(10,112,117,0.08)] border border-slate-100/60 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              
              {/* Dropdown 1: Who is it for? */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Who is it for?</label>
                <div className="relative">
                  <select 
                    value={whoFor} 
                    onChange={(e) => setWhoFor(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">Select Target</option>
                    <option value="Individual">Myself</option>
                    <option value="Family">My Family</option>
                    <option value="Senior">Senior Citizens</option>
                    <option value="Corporate">Corporate Employees</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 2: Age Group */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Age Group</label>
                <div className="relative">
                  <select 
                    value={ageGroup} 
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">Select Age</option>
                    <option value="Adult">Adult (18-50 Yrs)</option>
                    <option value="Senior">Senior (50+ Yrs)</option>
                    <option value="Child">Child (Under 18)</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 3: Health Goal */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Health Goal</label>
                <div className="relative">
                  <select 
                    value={healthGoal} 
                    onChange={(e) => setHealthGoal(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">Select Goal</option>
                    <option value="Preventive">General Prevention</option>
                    <option value="Diabetes">Diabetes Check</option>
                    <option value="Cardio">Cardiac Assessment</option>
                    <option value="Women">Women Care Vitals</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 4: Budget */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Budget</label>
                <div className="relative">
                  <select 
                    value={budget} 
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">Select Price</option>
                    <option value="Basic">Under NPR 3,000</option>
                    <option value="Medium">NPR 3,000 - 6,000</option>
                    <option value="Premium">NPR 6,000+</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleFilterFind}
                className="w-full h-12 bg-[#0A7075] hover:bg-primary-dark rounded-xl text-xs font-extrabold uppercase tracking-wider"
              >
                Find Package
              </Button>

            </div>

            {filteredMessage && (
              <p className="text-center text-xs font-extrabold text-[#0A7075] mt-4 animate-pulse">
                {filteredMessage}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Most Popular Packages */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              WELLNESS FIRST
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
              Most Popular Packages
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Carefully curated diagnostics designed to yield advanced clinical insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Card 1: Basic */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#0A7075]/20 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Budget Friendly</span>
                  <h3 className="text-lg font-black text-slate-900 mt-1">Basic Health Check</h3>
                  <p className="text-2xl font-black text-[#0A7075] mt-2">NPR 2,500</p>
                </div>

                <div className="h-px bg-slate-100"></div>

                <ul className="space-y-3">
                  {[
                    "CBC Blood Count",
                    "Blood Sugar Fasting",
                    "Urine Routine",
                    "Blood Pressure",
                    "BMI Assessment",
                    "Doctor Consultation"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-label font-bold text-slate-600">
                      <Check className="h-3.5 w-3.5 text-teal-600 stroke-[3px] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full h-11 rounded-xl border-[#0A7075] text-[#0A7075] hover:bg-[#0A7075] hover:text-white font-extrabold text-xs mt-8 transition-colors" asChild>
                <Link href="/appointment">Book Package</Link>
              </Button>
            </div>

            {/* Card 2: Standard */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#0A7075]/20 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Value</span>
                  <h3 className="text-lg font-black text-slate-900 mt-1">Standard Wellness</h3>
                  <p className="text-2xl font-black text-[#0A7075] mt-2">NPR 5,000</p>
                </div>

                <div className="h-px bg-slate-100"></div>

                <ul className="space-y-3">
                  {[
                    "All Basic Tests Included",
                    "Lipid Profile",
                    "Liver Function (LFT)",
                    "Kidney Function (KFT)",
                    "Thyroid (TSH)",
                    "ECG Test panel",
                    "Doctor Consultation"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-label font-bold text-slate-600">
                      <Check className="h-3.5 w-3.5 text-teal-600 stroke-[3px] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full h-11 rounded-xl border-[#0A7075] text-[#0A7075] hover:bg-[#0A7075] hover:text-white font-extrabold text-xs mt-8 transition-colors" asChild>
                <Link href="/appointment">Book Package</Link>
              </Button>
            </div>

            {/* Card 3: MOST RECOMMENDED (Teal highlighted) */}
            <div className="bg-[#0A7075] text-white rounded-3xl p-6 shadow-xl shadow-[#0A7075]/15 flex flex-col justify-between relative overflow-hidden ring-4 ring-[#0A7075]/10 transform lg:-translate-y-2">
              <div className="absolute top-0 right-0 bg-secondary text-teal-300 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                Most Recommended
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-teal-200 tracking-wider">15+ Tests Included</span>
                  <h3 className="text-lg font-black text-white mt-1">Comprehensive Checkup</h3>
                  <p className="text-2xl font-black text-teal-300 mt-2">NPR 8,500</p>
                </div>

                <div className="h-px bg-white/10"></div>

                <ul className="space-y-3">
                  {[
                    "All Standard Tests Included",
                    "Chest X-Ray assessment",
                    "Ultrasound Abdomen & Pelvis",
                    "Vitamin D & B12 screening",
                    "Comprehensive Eye Check",
                    "Free Follow-up consultation"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-label font-bold text-teal-100">
                      <Check className="h-3.5 w-3.5 text-teal-300 stroke-[3px] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full h-11 rounded-xl bg-white hover:bg-slate-50 text-[#0A7075] font-extrabold text-xs mt-8 transition-colors border-none shadow-md" asChild>
                <Link href="/appointment">Book Package</Link>
              </Button>
            </div>

            {/* Card 4: Executive Corporate */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">For Enterprises</span>
                  <h3 className="text-lg font-black text-white mt-1">Executive Corporate</h3>
                  <p className="text-2xl font-black text-teal-400 mt-2">Custom Pricing</p>
                </div>

                <div className="h-px bg-white/10"></div>

                <ul className="space-y-3">
                  {[
                    "Customized Corporate Test Panel",
                    "Instant secure digital reports",
                    "Flexible employee group scheduling",
                    "Centralized HR Vitals Dashboard",
                    "Priority panel processing",
                    "Dedicated account manager"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-label font-bold text-slate-300">
                      <Check className="h-3.5 w-3.5 text-teal-400 stroke-[3px] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full h-11 rounded-xl bg-[#0A7075] hover:bg-primary-dark text-white font-extrabold text-xs mt-8 transition-colors border-none" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100/60">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              SIDE BY SIDE
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">
              Compare Packages Side by Side
            </h2>
            <p className="text-xs text-slate-500 font-bold mt-1">Select the comprehensive diagnostic panel for complete clinical assurance.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] bg-white max-w-5xl mx-auto">
            <table className="w-full min-w-[750px] border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="text-left py-6 px-6">Health Feature</th>
                  <th className="text-center py-6 px-4">Basic<br /><span className="text-slate-400 font-bold text-[10px]">NPR 2,500</span></th>
                  <th className="text-center py-6 px-4">Standard<br /><span className="text-slate-400 font-bold text-[10px]">NPR 5,000</span></th>
                  <th className="text-center py-6 px-4 bg-[#0A7075] text-white relative">
                    Comprehensive<br />
                    <span className="text-teal-300 font-extrabold text-[10px]">NPR 8,500</span>
                  </th>
                  <th className="text-center py-6 px-4">Corporate<br /><span className="text-slate-400 font-bold text-[10px]">Custom</span></th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold text-slate-700 divide-y divide-slate-100">
                {comparisonFeatures.map((feat, idx) => {
                  const values = comparisonData[feat];
                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4.5 px-6 font-extrabold text-slate-900">{feat}</td>
                      
                      {/* Basic */}
                      <td className="py-4.5 px-4 text-center">
                        {values[0] === true ? (
                          <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3px] mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>

                      {/* Standard */}
                      <td className="py-4.5 px-4 text-center">
                        {values[1] === true ? (
                          <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3px] mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>

                      {/* Comprehensive Highlighted Column */}
                      <td className="py-4.5 px-4 text-center bg-[#0A7075]/5 relative font-black text-slate-900 border-x border-[#0A7075]/10">
                        {values[2] === true ? (
                          <Check className="h-5 w-5 text-[#0A7075] stroke-[3px] mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>

                      {/* Corporate */}
                      <td className="py-4.5 px-4 text-center text-[10px] text-teal-600 uppercase tracking-widest">
                        {values[3]}
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. Find by Health Need */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              CHOOSE BY HEALTH NEED
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Choose by Health Need
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Quickly locate specialized packages corresponding to your immediate clinical goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {healthNeeds.map((need, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{need.icon}</span>
                    <span className="text-[9px] font-black uppercase bg-[#0A7075]/10 border border-[#0A7075]/20 text-[#0A7075] px-2.5 py-1 rounded-full">
                      {need.badge}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-sm md:text-base group-hover:text-[#0A7075] transition-colors">
                      {need.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {need.desc}
                    </p>
                  </div>
                </div>

                <Link href={need.href} className="inline-flex items-center gap-1.5 text-xs font-black text-[#0A7075] hover:underline mt-6">
                  View Package <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Corporate Programs */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A7075]/10 rounded-full blur-3xl pointer-events-none -mr-64 -mt-64"></div>
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Illustration / Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full aspect-video md:aspect-square max-w-md rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
                  alt="Corporate diagnostic health meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-teal-400 font-black tracking-wider text-xs uppercase">
                  FOR HEALTH SOLUTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Corporate Health Screening Programs
                </h2>
                <p className="text-sm font-semibold text-slate-300 leading-relaxed max-w-xl">
                  Empower your workforce with clinical-grade health checks. We offer completely custom panel builds, dedicated coordinators, and secure aggregate digital health cards for your management.
                </p>
              </div>

              {/* Bullet points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Custom packages per company size",
                  "On-site clinic screening available",
                  "Group pricing & volume discounts",
                  "Priority digital report delivery",
                  "Dedicated wellness coordinator"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-extrabold text-slate-200">
                    <span className="h-5 w-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-teal-400 stroke-[3px]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats & Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-black text-teal-300">50+</p>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Trusted Partner Companies</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="h-12 px-6 rounded-xl bg-[#0A7075] hover:bg-primary-dark text-white border-none font-bold text-xs" asChild>
                    <Link href="/contact">Request Proposal</Link>
                  </Button>
                  <Button className="h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white border-none font-bold text-xs flex items-center gap-2" asChild>
                    <a href={`https://wa.me/${PHONE_WHATSAPP.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 7. Booking Process */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              HOW PACKAGE BOOKING WORKS
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              How Package Booking Works
            </h2>
            <p className="text-slate-500 font-medium">Four clear steps to finalize your wellness diagnostics</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-[#0A7075] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto shadow-lg shadow-[#0A7075]/10 group-hover:scale-115 transition-transform duration-300 border-4 border-white">
                1
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Choose Package</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">
                Browse our curated wellness tests and choose the best fit for your clinical concern.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-[#0A7075] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto shadow-lg shadow-[#0A7075]/10 group-hover:scale-115 transition-transform duration-300 border-4 border-white">
                2
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Book Appointment</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">
                Pick a slot online. Our reception confirms your exact timings within 30 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-[#0A7075] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto shadow-lg shadow-[#0A7075]/10 group-hover:scale-115 transition-transform duration-300 border-4 border-white">
                3
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Visit the Clinic</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">
                Walk into Ghattekulo for sample collection with friendly clinical support.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-[#0A7075] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto shadow-lg shadow-[#0A7075]/10 group-hover:scale-115 transition-transform duration-300 border-4 border-white">
                4
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Receive Reports</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">
                Download verified high-fidelity digital reports via WhatsApp on the same day.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 8. Patient Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              WHAT OUR PATIENTS SAY
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              What Our Patients Say
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Verified patient feedback regarding our diagnostic laboratory</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((idx) => (
              <Card key={idx} className="border border-slate-100 rounded-3xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">
                <CardContent className="p-0 space-y-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-slate-500 leading-relaxed italic">
                    "I had my Full Body checkup completed at Kunta Devi. The entire process was exceptionally efficient, highly supportive, and my reports came within 3 hours. Will consult again!"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                    <div className="h-10 w-10 bg-teal-50 text-[#0A7075] rounded-full flex items-center justify-center font-black text-sm">
                      SK
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs md:text-sm">Sunita Karki</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FAQ Accordion */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100/60">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
                FAQ
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">
                Common Questions About Our Package
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">Get details regarding schedules, fasting, and reports delivery.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={cn(
                      "border border-slate-100/80 rounded-2xl overflow-hidden bg-white transition-all duration-300",
                      isOpen ? "shadow-[0_4px_25px_rgba(0,0,0,0.03)] border-teal-100/80 bg-teal-50/10" : ""
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug">{item.q}</span>
                      <span className={cn(
                        "h-6 w-6 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 transition-all duration-300 shrink-0 ml-4",
                        isOpen ? "bg-[#0A7075] border-[#0A7075] text-white rotate-180" : ""
                      )}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out bg-white",
                      isOpen ? "max-h-[300px] opacity-100 border-t border-slate-100/60" : "max-h-0 opacity-0 pointer-events-none"
                    )}>
                      <div className="px-6 py-5 text-slate-500 font-semibold text-xs md:text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* 10. Footer CTA Banner */}
      <section className="py-12 bg-white pb-20">
        <Container>
          <div className="bg-linear-to-r from-[#0A7075] to-secondary rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-32 -mb-32"></div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Take Control of Your Health Today
              </h2>
              <p className="text-xs md:text-sm text-white/80 font-semibold leading-relaxed">
                Unlock early medical diagnostic insights and stay ahead. Book a checkup for yourself or message us instantly.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button className="h-12 px-8 rounded-xl bg-white hover:bg-slate-50 text-[#0A7075] font-extrabold border-none shadow-md" asChild>
                  <Link href="/appointment">Book Package</Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-xl border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50" asChild>
                  <a href={`https://wa.me/${PHONE_WHATSAPP.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="h-4.5 w-4.5" /> WhatsApp Us
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
