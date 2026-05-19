import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import BlogClient from "@/components/blog/BlogClient";
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
      <main className="grow pt-[60px] md:pt-[64px] lg:pt-[72px]">
        <BlogClient />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
