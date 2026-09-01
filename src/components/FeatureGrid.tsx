"use client";

import { motion } from "framer-motion";
import { Smartphone, Eye, Code2, Shield, Zap, BarChart3, Cloud, Wrench } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeatureGrid() {
  const features: Feature[] = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first design that works perfectly on all devices and screen sizes",
    },
    {
      icon: Eye,
      title: "Mobile Optimization",
      description: "Fast loading times and smooth interactions optimized for mobile users",
    },
    {
      icon: Code2,
      title: "Custom UI",
      description: "Tailored user interface designed specifically for your brand and goals",
    },
    {
      icon: Shield,
      title: "Security Setup",
      description: "SSL certificates, security headers, and best practices implemented",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized images, lazy loading, and code splitting for fast performance",
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description: "Google Analytics and tracking configured to monitor user behavior",
    },
    {
      icon: Cloud,
      title: "Deployment",
      description: "Professional hosting setup with automatic deployments and backups",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "30 days of free support for bugs and issues in the delivered site",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-6 rounded-xl border border-border-subtle bg-background/50 backdrop-blur-sm hover:border-foreground/20 hover:bg-background/70 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="mb-4 p-3 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 w-fit transition-transform duration-300">
              <Icon className="w-6 h-6 text-accent-primary group-hover:text-accent-secondary transition-colors" />
            </motion.div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
