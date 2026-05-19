"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";

import { api, type Doctor } from "@/lib/api";
import { useEffect } from "react";
import { LoadingSpinner, ErrorMessage } from "@/components/ui/fetch-states";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Star, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DoctorsPage() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoctors() {
      try {
        const response = await api.doctors.list();
        setDoctors(response.data);
      } catch {
        setError("Failed to load doctors. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    loadDoctors();
  }, []);

  const specialties = ["All", ...Array.from(new Set(doctors.map(d => d.specialty)))] as string[];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = activeSpecialty === "All" || doctor.specialty === activeSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Meet Our Specialists" 
          subtitle="A team of dedicated professionals committed to your health and well-being with years of expertise."
          breadcrumb="Doctors"
        />

        <section className="py-24 bg-white">
          <Container>
            {/* Search and Specialty Filter */}
            <div className="space-y-12 mb-20">
              <div className="max-w-2xl mx-auto relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <Search className="h-6 w-6" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search by doctor name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 pl-16 pr-8 rounded-full border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-lg font-bold text-slate-700 placeholder:text-slate-400"
                />
              </div>

              {!isLoading && !error && specialties.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {specialties.map((spec) => (
                    <button 
                      key={spec}
                      onClick={() => setActiveSpecialty(spec)}
                      className={`px-8 py-3 rounded-xl font-black text-sm transition-all border ${
                        activeSpecialty === spec 
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                        : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white hover:shadow-xl"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {isLoading ? (
              <LoadingSpinner text="Loading Specialists..." />
            ) : error ? (
              <ErrorMessage message={error} />
            ) : filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor.id} className="group flex flex-col bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:translate-y-[-8px] transition-all duration-500">
                    {/* Doctor Image */}
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image 
                        src={doctor.image || "/placeholder.jpg"} 
                        alt={doctor.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      
                      {/* Badge */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/20">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Top Rated</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-10 space-y-6 flex-1 flex flex-col">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-[#0A7075] uppercase tracking-[0.2em]">{doctor.specialty}</p>
                        <h3 className="text-2xl font-black text-[#0D2137] group-hover:text-[#0A7075] transition-colors">{doctor.name}</h3>
                        <p className="text-sm font-bold text-[#8A9BAC]">{doctor.credentials}</p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#E0EDED] flex-1">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-[#F4F8F8] flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-[#0A7075]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-[#8A9BAC] uppercase tracking-widest">Experience</p>
                            <p className="text-sm font-black text-[#555F6D]">{doctor.experience} years</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-[#F4F8F8] flex items-center justify-center">
                            <Clock className="h-5 w-5 text-[#0A7075]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-[#8A9BAC] uppercase tracking-widest">Rating</p>
                            <p className="text-sm font-black text-[#555F6D]">{doctor.rating} ({doctor.reviewCount} reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black group/btn shadow-xl shadow-primary/20" asChild>
                          <Link href="/appointment">
                            Book Appointment <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 space-y-6">
                 <div className="h-24 w-24 rounded-full bg-slate-50 flex items-center justify-center mx-auto">
                    <Search className="h-10 w-10 text-slate-300" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900">No Specialists Found</h3>
                    <p className="text-slate-500 font-bold">Try adjusting your search or filter to find a doctor.</p>
                 </div>
                 <Button onClick={() => {setActiveSpecialty("All"); setSearchQuery("");}} variant="outline" className="rounded-full px-10 h-14">
                    Clear All Filters
                 </Button>
              </div>
            )}
          </Container>
        </section>

        {/* Accreditation Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2"></div>
          <Container className="relative z-10 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Our Medical Experts are <br />
                <span className="text-primary italic">Fully Certified & Recognized</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                We maintain the highest standards of medical practice. All our specialists are registered with the Nepal Medical Council and follow global healthcare protocols.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Ministry of Health", "Medical Council", "ISO Certified", "Global Standards"].map((text, i) => (
                <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-4xl bg-white/5 border border-white/10">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                  <p className="text-sm font-black uppercase tracking-widest">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
