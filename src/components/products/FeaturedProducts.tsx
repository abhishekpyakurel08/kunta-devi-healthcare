import { ShoppingCart, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeaturedProducts() {
  const products = [
    {
      title: "Glucometer Starter Kit",
      brand: "Accu-Chek Instant",
      price: "3,200",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070",
      tag: "Best Seller",
      features: ["Easy to use", "Accurate results", "50 Strips included"]
    },
    {
      title: "Digital Blood Pressure Monitor",
      brand: "Omron M2 Basic",
      price: "4,500",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914",
      tag: "Top Rated",
      features: ["Clinical accuracy", "Large display", "Memory storage"]
    },
    {
      title: "Nebulizer Machine",
      brand: "Philips Essence",
      price: "5,800",
      badge: "Medical Grade",
      image: "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974",
      tag: "Hospital Grade",
      features: ["Fine particles", "Compact design", "Low noise"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <Container>
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Popular Products</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Most Requested by Our Patients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <div key={i} className="group bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:translate-y-[-8px] transition-all duration-500">
              {/* Product Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {product.badge}
                </div>
                <div className="absolute top-6 right-6 bg-teal-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                   {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{product.brand}</p>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">{product.title}</h3>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-50">
                   {product.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                           <Check className="h-2.5 w-2.5 text-emerald-600 stroke-[4px]" />
                        </div>
                        <span className="text-sm font-bold text-slate-500">{feature}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-6 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</p>
                    <p className="text-2xl font-black text-slate-900">NPR {product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="h-12 w-12 rounded-xl p-0 border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                       <ShoppingCart className="h-5 w-5" />
                    </Button>
                    <Button className="h-12 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-teal-900/10">
                       Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
