"use client";

import { motion } from "framer-motion";
import {
  Users,
  Dumbbell,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/ui/Button";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ProgramCard from "@/components/ui/ProgramCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TransformationSlider from "@/components/ui/TransformationSlider";
import BMICalculator from "@/components/ui/BMICalculator";
import CalorieCalculator from "@/components/ui/CalorieCalculator";
import {
  siteStats,
  programs,
  testimonials,
  siteConfig,
} from "@/lib/constants";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/lib/animations";

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.06)_0%,transparent_60%)] animate-gradient-shift" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-electric-blue/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-glow/3 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-xs text-gray-400 tracking-wider uppercase">
                Premium Fitness Studio — Est. 2020
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-none mb-6"
            >
              <span className="text-white">FORGE YOUR</span>
              <br />
              <GlowText variant="gradient" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                LEGEND
              </GlowText>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Step into the forge where champions are made. World-class training,
              elite coaches, and a community that pushes you beyond your limits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button href="/membership" size="lg" glow="green">
                Start Your Transformation
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="lg"
                glow="none"
              >
                View Programs
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
            >
              {siteStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-neon-green/50 w-6 h-6" />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════ */}
      {/* STATS SECTION */}
      {/* ════════════════════════════════════════════════ */}
      <Section dark className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <AnimatedCounter
            end={5000}
            suffix="+"
            label="Active Members"
            icon={<Users size={24} />}
          />
          <AnimatedCounter
            end={50}
            suffix="+"
            label="Expert Trainers"
            icon={<Dumbbell size={24} />}
          />
          <AnimatedCounter
            end={200}
            suffix="+"
            label="Weekly Classes"
            icon={<Calendar size={24} />}
          />
          <AnimatedCounter
            end={12}
            label="Locations"
            icon={<MapPin size={24} />}
          />
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════════ */}
      {/* PROGRAMS PREVIEW */}
      {/* ════════════════════════════════════════════════ */}
      <Section
        title="ELITE PROGRAMS"
        subtitle="From strength to combat, yoga to CrossFit — find your discipline and master it."
        id="programs"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program, i) => (
            <ProgramCard key={program.id} {...program} index={i} />
          ))}
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button href="/programs" variant="ghost" glow="green">
            View All Programs <ArrowRight size={16} />
          </Button>
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════════ */}
      {/* TESTIMONIALS */}
      {/* ════════════════════════════════════════════════ */}
      <Section
        dark
        title="MEMBER STORIES"
        subtitle="Real transformations. Real results. Hear from our community."
      >
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════════ */}
      {/* TRANSFORMATION TEASER */}
      {/* ════════════════════════════════════════════════ */}
      <Section
        title="REAL TRANSFORMATIONS"
        subtitle="See the incredible journeys our members have made."
      >
        <div className="max-w-2xl mx-auto">
          <TransformationSlider
            before="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
            after="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80"
            alt="Member transformation"
          />
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button href="/transformations" variant="ghost" glow="green">
            View All Transformations <ArrowRight size={16} />
          </Button>
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════════ */}
      {/* CALCULATORS */}
      {/* ════════════════════════════════════════════════ */}
      <Section
        dark
        title="KNOW YOUR NUMBERS"
        subtitle="Track your metrics and optimize your fitness journey."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BMICalculator />
          <CalorieCalculator />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════ */}
      {/* CTA BANNER */}
      {/* ════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-electric-blue/10 to-orange-glow/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.1)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowText
              as="h2"
              variant="gradient"
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              READY TO TRANSFORM?
            </GlowText>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Your journey starts today. Join IRON FORGE and become the strongest
              version of yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/membership" size="lg" glow="green">
                Join Now — Start Free Trial
              </Button>
              <Button href="/contact" variant="outline" size="lg" glow="none">
                Book a Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}