"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

import { Button } from "@/components/ui/button";
import { Play, Star, MapPin, Calendar, ChevronRight, Phone, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Facility", "Doctors", "Equipments", "Health Camps", "Products", "Behind The Scenes", "Videos"];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", alt: "Reception Area", category: "Facility", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", alt: "Doctor with Patient", category: "Doctors", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b", alt: "Lab Equipment", category: "Equipments", span: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5", alt: "Pharmacy Shelves", category: "Products", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1505751172177-51ad18670404", alt: "Medical Procedure", category: "Behind The Scenes", span: "col-span-2 row-span-1" },
    { src: "https://images.unsplash.com/photo-1631549448353-461bb77718cc", alt: "Health Camp", category: "Health Camps", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561", alt: "Consultation Room", category: "Facility", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef", alt: "Medical Team", category: "Doctors", span: "col-span-1 row-span-1" },
  ];

  const equipment = [
    { title: "ECG Machine", desc: "Advanced cardiac monitoring for accurate heart diagnostics", image: "https://images.unsplash.com/photo-1551076805-e1869033e561" },
    { title: "Ultrasound System", desc: "High-resolution imaging for precise medical diagnosis", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b" },
    { title: "Laboratory Equipment", desc: "State-of-the-art analyzers for comprehensive testing", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118" },
    { title: "BP Monitoring Station", desc: "Automated blood pressure tracking with digital reporting", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
    { title: "Digital Reporting System", desc: "Instant electronic medical records and reports", image: "https://images.unsplash.com/photo-1505751172177-51ad18670404" },
    { title: "Product Storage Unit", desc: "Climate-controlled storage for medical products", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" },
  ];

  const doctors = [
    { name: "Dr. Sharma", role: "Cardiologist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" },
    { name: "Dr. Thapa", role: "Pediatrician", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2" },
    { name: "Dr. Rai", role: "Gynecologist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f" },
    { name: "Dr. Gurung", role: "General Physician", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d" },
    { name: "Nurse Maya", role: "Senior Nurse", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2" },
  ];

  const community = [
    { title: "Health Camp – Thankot", date: "March 2025", image: "https://images.unsplash.com/photo-1631549448353-461bb77718cc" },
    { title: "School Awareness Program", date: "February 2025", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef" },
    { title: "Community Screening Drive", date: "January 2025", image: "https://images.unsplash.com/photo-1505751172177-51ad18670404" },
    { title: "Senior Citizen Support", date: "December 2024", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118" },
  ];

  const videos = [
    { title: "Clinic Walkthrough Tour", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" },
    { title: "Health Camp 2025", duration: "5:20", thumbnail: "https://images.unsplash.com/photo-1631549448353-461bb77718cc" },
    { title: "Doctor Awareness Talk", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef" },
  ];

  const testimonials = [
    { name: "Rita Shrestha", doctor: "Dr. Sharma", rating: 5, text: "The care and attention I received at Kunta Devi Health Care was exceptional. The staff truly cares about their patients." },
    { name: "Bikash Tamang", doctor: "Dr. Thapa", rating: 5, text: "Modern facilities and experienced doctors. I felt confident in my treatment from day one." },
    { name: "Sita Magar", doctor: "Dr. Rai", rating: 5, text: "The team went above and beyond to make me comfortable. Highly recommend this clinic to everyone." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#f0fafa] to-white pt-[120px] pb-16 md:pt-[140px] md:pb-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">PAGES / GALLERY</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2137] tracking-tight leading-tight">
                See the Care, Cleanliness, and Commitment Behind Our Services
              </h1>
              <p className="text-[#555F6D] text-base md:text-lg max-w-2xl mx-auto">
                Explore our facilities, medical equipment, healthcare team, and community activities through real moments.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-semibold transition-all",
                      activeFilter === filter
                        ? "bg-[#0A7075] text-white shadow-lg shadow-[#0A7075]/20"
                        : "bg-white text-[#555F6D] border border-[#E0EDED] hover:border-[#0A7075] hover:text-[#0A7075]"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Gallery Grid Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">VISUAL JOURNEY</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">Our Clinic in Real Life</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className={cn(
                      "relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300",
                      img.span
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-semibold">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Video Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                      alt="Clinic Tour"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-[#0A7075] ml-1" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs mb-4">HOW TO TOUR</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0D2137] mb-4">Step Inside Kunta Devi Health Care</h2>
                    <p className="text-[#555F6D] mb-6">
                      Take a virtual tour of our state-of-the-art facilities. See our modern consultation rooms, advanced diagnostic equipment, and patient-friendly spaces designed for your comfort.
                    </p>
                    <Button className="w-fit bg-[#2A9D8F] hover:bg-[#238b7e]">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Tour
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Equipment Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">TECHNOLOGY</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">Modern Equipment, Reliable Results</h2>
                <p className="text-[#555F6D] max-w-2xl mx-auto">State-of-the-art tools for accurate diagnosis and effective care.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {equipment.map((item, i) => (
                  <div key={i} className="bg-[#f0fafa] rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0D2137] mb-2">{item.title}</h3>
                      <p className="text-[#555F6D] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Doctors Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">OUR TEAM</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">Healthcare Delivered with Compassion</h2>
                <p className="text-[#555F6D] max-w-2xl mx-auto">Our doctors, nurses, and staff — dedicated every single day.</p>
              </div>

              <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {doctors.map((doc, i) => (
                  <div key={i} className="flex-shrink-0 w-64">
                    <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-bold">{doc.name}</p>
                        <p className="text-white/80 text-sm">{doc.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Community Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">OUTREACH</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">Serving Beyond Our Clinic Walls</h2>
                <p className="text-[#555F6D] max-w-2xl mx-auto">Health camps, school awareness, and community outreach across Nepal.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {community.map((item, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden group">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Video Gallery Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">VIDEO GALLERY</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">Moments That Matter</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-[#0A7075] ml-1" />
                        </button>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#0D2137] mb-2">{video.title}</h3>
                      <Link href="#" className="text-[#0A7075] text-sm font-semibold flex items-center gap-1 hover:underline">
                        Watch Video <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">TESTIMONIALS</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2137]">What Our Patients Say</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="bg-[#f0fafa] rounded-2xl p-6 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-[#555F6D] mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-[#0D2137]">{testimonial.name}</p>
                      <p className="text-sm text-[#555F6D]">{testimonial.doctor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-gradient-to-r from-[#0A7075] to-[#2A9D8F]">
            <Container>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Experience Trusted Healthcare in Person</h2>
                <p className="text-white/90 text-lg">
                  Book your appointment today and receive compassionate care from our experienced medical team. Your health is our priority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0A7075] h-12 px-8" asChild>
                    <Link href="/appointment">Book Consultation</Link>
                  </Button>
                  <Button className="bg-white text-[#0A7075] hover:bg-gray-100 h-12 px-8" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
