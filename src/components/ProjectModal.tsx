import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="glass-morphism rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto neon-border-purple neon-glow-purple"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold gradient-text">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {project.link && (
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-glow-pink"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Project
                </Button>
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="neon-border-purple"
                >
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
