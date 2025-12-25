"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
}

export default function ScrambleText({
  text,
  className = "",
  scrambleSpeed = 20,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  useEffect(() => {
    if (!isHovered) {
      // When not hovered, schedule state update asynchronously
      const timeout = setTimeout(() => setDisplayText(text), 0);
      return () => clearTimeout(timeout);
    }

    let currentIndex = 0;
    const scrambleInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        const scrambled = text
          .split("")
          .map((char, index) => {
            if (index < currentIndex) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayText(scrambled);
        currentIndex += 0.5; // Increased from 0.1 to 0.5 for faster reveal
      } else {
        clearInterval(scrambleInterval);
        setDisplayText(text);
      }
    }, scrambleSpeed);

    return () => clearInterval(scrambleInterval);
  }, [isHovered, text, scrambleSpeed, chars]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText || text}
    </span>
  );
}
