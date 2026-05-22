import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProductsGrid() {
  const products = [
    {
      name: "Glucometer Kit",
      price: "NPR 3,200",
      meta: "Clinically approved · In stock",
      image: "/products/glucometer-kit.png",
    },
    {
      name: "Digital BP Monitor",
      price: "NPR 4,500",
      meta: "Clinically approved · In stock",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914",
    },
    {
      name: "Nebulizer Machine",
      price: "NPR 5,500",
      meta: "Clinically approved · In stock",
      image: "/products/nebulizer-machine.png",
    },
    {
      name: "Multivitamin Pack",
      price: "NPR 1,500",
      meta: "Clinically approved · In stock",
      image: "/products/multivitamin-pack.png",
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
            {/* Image */}
            <div className="aspect-4/3 bg-slate-100 relative overflow-hidden group/img">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover/img:scale-110"
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
