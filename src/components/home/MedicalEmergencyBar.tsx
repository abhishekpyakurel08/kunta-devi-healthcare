import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";

export function MedicalEmergencyBar() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="py-5 bg-red-50 border-y border-red-100">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <Phone className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Medical Emergency?</h3>
              <p className="text-sm text-slate-500">
                For urgent medical assistance, call our emergency line immediately or reach us on WhatsApp.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`tel:${clinicInfo.emergencyPhone}`}
              className="flex items-center gap-2 h-11 px-6 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-colors shadow-lg shadow-red-200"
            >
              <Phone className="h-4 w-4" />
              Call 108
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-11 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
