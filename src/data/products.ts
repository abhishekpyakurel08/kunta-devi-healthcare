import { Pill, Activity, ShieldCheck, HeartPulse } from "lucide-react";

export const products = [
  {
    id: "first-aid-kit",
    title: "Premium First Aid Kit",
    price: "Rs. 1,500",
    description: "Essential medical supplies for home and travel emergencies.",
    icon: ShieldCheck,
    category: "Home Care",
  },
  {
    id: "glucose-monitor",
    title: "Digital Glucose Monitor",
    price: "Rs. 2,800",
    description: "Accurate and easy-to-use blood sugar monitoring device.",
    icon: Activity,
    category: "Monitoring",
  },
  {
    id: "bp-monitor",
    title: "Automatic BP Monitor",
    price: "Rs. 4,200",
    description: "Clinical grade blood pressure monitoring for daily home use.",
    icon: HeartPulse,
    category: "Monitoring",
  },
  {
    id: "pulse-oximeter",
    title: "Digital Pulse Oximeter",
    price: "Rs. 1,200",
    description: "Quick oxygen saturation and heart rate monitoring.",
    icon: Pill,
    category: "Monitoring",
  },
];
