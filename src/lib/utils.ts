import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function calculateBMI(weight: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weight / (heightM * heightM);
}

export function calculateBMR(
  weight: number,
  heightCm: number,
  age: number,
  gender: "male" | "female"
): number {
  if (gender === "male") {
    return 88.362 + 13.397 * weight + 4.799 * heightCm - 5.677 * age;
  }
  return 447.593 + 9.247 * weight + 3.098 * heightCm - 4.33 * age;
}

export function calculateTDEE(bmr: number, activityLevel: number): number {
  return Math.round(bmr * activityLevel);
}

export function getBMICategory(bmi: number): {
  label: string;
  color: string;
} {
  if (bmi < 18.5) return { label: "Underweight", color: "#00D4FF" };
  if (bmi < 25) return { label: "Normal", color: "#39FF14" };
  if (bmi < 30) return { label: "Overweight", color: "#FF6B00" };
  return { label: "Obese", color: "#FF0040" };
}