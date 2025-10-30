'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Code2,
  Clapperboard,
  Box,
  Brain,
  Wrench,
  Glasses
} from 'lucide-react';

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  technologies: string[];
}

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories: TechCategory[] = [
    {
      name: "Media Production",
      icon: <Clapperboard className="w-6 h-6" />,
      color: "from-red-500 to-orange-600",
      technologies: [
        "Adobe Premiere",
        "After Effects",
        "Photoshop",
        "DaVinci Resolve",
        "Media Encoder",
        "OBS Studio"
      ]
    },
    {
      name: "3D & Game Dev",
      icon: <Box className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      technologies: [
        "Blender",
        "Unity",
        "Unreal Engine",
        "ZBrush",
        "Substance Painter"
      ]
    },
    {
      name: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "TailwindCSS",
        "Supabase",
        "Firebase"
      ]
    },
    {
      name: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      color: "from-violet-500 to-purple-600",
      technologies: [
        "Python",
        "OpenAI",
        "Anthropic",
        "Mistral",
        "Hugging Face",
        "Google Gemini",
        "CUDA"
      ]
    },
    {
      name: "Dev Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-slate-500 to-gray-600",
      technologies: [
        "Git",
        "Docker",
        "Vercel",
        "n8n"
      ]
    },
    {
      name: "XR Development",
      icon: <Glasses className="w-6 h-6" />,
      color: "from-teal-500 to-emerald-600",
      technologies: [
        "OpenXR",
        "ARKit",
        "WebXR",
        "Meta Quest SDK"
      ]
    }
  ];

  return (
    <section id="technologies" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-leading tools and frameworks powering our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm p-6 border border-border transition-all duration-300 cursor-pointer",
                activeCategory === index
                  ? "border-primary/50 shadow-xl shadow-primary/10 scale-105"
                  : "hover:border-primary/30 hover:shadow-lg hover:scale-102"
              )}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                  category.color
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                    category.color
                  )}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={cn(
                        "px-3 py-1 bg-muted text-foreground text-xs rounded-full border border-border transition-all duration-300",
                        activeCategory === index && "border-primary/30 bg-primary/5"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Technology Count Badge */}
                <div className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">{category.technologies.length}</span> technologies
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border">
            <span className="text-2xl font-bold text-primary">
              {categories.reduce((acc, cat) => acc + cat.technologies.length, 0)}+
            </span>
            <span className="text-muted-foreground">
              Technologies in our arsenal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
