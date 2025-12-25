"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfileButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(0);

  const gradients = [
    { from: "#10b981", via: "#22d3ee", to: "#3b82f6" }, // emerald-cyan-blue
    { from: "#a855f7", via: "#f472b6", to: "#f43f5e" }, // purple-pink-rose
    { from: "#3b82f6", via: "#818cf8", to: "#a855f7" }, // blue-indigo-purple
    { from: "#f97316", via: "#ef4444", to: "#f472b6" }, // orange-red-pink
    { from: "#14b8a6", via: "#10b981", to: "#22c55e" }, // teal-emerald-green
    { from: "#eab308", via: "#f97316", to: "#ef4444" }, // yellow-orange-red
    { from: "#06b6d4", via: "#3b82f6", to: "#6366f1" }, // cyan-blue-indigo
    { from: "#f43f5e", via: "#a855f7", to: "#6366f1" }, // rose-purple-indigo
  ];

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 1500); // Change gradient every 1.5 seconds

    return () => clearInterval(interval);
  }, [isHovered, gradients.length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-3 left-3 sm:top-6 sm:left-6 z-50 group"
      style={{ fontFamily: 'var(--font-orbitron)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative flex items-center gap-2 sm:gap-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-full px-2 py-1.5 sm:px-4 sm:py-2 shadow-[0_10px_32px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_48px_rgba(16,185,129,0.25)] dark:hover:shadow-[0_18px_48px_rgba(59,130,246,0.25)] transition-all duration-300 border border-white/20 dark:border-white/30 hover:border-emerald-400/60 dark:hover:border-blue-400/60">
        {/* Glassmorphism overlay effect with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />

        {/* Profile Picture - responsive sizing */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 lg:w-17 lg:h-17 rounded-full overflow-hidden ring-2 ring-white/30 dark:ring-white/20 group-hover:ring-emerald-400/70 dark:group-hover:ring-blue-400/70 transition-all duration-300 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Sabbi Arrafta Sahib"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Initials with gradient text - hidden on mobile, visible on sm and up */}
        <motion.span
          className={`hidden sm:inline relative text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r bg-clip-text pr-1 tracking-[0.15em] uppercase ${
            isHovered ? "text-transparent" : "text-foreground/90"
          }`}
          style={{
            backgroundImage: isHovered
              ? `linear-gradient(to right, ${gradients[currentGradient].from}, ${gradients[currentGradient].via}, ${gradients[currentGradient].to})`
              : undefined,
          }}
          animate={{
            backgroundImage: isHovered
              ? `linear-gradient(to right, ${gradients[currentGradient].from}, ${gradients[currentGradient].via}, ${gradients[currentGradient].to})`
              : undefined,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          SABBI
        </motion.span>

        {/* Animated gradient glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
      </div>
    </motion.button>
  );
}
