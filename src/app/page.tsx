import Header from '@/components/Header';
import ConsultationForm from '@/components/ConsultationForm';
import { AnimatedHero } from "@/components/ui/animated-hero";
import { BentoCard } from "@/components/ui/bento-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  const words = ["AI", "Virtual Reality", "Mixed Reality", "3D Production"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <BackgroundPaths
          className="absolute inset-0"
          strokeWidth={0.4}
          pathCount={60}
          pathColor="rgba(0, 102, 255, 0.4)"
          animationDuration={35}
        />
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block mb-4">Transforming Business</span>
              <span className="block">Through</span>
              <AnimatedHero words={words} className="text-blue-400" />
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Custom AI Solutions & Immersive Experiences for Forward-Thinking Companies
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="card p-6 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="card p-6 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="card p-6 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BentoCard
              title="AI Solutions"
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm3.5 9.5c0 2.33-1.75 3.5-3.5 3.5s-3.5-1.17-3.5-3.5V11h1v3.5c0 1.47 1.07 2.5 2.5 2.5s2.5-1.03 2.5-2.5V11h1v3.5z"/>
                </svg>
              }
              description={[
                "Custom Chatbots & Virtual Assistants",
                "Process Automation & Workflow Optimization",
                "AI-Powered Content Generation",
                "Predictive Analytics & Insights"
              ]}
            />

            <BentoCard
              title="Virtual Reality"
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6z"/>
                </svg>
              }
              description={[
                "Immersive Training Simulations",
                "Virtual Product Demonstrations",
                "Interactive Virtual Tours",
                "VR-Based Learning Environments"
              ]}
            />

            <BentoCard
              title="3D Production"
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
                </svg>
              }
              description={[
                "3D Modeling & Animation",
                "Product Visualization",
                "Architectural Visualization",
                "Interactive 3D Experiences"
              ]}
            />

            <BentoCard
              title="Technical Solutions"
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
                </svg>
              }
              description={[
                "Custom Software Development",
                "System Integration",
                "Technical Consulting",
                "Digital Transformation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section (Hidden) */}
      {/* TODO: Add icons and implement visibility toggle */}
      <section className="hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Technology Stack</h2>
          
          {/* Media Production */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Media Production</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>Adobe Premiere</div>
              <div>After Effects</div>
              <div>Photoshop</div>
              <div>DaVinci Resolve</div>
              <div>Media Encoder</div>
              <div>OBS Studio</div>
            </div>
          </div>
          
          {/* 3D & Game Development */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">3D & Game Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>Blender</div>
              <div>Unity</div>
              <div>Unreal Engine</div>
              <div>ZBrush</div>
              <div>Substance Painter</div>
            </div>
          </div>

          {/* Web Development */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Web Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>JavaScript</div>
              <div>TypeScript</div>
              <div>Next.js</div>
              <div>Tauri</div>
              <div>React</div>
              <div>Node.js</div>
              <div>TailwindCSS</div>
              <div>SQLite</div>
              <div>Supabase</div>
              <div>Firebase</div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">AI & Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>Python</div>
              <div>OpenAI</div>
              <div>Anthropic</div>
              <div>Mistral</div>
              <div>Hugging Face</div>
              <div>Google Gemini</div>
              <div>CUDA</div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Development Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>Git</div>
              <div>Docker</div>
              <div>Vercel</div>
              <div>n8n</div>
            </div>
          </div>

          {/* XR Development */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">XR Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div>OpenXR</div>
              <div>ARKit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <WavyBackground 
        className="py-16 px-4 sm:px-6 lg:px-8"
        containerClassName="relative min-h-[80vh]"
        colors={["#0066FF30", "#6600FF30"]}
        waveWidth={100}
        backgroundFill="transparent"
        blur={5}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Let&apos;s Transform Your Business</h2>
            <p className="text-gray-300">
              Ready to leverage cutting-edge AI and VR technology to drive your business forward? 
              We specialize in custom AI solutions like intelligent chatbots and process automation, 
              immersive VR training experiences, and advanced technical solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full border border-blue-500/20 backdrop-blur-sm">Virtual Reality</span>
            <span className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full border border-blue-500/20 backdrop-blur-sm">AI Integration</span>
            <span className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full border border-blue-500/20 backdrop-blur-sm">3D Production</span>
            <span className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full border border-blue-500/20 backdrop-blur-sm">Technical Solutions</span>
            <span className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full border border-blue-500/20 backdrop-blur-sm">Consulting</span>
          </div>

          <ConsultationForm />
        </div>
      </WavyBackground>
    </main>
  );
}
