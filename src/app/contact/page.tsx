"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Check } from "lucide-react";
import GlowText from "@/components/ui/GlowText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: null },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 5AM-11PM\nSat: 6AM-9PM\nSun: 7AM-8PM", href: null },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
            alt="Contact"
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
            GET IN <GlowText variant="gradient">TOUCH</GlowText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to start your journey? Reach out and we&apos;ll help you take the first step.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-heading font-bold text-white mb-6">
              Send Us a Message
            </motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full" glow="green">
                  <Send size={16} />
                  Send Message
                </Button>
              </motion.form>
            )}
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-heading font-bold text-white mb-6">
              Contact Info
            </motion.h2>
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                variants={fadeInUp}
                className="glass rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0">
                  <info.icon size={18} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white text-sm hover:text-neon-green transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm whitespace-pre-line">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div variants={fadeInUp}>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-5 hover:border-neon-green/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0 group-hover:bg-neon-green/20 transition-colors">
                  <MessageCircle size={18} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Chat with us</p>
                  <p className="text-white text-sm group-hover:text-neon-green transition-colors">
                    Message us on WhatsApp
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Map */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0!2d-118.25!3d34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzAwLjAiTiAxMTHCsDE1JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IRON FORGE Location"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-matte-black/50 to-transparent" />
      </section>
    </>
  );
}