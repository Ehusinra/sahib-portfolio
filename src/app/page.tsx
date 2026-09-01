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
import ClientOnlyParticles from "@/components/ClientOnlyParticles";
import ClientOnlyFloatingIcons from "@/components/ClientOnlyFloatingIcons";
import ClientOnlyBlobs from "@/components/ClientOnlyBlobs";
import ClickRipple from "@/components/ClickRipple";
import ClientOnlyThemeToggle from "@/components/ClientOnlyThemeToggle";
import ClientOnlyProfileButton from "@/components/ClientOnlyProfileButton";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ClientOnlyParticles />
      <ClientOnlyFloatingIcons />
      <ClientOnlyBlobs />
      <ClickRipple />
      <ScrollProgress />
      <ClientOnlyThemeToggle />
      <ClientOnlyProfileButton />
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
