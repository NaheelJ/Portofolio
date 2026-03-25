import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download, Terminal, Cpu, Smartphone, Globe, Code2 } from "lucide-react";
import naheelPhoto from "@/assets/naheel-photo-removebg.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "SYSTEM:_ACTIVE_DEVELOPER_READY_FOR_DEPLOYMENT";
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-[105vh] flex items-center justify-center overflow-hidden bg-transparent pt-40 pb-20">
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* CONTENT LEFT */}
          <div className="lg:col-span-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-3 py-1 mb-8 bg-[#111111] border border-[#1F1F1F]"
            >
              <div className="w-2 h-2 bg-[#00FF9C] rounded-none cursor-blink" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#00FF9C] uppercase">{typedText}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8] uppercase max-w-4xl selection:bg-[#00FF9C] selection:text-black">
                NAHEEL <br />
                <span className="text-hacker">JAKKEERI.</span>
              </h1>
              
              <div className="h-10 mb-10 overflow-hidden">
                <p className="text-lg md:text-3xl font-medium text-[#888888] tracking-tight lowercase">
                  [ engineering_digital_excellence ]
                </p>
              </div>

              <div className="max-w-xl text-base md:text-xl text-[#888888] mb-12 leading-relaxed tracking-tight border-l-2 border-[#1F1F1F] pl-8">
                Transforming complex problems into <span className="text-[#EDEDED] font-bold">pixel-perfect, scalable architectures</span>. 
                Expert in <span className="text-[#00FF9C]">Flutter</span>, <span className="text-[#00FF9C]">React</span>, and <span className="text-[#00FF9C]">Cloud Systems</span>.
              </div>

              <div className="flex flex-wrap gap-6 mb-20">
                <motion.button
                  onClick={() => scrollTo("#projects")}
                  whileHover={{ scale: 1.05, backgroundColor: "#00FF9C", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border border-[#00FF9C] text-[#00FF9C] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(0,255,156,0.4)]"
                >
                  _EXECUTE_PORTFOLIO();
                </motion.button>

                <motion.button
                  onClick={() => window.open("/resume.html", "_blank")}
                  whileHover={{ scale: 1.05, borderColor: "#00FF9C", color: "#00FF9C" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border border-[#1F1F1F] text-[#EDEDED] font-black uppercase tracking-[0.2em] transition-all"
                >
                  DOWNLOAD_SPECS
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* IMAGE RIGHT - TERMINAL PANEL STYLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            style={{ y: yTranslate }}
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative group/panel">
              {/* Terminal Frame */}
              <div className="absolute inset-0 bg-[#00FF9C]/5 border border-[#1F1F1F] group-hover/panel:border-[#00FF9C] transition-all -z-10 -rotate-2 group-hover/panel:rotate-0" />
              
              <div className="relative border border-[#1F1F1F] bg-[#111111] overflow-hidden p-2 group-hover/panel:border-[#00FF9C] transition-all">
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-[#1F1F1F] mb-4 bg-[#0A0A0A] p-3 group-hover/panel:border-[#00FF9C] transition-all">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-none bg-[#1F1F1F] group-hover/panel:bg-[#00FF9C]" />
                    <div className="w-2.5 h-2.5 rounded-none bg-[#1F1F1F]" />
                    <div className="w-2.5 h-2.5 rounded-none bg-[#1F1F1F]" />
                  </div>
                  <span className="text-[9px] font-black tracking-widest text-[#888888] uppercase select-none">IMAGE_VISUALIZER.EXE</span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden group/image bg-black/40 border border-[#1F1F1F]">
                  {/* Active Scanner Line */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-[1px] bg-[#00FF9C]/40 z-20 shadow-[0_0_10px_#00FF9C] pointer-events-none"
                  />
                  
                  {/* Data Overlay */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500">
                    <span className="text-[7px] font-black text-[#00FF9C] tracking-[0.2em]">SCAN_ACTIVE</span>
                    <div className="w-8 h-[2px] bg-[#00FF9C]/40" />
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 text-[7px] font-black text-[#888888] tracking-widest opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500">
                    COORD_38.44_LOCK
                  </div>

                  <img 
                    src={naheelPhoto} 
                    alt="Naheel J" 
                    className="w-full h-full object-cover object-top grayscale opacity-70 group-hover/panel:opacity-100 group-hover/panel:grayscale-0 transition-all duration-700 contrast-110 brightness-90 group-hover/panel:scale-110" 
                  />
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20 pointer-events-none" />
                  
                  {/* Internal Target Brackets */}
                  <div className="absolute inset-4 border border-[#00FF9C]/10 pointer-events-none" />
                  <div className="absolute top-4 left-4 w-4 h-[1px] bg-[#00FF9C]/40" />
                  <div className="absolute top-4 left-4 w-[1px] h-4 bg-[#00FF9C]/40" />
                  <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-[#00FF9C]/40" />
                  <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-[#00FF9C]/40" />
                </div>
                
                {/* Visual Status Bar */}
                <div className="mt-4 h-1 w-full bg-[#1F1F1F] overflow-hidden">
                   <motion.div 
                     animate={{ width: ["0%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     className="h-full bg-hacker-gradient"
                   />
                </div>
                
                {/* External Corner Accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#1F1F1F] group-hover/panel:border-[#00FF9C] transition-colors" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#1F1F1F] group-hover/panel:border-[#00FF9C] transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Status Info */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-10 border-l border-[#1F1F1F] pl-6 z-10 opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black tracking-widest text-[#00FF9C] uppercase">LATITUDE:</span>
          <span className="text-[11px] font-medium text-[#EDEDED]">10.8505° N</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black tracking-widest text-[#00FF9C] uppercase">LONGITUDE:</span>
          <span className="text-[11px] font-medium text-[#EDEDED]">76.2711° E</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black tracking-widest text-[#00FF9C] uppercase">LOCALE:</span>
          <span className="text-[11px] font-medium text-[#EDEDED]">KERALA, INDIA</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 right-1/2 translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-black tracking-[0.3em] text-[#888888] uppercase rotate-90 mb-10 select-none">SCROLL_DOWN</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#1F1F1F] via-[#00FF9C] to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
