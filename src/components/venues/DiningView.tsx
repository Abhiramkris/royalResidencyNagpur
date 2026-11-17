"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Clock,
  Coffee,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  Wine,
  Users,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";

export default function DiningView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const mealSchedules = [
    {
      meal: "Breakfast Buffet",
      hours: "7:00 AM – 10:30 AM",
      desc: "Fresh Nagpur poha, idli-vada-sambar, stuffed parathas, toast, eggs, seasonal fruits, and freshly brewed South Indian filter coffee & tea.",
    },
    {
      meal: "Lunch Service",
      hours: "12:30 PM – 3:30 PM",
      desc: "Aromatic biryanis, paneer specialties, seasonal dal tadka, fresh tandoori rotis, and thali combinations for business luncheons.",
    },
    {
      meal: "Dinner & Evenings",
      hours: "7:30 PM – 11:00 PM",
      desc: "Fine dining ambiance with slow-cooked Indian gravies, regional Saoji delicacies, Chinese wok specials, and decadent desserts.",
    },
    {
      meal: "24/7 In-Room Dining",
      hours: "Round the Clock",
      desc: "Prompt room delivery for transit guests, late-night arrivals, or comfortable dining in your suite.",
    },
  ];

  const menuHighlights = [
    {
      category: "Tandoor & Starters",
      items: ["Paneer Tikka Angara", "Murgh Malai Tikka", "Hara Bhara Kebab", "Crispy Corn Pepper Salt", "Tandoori Soya Chaap"],
    },
    {
      category: "Main Curries & Specialties",
      items: ["Dal Makhani Slow-Simmered", "Paneer Butter Masala", "Kadhai Murgh", "Saoji Chicken Curry", "Dum Aloo Kashmiri"],
    },
    {
      category: "Rice & Breads",
      items: ["Hyderabadi Dum Biryani", "Jeera Rice & Dal Tadka", "Butter Naan & Garlic Naan", "Missi Roti & Laccha Paratha"],
    },
    {
      category: "Banquet Desserts & Sweets",
      items: ["Hot Gulab Jamun", "Saffron Rasmalai", "Gajar Ka Halwa (Seasonal)", "Ice Cream Sundaes", "Fresh Fruit Custard"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E293B] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14231E] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/ashoka/events/2026/eh2a0901.jpg"
            alt="Ashoka Imperial Restaurant & Dining Hall"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231E]/90 via-[#14231E]/80 to-[#14231E] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C598] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C598]" />
            Multi-Cuisine Restaurant & Banquet Catering
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Authentic Flavors, Imperial Hospitality
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Savor authentic North Indian, tandoori, and regional delicacies in our sunlit restaurant with floor-to-ceiling glass windows and royal velvet seating.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+918734863628"
              className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shadow-lg inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Reserve Table: +91 87348 63628</span>
            </a>
            <a
              href="https://wa.me/918734863628?text=Hello%20Ashoka%20Imperial%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20catering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Table Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="grow py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Visual Showcase: 2 Images Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-lg group">
              <Image
                src="/assets/ashoka/events/2026/eh2a0901.jpg"
                alt="Ashoka Imperial Restaurant Seating"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-semibold text-[#E3C598] block mb-1">
                  Daylight Dining Hall
                </span>
                <h3 className="font-editorial text-xl font-bold">Panoramic Glass Lounge & Velvet Seating</h3>
                <p className="text-xs text-neutral-300 mt-0.5">Quiet ambiance ideal for family meals and corporate luncheons.</p>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-lg group">
              <Image
                src="/assets/ashoka/events/2026/eh2a0902.jpg"
                alt="Banquet Buffet Service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-semibold text-[#E3C598] block mb-1">
                  Banquet Buffet Spread
                </span>
                <h3 className="font-editorial text-xl font-bold">Chef-Curated Live Counters & Chafing Spread</h3>
                <p className="text-xs text-neutral-300 mt-0.5">Full-course vegetarian and non-vegetarian catering for up to 250+ guests.</p>
              </div>
            </div>
          </div>

          {/* Section: Meal Hours Schedule */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Daily Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-neutral-900 mt-2">
                Dining Hours & Service Schedule
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mealSchedules.map((sched, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-[#E8E2D8] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center mb-4">
                      {idx === 0 ? <Coffee className="w-5 h-5" /> : idx === 3 ? <Clock className="w-5 h-5" /> : <Utensils className="w-5 h-5" />}
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-neutral-900">{sched.meal}</h3>
                    <div className="text-xs font-mono font-bold text-[#1B4332] mt-1">{sched.hours}</div>
                    <p className="text-xs text-neutral-600 mt-3 leading-relaxed">{sched.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Menu Highlights */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2D8] shadow-xs">
            <div className="max-w-2xl mb-10">
              <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                Culinary Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900 mt-1">
                A Taste of Ashoka Imperial
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                Prepared by experienced chefs using fresh regional produce, hand-ground spices, and traditional charcoal tandoors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuHighlights.map((cat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE7DC]">
                  <h3 className="font-editorial text-lg font-bold text-neutral-900 border-b border-[#E8E2D8] pb-2 mb-3">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Banquet Catering Services */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1B4332] to-[#14231E] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[#E3C598] font-bold block mb-1">
                Event Catering Packages
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                Custom Catering for Weddings, Birthdays & Corporate Meets
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2">
                Choose from pure-vegetarian or multi-cuisine menu options with welcome drinks, live counters, dessert buffets, and professional banquet service.
              </p>
            </div>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shrink-0 cursor-pointer shadow-lg"
            >
              Inquire Banquet Catering
            </button>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug="ashoka-restaurant"
      />

      <Footer />
    </div>
  );
}
