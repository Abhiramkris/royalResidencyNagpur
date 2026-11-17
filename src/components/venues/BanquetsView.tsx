"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Mic,
  Sparkles,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  Volume2,
  Zap,
  Utensils,
  Maximize2,
  Clock,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { HOTEL_ASSETS } from "@/lib/assets";

export default function BanquetsView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const eventTypes = [
    {
      title: "Weddings & Receptions",
      capacity: "100 - 250+ Guests",
      image: "/assets/ashoka/events/2022/dsc_6981.jpg",
      description: "Lavish floral mandap setups, illuminated silk drapes, couple dais chaise lounge, and red carpet aisle for timeless celebrations.",
      tags: ["Mandap Styling", "Bride/Groom Suite", "Catering Buffet"],
    },
    {
      title: "Themed Birthday Parties",
      capacity: "50 - 150+ Guests",
      image: "/assets/ashoka/events/2022/dsc05553.jpg",
      description: "Custom balloon arches, themed character backdrops (Boss Baby, Unicorn, Pokémon, Cocomelon), neon entrance walkways, and cake cutting stage.",
      tags: ["Theme Decor", "Balloon Arches", "Kids Play Space"],
    },
    {
      title: "Corporate Conferences & Seminars",
      capacity: "50 - 200+ Guests",
      image: "/assets/ashoka/events/2022/img_1268.jpg",
      description: "Theatre and classroom seating with gold satin covers, acoustic speaker podium, PA system, high-speed Wi-Fi, and corporate lunch catering.",
      tags: ["PA System & Mic", "Projector Dais", "High-Speed Wi-Fi"],
    },
    {
      title: "Engagements & Sangeet",
      capacity: "75 - 200+ Guests",
      image: "/assets/ashoka/events/2022/img_2884.jpg",
      description: "High-ceiling banquet hall with crystal chandeliers, sound system for musical performances, dance floor space, and evening banquet dining.",
      tags: ["Crystal Chandeliers", "Sound System", "Live Buffet"],
    },
  ];

  const layoutSpecs = [
    { name: "Theatre Style", capacity: "250 Guests", desc: "Maximum seating for seminars, annual meets, and keynote presentations." },
    { name: "Round Banquet Tables", capacity: "180 Guests", desc: "Clustered circular dining tables ideal for weddings, galas, and awards dinners." },
    { name: "Cluster / Classroom", capacity: "120 Guests", desc: "Equipped with writing surfaces for workshops and training sessions." },
    { name: "Standing Gala Reception", capacity: "300 Guests", desc: "Open floor with cocktail tables and perimeter buffet counters." },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E293B] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14231E] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/ashoka/events/2022/dsc_6981.jpg"
            alt="Grand Ashoka Banquet Hall Stage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231E]/90 via-[#14231E]/80 to-[#14231E] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C598] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C598]" />
            Grand Ashoka Banquet & Celebrations
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Celebrate In Grandeur in Manish Nagar
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Nagpur’s preferred venue for weddings, milestone birthdays, family receptions, and corporate conferences. Air-conditioned capacity for 50 to 250+ guests.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shadow-lg cursor-pointer"
            >
              Inquire Event Dates
            </button>
            <a
              href="tel:+918470804805"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition"
            >
              <Phone className="w-4 h-4 text-[#E3C598]" />
              <span>Banquet Hotline: +91 84708 04805</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="grow py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Section 1: Overview Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-xs text-center">
              <Users className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">50 - 250+</div>
              <div className="text-xs text-neutral-500 mt-1">Guest Seating Capacity</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-xs text-center">
              <Maximize2 className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">Spacious</div>
              <div className="text-xs text-neutral-500 mt-1">Air-Conditioned Hall + Terrace</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-xs text-center">
              <Utensils className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">In-House</div>
              <div className="text-xs text-neutral-500 mt-1">Chef-Curated Buffet Catering</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-xs text-center">
              <Clock className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">10 Mins</div>
              <div className="text-xs text-neutral-500 mt-1">From Nagpur Airport</div>
            </div>
          </div>

          {/* Section 2: Event Types Showcase */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Tailored Celebrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-neutral-900 mt-2">
                Events Hosted with Precision & Elegance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((evt, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                        {evt.capacity}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-editorial text-2xl font-bold text-neutral-900 group-hover:text-[#1B4332] transition-colors">
                        {evt.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {evt.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {evt.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E8E2D8] text-[11px] font-medium text-neutral-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="w-full py-2.5 rounded-full bg-[#FAF8F5] group-hover:bg-[#1B4332] text-neutral-800 group-hover:text-white border border-[#E5DFD5] group-hover:border-transparent text-xs font-bold transition shadow-xs cursor-pointer text-center"
                    >
                      Inquire for {evt.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Seating Layout Options */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2D8] shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Capacity & Arrangements
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900 mt-1">
                Flexible Seating Layouts
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                Our operations team configures the hall to match your exact itinerary, seating preference, and stage requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {layoutSpecs.map((spec, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE7DC]">
                  <div className="text-xs text-[#B89258] font-bold font-mono">Option 0{i + 1}</div>
                  <h3 className="font-editorial text-lg font-bold text-neutral-900 mt-1">{spec.name}</h3>
                  <div className="text-sm font-bold text-[#1B4332] mt-0.5">{spec.capacity}</div>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Key Inclusions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center mb-4">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">Audio & Visual Setup</h3>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Acoustic podium with wireless handheld mics, PA speakers, stage floodlights, and provision for digital projection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">100% Power Generator Backup</h3>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Uninterrupted power supply with automatic diesel generator ensuring ceremonies and conferences continue seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">Catering & Service Staff</h3>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Uniformed hospitality staff, live chaat and tandoor counters, beverage stations, and complete cutlery management.
              </p>
            </div>
          </div>

          {/* Gallery Link Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1B4332] to-[#14231E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[#E3C598] font-bold block mb-1">
                Visual Proof
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                See Real Event Decor in Our Gallery
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2">
                Browse through 50+ photographs from 2026, 2025, and 2022 featuring real weddings, birthdays, and banquet setups.
              </p>
            </div>

            <Link
              href="/gallery"
              className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shrink-0 inline-flex items-center gap-2"
            >
              <span>Explore Gallery (50+ Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug="grand-banquet-hall"
      />

      <Footer />
    </div>
  );
}
