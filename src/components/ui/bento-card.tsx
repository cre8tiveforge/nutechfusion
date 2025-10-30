import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  icon: ReactNode;
  description: string[];
  className?: string;
}

export function BentoCard({ title, icon, description, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      style={{ height: "19rem" }}
    >
      <div className="flex flex-col h-full">
        <div>
          <div className="mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="mt-4" style={{ height: "4rem" }}>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 