"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Users,
  Maximize2,
  Check,
  ArrowRight,
  ShieldCheck,
  Snowflake,
  Wifi,
  Sparkles,
  Phone,
  Droplets,
  Building,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { HOTEL_ROOMS, EXTRA_PERSON_RATE, TAX_PERCENTAGE } from "@/data/rooms";

export default function RoomsIndexView() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "ac" | "non-ac" | "suites">("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>("standard-ac");

  const filteredRooms = HOTEL_ROOMS.filter((room) => {
    if (selectedFilter === "ac") return room.airConditioned && !room.slug.includes("suite");
    if (selectedFilter === "non-ac") return !room.airConditioned;
    if (selectedFilter === "suites") return room.slug.includes("suite");
    return true;
  });

  const handleOpenBooking = (slug: string) => {
    setSelectedRoomSlug(slug);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E293B] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14231E] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/ashoka/rooms/img_2574.jpg"
            alt="Hotel Ashoka Imperial Room Panoramic"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231E]/90 via-[#14231E]/80 to-[#14231E] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C598] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C598]" />
            Hotel Accommodations & Suites
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Restful Comfort in South Nagpur
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Five thoughtfully appointed room categories located in Manish Nagar, Somalwada — just 10 minutes from Dr. Babasaheb Ambedkar International Airport.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <Snowflake className="w-4 h-4 text-[#C5A880]" />
              <span>Whisper-Quiet Split A/C</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <Droplets className="w-4 h-4 text-[#C5A880]" />
              <span>24/7 Continuous Hot Water</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <Wifi className="w-4 h-4 text-[#C5A880]" />
              <span>Complimentary High-Speed Wi-Fi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Rooms Section */}
      <main className="grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills & Rate Guarantee Note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E8E2D8]">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { key: "all", label: "All Rooms (5)" },
                { key: "non-ac", label: "Standard Classic" },
                { key: "ac", label: "Deluxe A/C" },
                { key: "suites", label: "Suites & Executive" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition cursor-pointer ${
                    selectedFilter === tab.key
                      ? "bg-[#1B4332] text-white shadow-sm"
                      : "bg-white text-neutral-700 hover:bg-[#F3EFE9] border border-[#E5DFD5]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-neutral-500 font-mono">
              Direct Booking Guarantee · Extra Person: ₹{EXTRA_PERSON_RATE}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.slug}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Primary Room Image */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={room.primaryImage}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      {room.airConditioned ? (
                        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#1B4332]/90 text-white backdrop-blur-md flex items-center gap-1">
                          <Snowflake className="w-3 h-3" />
                          Climate Controlled
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-neutral-800/80 text-white backdrop-blur-md">
                          Ventilated Classic
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-right">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                        Direct Rate
                      </span>
                      <span className="text-base font-bold text-[#1B4332] font-mono">
                        ₹{room.rate.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-neutral-500 block">/ night + GST</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <h3 className="font-editorial text-2xl font-bold text-neutral-900 group-hover:text-[#1B4332] transition-colors">
                      {room.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 font-medium">
                      {room.tagline}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-600 bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Up to {room.capacity.maxGuests} Guests</span>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-2">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-4 space-y-1.5">
                      {room.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => handleOpenBooking(room.slug)}
                    className="flex-1 py-3 rounded-full bg-[#1B4332] hover:bg-[#143326] text-white text-xs font-bold transition shadow-sm cursor-pointer text-center"
                  >
                    Book Room
                  </button>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="px-4 py-3 rounded-full bg-[#FAF8F5] hover:bg-[#EDE7DC] border border-[#E5DFD5] text-neutral-700 text-xs font-semibold transition text-center inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Room Comparison Table */}
          <section className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Transparent Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900 mt-1">
                Room Features at a Glance
              </h2>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E2D8] bg-[#FAF8F5]">
                    <th className="py-3 px-4 font-bold text-neutral-800">Room Category</th>
                    <th className="py-3 px-4 font-bold text-neutral-800">Bedding</th>
                    <th className="py-3 px-4 font-bold text-neutral-800">Size</th>
                    <th className="py-3 px-4 font-bold text-neutral-800">A/C</th>
                    <th className="py-3 px-4 font-bold text-neutral-800">Max Guests</th>
                    <th className="py-3 px-4 font-bold text-neutral-800">Tariff (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D8]">
                  {HOTEL_ROOMS.map((r) => (
                    <tr key={r.slug} className="hover:bg-[#FAF8F5]/80 transition">
                      <td className="py-3.5 px-4 font-bold text-neutral-900">
                        <Link href={`/rooms/${r.slug}`} className="hover:text-[#1B4332] underline-offset-2 hover:underline">
                          {r.name}
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 text-neutral-600">{r.bedType}</td>
                      <td className="py-3.5 px-4 text-neutral-600">{r.size}</td>
                      <td className="py-3.5 px-4">
                        {r.airConditioned ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                            <Check className="w-3.5 h-3.5" /> Split A/C
                          </span>
                        ) : (
                          <span className="text-neutral-500">Ceiling Fan</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-neutral-600">{r.capacity.maxGuests} Adults</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-[#1B4332]">
                        ₹{r.rate.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Need Assistance Bar */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-neutral-900 text-base sm:text-lg">Need Assistance or Group Bookings?</h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Traveling with wedding guests or corporate delegations? Contact our front desk directly for bulk tariffs.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+918734863628"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B4332] text-white text-xs font-semibold hover:bg-[#143326] transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 87348 63628</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug={selectedRoomSlug}
      />

      <Footer />
    </div>
  );
}
