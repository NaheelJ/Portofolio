import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, CheckCircle2, X, Github, Target, Terminal, ChevronRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  link?: string;
  github?: string;
}

const ProjectRegistry = [
  {
    id: "0x3A",
    title: "WINWARD_AI",
    description: "Enterprise election management system handling 10,000+ concurrent users with real-time analytics and document generation.",
    technologies: ["FLUTTER", "GCP", "CLOUD_FUNCTIONS", "FIRESTORE", "NODE.JS"],
    details: [
      "ARCHITECTED_FOR_10K+_CONCURRENT_USERS.",
      "REAL-TIME_ANALYTICAL_REPORTING_ENGINE.",
      "AUTOMATED_HIGH-RES_PDF_GENERATION.",
      "DEVOPS_OWNERSHIP_ON_GCP_INFRA."
    ],
  },
  {
    id: "0x3B",
    title: "POSITRON_PLATFORM",
    description: "Smart governance ecosystem for 100+ wards, digitizing pension schemes, infrastructure tracking, and citizen communication.",
    technologies: ["FLUTTER", "FIREBASE", "REAL-TIME_DB", "CLOUD_ARCHITECTURE"],
    details: [
      "ACTIVE_DEPLOYMENT_ACROSS_100+_WARDS.",
      "COMPLEX_ROLE-BASED_WORKFLOW_SECURITY.",
      "REAL-TIME_INFRA_HEALTH_MONITORING.",
      "INTEGRATED_CITIZEN_SURVEY_SYSTEMS."
    ],
  },
  {
    id: "0x3C",
    title: "GOYN_MOBILITY",
    description: "Full-scale ride-hailing infrastructure featuring real-time GPS synchronization, driver-user matching, and automated billing.",
    technologies: ["FLUTTER", "GPS_SYNC", "PAYMENT_GATEWAYS", "LIVE_CHAT"],
    details: [
      "LIVE_GPS_FLEET_SYNC_ARCHITECTURE.",
      "SECURE_MULTI-PARTY_PAYMENT_INFRA.",
      "REAL-TIME_ENCRYPTED_COMMUNICATION.",
      "CROSS-PLATFORM_RESPONSIVE_SYSTEM."
    ],
    link: "https://play.google.com/store/apps/details?id=com.spine.goyn_driver",
  },
  {
    id: "0x3D",
    title: "PLANX_MANAGEMENT",
    description: "Next-gen construction management tool for real-time inventory control, financial oversight, and site-to-office sync.",
    technologies: ["FLUTTER", "STATE_MANAGEMENT", "OFFLINE-FIRST_SYNC"],
    details: [
      "REAL-TIME_MATERIAL_INVENTORY_MONITOR.",
      "FINANCIAL_HEALTH_DASHBOARDS.",
      "AUTOMATED_FIELD-TO-OFFICE_REPORTING.",
      "HIGH-PERFORMANCE_STATE_SYNC."
    ],
  },
  {
    id: "0x3E",
    title: "XMARK_STEEL",
    description: "Industrial precision pricing engine for steel manufacturers, automating custom estimations and generating legal quotes.",
    technologies: ["FLUTTER", "MATH_ENGINES", "PDF_GENERATION"],
    details: [
      "PROPRIETARY_PRICE_ESTIMATION_ALGO.",
      "ONE-TAP_AUTOMATED_LEGAL_QUOTES.",
      "OFFLINE-FIRST_INDUSTRIAL_RELIABILITY.",
      "STREAMLINED_B2B_MANUFACTURING_FLOW."
    ],
    link: "https://xmark-13f80.web.app/"
  },
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.98, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        className="bg-[#111111] border border-[#1F1F1F] p-10 md:p-14 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-10 right-10 p-2 border border-[#1F1F1F] hover:border-[#00FF9C] transition-all text-[#888888] hover:text-[#00FF9C]"
        >
          <X size={20} />
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#00FF9C] text-[10px] font-black tracking-widest uppercase">SPEC_REPORT :: {project.id}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#EDEDED] mb-8 tracking-tighter uppercase leading-[0.9]">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((t, i) => (
              <span key={i} className="px-4 py-1.5 border border-[#1F1F1F] text-[#888888] text-[9px] font-bold tracking-widest uppercase group-hover:border-[#00FF9C] transition-colors">
                {t}
              </span>
            ))}
          </div>
          <p className="text-lg text-[#888888] leading-relaxed font-light mb-12 border-l border-[#1F1F1F] pl-8">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#EDEDED] font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-1 h-3 bg-[#00FF9C]" /> _CORE_DELIVERY
            </h3>
            <ul className="space-y-4">
              {project.details.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-[#888888] text-[12px] leading-relaxed uppercase">
                  <div className="w-1 h-1 bg-[#1F1F1F] shrink-0 mt-1.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-4 justify-end">
            {project.link && (
              <button 
                onClick={() => window.open(project.link, "_blank")}
                className="w-full py-5 bg-[#00FF9C] text-black font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,255,156,0.3)] transition-all"
              >
                DEPLOY_TO_PRODUCTION <ExternalLink size={16} />
              </button>
            )}
            <button 
              onClick={onClose}
              className="w-full py-5 border border-[#1F1F1F] text-[#888888] font-black uppercase tracking-widest text-[10px] hover:border-[#00FF9C] hover:text-[#00FF9C] transition-all"
            >
              TERMINATE_VIEW
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModule = ({ project, index }: { project: any, index: number }) => {
  const [selected, setSelected] = useState<Project | null>(null);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        onClick={() => setSelected(project)}
        className="group relative h-[400px] border border-[#1F1F1F] bg-[#111111] overflow-hidden cursor-pointer hover:border-[#00FF9C] transition-all"
      >
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        
        {/* Background Visual Artifact */}
        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
           <div className="absolute top-10 left-10 text-[200px] font-black leading-none uppercase selection:bg-transparent tracking-tighter opacity-10">
             {project.id}
           </div>
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
          <div className="mb-4 flex items-center justify-between border-b border-[#1F1F1F] pb-4 group-hover:border-[#00FF9C]/20 transition-colors">
             <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.4em]">{project.id}</span>
             <ChevronRight className="text-[#1F1F1F] group-hover:text-[#00FF9C] group-hover:translate-x-1 transition-all" size={20} />
          </div>
          
          <h3 className="text-3xl font-black text-[#EDEDED] mb-4 tracking-tighter uppercase leading-none group-hover:text-hacker transition-colors">
            {project.title}
          </h3>
          
          <p className="text-[12px] text-[#888888] font-medium mb-8 line-clamp-2 leading-relaxed lowercase">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[9px] font-black uppercase tracking-widest text-[#1F1F1F] group-hover:text-[#00FF9C] border border-[#1F1F1F] group-hover:border-[#00FF9C]/30 px-3 py-1 transition-all">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent selection:bg-[#00FF9C] selection:text-black">
      <div className="container mx-auto px-10 relative z-10" ref={ref}>
        <div className="flex flex-col items-start mb-24 max-w-4xl border-l border-[#1F1F1F] pl-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-[#00FF9C]" />
            <span className="text-[#00FF9C] text-[10px] font-black tracking-[0.4em] uppercase">PROJECT_REGISTRY</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
            CODE <br />
            <span className="text-hacker drop-shadow-[0_0_10px_rgba(0,255,156,0.13)]">_FLEET_STATUS.</span>
          </h2>
          
          <motion.button 
            whileHover={{ x: 5, color: "#00FF9C" }}
            onClick={() => window.open("https://github.com/NaheelJ", "_blank")}
            className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 text-[#888888] transition-colors"
          >
            _GOTO_GITHUB_RESOURCES <Github size={14} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ProjectRegistry.map((p, i) => (
            <ProjectModule key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
