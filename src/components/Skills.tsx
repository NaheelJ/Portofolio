import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone, Database, Cloud, Layers, Flame, Server, Users, Workflow, Braces, CloudCog, SaveAll, RefreshCw, CreditCard, Bell, Cpu, Globe, Rocket, ShieldCheck, Terminal, ChevronRight } from "lucide-react";

const CAT_LIST = {
  "0x0_CORE": [
    { name: "FLUTTER", level: 95, color: "#00FF9C" },
    { name: "DART", level: 90, color: "#00FF9C" },
    { name: "FIREBASE", icon: Flame, level: 85, color: "#00FF9C" },
    { name: "NODE.JS", icon: Server, level: 80, color: "#00FF9C" },
    { name: "GCP_CLOUD", icon: Cloud, level: 75, color: "#00FF9C" },
    { name: "ANDROID", icon: Smartphone, level: 85, color: "#00FF9C" },
  ],
  "0x1_ARCH": [
    { name: "PROVIDER", icon: RefreshCw, level: 95 },
    { name: "GETX", icon: Layers, level: 90 },
    { name: "CLEAN_ARC", icon: ShieldCheck, level: 85 },
    { name: "STORAGE", icon: SaveAll, level: 80 },
  ],
  "0x2_FLOW": [
    { name: "FUNCTIONS", icon: CloudCog, level: 85 },
    { name: "REST_API", icon: Globe, level: 90 },
    { name: "MICRO_S", icon: Cpu, level: 70 },
    { name: "CI/CD", icon: Rocket, level: 75 },
  ],
  "0x3_MISC": [
    { name: "PAYMENT", icon: CreditCard, level: 85 },
    { name: "PUSH_NOT", icon: Bell, level: 90 },
    { name: "STRATEGY", icon: Users, level: 80 },
    { name: "AUTOMATION", icon: Workflow, level: 75 },
  ],
};

const CATEGORIES = Object.keys(CAT_LIST) as Array<keyof typeof CAT_LIST>;

const SkillModule = ({ skill, index }: { skill: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2, borderColor: "#00FF9C" }}
      className="bg-[#111111] p-6 border border-[#1F1F1F] relative group overflow-hidden transition-all"
    >
      <div className="absolute inset-0 bg-[#00FF9C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#00FF9C] transition-all">
          {(() => { const Icon = skill.icon || Terminal; return <Icon className="text-[#00FF9C]" size={18} />; })()}
        </div>
        <span className="text-[10px] font-black text-[#888888] uppercase tracking-widest group-hover:text-[#00FF9C] tabular-nums transition-colors">{skill.level}.00%</span>
      </div>
      
      <h4 className="text-[#EDEDED] font-black text-[12px] mb-4 tracking-[0.1em] group-hover:text-hacker transition-colors">{">> "} {skill.name}</h4>
      
      <div className="h-1 w-full bg-[#1F1F1F] overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-[#00FF9C] shadow-[0_0_8px_rgba(0,255,156,0.4)]"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof CAT_LIST>("0x0_CORE");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent selection:bg-[#00FF9C] selection:text-black">
      <div className="container mx-auto px-10 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-start mb-24 max-w-4xl border-l border-[#1F1F1F] pl-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-6 bg-[#00FF9C]" />
            <span className="text-[#00FF9C] text-[10px] font-black tracking-[0.4em] uppercase">SYSTEM_REPOSITORY</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
            DEVELOPER <br />
            <span className="text-hacker drop-shadow-[0_0_10px_rgba(0,255,156,0.13)]">_SPEC_FILE.</span>
          </h2>

          {/* TAB NAVIGATION MODULE */}
          <div className="flex flex-wrap justify-start gap-4 p-4 border border-[#1F1F1F] bg-[#111111]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 text-[10px] font-black tracking-[0.2em] uppercase transition-all flex items-center gap-2 group ${
                  activeTab === cat 
                    ? "bg-[#00FF9C] text-black shadow-[0_0_20px_rgba(0,255,156,0.3)]" 
                    : "text-[#888888] hover:text-[#EDEDED]"
                }`}
              >
                <ChevronRight size={10} className={`${activeTab === cat ? "opacity-100" : "opacity-0 group-hover:opacity-40"} transition-all`} />
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
              <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full"
            >
              {CAT_LIST[activeTab].map((skill, i) => (
                <SkillModule key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Status Line */}
        <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
