"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Award } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with empathy and care, understanding that healing begins with kindness.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our practices and decisions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously embrace new technologies and methods to improve patient outcomes.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of healthcare delivery, from diagnosis to treatment.",
    },
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
            Values That Guide Everything We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
