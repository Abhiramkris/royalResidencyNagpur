import { Metadata } from "next";
import RoomsIndexView from "@/components/rooms/RoomsIndexView";

export const metadata: Metadata = {
  title: "Rooms & Suites | Hotel Ashoka Imperial, Manish Nagar, Nagpur",
  description:
    "Explore transparent rates and accommodations at Hotel Ashoka Imperial & Banquet, Manish Nagar, Nagpur. 5 room categories with split AC, 24/7 hot water, high-speed Wi-Fi, and 10-minute airport proximity.",
  openGraph: {
    title: "Rooms & Suites | Hotel Ashoka Imperial, Nagpur",
    description:
      "Comfortable 3-star accommodations minutes from Nagpur Airport. Standard Classic, Deluxe A/C, Executive Room, Imperial Suite & Presidential Suite.",
    images: ["/assets/ashoka/rooms/img_2574.jpg"],
  },
};

export default function RoomsPage() {
  return <RoomsIndexView />;
}
