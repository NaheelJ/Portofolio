import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, CheckCircle2, X } from "lucide-react";

export interface Project {
  title: string; description: string; technologies: string[]; details: string[]; link?: string;
}

function TiltCard({ children, className, style }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d", perspective: 1000, ...style }}
      className={className}>{children}
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(20px)" }} onClick={onClose}>
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 24 }} animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 280 }}
        className="rounded-3xl p-8 max-w-2xl w-full max-h-[88vh] overflow-y-auto glass"
        onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "#495057" }}>Project Details</div>
            <h2 className="text-2xl font-bold leading-snug" style={{ color: "#ffffff" }}>{project.title}</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl ml-4 flex-shrink-0 transition-all"
            style={{ color: "#ffffff" }} onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}><X className="w-5 h-5" /></button>
        </div>
        <div className="w-full h-px mb-6" style={{ background: "rgba(52,58,64,0.5)" }} />
        <p className="mb-7 leading-relaxed text-sm" style={{ color: "#adb5bd" }}>{project.description}</p>
        <div className="mb-7">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#495057" }}>Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#495057" }}>Key Highlights</h3>
          <ul className="space-y-2.5">
            {project.details.map((d, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-sm" style={{ color: "#adb5bd" }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#ffffff" }} />{d}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          {project.link && (
            <motion.button whileHover={{ scale: 1.03 }} className="flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              style={{ background: "#ffffff", color: "#000000" }} onClick={() => window.open(project.link, "_blank")}>
              <ExternalLink className="w-4 h-4" /> View Live
            </motion.button>
          )}
          <motion.button whileHover={{ scale: 1.03 }} onClick={onClose}
            className={`py-3 px-6 rounded-2xl text-sm font-medium transition-all ${!project.link ? "flex-1" : ""}`}
            style={{ background: "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.1)" }}>
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const projects: Project[] = [
  {
    title: "Winward AI – Election Management System",
    description: "Scalable election platform handling 10,000+ concurrent users during Kerala Panchayath elections — built end-to-end with Flutter and GCP.",
    technologies: ["Flutter", "Firebase", "GCP", "Cloud Functions", "Firestore", "Node.js"],
    details: [
      "Developed and deployed a scalable election platform handling 10,000+ concurrent users during Kerala Panchayath elections.",
      "Implemented features such as surveys, slip generation, voting demos, poll marking, and analytical reports.",
      "Built a document generation module using Flutter widgets rendered off-screen via RepaintBoundary to generate high-resolution PDFs.",
      "Managed full-stack development, GCP operations, client communication, user onboarding, and production technical support.",
    ],
  },
  {
    title: "Positron – Smart Governance Platform",
    description: "Flutter-based governance platform used by 100+ Panchayath wards with complex role-based workflows and real-time Firestore operations.",
    technologies: ["Flutter", "Firebase", "Firestore", "Cloud Functions", "GCP"],
    details: [
      "Developed a Flutter-based platform actively used by 100+ Panchayath wards.",
      "Implemented citizen surveys, pension and scheme management, infrastructure tracking.",
      "Built complex role-based workflows for citizens, ward members, and administrators.",
      "Optimized Firebase Firestore operations for scalable real-time data handling.",
    ],
  },
  {
    title: "Goyn – Cab Ride Booking App",
    description: "Full-featured ride-booking platform for users, drivers, unions, and admins with real-time GPS tracking and payment integration.",
    technologies: ["Flutter", "Firebase", "GPS", "Real-time Chat", "Payment Gateway", "Dynamic Links"],
    details: [
      "Developed a ride-booking application for users, drivers, unions, and administrators.",
      "Implemented real-time chat, live location tracking, dynamic links, and secure payment integration.",
      "Converted UI mockups into responsive, high-performance Flutter user interfaces.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.spine.goyn_driver",
  },
  {
    title: "Planx – Construction Project Management",
    description: "Flutter app for managing construction projects with real-time financial tracking, material inventory, and cloud data sync.",
    technologies: ["Flutter", "Provider", "Firebase Firestore"],
    details: [
      "Built a Flutter application for construction project management.",
      "Implemented real-time project tracking, financial summaries, and material inventory control.",
      "Used Provider for state management and Firebase Firestore for real-time cloud synchronization.",
    ],
  },
  {
    title: "Xmark – Steel Industry Price Estimation",
    description: "Flutter mobile application for steel product manufacturers to calculate pricing, total costs from custom designs, and generate automated PDF quotations.",
    technologies: ["Flutter", "Local Storage", "PDF Generation", "Mobile UI"],
    details: [
      "Created a mobile application for steel product manufacturers to calculate pricing and total costs from custom designs.",
      "Integrated automated PDF quotation generation directly within the app.",
      "Built a mobile-optimized UI tailored for industrial and manufacturing workflows.",
      "Implemented offline data handling with local storage to improve accessibility and operational efficiency."
    ],
    link: "https://xmark-13f80.web.app/"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-28 relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#495057" }}>Portfolio</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#ffffff" }}>Featured Projects</h2>
                <div className="divider-navy" />
              </div>
              <motion.button id="projects-github-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://github.com/NaheelJ", "_blank")}
                className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{ background: "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.1)" }}>
                View GitHub <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className={i === 0 ? "md:col-span-2" : ""}>
                <TiltCard className="rounded-3xl overflow-hidden card-hover cursor-pointer group h-full glass">
                  <div className="h-full p-7 flex flex-col" onClick={() => setSelected(p)}>
                    {/* Top accent line */}
                    <div className="h-px w-full mb-6 rounded-full" style={{ background: "linear-gradient(90deg,#dee2e6,rgba(255,255,255,0.2),transparent)" }} />
                    <div className={`flex ${i === 0 ? "md:flex-row gap-10 items-start" : "flex-col"}`}>
                      <div className={i === 0 ? "flex-1" : ""}>
                        <div className="text-xs font-mono mb-3" style={{ color: "#495057" }}>{String(i + 1).padStart(2, "0")}</div>
                        <h3 className="font-bold mb-3 leading-snug transition-colors" style={{ color: "#f8f9fa", fontSize: i === 0 ? "1.25rem" : "1.05rem" }}>
                          {p.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: "#6c757d" }}>{p.description}</p>
                      </div>
                      <div className={i === 0 ? "flex-1" : ""}>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {p.technologies.slice(0, i === 0 ? 6 : 4).map((t, j) => (
                            <span key={j} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                              style={{ background: "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}>
                              {t}
                            </span>
                          ))}
                          {p.technologies.length > (i === 0 ? 6 : 4) && (
                            <span className="text-xs px-2.5 py-1 rounded-lg"
                              style={{ background: "rgba(255,255,255,0.02)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
                              +{p.technologies.length - (i === 0 ? 6 : 4)}
                            </span>
                          )}
                        </div>
                        {i === 0 && (
                          <ul className="space-y-2 mb-4">
                            {p.details.slice(0, 2).map((d, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#6c757d" }}>
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#ffffff" }} />{d}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="mt-auto pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="flex items-center justify-between">
                        <button id={`project-details-${i}`}
                          className="text-xs font-medium flex items-center gap-1.5 transition-colors group/btn"
                          style={{ color: "#ffffff" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                          onClick={e => { e.stopPropagation(); setSelected(p); }}>
                          View Details
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                        {p.link && (
                          <button id={`project-link-${i}`}
                            className="text-xs flex items-center gap-1 transition-colors"
                            style={{ color: "#ffffff" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                            onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                            onClick={e => { e.stopPropagation(); window.open(p.link, "_blank"); }}>
                            <ExternalLink className="w-3.5 h-3.5" /> Live
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </>
  );
};
export default Projects;
