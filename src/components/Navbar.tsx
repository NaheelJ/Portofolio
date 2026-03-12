import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code } from "lucide-react";

const NAV = [
  {name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},
  {name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"},
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (href: string) => { 
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(href, { offset: 0, duration: 1.2 });
    } else {
      document.querySelector(href)?.scrollIntoView({behavior:"smooth"}); 
    }
    setOpen(false); 
  };

  return (
    <motion.nav 
      initial={{y: -100}} 
      animate={{y: 0}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-black/95 backdrop-blur-xl py-4" : "bg-black/80 backdrop-blur-lg py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo / Code Icon */}
          <div onClick={() => go("#home")} className="cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:border-white/20">
              <Code size={24} strokeWidth={2.5} className="text-white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map(item => (
              <motion.button 
                key={item.name} 
                id={`nav-${item.name.toLowerCase()}`}
                onClick={() => go(item.href)} 
                whileHover={{y: -1}}
                className="px-6 py-2 text-[12px] font-black text-white/40 hover:text-white transition-all duration-300 uppercase tracking-[0.3em]"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Pill Style as per reference */}
          <button 
            id="nav-mobile-toggle" 
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center gap-4 px-7 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/10 active:scale-95 transition-all"
          >
            <span className="text-[12px] font-black text-white/90 tracking-[0.2em] uppercase">
              {open ? "CLOSE" : "MENU"}
            </span>
            {open ? <X size={18} strokeWidth={2.5} className="text-white" /> : <Menu size={18} strokeWidth={2.5} className="text-white" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{opacity: 0, y: -20}} 
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}} 
              transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}} 
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {NAV.map((item, i) => (
                  <motion.button 
                    key={item.name} 
                    initial={{opacity: 0, x: -10}} 
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: i * 0.05}} 
                    onClick={() => go(item.href)}
                    className="block w-full text-left py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-[15px] font-bold text-white uppercase tracking-widest active:bg-white/10 transition-all"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
export default Navbar;
