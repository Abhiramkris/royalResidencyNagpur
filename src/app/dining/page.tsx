import { Metadata } from "next";
import DiningView from "@/components/venues/DiningView";

export const metadata: Metadata = {
  title: "Ashoka Imperial Restaurant & Dining | Manish Nagar, Nagpur",
  description:
    "Multi-cuisine dining, buffet breakfasts, tandoori specialties, and full-service banquet catering at Hotel Ashoka Imperial, Manish Nagar, Nagpur.",
  openGraph: {
    title: "Ashoka Imperial Restaurant & Dining | Nagpur",
    description:
      "Experience fine dining, regional Saoji delicacies, and banquet catering in Manish Nagar, Nagpur. 10 mins from airport.",
    images: ["/assets/ashoka/events/2026/eh2a0901.jpg"],
  },
};

export default function DiningPage() {
  return <DiningView />;
}
