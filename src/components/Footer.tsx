import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Heart, Terminal, Shield, Cpu } from "lucide-react";

const Footer = () => (
  <footer className="py-20 relative overflow-hidden bg-transparent border-t border-[#1F1F1F] selection:bg-[#00FF9C] selection:text-black">
    <div className="container mx-auto px-10 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-l border-[#1F1F1F] pl-10">
        
        {/* IDENTITY */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 flex items-center justify-center border border-[#1F1F1F] bg-[#111111] group-hover:border-[#00FF9C] transition-all">
              <Terminal size={14} className="text-[#00FF9C]" />
            </div>
            <span className="font-black text-[10px] tracking-[0.3em] uppercase text-[#EDEDED] group-hover:text-hacker transition-colors">
              NAHEEL<span className="text-[#00FF9C]">.</span>JAKKEERI
            </span>
          </div>
          <p className="text-[11px] text-[#888888] font-light max-w-xs transition-colors hover:text-[#EDEDED] leading-relaxed uppercase tabular-nums">
            Delivering quality digital solutions through clean, scalable code.
          </p>
        </div>

        {/* LINKS & STATUS */}
        <div className="flex flex-col items-center md:items-end gap-6 h-full">
           <div className="flex items-center gap-4">
              <a href="https://github.com/NaheelJ" target="_blank" className="text-[#888888] hover:text-[#00FF9C] transition-all p-3 border border-[#1F1F1F] hover:border-[#00FF9C] bg-[#111111]">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/naheel-j-90a0a9285" target="_blank" className="text-[#888888] hover:text-[#00FF9C] transition-all p-3 border border-[#1F1F1F] hover:border-[#00FF9C] bg-[#111111]">
                <Linkedin size={16} />
              </a>
              <motion.div 
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="px-4 py-2 border border-[#1F1F1F] text-[9px] font-black tracking-[0.25em] text-[#888888] bg-[#111111]"
              >
                AVAILABLE FOR WORK
              </motion.div>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-2 text-right">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1F1F1F]">
               © {new Date().getFullYear()} Naheel J. All rights reserved.
             </span>
             <p className="text-[9px] font-medium text-[#1F1F1F] flex items-center gap-1 uppercase tracking-widest group">
               Designed & Built by
               <span className="text-[#333333] font-black group-hover:text-[#00FF9C] transition-colors flex items-center gap-1">
                 Naheel Jakkeeri <Cpu size={8} className="text-[#00FF9C] opacity-20" />
               </span>
             </p>
           </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;