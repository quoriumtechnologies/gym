"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  featured: boolean;
  index?: number;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  featured,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-500",
        featured
          ? "bg-gradient-to-b from-neon-green/10 to-dark-card border-2 border-neon-green/40 shadow-[0_0_40px_rgba(57,255,20,0.15)] scale-105"
          : "glass border border-white/5 hover:border-white/20"
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-neon-green text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-heading font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-heading font-bold text-white">
            ${price}
          </span>
          <span className="text-gray-500">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className={cn(
              "flex items-center gap-3 text-sm",
              feature.startsWith("✗")
                ? "text-gray-600"
                : "text-gray-300"
            )}
          >
            {feature.startsWith("✗") ? (
              <X size={16} className="text-gray-600 shrink-0" />
            ) : (
              <Check size={16} className="text-neon-green shrink-0" />
            )}
            {feature.replace("✗ ", "")}
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "primary" : "ghost"}
        className="w-full"
        glow={featured ? "green" : "none"}
      >
        {cta}
      </Button>
    </motion.div>
  );
}