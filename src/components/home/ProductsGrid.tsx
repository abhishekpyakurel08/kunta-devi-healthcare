import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

export function ProductsGrid() {
  return (
    <Section
      id="products"
      subtitle="Medical Supplies"
      title="Healthcare Products & Kits"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
            <div className="aspect-square bg-slate-100 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
               <div className="text-primary/10">
                  <product.icon className="h-32 w-32" />
               </div>
               <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="rounded-md font-bold uppercase tracking-widest text-[10px]">
                    {product.category}
                  </Badge>
               </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.title}</CardTitle>
              <div className="text-primary font-bold text-lg">{product.price}</div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm line-clamp-2">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-xl gap-2 group/btn" variant="outline" asChild>
                <Link href="/contact">
                  Inquire Now <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
