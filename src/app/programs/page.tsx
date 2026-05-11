"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = ["All", "Strength", "Cardio", "Yoga", "MMA", "CrossFit", "Group"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&q=80"
            alt="Programs"
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
            ELITE <GlowText variant="gradient">PROGRAMS</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Every program is designed by elite coaches to push you beyond your limits.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300",
                activeCategory === cat
                  ? "bg-neon-green text-black shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                  : "glass text-gray-400 hover:text-white hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program, i) => (
            <ProgramCard key={program.id} {...program} index={i} />
          ))}
        </motion.div>
      </Section>
    </>
  );
}