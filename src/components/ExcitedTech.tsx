"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Rocket, Cpu } from "lucide-react";

interface Technology {
  name: string;
  description: string;
  icon: typeof Sparkles;
  color: string;
  reason: string;
}

export default function ExcitedTech() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const technologies: Technology[] = [
    {
      name: "AI-Powered Dev Tools",
      description: "GitHub Copilot, ChatGPT, and AI-assisted development",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      reason: "Transforming how we write code and solve problems",
    },
    {
      name: "Edge Computing",
      description: "Vercel Edge Functions, Cloudflare Workers",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      reason: "Ultra-fast, globally distributed serverless computing",
    },
    {
      name: "Web3 & Blockchain",
      description: "Ethereum, Smart Contracts, dApps",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      reason: "Decentralized future of web applications",
    },
    {
      name: "Rust & WebAssembly",
      description: "High-performance web applications",
      icon: Cpu,
      color: "from-red-500 to-orange-500",
      reason: "Native-level performance in the browser",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="excited-tech"
      className="relative py-24 px-6 bg-background section-gradient-subtle overflow-hidden"
    >
      {/* Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/10">
            <Sparkles className="w-4 h-4 text-accent-primary" />
            <span className="text-sm font-mono text-accent-primary uppercase tracking-wider">
              Future-Forward
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Technologies I&apos;m <span className="gradient-text">Excited About</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Exploring emerging technologies and staying ahead of the curve in web development
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                className="group relative p-8 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 font-mono">
                    {tech.description}
                  </p>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {tech.reason}
                    </p>
                  </div>
                </div>

                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={false}
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                    ],
                    backgroundPosition: ["-200% 0", "200% 0"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-foreground/50 font-mono">
            Always learning, always evolving. Let&apos;s build the future together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
