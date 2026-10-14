
"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ExternalLink,
  Code2,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";

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
  images?: string[];
}

interface SelectedImage {
  title: string;
  images: string[];
  index: number;
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedImage, setSelectedImage] =
    useState<SelectedImage | null>(null);

  const projects: Project[] = [
    {
      id: "khalis-beauty",
      title: "Khali's Beauty",
      description:
        "Full-stack e-commerce platform for beauty products with complete shopping cart, checkout flow, and admin dashboard.",
      role: "Full Stack Developer",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Railway",
      ],
      featured: true,
      challenge:
        "Build a production-ready e-commerce platform with seamless user experience, secure payment processing, and efficient inventory management.",
      solution:
        "Implemented a modern stack with Next.js for optimal performance, Prisma for type-safe database queries, and responsive UI with Tailwind CSS. Integrated secure payment gateway and real-time inventory tracking.",
      outcome:
        "Delivered a fully functional e-commerce platform with smooth checkout experience, admin panel for product management, and optimized performance for mobile users.",
      liveUrl: "https://shajgoj-eta.vercel.app/",
      githubUrl: "https://github.com/sayeedzaman/shajgoj",
      images: [
        "/project ss 1.png",
        "/project ss 2.png",
        "/project ss 3.png",
      ],
    },
    {
      id: "astralign",
      title: "Astralign",
      description:
        "An astronomy & photography-focused web application.",
      role: "Front-End Developer",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      featured: true,
      liveUrl: "https://astralign.vercel.app/",
      githubUrl: "https://github.com/Ehusinra/Astralign",
      images: [
        "/Astralign Screenshot 1.png",
        "/Astralign Screenshot 2.png",
        "/Astralign Screenshot 3.png",
        "/Astralign Screenshot 4.png",
        "/Astralign Screenshot 5.png",
        "/Astralign Screenshot 6.png",
      ],
    },

    /*
    {
      id: "myproject",
      title: "My Project",
      description: "A short description of what the project does.",
      role: "Full Stack Developer",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      featured: true,
      liveUrl: "https://example.com/",
      githubUrl: "https://github.com/username/my-project",
      images: ["/my-project.png"],
      challenge: "What problem did the project need to solve?",
      solution: "How did you approach that problem?",
      outcome: "What was the result?",
    },
    */
  ];

  // Close the lightbox and navigate between screenshots using the keyboard.
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index + 1) % current.images.length,
              }
            : null
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index - 1 + current.images.length) %
                  current.images.length,
              }
            : null
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

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

  const openImage = (
    project: Project,
    index: number
  ) => {
    if (!project.images?.length) return;

    setSelectedImage({
      title: project.title,
      images: project.images,
      index,
    });
  };

  const navigateImage = (direction: -1 | 1) => {
    setSelectedImage((current) => {
      if (!current || current.images.length < 2) {
        return current;
      }

      return {
        ...current,
        index:
          (current.index + direction + current.images.length) %
          current.images.length,
      };
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative py-24 px-6 bg-background section-gradient-subtle overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>

            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Building production-ready applications that solve real
              problems
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
                /* Featured Project Card */
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative p-8 md:p-10 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
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

                    {/* Interactive Screenshot Gallery */}
                    {project.images &&
                      project.images.length > 0 && (
                        <div className="mb-8">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.images.map((image, index) => (
                              
<motion.button
  key={image}
  type="button"
  onClick={() => openImage(project, index)}
  onTouchEnd={(event) => {
    event.preventDefault();
    openImage(project, index);
  }}

                                aria-label={`Enlarge ${project.title} screenshot ${index + 1}`}
                               
className="group/img relative block w-full aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-background/30 cursor-zoom-in touch-manipulation select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"

                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.25 }}
                              >
                                <Image
                                  src={image}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />

                                {/* Enlarge Indicator */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                  <span className="flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground shadow-lg">
                                    <ZoomIn className="w-4 h-4" />
                                    Enlarge image
                                  </span>
                                </div>

                                {/* Screenshot Label */}
                                <span className="absolute bottom-3 left-3 text-xs font-mono text-foreground/80 px-2 py-1 bg-background/80 backdrop-blur-sm rounded opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                  Screenshot {index + 1}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

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

                    {/* Case Study Details */}
                    {(project.challenge ||
                      project.solution ||
                      project.outcome) && (
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

                    {/* Project Actions */}
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
                /* Standard Project Card */
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

                  {/* Standard Project Screenshots */}
                  {project.images &&
                    project.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {project.images.map((image, index) => (
                          <motion.button
                            key={image}
                            type="button"
                            onClick={() =>
                              openImage(project, index)
                            }
                            aria-label={`Enlarge ${project.title} screenshot ${index + 1}`}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border-subtle cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    )}

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

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/80 hover:text-foreground font-medium flex items-center gap-1.5 group/link"
                      >
                        View Project
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/80 hover:text-foreground font-medium flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            )}

            {/* Future Projects Placeholder */}
            <motion.div
              variants={cardVariants}
              className="p-8 border border-dashed border-border-subtle bg-background/20 backdrop-blur-sm rounded-xl text-center"
            >
              <p className="text-foreground/40 font-mono text-sm mb-2">
                More projects in development
              </p>

              <p className="text-foreground/30 text-xs">
                Additional case studies will be added as projects are
                completed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full-Screen Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="image-lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.title} image preview`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Title and Counter */}
            <div className="absolute top-5 left-4 sm:top-7 sm:left-8 z-20 text-white pr-16">
              <p className="font-semibold text-sm sm:text-base">
                {selectedImage.title}
              </p>

              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Image {selectedImage.index + 1} of{" "}
                {selectedImage.images.length}
              </p>
            </div>

            {/* Previous Image */}
            {selectedImage.images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  navigateImage(-1);
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Enlarged Screenshot */}
            <motion.div
              key={`${selectedImage.title}-${selectedImage.index}`}
              className="relative w-full max-w-6xl h-[70vh] sm:h-[78vh]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.images[selectedImage.index]}
                alt={`${selectedImage.title} screenshot ${selectedImage.index + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Next Image */}
            {selectedImage.images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  navigateImage(1);
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Keyboard Hint */}
            <p className="absolute bottom-4 sm:bottom-6 text-xs text-white/50 text-center px-4">
              Use ← → to navigate · Press Esc to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
