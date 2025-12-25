"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Layers, GraduationCap } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const highlights = [
    {
      icon: Code2,
      label: "Clean Architecture",
      description: "Maintainable, scalable codebases",
    },
    {
      icon: Laptop,
      label: "User-Centric Design",
      description: "Accessibility and performance first",
    },
    {
      icon: Layers,
      label: "Modern Stack",
      description: "React ecosystem and TypeScript",
    },
    {
      icon: GraduationCap,
      label: "BSc in CS & Engineering",
      description: "Foundation in algorithms, data structures, and system design",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 px-6 bg-background border-t border-border-subtle section-gradient-subtle overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          {/* Left Column - Narrative */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              I hold a BSc in Computer Science & Engineering and specialize in
              building front-end applications that solve real problems. My
              approach is simple: understand the user need, design the solution,
              and implement it with clean, maintainable code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              I focus on the React ecosystem because it allows me to build
              complex interfaces while keeping the codebase predictable. TypeScript
              catches errors before they reach production. Next.js handles
              performance and SEO. Tailwind keeps styling consistent and fast.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              Whether it's a SaaS dashboard, an e-commerce platform, or a
              marketing site, I deliver production-ready work that teams can
              build on. I write documentation, follow best practices, and
              optimize for the people who will maintain the code after me.
              Beyond frontend, I'm also exploring Python software engineering
              to expand my technical range.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#contact"
                className="link-underline inline-flex items-center gap-2 text-foreground/80 hover:text-foreground font-medium group transition-colors"
              >
                Let's work together
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Technical Highlights */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 md:pt-16"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-xl hover:border-foreground/20 transition-all hover:translate-x-2 playful-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors jello-hover">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
