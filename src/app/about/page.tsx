"use client";

import { motion } from "framer-motion";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Users, Dumbbell, Calendar, MapPin } from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

const timeline = [
  { year: "2020", title: "The Vision Begins", desc: "IRON FORGE founded with a mission to redefine fitness in Los Angeles." },
  { year: "2021", title: "First Location Opens", desc: "Flagship gym opens in Downtown LA with state-of-the-art equipment." },
  { year: "2022", title: "Expansion", desc: "Three new locations open. CrossFit and MMA programs launch." },
  { year: "2023", title: "Elite Status", desc: "Named 'Best Gym in LA' by Fitness Weekly. 5000+ active members." },
  { year: "2024", title: "Global Reach", desc: "Online coaching platform launches. 12 locations nationwide." },
  { year: "2025", title: "The Future", desc: "Innovating the fitness experience with AI-powered training and recovery labs." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Gym interior"
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
            OUR <GlowText variant="gradient">STORY</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From a single vision to a movement — discover the story behind IRON FORGE.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-heading text-white leading-relaxed mb-8">
            &ldquo;We believe every person has a legend within them.{" "}
            <GlowText variant="green">Our mission is to forge it.</GlowText>&rdquo;
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
            IRON FORGE isn&apos;t just a gym — it&apos;s a sanctuary for those who refuse to settle.
            We combine world-class equipment, elite coaching, and a relentless community
            to create an environment where transformation is inevitable.
          </motion.p>
        </motion.div>
      </Section>

      {/* Stats */}
      <Section dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={5000} suffix="+" label="Members" icon={<Users size={24} />} />
          <AnimatedCounter end={50} suffix="+" label="Trainers" icon={<Dumbbell size={24} />} />
          <AnimatedCounter end={200} suffix="+" label="Weekly Classes" icon={<Calendar size={24} />} />
          <AnimatedCounter end={12} label="Locations" icon={<MapPin size={24} />} />
        </div>
      </Section>

      {/* Timeline */}
      <Section title="OUR JOURNEY" subtitle="The milestones that shaped IRON FORGE.">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/50 via-electric-blue/30 to-transparent" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
              </div>
              <div className="flex-1 md:hidden">
                <span className="text-neon-green text-xs font-heading">{item.year}</span>
                <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="hidden md:block flex-1">
                <span className="text-neon-green text-xs font-heading">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}