import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter, Terminal, ChevronRight } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const CONTACT_INFO = [
  { id: "0x01", label: "MAIL_CHANNEL", value: "naheeljakkeeri@gmail.com", icon: Mail },
  { id: "0x02", label: "VOICE_FREQ", value: "+91 9446085810", icon: Phone },
  { id: "0x03", label: "GEOLOCATION", value: "Kerala, India", icon: MapPin },
];

const SOCIAL_NODES = [
  { label: "GITHUB", href: "https://github.com/NaheelJ", icon: Github },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/naheel-j-90a0a9285", icon: Linkedin },
  { label: "INSTA", href: "https://www.instagram.com/__.naheel.__/", icon: Instagram },
  { label: "TWITTER", href: "https://twitter.com/NaheelJ", icon: Twitter },
];

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "INVALID_TRANSMISSION", description: "All fields are required for handshake.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      toast({ title: "PROTOCOL_SUCCESS", description: "Transmission received. Contact re-established shortly." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "BIT_ERROR", description: "Failed to transmit message. Check network link.", variant: "destructive" });
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent selection:bg-[#00FF9C] selection:text-black">
      <div className="container mx-auto px-10 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* LEFT: COMMAND CENTER */}
          <div className="w-full lg:pr-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="mb-12 border-l border-[#1F1F1F] pl-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-[#00FF9C]" />
                <span className="text-[#00FF9C] text-[10px] font-black tracking-[0.4em] uppercase">LINK_INITIALIZATION</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.8] uppercase max-w-lg">
                _ESTABLISH <br />
                <span className="text-hacker drop-shadow-[0_0_10px_rgba(0,255,156,0.13)]">_CONNECTION.</span>
              </h2>
              <p className="text-lg text-[#888888] font-light leading-relaxed max-w-sm lowercase">
                ready to transform your vision into a digital reality? reach out and let's craft something legendary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-6 group bg-[#111111] p-6 border border-[#1F1F1F] hover:border-[#00FF9C] transition-all"
                >
                  <div className="w-12 h-12 border border-[#1F1F1F] flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#00FF9C] group-hover:bg-[#00FF9C]/10 transition-all">
                    {(() => { const Icon = info.icon; return <Icon size={18} className="text-[#00FF9C]" />; })()}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[#1F1F1F] group-hover:text-[#00FF9C] transition-colors mb-1">{info.label}</div>
                    <div className="text-[#EDEDED] font-bold text-sm truncate uppercase tracking-tight">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {SOCIAL_NODES.map((s, i) => (
                <motion.button
                  key={s.label}
                  onClick={() => window.open(s.href, "_blank")}
                  whileHover={{ y: -2, borderColor: "#00FF9C" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-[#1F1F1F] flex items-center justify-center bg-[#111111] hover:text-[#00FF9C] transition-all group"
                >
                  <s.icon size={16} className="text-[#888888] group-hover:text-[#00FF9C]" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT: TRANSMISSION FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="bg-[#111111] p-10 md:p-14 border border-[#1F1F1F] relative overflow-hidden group hover:border-[#00FF9C]/40 transition-all"
          >
            {/* Form Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
              <Terminal size={100} className="text-[#00FF9C]" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
                   <ChevronRight size={10} className="text-[#00FF9C]" /> _IDENTIFIER
                </label>
                <input 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="USER_FULL_NAME"
                  className="w-full px-8 py-5 bg-[#0A0A0A] border border-[#1F1F1F] focus:border-[#00FF9C] outline-none text-[#EDEDED] transition-all placeholder:text-[#1F1F1F] text-sm tracking-widest uppercase font-black"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
                   <ChevronRight size={10} className="text-[#00FF9C]" /> _CHANNEL
                </label>
                <input 
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="USER_EMAIL_ADDR"
                  className="w-full px-8 py-5 bg-[#0A0A0A] border border-[#1F1F1F] focus:border-[#00FF9C] outline-none text-[#EDEDED] transition-all placeholder:text-[#1F1F1F] text-sm tracking-widest uppercase font-black"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
                   <ChevronRight size={10} className="text-[#00FF9C]" /> _TRANSMISSION
                </label>
                <textarea 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="MODULE_SPEC_OR_VISION..."
                  rows={4}
                  className="w-full px-8 py-5 bg-[#0A0A0A] border border-[#1F1F1F] focus:border-[#00FF9C] outline-none text-[#EDEDED] transition-all placeholder:text-[#1F1F1F] text-sm tracking-widest uppercase font-black resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02, backgroundColor: "#00FF9C", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-transparent border border-[#00FF9C] text-[#00FF9C] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all text-xs disabled:opacity-50"
              >
                {submitting ? "_TRANSMITTING..." : "[ EXEC_SEND_TRANSMISSION ]"} <Send size={16} />
              </motion.button>
              
              <div className="flex justify-between items-center text-[8px] font-black tracking-[0.4em] text-[#1F1F1F] pt-4">
                <span>ENCRYPT_STATE::E2EE</span>
                <span>STATUS_NODES::ONLINE</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;