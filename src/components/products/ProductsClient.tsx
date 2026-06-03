"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Heart, 
  CheckCircle,
  HelpCircle,
  Phone,
  MessageSquare,
  Sparkles,
  ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

// Phone Contacts
const PHONE_RECEPTION = "+977-01-4412345";
const PHONE_WHATSAPP = "+977-9801234567";

export default function ProductsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [purposeFilter, setPurposeFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [reservationSuccess, setReservationSuccess] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(true);

  // Simple handler to trigger mock reservation
  const handleReserve = (productName: string) => {
    setReservationSuccess(`Success! "${productName}" has been reserved for pickup at Ghattekulo. We sent details on your number.`);
    setTimeout(() => setReservationSuccess(""), 4000);
  };

  const shopNeeds = [
    { icon: "🩺", title: "Diabetes Care", href: "#explore" },
    { icon: "❤️", title: "Heart Health", href: "#explore" },
    { icon: "🫁", title: "Respiratory Care", href: "#explore" },
    { icon: "👶", title: "Child & Baby Care", href: "#explore" },
    { icon: "👴", title: "Senior Care", href: "#explore" },
    { icon: "💊", title: "Vitamins & Wellness", href: "#explore" },
    { icon: "🩹", title: "First Aid", href: "#explore" },
    { icon: "🏠", title: "Home Monitoring", href: "#explore" }
  ];

  const exploreProducts = [
    {
      id: "bp-1",
      name: "Upper Arm BP Monitor",
      brand: "AccuCheck",
      price: "NPR 4,500",
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600"
    },
    {
      id: "gluc-1",
      name: "Glucometer Test Kit",
      brand: "AccuCheck",
      price: "NPR 3,200",
      badge: "Top Rated",
      img: "/products/glucometer-kit.png"
    },
    {
      id: "neb-1",
      name: "Silent Nebulizer Machine",
      brand: "Rossmax",
      price: "NPR 5,500",
      badge: null,
      img: "/products/nebulizer-machine.png"
    },
    {
      id: "vit-1",
      name: "Premium Multivitamin Pack",
      brand: "Kunta Devi",
      price: "NPR 1,500",
      badge: "Premium",
      img: "/products/multivitamin-pack.png"
    },
    // Repeated for 8 total items
    {
      id: "bp-2",
      name: "Professional BP Cuff",
      brand: "AccuCheck",
      price: "NPR 4,500",
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600"
    },
    {
      id: "gluc-2",
      name: "Glucometer Strips Combo",
      brand: "AccuCheck",
      price: "NPR 3,200",
      badge: "Top Rated",
      img: "/products/glucometer-kit.png"
    },
    {
      id: "neb-2",
      name: "Portable Nebulizer",
      brand: "Rossmax",
      price: "NPR 5,500",
      badge: null,
      img: "/products/nebulizer-machine.png"
    },
    {
      id: "ox-2",
      name: "Fingertip Pulse Monitor",
      brand: "Choice",
      price: "NPR 1,800",
      badge: "New",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600"
    }
  ];

  const specialistRecs = [
    {
      drName: "Dr. Bhishma Pokheral",
      drTitle: "Pediatrician",
      prodName: "Digital BP Monitor Kit",
      rating: 4.8,
      text: "Daily tracking of blood pressure levels is crucial for heart patients. This digital BP kit offers clinically validated accuracy that helps us monitor parameters reliably at home.",
      avatar: "/doctors/dr-bhishma-pokheral.png"
    },
    {
      drName: "Dr. Niraj Shrestha",
      drTitle: "Orthopedic Surgeon",
      prodName: "Glucometer Starter Kit",
      rating: 4.9,
      text: "I highly recommend the AccuCheck Glucometer starter kit for all patients checking blood sugar daily. Fast readings and minimum blood sample volume make it ideal.",
      avatar: "/doctors/dr-niraj-shrestha.png"
    },
    {
      drName: "Dr. Susan Bhattarai",
      drTitle: "Pediatrician",
      prodName: "Compact Nebulizer Machine",
      rating: 4.7,
      text: "Silent motor nebulizers are excellent for small children with breathing difficulties. It delivers precise respiratory dosage gently and with zero machine noise at home.",
      avatar: "/doctors/dr-susan-bhattarai.jpg"
    }
  ];

  const guides = [
    {
      title: "How to Use a BP Monitor Correctly at Home",
      cat: "Cardiology tip",
      excerpt: "Learn the proper sitting posture, cuff placement, and resting timings before logging your daily blood pressure checks.",
      readTime: "5 min read",
      img: "/blog/bp-monitor-guide.png"
    },
    {
      title: "When Should You Monitor Blood Sugar?",
      cat: "Nutrition tip",
      excerpt: "Understanding post-meal and fasting blood sugar cycles is critical. Discover optimal times to perform glucometer checks.",
      readTime: "4 min read",
      img: "/products/glucometer-kit.png"
    },
    {
      title: "Choosing the Right Nebulizer for Home Use",
      cat: "Respiratory tip",
      excerpt: "Ultrasonic or compressor? Read our detailed respiratory comparison to select the perfect nebulizer model.",
      readTime: "6 min read",
      img: "/products/nebulizer-machine.png"
    }
  ];

  const faqs = [
    {
      q: "Are all healthcare products genuine?",
      a: "Yes, 100%. Every single product displayed at Kunta Devi Health Care is sourced directly from certified original manufacturers and carries a verified genuine stamp."
    },
    {
      q: "Do doctors recommend these home products?",
      a: "Yes, our clinical specialists and physicians pre-evaluate every device model for accuracy and standard parameters before listing them for patient use."
    },
    {
      q: "Can I reserve products online for clinic pick up?",
      a: "Absolutely! You can click 'Reserve Now' online. Our pharmacy counter will set aside the product and coordinate your pickup slot instantly."
    },
    {
      q: "Do you provide original manufacturer warranty?",
      a: "Yes, all digital devices like blood pressure monitors, glucometers, and nebulizers come with a 1 to 3-year original manufacturer warranty certificate."
    },
    {
      q: "Can I buy directly in the Ghattekulo clinic pharmacy?",
      a: "Yes. Our clinic houses a fully operational physical pharmacy store open Sunday through Friday from 7:00 AM to 7:00 PM."
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
              HEALTHCARE PRODUCTS
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Trusted Medical Products <br className="hidden md:inline" />
              <span className="text-[#0A7075] relative inline-block">
                Recommended by Professionals
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0A7075]/15 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mt-2">
              From home monitoring devices and wellness essentials to doctor-recommended healthcare products — quality you can trust.
            </p>

            <div className="h-1.5 w-24 bg-[#0A7075] rounded-full mt-2"></div>
          </div>
        </Container>
      </section>

      {/* 2. Search + Filter Bar */}
      <section className="relative -mt-10 z-30 px-4">
        <Container>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(10,112,117,0.08)] border border-slate-100/60 max-w-5xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              
              {/* Search input */}
              <div className="md:col-span-4 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, brand, category..."
                    className="w-full h-12 rounded-xl border border-slate-200 pl-10 pr-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 bg-slate-50/50"
                  />
                  <Search className="absolute left-3.5 top-4 h-4.5 w-4.5 text-slate-400" />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Category</label>
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">All Categories</option>
                    <option value="Diabetes">Diabetes Care</option>
                    <option value="BP">BP Monitors</option>
                    <option value="Respiratory">Nebulizers</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Purpose Dropdown */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Purpose</label>
                <div className="relative">
                  <select
                    value={purposeFilter}
                    onChange={(e) => setPurposeFilter(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">Any Purpose</option>
                    <option value="Monitoring">Home Monitoring</option>
                    <option value="Treatment">Medical Treatment</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* In Stock Dropdown */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Availability</label>
                <div className="relative">
                  <select
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0A7075]/20 appearance-none bg-slate-50/50"
                  >
                    <option value="">All Stock</option>
                    <option value="InStock">In Stock Only</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-4 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Find Products button */}
              <Button 
                onClick={() => handleReserve("Selected Filters search")}
                className="md:col-span-2 w-full h-12 bg-[#0A7075] hover:bg-primary-dark rounded-xl text-xs font-extrabold uppercase tracking-wider"
              >
                Find Products
              </Button>

            </div>

            {reservationSuccess && (
              <p className="text-center text-xs font-extrabold text-emerald-600 animate-pulse bg-emerald-50 py-2.5 rounded-xl border border-emerald-100">
                {reservationSuccess}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Most Requested */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              POPULAR CHOICES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
              Most Requested by Our Patients
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Top clinical-grade home equipment validated by our clinical teams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Featured Product 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                <Image 
                  src="/products/glucometer-kit.png"
                  alt="Glucometer kit product"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Best Seller
                </span>
                <span className="absolute bottom-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="h-3 w-3" /> Verified Genuine Product
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-slate-900 text-base md:text-lg">Glucometer Starter Kit</h3>
                   
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Complete blood precision monitoring kit with 25 test strips, lancets, and carrying case. Doctor approved for home use.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-11 border-slate-200 text-slate-700 text-xs font-bold rounded-xl" onClick={() => handleReserve("Glucometer Starter Kit Details")}>
                    View Details
                  </Button>
                  <Button className="flex-1 h-11 bg-[#0A7075] hover:bg-primary-dark text-white text-xs font-bold rounded-xl" onClick={() => handleReserve("Glucometer Starter Kit")}>
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                <Image 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600"
                  alt="Blood pressure monitor product"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#0A7075] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Buy Now
                </span>
                <span className="absolute bottom-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="h-3 w-3" /> Verified Standard Product
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-slate-900 text-base md:text-lg">Digital Blood Pressure Monitor</h3>
                
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Clinically validated upper arm BP monitor with memory storage for 60 readings. Recommended for daily home monitoring.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-11 border-slate-200 text-slate-700 text-xs font-bold rounded-xl" onClick={() => handleReserve("Digital Blood Pressure Monitor Details")}>
                    View Details
                  </Button>
                  <Button className="flex-1 h-11 bg-[#0A7075] hover:bg-primary-dark text-white text-xs font-bold rounded-xl" onClick={() => handleReserve("Digital Blood Pressure Monitor")}>
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                <Image 
                  src="/products/nebulizer-machine.png"
                  alt="Nebulizer machine product"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  5 Stars
                </span>
                <span className="absolute bottom-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="h-3 w-3" /> Verified Genuine Product
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-slate-900 text-base md:text-lg">Nebulizer Machine</h3>
                  
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Compact nebulizer for effective delivery of respiratory medication. Silent motor, lightweight, ideal for home use.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-11 border-slate-200 text-slate-700 text-xs font-bold rounded-xl" onClick={() => handleReserve("Nebulizer Machine Details")}>
                    View Details
                  </Button>
                  <Button className="flex-1 h-11 bg-[#0A7075] hover:bg-primary-dark text-white text-xs font-bold rounded-xl" onClick={() => handleReserve("Nebulizer Machine")}>
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Shop by Health Need */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100/60">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              SHOP BY HEALTH NEED
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Shop by Health Need
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Browse product collections matching your primary health targets</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {shopNeeds.map((need, idx) => (
              <a 
                key={idx}
                href={need.href}
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{need.icon}</div>
                <h3 className="font-extrabold text-slate-900 text-xs md:text-sm mb-2">{need.title}</h3>
                <span className="text-[10px] font-black text-[#0A7075] group-hover:underline inline-flex items-center gap-1">
                  Shop Now <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. All Products Grid — "Explore Our Healthcare Products" */}
      <section className="py-20 id=explore">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              ALL PRODUCTS
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Explore Our Healthcare Products
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Reliable, professional devices pre-evaluated for high accuracy</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {exploreProducts.map((prod, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl p-4 flex flex-col justify-between shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-4">
                    <Image 
                      src={prod.img}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-[#0A7075] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">{prod.brand}</span>
                    <h4 className="font-extrabold text-slate-900 text-xs md:text-sm line-clamp-1 group-hover:text-[#0A7075] transition-colors">{prod.name}</h4>
                  
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <Button variant="outline" className="flex-1 h-9 rounded-lg border-slate-200 text-slate-600 font-bold text-[10px] px-1" onClick={() => handleReserve(`${prod.name} Details`)}>
                    View Details
                  </Button>
                  <Button className="flex-1 h-9 rounded-lg bg-[#0A7075] hover:bg-primary-dark text-white font-bold text-[10px] px-1" onClick={() => handleReserve(prod.name)}>
                    Reserve
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {showLoadMore && (
            <div className="text-center mt-12">
              <Button variant="outline" className="border-slate-200 text-slate-700 h-12 px-8 rounded-xl font-bold text-xs" onClick={() => {
                setReservationSuccess("Loaded additional products successfully.");
                setShowLoadMore(false);
              }}>
                Load More Products
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 6. Doctor Recommended — "Recommended by Our Specialists" */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100/60">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              CLINICAL RECOMMENDATION
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Recommended by Our Specialists
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Our cardiologists and physicians vouch for the accuracy of these systems</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {specialistRecs.map((rec, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_5px_25px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
                    <Image 
                      src={rec.avatar}
                      alt={rec.drName}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{rec.drName}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">{rec.drTitle}</p>
                    </div>
                    
                    {/* Highlight bar */}
                    <div className="inline-flex items-center gap-2 bg-[#0A7075]/10 border border-[#0A7075]/20 px-3 py-1 rounded-full text-[#0A7075] text-[10px] font-black uppercase">
                      Recommended: {rec.prodName}
                    </div>

                    <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-xl">
                      "{rec.text}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-stretch md:items-end justify-between gap-4 shrink-0 w-full md:w-auto">
                  <div className="flex items-center gap-1 justify-start md:justify-end">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-[10px] font-extrabold text-slate-500 ml-1">({rec.rating})</span>
                  </div>
                  
                  <Button className="h-10 bg-[#0A7075] hover:bg-primary-dark text-white text-xs font-bold rounded-xl px-5" onClick={() => handleReserve(rec.prodName)}>
                    Reserve Product
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Health Guides — "Health Guides From Our Experts" */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
              LEARN BEFORE YOU BUY
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Health Guides From Our Experts
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Practical clinical resources on how to optimize home checks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guides.map((guide, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video bg-slate-50">
                    <Image 
                      src={guide.img}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-teal-50 text-[#0A7075] border border-teal-100 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {guide.cat}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="font-extrabold text-slate-900 text-sm md:text-base leading-snug line-clamp-2 group-hover:text-[#0A7075] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed line-clamp-3">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-4">
                  <span className="text-[10px] text-slate-400 font-black tracking-widest uppercase">{guide.readTime}</span>
                  <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-black text-[#0A7075] hover:underline">
                    Read Guide <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQ — "Common Questions About Our Service" */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100/60">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#0A7075] font-black tracking-widest uppercase text-xs">
                FAQ
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">
                Common Questions About Our Service
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">Find answers regarding device setup, warranties, and orders.</p>
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

      {/* 9. Footer CTA Banner */}
      <section className="py-12 bg-white pb-20">
        <Container>
          <div className="bg-[#0A7075] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-32 -mb-32"></div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider">
                Doctor Recommended Always
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Need Help Choosing the Right Product?
              </h2>
              <p className="text-xs md:text-sm text-white/80 font-semibold leading-relaxed">
                Our healthcare team can guide you to the right product for your health need. Reach out directly.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button className="h-12 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold border-none shadow-md" asChild>
                  <a href={`tel:${PHONE_RECEPTION}`}>Call Now</a>
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
