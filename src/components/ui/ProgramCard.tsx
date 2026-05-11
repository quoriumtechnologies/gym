"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Card from "./Card";
import GlowText from "./GlowText";
import * as Icons from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  duration: string;
  difficulty: string;
  image: string;
  features: readonly string[];
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Dumbbell: Icons.Dumbbell,
  Flame: Icons.Flame,
  Heart: Icons.Heart,
  Swords: Icons.Swords,
  Zap: Icons.Zap,
  Users: Icons.Users,
};

const difficultyColors: Record<string, string> = {
  "All Levels": "text-neon-green border-neon-green/30",
  Beginner: "text-electric-blue border-electric-blue/30",
  Intermediate: "text-orange-glow border-orange-glow/30",
  Advanced: "text-red-400 border-red-400/30",
};

export default function ProgramCard({
  title,
  description,
  icon,
  duration,
  difficulty,
  image,
  features,
  index = 0,
}: ProgramCardProps) {
  const Icon = iconMap[icon] || Icons.Dumbbell;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden p-0 h-full" glow="green">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
          <div className="w-12 h-12 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4 group-hover:bg-neon-green/20 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-300">
            <Icon className="w-6 h-6 text-neon-green" />
          </div>

          <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Icons.Clock size={12} />
              {duration}
            </span>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full border",
                difficultyColors[difficulty] || "text-gray-400 border-gray-500/30"
              )}
            >
              {difficulty}
            </span>
          </div>

          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((f, i) => (
              <li
                key={i}
                className="text-xs text-gray-500 flex items-center gap-2"
              >
                <Icons.Check size={12} className="text-neon-green shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={`/programs#${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center gap-2 text-neon-green text-sm font-semibold group/link"
          >
            Learn More
            <Icons.ArrowRight
              size={14}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}