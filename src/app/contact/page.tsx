import { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact & Location | Hotel Ashoka Imperial & Banquet, Manish Nagar, Nagpur",
  description:
    "Contact Hotel Ashoka Imperial & Banquet, Plot No. 191, Jai Durga Society, Manish Nagar, Somalwada, Nagpur - 440015. 10 mins from airport. Phone: +91 87348 63628, Banquet: +91 84708 04805.",
  openGraph: {
    title: "Contact & Location | Hotel Ashoka Imperial & Banquet, Manish Nagar, Nagpur",
    description:
      "Get in touch with Hotel Ashoka Imperial & Banquet, Plot No. 191, Jai Durga Society, Manish Nagar, Somalwada, Nagpur. Direct front desk reservations & banquet hall bookings.",
    images: ["/assets/exterior/hero_polished.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
