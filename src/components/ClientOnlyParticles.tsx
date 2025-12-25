"use client";

import { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function ClientOnlyParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ParticlesBackground />;
}
