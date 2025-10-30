'use client';

import { AnimatedHero } from "@/components/ui/animated-hero";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { GradientText } from "@/components/ui/gradient-text";
import { StatsCounter } from "@/components/ui/stats-counter";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { EnhancedButton } from "@/components/ui/enhanced-button";

export default function Hero() {
  const words = ["AI", "Virtual Reality", "Mixed Reality", "3D Production"];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <BackgroundPaths
        className="absolute inset-0 z-0 opacity-50 dark:opacity-50"
        strokeWidth={0.4}
        pathCount={60}
        pathColor="rgba(0, 102, 255, 0.4)"
        animationDuration={35}
      />
      <div className="container-width relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-4 text-foreground animate-float">
              Transforming Business
            </span>
            <span className="block text-foreground mb-4">Through</span>
            <GradientText
              from="from-primary"
              via="via-secondary"
              to="to-primary"
              animate={true}
              className="block"
            >
              <AnimatedHero words={words} className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent" />
            </GradientText>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Custom AI Solutions & Immersive Experiences for Forward-Thinking Companies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <EnhancedButton
              variant="primary"
              size="lg"
              glow={true}
              magnetic={true}
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </EnhancedButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <StatsCounter value={10} suffix="+" label="Years Experience" />
            <StatsCounter value={100} suffix="+" label="Projects Delivered" />
            <StatsCounter value={20} suffix="+" label="Technologies" />
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator targetId="services" />
        </div>
      </div>
    </section>
  );
}
