"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Snowflake,
  Droplets,
  Tv,
  Coffee,
  ShieldCheck,
  Plane,
  Car,
  Clock,
  Sparkles,
  Users,
  Utensils,
  Zap,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { HOTEL_AMENITIES } from "@/data/amenities";
import { NEARBY_ATTRACTIONS } from "@/data/attractions";

export default function AmenitiesView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const amenityGroups = [
    {
      category: "Room Comfort & Accommodations",
      icon: <Snowflake className="w-6 h-6 text-[#1B4332]" />,
      items: [
        { name: "Whisper-Quiet Split A/C", desc: "Individually controlled climate cooling in all deluxe and executive rooms." },
        { name: "24/7 Continuous Hot Water", desc: "Reliable pressure-boosted hot showers with modern ceramic plumbing fixtures." },
        { name: "Comfort King & Queen Bedding", desc: "Plush mattresses, sanitized crisp white duvets, and hypoallergenic pillows." },
        { name: "Flat-Screen Satellite TV", desc: "High-definition entertainment channels in every room." },
        { name: "Tea & Coffee Kettle Station", desc: "Complimentary electric kettle with tea bags, instant coffee, and bottled water." },
        { name: "Daily Housekeeping Service", desc: "Meticulous room cleaning, towel replacement, and linen refresh." },
      ],
    },
    {
      category: "Connectivity & Work",
      icon: <Wifi className="w-6 h-6 text-[#1B4332]" />,
      items: [
        { name: "High-Speed Fiber Wi-Fi", desc: "Seamless property-wide wireless internet for video calls and remote work." },
        { name: "Dedicated Writing Desk", desc: "Ergonomic wooden work desk with vanity mirror and desktop power sockets." },
        { name: "Intercom Direct Dialing", desc: "Instant one-touch access to front desk, room service, and housekeeping." },
        { name: "Multiple Power Outlets", desc: "Convenient bedside and desktop charging points for laptops and phones." },
      ],
    },
    {
      category: "Location & Travel Services",
      icon: <Plane className="w-6 h-6 text-[#1B4332]" />,
      items: [
        { name: "10-Minute Airport Proximity", desc: "Situated only 3.2 km from Dr. Babasaheb Ambedkar International Airport." },
        { name: "Airport Cab & Taxi Assistance", desc: "Front-desk arrangement for pre-booked cabs, airport pickups, and local drops." },
        { name: "Elevator / Passenger Lift", desc: "Smooth elevator access connecting all guest room floors and banquet hall." },
        { name: "Luggage Storage Facility", desc: "Secure luggage holding for early arrivals or late transit flights." },
      ],
    },
    {
      category: "Banquets, Dining & Power Backup",
      icon: <Users className="w-6 h-6 text-[#1B4332]" />,
      items: [
        { name: "Grand Ashoka Banquet Hall", desc: "50 to 250+ capacity venue equipped for weddings, birthdays, and conferences." },
        { name: "100% Diesel Generator Backup", desc: "Automatic generator kicks in within seconds ensuring zero power outage." },
        { name: "Ashoka Multi-Cuisine Dining", desc: "Restaurant serving fresh breakfast, thalis, tandoori specialties, and room service." },
        { name: "Catering & Live Buffets", desc: "In-house culinary staff catering custom menus for banquet events." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E293B] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14231E] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/ashoka/rooms/img_2566.jpg"
            alt="Hotel Ashoka Imperial Room Amenities"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231E]/90 via-[#14231E]/80 to-[#14231E] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C598] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C598]" />
            Hotel Amenities & Guest Services
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Designed for Seamless Comfort
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need for productive business trips, peaceful family stays, and joyous celebratory gatherings in Manish Nagar, Nagpur.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="grow py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Categorized Groups */}
          <div className="space-y-12">
            {amenityGroups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-xs">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#E8E2D8]">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDE7DC] flex items-center justify-center shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#B89258] tracking-widest block">
                      Category 0{idx + 1}
                    </span>
                    <h2 className="font-editorial text-2xl font-bold text-neutral-900">
                      {group.category}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE7DC]">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed pl-6">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Nagpur Transit & Attractions */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Location Advantages
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
                Strategic South Nagpur Connectivity
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                Situated in peaceful Manish Nagar, Somalwada, our location gives effortless connectivity to flights, metro routes, and tourist landmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {NEARBY_ATTRACTIONS.slice(0, 4).map((att) => (
                <div key={att.id} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE7DC]">
                  <div className="text-xs font-mono font-bold text-[#1B4332]">{att.distance}</div>
                  <h3 className="font-editorial text-lg font-bold text-neutral-900 mt-1">{att.name}</h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{att.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1B4332] to-[#14231E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Book Your Stay or Celebration Today
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-1">
                Direct phone & WhatsApp booking with guaranteed best available rates.
              </p>
            </div>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shrink-0 cursor-pointer shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug="standard-ac"
      />

      <Footer />
    </div>
  );
}
