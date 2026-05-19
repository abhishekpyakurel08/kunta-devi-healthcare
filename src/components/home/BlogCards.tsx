import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BlogCards() {
  const posts = [
    {
      category: "Preventive Care",
      title: "Understanding Annual Health Checkups",
      date: "May 5, 2026",
      readTime: "4 min read",
    },
    {
      category: "Nutrition",
      title: "Managing Diabetes Through a Balanced Diet",
      date: "May 5, 2026",
      readTime: "4 min read",
    },
    {
      category: "Child Health",
      title: "Complete Vaccination Schedule for 2026",
      date: "May 5, 2026",
      readTime: "4 min read",
    },
  ];

  return (
    <Section className="bg-[#F4F9F9] py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Health Resources</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">Latest Health Tips & Updates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-4xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group transition-all duration-500 hover:translate-y-[-8px]">
            {/* Image Placeholder */}
            <div className="aspect-video bg-slate-100 relative overflow-hidden group/img">
               <Image 
                 src={[
                   "https://images.unsplash.com/photo-1505751172177-51ad18670404?q=80&w=2070",
                   "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070",
                   "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070"
                 ][i % 3]} 
                 alt={post.title} 
                 fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className="object-cover transition-transform duration-700 group-hover/img:scale-110"
               />
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="p-10 flex-1 flex flex-col">
              <div className="mb-6">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-8">
                <span>{post.date}</span>
                <span className="text-slate-200">•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                 <Link href="/blog" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group/link">
                    Read Full Article <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg" className="h-14 px-12 text-primary font-bold border-2 rounded-full" asChild>
          <Link href="/blog">
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
