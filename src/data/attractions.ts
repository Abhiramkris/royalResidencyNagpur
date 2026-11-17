export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  category: string;
  image: string;
}

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: "nagpur-airport",
    name: "Dr. Babasaheb Ambedkar Int'l Airport",
    distance: "10 min (3.2 km)",
    description:
      "Rapid connectivity for transit guests, domestic flyers, and business delegates traveling to and from Nagpur.",
    category: "Transit & Air Travel",
    image: "/assets/exterior/hotel-exterior-day.jpeg",
  },
  {
    id: "deekshabhoomi",
    name: "Historic Deekshabhoomi",
    distance: "15 min (5.5 km)",
    description:
      "The monumental sacred stupa of Nagpur, celebrating peace, heritage, and significant historic architecture.",
    category: "Heritage & Monument",
    image: "/assets/exterior/hotel-building-facade-night.jpeg",
  },
  {
    id: "mihan-sez",
    name: "MIHAN & South Nagpur IT SEZ",
    distance: "12 min (6.0 km)",
    description:
      "Nagpur's flagship multi-modal international cargo hub, aerospace zone, and corporate tech parks.",
    category: "Business & Tech Hub",
    image: "/assets/dining/restaurant-dining-tables.jpeg",
  },
  {
    id: "futala-lake",
    name: "Futala Lake & Waterfront Promenade",
    distance: "20 min (9.5 km)",
    description:
      "Iconic historic lake famed for colorful dancing water fountains, street food kiosks, and sunset breezes.",
    category: "Leisure & Promenade",
    image: "/assets/exterior/exterior-glass-staircase-night.jpeg",
  },
  {
    id: "ambazari-lake",
    name: "Ambazari Lake & Garden",
    distance: "15 min (6.8 km)",
    description:
      "The largest lake in Nagpur, featuring tranquil walking paths, musical fountains, and recreational boating.",
    category: "Nature & Recreation",
    image: "/assets/exterior/hotel-building-night-wide.jpeg",
  },
];
