"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  avatar,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[350px] md:min-w-[400px]"
    >
      <Card className="h-full relative" glow="green">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-green/10" />
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="text-gold fill-gold" />
          ))}
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover border border-white/10"
          />
          <div>
            <p className="text-white text-sm font-semibold">{name}</p>
            <p className="text-gray-500 text-xs">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}