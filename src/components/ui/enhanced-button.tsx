'use client';

import { useState, useRef, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
  magnetic?: boolean;
}

export function EnhancedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className,
  glow = false,
  magnetic = false
}: EnhancedButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl',
    secondary: 'bg-muted text-foreground hover:bg-muted/80',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  const glowStyles = glow && isHovered ? 'animate-glow' : '';

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    glowStyles,
    className
  );

  const transform = magnetic && isHovered
    ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`
    : 'translate(0, 0) scale(1)';

  const commonProps = {
    ref: buttonRef as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: { transform },
    className: combinedStyles
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: 'translateX(-100%)' }}
          />
        )}
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
      )}
    </button>
  );
}
