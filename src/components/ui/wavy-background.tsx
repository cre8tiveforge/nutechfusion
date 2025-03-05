"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#0066FF20", "#6600FF20"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "slow",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef.current;
    if (!container) return;

    const computedStyle = window.getComputedStyle(container);
    const height = parseInt(computedStyle.height);
    canvas.width = window.innerWidth;
    canvas.height = height;

    const waves = colors.map((color) => ({
      color,
      offset: Math.random() * waveWidth,
      length: waveWidth,
      amplitude: 0.5 * waveWidth,
    }));

    const animate = () => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = waveOpacity;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let i = 0; i <= canvas.width; i++) {
          const x = i;
          const y =
            canvas.height / 2 +
            Math.sin((i + wave.offset) / wave.length) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();

        wave.offset += speed === "fast" ? 0.5 : 0.2;
        if (wave.offset > waveWidth) {
          wave.offset = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundFill, colors, speed, waveOpacity, waveWidth]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          filter: `blur(${blur}px)`,
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}; 