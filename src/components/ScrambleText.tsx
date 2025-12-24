"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
}

export default function ScrambleText({
  text,
  className = "",
  speed = 50,
  scrambleSpeed = 30,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  useEffect(() => {
    let currentIndex = 0;
    let scrambleInterval: NodeJS.Timeout;

    const scramble = () => {
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
        currentIndex += 0.1;
      } else {
        clearInterval(scrambleInterval);
        setDisplayText(text);
      }
    };

    if (isHovered) {
      currentIndex = 0;
      scrambleInterval = setInterval(scramble, scrambleSpeed);
      return () => clearInterval(scrambleInterval);
    } else {
      setDisplayText(text);
    }
  }, [isHovered, text, scrambleSpeed]);

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
