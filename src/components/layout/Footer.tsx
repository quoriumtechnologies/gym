"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, programs } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const footerLinks = {
  quick: [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Trainers", href: "/trainers" },
    { label: "Membership", href: "/membership" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  programs: programs.slice(0, 4).map((p) => ({
    label: p.title,
    href: `/programs#${p.id}`,
  })),
};

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-white/5 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6 text-neon-green" />
              <span className="font-heading text-lg font-bold tracking-widest text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Youtube, href: siteConfig.social.youtube },
                { icon: Twitter, href: siteConfig.social.twitter },
                { icon: Facebook, href: siteConfig.social.facebook },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-green hover:border-neon-green/50 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-sm tracking-widest text-white mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-sm tracking-widest text-white mb-6">
              PROGRAMS
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-sm tracking-widest text-white mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-green text-sm transition-colors"
                >
                  <Mail size={16} className="text-neon-green shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-green text-sm transition-colors"
                >
                  <Phone size={16} className="text-neon-green shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-neon-green shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/" className="hover:text-neon-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-neon-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-neon-green rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}