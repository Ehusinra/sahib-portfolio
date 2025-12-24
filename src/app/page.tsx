import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ExcitedTech from "@/components/ExcitedTech";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import FloatingIcons from "@/components/FloatingIcons";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import ClickRipple from "@/components/ClickRipple";
import ClientOnlyThemeToggle from "@/components/ClientOnlyThemeToggle";

export default function Home() {
  return (
    <>
      {/* Skip to main content for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <CustomCursor />
      <ParticlesBackground />
      <FloatingIcons />
      <AnimatedBlobs />
      <ClickRipple />
      <ScrollProgress />
      <ClientOnlyThemeToggle />
      <main id="main-content" className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Metrics />
        <Experience />
        <Projects />
        <ExcitedTech />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
