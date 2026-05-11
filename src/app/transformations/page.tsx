"use client";

import { motion } from "framer-motion";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import TransformationSlider from "@/components/ui/TransformationSlider";
import Button from "@/components/ui/Button";
import { Quote } from "lucide-react";

const transformations = [
  { before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" },
  { before: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80", after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" },
  { before: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80", after: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" },
];

const stories = [
  { quote: "I lost 45 pounds and gained a whole new life. IRON FORGE changed everything.", name: "James M.", result: "-45 lbs" },
  { quote: "From never stepping foot in a gym to competing in my first CrossFit Open. Unreal journey.", name: "Sarah K.", result: "First CrossFit Open" },
  { quote: "The trainers here don't just coach — they believe in you until you believe in yourself.", name: "David R.", result: "3x Strength Increase" },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
            alt="Transformations"
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
            REAL <GlowText variant="gradient">TRANSFORMATIONS</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            These aren&apos;t just numbers — they&apos;re life-changing journeys of dedication and grit.
          </motion.p>
        </div>
      </section>

      {/* Before/After Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TransformationSlider before={t.before} after={t.after} alt={`Transformation ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stories */}
      <Section dark title="SUCCESS STORIES" subtitle="Hear from our members who transformed their lives.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <Quote className="text-neon-green/20 w-8 h-8 mx-auto mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                &ldquo;{story.quote}&rdquo;
              </p>
              <p className="text-white font-semibold text-sm">{story.name}</p>
              <p className="text-neon-green text-xs mt-1">{story.result}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-electric-blue/5 to-orange-glow/10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Your Transformation Starts Today
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join IRON FORGE and write your own success story.
          </p>
          <Button href="/membership" size="lg" glow="green">
            Start Your Journey
          </Button>
        </div>
      </section>
    </>
  );
}