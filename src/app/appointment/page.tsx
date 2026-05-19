import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import AppointmentClient from "@/components/appointment/AppointmentClient";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Book Appointment",
  description: "Schedule your visit with our expert doctors or book a diagnostic test online at Kunta Devi Health Care.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow pt-[60px] md:pt-[64px] lg:pt-[72px]">
        <AppointmentClient />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
