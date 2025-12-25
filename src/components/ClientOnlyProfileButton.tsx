"use client";

import { useState, useEffect } from "react";
import ProfileButton from "./ProfileButton";

export default function ClientOnlyProfileButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ProfileButton />;
}
