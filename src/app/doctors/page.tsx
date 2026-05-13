import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

import { doctors } from "@/data/doctors";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const dynamic = 'force-static';

export const metadata = generateSEO({
  title: "Our Specialized Doctors",
  description: "Meet our team of highly qualified and experienced specialist doctors at Kunta Devi Health Care.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PageHeader 
          title="Meet Our Specialists" 
          subtitle="A team of dedicated professionals committed to your health and well-being."
          breadcrumb="Doctors"
        />

        <Section className="bg-white">
          {/* Simple Specialty Filter - Static for now */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <Button size="sm" className="rounded-full px-6" variant="default">All Specialties</Button>
            {["General Physician", "Cardiologist", "Gynecologist", "Pediatrician", "Orthopedic"].map((spec) => (
              <Button key={spec} size="sm" className="rounded-full px-6" variant="outline">{spec}</Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="group overflow-hidden border-border/50 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="aspect-4/5 bg-slate-100 relative overflow-hidden group/img">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
                      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070",
                      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974",
                      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964",
                      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070",
                      "https://images.unsplash.com/photo-1612531388260-6303b896c2c1?q=80&w=2070"
                    ][doctors.indexOf(doctor) % 6]} 
                    alt={doctor.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="w-full justify-center py-2 rounded-xl text-xs font-bold tracking-widest uppercase">
                      View Profile
                    </Badge>
                  </div>
                </div>
                <CardHeader className="text-center pb-2 pt-6">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{doctor.name}</CardTitle>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">{doctor.specialization}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4 pb-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold text-muted leading-tight">
                      {doctor.qualification}
                    </p>
                    <div className="h-px w-10 bg-primary/20 mx-auto"></div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-xs text-dark font-bold">
                        <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                        {doctor.days}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-dark font-bold">
                        <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                        {doctor.timing}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-8 px-8">
                  <Button className="w-full rounded-2xl h-12 shadow-lg shadow-primary/10 group/btn" asChild>
                    <Link href="/appointment">
                      Book Appointment <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
