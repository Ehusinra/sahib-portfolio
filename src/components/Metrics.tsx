"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code, GitBranch, Coffee, Award } from "lucide-react";

interface Metric {
  value: number;
  label: string;
  suffix: string;
  icon: typeof Code;
  color: string;
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const metrics: Metric[] = [
    {
      value: 500,
      label: "Hours of Coding",
      suffix: "+",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: 50,
      label: "Projects Completed",
      suffix: "+",
      icon: GitBranch,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: 1000,
      label: "Cups of Coffee",
      suffix: "+",
      icon: Coffee,
      color: "from-orange-500 to-red-500",
    },
    {
      value: 100,
      label: "Problems Solved",
      suffix: "+",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="relative py-16 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className="group relative p-6 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-2xl hover:border-foreground/20 transition-all text-center overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${metric.color} bg-opacity-10`}
                    >
                      <Icon className={`w-5 h-5 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Animated Number */}
                  <div className="mb-2">
                    <motion.div
                      className="text-3xl md:text-4xl font-bold gradient-text"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.5, opacity: 0 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {isInView && (
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      )}
                    </motion.div>
                  </div>

                  {/* Label */}
                  <p className="text-sm text-foreground/60 font-medium">
                    {metric.label}
                  </p>
                </div>

                {/* Pulse Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 border-2 rounded-2xl ${metric.color} opacity-0 group-hover:opacity-20`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
