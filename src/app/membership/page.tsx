"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import PricingCard from "@/components/ui/PricingCard";
import { pricingTiers, faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";

const allFeatures = [
  "Gym access",
  "Equipment access",
  "Trainer sessions",
  "Group classes",
  "Locker room",
  "Mobile app",
  "Nutrition planning",
  "Sauna & recovery",
  "Priority booking",
  "24/7 access",
  "Custom meal plans",
  "Physio & recovery",
  "VIP locker room",
  "Guest passes",
  "Exclusive events",
  "Merchandise",
];

const featureMap: Record<string, string[]> = {
  Basic: ["Gym access", "Equipment access", "Trainer sessions", "Group classes", "Locker room", "Mobile app"],
  Pro: ["Gym access", "Equipment access", "Trainer sessions", "Group classes", "Locker room", "Mobile app", "Nutrition planning", "Sauna & recovery", "Priority booking", "24/7 access"],
  Elite: ["Gym access", "Equipment access", "Trainer sessions", "Group classes", "Locker room", "Mobile app", "Nutrition planning", "Sauna & recovery", "Priority booking", "24/7 access", "Custom meal plans", "Physio & recovery", "VIP locker room", "Guest passes", "Exclusive events", "Merchandise"],
};

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
            alt="Membership"
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
            CHOOSE YOUR <GlowText variant="gradient">WEAPON</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            No contracts. No hidden fees. Just the tools you need to become your best.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.name} {...tier} index={i} />
          ))}
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section dark title="COMPARE PLANS" subtitle="Find the perfect plan for your fitness journey.">
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 text-gray-400 font-medium">Feature</th>
                {pricingTiers.map((tier) => (
                  <th key={tier.name} className="py-4 text-center font-heading text-white">
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature} className="border-b border-white/5">
                  <td className="py-3 text-gray-400">{feature}</td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.name} className="py-3 text-center">
                      {featureMap[tier.name].includes(feature) ? (
                        <Check size={18} className="text-neon-green mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="FAQ" subtitle="Got questions? We've got answers.">
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-semibold text-sm">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-neon-green transition-transform duration-300 shrink-0",
                    openFaq === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}