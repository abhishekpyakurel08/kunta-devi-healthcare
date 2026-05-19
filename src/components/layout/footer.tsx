import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2137] text-white pt-20 pb-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
             <div className="mb-4">
                <Link href="/" className="flex items-center group">
                   <div className="h-14 w-14 xl:h-20 xl:w-20 relative overflow-hidden rounded-full border border-emerald-500 shadow-lg bg-white shrink-0">
                      <Image
                         src="/logo.jpg"
                         alt="Kunta Devi Health Care Logo"
                         fill
                         sizes="(max-width: 1280px) 56px, 80px"
                         className="object-cover"
                      />
                   </div>
                </Link>
             </div>
             <p className="text-sm text-slate-300 leading-relaxed max-w-[280px]">
                Your trusted healthcare partner in the heart of Kathmandu, providing state-of-the-art diagnostic and clinical services.
             </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Quick Links</h3>
            <ul className="space-y-3">
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
          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Our Services</h3>
            <ul className="space-y-3">
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

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-white border-b-2 border-[#0A7075] pb-2">Contact Info</h3>
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
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[rgba(255,255,255,0.7)] text-[12px]">
            © {currentYear} Kunta Devi Health Care. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
