'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  label: string;
  className?: string;
}

export function StatsCounter({
  value,
  suffix = '',
  duration = 2000,
  label,
  className
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutCubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + (value - startValue) * easeOut);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  return (
    <div
      ref={counterRef}
      className={cn(
        'card p-6 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl',
        className
      )}
    >
      <div className="text-3xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
