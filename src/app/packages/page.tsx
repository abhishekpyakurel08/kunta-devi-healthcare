"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, X, Star, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const filters = ["All Packages", "Individual", "Family", "Corporate", "Senior"];

const packages = [
  {
    id: "own-health",
    badge: null,
    title: "Own Health Check",
    subtitle: "Basic",
    price: "NPR 2,500",
    desc: "Essential screenings for a quick overview of your health status.",
    features: [
      "CBC (Complete Blood Count)",
      "Blood Sugar (Fasting)",
      "Urine Routine",
      "Physical Examination",
      "General Consultation",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "general-wellness",
    badge: "Popular",
    title: "General Wellness",
    subtitle: "Standard",
    price: "NPR 5,900",
    desc: "Comprehensive screening for adults who want a thorough health overview.",
    features: [
      "All Basic Check tests",
      "Lipid Profile",
      "Liver Function (LFT)",
      "Thyroid (T3, T4, TSH)",
      "ECG",
      "Doctor Consultation",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "comprehensive",
    badge: "Most Popular",
    title: "Comprehensive Choice",
    subtitle: "Premium",
    price: "NPR 8,500",
    desc: "Full head-to-toe assessment with specialist consultation included.",
    features: [
      "All Wellness tests",
      "Chest X-Ray",
      "USG Abdomen & Pelvis",
      "Kidney Function",
      "HbA1c (Diabetes)",
      "Specialist Consultation",
      "Diet & Nutrition Advice",
    ],
    highlighted: true,
    cta: "Book Now",
  },
  {
    id: "executive",
    badge: null,
    title: "Executive Screene",
    subtitle: "Executive",
    price: "Contact",
    desc: "Tailored corporate executive health package with priority service.",
    features: [
      "All Comprehensive tests",
      "Cardiac Profile",
      "Echocardiogram",
      "Oncology Markers",
      "Priority Reporting",
      "Executive Report",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

const comparisonFeatures = [
  "CBC / Blood Count",
  "Blood Sugar",
  "Lipid Profile",
  "Liver Function",
  "Thyroid Profile",
  "ECG",
  "Chest X-Ray",
  "USG Abdomen",
  "Specialist Consult",
  "Diet Counseling",
];

const comparisonData: Record<string, boolean[]> = {
  "CBC / Blood Count":   [true,  true,  true,  true],
  "Blood Sugar":         [true,  true,  true,  true],
  "Lipid Profile":       [false, true,  true,  true],
  "Liver Function":      [false, true,  true,  true],
  "Thyroid Profile":     [false, true,  true,  true],
  "ECG":                 [false, true,  true,  true],
  "Chest X-Ray":         [false, false, true,  true],
  "USG Abdomen":         [false, false, true,  true],
  "Specialist Consult":  [false, false, true,  true],
  "Diet Counseling":     [false, false, true,  true],
};

const healthNeeds = [
  {
    icon: "🩺",
    title: "Diabetes Screening",
    desc: "HbA1c, FBS, PPBS and specialist diabetologist consultation.",
    href: "/appointment",
  },
  {
    icon: "❤️",
    title: "Heart Health Check",
    desc: "ECG, Lipid Profile, Echo and cardiac risk assessment.",
    href: "/appointment",
  },
  {
    icon: "👩",
    title: "Women's Wellness",
    desc: "Thyroid, USG Pelvis, CBC, Gynecology consultation.",
    href: "/appointment",
  },
  {
    icon: "👨",
    title: "Cancer Care Control",
    desc: "Tumour markers and oncology screening for early detection.",
    href: "/appointment",
  },
  {
    icon: "👵",
    title: "Senior Health Combo",
    desc: "Comprehensive senior citizen package with bone density.",
    href: "/appointment",
  },
  {
    icon: "🏢",
    title: "Corporate Checkup",
    desc: "Group health checkup with on-site collection available.",
    href: "/appointment",
  },
];

const testimonials = [
  {
    name: "Sunita Thapa",
    location: "Kathmandu",
    rating: 5,
    text: "Excellent service! Got my full body checkup done in just 2 hours. The staff was very professional and the reports were clear and detailed.",
  },
  {
    name: "Rajesh Shrestha",
    location: "Lalitpur",
    rating: 5,
    text: "The Comprehensive Package was well worth the price. Everything from blood tests to specialist consultation was seamless. Highly recommended!",
  },
  {
    name: "Anita Maharjan",
    location: "Bhaktapur",
    rating: 4,
    text: "Very satisfied with the Women's Wellness package. The gynecologist was thorough and explained everything clearly. Will visit again.",
  },
];

const packageFaqs = [
  {
    q: "How do I book a health package?",
    a: "You can book online through our website, call us directly, or walk into our clinic. We recommend booking in advance to secure your preferred time slot.",
  },
  {
    q: "Is fasting required before tests?",
    a: "Yes, for packages involving blood sugar, lipid profile, and liver function tests, 8-12 hours of fasting is required. Drink only water during this period.",
  },
  {
    q: "How long does the full checkup take?",
    a: "Most packages are completed within 2-4 hours. The Comprehensive and Executive packages may take 4-6 hours including all consultations.",
  },
  {
    q: "Can I get results the same day?",
    a: "Yes! We provide same-day results for most tests. Complex tests like hormone profiles may take up to 24 hours.",
  },
];

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState("All Packages");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#f0fafa] via-white to-[#e8f7f7] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Health Packages
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-3 mb-4 leading-tight">
                Preventive Healthcare Packages <br className="hidden md:block" />
                for Every Stage of Life
              </h1>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Affordable preventive packages to keep you and your family healthy. 
                Detect risks early, stay ahead, and live confidently.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 mt-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "h-9 px-5 rounded-full text-sm font-bold transition-all",
                    activeFilter === f
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                  )}
                >
                  {f}
                </button>
              ))}
              <button className="h-9 px-5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Compare Plans
              </button>
            </div>
          </Container>
        </section>

        {/* ── MOST POPULAR PACKAGES ── */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Wellness First</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Most Popular Packages</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
                Choose a plan that fits your health goals and budget. All packages include a free follow-up consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={cn(
                    "relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02]",
                    pkg.highlighted
                      ? "bg-[#0F2E2E] text-white shadow-2xl shadow-slate-900/20 ring-2 ring-primary"
                      : "bg-white border border-slate-100 shadow-lg shadow-slate-200/50"
                  )}
                >
                  {pkg.badge && (
                    <div className={cn(
                      "absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                      pkg.highlighted ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    )}>
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col gap-5">
                    <div>
                      <p className={cn("text-[10px] font-bold uppercase tracking-widest mb-1", pkg.highlighted ? "text-primary" : "text-slate-400")}>
                        {pkg.subtitle}
                      </p>
                      <h3 className={cn("text-xl font-black leading-tight", pkg.highlighted ? "text-white" : "text-slate-900")}>
                        {pkg.title}
                      </h3>
                    </div>

                    <div>
                      <p className={cn("text-[10px] font-bold uppercase tracking-wider mb-1", pkg.highlighted ? "text-slate-400" : "text-slate-400")}>Starting at</p>
                      <p className={cn("text-3xl font-black tracking-tight", pkg.highlighted ? "text-primary" : "text-slate-900")}>
                        {pkg.price}
                      </p>
                    </div>

                    <p className={cn("text-xs leading-relaxed", pkg.highlighted ? "text-slate-300" : "text-slate-500")}>
                      {pkg.desc}
                    </p>

                    <ul className="space-y-2.5 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs font-medium">
                          <div className={cn(
                            "h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            pkg.highlighted ? "bg-primary/20 text-primary" : "bg-emerald-50 text-emerald-600"
                          )}>
                            <Check className="h-2.5 w-2.5 stroke-[3px]" />
                          </div>
                          <span className={pkg.highlighted ? "text-slate-300" : "text-slate-600"}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={cn(
                        "w-full h-11 rounded-xl text-sm font-bold transition-all",
                        pkg.highlighted
                          ? "bg-primary text-white hover:bg-primary/90"
                          : pkg.id === "executive"
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      )}
                      asChild
                    >
                      <Link href={pkg.id === "executive" ? "/contact" : "/appointment"}>
                        {pkg.cta} <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── COMPARE PACKAGES ── */}
        <section className="py-16 bg-slate-50/60">
          <Container>
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Side by Side</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Compare Packages Side by Side</h2>
              <p className="text-slate-500 text-sm mt-2">See exactly what&apos;s included in each plan before you decide.</p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-lg bg-white">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-5 px-6 font-black text-slate-700 text-sm">Test / Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} className={cn(
                        "py-5 px-4 text-center text-sm font-black",
                        pkg.highlighted ? "text-primary" : "text-slate-700"
                      )}>
                        {pkg.title}
                        <p className="text-[10px] font-normal text-slate-400 mt-0.5">{pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, i) => (
                    <tr key={feat} className={cn("border-b border-slate-50", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                      <td className="py-4 px-6 text-sm font-semibold text-slate-700">{feat}</td>
                      {comparisonData[feat].map((has, j) => (
                        <td key={j} className="py-4 px-4 text-center">
                          {has ? (
                            <div className="inline-flex h-6 w-6 rounded-full bg-primary/10 items-center justify-center">
                              <Check className="h-3.5 w-3.5 text-primary stroke-[3px]" />
                            </div>
                          ) : (
                            <div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center">
                              <X className="h-3.5 w-3.5 text-slate-300 stroke-[2.5px]" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* ── CHOOSE BY HEALTH NEED ── */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Personalized</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Choose by Health Need</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
                Not sure which package to choose? Start by your specific health concern.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {healthNeeds.map((need, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-[1.01] flex flex-col gap-4"
                >
                  <div className="text-3xl">{need.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-black text-slate-900 text-[15px] mb-1.5">{need.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{need.desc}</p>
                  </div>
                  <Link
                    href={need.href}
                    className="inline-flex items-center text-xs font-bold text-primary hover:underline underline-offset-4"
                  >
                    Book This Package <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── CORPORATE SCREENING ── */}
        <section className="py-16 bg-slate-900">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
                  alt="Corporate health screening"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-transparent" />
              </div>
              <div className="text-white space-y-6">
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">For Businesses</span>
                  <h2 className="text-3xl md:text-4xl font-black mt-2 leading-tight">
                    Corporate Health Screening Programs
                  </h2>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Keep your workforce healthy and productive. Our corporate health packages offer group discounts, 
                  on-site collection, and detailed aggregate health reports for your HR team.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Bulk booking discounts (10+ employees)",
                    "On-site sample collection available",
                    "Aggregate health reports for HR",
                    "Priority processing & same-day reports",
                    "Dedicated account manager",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary stroke-[3px]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Button className="h-12 px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary/90" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-white/20 text-white font-bold hover:bg-white/10" asChild>
                    <Link href="/packages">View All Plans</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── HOW BOOKING WORKS ── */}
        <section className="py-16 bg-slate-50/60">
          <Container>
            <div className="text-center mb-12 space-y-2">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">How Package Booking Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20 z-0" />
              {[
                { num: "1", title: "Choose Package", desc: "Browse and select the package that matches your health needs." },
                { num: "2", title: "Book Appointment", desc: "Pick a convenient date and time. Confirm online in seconds." },
                { num: "3", title: "Visit Our Clinic", desc: "Walk into our center — our team will guide you through each test." },
                { num: "4", title: "Receive Report", desc: "Get detailed results same day with free doctor consultation." },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group z-10">
                  <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-primary/20 mb-5 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    {step.num}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-full group-hover:shadow-xl transition-all duration-300">
                    <h3 className="font-black text-slate-900 text-[15px] mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Questions</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Common Questions About Our Service</h2>
              </div>
              <div className="space-y-3">
                {packageFaqs.map((faq, i) => (
                  <div key={i} className={cn(
                    "border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 bg-white",
                    openFaq === i ? "shadow-md ring-1 ring-primary/10" : "hover:bg-slate-50"
                  )}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-bold text-slate-700 text-sm">{faq.q}</span>
                      <ChevronDown className={cn(
                        "h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4",
                        openFaq === i ? "rotate-180 text-primary" : ""
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── PACKAGES CTA ── */}
        <section className="py-12 bg-white">
          <Container>
            <div className="bg-primary rounded-4xl p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-[-20%] left-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl" />
              <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  Act Now
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  Take Control of Your Health Today
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Early detection saves lives. Start with a simple health check and get peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="pill" className="w-full sm:w-auto h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold" asChild>
                    <Link href="/appointment">Book a Package</Link>
                  </Button>
                  <Button variant="outline" size="pill" className="w-full sm:w-auto h-14 px-10 border-white text-white hover:bg-white/10" asChild>
                    <Link href="/contact">Talk to Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
