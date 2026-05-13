import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";

export function BlogCards() {
  return (
    <Section
      subtitle="Health Tips & Blog"
      title="Latest Medical Insights"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <Card key={post.id} className="group overflow-hidden flex flex-col border-border/50 hover:border-primary/50">
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Post Image Placeholder */}
              <div className="absolute top-4 left-4">
                <Badge className="rounded-md">{post.category}</Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 text-xs text-muted font-bold mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 text-primary" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="h-3 w-3 text-primary" />
                  {post.author}
                </div>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription className="text-sm line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 text-primary font-bold group/btn" asChild>
                <Link href={`/blog/${post.id}`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button variant="outline" size="lg" className="rounded-full px-10 border-2" asChild>
          <Link href="/blog">View All Health Tips</Link>
        </Button>
      </div>
    </Section>
  );
}
