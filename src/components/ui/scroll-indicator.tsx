'use client';

import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export function ScrollIndicator({ targetId, className }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors',
        className
      )}
      aria-label="Scroll down"
    >
      <span className="text-sm font-medium">Scroll</span>
      <div className="relative">
        <ChevronDown
          className="w-6 h-6 animate-bounce-slow"
          strokeWidth={2}
        />
        <ChevronDown
          className="w-6 h-6 absolute top-0 left-0 opacity-50 animate-bounce-slow"
          style={{ animationDelay: '0.2s' }}
          strokeWidth={2}
        />
      </div>
    </button>
  );
}
