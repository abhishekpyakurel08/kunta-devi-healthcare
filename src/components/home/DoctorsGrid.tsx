import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";

export function DoctorsGrid() {
  return (
    <Section
      id="doctors"
      subtitle="Expert Team"
      title="Meet Our Specialized Doctors"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.slice(0, 4).map((doctor) => (
          <Card key={doctor.id} className="group overflow-hidden border-border/50 hover:border-primary/50">
            <div className="aspect-4/5 bg-slate-100 relative">
              <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Doctor Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                <Users className="h-24 w-24" />
              </div>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{doctor.name}</CardTitle>
              <p className="text-primary font-bold text-xs uppercase tracking-widest">{doctor.specialization}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4 pb-6">
              <CardDescription className="text-sm font-medium">
                {doctor.qualification}
              </CardDescription>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center justify-center gap-2 text-xs text-muted font-bold">
                  <Calendar className="h-3 w-3 text-primary" />
                  {doctor.days}
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-muted font-bold">
                  <Clock className="h-3 w-3 text-primary" />
                  {doctor.timing}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full rounded-xl group/btn" variant="outline" asChild>
                <Link href="/appointment">
                  Book Appointment <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button size="lg" className="rounded-full px-10" asChild>
          <Link href="/doctors">View All Doctors</Link>
        </Button>
      </div>
    </Section>
  );
}

import { Users } from "lucide-react";
