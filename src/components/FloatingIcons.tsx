"use client";

import { motion } from "framer-motion";
import { Code2, Braces, Terminal, Zap, Sparkles, Cpu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const icons = [
  { Icon: Code2, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: Braces, delay: 2, duration: 25, x: "80%", y: "15%" },
  { Icon: Terminal, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Zap, delay: 1, duration: 18, x: "85%", y: "60%" },
  { Icon: Sparkles, delay: 3, duration: 24, x: "50%", y: "30%" },
  { Icon: Cpu, delay: 5, duration: 21, x: "70%", y: "80%" },
];

export default function FloatingIcons() {
  const { theme } = useTheme();

  // MUCH darker, highly saturated colors for strong visibility
  const iconColor = theme === "light" ? "#047857" : "#3b82f6"; // emerald-700 (very dark) for light, blue-500 for dark

  // Much higher opacity for light mode to make icons clearly visible
  const containerOpacity = theme === "light" ? "opacity-50" : "opacity-30";

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${containerOpacity}`}>
      {icons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon
              className="w-14 h-14"
              strokeWidth={1.5}
              style={{ color: iconColor }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
