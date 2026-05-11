"use client";

import { motion } from "framer-motion";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { galleryImages } from "@/lib/constants";

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-matte-black" />
        </div>
        <div className="relative z-10 text-center pt-24 pb-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            OUR <GlowText variant="gradient">GALLERY</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A glimpse into the energy, intensity, and community at IRON FORGE.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section>
        <GalleryGrid images={galleryImages as any} />
      </Section>
    </>
  );
}