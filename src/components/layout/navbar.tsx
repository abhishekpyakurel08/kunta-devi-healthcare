"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]",
        "h-[60px] md:h-[64px] lg:h-[72px]"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 relative overflow-hidden rounded-full border border-[#0A7075] shadow-md group-hover:scale-105 transition-transform duration-300 bg-white shrink-0">
              <Image
                src="/logo.jpg"
                alt="Kunta Devi Health Care Logo"
                fill
                sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[14px] transition-all",
                  pathname === link.href
                    ? "text-[#0A7075] font-semibold"
                    : "text-[#555F6D] hover:text-[#0A7075]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" asChild>
               <Link href={`tel:${clinicInfo.phone}`}>Call Now</Link>
            </Button>
            <Button asChild>
               <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Tablet Action Buttons */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Button variant="outline" className="h-10 px-4 text-[13px]" asChild>
               <Link href={`tel:${clinicInfo.phone}`}>Call Now</Link>
            </Button>
            <Button className="h-10 px-4 text-[13px]" asChild>
               <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#555F6D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Nav - Full Screen Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[60px] md:top-[64px] bg-white z-40 transition-all duration-300 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col h-full p-6 md:p-8 space-y-0">
          {/* Close Button */}
          <button
            className="self-end p-2 text-[#555F6D] mb-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col space-y-0 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "h-12 flex items-center px-4 text-[16px] transition-all border-b border-[#E0EDED]",
                  pathname === link.href ? "text-[#0A7075] font-semibold" : "text-[#555F6D]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons at Bottom */}
          <div className="pt-6 flex flex-col gap-3">
             <Button variant="outline" className="w-full h-12" asChild>
                <Link href={`tel:${clinicInfo.phone}`} onClick={() => setIsOpen(false)}>Call Now</Link>
             </Button>
             <Button className="w-full h-12" asChild>
                <Link href="/appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
