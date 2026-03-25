import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "ROOT", href: "#home" },
  { name: "CORE", href: "#about" },
  { name: "SPECS", href: "#services" },
  { name: "SKILLS", href: "#skills" },
  { name: "REPOS", href: "#projects" },
  { name: "LINK", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn); 
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => { 
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); 
  };

  return (
    <motion.nav 
      initial={{ y: -60 }} 
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 border-b ${
        scrolled ? "bg-black py-4 border-[#1F1F1F]" : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* LOGO */}
        <div 
          onClick={() => go("#home")} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-sm bg-[#111111] border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#00FF9C] transition-all">
            <Terminal size={16} className="text-[#00FF9C]" />
          </div>
          <span className="font-bold text-[12px] tracking-[0.2em] group-hover:text-hacker transition-colors">
            NAHEEL<span className="text-[#00FF9C]">_</span>JAKKEERI
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <button 
              key={item.name} 
              onClick={() => go(item.href)} 
              className="text-[11px] font-medium text-[#888888] hover:text-[#00FF9C] transition-all tracking-[0.2em] relative group"
            >
              <span className="mr-1 text-[#1F1F1F] group-hover:text-[#00FF9C] font-black">{i}.</span>
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FF9C] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* ACCESS ACCESS */}
        <motion.button
          onClick={() => go("#contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex px-6 py-2 bg-[#111111] border border-[#1F1F1F] hover:border-[#00FF9C] text-[#00FF9C] text-[10px] font-bold tracking-[0.2em] transition-all"
        >
          _INITIALIZE_PROTOCOL
        </motion.button>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-[#1F1F1F] bg-[#111111]"
        >
          {open ? <X size={20} className="text-[#00FF9C]" /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-y-0 right-0 w-72 bg-[#0A0A0A] border-l border-[#1F1F1F] z-[150] p-10 flex flex-col gap-8 shadow-2xl"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button 
                key={item.name} 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(item.href)}
                className="text-2xl font-bold uppercase tracking-[0.2em] flex items-center group text-left"
              >
                <ChevronRight size={18} className="text-[#00FF9C] opacity-0 group-hover:opacity-100 mr-2 -translate-x-4 group-hover:translate-x-0 transition-all" />
                <span className="group-hover:text-hacker transition-all">{item.name}</span>
              </motion.button>
            ))}
            <motion.button 
              whileHover={{ x: 5 }}
              onClick={() => go("#contact")}
              className="mt-10 py-4 bg-[#111111] border border-[#1F1F1F] hover:border-[#00FF9C] text-[#00FF9C] text-[12px] font-bold tracking-widest uppercase transition-all"
            >
              [ CALL_PROTOCOL ]
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
