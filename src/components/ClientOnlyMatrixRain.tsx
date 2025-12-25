"use client";

import { useState, useEffect } from "react";
import MatrixRain from "./MatrixRain";

export default function ClientOnlyMatrixRain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return null;
  }

  return <MatrixRain />;
}
