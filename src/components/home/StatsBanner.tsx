import { Container } from "@/components/layout/container";

export function StatsBanner() {
  const stats = [
    {
      label: "20+",
      title: "Specialist Doctors",
      sub: "Across 15 + disciplines",
    },
    {
      label: "10+",
      title: "Years of Service",
      sub: "Since 2014 in Kathmandu",
    },
    {
      label: "5000+",
      title: "Patients Served",
      sub: "And growing every month",
    },
    {
      label: "24/7",
      title: "Patients Support",
      sub: "Always here for you",
    },
  ];

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Decorative overlapping circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Why Families Trust Us</h2>
          <p className="text-white/90 text-sm font-medium">Proven results. Real care. Every visit.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/5 p-10 rounded-4xl text-left space-y-4 group hover:bg-white/15 transition-all duration-300">
              <p className="text-5xl lg:text-6xl font-black text-white tracking-tighter">{stat.label}</p>
              <div className="space-y-1">
                <p className="text-xl font-bold text-white leading-tight">{stat.title}</p>
                <p className="text-xs font-medium text-white/70">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
