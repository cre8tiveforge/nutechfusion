'use client';

import { PortfolioCard } from './ui/portfolio-card';

export default function Portfolio() {
  // Only using real, documented client project
  const featuredProject = {
    title: "New Hope Methodist Church - AI Voice Receptionist",
    category: "AI Solutions",
    description: "Deployed an AI-powered voice receptionist system for New Hope Methodist Church in Houston, TX, providing 24/7 automated phone support for congregation members. The system handles common inquiries about services, events, and general church information using natural language processing and voice AI technology, seamlessly integrated with their existing n8n workflows.",
    technologies: ["Vapi", "OpenAI GPT-4", "n8n Workflows", "Voice AI", "Natural Language Processing", "Workflow Automation"],
    outcomes: [
      "24/7 automated phone coverage for congregation",
      "Instant responses to common church inquiries",
      "Seamless integration with existing church systems",
      "Enhanced member experience with always-available support"
    ],
    gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
  };

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world AI implementation delivering tangible results for our clients.
          </p>
        </div>

        {/* Single Featured Project - Centered */}
        <div className="flex justify-center">
          <PortfolioCard
            title={featuredProject.title}
            description={featuredProject.description}
            category={featuredProject.category}
            technologies={featuredProject.technologies}
            outcomes={featuredProject.outcomes}
            gradient={featuredProject.gradient}
            className="max-w-2xl"
          />
        </div>

        {/* Additional Context */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Interested in similar AI solutions for your organization?{' '}
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:underline font-medium"
            >
              Let's discuss your project
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
