import { motion } from "framer-motion";
import ErrorBoundary from "@/components/ErrorBoundary";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] relative selection:bg-[#00FF9C]/30 selection:text-white font-mono">
        <AnimatedBackground />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
