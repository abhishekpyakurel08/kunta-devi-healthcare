"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0D2137] text-white pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[80px] pb-[40px] md:pb-[48px] lg:pb-[64px] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px] lg:gap-[24px] mb-[32px] md:mb-[40px] lg:mb-[48px]">
          {/* Brand Column */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1 items-center md:items-start text-center md:text-left">
             <div className="mb-4">
                <Link href="/" className="flex items-center group">
                   <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 relative overflow-hidden rounded-full border border-[#0A7075] shadow-lg bg-white shrink-0">
                      <Image
                         src="/logo.jpg"
                         alt="Kunta Devi Health Care Logo"
                         fill
                         sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                         className="object-cover"
                      />
                   </div>
                </Link>
             </div>
             <p className="text-[14px] md:text-[14px] lg:text-[14px] text-[rgba(255,255,255,0.7)] leading-relaxed max-w-[280px]">
                Your trusted healthcare partner in the heart of Kathmandu, providing state-of-the-art diagnostic and clinical services.
             </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={() => toggleSection('quick-links')}
              className="flex items-center justify-between w-full lg:hidden"
            >
              <h3 className="text-[16px] md:text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Quick Links</h3>
              {openSection === 'quick-links' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            <h3 className="hidden lg:block text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Quick Links</h3>
            <ul className={cn(
              "space-y-3 lg:block",
              openSection !== 'quick-links' && 'lg:hidden hidden'
            )}>
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Doctors", href: "/doctors" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "Packages", href: "/packages" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[rgba(255,255,255,0.7)] hover:text-[#0A7075] transition-colors text-[14px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full lg:hidden"
            >
              <h3 className="text-[16px] md:text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Our Services</h3>
              {openSection === 'services' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            <h3 className="hidden lg:block text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Our Services</h3>
            <ul className={cn(
              "space-y-3 lg:block",
              openSection !== 'services' && 'lg:hidden hidden'
            )}>
              {[
                "General OPD",
                "Specialist Consult",
                "Maternal Care",
                "Vaccination",
                "Laboratory",
                "Minor Procedure",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-[rgba(255,255,255,0.7)] hover:text-[#0A7075] transition-colors text-[14px]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Always Visible on Mobile */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-[16px] md:text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                <span className="text-[14px] text-[rgba(255,255,255,0.7)]">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/70 shrink-0" />
                <span className="text-[14px] text-[rgba(255,255,255,0.7)]">{clinicInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/70 shrink-0" />
                <span className="text-[14px] text-[rgba(255,255,255,0.7)]">{clinicInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                <span className="text-[14px] text-[rgba(255,255,255,0.7)]">{clinicInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-[rgba(255,255,255,0.7)] text-[11px] md:text-[12px]">
            © {currentYear} Kunta Devi Health Care. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
