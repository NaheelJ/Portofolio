import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
