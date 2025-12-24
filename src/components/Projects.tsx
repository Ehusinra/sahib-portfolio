"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, Briefcase } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  featured: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      id: "khalis-beauty",
      title: "Khali's Beauty",
      description:
        "Full-stack e-commerce platform for beauty products with complete shopping cart, checkout flow, and admin dashboard.",
      role: "Full Stack Developer",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      featured: true,
      challenge:
        "Build a production-ready e-commerce platform with seamless user experience, secure payment processing, and efficient inventory management.",
      solution:
        "Implemented a modern stack with Next.js for optimal performance, Prisma for type-safe database queries, and responsive UI with Tailwind CSS. Integrated secure payment gateway and real-time inventory tracking.",
      outcome:
        "Delivered a fully functional e-commerce platform with smooth checkout experience, admin panel for product management, and optimized performance for mobile users.",
      liveUrl: "#", // Replace with actual URL
      // githubUrl: "#", // Uncomment if repo is public
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="projects"
      className="relative py-24 px-6 bg-background section-gradient-subtle overflow-hidden"
    >
      {/* Central accent orb behind featured project */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Building production-ready applications that solve real problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project) =>
            project.featured ? (
              // Featured Project Card
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative p-8 md:p-10 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all overflow-hidden"
              >
                {/* Background Gradient Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-sm font-medium">
                          <Briefcase className="w-3.5 h-3.5" />
                          {project.role}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm font-mono border border-border-subtle bg-background/70 backdrop-blur-sm text-foreground/80 rounded-lg hover:border-foreground/30 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Details (if available) */}
                  {(project.challenge || project.solution || project.outcome) && (
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {project.challenge && (
                        <div className="p-4 border border-border-subtle bg-background/30 rounded-xl">
                          <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                            Challenge
                          </h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                      )}
                      {project.solution && (
                        <div className="p-4 border border-border-subtle bg-background/30 rounded-xl">
                          <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                            Solution
                          </h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      )}
                      {project.outcome && (
                        <div className="p-4 border border-border-subtle bg-background/30 rounded-xl">
                          <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                            Outcome
                          </h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {project.outcome}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                      >
                        View Live Site
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-full font-medium transition-all hover:bg-foreground/5 hover:border-foreground/20"
                      >
                        <Code2 className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              // Standard Project Card (for future projects)
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-xl hover:border-foreground/20 hover:-translate-y-1 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-border-subtle bg-background/70 text-foreground/70 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-sm text-foreground/80 hover:text-foreground font-medium flex items-center gap-1.5 group/link"
                    >
                      View Project
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          )}

          {/* Placeholder for Future Projects (optional) */}
          <motion.div
            variants={cardVariants}
            className="p-8 border border-dashed border-border-subtle bg-background/20 backdrop-blur-sm rounded-xl text-center"
          >
            <p className="text-foreground/40 font-mono text-sm mb-2">
              More projects in development
            </p>
            <p className="text-foreground/30 text-xs">
              Additional case studies will be added as projects are completed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
