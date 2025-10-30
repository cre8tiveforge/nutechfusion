'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description: string[];
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  icon,
  description,
  className,
  onClick
}: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 text-left w-full",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
      style={{ height: "19rem" }}
    >
      <div className="flex flex-col h-full relative z-10">
        <div>
          <div className="mb-4 text-primary transition-transform group-hover:scale-110 duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-between">
            {title}
            <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </h3>
        </div>
        <div className="mt-4 flex-1">
          <ul className="space-y-2 text-muted-foreground text-sm">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more →
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
