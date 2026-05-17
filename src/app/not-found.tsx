import Link from "next/link";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Kunta Devi Health Care",
  description: "The page you are looking for could not be found.",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        style={{ transform: "rotate(-20deg)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-100/60 blur-3xl"
        style={{ transform: "rotate(15deg)" }}
      />

      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-10">

          {/* 404 large number */}
          <div className="relative inline-block select-none">
            <span
              className="text-[160px] md:text-[220px] font-black leading-none tracking-tighter text-slate-100"
              aria-hidden="true"
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 md:h-32 md:w-32 bg-primary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30">
                <Search className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let us help you find what you need.
            </p>
          </div>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-xl shadow-primary/20"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-primary hover:text-primary"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Quick Links
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-3 rounded-xl hover:bg-primary/5 hover:text-primary text-sm font-bold text-slate-600 transition-all group"
                >
                  <ArrowLeft className="h-3 w-3 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
