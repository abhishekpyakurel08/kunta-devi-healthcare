import { Heart, Activity, Baby, Pill, ShieldCheck, UserCog, ClipboardList, Stethoscope, Brain, Bone } from "lucide-react";

export const services = [
  {
    id: "general-opd",
    name: "General OPD & Primary Care",
    category: "General Medicine",
    ageGroup: "All",
    description: "Comprehensive medical checkups and primary care for all age groups. Our experienced general physicians provide holistic healthcare services including routine checkups, preventive care, and treatment for common illnesses.",
    activities: ["General Consultations", "Basic Assessment", "Health Screenings", "Vaccination"],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600",
    popular: true,
    whatsapp: "+9779800000001"
  },
  {
    id: "cardiology",
    name: "Cardiology Services",
    category: "Specialized Care",
    ageGroup: "Adult",
    description: "Expert cardiac care including ECG, echocardiography, and heart failure management. Our cardiologists specialize in preventive cardiology and interventional procedures.",
    activities: ["ECG", "Echocardiogram", "Stress Test", "Cardiac Consultation"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600",
    popular: true,
    whatsapp: "+9779800000001"
  },
  {
    id: "maternal-health",
    name: "Maternal & Child Health",
    category: "Maternal Care",
    ageGroup: "Maternal",
    description: "Comprehensive care for expectant mothers, from prenatal to postnatal support. Includes ultrasound monitoring, antenatal checkups, and postnatal care.",
    activities: ["Prenatal Checkups", "Ultrasound", "Postnatal Care", "Immunization"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600",
    popular: true,
    whatsapp: "+9779800000004"
  },
  {
    id: "pediatric-care",
    name: "Pediatric Care",
    category: "Child Care",
    ageGroup: "Pediatric",
    description: "Dedicated healthcare services for infants, children, and adolescents. Our pediatricians provide child-friendly care including growth monitoring and vaccination.",
    activities: ["Child Consultations", "Growth Monitoring", "Vaccination", "Developmental Assessment"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
    popular: true,
    whatsapp: "+9779800000005"
  },
  {
    id: "orthopedics",
    name: "Orthopedic Services",
    category: "Specialized Care",
    ageGroup: "All",
    description: "Comprehensive orthopedic care including joint replacement, sports injury management, and spine surgery. Our orthopedic surgeons treat bone and joint conditions.",
    activities: ["Joint Replacement", "Sports Injury Treatment", "Spine Surgery", "Physiotherapy"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600",
    popular: false,
    whatsapp: "+9779800000008"
  },
  {
    id: "dermatology",
    name: "Dermatology Services",
    category: "Specialized Care",
    ageGroup: "All",
    description: "Expert skin care services including treatment for skin diseases, cosmetic dermatology, and acne treatment. Our dermatologists provide personalized skin care solutions.",
    activities: ["Skin Disease Treatment", "Cosmetic Procedures", "Acne Treatment", "Skin Cancer Screening"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600",
    popular: false,
    whatsapp: "+9779800000007"
  },
  {
    id: "radiology",
    name: "Diagnostic Radiology",
    category: "Diagnostics",
    ageGroup: "All",
    description: "Advanced diagnostic imaging services including X-Ray, CT Scan, MRI, and Ultrasound. Our radiologists provide accurate interpretations for precise diagnosis.",
    activities: ["X-Ray", "CT Scan", "MRI", "Ultrasound"],
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=600",
    popular: true,
    whatsapp: "+9779800000006"
  },
  {
    id: "preventive-healthcare",
    name: "Preventive Healthcare",
    category: "Preventive Care",
    ageGroup: "Adult",
    description: "Health screenings and advice to prevent chronic illnesses before they start. Includes comprehensive health checkups and lifestyle counseling.",
    activities: ["Health Screenings", "Risk Assessment", "Lifestyle Counseling", "Vaccination"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600",
    popular: false,
    whatsapp: "+9779800000001"
  },
  {
    id: "neurology",
    name: "Neurology Services",
    category: "Specialized Care",
    ageGroup: "Adult",
    description: "Specialized care for neurological conditions including headache, stroke, epilepsy, and movement disorders. Our neurologists provide comprehensive brain and nerve care.",
    activities: ["Neurological Consultation", "EEG", "Stroke Management", "Headache Treatment"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600",
    popular: false,
    whatsapp: "+9779800000001"
  },
  {
    id: "geriatric-care",
    name: "Geriatric Care",
    category: "Specialized Care",
    ageGroup: "Senior",
    description: "Specialized healthcare services for elderly patients focusing on age-related conditions, chronic disease management, and quality of life improvement.",
    activities: ["Geriatric Assessment", "Chronic Disease Management", "Medication Review", "Fall Prevention"],
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=600",
    popular: false,
    whatsapp: "+9779800000001"
  }
];
