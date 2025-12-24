"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";

type SkillLevel = "primary" | "proficient";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  skills: Skill[];
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories: SkillCategory[] = [
    {
      title: "Front-end",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "primary" },
        { name: "Next.js", level: "primary" },
        { name: "TypeScript", level: "primary" },
        { name: "Tailwind CSS", level: "primary" },
        { name: "Vue.js", level: "proficient" },
        { name: "JavaScript", level: "primary" },
        { name: "HTML", level: "primary" },
        { name: "CSS", level: "primary" },
        { name: "Bootstrap", level: "proficient" },
      ],
    },
    {
      title: "Back-end",
      icon: Database,
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Node.js", level: "primary" },
        { name: "Laravel", level: "proficient" },
        { name: "Prisma", level: "proficient" },
        { name: "PostgreSQL", level: "proficient" },
        { name: "MySQL", level: "proficient" },
        { name: "MongoDB", level: "proficient" },
        { name: "REST APIs", level: "primary" },
        { name: "Neon.tech", level: "proficient" },
      ],
    },
    {
      title: "Tools & Platform",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: "primary" },
        { name: "GitHub", level: "primary" },
        { name: "Docker", level: "proficient" },
        { name: "Postman", level: "proficient" },
        { name: "Firebase", level: "proficient" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const getSkillSize = (level: SkillLevel) => {
    return level === "primary" ? "text-base px-4 py-2.5" : "text-sm px-3 py-2";
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 px-6 bg-background section-noise overflow-hidden"
    >
      {/* Dual accent orbs matching category colors */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Production-ready expertise across the modern web development stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`${getSkillSize(
                        skill.level
                      )} font-mono border border-border-subtle bg-background/70 backdrop-blur-sm text-foreground/80 rounded-lg hover:border-foreground/40 hover:text-foreground hover:scale-105 transition-all cursor-default ${
                        skill.level === "primary"
                          ? "font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-foreground/50 font-mono">
            <span className="inline-block w-3 h-3 rounded-full bg-accent-primary mr-2" />
            Larger tags indicate primary expertise with production experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
