"use client";

import { useState, useEffect } from "react";
import AnimatedBlobs from "./AnimatedBlobs";

export default function ClientOnlyBlobs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <AnimatedBlobs />;
}
