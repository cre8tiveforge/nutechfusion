"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
  words: string[];
  className?: string;
}

export function AnimatedHero({ words, className }: AnimatedHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWord(words[(currentIndex + 1) % words.length]);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    <div className="relative h-20 overflow-hidden">
      <div
        className={cn(
          "absolute w-full text-center transition-all duration-1000",
          isAnimating ? "opacity-0 transform translate-y-10" : "opacity-100 transform translate-y-0",
          className
        )}
      >
        {currentWord}
      </div>
    </div>
  );
} 