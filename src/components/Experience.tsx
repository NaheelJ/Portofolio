import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Software Developer",
      company: "Spinecodes",
      period: "05/2025 – Present",
      description: [
        "Designed and developed multiple Flutter applications",
        "Delivered scalable, efficient, maintainable solutions",
        "Collaborated with team members to fix complex technical challenges",
        "Strong leadership, critical thinking, and ownership",
      ],
      current: true,
    },
    {
      title: "Software Developer Intern",
      company: "Spinecodes",
      period: "03/2025 – 05/2025",
      description: [
        "Built Goyn project implementation (Flutter + Node.js)",
        "Payment integration and backend feature delivery",
        "Coordinated team tasks and handed project to QA",
      ],
      current: false,
    },
    {
      title: "Junior Flutter Developer",
      company: "Future Develution",
      period: "05/2024 – 04/2025",
      description: [
        "Built complete hotel management system with cross-platform mobile and web applications using Flutter",
        "Developed booking features and enhanced check-in flow, reducing guest waiting time significantly",
        "Integrated CRM system with Booking.com and Agoda for seamless multi-channel booking synchronization",
        "Collaborated with backend developers to implement robust APIs and real-time communication",
        "Created Flutter applications for hotel staff and owners with responsive UI/UX and workflow management",
      ],
      current: false,
    },
    {
      title: "Flutter Developer Intern",
      company: "Edapt",
      period: "06/2023 – 12/2023",
      description: [
        "Built e-commerce app using Flutter MVVM",
        "Integrated Razorpay, Firebase, REST APIs",
        "Improved collaboration, communication, and technical skills",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ${
                    index % 2 === 0 ? "left-8 md:left-full" : "left-8 md:left-0"
                  } ${exp.current ? "neon-glow-pink animate-pulse" : ""}`}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-16 md:ml-0 glass-morphism p-6 rounded-lg neon-border-purple hover:neon-glow-purple transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-semibold">{exp.period}</span>
                    {exp.current && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Current</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-secondary mb-4">{exp.company}</h4>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
