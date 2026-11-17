import { Metadata } from "next";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Photo & Event Gallery | Hotel Ashoka Imperial & Banquet, Manish Nagar, Nagpur",
  description:
    "Explore the visual journey of Hotel Ashoka Imperial & Banquet in Manish Nagar, Nagpur. Real photography of deluxe rooms, wedding reception stages, birthday party decor, grand banquet hall, and Ashoka restaurant.",
  openGraph: {
    title: "Photo & Event Gallery | Hotel Ashoka Imperial & Banquet, Nagpur",
    description:
      "Explore real photographs of guest rooms, wedding stages, themed birthday celebrations, and grand banquet hall facilities at Hotel Ashoka Imperial, Manish Nagar, Nagpur.",
    images: ["/assets/ashoka/events/2022/dsc05551.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
