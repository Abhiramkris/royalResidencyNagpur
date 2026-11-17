export interface RoomType {
  slug: string;
  name: string;
  tagline: string;
  rate: number; // in INR
  extraPersonRate: number; // in INR
  capacity: {
    baseGuests: number;
    maxGuests: number;
  };
  bedType: string;
  size: string;
  view: string;
  bathroom: string;
  airConditioned: boolean;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  amenities: {
    name: string;
    icon: string;
  }[];
  primaryImage: string;
  gallery: {
    src: string;
    caption: string;
  }[];
}

export const EXTRA_PERSON_RATE = 400;
export const TAX_PERCENTAGE = 12;

export interface BookingTypeOption {
  slug: string;
  name: string;
  category: "room" | "venue" | "dining";
  rateLabel: string;
}

export const ALL_BOOKING_TYPES: BookingTypeOption[] = [
  { slug: "standard-non-ac", name: "Standard Classic Room", category: "room", rateLabel: "₹1,870 / night" },
  { slug: "standard-ac", name: "Deluxe A/C Room", category: "room", rateLabel: "₹2,140 / night" },
  { slug: "executive-room", name: "Executive Room", category: "room", rateLabel: "₹2,530 / night" },
  { slug: "suite-room", name: "Imperial Suite Room", category: "room", rateLabel: "₹2,960 / night" },
  { slug: "premium-suite", name: "Ashoka Presidential Suite", category: "room", rateLabel: "₹3,470 / night" },
  { slug: "grand-banquet-hall", name: "Grand Ashoka Banquet Hall", category: "venue", rateLabel: "150-250 Capacity Event Dais" },
  { slug: "ashoka-restaurant", name: "Ashoka Imperial Restaurant & Dining", category: "dining", rateLabel: "Multi-Cuisine Dining" },
];

export const HOTEL_ROOMS: RoomType[] = [
  {
    slug: "standard-non-ac",
    name: "Standard Classic Room",
    tagline: "Economical comfort in the heart of Manish Nagar, Nagpur",
    rate: 1870,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "Queen Bed",
    size: "240 sq.ft (22 m²)",
    view: "Manish Nagar City View",
    bathroom: "Private En-Suite with Hot Shower",
    airConditioned: false,
    shortDescription:
      "Comfortable city-facing room with queen bed, clean linens, and convenient proximity to Nagpur Airport.",
    fullDescription:
      "Our Standard Classic Room offers peaceful comfort in Manish Nagar, Nagpur. Located just 10 minutes from Dr. Babasaheb Ambedkar International Airport, this thoughtfully appointed room features a comfortable queen-size bed draped in crisp white linens, contemporary furnishings, an en-suite ceramic-tiled bathroom with continuous hot water, and a work desk.",
    highlights: [
      "Convenient Manish Nagar location just 10 mins from airport",
      "Private en-suite bathroom with 24/7 hot water supply",
      "Writing desk, vanity mirror, and intercom connection",
      "Daily housekeeping & room service on call",
    ],
    amenities: [
      { name: "Ceiling Fan", icon: "fan" },
      { name: "En-Suite Bath", icon: "bath" },
      { name: "24/7 Hot Water", icon: "droplets" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Writing Desk", icon: "pen-tool" },
      { name: "Room Service", icon: "bell" },
      { name: "Daily Housekeeping", icon: "sparkles" },
      { name: "Intercom", icon: "phone" },
    ],
    primaryImage: "/assets/ashoka/rooms/img_2566.jpg",
    gallery: [
      {
        src: "/assets/ashoka/rooms/img_2566.jpg",
        caption: "Queen Bed with clean linens and bedside controls",
      },
      {
        src: "/assets/ashoka/rooms/img_2569.jpg",
        caption: "Dedicated dressing vanity, writing desk, and mirror",
      },
      {
        src: "/assets/ashoka/rooms/img_2570.jpg",
        caption: "Contemporary private bathroom with walk-in glass shower",
      },
      {
        src: "/assets/ashoka/rooms/img_9514.jpg",
        caption: "Tranquil guest corridor leading to courtyard gardens",
      },
    ],
  },
  {
    slug: "standard-ac",
    name: "Deluxe A/C Room",
    tagline: "Climate-controlled comfort minutes from Nagpur Airport",
    rate: 2140,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "King Bed",
    size: "270 sq.ft (25 m²)",
    view: "Manish Nagar City & Boulevard View",
    bathroom: "Glass Shower Cubicle & Modern Vanity",
    airConditioned: true,
    shortDescription:
      "Climate-controlled comfort with plush king bed, rain shower, and modern amenities.",
    fullDescription:
      "The Deluxe A/C Room combines crisp modern climate control with restful comfort. Relax on a generous king-size bed fitted with premium mattress toppers and accent pillows. Complete with a flat-screen television, complimentary high-speed Wi-Fi, and a contemporary bathroom with rain shower, it delivers effortless comfort whether traveling on business or attending celebrations in Nagpur.",
    highlights: [
      "Whisper-quiet split air-conditioning with individual remote",
      "Spacious king bed with custom headboard nightstands",
      "Flat-screen television with satellite channels",
      "En-suite bathroom with glass shower partition",
    ],
    amenities: [
      { name: "Split Air Conditioning", icon: "snowflake" },
      { name: "King-Size Bed", icon: "bed" },
      { name: "Glass Rain Shower", icon: "bath" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "LED Television", icon: "tv" },
      { name: "In-Room Safe", icon: "shield-check" },
      { name: "Tea & Coffee Kettle", icon: "coffee" },
      { name: "24/7 Room Service", icon: "bell" },
    ],
    primaryImage: "/assets/ashoka/rooms/img_2572.jpg",
    gallery: [
      {
        src: "/assets/ashoka/rooms/img_2572.jpg",
        caption: "King-size bed with custom headboard lighting",
      },
      {
        src: "/assets/ashoka/rooms/img_2574.jpg",
        caption: "Wide view showing full room floorplan and accent rug",
      },
      {
        src: "/assets/ashoka/rooms/img_2570.jpg",
        caption: "Sleek bathroom with frosted glass shower enclosure",
      },
      {
        src: "/assets/ashoka/rooms/img_2569.jpg",
        caption: "Entertainment wall with flat-screen television & luggage bench",
      },
    ],
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    tagline: "Refined aesthetic, premium warm tones, and armchair lounge",
    rate: 2530,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "Executive King Bed",
    size: "320 sq.ft (30 m²)",
    view: "South Nagpur Skyline View",
    bathroom: "Designer Walk-in Rain Shower & Bath Amenities",
    airConditioned: true,
    shortDescription:
      "Spacious room with king bed, handcrafted armchair lounge, and executive work desk.",
    fullDescription:
      "Designed for travelers who value refined detailing and extra room to unwind, our Executive Room boasts elegant modern accents, high ceilings, and an en-suite sitting lounge with twin armchairs. Ideal for both transit flyers, wedding attendees, and corporate executives seeking a restful haven in Manish Nagar with high-speed connectivity.",
    highlights: [
      "Executive lounge corner with solid-wood armchairs & coffee table",
      "Warm ambient lighting with brass floor lamp and bedside sconces",
      "Executive workstation with universal power sockets & fast Wi-Fi",
      "Upgraded bathroom amenities & plush luxury cotton bathrobes",
    ],
    amenities: [
      { name: "Climate Control AC", icon: "snowflake" },
      { name: "Armchair Lounge Area", icon: "armchair" },
      { name: "Executive Work Desk", icon: "laptop" },
      { name: "Premium Rain Shower", icon: "bath" },
      { name: "Smart TV with Streaming", icon: "tv" },
      { name: "Mini Bar & Fridge", icon: "wine" },
      { name: "Complimentary Bottled Water", icon: "droplet" },
      { name: "Express Laundry Service", icon: "shirt" },
    ],
    primaryImage: "/assets/ashoka/rooms/img_9512.jpg",
    gallery: [
      {
        src: "/assets/ashoka/rooms/img_9512.jpg",
        caption: "Artisanal gold and maroon detailing on king bed",
      },
      {
        src: "/assets/ashoka/rooms/img_9516.jpg",
        caption: "Side perspective with handcrafted armchairs and brass lighting",
      },
      {
        src: "/assets/ashoka/rooms/img_2574.jpg",
        caption: "Private seating corner with framed fine art prints",
      },
      {
        src: "/assets/ashoka/rooms/img_2570.jpg",
        caption: "Immaculate en-suite bath with modern fixtures",
      },
    ],
  },
  {
    slug: "suite-room",
    name: "Imperial Suite Room",
    tagline: "Expansive luxury living with private glass dining table",
    rate: 2960,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 4,
    },
    bedType: "Master King Bed",
    size: "420 sq.ft (39 m²)",
    view: "Panoramic City & Terrace View",
    bathroom: "Spacious En-Suite with Glass Partition & Vanity",
    airConditioned: true,
    shortDescription:
      "Grand suite with master bedroom and a private 4-seater glass dining area.",
    fullDescription:
      "The Imperial Suite Room is our signature accommodation for discerning families and guests. Featuring a distinct architectural division between sleeping and dining quarters, it showcases a designer glass dining table with four upholstered chairs, warm ambient lighting, multiple entertainment screens, and expansive windows welcoming morning sun.",
    highlights: [
      "In-suite private glass dining table for 4 guests",
      "Spacious separated layout for relaxation and dining",
      "Multiple LED televisions with premium streaming options",
      "Personalized front-desk check-in & priority concierge",
    ],
    amenities: [
      { name: "Private Dining Area", icon: "utensils" },
      { name: "Master King Bed", icon: "bed" },
      { name: "Split AC in all zones", icon: "snowflake" },
      { name: "Mini Refrigerator", icon: "refrigerator" },
      { name: "Gourmet Coffee Station", icon: "coffee" },
      { name: "In-Room Dining Service", icon: "bell" },
      { name: "Electronic Safe", icon: "shield-check" },
      { name: "Deluxe Bath Products", icon: "sparkles" },
    ],
    primaryImage: "/assets/ashoka/rooms/img_9523.jpg",
    gallery: [
      {
        src: "/assets/ashoka/rooms/img_9523.jpg",
        caption: "Private four-seater glass dining suite with wall TV and art niches",
      },
      {
        src: "/assets/ashoka/rooms/img_2574.jpg",
        caption: "Master king bedroom with deep charcoal accents and shaggy rug",
      },
      {
        src: "/assets/ashoka/rooms/img_2574.jpg",
        caption: "Adjacent sitting area for evening tea",
      },
      {
        src: "/assets/ashoka/rooms/img_2569.jpg",
        caption: "Full vanity console, dressing mirror, and tea station",
      },
      {
        src: "/assets/ashoka/rooms/img_2570.jpg",
        caption: "Contemporary bathroom suite with rain shower",
      },
    ],
  },
  {
    slug: "premium-suite",
    name: "Ashoka Presidential Suite",
    tagline: "The pinnacle of Ashoka Imperial luxury and hospitality in South Nagpur",
    rate: 3470,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 4,
    },
    bedType: "Grand King Bed",
    size: "520 sq.ft (48 m²)",
    view: "Panoramic City & Nagpur Airport Horizon View",
    bathroom: "Luxury Spa Rain Shower, Hair Dryer & Deluxe Toiletries",
    airConditioned: true,
    shortDescription:
      "Our most prestigious suite with panoramic views, private dining area, and VIP care.",
    fullDescription:
      "The Ashoka Presidential Suite is our most spacious and prestigious accommodation at Hotel Ashoka Imperial & Banquet. Designed for supreme comfort, it features an expansive master bedroom, dedicated dining area for in-room family meals, executive work desk, and deluxe bath amenities. Perfect for families, wedding VIPs, or travelers seeking the finest hospitality in Manish Nagar.",
    highlights: [
      "Largest floor plan on property with dedicated dining area & master bedroom",
      "Complimentary chef-curated gourmet breakfast delivered to suite",
      "Private glass dining area with high-definition smart TV",
      "Priority check-in, late check-out upon request, and VIP turn-down service",
    ],
    amenities: [
      { name: "Private Dining Area", icon: "utensils" },
      { name: "Grand King Bed", icon: "bed" },
      { name: "Multi-Zone Climate Control", icon: "snowflake" },
      { name: "Complimentary Gourmet Breakfast", icon: "croissant" },
      { name: "Stocked Mini Bar", icon: "wine" },
      { name: "High-Speed Fiber Wi-Fi", icon: "wifi" },
      { name: "Luxury Bathrobes & Slippers", icon: "sparkles" },
      { name: "24/7 Room Service & Care", icon: "bell-ring" },
    ],
    primaryImage: "/assets/ashoka/rooms/img_9512.jpg",
    gallery: [
      {
        src: "/assets/ashoka/rooms/img_9512.jpg",
        caption: "Grand king bedroom with ornate detailing and designer headboard",
      },
      {
        src: "/assets/ashoka/rooms/img_9523.jpg",
        caption: "Exclusive suite dining area with warm recessed accent niches",
      },
      {
        src: "/assets/ashoka/rooms/img_9516.jpg",
        caption: "Lounge area with handcrafted wooden armchairs",
      },
      {
        src: "/assets/ashoka/rooms/img_2569.jpg",
        caption: "Vanity station, mini bar cabinet, and coffee counter",
      },
      {
        src: "/assets/ashoka/rooms/img_2570.jpg",
        caption: "Sparkling glass shower cubicle and premium fixtures",
      },
    ],
  },
];
