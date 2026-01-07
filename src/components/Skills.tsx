"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";

type SkillLevel = "primary" | "proficient";

interface Skill {
  name: string;
  level: SkillLevel;
  proficiency: number; // 0-100 percentage
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
        { name: "React", level: "primary", proficiency: 95 },
        { name: "Next.js", level: "primary", proficiency: 85 },
        { name: "TypeScript", level: "primary", proficiency: 90 },
        { name: "Tailwind CSS", level: "primary", proficiency: 95 },
        { name: "Vue.js", level: "proficient", proficiency: 70 },
      ],
    },
    {
      title: "Back-end",
      icon: Database,
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Node.js", level: "primary", proficiency: 85 },
        { name: "Laravel", level: "proficient", proficiency: 65 },
        { name: "Prisma", level: "proficient", proficiency: 80 },
        { name: "PostgreSQL", level: "proficient", proficiency: 75 },
      ],
    },
    {
      title: "Tools & Platform",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: "primary", proficiency: 90 },
        { name: "Docker", level: "proficient", proficiency: 65 },
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

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 px-6 bg-background border-t border-border-subtle section-gradient-subtle overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
                className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all text-center"
              >
                {/* Category Header */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Proficiency Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-sm font-mono text-foreground/80 group-hover/skill:text-foreground transition-colors ${
                            skill.level === "primary" ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-foreground/50">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-background/50 rounded-full overflow-hidden border border-border-subtle">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.proficiency}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: 0.3 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} opacity-50 blur-sm`}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.proficiency}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: 0.3 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
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
