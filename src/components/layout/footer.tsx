"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#162130] text-[#9ab0bf] py-[60px] relative overflow-hidden border-t border-slate-800">
      
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2A9D8F]/5 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 pb-12">
          
          {/* COLUMN 1: Brand */}
          <div className="space-y-6 flex flex-col items-start">
            <Link href="/" className="flex items-center group">
              <div className="h-20 w-20 relative overflow-hidden rounded-full border-2 border-white bg-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/logo.jpg"
                  alt="Kunta Devi Health Care Logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </Link>
            
            <p className="text-sm text-[#9ab0bf] leading-relaxed max-w-xs font-semibold">
              Your trusted healthcare partner in the heart of Kathmandu.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-sm font-semibold">
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
                    className="hover:text-[#2A9D8F] hover:underline hover:underline-offset-4 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-sm font-semibold">
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
                    className="hover:text-[#2A9D8F] transition-all duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span>Ghattekulo, KTM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#2A9D8F] shrink-0" />
                <span>01-4412345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2A9D8F] shrink-0" />
                <span className="break-all">info@kuntadevi.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span>Sunday – Friday: 7:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-label font-semibold text-slate-500 tracking-wider">
            © 2026 Kunta Devi Health Care. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
}
