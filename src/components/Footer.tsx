import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-10" style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{color:"#495057"}}>© 2025 Naheel J. All rights reserved.</div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
          className="text-xs" style={{color:"#343a40"}}>
          Designed & Built by{" "}
          <span className="font-semibold" style={{color:"#6c757d"}}>Naheel J</span>
        </motion.div>
        <div className="text-xs flex items-center gap-1.5" style={{color:"#343a40"}}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:"#dee2e6",boxShadow:"0 0 6px #dee2e6"}}/>
          Software Developer
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
