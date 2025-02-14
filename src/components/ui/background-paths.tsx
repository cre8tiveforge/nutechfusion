"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BackgroundPathsProps {
  pathCount?: number;
  className?: string;
  pathColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
}

export function BackgroundPaths({
  pathCount = 50,
  className = "",
  pathColor = "#0066FF",
  strokeWidth = 0.5,
  animationDuration = 25,
}: BackgroundPathsProps) {
  const paths = useRef<{ path: string; direction: 'ltr' | 'rtl' }[]>([]);

  useEffect(() => {
    // Generate paths for both directions
    const generatePath = (direction: 'ltr' | 'rtl') => {
      const startY = Math.random() * 100;
      const endY = Math.random() * 100;
      
      // Generate multiple control points for more dramatic curves
      const cp1x = 25 + (Math.random() * 20);
      const cp1y = startY + (Math.random() * 100 - 50);
      const cp2x = 75 + (Math.random() * 20);
      const cp2y = endY + (Math.random() * 100 - 50);

      if (direction === 'ltr') {
        return `M -10 ${startY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} 110 ${endY}`;
      } else {
        return `M 110 ${startY} C ${100 - cp1x} ${cp1y} ${100 - cp2x} ${cp2y} -10 ${endY}`;
      }
    };

    // Generate paths for both directions
    paths.current = [
      ...Array.from({ length: Math.floor(pathCount / 2) }, () => ({
        path: generatePath('ltr'),
        direction: 'ltr' as const
      })),
      ...Array.from({ length: Math.floor(pathCount / 2) }, () => ({
        path: generatePath('rtl'),
        direction: 'rtl' as const
      }))
    ];
  }, [pathCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {paths.current.map((path, index) => (
          <motion.path
            key={index}
            d={path.path}
            stroke={pathColor}
            strokeWidth={strokeWidth}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: index * (animationDuration / pathCount / 3),
            }}
          />
        ))}
      </svg>
    </div>
  );
} 