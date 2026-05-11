import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle } from "lucide-react";
import GlowText from "@/components/ui/GlowText";
import { blogPosts, siteConfig } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-matte-black" />
        </div>
        <div className="relative z-10 text-center pt-24 pb-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="glass text-xs text-neon-green px-3 py-1.5 rounded-full mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* Content rendered as simple markdown-like sections */}
            <div className="prose-custom max-w-none">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-heading font-bold text-white mt-10 mb-4"
                    >
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-heading font-bold text-white mt-8 mb-3"
                    >
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
                  return (
                    <li
                      key={i}
                      className="text-gray-300 ml-6 mb-2 list-decimal"
                    >
                      {line.replace(/^\d+\.\s*/, "")}
                    </li>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li
                      key={i}
                      className="text-gray-300 ml-6 mb-2 list-disc"
                    >
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.trim() === "") {
                  return <div key={i} className="h-4" />;
                }
                return (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">
                    {line}
                  </p>
                );
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Share this article</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-neon-green transition-colors"
                  >
                    <Share2 size={14} />
                    Copy Link
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-neon-green transition-colors"
                  >
                    <MessageCircle size={14} />
                    Share
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            Related <GlowText variant="green">Articles</GlowText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-white group-hover:text-neon-green transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}