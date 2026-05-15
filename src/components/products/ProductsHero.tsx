"use client";

import { Search, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";

interface ProductsHeroProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export function ProductsHero({ onSearch, onCategoryChange }: ProductsHeroProps) {
  return (
    <section className="bg-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-primary/5 blur-3xl pointer-events-none rounded-full -translate-x-1/2"></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Our Pharmacy & Products</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Trusted Medical Products <br />
              <span className="text-primary">Recommended by Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
              Find best quality healthcare devices, medicines and essentials recommended by our expert medical team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-3 rounded-5xl shadow-2xl shadow-slate-200/80 border border-slate-100 flex flex-col lg:flex-row gap-2 mt-12">
            <div className="flex-1 flex items-center gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
              <Search className="h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products, medicine..." 
                onChange={(e) => onSearch(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-sm font-bold text-slate-700 placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="group relative flex items-center justify-between gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 min-w-[140px] cursor-pointer hover:bg-white transition-colors">
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Category</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
                {/* Simple dropdown simulation */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                   {["All", "Diagnostic", "Pharma", "Monitoring", "Wellness"].map((cat) => (
                     <div 
                       key={cat} 
                       onClick={() => onCategoryChange(cat)}
                       className="px-6 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-left"
                     >
                       {cat}
                     </div>
                   ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 min-w-[140px] cursor-pointer hover:bg-white transition-colors">
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Brand</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 min-w-[140px] cursor-pointer hover:bg-white transition-colors">
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Price</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
              
              <button className="bg-primary text-white px-10 py-4 rounded-full font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                Find Products
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
