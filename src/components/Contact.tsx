import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Email Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naheeljakkeeri@gmail.com",
      href: "mailto:naheeljakkeeri@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9446085810",
      href: "tel:+919446085810",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malappuram, Kerala, India",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-end">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-4 rounded-lg neon-border-pink hover:neon-glow-pink transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-morphism p-6 rounded-lg neon-border-purple"
            >
              <h4 className="font-semibold text-foreground mb-4">
                Connect with me on social media
              </h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="neon-border-pink hover:neon-glow-pink"
                  onClick={() =>
                    window.open("https://wa.me/9446085810", "_blank")
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.577 2.14 8.02L0 32l8.26-2.113A15.85 15.85 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.55 0-5.032-.676-7.205-1.958l-.515-.303-4.29 1.098 1.146-4.177-.3-.44A12.94 12.94 0 0 1 3.06 16C3.06 9.308 9.308 3.06 16 3.06S28.94 9.308 28.94 16 22.692 29.09 16 29.09zm7.162-10.534c-.39-.195-2.31-1.148-2.668-1.28-.358-.134-.617-.195-.876.195-.26.39-1.003 1.28-1.232 1.505-.228.226-.456.255-.847.087-.39-.195-1.65-.607-3.14-1.937-1.16-1.037-1.944-2.314-2.177-2.705-.228-.39-.024-.603.173-.798.177-.177.39-.456.586-.684.196-.228.26-.39.39-.65.134-.26.067-.487-.034-.684-.1-.195-.876-2.117-1.2-2.9-.317-.758-.635-.66-.876-.673-.228-.011-.487-.014-.745-.014-.258 0-.68.1-1.037.487-.358.39-1.36 1.33-1.36 3.247 0 1.917 1.397 3.77 1.593 4.036.195.26 2.75 4.2 6.664 5.897.93.404 1.654.644 2.215.823.93.303 1.777.26 2.444.157.745-.112 2.284-.934 2.606-1.833.32-.9.32-1.671.226-1.834-.095-.162-.357-.257-.745-.45z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="neon-border-pink hover:neon-glow-pink"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/naheel-j-90a0a9285",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="neon-border-pink hover:neon-glow-pink"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/__.naheel.__/",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="neon-border-pink hover:neon-glow-pink"
                  onClick={() =>
                    window.open("https://github.com/NaheelJ", "_blank")
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div ref={formRef} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass-morphism neon-border-purple"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass-morphism neon-border-purple"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="glass-morphism neon-border-purple"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="glass-morphism neon-border-purple resize-none"
                />
              </div>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-glow-pink"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;