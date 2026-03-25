import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Rocket, Users, Zap, Terminal, ChevronRight, Cpu, Layers } from "lucide-react";

const SPECIFICATIONS = [
  { id: "0x01", title: "CLEAN ARCHITECTURE", desc: "SOLID principles applied for maximum scalability." },
  { id: "0x02", title: "RAPID DEPLOYMENT",    desc: "Optimized pipelines and full-stack ownership." },
  { id: "0x03", title: "CORE COLLABORATION",  desc: "High-bandwidth communication and team synergy." },
  { id: "0x04", title: "PERFORMANCE OPT",    desc: "Sub-second load times and efficient UX." },
];

const ANALYTICS = [
  { n: 1,   s: "+",  l: "YEAR_EXP" },
  { n: 10,  s: "+",  l: "REPOS_PUSHED" },
  { n: 10,  s: "K+", l: "LOC_WRITTEN" },
  { n: 100, s: "%",  l: "UPTIME_SATISFACTION" },
];

function AnimatedValue({ target, suffix }: { target: number, suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const animation = animate(count, target, { duration: 1.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [inView, target, count]);

  return (
    <span ref={ref} className="flex items-center justify-center tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent selection:bg-[#00FF9C] selection:text-black">
      <div className="container mx-auto px-10 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* SYSTEM HEADER */}
          <div className="lg:col-span-12 mb-10 border-l-4 border-[#00FF9C] pl-10">
             <motion.div 
               initial={{ opacity: 0, x: -50 }} 
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.4 }}
             >
                <div className="flex items-center gap-3 mb-4">
                  <Terminal size={14} className="text-[#00FF9C]" />
                  <span className="text-[#00FF9C] text-[10px] font-black tracking-[0.4em] uppercase">SYSTEM_INITIALIZATION</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase selection:bg-hacker">
                  ENGINEERING THE <br />
                  <span className="text-hacker">FUTURE_OF_MOBILE.</span>
                </h2>
             </motion.div>
          </div>

          {/* CORE SPECS CARD */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-[#111111] border border-[#1F1F1F] p-10 relative group hover:border-[#00FF9C] transition-colors"
            >
              {/* Corner Bracket Decor */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#1F1F1F] group-hover:border-[#00FF9C] transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#1F1F1F] group-hover:border-[#00FF9C] transition-colors" />
              
              <div className="flex items-center gap-3 mb-10 text-[10px] uppercase font-black tracking-widest text-[#888888]">
                 <Cpu size={14} className="text-[#00FF9C]" />
                 _CORE_COMMANDER_INFO
              </div>
              
              <p className="text-lg md:text-2xl text-[#888888] leading-relaxed font-light mb-12 border-l border-[#1F1F1F] pl-8">
                I am <span className="text-[#EDEDED] font-bold">Naheel Jakkeeri</span>, a technical visionary dedicated to the craft of 
                building seamless, high-performance digital products. With a deep focus on 
                <span className="text-[#00FF9C] font-bold">_FLUTTER</span> and <span className="text-[#00FF9C] font-bold">_FULLStack_CLOUD</span> architecture, 
                I bridge the gap between creative design and robust engineering.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {SPECIFICATIONS.map((spec, i) => (
                  <div key={i} className="flex gap-6 group/spec">
                    <div className="mt-1 text-[10px] font-black text-[#00FF9C] opacity-30 group-hover/spec:opacity-100 transition-opacity">
                      {spec.id}
                    </div>
                    <div>
                      <h4 className="text-[#EDEDED] text-sm font-bold mb-2 tracking-[0.1em]">{spec.title}</h4>
                      <p className="text-[12px] text-[#888888] leading-relaxed uppercase">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* STATUS GRID */}
          <div className="lg:col-span-4 h-full">
            <div className="grid grid-cols-1 gap-6 h-full">
              {ANALYTICS.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="bg-[#111111] border border-[#1F1F1F] hover:border-[#00FF9C] hover:bg-[#00FF9C]/[0.02] p-8 flex flex-col items-start justify-center text-left group cursor-default transition-all"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#00FF9C] mb-2 group-hover:text-glow-purple group-hover:drop-shadow-[0_0_8px_#00FF9C] transition-all">
                    <AnimatedValue target={s.n} suffix={s.s} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
                    <ChevronRight size={10} className="text-[#00FF9C] group-hover:translate-x-1 transition-transform" />
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
