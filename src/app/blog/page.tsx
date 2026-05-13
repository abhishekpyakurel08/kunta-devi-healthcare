import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { BlogCards } from "@/components/home/BlogCards";
import { blogPosts } from "@/data/blog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Health Blog & Wellness Tips",
  description: "Stay informed with the latest health tips, medical news, and preventive care advice from our expert doctors.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Health Blog & Tips" 
          subtitle="Expert medical advice and wellness tips to help you lead a healthier life."
          breadcrumb="Blog"
        />

        <Section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Blog List */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-5xl bg-slate-50/50">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-4">
                    <div className="md:col-span-2 aspect-video md:aspect-auto bg-slate-200 relative overflow-hidden group/img">
                       <img 
                         src={[
                           "https://images.unsplash.com/photo-1505751172177-51ad18670404?q=80&w=2070",
                           "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070",
                           "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070"
                         ][blogPosts.indexOf(post) % 3]} 
                         alt={post.title} 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                       />
                       <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                       <div className="absolute top-4 left-4">
                          <Badge className="rounded-lg py-1 px-3 uppercase tracking-widest text-[10px] font-bold shadow-lg bg-white/90 backdrop-blur-sm text-primary border-none">
                            {post.category}
                          </Badge>
                       </div>
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                       <div className="flex items-center gap-4 text-xs text-muted font-bold mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-primary" />
                            {post.author}
                          </div>
                       </div>
                       <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors leading-tight">
                         {post.title}
                       </CardTitle>
                       <CardDescription className="text-base line-clamp-2 mb-6 font-medium">
                         {post.excerpt}
                       </CardDescription>
                       <Button variant="link" className="p-0 h-auto w-fit text-primary font-bold group/btn" asChild>
                         <Link href={`/blog/${post.id}`}>
                           Read Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                         </Link>
                       </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Categories */}
              <div className="p-8 rounded-5xl bg-white border border-border/50 shadow-sm">
                 <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                   <Tag className="h-5 w-5 text-primary" /> Categories
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {["Heart Health", "Diabetes", "Child Care", "Women Health", "Nutrition", "Preventive Care"].map((cat) => (
                      <Badge key={cat} variant="secondary" className="rounded-lg py-1.5 px-4 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        {cat}
                      </Badge>
                    ))}
                 </div>
              </div>

              {/* Newsletter */}
              <div className="p-8 rounded-5xl bg-dark text-white shadow-xl">
                 <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                 <p className="text-gray-400 text-sm mb-6 leading-relaxed">Subscribe to our newsletter for weekly health tips and clinic updates.</p>
                 <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                    <Button className="w-full rounded-xl">Subscribe Now</Button>
                 </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
