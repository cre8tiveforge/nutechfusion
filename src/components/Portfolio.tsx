'use client';

import { useState } from 'react';
import { PortfolioCard } from './ui/portfolio-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Real, documented client projects
  const portfolioProjects = [
    {
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
    },
    {
      title: "Church Expansion VR Visualization",
      category: "VR Visualization",
      description: "Created a comprehensive VR visualization for a church expansion project, showing a 1:1 scale representation of the existing church, proposed assisted living facility, and surrounding neighborhood. Addressed community concerns about visual impact by enabling stakeholders to experience the proposed changes immersively before construction.",
      technologies: ["Unity", "Blender", "VR Headsets", "Photoshop", "Substance Painter", "Architectural Modeling"],
      outcomes: [
        "Addressed community concerns through realistic visualization",
        "Enabled 1:1 scale immersive experience of proposed expansion",
        "Facilitated informed decision-making for stakeholders",
        "Demonstrated neighborhood impact before construction began"
      ],
      gradient: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"
    },
    {
      title: "ADHD Empathy Tool for Parent Education",
      category: "VR Healthcare",
      description: "Developed an immersive VR empathy tool for psychiatrists treating children with ADHD. The experience simulates sensory overload and attention challenges, allowing parents to gain first-hand understanding of what their children experience, improving empathy and support capabilities.",
      technologies: ["Unity", "VR Headsets", "Audio/Visual Effects", "Interaction Design", "Medical Application Development"],
      outcomes: [
        "Improved parent understanding of ADHD experiences",
        "Enhanced empathy and support for affected children",
        "Valuable educational tool for psychiatric practice",
        "Demonstrated VR's potential in medical empathy training"
      ],
      gradient: "bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700"
    },
    {
      title: "Industrial Oil Rig VR Simulation",
      category: "VR Training",
      description: "Created a detailed VR oil rig facility simulation for industrial safety training. Provides a risk-free environment for equipment familiarization, safety procedures, and emergency training. Developed with both PC VR (high-fidelity) and Mobile VR (optimized accessibility) versions.",
      technologies: ["Unity", "Blender", "VR Headsets", "Physics Simulation", "Real-time Rendering", "Mobile VR Optimization"],
      outcomes: [
        "Foundation for comprehensive safety training program",
        "Realistic industrial facility visualization",
        "Cost-effective alternative to on-site training",
        "Scalable platform for future training modules"
      ],
      gradient: "bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-700"
    },
    {
      title: "Motion Capture Production for Gaming & Film",
      category: "3D Production",
      description: "Managed large-scale motion capture production combining gaming and film applications. Handled full pipeline from pre-production (hiring actors, booking facilities) through production (directing performances) to post-production (file management, motion data processing, and integration with 3D pipeline).",
      technologies: ["Motion Capture Systems", "Blender", "Particle Systems", "Character Animation", "Cloth Simulation", "Cycles & Eevee Rendering"],
      outcomes: [
        "Successful multi-day motion capture shoot completion",
        "Professional-quality character animations delivered",
        "Full production pipeline management demonstrated",
        "Complex file management for large-scale project"
      ],
      gradient: "bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800"
    }
  ];

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle transition end to reset position for infinite loop
  const handleTransitionEnd = () => {
    // Reset to the real position without animation
    if (currentIndex >= portfolioProjects.length) {
      // Use requestAnimationFrame to prevent jitter
      requestAnimationFrame(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      });
    } else if (currentIndex < 0) {
      requestAnimationFrame(() => {
        setIsTransitioning(false);
        setCurrentIndex(portfolioProjects.length - 1);
      });
    } else {
      setIsTransitioning(false);
    }
  };

  // Create extended array for infinite scroll effect
  // Need 3 items on each end for proper 3-card viewport
  const extendedProjects = [
    ...portfolioProjects.slice(-3), // Last 3 at start
    ...portfolioProjects,           // Original array
    ...portfolioProjects.slice(0, 3) // First 3 at end
  ];

  // Calculate offset - start at index 3 (after the prepended copies)
  const getOffset = () => {
    const adjustedIndex = currentIndex + 3;
    // Each move = card width + gap
    // Card width = (100% - 48px) / 3, gap = 24px
    // Movement = (100% - 48px) / 3 + 24px = (100% - 48px + 72px) / 3 = (100% + 24px) / 3
    return `calc(-${adjustedIndex} * ((100% + 24px) / 3))`;
  };

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivering measurable results across AI, VR, and 3D production.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Only visible on hover */}
          <button
            onClick={handlePrevious}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track - Slides horizontally */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(${getOffset()})`,
                transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProjects.map((project, index) => (
                <div
                  key={`${index}-${project.title}`}
                  className="flex-shrink-0"
                  style={{
                    width: 'calc((100% - 48px) / 3)'
                  }}
                >
                  <PortfolioCard
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    technologies={project.technologies}
                    outcomes={project.outcomes}
                    gradient={project.gradient}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Interested in similar solutions for your organization?
          </p>
          <button
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
