"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "blue" | "orange" | "none";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  glow = "none",
  hover = true,
}: CardProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  const glowBorders = {
    green: "hover:border-neon-green/40",
    blue: "hover:border-electric-blue/40",
    orange: "hover:border-orange-glow/40",
    none: "",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={
        hover
          ? { y: -8, transition: { duration: 0.3 } }
          : undefined
      }
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "hover:shadow-xl hover:shadow-black/20",
        glowBorders[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}