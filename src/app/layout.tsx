import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Particles from "@/components/ui/Particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IRON FORGE | Premium Gym & Fitness Studio",
  description:
    "Forge your legend at IRON FORGE — premium gym & fitness studio with world-class trainers, elite programs, and a transformative community. Start your journey today.",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "CrossFit",
    "MMA",
    "yoga",
    "strength training",
    "Los Angeles gym",
  ],
  openGraph: {
    title: "IRON FORGE | Premium Gym & Fitness Studio",
    description:
      "Forge your legend at IRON FORGE — premium gym & fitness studio with world-class trainers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-matte-black antialiased">
        <Particles />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}