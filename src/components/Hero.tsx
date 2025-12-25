"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";
import ClientOnlyMatrixRain from "./ClientOnlyMatrixRain";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";
import TypingAnimation from "./TypingAnimation";

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

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Matrix Rain Background */}
      <ClientOnlyMatrixRain />

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
            <TypingAnimation
              words={[
                "Front-end Developer",
                "React Specialist",
                "TypeScript Expert",
                "UI/UX Enthusiast"
              ]}
            />
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

        {/* Skill Logos */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center mb-12 max-w-2xl mx-auto"
        >
          {/* React Logo */}
          <div className="group relative">
            <div className="p-3 rounded-lg border border-border-subtle bg-background/30 backdrop-blur-sm hover:border-[#61DAFB]/50 transition-all hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">React</span>
          </div>

          {/* Next.js Logo */}
          <div className="group relative">
            <div className="p-3 rounded-lg border border-border-subtle bg-background/30 backdrop-blur-sm hover:border-foreground/50 transition-all hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0961-.0635c.9834-.6562 2.0335-1.6952 2.8061-2.7797 1.2752-1.7872 2.0898-3.8969 2.3313-6.0337.0961-.6591.1078-.854.1078-1.7476 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Next.js</span>
          </div>

          {/* TypeScript Logo */}
          <div className="group relative">
            <div className="p-3 rounded-lg border border-border-subtle bg-background/30 backdrop-blur-sm hover:border-[#3178C6]/50 transition-all hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#3178C6"/>
                <path d="M12.5 8v8M9 11h7M16.5 16h-9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13 10h3.5l-.5 6h-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">TypeScript</span>
          </div>

          {/* Tailwind CSS Logo */}
          <div className="group relative">
            <div className="p-3 rounded-lg border border-border-subtle bg-background/30 backdrop-blur-sm hover:border-[#06B6D4]/50 transition-all hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 6C9 6 7.5 7.5 7 10.5C7.5 8.5 9 7.5 11 8C11.8 8.2 12.4 8.8 13 9.4C14.1 10.5 15.5 11.5 18 11.5C21 11.5 22.5 10 23 7C22.5 9 21 10 19 9.5C18.2 9.3 17.6 8.7 17 8.1C15.9 7 14.5 6 12 6ZM7 11.5C4 11.5 2.5 13 2 16C2.5 14 4 13 6 13.5C6.8 13.7 7.4 14.3 8 14.9C9.1 16 10.5 17 13 17C16 17 17.5 15.5 18 12.5C17.5 14.5 16 15.5 14 15C13.2 14.8 12.6 14.2 12 13.6C10.9 12.5 9.5 11.5 7 11.5Z" fill="#06B6D4"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Tailwind CSS</span>
          </div>

          {/* Framer Motion Logo */}
          <div className="group relative">
            <div className="p-3 rounded-lg border border-border-subtle bg-background/30 backdrop-blur-sm hover:border-[#BB4B96]/50 transition-all hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" fill="#BB4B96"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Framer Motion</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full sm:w-auto inline-block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="group px-8 py-4 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-full font-medium transition-all hover:bg-foreground/5 hover:border-foreground/20 w-full sm:w-auto inline-block"
            >
              Get in Touch
            </a>
          </MagneticButton>
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
            href="https://facebook.com/sabbiarrafta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110 hover:rotate-6"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-5 h-5" />
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
