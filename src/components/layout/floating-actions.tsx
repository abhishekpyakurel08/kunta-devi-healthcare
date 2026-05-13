"use client";

import { MessageSquare, Phone } from "lucide-react";
import { clinicInfo } from "@/data/site-config";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg animate-bounce"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="h-7 w-7 text-white" />
        </a>
      </Button>
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg md:hidden"
        asChild
      >
        <a href={`tel:${clinicInfo.phone}`}>
          <Phone className="h-7 w-7 text-white" />
        </a>
      </Button>
    </div>
  );
}
