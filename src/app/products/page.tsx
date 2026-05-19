import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import ProductsClient from "@/components/products/ProductsClient";
import { generateSEO } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = generateSEO({
  title: "Healthcare Products",
  description: "Explore trusted home medical monitoring equipment, devices, and doctor-recommended healthcare products at Kunta Devi Health Care.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow pt-[60px] md:pt-[64px] lg:pt-[72px]">
        <ProductsClient />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
