import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      title: "Flutter + Backend + Desktop",
      description: "End-to-end development solutions including Flutter apps, backend services with Node.js/Firebase, and desktop application deployment.",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-pink">
            Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/40 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
