import Link from "next/link";
import { Container } from "../layout/container";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-12 bg-slate-50/50">
      <Container>
        <div className="bg-primary rounded-4xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-full rounded-full bg-white/5 blur-3xl" />

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full border border-white/20">
                Start Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Your Health Shouldn&apos;t Wait
              </h2>
              <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
                Schedule your visit today and take the first step toward a healthier, longer life. 
                Our specialists are ready to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="pill"
                className="w-full sm:w-auto h-14 px-10 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button
                size="pill"
                className="w-full sm:w-auto h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold"
                asChild
              >
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
