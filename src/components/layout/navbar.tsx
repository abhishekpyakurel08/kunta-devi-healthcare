"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks, clinicInfo } from "@/data/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-xl">
              <div className="w-6 h-6 border-4 border-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-dark hidden sm:inline-block">
              Kunta Devi <span className="text-primary">Health Care</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <a href={`tel:${clinicInfo.phone}`}>
              <Phone className="mr-2 h-4 w-4" /> {clinicInfo.phone}
            </a>
          </Button>
          <Button size="sm" className="rounded-full px-6" asChild>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-white p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-semibold",
                  pathname === link.href ? "text-primary" : "text-dark"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full rounded-xl justify-start">
                <Phone className="mr-2 h-4 w-4" /> {clinicInfo.phone}
              </Button>
              <Button className="w-full rounded-xl" asChild onClick={() => setIsOpen(false)}>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
