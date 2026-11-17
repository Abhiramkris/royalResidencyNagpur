"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Eye, Calendar, MapPin } from "lucide-react";
import { HOTEL_GALLERY, GalleryItem } from "@/data/gallery";

interface HomePreviewGalleryProps {
  onOpenBooking?: (roomSlug?: string) => void;
}

const PREVIEW_CATEGORIES = [
  { key: "featured", label: "Featured Highlights" },
  { key: "all", label: "All Photos" },
  { key: "rooms", label: "Rooms & Suites" },
  { key: "weddings", label: "Weddings & Receptions" },
  { key: "birthdays", label: "Birthday Parties" },
  { key: "banquet", label: "Banquets & Stage" },
  { key: "dining", label: "Dining & Catering" },
];

export default function HomePreviewGallery({ onOpenBooking }: HomePreviewGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems: GalleryItem[] = HOTEL_GALLERY.filter((item) => {
    if (activeCategory === "featured") {
      return item.featured || item.year === 2026;
    }
    if (activeCategory === "all") {
      return true;
    }
    if (activeCategory === "banquet") {
      return item.category === "banquet" || item.category === "exterior";
    }
    return item.category === activeCategory;
  });

  // Limit preview display to 8 highlight items
  const displayItems = filteredItems.slice(0, 8);

  const activePhoto = lightboxIndex !== null ? displayItems[lightboxIndex] : null;

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayItems.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayItems.length) % displayItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FBF9F6] border-y border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-widest">
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 leading-tight">
              Moments at Hotel Ashoka Imperial
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Explore authentic photos of our guest accommodations, grand banquets, wedding receptions, birthday celebrations, and multi-cuisine restaurant in Manish Nagar, Nagpur.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1B4332] hover:bg-[#143326] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>View Full Gallery (25+ Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {PREVIEW_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#1B4332] text-white shadow-sm ring-2 ring-[#1B4332]/20 font-semibold"
                    : "bg-white text-neutral-700 hover:bg-[#F2ECE3] border border-[#E2DBD1]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer bg-neutral-900 border border-neutral-200/80"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Badges on Top */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {item.categoryLabel}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-md bg-[#C5A880] text-white">
                  {item.year}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-editorial text-base sm:text-lg font-bold leading-snug text-white group-hover:text-[#E6CDAA] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-2 mt-1 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-[#E6CDAA] font-semibold uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-editorial text-lg sm:text-xl font-bold text-neutral-900">
              Planning a Wedding, Birthday Party, or Group Stay?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Browse our comprehensive gallery with high-resolution banquet setups, bedroom interiors, and dining spaces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/gallery"
              className="px-6 py-3 rounded-full bg-[#1B4332] hover:bg-[#143326] text-white text-xs font-semibold tracking-wider uppercase transition shadow-xs"
            >
              Open Complete Gallery →
            </Link>
            <Link
              href="/banquets"
              className="px-5 py-3 rounded-full bg-[#FAF8F5] hover:bg-[#F0EBE1] text-neutral-800 text-xs font-semibold tracking-wider uppercase border border-[#DDD5C7] transition"
            >
              Banquet Details
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Stage */}
            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Controls */}
            <div className="p-5 sm:p-6 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#C5A880] text-black">
                    {activePhoto.categoryLabel}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    Year {activePhoto.year}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Manish Nagar, Nagpur
                  </span>
                </div>
                <h3 className="font-editorial text-lg sm:text-2xl font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-2xl leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/gallery"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white tracking-wide transition text-center grow sm:grow-0"
                >
                  Full Gallery
                </Link>
                {onOpenBooking && (
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#E05332] hover:bg-[#C94324] text-xs font-bold text-white tracking-wide uppercase transition shadow-md text-center grow sm:grow-0 cursor-pointer"
                  >
                    Book Stay
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
