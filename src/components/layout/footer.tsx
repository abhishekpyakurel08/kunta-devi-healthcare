import Link from "next/link";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2332] text-white pt-20 pb-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col justify-center">
             <div className="mb-6">
                {/* Logo Placeholder */}
                <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                   <span className="text-primary font-black text-xs">LOGO</span>
                </div>
             </div>
             <p className="text-sm text-slate-300 leading-relaxed max-w-[240px]">
                Your trusted healthcare partner in the heart of Kathmandu.
             </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
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
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
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
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 font-medium">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/70 shrink-0" />
                <span className="text-sm text-slate-400 font-medium">{clinicInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/70 shrink-0" />
                <span className="text-sm text-slate-400 font-medium">{clinicInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 font-medium">{clinicInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} Kunta Devi Health Care. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
