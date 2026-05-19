"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/fetch-states";
import Image from "next/image";

interface ExploreProductsProps {
  searchQuery: string;
  activeCategory: string;
}

interface Product {
  title: string;
  brand: string;
  price: string;
  image: string;
  badge: string;
  category: string;
}

export function ExploreProducts({ searchQuery, activeCategory }: ExploreProductsProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      // Simulate network request delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setAllProducts([
    { title: "BP Monitor", brand: "Omron", price: "4,500", image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914", badge: "Best Seller", category: "Monitoring" },
    { title: "Thermometer", brand: "Beurer", price: "1,200", image: "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974", badge: "New Arrival", category: "Diagnostic" },
    { title: "Nebulizer", brand: "Rossmax", price: "3,800", image: "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070", badge: "Discount", category: "Wellness" },
    { title: "Pulse Oximeter", brand: "Dr. Trust", price: "1,500", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070", badge: "Popular", category: "Monitoring" },
    { title: "Glucometer", brand: "Accu-Chek", price: "3,200", image: "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070", badge: "Essential", category: "Monitoring" },
    { title: "Face Masks", brand: "3M", price: "500", image: "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974", badge: "Bulk Sale", category: "Wellness" },
    { title: "Hand Sanitizer", brand: "Dettol", price: "250", image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914", badge: "Stock up", category: "Wellness" },
    { title: "Vitamins C", brand: "Dabur", price: "800", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070", badge: "Wellness", category: "Wellness" },
      ]);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-slate-50/30">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Full Inventory</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Explore Our Healthcare Products</h2>
        </div>

        {isLoading ? (
          <LoadingSpinner text="Loading Products..." />
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, i) => (
              <div key={i} className="group bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {product.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/90 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {product.brand}
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-1">
                    <h3 className="font-black text-slate-800 tracking-tight text-sm truncate">{product.title}</h3>
                    <p className="text-[10px] font-bold text-slate-400">{product.category}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between gap-4 mt-auto">
                     <p className="font-black text-slate-900 text-sm">NPR {product.price}</p>
                     <Button size="icon" className="h-8 w-8 rounded-lg bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-900/10 transition-all">
                        <ShoppingCart className="h-4 w-4" />
                     </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-4xl border border-slate-100 border-dashed">
             <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-slate-300" />
             </div>
             <p className="text-slate-500 font-bold">No products found for your criteria.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-full px-12 h-14 font-black text-sm uppercase tracking-widest border-slate-200 hover:border-primary hover:text-primary transition-all">
             View More Products <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
