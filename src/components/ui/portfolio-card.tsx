'use client';

import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  outcomes?: string[];
  gradient: string;
  className?: string;
}

export function PortfolioCard({
  title,
  description,
  category,
  technologies,
  outcomes,
  gradient,
  className
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-[90vw] sm:w-[450px] rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {/* Image/Gradient Area */}
      <div className={cn(
        "relative h-64 overflow-hidden",
        gradient
      )}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm rounded-full border border-primary/30 mb-2">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-foreground text-xs rounded border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        {outcomes && outcomes.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Outcomes</h4>
            <ul className="space-y-1">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
