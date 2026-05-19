"use client";

import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MissionVision() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              To provide accessible, high-quality healthcare services to every family in our community, 
              ensuring that no one is left behind due to financial or geographical barriers.
            </p>
            <Button variant="outline" className="rounded-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              To become the most trusted healthcare provider in Nepal, known for our commitment to 
              excellence, innovation, and compassionate care that transforms lives.
            </p>
            <Button variant="outline" className="rounded-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
