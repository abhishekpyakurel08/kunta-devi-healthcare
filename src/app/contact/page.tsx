import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import ContactClient from "@/components/contact/ContactClient";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with Kunta Devi Health Care. Find our location, phone number, and clinic hours in Kathmandu.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow pt-[60px] md:pt-[64px] lg:pt-[72px]">
        <ContactClient />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
