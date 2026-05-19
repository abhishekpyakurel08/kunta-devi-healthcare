"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function LeadershipMessage() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800"
                alt="Leadership"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <Quote className="h-8 w-8" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              A Message From Our Leadership
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              &quot;At Kunta Devi Healthcare, we believe that every individual deserves access to 
              quality healthcare. Our commitment to excellence, compassion, and innovation drives 
              everything we do. Together with our dedicated team of healthcare professionals, 
              we are building a healthier future for our community.&quot;
            </p>
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xl font-black text-slate-900">Dr. Kunta Devi Sharma</p>
              <p className="text-slate-600 font-bold">Founder & Medical Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
