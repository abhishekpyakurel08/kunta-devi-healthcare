import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, MessageSquare } from "lucide-react";
import { clinicInfo, navLinks } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-xl">
                <div className="w-6 h-6 border-4 border-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Kunta Devi <span className="text-primary">Health Care</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing modern, professional, and trustworthy diagnostic and healthcare services in Kathmandu. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.slice(1, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">{clinicInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>{clinicInfo.openingHours}</p>
              <div className="pt-4 p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <p className="text-primary font-bold mb-1 underline">Emergency Contact:</p>
                <p className="text-white font-semibold">{clinicInfo.emergencyPhone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Kunta Devi Health Care & Diagnostic Center. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-xs">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
