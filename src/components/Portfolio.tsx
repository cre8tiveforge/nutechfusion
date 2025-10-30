'use client';

import { useRef } from 'react';
import { PortfolioCard } from './ui/portfolio-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 470; // Card width (450px) + gap (20px)
    const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const portfolioProjects = [
    {
      title: "New Hope Church AI Receptionist",
      category: "AI Solutions",
      description: "Deployed an AI-powered voice receptionist system for New Hope Church, providing 24/7 automated phone support for congregation members. The system handles common inquiries, schedules appointments, and provides service information using natural language processing.",
      technologies: ["Vapi", "OpenAI GPT-4", "n8n", "Voice AI", "Natural Language Processing"],
      outcomes: [
        "24/7 automated phone coverage",
        "Reduced staff workload by 60%",
        "Improved response time for common inquiries",
        "Enhanced member experience with instant support"
      ],
      gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "Enterprise VR Training Platform",
      category: "Virtual Reality",
      description: "Developed an immersive VR training platform for manufacturing safety procedures. The solution reduced training time by 40% while improving knowledge retention through hands-on virtual practice in hazardous scenarios without real-world risk.",
      technologies: ["Unity", "OpenXR", "C#", "Meta Quest", "Blender", "Photon Networking"],
      outcomes: [
        "40% reduction in training time",
        "85% improvement in safety test scores",
        "Zero real-world training incidents",
        "Multi-user collaborative training sessions"
      ],
      gradient: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700"
    },
    {
      title: "Medical Device Product Visualization",
      category: "3D Production",
      description: "Created photorealistic 3D models and interactive web experiences for a medical device manufacturer's product catalog. Enabled customers to explore complex internal mechanisms and view products in AR before purchase.",
      technologies: ["Blender", "Substance Painter", "Three.js", "WebGL", "React", "AR.js"],
      outcomes: [
        "300% increase in online engagement",
        "45% reduction in product return rate",
        "Featured in major medical trade shows",
        "AR preview functionality drove sales"
      ],
      gradient: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"
    },
    {
      title: "Real Estate Virtual Tours",
      category: "VR/3D Production",
      description: "Built an end-to-end virtual tour platform for luxury real estate, combining 360° photography, 3D reconstruction, and VR walkthroughs. Clients can explore properties remotely with interactive hotspots and detailed information.",
      technologies: ["Unreal Engine", "Matterport", "WebXR", "React", "Node.js", "PostgreSQL"],
      outcomes: [
        "50% increase in qualified leads",
        "Reduced in-person showings by 70%",
        "Expanded market reach internationally",
        "Faster sales cycle by 2 weeks average"
      ],
      gradient: "bg-gradient-to-br from-orange-500 via-red-600 to-pink-700"
    },
    {
      title: "AI-Powered Content Generation Suite",
      category: "AI Solutions",
      description: "Designed and deployed a comprehensive AI content generation platform for a marketing agency, automating blog posts, social media content, and email campaigns while maintaining brand voice and SEO optimization.",
      technologies: ["OpenAI", "Anthropic Claude", "LangChain", "Next.js", "Python", "FastAPI", "Supabase"],
      outcomes: [
        "10x increase in content output",
        "Consistent brand voice across channels",
        "70% reduction in content production costs",
        "Improved SEO rankings by 40%"
      ],
      gradient: "bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800"
    }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivering measurable results for our clients across industries.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-lg",
              "hidden sm:block"
            )}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={() => scroll('right')}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-lg",
              "hidden sm:block"
            )}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {portfolioProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                technologies={project.technologies}
                outcomes={project.outcomes}
                gradient={project.gradient}
                className="snap-start"
              />
            ))}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="text-center mt-4 sm:hidden">
            <p className="text-sm text-muted-foreground">Swipe to explore more projects →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
