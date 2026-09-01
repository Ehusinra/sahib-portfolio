"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  priceRange: string;
  timeline: string;
  revisions: string;
  features: string[];
  isPopular?: boolean;
  index?: number;
}

export default function PricingCard({
  name,
  priceRange,
  timeline,
  revisions,
  features,
  isPopular = false,
  index = 0,
}: PricingCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group rounded-2xl border transition-all duration-300 overflow-hidden ${
        isPopular
          ? "border-accent-primary/50 bg-background/80 backdrop-blur-sm shadow-lg shadow-accent-primary/20 scale-105 md:scale-100 origin-center"
          : "border-border-subtle bg-background/50 backdrop-blur-sm hover:border-foreground/20"
      }`}
    >
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary" />
        )}

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-6 lg:p-8">
        {isPopular && (
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>

        {/* Price */}
        <div className="mb-6">
          <div className="text-3xl md:text-2xl lg:text-3xl font-bold text-accent-primary mb-2">
            {priceRange}
          </div>
          <p className="text-sm text-foreground/60">Starting price based on requirements</p>
        </div>

        {/* Timeline & Revisions */}
        <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-border-subtle">
          <div>
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
              Timeline
            </p>
            <p className="text-base font-medium text-foreground">{timeline}</p>
          </div>
          <div>
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
              Revisions
            </p>
            <p className="text-base font-medium text-foreground">{revisions}</p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
            isPopular
              ? "bg-accent-primary hover:bg-accent-primary/90 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              : "border border-border-subtle bg-background/50 hover:border-foreground/30 text-foreground hover:bg-background/80"
          }`}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}
