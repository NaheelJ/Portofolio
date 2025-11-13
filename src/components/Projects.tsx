import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  link?: string;
  image?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Positron – Election Management System",
      description: "Comprehensive election management system with four Flutter flavor apps",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "Algolia", "Node.js", "GCP"],
      details: [
        "Four Flutter flavor apps: Pollster, Winward, Vote Pulse, Vote Mitra",
        "Scalable architecture with shared core modules",
        "Real-time data synchronization across all apps",
        "Advanced search with Algolia integration",
        "Cloud Functions for backend logic",
        "Deployed on Google Cloud Platform",
      ],
    },
    {
      title: "Planx – Project Financial Management",
      description: "Real-time financial tracking and project management application",
      technologies: ["Flutter", "Provider", "Firebase Firestore"],
      details: [
        "Real-time project financial tracking",
        "Comprehensive financial summary dashboard",
        "Inventory management system",
        "Provider state management",
        "Firestore for real-time data sync",
        "Responsive UI for all screen sizes",
      ],
    },
    {
      title: "Lio Club",
      description: "Social club management app with payment integration",
      technologies: ["Flutter", "Node.js", "REST API", "Payment Gateway"],
      details: [
        "Fixed critical backend issues",
        "Improved payment flow and reliability",
        "REST API updates and optimization",
        "Node.js backend enhancements",
        "Enhanced user experience",
      ],
      link: "https://play.google.com/store/apps/details?id=com.spine.lio_club",
    },
    {
      title: "Goyn – Cab Ride Booking App",
      description: "Real-time cab booking platform with GPS tracking",
      technologies: ["Flutter", "Firebase", "GPS", "Real-time Chat", "Payment Integration"],
      details: [
        "Real-time GPS tracking for riders and drivers",
        "In-app chat functionality",
        "Payment gateway integration",
        "Deep linking for seamless navigation",
        "High-performance UI with smooth animations",
        "Separate driver and passenger apps",
      ],
      link: "https://play.google.com/store/apps/details?id=com.spine.goyn_driver",
    },
    {
      title: "Xmark – Steel Industry Estimation",
      description: "Steel pricing automation and estimation tool",
      technologies: ["Flutter", "PDF Generation", "Local Storage", "Web"],
      details: [
        "Automated steel pricing calculations",
        "PDF report generation",
        "Offline support with local storage",
        "Web version for desktop access",
        "User-friendly estimation interface",
        "Industry-specific calculations",
      ],
      link: "https://xmark-13f80.web.app/",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism rounded-lg overflow-hidden neon-border-purple hover:neon-glow-purple transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 neon-border-pink hover:neon-glow-pink"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details
                    </Button>
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-glow-pink"
              onClick={() => window.open("https://github.com/NaheelJ", "_blank")}
            >
              <Github className="mr-2" />
              View More on GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
