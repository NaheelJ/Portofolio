import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Focus on writing maintainable, optimized, and scalable code",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Consistent delivery under pressure with strong ownership",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building high-performance applications with optimal UX",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Flutter Developer with Full-Stack Expertise
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              With 2 years of comprehensive full-stack experience, I specialize in creating 
              scalable, high-performance applications that deliver exceptional user experiences. 
              My expertise spans across Flutter, Firebase, Node.js, and Google Cloud Platform.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm passionate about writing clean, maintainable code and building architectures 
              that stand the test of time. My approach combines technical excellence with 
              strong problem-solving abilities, ensuring projects are delivered on time and 
              exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From UI/UX design to API development, backend logic, and cloud deployments, 
              I handle end-to-end development with precision and care. I thrive under 
              pressure and take pride in my reliability and consistent delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-lg neon-border-pink group hover:neon-glow-pink transition-all"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:text-secondary transition-colors" />
                <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "3", label: "Companies Worked" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-morphism p-6 rounded-lg"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
