"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { clinicInfo } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={cn(
          "h-12 w-12 rounded-full bg-slate-900 hover:bg-slate-800 shadow-2xl transition-all duration-500",
          showTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </Button>

      {/* Mobile Call Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl md:hidden"
        asChild
      >
        <a href={`tel:${clinicInfo.phone}`}>
          <Phone className="h-7 w-7 text-white" />
        </a>
      </Button>
    </div>
  );
}
