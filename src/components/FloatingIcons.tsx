"use client";

import { motion } from "framer-motion";
import { Code2, Braces, Terminal, Zap, Sparkles, Cpu } from "lucide-react";

const icons = [
  { Icon: Code2, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: Braces, delay: 2, duration: 25, x: "80%", y: "15%" },
  { Icon: Terminal, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Zap, delay: 1, duration: 18, x: "85%", y: "60%" },
  { Icon: Sparkles, delay: 3, duration: 24, x: "50%", y: "30%" },
  { Icon: Cpu, delay: 5, duration: 21, x: "70%", y: "80%" },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
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
            <Icon className="w-12 h-12 text-accent-primary" strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}
