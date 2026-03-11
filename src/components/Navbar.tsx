import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const go = (href: string) => { document.querySelector(href)?.scrollIntoView({behavior:"smooth"}); setOpen(false); };

  return (
    <motion.nav initial={{y:-80, x:"-50%", opacity:0}} animate={{y:0, x:"-50%", opacity:1}}
      transition={{duration:0.8,ease:[0.25,0.46,0.45,0.94]}}
      className={`fixed z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-3xl ${scrolled ? "top-4 py-3 glass" : "top-6 py-4"}`}
      style={{
        left: "50%",
        background: scrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.01)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: scrolled ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "inset 0 0 20px rgba(255,255,255,0.02), 0 8px 32px rgba(0,0,0,0.4)" : "none"
      }}>
      <div className="px-5 md:px-6">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-2">
            {NAV.map(item => (
              <motion.button key={item.name} id={`nav-${item.name.toLowerCase()}`}
                onClick={() => go(item.href)} whileHover={{scale:1.02}}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
                style={{color:"#ffffff"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#ced4da")}
                onMouseLeave={e=>(e.currentTarget.style.color="#ffffff")}>
                {item.name}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px rounded-full transition-all duration-300 group-hover:w-5/6"
                  style={{background:"#dee2e6"}}/>
              </motion.button>
            ))}
            <motion.button id="nav-hire-me" onClick={() => go("#contact")}
              whileHover={{scale:1.03, boxShadow:"0 0 20px rgba(248,249,250,0.15)"}} whileTap={{scale:0.97}}
              className="ml-4 px-6 py-2.5 text-sm font-semibold rounded-full transition-all shimmer-btn"
              style={{background:"#ffffff", color:"#000000"}}>
              Hire Me
            </motion.button>
          </div>

          <button id="nav-mobile-toggle" onClick={() => setOpen(!open)}
            className="md:hidden p-2 transition-colors"
            style={{color:"#ffffff"}}
            onMouseEnter={e=>(e.currentTarget.style.color="#ffffff")}
            onMouseLeave={e=>(e.currentTarget.style.color="#ffffff")}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
              exit={{opacity:0,height:0}} transition={{duration:0.3}} className="md:hidden mt-4 overflow-hidden">
              <div className="rounded-3xl p-4 space-y-1 glass"
                style={{ background:"rgba(255, 255, 255, 0.05)" }}>
                {NAV.map((item,i) => (
                  <motion.button key={item.name} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}}
                    transition={{delay:i*0.05}} onClick={() => go(item.href)}
                    className="block w-full text-left py-2.5 px-4 rounded-xl transition-all text-sm font-medium"
                    style={{color:"#ffffff"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="#ffffff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.15)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="#ffffff";(e.currentTarget as HTMLElement).style.background="transparent";}}>
                    {item.name}
                  </motion.button>
                ))}
                <motion.button onClick={() => go("#contact")} className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{background:"#ffffff", color:"#000000"}}>
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
export default Navbar;
