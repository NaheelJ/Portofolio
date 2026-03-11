import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  { icon:Code2, title:"Clean Code",     desc:"Maintainable, optimized, and scalable architecture" },
  { icon:Rocket,title:"Fast Delivery",  desc:"Consistent delivery under pressure with full ownership" },
  { icon:Users, title:"Team Player",    desc:"Excellent collaboration and communication skills" },
  { icon:Zap,   title:"Performance",    desc:"High-performance applications with optimal UX" },
];

const stats = [
  {n: 2,   s: "+",  l: "Years Experience"},
  {n: 10,  s: "+",  l: "Projects Delivered"},
  {n: 10,  s: "K+", l: "Users Served"},
  {n: 100, s: "%",  l: "Client Satisfaction"},
];

function AnimatedCounter({ target, suffix }: { target: number, suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const animation = animate(count, target, { duration: 2.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [inView, target, count]);

  return (
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{background:"transparent"}}>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1]}} className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{color:"#495057"}}>Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#ffffff"}}>About Me</h2>
          <div className="divider-navy"/>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div initial={{opacity:0,x:-40}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:0.2}}>
            <h3 className="text-2xl font-bold mb-6" style={{color:"#f8f9fa"}}>
              Flutter Developer with{" "}
              <span style={{color:"#dee2e6", borderBottom:"2px solid #dee2e6"}}>Full-Stack Strength</span>
            </h3>
            <div className="space-y-4 leading-relaxed" style={{color:"#adb5bd"}}>
              <p>With 2+ years of experience and 1+ years of proven experience in software development, I specialize in architecting and delivering high-performance applications using Flutter, Firebase, Node.js, and Google Cloud Platform.</p>
              <p>I focus on writing clean, maintainable, and future-ready code — implementing solid architectures, optimized workflows, and reliable engineering practices.</p>
              <p>From crafting refined Flutter UIs to engineering backend logic, APIs, and cloud-ready infrastructures, I handle end-to-end development that performs at scale.</p>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:0.4}} className="grid grid-cols-2 gap-4">
            {features.map((f,i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.7, ease:[0.16, 1, 0.3, 1], delay:0.5+i*0.1}}
                whileHover={{scale:1.04,y:-3}}
                className="card-hover p-5 rounded-3xl transition-all duration-300 cursor-default glass">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.3)"}}>
                  <f.icon className="w-4 h-4" style={{color:"#ffffff"}}/>
                </div>
                <h4 className="font-semibold mb-1.5 text-sm" style={{color:"#f8f9fa"}}>{f.title}</h4>
                <p className="text-xs leading-relaxed" style={{color:"#6c757d"}}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:0.7}} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s,i) => (
            <motion.div key={i} whileHover={{scale:1.04}} className="card-hover text-center p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all glass">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{color:"#ffffff"}}>
                 <AnimatedCounter target={s.n} suffix={s.s} />
              </div>
              <div className="text-xs md:text-sm" style={{color:"#6c757d"}}>{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default About;
