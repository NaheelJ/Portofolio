import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone,Database,Cloud,Layers,Flame,Server,Users,Workflow,Braces,CloudCog,SaveAll,RefreshCw,CreditCard,Bell } from "lucide-react";

const FlutterSVG = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
</svg>;
const DartSVG = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
  <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263h4.263V10.79L13.42 1.209l-.004-.005-.588-.588c-.024-.024-.048-.047-.073-.067a1.015 1.015 0 0 0-.438-.183 1.959 1.959 0 0 0-.833.021c-.316.099-.639.263-.95.458-.025.016-.049.032-.073.05L4.784 4.784zm12.055-.678c-.899-.896-2.355-.896-3.256 0-.899.899-.899 2.354 0 3.256.9.896 2.355.896 3.256 0 .899-.9.899-2.354 0-3.256z"/>
</svg>;
const GitSVG = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
</svg>;

const categorizedSkills = {
  "Core Technologies": [
    { name: "Flutter", custom: "flutter" },
    { name: "Dart", custom: "dart" },
    { name: "Firebase", icon: Flame },
    { name: "Node.js", icon: Server },
    { name: "Google Cloud", icon: Cloud },
    { name: "Android", icon: Smartphone },
  ],
  "Architecture & State": [
    { name: "Provider", icon: RefreshCw },
    { name: "GetX", icon: Layers },
    { name: "MVC Pattern", icon: Layers },
    { name: "Local Storage", icon: SaveAll },
  ],
  "Cloud & Backend": [
    { name: "Cloud Database", icon: Database },
    { name: "Cloud Functions", icon: CloudCog },
    { name: "API Integration", icon: Workflow },
    { name: "Backend Dev", icon: Braces },
  ],
  "Integrations & Tools": [
    { name: "FCM", icon: Bell },
    { name: "Payments", icon: CreditCard },
    { name: "CRM Dev", icon: Users },
    { name: "Git", custom: "git" },
  ],
};

const categories = Object.keys(categorizedSkills) as Array<keyof typeof categorizedSkills>;

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<keyof typeof categorizedSkills>("Core Technologies");

  const totalSkills = Object.values(categorizedSkills).flat().length;

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-20 max-w-7xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.4em] uppercase mb-4 text-white/30">Technical Stack</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Skills & Expertise</h2>
              <div className="h-0.5 w-16 bg-white/40 rounded-full mt-6" />
            </div>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto">
          {/* Left: Spline 3D Card (Vertical Rectangle) */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[500px] h-full w-full rounded-[3rem] overflow-hidden bg-[#050505] border border-white/5 shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-[64px] bg-[#050505] z-20 pointer-events-none" />
            <div className="absolute inset-0 z-0 flex items-center justify-center">
               <div className="w-8 h-8 border-2 border-white/5 border-t-white/20 animate-spin rounded-full" />
            </div>
            {/* @ts-ignore */}
            <spline-viewer url="https://prod.spline.design/BaYI0elOfmSkjigL/scene.splinecode"
              className="w-full h-full relative z-10 scale-110" style={{ width: '100%', height: '100%', outline: 'none' }} />
          </motion.div>

          {/* Right: Skills Content */}
          <div className="flex flex-col h-full bg-[#050505]/40 p-4 md:p-10 rounded-[3rem] border border-white/5 backdrop-blur-sm">
            {/* Categories Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-2xl text-[10px] md:text-xs font-bold tracking-tight transition-all duration-300 border ${
                    activeTab === cat ? "bg-white/10 border-white/20 text-white" : "bg-transparent border-white/5 text-white/30 hover:border-white/10"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Active Category Title */}
            <motion.h3 key={`title-${activeTab}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white mb-8 tracking-tight">
              {activeTab}
            </motion.h3>

            {/* Skills Grid - Reduced Card Size/Perfect UI */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <AnimatePresence mode="wait">
                {categorizedSkills[activeTab].map((skill, i) => (
                  <motion.div key={`${activeTab}-${skill.name}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="p-4 rounded-[1.5rem] flex flex-col items-center justify-center bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06] hover:border-white/20 group cursor-default shadow-lg h-[125px]">
                    <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-300 shadow-inner">
                      {skill.custom === "flutter" && <div className="scale-75"><FlutterSVG /></div>}
                      {skill.custom === "dart" && <div className="scale-75"><DartSVG /></div>}
                      {skill.custom === "git" && <div className="scale-75"><GitSVG /></div>}
                      {!skill.custom && skill.icon && <skill.icon className="w-3.5 h-3.5 text-white/80" />}
                    </div>
                    <span className="text-[10px] md:text-[10.5px] font-black uppercase tracking-[0.1em] text-white/30 group-hover:text-white transition-colors text-center truncate w-full px-2">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Footer */}
            <div className="mt-auto pt-6 border-t border-white/5 flex justify-center">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/20">
                {totalSkills} Technologies Mastered
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;