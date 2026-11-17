export interface HotelAssetItem {
  id: string;
  title: string;
  description: string;
  category: "brand" | "exterior" | "rooms" | "dining" | "banquet" | "interior";
  categoryLabel?: string;
  year?: number;
  src: string;
  featured?: boolean;
}

export const HOTEL_ASSETS = {
  brand: {
    logo: "/assets/brand/palmshore-logo.png",
    neonSignage: "/assets/ashoka/events/2022/dsc05551.jpg",
  },
  exterior: {
    heroPolished: "/assets/ashoka/events/2022/dsc05551.jpg",
    heroExteriorDay: "/assets/ashoka/events/2026/eh2a0004.jpg",
    receptionFountain: "/assets/ashoka/events/2026/eh2a0018.jpg",
    buildingFacadeNight: "/assets/ashoka/events/2022/dsc05551.jpg",
    buildingNightWide: "/assets/ashoka/events/2022/dsc05551.jpg",
    glassStaircaseNight: "/assets/ashoka/events/2026/eh2a0900.jpg",
    glassStaircaseNightAlt: "/assets/ashoka/events/2025/dsc06250.jpg",
  },
  rooms: {
    deluxeBed: "/assets/ashoka/rooms/img_2566.jpg",
    deluxeBedAlt: "/assets/ashoka/rooms/img_2574.jpg",
    deluxeBedWide: "/assets/ashoka/rooms/img_2572.jpg",
    deluxeSeating: "/assets/ashoka/rooms/img_9512.jpg",
    deluxeWorkDesk: "/assets/ashoka/rooms/img_2569.jpg",
    deluxeBathroom: "/assets/ashoka/rooms/img_2570.jpg",
    executiveBedFront: "/assets/ashoka/rooms/img_9523.jpg",
    executiveBedSide: "/assets/ashoka/rooms/img_9516.jpg",
    suiteDiningArea: "/assets/ashoka/rooms/img_9526.jpg",
  },
  dining: {
    diningTables: "/assets/ashoka/events/2026/eh2a0902.jpg",
    diningHallWide: "/assets/ashoka/events/2026/eh2a0901.jpg",
  },
  banquet: {
    conferenceHallWide: "/assets/ashoka/events/2022/img_1268.jpg",
    conferenceHallRows: "/assets/ashoka/events/2026/eh2a0900.jpg",
    stagePodium: "/assets/ashoka/events/2022/dsc_6981.jpg",
  },
  interior: {
    lobbyLounge: "/assets/ashoka/events/2026/eh2a0018.jpg",
    corridor: "/assets/ashoka/rooms/img_9514.jpg",
  },
} as const;

export const HOTEL_GALLERY_ITEMS: HotelAssetItem[] = [
  // Exterior & Entrance
  {
    id: "exterior-facade-main",
    title: "Hotel Ashoka Imperial Building",
    description: "Modern hotel exterior with Banquet & Lawn entrance in Manish Nagar, Nagpur.",
    category: "exterior",
    categoryLabel: "Exterior",
    year: 2026,
    src: HOTEL_ASSETS.exterior.heroExteriorDay,
    featured: true,
  },
  {
    id: "exterior-facade-night",
    title: "Illuminated Grand Facade",
    description: "Night illumination showcasing the architectural glass front and signature signage.",
    category: "exterior",
    categoryLabel: "Exterior",
    year: 2022,
    src: HOTEL_ASSETS.exterior.heroPolished,
    featured: true,
  },
  {
    id: "reception-deity",
    title: "Auspicious Balaji Welcome Dais",
    description: "Traditional brass deity with oil lamps and rose petals welcoming guests at Hotel Ashoka Imperial.",
    category: "interior",
    categoryLabel: "Reception & Ambience",
    year: 2026,
    src: HOTEL_ASSETS.exterior.receptionFountain,
  },

  // Rooms
  {
    id: "deluxe-room-bed",
    title: "Deluxe King Room",
    description: "Plush king-size bed with crisp linens, modern wooden headboard, split A/C, and contemporary artwork.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.deluxeBed,
    featured: true,
  },
  {
    id: "deluxe-room-panoramic",
    title: "Deluxe Master Bedroom Suite",
    description: "Spacious master bedroom with integrated writing desk, flat TV, and comfortable seating chairs.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.deluxeBedAlt,
    featured: true,
  },
  {
    id: "executive-room-bed",
    title: "Executive Premium Room",
    description: "Warm hospitality styling with king bed, folk art mural, and bedside lighting controls.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.executiveBedFront,
    featured: true,
  },
  {
    id: "suite-room-view",
    title: "Imperial Suite Bedroom",
    description: "Air-conditioned premium suite for business executives, delegates, and wedding families.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.deluxeSeating,
  },
  {
    id: "deluxe-work-desk",
    title: "Integrated Workstation & Vanity",
    description: "Writing desk, entertainment console, luggage shelf, and electric kettle setup.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.deluxeWorkDesk,
  },
  {
    id: "deluxe-bathroom",
    title: "Modern En-Suite Bathroom",
    description: "Contemporary ceramic tiles, washbasin, western commode, and 24/7 hot water supply.",
    category: "rooms",
    categoryLabel: "Hotel Rooms",
    year: 2026,
    src: HOTEL_ASSETS.rooms.deluxeBathroom,
  },

  // Dining
  {
    id: "dining-hall",
    title: "Ashoka Imperial Restaurant & Lounge",
    description: "Multi-cuisine dining area with panoramic glass windows, royal blue and red velvet seating.",
    category: "dining",
    categoryLabel: "Restaurant & Dining",
    year: 2026,
    src: HOTEL_ASSETS.dining.diningHallWide,
    featured: true,
  },
  {
    id: "dining-buffet",
    title: "Banquet Catering & Buffet Service",
    description: "Full-course Indian and international buffet setup for weddings and corporate gatherings.",
    category: "dining",
    categoryLabel: "Restaurant & Dining",
    year: 2026,
    src: HOTEL_ASSETS.dining.diningTables,
  },

  // Banquet
  {
    id: "banquet-hall-conference",
    title: "Grand Ashoka Banquet Hall",
    description: "Expansive hall configured for 150 to 250+ guests in elegant gold satin chair sashes.",
    category: "banquet",
    categoryLabel: "Banquet & Events",
    year: 2022,
    src: HOTEL_ASSETS.banquet.conferenceHallWide,
    featured: true,
  },
  {
    id: "banquet-celebration-hall",
    title: "Celebration Hall & Red Carpet",
    description: "Air-conditioned banquet floor with red carpet aisle and party balloon styling.",
    category: "banquet",
    categoryLabel: "Banquet & Events",
    year: 2026,
    src: HOTEL_ASSETS.banquet.conferenceHallRows,
  },
  {
    id: "banquet-wedding-stage",
    title: "Grand Wedding Reception Stage",
    description: "Opulent floral canopy, fairy lights backdrop, and royal crimson velvet dais seating.",
    category: "banquet",
    categoryLabel: "Banquet & Events",
    year: 2022,
    src: HOTEL_ASSETS.banquet.stagePodium,
    featured: true,
  },
];
