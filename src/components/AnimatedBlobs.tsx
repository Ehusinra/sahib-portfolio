"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function AnimatedBlobs() {
  const { theme } = useTheme();

  // Theme-aware colors: darker, more saturated for light mode visibility
  const blob1Color = theme === "light"
    ? "radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, transparent 70%)" // blue-700 with higher opacity
    : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)";

  const blob2Color = theme === "light"
    ? "radial-gradient(circle, rgba(109, 40, 217, 0.6) 0%, transparent 70%)" // purple-700 with higher opacity
    : "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)";

  const blob3Color = theme === "light"
    ? "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, transparent 70%)" // teal-600 with higher opacity
    : "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)";

  // Higher opacity for light mode
  const blob1Opacity = theme === "light" ? "opacity-40" : "opacity-30";
  const blob2Opacity = theme === "light" ? "opacity-35" : "opacity-25";
  const blob3Opacity = theme === "light" ? "opacity-30" : "opacity-20";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 - Blue */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full blur-[120px] ${blob1Opacity}`}
        style={{
          background: blob1Color,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 - Purple */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full blur-[140px] ${blob2Opacity}`}
        style={{
          background: blob2Color,
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* Blob 3 - Cyan/Teal */}
      <motion.div
        className={`absolute w-80 h-80 rounded-full blur-[100px] ${blob3Opacity}`}
        style={{
          background: blob3Color,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        initial={{ bottom: "15%", left: "30%" }}
      />
    </div>
  );
}
