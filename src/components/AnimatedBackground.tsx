import { motion } from "framer-motion";

const GridLines = () => (
  <div 
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(#00FF9C 1px, transparent 1px), linear-gradient(90deg, #00FF9C 1px, transparent 1px)`,
      backgroundSize: "64px 64px",
    }}
  />
);

const AnimatedScanlines = () => (
  <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
    <div className="scanline" />
    <div className="scanline" style={{ animationDelay: "3s" }} />
  </div>
);

const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.015] z-[2] pointer-events-none mix-blend-screen"
    style={{
      backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
    }}
  />
);

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0A0A0A] overflow-hidden pointer-events-none selection:bg-primary/20">
      {/* Deep Shadow Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FF9C]/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00FF9C]/5 rounded-full blur-[150px]" />
      
      {/* Structural Elements */}
      <GridLines />
      <AnimatedScanlines />
      <NoiseOverlay />
      
      {/* Vertical Status Line */}
      <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-[#1F1F1F] opacity-50 z-[1]" />
      <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-[#1F1F1F] opacity-50 z-[1]" />
    </div>
  );
};

export default AnimatedBackground;
