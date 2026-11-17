"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
  Share2,
  Check,
  Building2,
  Users,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { HOTEL_GALLERY, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return HOTEL_GALLERY.filter((item) => {
      const categoryMatch =
        activeCategory === "all" ||
        item.category === activeCategory ||
        (activeCategory === "banquet" && (item.category === "banquet" || item.category === "exterior"));
      const yearMatch = activeYear === "all" || item.year === activeYear;
      return categoryMatch && yearMatch;
    });
  }, [activeCategory, activeYear]);

  // Current lightbox item
  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Lightbox keyboard navigation
  const handleNext = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleCloseLightbox]);

  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Hotel Ashoka Imperial & Banquet Gallery",
          text: "Check out the photography of rooms and banquet events at Hotel Ashoka Imperial Nagpur.",
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else if (typeof window !== "undefined") {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E293B] flex flex-col font-sans">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14231E] text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/ashoka/events/2022/dsc05551.jpg"
            alt="Hotel Ashoka Imperial Exterior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231E]/90 via-[#14231E]/80 to-[#14231E] z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3C598] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E3C598]" />
            Visual Experience & Events Archive
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Hotel & Grand Banquet Gallery
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Real photography of <strong className="text-white font-medium">Hotel Ashoka Imperial & Banquet</strong> in Manish Nagar, Nagpur. Explore our rooms, weddings, birthday celebrations, and multi-cuisine restaurant.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <Building2 className="w-4 h-4 text-[#C5A880]" />
              <span>3-Star Comfort Rooms</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <Users className="w-4 h-4 text-[#C5A880]" />
              <span>Grand Banquet: 50–250+ Guests</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>10 Mins from Nagpur Airport</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <main className="grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Category Filter Tabs & Year Selector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E8E2D8]">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#1B4332] text-white shadow-sm ring-2 ring-[#1B4332]/20"
                        : "bg-white text-neutral-700 hover:bg-[#F3EFE9] border border-[#E5DFD5]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Year Filter & Share */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E5DFD5] text-xs">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span className="text-neutral-500 font-medium">Year:</span>
                {[
                  { value: "all", label: "All" },
                  { value: 2026, label: "2026 (Latest)" },
                  { value: 2025, label: "2025" },
                  { value: 2022, label: "2022" },
                ].map((yr) => {
                  const isSelected = activeYear === yr.value;
                  return (
                    <button
                      key={yr.value}
                      onClick={() => setActiveYear(yr.value as any)}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                        isSelected
                          ? "bg-[#C5A880] text-white"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {yr.label}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-50 border border-[#E5DFD5] rounded-full text-xs font-medium text-neutral-700 transition cursor-pointer"
                title="Share Gallery"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between py-4 text-xs text-neutral-500 font-mono">
            <span>
              Showing <strong className="text-neutral-800">{filteredItems.length}</strong> photographs
            </span>
            <span className="hidden sm:inline text-neutral-400">
              Click any image to view high-resolution preview & details
            </span>
          </div>

          {/* Responsive Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-[#E8E2D8] p-8">
              <Layers className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-neutral-800">No photographs found</h3>
              <p className="text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
                No images match the selected filter combination. Try selecting &quot;All Photos&quot; or resetting the year filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveYear("all");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#1B4332] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-72 sm:h-80 bg-neutral-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer border border-neutral-200/60"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading={idx < 6 ? "eager" : "lazy"}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Badges on Top */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider rounded-md bg-black/50 backdrop-blur-md text-white border border-white/20">
                      {item.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-[#C5A880]/90 text-white backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  {/* Caption on Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-editorial text-lg font-bold text-white leading-snug group-hover:text-[#E3C598] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-block mt-2 text-[10px] text-[#E3C598] font-medium uppercase tracking-wider underline underline-offset-2">
                      Click to expand ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Event Booking Callout */}
          <section className="mt-20 bg-gradient-to-r from-[#1B4332] via-[#245340] to-[#14231E] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#E3C598] text-xs font-semibold tracking-wider uppercase mb-3">
                Host Your Special Occasion
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-tight">
                Plan Your Wedding, Birthday or Corporate Event at Grand Ashoka Banquet
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                Whether an intimate gathering of 50 or a grand gala of 250+ guests, our banquet hall offers custom floral decor, premium catering, stage setups, and special room tariffs in Manish Nagar, Nagpur.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs sm:text-sm font-bold tracking-wide transition shadow-lg cursor-pointer"
                >
                  Check Event & Room Dates
                </button>
                <a
                  href="tel:+918470804805"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition"
                >
                  <Phone className="w-4 h-4 text-[#E3C598]" />
                  <span>Call Banquet: +91 84708 04805</span>
                </a>
                <a
                  href="https://wa.me/918734863628?text=Hello%20Hotel%20Ashoka%20Imperial,%20I%20am%20interested%20in%20banquet%20and%20room%20booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200">
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[#C5A880] text-black text-xs font-bold">
                {currentItem.year}
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-300">
                {currentItem.categoryLabel}
              </span>
              <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                ({lightboxIndex + 1} of {filteredItems.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image & Navigation */}
          <div className="relative grow flex items-center justify-center p-2 sm:p-6 select-none">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition cursor-pointer"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition cursor-pointer"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption & Action */}
          <div className="p-4 sm:p-6 bg-black/80 border-t border-white/10 text-white">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-lg sm:text-xl font-bold text-white">
                  {currentItem.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-neutral-300 font-light">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    handleCloseLightbox();
                    setBookingModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-full bg-[#C5A880] hover:bg-[#B89258] text-white text-xs font-bold transition cursor-pointer"
                >
                  Inquire Event / Room
                </button>
                <a
                  href={`https://wa.me/918734863628?text=Hello%20Hotel%20Ashoka%20Imperial,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                    currentItem.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug="grand-banquet-hall"
      />

      <Footer />
    </div>
  );
}
