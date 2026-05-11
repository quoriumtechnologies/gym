"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { calculateBMI, getBMICategory } from "@/lib/utils";
import Card from "./Card";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (w > 0 && h > 0) {
      setBmi(calculateBMI(w, h));
    }
  };

  const category = bmi !== null ? getBMICategory(bmi) : null;

  return (
    <Card className="p-6 md:p-8">
      <h3 className="text-xl font-heading font-bold text-white mb-4">
        BMI Calculator
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Calculate your Body Mass Index to assess your fitness level.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-gray-400 text-xs block mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 75"
            className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs block mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-3 bg-neon-green text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300"
      >
        Calculate BMI
      </button>

      {bmi !== null && category && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-lg glass text-center"
        >
          <div className="text-3xl font-heading font-bold text-white mb-1">
            {bmi.toFixed(1)}
          </div>
          <div
            className="text-sm font-semibold"
            style={{ color: category.color }}
          >
            {category.label}
          </div>
          {/* Gauge bar */}
          <div className="mt-3 h-2 rounded-full bg-charcoal overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
              className="h-full rounded-full"
              style={{ backgroundColor: category.color }}
            />
          </div>
        </motion.div>
      )}
    </Card>
  );
}