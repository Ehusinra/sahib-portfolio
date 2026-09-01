"use client";

import { motion } from "framer-motion";
import { Shield, X } from "lucide-react";

export default function SupportCard() {
  const included = [
    "Bugs caused by the delivered implementation",
    "Broken delivered functionality",
    "Responsive/display issues",
    "Deployment-related defects",
  ];

  const notIncluded = [
    "New pages or sections",
    "New features or functionality",
    "Major redesigns",
    "New integrations",
    "Changes outside the agreed scope",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="max-w-4xl mx-auto"
    >
      {/* Main Card */}
      <div className="relative rounded-2xl border border-accent-primary/30 bg-gradient-to-br from-accent-primary/8 to-accent-secondary/8 backdrop-blur-sm overflow-hidden p-8 md:p-12 shadow-[0_10px_40px_rgba(59,130,246,0.1)] hover:shadow-[0_15px_50px_rgba(59,130,246,0.15)] transition-all duration-300">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-secondary/5 rounded-full blur-3xl -z-10" />

        {/* Header */}
        <div className="flex items-start gap-4 md:gap-6 mb-12">
          <div className="p-4 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary bg-opacity-20">
            <Shield className="w-7 h-7 md:w-8 md:h-8 text-accent-primary" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              30 Days <span className="text-accent-primary">Free Support</span>
            </h3>
            <p className="text-foreground/70">
              After final delivery, I provide comprehensive support for bugs and issues.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Included */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Included Support
            </h4>
            <ul className="space-y-3">
              {included.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm md:text-base">
                  <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Not Included
            </h4>
            <ul className="space-y-3">
              {notIncluded.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-sm md:text-base">
                  <X className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-8 border-t border-foreground/10">
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
            <span className="font-semibold text-foreground">Note:</span> Support covers issues caused by the delivered implementation. Any work outside the agreed project scope will be quoted separately as additional services.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
