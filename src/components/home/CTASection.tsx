import Link from "next/link";
import { Container } from "../layout/container";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="bg-primary rounded-6xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl"></div>

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20">
                Contact For More Info
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Find the Right Care <br />
                for You Today
              </h2>
              <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
                Our team is ready to assist you. Whether you have a question or want to book a visit, we're just a call away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="pill" className="w-full sm:w-auto h-14 px-10 border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Call Now</Link>
              </Button>
              <Button size="pill" className="w-full sm:w-auto h-14 px-10 bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
