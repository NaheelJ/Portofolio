import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Building high-performance native and cross-platform mobile applications using Flutter with seamless UI/UX and robust architecture.",
      icon: "📱"
    },
    {
      title: "Web App Development",
      description: "Creating responsive, scalable web applications with modern frameworks and technologies for optimal performance and user experience.",
      icon: "💻"
    },
    {
      title: "Flutter + Backend",
      description: "End-to-end development solutions including Flutter apps, backend services with Node.js/Firebase, and scalable cloud infrastructure.",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-6 rounded-lg neon-border-purple group hover:neon-glow-purple transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
