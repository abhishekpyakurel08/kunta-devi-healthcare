import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import PackagesClient from "@/components/packages/PackagesClient";
import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = generateSEO({
  title: "Health Packages",
  description: "Browse comprehensive preventive diagnostic health packages for individuals, families, seniors, and corporate wellness at Kunta Devi Health Care.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow pt-[60px] md:pt-[64px] lg:pt-[72px]">
        <PackagesClient />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
