"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Check, Loader2 } from "lucide-react";
import { sendContactInquiry } from "@/lib/contact";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    const emailToSubmit = email.trim();
    await sendContactInquiry({
      sender_name: "Newsletter Subscriber",
      sender_email: emailToSubmit,
      subject: "Newsletter Subscription - Hotel Ashoka Imperial & Banquet",
      message: `Guest subscribed to Hotel Ashoka Imperial newsletter updates.\nSubscriber Email: ${emailToSubmit}`,
    });

    setIsSubmitting(false);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-[#141815] text-[#D8D5CE] pt-20 pb-12 border-t border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">★★★</span>
                  <span className="font-serif tracking-wider font-bold text-xl uppercase text-white">
                    Ashoka Imperial
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-amber-300">
                  Hotel & Banquet • Manish Nagar, Nagpur
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              A premier 3-star hotel & banquet destination in Manish Nagar, Somalwada, Nagpur. Premium AC accommodations, multi-cuisine restaurant, and grand celebrations just 10 minutes from Nagpur Airport.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                ★ 3-Star Hospitality & Banquets in Nagpur
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Explore</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-light">
              <li>
                <Link href="/" className="hover:text-[#C5A880] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#C5A880] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/banquets" className="hover:text-[#C5A880] transition-colors">
                  Banquet & Events
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-[#C5A880] transition-colors">
                  Dining & Restaurant
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#C5A880] transition-colors">
                  Hotel Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C5A880] transition-colors">
                  Photo & Event Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A880] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <span>Plot No. 191, Jai Durga Society, Manish Nagar, Somalwada, Nagpur, Maharashtra – 440015</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:+918734863628" className="hover:text-white transition-colors font-medium">
                    +91 87348 63628 (Front Desk)
                  </a>
                  <a href="tel:+918470804805" className="hover:text-white transition-colors text-neutral-400">
                    +91 84708 04805 (Banquet Desk)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="mailto:hotelashokaimperialnagpur@gmail.com" className="hover:text-white transition-colors">
                  hotelashokaimperialnagpur@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <h5 className="text-xs uppercase tracking-widest text-white font-semibold mb-3">Nagpur Location</h5>
              <p className="text-xs text-neutral-400">
                10 mins (3.2 km) from Dr. Babasaheb Ambedkar International Airport. Near Manish Nagar crossing.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Stay Connected</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Inquire about banquet availability, festive offers, wedding bookings, and corporate packages in Nagpur.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you. You are now subscribed to Hotel Ashoka Imperial updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-full py-2.5 pl-4 pr-11 text-xs text-white placeholder:text-neutral-500 focus:outline-hidden focus:border-[#C5A880] transition disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-[#1B4332] hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-white flex items-center justify-center transition cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <span className="text-[11px] text-neutral-500 block">We value privacy. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© 2026 Hotel Ashoka Imperial & Banquet, Nagpur. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition">
              Terms of Service
            </a>
            <a href="#rooms" className="hover:text-neutral-300 transition">
              Room Rates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
