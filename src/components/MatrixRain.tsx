"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Reduced opacity to make matrix rain less noisy
  const canvasOpacity = theme === "light" ? "opacity-27" : "opacity-22";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Theme-aware colors: VERY dark blue for light mode visibility, emerald green for dark mode
    const matrixColor = theme === "light" ? "29, 78, 216" : "16, 185, 129"; // blue-700 (very dark) for light, emerald-500 for dark
    const fadeColor = theme === "light" ? "255, 255, 255, 0.05" : "0, 0, 0, 0.05"; // white fade for light, black for dark

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Characters for the matrix rain (code symbols)
    const chars = "01{}</>[]()import const let function class return if else";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      if (!ctx) return;

      // Theme-aware fade effect
      ctx.fillStyle = `rgba(${fadeColor})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Reduced opacity for softer, less noisy effect
        const opacity = Math.random() * 0.3 + 0.2;
        ctx.fillStyle = `rgba(${matrixColor}, ${opacity})`;

        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${canvasOpacity} blur-[0.3px]`}
    />
  );
}
