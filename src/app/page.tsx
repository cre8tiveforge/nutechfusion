import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ConsultationForm from '@/components/ConsultationForm';
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Let&apos;s Transform Your Business</h2>
            <p className="text-muted-foreground">
              Ready to leverage cutting-edge AI and VR technology to drive your business forward?
              We specialize in custom AI solutions like intelligent chatbots and process automation,
              immersive VR training experiences, and advanced technical solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">Virtual Reality</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">AI Integration</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">3D Production</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">Technical Solutions</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">Consulting</span>
          </div>

          <ConsultationForm />
        </div>
      </WavyBackground>
    </main>
  );
}
