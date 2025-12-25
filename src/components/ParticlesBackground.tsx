"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Subtle opacity for both modes
  const canvasOpacity = theme === "light" ? "opacity-40" : "opacity-50";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Theme-aware colors: MUCH darker, highly saturated colors for light mode visibility
    const particleColor = theme === "light" ? "29, 78, 216" : "16, 185, 129"; // blue-700 (very dark) for light, emerald-500 for dark

    // Theme-aware particle and connection visibility - matching dark mode subtlety
    const particleOpacityMultiplier = theme === "light" ? 0.8 : 1; // Subtle particles in light mode
    const connectionOpacityMultiplier = theme === "light" ? 1 : 1; // Same connection visibility for both modes

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      canvas: HTMLCanvasElement;

      constructor(canvasElement: HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = (Math.random() * 0.6 + 0.3) * particleOpacityMultiplier;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${particleColor}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles - increased count for more visibility
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 150);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.35 * connectionOpacityMultiplier;
            ctx.strokeStyle = `rgba(${particleColor}, ${Math.min(opacity, 1)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${canvasOpacity}`}
      style={{ mixBlendMode: theme === "light" ? "multiply" : "screen" }}
    />
  );
}
