import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelashokaimperialnagpur.com"),
  title: "HOTEL ASHOKA IMPERIAL & BANQUET | 3-Star Hotel in Manish Nagar, Nagpur",
  description:
    "3-Star hotel & grand banquet venue in Manish Nagar, Somalwada, Nagpur. Just 10 mins (3.2 km) from Dr. Babasaheb Ambedkar International Airport. Deluxe AC rooms, grand banquets, multi-cuisine dining & 24/7 service.",
  icons: {
    icon: "/assets/brand/palmshore-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased min-h-screen bg-[#FAF8F5] text-[#1C1E1B] font-sans selection:bg-emerald-800 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
