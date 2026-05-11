"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: React.ReactNode;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  label,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.3);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      {icon && <div className="text-neon-green mb-2 flex justify-center">{icon}</div>}
      <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}