"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileButton() {
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
      className="fixed top-6 left-6 z-50 group"
      style={{ fontFamily: 'var(--font-space-grotesk)' }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative flex items-center gap-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-full px-4 py-2 shadow-[0_10px_32px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_48px_rgba(16,185,129,0.25)] dark:hover:shadow-[0_18px_48px_rgba(59,130,246,0.25)] transition-all duration-300 border border-white/20 dark:border-white/30 hover:border-emerald-400/60 dark:hover:border-blue-400/60">
        {/* Glassmorphism overlay effect with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50" />

        {/* Profile Picture */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 dark:ring-white/20 group-hover:ring-emerald-400/70 dark:group-hover:ring-blue-400/70 transition-all duration-300 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Sabbi Arrafta Sahib"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Initials with gradient text */}
        <span className="relative text-sm font-bold bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:via-cyan-400 group-hover:to-blue-500 dark:group-hover:from-blue-400 dark:group-hover:via-cyan-400 dark:group-hover:to-emerald-400 transition-all duration-300 pr-1 tracking-[0.15em] uppercase">
          S.A.S
        </span>

        {/* Animated gradient glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
      </div>
    </motion.button>
  );
}
