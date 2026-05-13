"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-14 w-14 relative">
               <div className="absolute inset-0 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-600">
                  <div className="text-[10px] font-bold text-red-600 text-center leading-none">LOGO</div>
               </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[15px] font-bold transition-all",
                  pathname === link.href
                    ? "text-primary font-extrabold"
                    : "text-slate-600 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <Button variant="outline" size="pill" asChild>
               <Link href={`tel:${clinicInfo.phone}`}>Call Now</Link>
            </Button>
            <Button size="pill" asChild>
               <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Nav */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 top-[80px] bg-white z-40 transition-all duration-300 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xl font-bold transition-all",
                pathname === link.href ? "text-primary" : "text-slate-900"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
             <Button variant="outline" className="w-full rounded-xl h-14 border-primary text-primary font-bold" asChild>
                <Link href={`tel:${clinicInfo.phone}`} onClick={() => setIsOpen(false)}>Call Now</Link>
             </Button>
             <Button className="w-full rounded-xl h-14 bg-primary text-white font-bold" asChild>
                <Link href="/appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
