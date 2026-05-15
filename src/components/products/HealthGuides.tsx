import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HealthGuides() {
  const guides = [
    {
      title: "Proper Use of BP Monitor for Accuracy",
      desc: "Learn the correct way to measure your blood pressure at home for the most reliable results.",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1914",
      category: "Guide"
    },
    {
      title: "When Should You Monitor Blood Sugar?",
      desc: "An expert guide on the frequency and timing of blood glucose monitoring for diabetics.",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446f8a?q=80&w=2070",
      category: "Tips"
    },
    {
      title: "Choosing the Right Nebulizer for Kids",
      desc: "Practical advice for parents on selecting the best nebulizer for children with asthma.",
      image: "https://images.unsplash.com/photo-1584017945511-2362947119f6?q=80&w=1974",
      category: "Expert Advice"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Knowledge Base</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Health Guides From Our Experts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {guides.map((guide, i) => (
            <div key={i} className="group bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/30 hover:translate-y-[-8px] transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {guide.category}
                </div>
              </div>
              <div className="p-10 space-y-6">
                 <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                    {guide.title}
                 </h3>
                 <p className="text-slate-500 font-bold text-sm leading-relaxed">
                    {guide.desc}
                 </p>
                 <Button variant="link" className="p-0 text-primary font-black group/btn h-auto" asChild>
                    <a href="#">
                       Read Guide <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                    </a>
                 </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
