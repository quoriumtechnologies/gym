"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import { blogPosts } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const categories = ["All", "Workouts", "Nutrition", "Lifestyle"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-matte-black" />
        </div>
        <div className="relative z-10 text-center pt-24 pb-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            IRON <GlowText variant="gradient">BLOG</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Training tips, nutrition advice, and insights from our elite coaches.
          </motion.p>
        </div>
      </section>

      {/* Blog Listing */}
      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300",
                activeCategory === cat
                  ? "bg-neon-green text-black"
                  : "glass text-gray-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 glass text-xs text-neon-green px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-neon-green text-sm font-semibold group-hover/link:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}