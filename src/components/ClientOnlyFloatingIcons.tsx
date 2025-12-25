"use client";

import { useState, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

export default function ClientOnlyFloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return null;
  }

  return <FloatingIcons />;
}
