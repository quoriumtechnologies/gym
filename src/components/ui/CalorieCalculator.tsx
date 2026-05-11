"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { calculateBMR, calculateTDEE } from "@/lib/utils";
import Card from "./Card";

const activityLevels = [
  { value: 1.2, label: "Sedentary (little/no exercise)" },
  { value: 1.375, label: "Light (1-3 days/week)" },
  { value: 1.55, label: "Moderate (3-5 days/week)" },
  { value: 1.725, label: "Active (6-7 days/week)" },
  { value: 1.9, label: "Very Active (2x/day)" },
];

const goals = [
  { value: -500, label: "Lose Weight", emoji: "🔥" },
  { value: 0, label: "Maintain Weight", emoji: "⚖️" },
  { value: 500, label: "Gain Weight", emoji: "💪" },
];

export default function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState(0);
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    target: number;
  } | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    if (w > 0 && h > 0 && a > 0) {
      const bmr = calculateBMR(w, h, a, gender);
      const tdee = calculateTDEE(bmr, activity);
      setResult({ bmr, tdee, target: tdee + goal });
    }
  };

  return (
    <Card className="p-6 md:p-8">
      <h3 className="text-xl font-heading font-bold text-white mb-4">
        Calorie Calculator
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Find your daily calorie needs based on your goals.
      </p>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-400 text-xs block mb-1">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="75"
              className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs block mb-1">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
              className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-xs block mb-1">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
          />
        </div>

        <div>
          <label className="text-gray-400 text-xs block mb-1">Gender</label>
          <div className="flex gap-2">
            {(["male", "female"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  gender === g
                    ? "bg-neon-green text-black"
                    : "bg-charcoal text-gray-400 hover:text-white"
                }`}
              >
                {g === "male" ? "Male" : "Female"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-xs block mb-1">
            Activity Level
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(parseFloat(e.target.value))}
            className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
          >
            {activityLevels.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-xs block mb-1">Goal</label>
          <div className="flex gap-2">
            {goals.map((g) => (
              <button
                key={g.value}
                onClick={() => setGoal(g.value)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  goal === g.value
                    ? "bg-neon-green text-black"
                    : "bg-charcoal text-gray-400 hover:text-white"
                }`}
              >
                {g.emoji} {g.label.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-3 bg-neon-green text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300"
      >
        Calculate Calories
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 space-y-3"
        >
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "BMR", value: result.bmr, color: "text-electric-blue" },
              { label: "TDEE", value: result.tdee, color: "text-neon-green" },
              { label: "Target", value: result.target, color: "text-orange-glow" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-lg p-3 text-center">
                <div className={`text-lg font-heading font-bold ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </Card>
  );
}