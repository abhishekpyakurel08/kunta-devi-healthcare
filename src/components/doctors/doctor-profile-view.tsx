"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DoctorProfileViewProps {
  doctor: {
    id: string;
    name: string;
    image: string;
    qualification: string;
    specialization: string;
    experience: string;
    rating: number;
    reviews: number;
    about: string;
    expertise: string[];
    schedule: { day: string; time: string; available: boolean }[];
  };
}

export function DoctorProfileView({ doctor }: DoctorProfileViewProps) {
  const [activeDay, setActiveDay] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            Doctor Profile
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
            Doctor&apos;s Profile View
          </h1>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-4xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Panel - Doctor Image */}
            <div className="relative aspect-[4/5] md:aspect-auto">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <h3 className="text-2xl font-black text-white">{doctor.name}</h3>
                <p className="text-sm font-bold text-slate-300 mt-1">
                  {doctor.qualification}
                </p>
              </div>
            </div>

            {/* Right Panel - Doctor Details */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Name and Credentials */}
              <div>
                <h2 className="text-3xl font-black text-slate-900">{doctor.name}</h2>
                <p className="text-lg font-bold text-slate-600 mt-2">
                  {doctor.qualification} | {doctor.specialization} | {doctor.experience}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-600">
                    {doctor.rating} ({doctor.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-3">About</h3>
                <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
              </div>

              {/* Expertise Section */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Consultation Schedule */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Consultation Schedule
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {doctor.schedule.map((slot, index) => (
                    <motion.div
                      key={slot.day}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => slot.available && setActiveDay(slot.day)}
                      className={`p-4 rounded-2xl text-center cursor-pointer transition-all ${
                        slot.available
                          ? "bg-slate-50 hover:bg-primary hover:text-white border-2 border-slate-100 hover:border-primary"
                          : "bg-slate-100 opacity-50 cursor-not-allowed"
                      } ${activeDay === slot.day ? "bg-primary text-white border-primary" : ""}`}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-1">
                        {slot.day}
                      </p>
                      <p className="text-sm font-black">{slot.time}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black shadow-xl shadow-primary/20">
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-14 rounded-2xl border-2 border-primary text-primary hover:bg-primary/10 font-black"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Whatsapp Doctor Desk
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
