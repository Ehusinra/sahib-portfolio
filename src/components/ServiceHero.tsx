"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  onContactClick?: () => void;
  onPackagesClick?: () => void;
}

export default function ServiceHero({ onContactClick, onPackagesClick }: ServiceHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] motion-reduce:transform-none" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-background/50 backdrop-blur-sm text-xs sm:text-sm font-mono text-foreground/70 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
            </span>
            Professional Services
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Website Development <br />
          <span className="gradient-text">Services</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-4 leading-relaxed font-light"
        >
          Modern, responsive, and performance-focused websites built around your business.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Custom website development for businesses, organizations, professionals and individuals. From requirements to delivery and ongoing support.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <MagneticButton>
            <button
              onClick={onContactClick}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#5f7de8] to-[#6d7edb] hover:from-[#5a75df] hover:to-[#667add] text-white/95 font-medium text-base transition-all duration-300 flex items-center gap-2 group hover:shadow-[0_0_24px_rgba(92,122,230,0.28)] hover:scale-[1.02]"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={onPackagesClick}
              className="px-8 py-3 rounded-lg border border-border-subtle hover:border-foreground/30 text-foreground font-medium text-base transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background/70 hover:scale-105"
            >
              View Packages
            </button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
