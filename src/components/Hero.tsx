import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Download, ArrowRight, ArrowDown } from "lucide-react";
import naheelPhoto from "@/assets/naheel-photo-removebg.png";



const Hero = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top,#000000,transparent)" }} />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left */}
          <div>
            {/* Available badge
            <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8 glass"
              style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.15)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background:"#ced4da"}}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{background:"#ffffff", boxShadow:"0 0 8px #ffffff"}}></span>
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase" style={{color:"#f8f9fa"}}>Available for Work</span>
            </motion.div> */}

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
              className="font-medium mb-2 tracking-wide" style={{ color: "#6c757d" }}>
              Hi, I'm
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="text-6xl md:text-8xl font-bold mb-3 leading-[1.0] text-glow gradient-text-white">
              Naheel J
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
              className="text-xl md:text-2xl font-semibold mb-5" style={{ color: "#ced4da" }}>
              Full Stack Flutter Developer
            </motion.h2>

            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.38, duration: 0.5 }}
              className="divider-navy mb-6" />

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              className="mb-8 max-w-lg leading-relaxed" style={{ color: "#adb5bd" }}>
              With 2+ years of experience in software development, including 1+ years of proven professional industry experience, I design and build high-performance, scalable applications ready for production.

I specialize in Flutter, Firebase, Node.js, and Google Cloud Platform, delivering clean, maintainable, and end-to-end solutions that scale reliably under real-world workloads.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10">
              {/* Primary CTA — white button */}
              <motion.button id="hero-view-projects"
                onClick={() => scrollTo("#projects")}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(248,249,250,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm transition-all group shimmer-btn"
                style={{ background: "#ffffff", color: "#000000" }}>
                View Projects
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              {/* Secondary CTA */}
              <motion.button id="hero-download-resume"
                onClick={() => window.open("/resume.html", "_blank")}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm transition-all glass-navy"
                style={{ color: "#ffffff" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}>
                <Download size={17} /> Download Resume
              </motion.button>
            </motion.div>

            {/* Skill tags */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Firebase", "Node.js", "GCP"].map((tag, i) => (
                <motion.span key={tag}
                  initial={{ opacity: 0, scale: 0.88, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    opacity: { delay: 0.62 + i * 0.06, duration: 0.6 },
                    scale: { delay: 0.62 + i * 0.06, duration: 0.6 },
                    y: { delay: 0.62 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                  }}
                  whileHover={{ scale: 1.07, y: -2, backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium cursor-default transition-colors duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center items-center">

            {/* Rotating rings */}
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-[310px] h-[310px] md:w-[360px] md:h-[360px] rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.5)" }} />

            {/* Orbit dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#495057" : "#dee2e6",
                  top: "50%", left: "50%", transformOrigin: "0 0",
                  transform: `rotate(${deg}deg) translateX(190px) translateY(-3px)`,
                  boxShadow: i % 2 === 0 ? "0 0 6px rgba(73,80,87,0.6)" : "0 0 6px rgba(255,255,255,0.8)",
                }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.3, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.45, ease: "easeInOut" }} />
            ))}

            {/* Portrait area */}
            <div className="relative z-10 flex items-end justify-center w-[280px] h-[320px] md:w-[380px] md:h-[440px] -translate-y-[20px] md:-translate-y-[30px]">
              <img src={naheelPhoto} alt="Naheel J"
                className="w-full h-full object-contain object-bottom"
                style={{
                  filter: "contrast(1.05) brightness(0.95) drop-shadow(0 -10px 40px rgba(255,255,255,0.15))",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%)"
                }}
              />
            </div>

            {/* Stat badges */}
            {[
              { label: "Experience", value: "2+ Years", delay: 0.85, pos: "top-2 right-0", yAmp: -4 },
              { label: "Projects", value: "10+", delay: 0.95, pos: "bottom-6 -left-4", yAmp: 5 },
              { label: "Users Served", value: "10K+", delay: 1.05, pos: "bottom-12 -right-8", yAmp: 4 },
            ].map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [b.yAmp, -b.yAmp, b.yAmp] }}
                transition={{
                  opacity: { delay: b.delay, duration: 0.8 },
                  y: { delay: b.delay, duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.06, cursor: "pointer" }}
                className={`absolute ${b.pos} rounded-3xl px-5 py-3 z-20 glass`}
                style={{ background: "rgba(0,0,0,0.6)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div className="text-xs mb-0.5" style={{ color: "#adb5bd" }}>{b.label}</div>
                <div className="text-xl font-bold" style={{ color: "#ffffff" }}>{b.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "#495057" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={13} style={{ color: "#ffffff" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
