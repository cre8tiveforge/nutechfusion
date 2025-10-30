'use client';

import { ServiceModal } from './ui/service-modal';
import { ServiceCard } from './ui/service-card';

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm3.5 9.5c0 2.33-1.75 3.5-3.5 3.5s-3.5-1.17-3.5-3.5V11h1v3.5c0 1.47 1.07 2.5 2.5 2.5s2.5-1.03 2.5-2.5V11h1v3.5z"/>
        </svg>
      ),
      shortDescription: [
        "Custom Chatbots & Virtual Assistants",
        "Process Automation & Workflow Optimization",
        "AI-Powered Content Generation",
        "Predictive Analytics & Insights"
      ],
      fullDescription: "Transform your business operations with cutting-edge AI solutions. We build custom AI systems that understand your business, automate complex workflows, and provide actionable insights from your data.",
      features: [
        "Natural language processing for customer interactions",
        "Automated document processing and data extraction",
        "Intelligent workflow automation",
        "Custom AI model development and training",
        "Integration with existing systems",
        "Real-time analytics and insights",
        "Multi-channel deployment (web, mobile, voice)",
        "Continuous learning and improvement"
      ],
      technologies: [
        "OpenAI GPT-4",
        "Anthropic Claude",
        "Google Gemini",
        "Mistral AI",
        "LangChain",
        "Python",
        "TensorFlow",
        "n8n"
      ],
      useCases: [
        "Customer service chatbots handling 24/7 inquiries",
        "Document intelligence for automated data entry",
        "Content generation for marketing teams",
        "Predictive maintenance for manufacturing",
        "Sales forecasting and lead scoring"
      ]
    },
    {
      title: "Virtual Reality",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6z"/>
        </svg>
      ),
      shortDescription: [
        "Immersive Training Simulations",
        "Virtual Product Demonstrations",
        "Interactive Virtual Tours",
        "VR-Based Learning Environments"
      ],
      fullDescription: "Create unforgettable immersive experiences with our VR solutions. From training simulations that reduce real-world risk to virtual showrooms that bring products to life, we build VR experiences that engage and educate.",
      features: [
        "High-fidelity 3D environments",
        "Multi-user collaborative spaces",
        "Hand tracking and gesture controls",
        "Realistic physics simulation",
        "Cross-platform VR support (Quest, PSVR, PC VR)",
        "Analytics and performance tracking",
        "Integration with LMS systems",
        "Custom avatar systems"
      ],
      technologies: [
        "Unity",
        "Unreal Engine",
        "OpenXR",
        "Meta Quest SDK",
        "WebXR",
        "C#",
        "C++",
        "Blender"
      ],
      useCases: [
        "Safety training for hazardous environments",
        "Medical procedure simulation for healthcare",
        "Virtual property tours for real estate",
        "Product demonstrations for complex machinery",
        "Team building exercises in virtual spaces"
      ]
    },
    {
      title: "3D Production",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
        </svg>
      ),
      shortDescription: [
        "3D Modeling & Animation",
        "Product Visualization",
        "Architectural Visualization",
        "Interactive 3D Experiences"
      ],
      fullDescription: "Bring your ideas to life with photorealistic 3D content. Whether you need product renders for marketing, architectural visualizations for client presentations, or animated explainer videos, our 3D production services deliver stunning visual content.",
      features: [
        "Photorealistic rendering",
        "Character and asset modeling",
        "Animation and rigging",
        "PBR material creation",
        "Real-time 3D web experiences",
        "AR-ready 3D models",
        "360° product spins",
        "Exploded view animations"
      ],
      technologies: [
        "Blender",
        "ZBrush",
        "Substance Painter",
        "Houdini",
        "Three.js",
        "Cinema 4D",
        "Maya",
        "Marmoset"
      ],
      useCases: [
        "E-commerce product visualization",
        "Architectural walkthrough videos",
        "Medical device demonstrations",
        "Industrial equipment training materials",
        "Marketing campaign 3D assets"
      ]
    },
    {
      title: "Technical Solutions",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
        </svg>
      ),
      shortDescription: [
        "Custom Software Development",
        "System Integration",
        "Technical Consulting",
        "Digital Transformation"
      ],
      fullDescription: "End-to-end technical solutions tailored to your business needs. From custom web applications to complex system integrations, we deliver robust, scalable software that drives business growth.",
      features: [
        "Full-stack web development",
        "Mobile app development",
        "API design and integration",
        "Database architecture",
        "Cloud infrastructure setup",
        "DevOps and CI/CD pipelines",
        "Legacy system modernization",
        "Technical architecture consulting"
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Docker",
        "Vercel",
        "Supabase",
        "PostgreSQL",
        "Firebase"
      ],
      useCases: [
        "Custom CRM and business management tools",
        "E-commerce platform development",
        "Data visualization dashboards",
        "API integrations for third-party services",
        "Cloud migration and infrastructure optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions powered by cutting-edge technology. Click any service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceModal
              key={index}
              trigger={
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.shortDescription}
                />
              }
              title={service.title}
              icon={service.icon}
              description={service.fullDescription}
              features={service.features}
              technologies={service.technologies}
              useCases={service.useCases}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
