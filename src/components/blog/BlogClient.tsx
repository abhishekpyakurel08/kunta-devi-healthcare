"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Clock, User, ChevronDown, ChevronUp, MessageCircle, Calendar, Heart, Baby, Activity, Apple, Shield, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BlogClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are articles written by doctors?",
      answer: "Yes, all our health articles are written and reviewed by our team of qualified doctors and medical specialists to ensure accuracy and reliability."
    },
    {
      question: "Are articles available in Nepali?",
      answer: "Currently, most articles are available in English. We're working on translating key articles into Nepali to serve our local community better."
    },
    {
      question: "Can I ask questions about articles?",
      answer: "Absolutely! You can ask questions in the comments section or reach out to us via WhatsApp. Our doctors will provide responses to common health queries."
    },
    {
      question: "How often do you publish?",
      answer: "We publish new health articles weekly, with seasonal alerts and urgent health updates published as needed during health crises."
    },
    {
      question: "Can I share articles with family?",
      answer: "Yes, all our articles can be easily shared via social media, WhatsApp, or email. We encourage sharing health information with family and friends."
    }
  ];

  const healthTopics = [
    { icon: Activity, title: "Diabetes Management", count: 24 },
    { icon: Baby, title: "Pregnancy Care", count: 18 },
    { icon: Heart, title: "Heart Health", count: 32 },
    { icon: Shield, title: "Child Vaccination", count: 15 },
    { icon: Activity, title: "Blood Pressure", count: 21 },
    { icon: Apple, title: "Nutrition Tips", count: 28 },
    { icon: Shield, title: "Seasonal Flu", count: 19 },
    { icon: Brain, title: "Senior Wellness", count: 16 },
  ];

  const latestArticles = [
    {
      title: "Signs of High Blood Pressure You Should Never Ignore",
      excerpt: "Learn the warning signs of hypertension and when to seek medical attention for proper diagnosis and treatment.",
      author: "Dr. Rahul Karki",
      readTime: "5 min read",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
    },
    {
      title: "When Should Children Get Vaccines?",
      excerpt: "Complete vaccination schedule for children in Nepal, including mandatory and recommended vaccines by age.",
      author: "Dr. Anjali Rai",
      readTime: "7 min read",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
    },
    {
      title: "How Often Should Adults Do Annual Health Checkup?",
      excerpt: "Guidelines for adult health screenings, recommended tests by age group, and preventive care importance.",
      author: "Dr. Sita Sharma",
      readTime: "6 min read",
      badge: "New",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
    },
    {
      title: "Best Foods for Diabetic Patients",
      excerpt: "Nutrition guide for diabetes management, including foods to eat, avoid, and meal planning tips.",
      author: "Dr. Samuel Shrestha",
      readTime: "8 min read",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
    },
    {
      title: "When Should You Get an ECG? Key Warning Signs",
      excerpt: "Understanding when an ECG is necessary, warning signs of heart issues, and what to expect during the test.",
      author: "Dr. Rahul Karki",
      readTime: "5 min read",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561"
    },
    {
      title: "Pregnancy Care in Nepal: What Every Mother Should Know",
      excerpt: "Comprehensive guide to prenatal care, hospital options, and essential health tips for expectant mothers.",
      author: "Dr. Anjali Rai",
      readTime: "10 min read",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
  ];

  const doctorInsights = [
    {
      name: "Dr. Rahul Karki",
      specialty: "Cardiologist",
      quote: "Why annual health screening matters after 35: Early detection of cardiovascular issues can save lives. Don't wait for symptoms to appear.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
    },
    {
      name: "Dr. Anjali Rai",
      specialty: "Lead Pediatrician",
      quote: "Consistency in vaccination schedules is crucial for protecting children from preventable diseases. Stick to the recommended timeline.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: "Dr. Samuel Shrestha",
      specialty: "Neurologist",
      quote: "Sleep hygiene is the foundation of cognitive longevity. Quality sleep affects memory, focus, and overall brain health.",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#f0fafa] to-white pt-16 pb-20 md:pt-20 md:pb-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">HEALTH NEWS & TIPS</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight leading-tight">
              Trusted Health Advice for You and Your Family
            </h1>
            <p className="text-text-body text-base md:text-lg max-w-2xl mx-auto">
              Expert health tips, seasonal alerts, prevention guides, and doctor insights to help you make informed healthcare decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Search + Filter Bar */}
      <ScrollReveal>
        <section className="py-8 bg-white border-b border-border">
          <Container>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-body" />
                  <input
                    type="text"
                    placeholder="Search symptoms, articles, health topics..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-border focus:outline-none focus:border-[#0A7075] transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                <select className="h-12 px-4 rounded-xl border border-border bg-white focus:outline-none focus:border-[#0A7075] text-text-body">
                  <option>All Categories</option>
                  <option>Heart Health</option>
                  <option>Diabetes</option>
                  <option>Child Care</option>
                  <option>Women Health</option>
                </select>
                <select className="h-12 px-4 rounded-xl border border-border bg-white focus:outline-none focus:border-[#0A7075] text-text-body">
                  <option>All Tags</option>
                  <option>Prevention</option>
                  <option>Treatment</option>
                  <option>Nutrition</option>
                </select>
                <select className="h-12 px-4 rounded-xl border border-border bg-white focus:outline-none focus:border-[#0A7075] text-text-body">
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Most Read</option>
                </select>
                <select className="h-12 px-4 rounded-xl border border-border bg-white focus:outline-none focus:border-[#0A7075] text-text-body">
                  <option>English</option>
                  <option>Nepali</option>
                </select>
                <Button className="bg-[#0A7075] hover:bg-primary-dark h-12 px-6">
                  Find Articles
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Featured Article */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="bg-[#f0fafa] rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[300px] lg:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
                    alt="Dengue Prevention"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs mb-4">SEASONAL HEALTH</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                    How to Protect Your Family During Dengue Season in Nepal
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-text-body mb-4">
                    <span className="flex items-center gap-2">
                       <User className="h-4 w-4" />
                      Dr. Sita Sharma, Cardiologist
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      5 min read
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      May 2025
                    </span>
                  </div>
                  <p className="text-text-body mb-6">
                    With monsoon season approaching, dengue cases are on the rise across Nepal. Learn essential prevention strategies, recognize symptoms early, and protect your family from this mosquito-borne disease.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-[#0A7075]/10 text-[#0A7075] rounded-full text-sm font-semibold">Dengue Protection</span>
                    <span className="px-3 py-1 bg-[#0A7075]/10 text-[#0A7075] rounded-full text-sm font-semibold">Monsoon Health</span>
                    <span className="px-3 py-1 bg-[#0A7075]/10 text-[#0A7075] rounded-full text-sm font-semibold">Family Tips</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button className="bg-[#0A7075] hover:bg-primary-dark" asChild>
                      <Link href="#">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Popular Health Topics */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-[#f0fafa]">
          <Container>
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">HEALTH TOPICS</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Popular Health Topics</h2>
              <p className="text-text-body">Browse by health concern</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {healthTopics.map((topic, i) => (
                <Link
                  key={i}
                  href="#"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="h-12 w-12 rounded-full bg-[#0A7075]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A7075] transition-colors">
                    <topic.icon className="h-6 w-6 text-[#0A7075] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{topic.title}</h3>
                  <p className="text-sm text-text-body mb-4">{topic.count} Articles</p>
                  <span className="text-[#0A7075] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Latest Articles Grid */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">LATEST ARTICLES</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Latest Health Articles</h2>
              <p className="text-text-body">Doctor-authored, reviewed, and trusted health information</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {latestArticles.map((article, i) => (
                <div key={i} className="bg-[#f0fafa] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        article.badge === "Trending" ? "bg-red-500 text-white" :
                        article.badge === "Featured" ? "bg-[#0A7075] text-white" :
                        article.badge === "New" ? "bg-green-500 text-white" :
                        "bg-blue-500 text-white"
                      )}>
                        {article.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-secondary mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-text-body text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-text-body mb-4">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Articles
              </Button>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Seasonal Alerts */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-[#f0fafa]">
          <Container>
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">SEASONAL ALERTS</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Seasonal Health Alerts</h2>
              <p className="text-text-body">Timely warnings and prevention guides for Nepal's seasonal health risks</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden h-64 group">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
                  alt="Monsoon Diseases"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Monsoon Disease Prevention</h3>
                  <p className="text-white/80 text-sm mb-4">Protect yourself from waterborne diseases during rainy season</p>
                  <Button className="bg-[#0A7075] hover:bg-primary-dark" asChild>
                    <Link href="#">
                      Read Prevention Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-64 group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                  alt="Winter Health"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Winter Respiratory Protection</h3>
                  <p className="text-white/80 text-sm mb-4">Stay healthy during cold season with these essential tips</p>
                  <Button className="bg-[#0A7075] hover:bg-primary-dark" asChild>
                    <Link href="#">
                      Read Prevention Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Doctor Insights */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">DOCTOR INSIGHTS</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Our Specialist Insights</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {doctorInsights.map((insight, i) => (
                <div key={i} className="bg-[#f0fafa] rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={insight.avatar}
                        alt={insight.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">{insight.name}</h4>
                      <p className="text-sm text-text-body">{insight.specialty}</p>
                    </div>
                  </div>
                  <p className="text-text-body italic">"{insight.quote}"</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-[#f0fafa]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Never Miss a Health Update</h2>
              <p className="text-text-body">Subscribe to our newsletter for weekly health tips and clinic updates.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 px-4 rounded-xl border border-border focus:outline-none focus:border-[#0A7075]"
                />
                <Button className="bg-[#0A7075] hover:bg-primary-dark h-12 px-6">
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-text-body text-sm">OR</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <Button className="bg-[#2A9D8F] hover:bg-[#238b7e] h-12 px-6" asChild>
                <Link href="#">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join WhatsApp Updates
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Common Questions About Health And News</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#f0fafa] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-secondary">{faq.question}</span>
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5 text-[#0A7075]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#0A7075]" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-text-body">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* Footer CTA Banner */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-linear-to-r from-secondary to-[#0A7075]">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Still Have Health Questions?</h2>
              <p className="text-white/90 text-lg">
                Our doctors are here to help. Book a consultation or reach out via WhatsApp for personalized health advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-secondary hover:bg-gray-100 h-12 px-8" asChild>
                  <Link href="/appointment">Book Consultation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary h-12 px-8" asChild>
                  <Link href="#">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>
    </div>
  );
}
