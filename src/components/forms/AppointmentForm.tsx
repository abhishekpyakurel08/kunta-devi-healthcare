"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { Send, Calendar, User, Phone, Mail, MessageSquare, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  date: z.string().min(1, "Preferred date is required"),
  doctor: z.string().min(1, "Please select a doctor"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulating API call
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Appointment request sent! We will contact you shortly.");
    reset();
  };

  return (
    <Card className="border-none shadow-2xl rounded-6xl overflow-hidden bg-white">
      <CardContent className="p-8 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Full Name
              </label>
              <input
                {...register("name")}
                className="w-full h-14 rounded-2xl border border-border px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> Phone Number
              </label>
              <input
                {...register("phone")}
                className="w-full h-14 rounded-2xl border border-border px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="+977-98XXXXXXXX"
              />
              {errors.phone && <p className="text-xs text-red-500 font-bold">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Preferred Date
              </label>
              <input
                type="date"
                {...register("date")}
                className="w-full h-14 rounded-2xl border border-border px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {errors.date && <p className="text-xs text-red-500 font-bold">{errors.date.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Service Required
              </label>
              <select
                {...register("service")}
                className="w-full h-14 rounded-2xl border border-border px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white appearance-none"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-red-500 font-bold">{errors.service.message}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Preferred Doctor
              </label>
              <select
                {...register("doctor")}
                className="w-full h-14 rounded-2xl border border-border px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white appearance-none"
              >
                <option value="">Select Doctor</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.name}>{d.name} ({d.specialization})</option>
                ))}
              </select>
              {errors.doctor && <p className="text-xs text-red-500 font-bold">{errors.doctor.message}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" /> Additional Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full rounded-2xl border border-border p-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Tell us about your symptoms or any specific requirements..."
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 group"
          >
            {isSubmitting ? "Sending..." : (
              <>
                Confirm Appointment Request <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
