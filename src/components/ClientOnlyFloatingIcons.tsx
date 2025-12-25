"use client";

import { useState, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

export default function ClientOnlyFloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <FloatingIcons />;
}
