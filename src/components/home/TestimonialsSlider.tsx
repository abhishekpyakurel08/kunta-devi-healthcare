import { Quote, Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sita Sharma",
      role: "Patient",
      text: "The laboratory services are excellent. I received my blood test reports on my WhatsApp within 4 hours. Highly recommended for efficiency!",
      stars: 5,
    },
    {
      name: "Ram Bahadur",
      role: "Patient",
      text: "Dr. Anupama is very patient and knowledgeable. She explained everything clearly. The clinic staff is also very helpful and professional.",
      stars: 5,
    },
    {
      name: "Prerna K.C.",
      role: "Patient",
      text: "I took the Full Body Checkup package. It was very comprehensive and well-managed. Great value for money and very thorough.",
      stars: 4,
    },
  ];

  return (
    <Section
      subtitle="Testimonials"
      title="What Our Patients Say"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white group">
            <CardContent className="p-8 relative">
              <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4", 
                      i < t.stars ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"
                    )} 
                  />
                ))}
              </div>
              <p className="text-dark font-medium italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-xs text-muted uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { cn } from "@/lib/utils";
