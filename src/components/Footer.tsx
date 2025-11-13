import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              © 2025 Naheel J. All rights reserved.
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
