'use client';

import { cn } from '@/lib/utils';

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
        "group relative flex-shrink-0 w-[90vw] sm:w-[450px] rounded-xl overflow-hidden bg-card border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]",
        className
      )}
      style={{
        borderImage: `linear-gradient(135deg, ${gradient.includes('blue') ? '#3b82f6, #8b5cf6' : gradient.includes('purple') ? '#8b5cf6, #ec4899' : gradient.includes('emerald') ? '#10b981, #06b6d4' : gradient.includes('orange') ? '#f97316, #ef4444' : '#6366f1, #a855f7'}) 1`
      }}
    >
      {/* Content Area */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-foreground text-xs rounded border border-border hover:border-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        {outcomes && outcomes.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Results</h4>
            <ul className="space-y-2">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Gradient accent overlay */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1 opacity-70",
        gradient
      )} />
    </div>
  );
}
