import { Container } from "@/components/layout/container";

export function StatsBanner() {
  const stats = [
    {
      value: "20+",
      label: "Doctors",
      title: "Experienced Doctors",
      desc: "Our highly specialized medical team ensures a world-class care for your family.",
    },
    {
      value: "200+",
      label: "Items",
      title: "Modern Equipment",
      desc: "State-of-the-art diagnostic and medical facilities at your service for accurate diagnosis.",
    },
    {
      value: "4",
      label: "Services",
      title: "Affordable Packages",
      desc: "Comprehensive health checkup packages starting from just Rs. 1500 for whole family.",
    },
    {
      value: "24h",
      label: "Service",
      title: "Fast Reports",
      desc: "Same day results for major blood tests and diagnostics so you don't have to wait.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/30">
      <Container>
        <div className="text-center mb-16 space-y-3">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The Best Choice</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Why Families Choose Kunta Devi</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="space-y-1 mb-6">
                <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[15px] font-black text-slate-900">{stat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
