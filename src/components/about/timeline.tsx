"use client";

import { motion } from "framer-motion";

export function Timeline() {
  const milestones = [
    { year: "2014", title: "Founded", description: "Kunta Devi Healthcare was established with a vision to serve the community." },
    { year: "2016", title: "Expansion", description: "Expanded our facilities and added new specialized departments." },
    { year: "2020", title: "New Services", description: "Introduced advanced diagnostic and treatment services." },
    { year: "2024", title: "Digital Transformation", description: "Launched digital health services and patient portal." },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            A Decade Of Growth and Commitment
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-primary rounded-full border-4 border-white shadow-lg z-10" />

                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg text-center">
                  <div className="text-4xl font-black text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
