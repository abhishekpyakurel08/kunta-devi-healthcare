import { Container } from "@/components/layout/container";

const steps = [
  {
    num: "1",
    title: "Select a Package",
    desc: "Browse our range of health screening packages and choose the one that fits your needs and budget.",
  },
  {
    num: "2",
    title: "Book Appointment",
    desc: "Pick your preferred date and time slot online. Our system confirms availability instantly.",
  },
  {
    num: "3",
    title: "Visit Our Clinic",
    desc: "Arrive at our Chakrapath center. Our staff will guide you through every step of the process.",
  },
  {
    num: "4",
    title: "Receive Results",
    desc: "Get your detailed health report same day with a follow-up consultation from our specialist.",
  },
];

export function HowBookingWorks() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/60">
      <Container>
        <div className="text-center mb-12 space-y-2">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            How Package Booking Works
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Getting your health checked is easier than ever — just four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center group z-10"
            >
              {/* Number circle */}
              <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-primary/20 mb-5 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                {step.num}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-full group-hover:shadow-xl transition-all duration-300">
                <h3 className="font-black text-slate-900 text-[15px] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
