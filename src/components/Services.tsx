import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Globe, Layers, Palette, Wrench, ArrowRight, Cloud, Code2, Terminal, Cpu } from "lucide-react";

const SPEC_LIST = [
  { 
    id: "01", 
    icon: Smartphone, 
    title: "MOBILE DEVELOPMENT", 
    desc: "Building high-performance iOS & Android applications with native-level precision using Flutter.",
    points: ["Cross-platform Excellence", "Custom UI Components", "Device Optimization", "App Store Publishing"]
  },
  { 
    id: "02", 
    icon: Cloud, 
    title: "FULL STACK & CLOUD", 
    desc: "Designing scalable backends and seamless API infrastructures on GCP and Firebase.",
    points: ["Google Cloud Platform", "Serverless Functions", "Real-time Databases", "Secure Authentication"]
  },
  { 
    id: "03", 
    icon: Palette, 
    title: "UI & INTERACTIONS", 
    desc: "Crafting pixel-perfect, motion-rich experiences that captivate and convert users.",
    points: ["Micro-animations", "Design Systems", "Interactive Prototypes", "Visual Flow"]
  },
  { 
    id: "04", 
    icon: Globe, 
    title: "WEB DEVELOPMENT", 
    desc: "Building production-ready web applications that are as fast as they are beautiful.",
    points: ["Node.js Backend", "Performance Tuning", "Responsive Layouts", "SEO Optimization"]
  },
  { 
    id: "05", 
    icon: Wrench, 
    title: "CODE REVIEW & AUDIT", 
    desc: "Deep-diving into existing codebases to optimize performance, security, and scalability.",
    points: ["Refactoring", "Performance Tuning", "Security Hardening", "Legacy Upgrades"]
  },
  { 
    id: "06", 
    icon: Terminal, 
    title: "SYSTEM INTEGRATIONS", 
    desc: "Connecting complex data flows across multiple platforms and third-party services.",
    points: ["Data Migration", "API Middleware", "Webhook Setup", "State Management"]
  }
];

const SpecCard = ({ spec, index }: { spec: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-[#111111] p-10 border border-[#1F1F1F] hover:border-[#00FF9C] transition-all relative group h-full flex flex-col"
    >
      <div className="absolute top-4 right-6 text-[10px] font-black text-[#1F1F1F] group-hover:text-[#00FF9C] transition-colors">{spec.id}</div>
      
      <div className="w-12 h-12 border border-[#1F1F1F] flex items-center justify-center mb-8 bg-[#0A0A0A] group-hover:border-[#00FF9C] group-hover:bg-[#00FF9C]/10 transition-all">
        {(() => { const Icon = spec.icon; return <Icon className="text-[#00FF9C]" size={20} />; })()}
      </div>
      
      <h3 className="text-xl font-bold text-[#EDEDED] mb-4 tracking-tighter uppercase group-hover:text-hacker transition-colors">
        {spec.title}
      </h3>
      
      <p className="text-[12px] text-[#888888] leading-relaxed mb-8 lowercase h-12 line-clamp-2">
        {spec.desc}
      </p>

      <ul className="space-y-3 mt-auto border-t border-[#1F1F1F] pt-8 group-hover:border-[#00FF9C]/20 transition-colors">
        {spec.points.map((p: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-[10px] text-[#888888] font-bold uppercase tracking-widest group-hover:text-[#EDEDED] transition-colors">
            <div className="w-1 h-1 bg-[#1F1F1F] group-hover:bg-[#00FF9C] transition-colors" />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-transparent selection:bg-[#00FF9C] selection:text-black">
      <div className="container mx-auto px-10 relative z-10" ref={ref}>
        <div className="flex flex-col items-start mb-24 max-w-4xl border-l border-[#1F1F1F] pl-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-[#00FF9C]" />
            <span className="text-[#00FF9C] text-[10px] font-black tracking-[0.4em] uppercase">What I Offer</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8] max-w-3xl">
            SERVICES & <br />
            <span className="text-hacker drop-shadow-[0_0_10px_rgba(0,255,156,0.13)]">EXPERTISE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SPEC_LIST.map((s, i) => (
            <SpecCard key={s.id} spec={s} index={i} />
          ))}
          
          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#111111] p-10 border border-[#00FF9C]/20 flex flex-col justify-center items-start text-left group hover:border-[#00FF9C] transition-all bg-[repeating-linear-gradient(45deg,#111111,#111111_10px,#121212_10px,#121212_20px)]"
          >
            <Code2 size={40} className="text-[#00FF9C] mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl font-black text-[#EDEDED] mb-4 uppercase tracking-tighter leading-none">
              READY TO <br /> WORK TOGETHER?
            </h3>
            <p className="text-[12px] text-[#888888] mb-10 font-medium">
              Let's connect and build something great together.
            </p>
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05, backgroundColor: "#00FF9C", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-[#00FF9C] text-[#00FF9C] font-black uppercase tracking-widest text-[10px] flex items-center gap-3 transition-colors"
            >
              Get In Touch <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;