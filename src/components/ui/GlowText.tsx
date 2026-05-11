"use client";

import { cn } from "@/lib/utils";

interface GlowTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  variant?: "gradient" | "green" | "blue" | "orange";
  className?: string;
}

export default function GlowText({
  children,
  as: Tag = "span",
  variant = "gradient",
  className,
}: GlowTextProps) {
  const variants = {
    gradient: "text-gradient",
    green: "text-gradient-green",
    blue: "text-electric-blue",
    orange: "text-gradient-orange",
  };

  return (
    <Tag className={cn(variants[variant], className)}>
      {children}
    </Tag>
  );
}