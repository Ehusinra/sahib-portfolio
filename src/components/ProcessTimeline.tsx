"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Palette, Code2, TestTube, Eye, CheckCircle } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Requirement Discussion",
      description: "We discuss your vision, goals, target audience, and specific requirements.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Proposal & Quotation",
      description: "Clear breakdown of scope, timeline, deliverables, and pricing.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Design",
      description: "Creating wireframes and visual designs based on your brand guidelines.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Development",
      description: "Building the website with clean, maintainable code and best practices.",
      icon: Code2,
    },
    {
      number: "05",
      title: "Testing",
      description: "Comprehensive testing across browsers, devices, and performance checks.",
      icon: TestTube,
    },
    {
      number: "06",
      title: "Client Review",
      description: "You review the completed work and request any revisions within agreed scope.",
      icon: Eye,
    },
    {
      number: "07",
      title: "Final Delivery",
      description: "Deployment to production and handover of all assets and documentation.",
      icon: CheckCircle,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
      className="space-y-4"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            {/* Timeline line on desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute left-12 top-20 w-0.5 h-16 bg-gradient-to-b from-accent-primary to-transparent" />
            )}

            {/* Step card */}
            <div className="flex gap-4 md:gap-6">
              {/* Icon circle */}
              <div className="flex-shrink-0">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative w-24 md:w-28 h-24 md:h-28 rounded-full border-2 border-accent-primary/30 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center group-hover:border-accent-primary/60 transition-all duration-300"
                >
                  <div className="absolute inset-2 rounded-full border border-accent-primary/20 group-hover:border-accent-primary/40 transition-all" />
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 md:pb-12 pt-2">
                <div className="mb-2">
                  <span className="text-xs md:text-sm font-mono text-accent-primary/70 font-semibold">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
