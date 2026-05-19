import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { clinicInfo } from "@/data/site-config";
import { Button } from "@/components/ui/button";

export function VisitUsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] w-full relative bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5943939497694!2d85.32073!3d27.74072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190d2b9f7fd7%3A0x6d9f15ab6a78e6e!2sChakrapath%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1715900000000"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kunta Devi Health Care Location"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Our Location
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
                Visit Us Today
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                We are conveniently located at Chakrapath, Kathmandu — easily accessible from all major areas of the city. Walk-ins and appointments both welcome.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">Address</p>
                  <p className="text-sm text-slate-500">{clinicInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">Phone</p>
                  <Link
                    href={`tel:${clinicInfo.phone}`}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {clinicInfo.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">Working Hours</p>
                  <p className="text-sm text-slate-500">Sun – Fri: 7:00 AM – 8:00 PM</p>
                  <p className="text-sm text-slate-500">Saturday: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button
                className="h-12 px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary/90"
                asChild
              >
                <Link href="/appointment">
                  Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-xl border-slate-200 text-slate-700 font-bold hover:bg-slate-50"
                asChild
              >
                <Link
                  href={clinicInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
