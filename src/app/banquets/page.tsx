import { Metadata } from "next";
import BanquetsView from "@/components/venues/BanquetsView";

export const metadata: Metadata = {
  title: "Grand Ashoka Banquet Hall & Events | Manish Nagar, Nagpur",
  description:
    "Host weddings, receptions, birthday parties, and corporate conferences at Grand Ashoka Banquet Hall in Manish Nagar, Nagpur. 50 to 250+ capacity, stage setups, and catering.",
  openGraph: {
    title: "Grand Ashoka Banquet Hall & Events | Nagpur",
    description:
      "Premier air-conditioned banquet hall in South Nagpur for 50 to 250+ guests. Weddings, themed birthdays, seminars, and catering.",
    images: ["/assets/ashoka/events/2022/dsc_6981.jpg"],
  },
};

export default function BanquetsPage() {
  return <BanquetsView />;
}
