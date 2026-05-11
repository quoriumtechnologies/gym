"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  titleGlow?: "green" | "blue" | "orange";
  dark?: boolean;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  titleGlow = "green",
  dark = false,
}: SectionProps) {
  const glowColors = {
    green: "bg-neon-green",
    blue: "bg-electric-blue",
    orange: "bg-orange-glow",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        dark ? "bg-charcoal" : "bg-matte-black",
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {(title || subtitle) && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            {title && (
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <span
                    className={cn(
                      "w-8 h-0.5 rounded-full",
                      glowColors[titleGlow]
                    )}
                  />
                  <span
                    className={cn(
                      "font-heading text-xs tracking-[0.3em] uppercase",
                      glowColors[titleGlow].replace("bg-", "text-")
                    )}
                  >
                    Our Programs
                  </span>
                  <span
                    className={cn(
                      "w-8 h-0.5 rounded-full",
                      glowColors[titleGlow]
                    )}
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wider">
                  {title}
                </h2>
              </motion.div>
            )}
            {subtitle && (
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}