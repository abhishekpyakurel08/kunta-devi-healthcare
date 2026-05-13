import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Medical Products & Supplies",
  description: "Browse our selection of high-quality medical equipment, health monitors, and essential healthcare products.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Medical Products" 
          subtitle="Quality healthcare supplies and modern monitoring devices for your home."
          breadcrumb="Products"
        />

        <Section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div key={product.id} className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 group flex flex-col">
                <div className="aspect-square bg-slate-100 relative overflow-hidden group/img">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070",
                      "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914",
                      "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974",
                      "https://images.unsplash.com/photo-1631549448353-461bb77718cc?q=80&w=2072"
                    ][i % 4]} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm text-primary font-black text-xs px-4 py-2 rounded-xl shadow-lg uppercase tracking-widest">
                      {product.category}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between gap-4">
                    <span className="text-2xl font-black text-slate-900">{product.price}</span>
                    <Button size="icon" className="rounded-xl h-12 w-12 bg-primary shadow-lg shadow-primary/20" asChild>
                      <Link href="/contact">
                        <ShoppingCart className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 rounded-[3rem] bg-emerald-50 border border-emerald-100 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-emerald-900">Need something else?</h3>
            <p className="text-emerald-700 font-medium max-w-2xl mx-auto italic">
              We stock a wide range of medical supplies and prescription medicines. Visit our in-house pharmacy or call us to check availability.
            </p>
            <Button size="lg" className="rounded-2xl px-10 h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold" asChild>
              <Link href="/contact">Contact Pharmacy <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
