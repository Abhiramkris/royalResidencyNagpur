export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: "banquet",
    name: "Grand Banquet & Conference Hall",
    description: "Versatile indoor halls & rooftop spaces for weddings, receptions, and corporate meetings.",
    icon: "sparkles",
  },
  {
    id: "airport-proximity",
    name: "Airport Proximity (10 Mins)",
    description: "Strategically located just 3.2 km from Dr. Babasaheb Ambedkar International Airport.",
    icon: "car",
  },
  {
    id: "wifi",
    name: "Free High-Speed Wi-Fi",
    description: "Seamless fiber internet across all guest rooms, banquets, and reception areas.",
    icon: "wifi",
  },
  {
    id: "restaurant",
    name: "Multi-Cuisine Restaurant",
    description: "Delicious multi-cuisine delicacies, fresh breakfast spreads, and banquet catering.",
    icon: "utensils-crossed",
  },
  {
    id: "room-service",
    name: "24/7 Room Service",
    description: "In-room dining and hot refreshments delivered to your room whenever you need.",
    icon: "concierge-bell",
  },
  {
    id: "parking",
    name: "Secure Parking & Elevator",
    description: "Dedicated on-site vehicle parking, modern lift access, and 100% generator power backup.",
    icon: "shield-check",
  },
];
