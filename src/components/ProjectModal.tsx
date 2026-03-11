import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "./Projects";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass-morphism rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/12 white-glow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-2">Project Details</div>
                <h2 className="text-2xl font-bold text-white leading-snug">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-white/30 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/8 ml-4 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Thin divider */}
            <div className="w-full h-px bg-white/8 mb-6" />

            {/* Description */}
            <p className="text-white/50 mb-7 leading-relaxed text-sm">{project.description}</p>

            {/* Technologies */}
            <div className="mb-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/6 text-white/60 rounded-lg border border-white/10 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {project.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 text-white/50 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white/25 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {project.link && (
                <Button
                  className="flex-1 bg-white text-black hover:bg-white/90 font-semibold transition-all"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Project
                </Button>
              )}
              <Button
                variant="outline"
                onClick={onClose}
                className={`border-white/12 text-white/50 hover:bg-white/5 hover:text-white hover:border-white/25 transition-all ${!project.link ? "flex-1" : ""}`}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
