import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function ProductsGrid() {
  const products = [
    {
      name: "Glucometer Kit",
      price: "NPR xyz",
      meta: "Clinically approved · In stock",
    },
    {
      name: "Digital BP Monitor",
      price: "NPR xyz",
      meta: "Clinically approved · In stock",
    },
    {
      name: "Nebulizer Machine",
      price: "NPR xyz",
      meta: "Clinically approved · In stock",
    },
    {
      name: "Multivitamin Pack",
      price: "NPR xyz",
      meta: "Clinically approved · In stock",
    },
  ];

  return (
    <Section className="bg-[#F4F9F9] py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Trusted Medical Products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <div key={i} className="bg-white rounded-4xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group transition-all duration-500 hover:translate-y-[-8px]">
            {/* Image Placeholder */}
            <div className="aspect-4/3 bg-slate-100 relative overflow-hidden group/img">
              <img 
                src={[
                  "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070",
                  "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914",
                  "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974",
                  "https://images.unsplash.com/photo-1631549448353-461bb77718cc?q=80&w=2072"
                ][i % 4]} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent"></div>
            </div>

            <div className="p-8 space-y-4 flex-1">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                <p className="text-[10px] font-medium text-slate-400">
                  Clinically approved · <span className="text-emerald-500 font-bold">In stock</span>
                </p>
              </div>

              <p className="text-2xl font-black text-primary">{product.price}</p>

              <div className="pt-4">
                <Button variant="outline" className="w-full rounded-xl h-12 border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all group/btn" asChild>
                  <Link href="/products">
                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
