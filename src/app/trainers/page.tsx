"use client";

import { motion } from "framer-motion";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import TrainerCard from "@/components/ui/TrainerCard";
import { trainers } from "@/lib/constants";

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
            alt="Trainers"
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
            WORLD-CLASS <GlowText variant="gradient">TRAINERS</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Learn from the best in the industry. Our trainers are champions, coaches, and mentors.
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} {...trainer} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-electric-blue/5 to-orange-glow/10" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Ready to Train with the Best?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free session with any of our elite trainers and start your transformation today.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105"
          >
            Book a Free Session
          </a>
        </div>
      </section>
    </>
  );
}