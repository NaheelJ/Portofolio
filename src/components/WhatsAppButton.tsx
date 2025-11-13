import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/919446085810", "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary to-secondary rounded-full neon-glow-pink shadow-lg group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Chat with me!
      </motion.span>
    </motion.button>
  );
};

export default WhatsAppButton;
