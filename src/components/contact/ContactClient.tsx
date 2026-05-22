"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, AlertTriangle, MapPin, Clock, Mail, ChevronDown, ChevronUp, Check, Navigation, PhoneCall, MessageSquare, ArrowRight } from "lucide-react";
import { clinicInfo } from "@/data/site-config";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ContactClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are walk-ins accepted?",
      answer: "Yes, we welcome walk-in patients for general consultations. However, for specialist appointments, we recommend booking in advance to minimize wait times."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we provide free parking for our patients. Our parking area is located behind the main building and is easily accessible from the main entrance."
    },
    {
      question: "Are you open on Saturday?",
      answer: "Our main clinic operates Sunday through Friday. Saturday hours may vary for specific departments like the laboratory and product counter. Please call ahead for Saturday availability."
    },
    {
      question: "Can I collect reports later?",
      answer: "Absolutely. You can collect your lab reports during our operating hours. We also offer digital report delivery via email or WhatsApp for your convenience."
    },
    {
      question: "Can someone pick up medicine for me?",
      answer: "Yes, with proper authorization and prescription verification, a family member or representative can collect medicines on your behalf. Please ensure they carry the original prescription."
    }
  ];

  const departments = [
    { name: "Consultation Hours", hours: "Sun-Fri 7AM–7PM", note: "Walk-ins welcome", badge: "Open Now", isEmergency: false },
    { name: "Laboratory Hours", hours: "Sun-Fri 7AM–5PM", note: "Fasting samples by 9AM", badge: "Open Now", isEmergency: false },
    { name: "Product Counter", hours: "Sun-Fri 8AM–7PM", note: "Genuine registered products", badge: "Open Now", isEmergency: false },
    { name: "Report Collection", hours: "Sun-Fri 7AM–7PM", note: "", badge: "Open Now", isEmergency: false },
    { name: "Appointment Desk", hours: "Sun-Fri 7AM–6PM", note: "", badge: "Open Now", isEmergency: false },
    { name: "Emergency Desk", hours: "Always Available", note: "", badge: "24/7", isEmergency: true },
  ];

  const departmentContacts = [
    { department: "Reception", phone: "+977-01-4770912", whatsapp: "+9779851027120", availability: "Sun-Fri 7AM-7PM" },
    { department: "Appointment Desk", phone: "+977-01-4770912", whatsapp: "+9779851027120", availability: "Sun-Fri 7AM-6PM" },
    { department: "Diagnostics/Lab", phone: "+977-01-4770913", whatsapp: "+9779851027120", availability: "Sun-Fri 7AM-5PM" },
    { department: "Products Counter", phone: "+977-01-4770913", whatsapp: "+9779851027120", availability: "Sun-Fri 8AM-7PM" },
    { department: "Corporate Wellness", phone: "+977-01-4770912", whatsapp: "+9779851027120", availability: "Sun-Fri 9AM-5PM" },
    { department: "Emergency Desk", phone: "+9779851027120", whatsapp: "+9779851027120", availability: "24/7 Available", isEmergency: true },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Open Now Badge */}
      <div className="fixed top-[60px] md:top-[64px] lg:top-[72px] left-0 right-0 z-40 bg-[#2A9D8F] text-white text-center py-2 text-sm font-semibold">
        <span className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
          Open Now - Sunday to Friday 7:00 AM - 7:00 PM
        </span>
      </div>

      <div className="grow pt-8">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-[#f0fafa] to-white pt-16 pb-20 md:pt-20 md:pb-24">
          <Container>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">CONTACT US</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight leading-tight">
                We're Here When Your Family Needs Care
              </h1>
              <p className="text-text-body text-base md:text-lg max-w-2xl mx-auto">
                Reach out to us using any of the quick contact channels or visit our modern clinic located at Ghatekulo.
              </p>
            </div>
          </Container>
        </section>

        {/* Quick Contact Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">QUICK CONTACT</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Reach Us Your Way</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Call Reception */}
                <div className="bg-white border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-full bg-[#f0fafa] flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-[#0A7075]" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Call Reception</h3>
                  <p className="text-text-body text-sm mb-4">Speak with our front desk team</p>
                  <p className="text-[#0A7075] font-semibold mb-4">{clinicInfo.phone}</p>
                  <Button className="w-full bg-[#0A7075] hover:bg-primary-dark" asChild>
                    <Link href={`tel:${clinicInfo.phone}`}>Call Now</Link>
                  </Button>
                </div>

                {/* WhatsApp Support */}
                <div className="bg-white border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-full bg-[#f0fafa] flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-[#2A9D8F]" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">WhatsApp Support</h3>
                  <p className="text-text-body text-sm mb-4">Message us for quick response</p>
                  <p className="text-[#2A9D8F] font-semibold mb-4">{clinicInfo.whatsapp}</p>
                  <Button className="w-full bg-[#2A9D8F] hover:bg-[#238b7e]" asChild>
                    <Link href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank">Chat Now</Link>
                  </Button>
                </div>

                {/* Book Appointment - Highlighted */}
                <div className="bg-secondary rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-[#2A9D8F] text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Available 24/7
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Book Appointment</h3>
                  <p className="text-white/80 text-sm mb-4">Schedule your consultation</p>
                  <Button className="w-full bg-white text-secondary hover:bg-gray-100" asChild>
                    <Link href="/appointment">Book Now</Link>
                  </Button>
                </div>

                {/* Emergency Contact - Red Accent */}
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-red-700 mb-2">Emergency Contact</h3>
                  <p className="text-red-600/80 text-sm mb-4">Urgent medical assistance</p>
                  <p className="text-red-600 font-semibold mb-4">{clinicInfo.emergencyPhone}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href={`tel:${clinicInfo.emergencyPhone}`}>Call Emergency</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Location + Info Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5097847726656!2d85.32570197486383!3d27.701542276185954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a6c69780e9%3A0x91899f6bea372bcc!2sKunta%20Devi%20Health%20Care%20%26%20Diagnostic%20Centre%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1779280240950!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">HEALTH RESOURCES</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Visit Us Today</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0A7075]/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#0A7075]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary mb-1">Address</h4>
                        <p className="text-text-body">Ghatekulo, Kathmandu, Nepal</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0A7075]/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-[#0A7075]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary mb-1">Phone</h4>
                        <p className="text-text-body">+977-01-XXXXXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0A7075]/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-[#0A7075]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary mb-1">Email</h4>
                        <p className="text-text-body">info@kuntadevi.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0A7075]/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-[#0A7075]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary mb-1">Hours</h4>
                        <p className="text-text-body">Sunday – Friday: 7:00 AM – 7:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href="https://maps.google.com" target="_blank">
                        Get Direction <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button className="flex-1 bg-[#0A7075] hover:bg-primary-dark" asChild>
                      <Link href="/appointment">Book Appointment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Department Hours Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">DEPARTMENT HOURS</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Plan Your Visit</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className={cn(
                      "rounded-2xl p-6 shadow-lg transition-all",
                      dept.isEmergency
                        ? "bg-red-50 border-2 border-red-200"
                        : "bg-[#f0fafa] border border-border"
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center">
                        <Clock className={cn("h-5 w-5", dept.isEmergency ? "text-red-600" : "text-[#0A7075]")} />
                      </div>
                      <span
                        className={cn(
                          "text-xs px-3 py-1 rounded-full font-semibold",
                          dept.isEmergency
                            ? "bg-red-600 text-white"
                            : "bg-[#2A9D8F] text-white"
                        )}
                      >
                        {dept.badge}
                      </span>
                    </div>
                    <h3 className={cn("font-bold mb-2", dept.isEmergency ? "text-red-700" : "text-secondary")}>
                      {dept.name}
                    </h3>
                    <p className={cn("text-sm mb-2", dept.isEmergency ? "text-red-600" : "text-text-body")}>
                      {dept.hours}
                    </p>
                    {dept.note && (
                      <p className="text-xs text-text-body mb-4">{dept.note}</p>
                    )}
                    {dept.isEmergency ? (
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                        <Link href={`tel:${clinicInfo.emergencyPhone}`}>Get Emergency Now</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/appointment">Book Appointment</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Department Contacts Table */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">DEPARTMENT CONTACTS</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Reach the Right Team</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Department</th>
                        <th className="px-6 py-4 text-left font-semibold">Phone Number</th>
                        <th className="px-6 py-4 text-left font-semibold">WhatsApp</th>
                        <th className="px-6 py-4 text-left font-semibold">Availability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentContacts.map((contact, i) => (
                        <tr
                          key={i}
                          className={cn(
                            "border-b border-border",
                            contact.isEmergency ? "bg-red-50" : ""
                          )}
                        >
                          <td className={cn("px-6 py-4 font-semibold", contact.isEmergency ? "text-red-700" : "text-secondary")}>
                            {contact.department}
                          </td>
                          <td className="px-6 py-4 text-text-body">{contact.phone}</td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm" className="h-8 text-xs" asChild>
                              <Link href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                Chat on WhatsApp
                              </Link>
                            </Button>
                          </td>
                          <td className={cn("px-6 py-4 text-sm", contact.isEmergency ? "text-red-600 font-semibold" : "text-text-body")}>
                            {contact.availability}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Transport Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-white">
            <Container>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] lg:h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600"
                    alt="Clinic facilities"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Getting Here Made Easy</h2>

                  <div className="space-y-4">
                    {[
                      "Nearby public transport options",
                      "Free parking available for patients",
                      "Wheelchair accessible entrance",
                      "Elevator access to all floors",
                      "Easy drop-off zone at main entrance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#2A9D8F] flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-text-body">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      <Navigation className="mr-2 h-4 w-4" />
                      View Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-[#f0fafa]">
            <Container>
              <div className="text-center mb-12 space-y-3">
                <span className="text-[#0A7075] font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">Common Questions About Our Clinic</h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-secondary">{faq.question}</span>
                      {openFaq === i ? (
                        <ChevronUp className="h-5 w-5 text-[#0A7075]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#0A7075]" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-text-body">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Emergency CTA Banner */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-red-50">
            <Container>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center mx-auto">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700">Need Immediate Medical Help?</h3>
                <p className="text-red-600/80 text-lg">
                  Our ER team is on standby 24/7. Don't wait — call emergency services or visit our emergency desk immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link href={`tel:${clinicInfo.emergencyPhone}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call Emergency Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                    <Link href="https://maps.google.com" target="_blank">Get Directions</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Main CTA Banner */}
        <ScrollReveal>
          <section className="py-16 md:py-24 bg-linear-to-r from-[#0A7075] to-[#2A9D8F]">
            <Container>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Experience Trusted Healthcare in Person</h2>
                <p className="text-white/90 text-lg">
                  Book your appointment today and receive compassionate care from our experienced medical team. Your health is our priority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0A7075] h-12 px-8" asChild>
                    <Link href="/appointment">Make Consultation</Link>
                  </Button>
                  <Button className="bg-white text-[#0A7075] hover:bg-gray-100 h-12 px-8" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
