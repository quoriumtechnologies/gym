import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-matte-black px-4">
      <div className="text-center">
        <Dumbbell className="w-16 h-16 text-neon-green mx-auto mb-6 animate-glow-pulse" />
        <h1 className="text-8xl font-heading font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-8">
          This page is still in the locker room. Let&apos;s get you back to the gym.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}