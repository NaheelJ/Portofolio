import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://github.com/NaheelJ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-morphism rounded-full neon-border-pink hover:neon-glow-pink transition-all"
            >
              <Github className="w-5 h-5 text-foreground" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://www.linkedin.com/in/naheel-j-90a0a9285"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-morphism rounded-full neon-border-purple hover:neon-glow-purple transition-all"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              © 2024 Naheel J. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              Built with <Heart className="w-4 h-4 text-primary" /> using React & TypeScript
            </p>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground">
              Designed & Developed by{" "}
              <span className="gradient-text font-semibold">Naheel J</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
