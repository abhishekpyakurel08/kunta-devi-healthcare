import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function DoctorsGrid() {
  const doctors = [
    {
      name: "Dr. Anita Sharma",
      specialty: "MBBS, MD, Gynecologist",
      availability: "Available mon-fri",
      experience: "8+ years",
      nextAvailable: "Tomorrow",
    },
    {
      name: "Dr. Anita Sharma",
      specialty: "MBBS, MD, Gynecologist",
      availability: "Available mon-fri",
      experience: "8+ years",
      nextAvailable: "Tomorrow",
    },
    {
      name: "Dr. Anita Sharma",
      specialty: "MBBS, MD, Gynecologist",
      availability: "Available mon-fri",
      experience: "8+ years",
      nextAvailable: "Tomorrow",
    },
    {
      name: "Dr. Anita Sharma",
      specialty: "MBBS, MD, Gynecologist",
      availability: "Available mon-fri",
      experience: "8+ years",
      nextAvailable: "Tomorrow",
    },
  ];

  return (
    <Section className="bg-[#F4F9F9] py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Meet Our Specialists</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our specialist Doctors</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col group transition-all duration-500 hover:translate-y-[-8px]">
            {/* Image Placeholder */}
            <div className="aspect-square bg-slate-100 rounded-4xl overflow-hidden mb-6 relative group/img">
              <img 
                src={[
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974",
                  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964"
                ][i % 4]} 
                alt={doctor.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-wider mb-4">
                  {doctor.availability}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-sm font-bold text-primary">{doctor.specialty}</p>
              </div>

              <div className="h-px bg-slate-100 w-full"></div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-slate-500">
                  <span className="font-bold text-slate-400">Experience :</span> {doctor.experience}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  <span className="font-bold text-slate-400">Next Available :</span> {doctor.nextAvailable}
                </p>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full rounded-xl h-12 border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all group/btn" asChild>
                  <Link href="/doctors">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="pill" className="h-14 px-12 text-primary font-bold border-2" asChild>
          <Link href="/doctors">
            View All Doctors <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
