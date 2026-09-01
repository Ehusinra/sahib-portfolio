"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface MaintenancePlan {
  name: string;
  priceRange: string;
  features: string[];
  highlight?: boolean;
}

export default function MaintenanceCards() {
  const plans: MaintenancePlan[] = [
    {
      name: "Basic",
      priceRange: "৳2,000–3,000/month",
      features: [
        "Bug fixes",
        "Minor content changes",
        "Security updates",
        "Basic monitoring",
      ],
    },
    {
      name: "Standard",
      priceRange: "৳4,000–6,000/month",
      features: [
        "Everything in Basic",
        "Regular content updates",
        "Backups",
        "Performance monitoring",
        "Minor UI changes",
        "Dependency updates",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      priceRange: "৳8,000–15,000+/month",
      features: [
        "Priority support",
        "Regular backups",
        "Security monitoring",
        "Performance optimization",
        "Content updates",
        "Feature improvements",
        "Technical consultation",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-3 gap-6"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className={`relative group rounded-2xl border transition-all duration-300 overflow-hidden p-8 ${
            plan.highlight
              ? "border-accent-primary/50 bg-background/80 backdrop-blur-sm shadow-lg shadow-accent-primary/20 md:scale-105 origin-center"
              : "border-border-subtle bg-background/50 backdrop-blur-sm hover:border-foreground/20"
          }`}
        >
          {/* Highlight gradient line */}
          {plan.highlight && (
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />
          )}

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-border-subtle">
              <p className="text-2xl font-bold text-accent-primary">{plan.priceRange}</p>
              <p className="text-xs text-foreground/50 mt-1 font-mono uppercase tracking-wider">
                Per month
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full mt-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                plan.highlight
                  ? "bg-accent-primary hover:bg-accent-primary/90 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "border border-border-subtle bg-background/50 hover:border-foreground/30 text-foreground hover:bg-background/80"
              }`}
            >
              Choose Plan
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
