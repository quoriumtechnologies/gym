"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Star } from "lucide-react";
import Card from "./Card";

interface TrainerCardProps {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  social: { instagram: string; youtube: string; twitter: string };
  rating: number;
  sessions: number;
  index?: number;
}

export default function TrainerCard({
  name,
  specialty,
  bio,
  image,
  social,
  rating,
  sessions,
  index = 0,
}: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden p-0" glow="green" hover={false}>
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />

          {/* Hover Bio Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <p className="text-gray-300 text-sm leading-relaxed">{bio}</p>
          </div>

          {/* Top info */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="glass text-xs text-neon-green px-3 py-1 rounded-full">
              {specialty}
            </span>
            <div className="flex items-center gap-1 glass px-2 py-1 rounded-full">
              <Star size={12} className="text-gold fill-gold" />
              <span className="text-xs text-white">{rating}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-heading font-bold text-white mb-1">
            {name}
          </h3>
          <p className="text-neon-green text-sm mb-3">{specialty}</p>
          <p className="text-gray-500 text-xs mb-4">{sessions}+ sessions</p>

          <div className="flex items-center gap-2">
            {[
              { icon: Instagram, href: social.instagram },
              { icon: Youtube, href: social.youtube },
              { icon: Twitter, href: social.twitter },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/30 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}