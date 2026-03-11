import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const skills = [
  // Core Technologies
  { name:"Flutter",            custom:"flutter" },
  { name:"Dart",               custom:"dart" },
  { name:"Firebase",           icon:Flame },
  { name:"Node.js",            icon:Server },
  { name:"Google Cloud",       icon:Cloud },
  { name:"Android",            icon:Smartphone },
  
  // State Management & Architecture
  { name:"Provider",           icon:RefreshCw },
  { name:"GetX",               icon:Layers },
  { name:"MVC Pattern",        icon:Layers },
  { name:"Local Storage",      icon:SaveAll },
  
  // Cloud & Backend
  { name:"Cloud Database",     icon:Database },
  { name:"Cloud Functions",    icon:CloudCog },
  { name:"API Integration",    icon:Workflow },
  { name:"Backend Dev",        icon:Braces },
  
  // Tools & Specialized Integrations
  { name:"FCM",                icon:Bell },
  { name:"Payments",           icon:CreditCard },
  { name:"CRM Dev",            icon:Users },
  { name:"Git",                custom:"git" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{background:"transparent"}}>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1]}} className="mb-14 flex flex-col items-center text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{color:"#495057"}}>Technologies</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#ffffff"}}>Skills & Expertise</h2>
          <div className="divider-navy"/>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill,i) => (
            <motion.div key={i}
              initial={{opacity:0,scale:0.8}} animate={isInView?{opacity:1,scale:1}:{}} transition={{duration:0.7, ease:[0.16, 1, 0.3, 1], delay:i*0.04}}
              className="p-4 rounded-3xl text-center skill-chip group cursor-default glass w-[105px] sm:w-[125px] flex flex-col justify-center items-center">
              <div className="w-5 h-5 mx-auto mb-3 flex items-center justify-center">
                {skill.custom==="flutter" && <FlutterSVG/>}
                {skill.custom==="dart"    && <DartSVG/>}
                {skill.custom==="git"     && <GitSVG/>}
                {!skill.custom && skill.icon && (
                  <skill.icon className="w-5 h-5 transition-colors" style={{color:"#ffffff"}}/>
                )}
              </div>
              <span className="font-medium text-[10px] leading-tight block transition-colors"
                style={{color:"#ffffff"}}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;