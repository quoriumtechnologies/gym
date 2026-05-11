"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: "green" | "blue" | "orange" | "none";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow = "green",
      href,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-bold tracking-wider rounded-lg transition-all duration-300 hover:scale-105 active:scale-95";

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const variants = {
      primary: `bg-neon-green text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.4)]`,
      ghost: "glass text-white hover:bg-white/10 hover:border-white/20",
      outline: `border-2 border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:border-neon-green`,
    };

    const glowStyles = {
      green: "shadow-[0_0_10px_rgba(57,255,20,0.2)]",
      blue: "shadow-[0_0_10px_rgba(0,212,255,0.2)]",
      orange: "shadow-[0_0_10px_rgba(255,107,0,0.2)]",
      none: "",
    };

    const glowHover = {
      green: "hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]",
      blue: "hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]",
      orange: "hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]",
      none: "",
    };

    const classes = cn(
      base,
      sizes[size],
      variants[variant],
      glow !== "none" ? glowStyles[glow] : "",
      glow !== "none" ? glowHover[glow] : "",
      className
    );

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;