import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Technologies from '@/components/Technologies';
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

      {/* Portfolio Section */}
      <Portfolio />

      {/* Technology Stack Section */}
      <Technologies />

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
