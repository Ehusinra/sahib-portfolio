import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";

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

      <ScrollProgress />
      <main id="main-content" className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
