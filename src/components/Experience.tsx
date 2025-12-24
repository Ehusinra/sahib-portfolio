"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  technologies: string[];
  highlights: string[];
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      role: "Web Developer Intern",
      company: "Dream71 Bangladesh Ltd",
      location: "Bangladesh",
      duration: "Jan 2025 – Mar 2025",
      type: "Internship",
      technologies: ["Vue.js", "Laravel"],
      highlights: [
        "Contributed to production features using Vue.js and Laravel, gaining hands-on experience with modern full-stack development",
        "Collaborated with senior developers in an agile team environment, participating in code reviews and daily standups",
        "Developed problem-solving skills by tackling real-world challenges and delivering features under professional standards",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 px-6 bg-background border-t border-border-subtle section-grid-overlay overflow-hidden"
    >
      {/* Subtle accent orb following timeline */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Building real-world solutions in production environments
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border-subtle">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-accent-primary to-accent-secondary"
            />
          </div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative pl-12 md:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.3 }}
                    className="w-4 h-4 rounded-full bg-background border-2 border-accent-primary"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 w-4 h-4 rounded-full bg-accent-primary motion-reduce:animate-none"
                  />
                </div>
              </div>

              {/* Experience Card */}
              <div className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-xl hover:border-foreground/20 hover:-translate-y-1 transition-all">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-foreground/80 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-sm font-medium">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono border border-border-subtle bg-background/70 text-foreground/70 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-primary mt-2" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-primary/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}

          {/* Future Placeholder (Optional) */}
          <motion.div
            variants={cardVariants}
            className="relative pl-12 md:pl-24"
          >
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-background border-2 border-border-subtle" />
            </div>

            {/* Placeholder Card */}
            <div className="p-6 border border-dashed border-border-subtle bg-background/20 backdrop-blur-sm rounded-xl">
              <p className="text-foreground/40 text-center font-mono text-sm">
                More experiences coming soon...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
