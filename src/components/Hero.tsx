"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";
import MatrixRain from "./MatrixRain";
import ScrambleText from "./ScrambleText";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Background Grid with Parallax */}
      <motion.div
        style={{ y: gridY, opacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] motion-reduce:transform-none motion-reduce:opacity-100"
      />

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
            Available for Remote Work
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight mb-6 leading-[1.1]"
        >
          <ScrambleText text="Sabbi Arrafta Sahib" />
          <br />
          <span className="gradient-text">
            <ScrambleText text="Front-end Developer" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
        >
          Crafting scalable, high-performance web experiences with modern frontend technologies.
          <br className="hidden sm:block" />
          Focused on production-ready code and exceptional user experiences.
        </motion.p>

        {/* Skill Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center items-center mb-12 max-w-2xl mx-auto"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm font-mono border border-border-subtle bg-background/30 backdrop-blur-sm text-foreground/70 rounded-lg hover:border-foreground/30 hover:text-foreground/90 transition-colors"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-full font-medium transition-all hover:bg-foreground/5 hover:border-foreground/20 w-full sm:w-auto"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center items-center"
        >
          <a
            href="https://github.com/Ehusinra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110 hover:rotate-6"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sabbi-arrafta-sahib-ehus/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110 hover:rotate-6"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:sabbiarrafta@gmail.com"
            className="p-3 rounded-full border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-1 h-16 bg-gradient-to-b from-foreground/20 to-transparent rounded-full" />
      </div>
    </section>
  );
}
