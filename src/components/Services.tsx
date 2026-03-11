import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Globe, Layers, Palette, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  { id:"mobile",  icon:Smartphone,title:"Mobile Application Development",  badge:"Most Popular",
    desc:"End-to-end native-quality mobile apps for Android and iOS using Flutter — from architecture to Play Store deployment.",
    points:["Native-quality performance","Android & iOS","Firebase integration","Offline-first"] },
  { id:"web",     icon:Globe,      title:"Web Application Development",     badge:null,
    desc:"Production-grade web apps built with Flutter Web and Node.js. Scalable, responsive, optimized for all browsers.",
    points:["Flutter Web & Node.js","Responsive design","Cloud deployment","SEO-ready"] },
  { id:"cross",   icon:Layers,     title:"Cross-Platform App Development",  badge:null,
    desc:"Single codebase powering mobile, web, and desktop with platform-specific look and feel.",
    points:["One codebase","Platform-adaptive UI","Shared logic","Faster delivery"] },
  { id:"ui",      icon:Palette,    title:"Flutter UI Development",          badge:null,
    desc:"Pixel-perfect, animated Flutter interfaces. Custom widgets, smooth micro-animations, premium design systems.",
    points:["Custom widgets","Smooth animations","Design systems","Responsive layouts"] },
  { id:"maint",   icon:Wrench,     title:"App Maintenance & Optimization",  badge:null,
    desc:"Performance audits, bug fixes, dependency updates, and feature enhancements for existing Flutter apps.",
    points:["Performance audits","Bug fixing","Dependency upgrades","App store compliance"] },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <section id="services" className="py-28 relative overflow-hidden" style={{background:"transparent"}}>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1]}} className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{color:"#495057"}}>What I Do</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#ffffff"}}>Services</h2>
              <div className="divider-navy"/>
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{color:"#6c757d"}}>
              Comprehensive Flutter development services tailored for startups, scale-ups, and enterprises.
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i) => (
            <motion.div key={s.id} id={`service-${s.id}`}
              initial={{opacity:0,y:40}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:i*0.1}}
              whileHover={{y:-5}}
              className="relative card-hover p-7 rounded-3xl transition-all duration-300 cursor-default glass">
              {s.badge && (
                <div className="absolute top-5 right-5 text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{background:"#dee2e6",color:"#f8f9fa"}}>{s.badge}</div>
              )}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.3)"}}>
                <s.icon className="w-5 h-5" style={{color:"#ffffff"}}/>
              </div>
              <h3 className="text-base font-bold mb-3 leading-snug" style={{color:"#f8f9fa"}}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{color:"#6c757d"}}>{s.desc}</p>
              <div className="w-full h-px mb-5" style={{background:"rgba(255,255,255,0.08)"}}/>
              <ul className="space-y-2">
                {s.points.map((pt,j) => (
                  <li key={j} className="flex items-center gap-2.5 text-xs" style={{color:"#6c757d"}}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{color:"#ffffff"}}/>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/* CTA card */}
          <motion.div initial={{opacity:0,y:40}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:services.length*0.1}}
            className="relative overflow-hidden rounded-3xl p-7 flex flex-col justify-between"
            style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",boxShadow:"inset 0 0 30px rgba(255,255,255,0.03)"}}>
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl"
              style={{background:"rgba(255,255,255,0.4)"}}/>
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.3)"}}>
                <ArrowRight className="w-5 h-5" style={{color:"#ffffff"}}/>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color:"#ffffff"}}>Have a project in mind?</h3>
              <p className="text-sm leading-relaxed" style={{color:"#6c757d"}}>
                Let's talk and turn your idea into a high-quality application.
              </p>
            </div>
            <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}
              className="relative z-10 mt-8 flex items-center justify-center gap-2 text-sm font-semibold group transition-all px-6 py-3.5 rounded-2xl shimmer-btn"
              style={{background:"#ffffff", color:"#000000"}}>
              Get in touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Services;
