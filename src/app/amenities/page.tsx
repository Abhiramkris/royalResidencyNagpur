import { Metadata } from "next";
import AmenitiesView from "@/components/amenities/AmenitiesView";

export const metadata: Metadata = {
  title: "Amenities & Guest Services | Hotel Ashoka Imperial, Nagpur",
  description:
    "Explore guest amenities at Hotel Ashoka Imperial & Banquet, Manish Nagar, Nagpur. Split A/C, 24/7 hot water, high-speed Wi-Fi, elevator, 100% generator backup, and banquet hall.",
  openGraph: {
    title: "Amenities & Guest Services | Hotel Ashoka Imperial, Nagpur",
    description:
      "Modern facilities and services in Manish Nagar, Nagpur. 10 mins from airport, generator backup, restaurant, and grand banquet.",
    images: ["/assets/ashoka/rooms/img_2566.jpg"],
  },
};

export default function AmenitiesPage() {
  return <AmenitiesView />;
}
