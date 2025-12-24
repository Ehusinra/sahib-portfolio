import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
