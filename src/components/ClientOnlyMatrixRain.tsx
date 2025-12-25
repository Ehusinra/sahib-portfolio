"use client";

import { useState, useEffect } from "react";
import MatrixRain from "./MatrixRain";

export default function ClientOnlyMatrixRain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <MatrixRain />;
}
