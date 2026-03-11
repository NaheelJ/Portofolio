import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

const contactInfo = [
  { icon:Mail,  label:"Email",    value:"naheeljakkeeri@gmail.com", href:"mailto:naheeljakkeeri@gmail.com" },
  { icon:Phone, label:"Phone",    value:"+91 9446085810",           href:"tel:+919446085810" },
  { icon:MapPin,label:"Location", value:"Malappuram, Kerala, India" },
];
const socials = [
  { label:"WhatsApp",  href:"https://wa.me/9446085810",
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.577 2.14 8.02L0 32l8.26-2.113A15.85 15.85 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.55 0-5.032-.676-7.205-1.958l-.515-.303-4.29 1.098 1.146-4.177-.3-.44A12.94 12.94 0 0 1 3.06 16C3.06 9.308 9.308 3.06 16 3.06S28.94 9.308 28.94 16 22.692 29.09 16 29.09zm7.162-10.534c-.39-.195-2.31-1.148-2.668-1.28-.358-.134-.617-.195-.876.195-.26.39-1.003 1.28-1.232 1.505-.228.226-.456.255-.847.087-.39-.195-1.65-.607-3.14-1.937-1.16-1.037-1.944-2.314-2.177-2.705-.228-.39-.024-.603.173-.798.177-.177.39-.456.586-.684.196-.228.26-.39.39-.65.134-.26.067-.487-.034-.684-.1-.195-.876-2.117-1.2-2.9-.317-.758-.635-.66-.876-.673-.228-.011-.487-.014-.745-.014-.258 0-.68.1-1.037.487-.358.39-1.36 1.33-1.36 3.247 0 1.917 1.397 3.77 1.593 4.036.195.26 2.75 4.2 6.664 5.897.93.404 1.654.644 2.215.823.93.303 1.777.26 2.444.157.745-.112 2.284-.934 2.606-1.833.32-.9.32-1.671.226-1.834-.095-.162-.357-.257-.745-.45z"/></svg> },
  { label:"LinkedIn",  href:"https://www.linkedin.com/in/naheel-j-90a0a9285",
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
  { label:"Instagram", href:"https://www.instagram.com/__.naheel.__/",
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg> },
  { label:"GitHub",    href:"https://github.com/NaheelJ",
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-60px" });
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState<string|null>(null);
  const [form, setForm] = useState({ user_name:"", user_email:"", subject:"", message:"" });
  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p=>({...p,[e.target.name]:e.target.value}));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.user_name||!form.user_email||!form.subject||!form.message)
      return toast({title:"Error",description:"Please fill all fields.",variant:"destructive"});
    setSubmitting(true);
    try {
      // Connect to Firestore "contacts" collection
      const contactsRef = collection(db, "contacts");
      
      // Save data payload to Firebase
      await addDoc(contactsRef, {
        name: form.user_name,
        email: form.user_email,
        subject: form.subject,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      toast({title:"Message Sent! 🎉",description:"I'll get back to you soon!"});
      setForm({user_name:"",user_email:"",subject:"",message:""});
    } catch (error) { 
      console.error("Firebase Error:", error);
      toast({title:"Error",description:"Failed to send log to database.",variant:"destructive"}); 
    }
    finally { setSubmitting(false); }
  };

  const inputStyle = (name:string) => ({
    background:"rgba(255,255,255,0.03)",
    border:`1px solid ${focused===name?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.08)"}`,
    boxShadow: focused===name?"0 0 0 2px rgba(255,255,255,0.3)":"none",
    color:"#f8f9fa", outline:"none", transition:"all 0.3s ease",
  });

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{background:"transparent"}}>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1]}} className="mb-14 flex flex-col items-center text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{color:"#495057"}}>Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:"#ffffff"}}>Get In Touch</h2>
          <div className="divider-navy"/>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{opacity:0,x:-40}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:0.2}} className="space-y-6">
            <p className="leading-relaxed" style={{color:"#adb5bd"}}>
              Have a project in mind or want to discuss opportunities? I'm always open to new collaborations. Let's build something exceptional together.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info,i) => (
                <motion.div key={i} initial={{opacity:0,y:10}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.7, ease:[0.16, 1, 0.3, 1], delay:0.3+i*0.1}}
                  whileHover={{x:4}} className="flex items-center gap-4 p-4 rounded-3xl card-hover transition-all glass">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.3)"}}>
                    <info.icon className="w-4 h-4" style={{color:"#ffffff"}}/>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{color:"#495057"}}>{info.label}</div>
                    {info.href
                      ? <a href={info.href} className="text-sm font-medium transition-colors" style={{color:"#dee2e6"}}
                          onMouseEnter={e=>(e.currentTarget.style.color="#ffffff")}
                          onMouseLeave={e=>(e.currentTarget.style.color="#dee2e6")}>{info.value}</a>
                      : <span className="text-sm font-medium" style={{color:"#dee2e6"}}>{info.value}</span>
                    }
                  </div>
                  {info.href && <ArrowUpRight className="w-3.5 h-3.5 ml-auto" style={{color:"#ffffff"}}/>}
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{color:"#495057"}}>Social</p>
              <div className="flex gap-2">
                {socials.map((s,i) => (
                  <motion.button key={i} id={`contact-social-${s.label.toLowerCase()}`}
                    whileHover={{scale:1.12,y:-2}} whileTap={{scale:0.95}}
                    onClick={()=>window.open(s.href,"_blank")}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                    style={{background:"rgba(255,255,255,0.05)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.3)"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.7)";(e.currentTarget as HTMLElement).style.color="#ffffff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.15)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.3)";(e.currentTarget as HTMLElement).style.color="#ffffff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.05)";}}
                    title={s.label}>{s.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div initial={{opacity:0,x:40}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:0.8, ease:[0.16, 1, 0.3, 1], delay:0.3}}>
            <form onSubmit={submit} className="p-7 rounded-3xl space-y-4 glass">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["user_name","user_email"] as const).map(name => (
                  <div key={name} className="relative">
                    <input id={`contact-${name}`} name={name} type={name==="user_email"?"email":"text"}
                      placeholder={name==="user_name"?"Your Name":"Your Email"}
                      value={form[name]} onChange={change} onFocus={()=>setFocused(name)} onBlur={()=>setFocused(null)}
                      className="w-full px-4 py-3.5 rounded-xl text-sm w-full"
                      style={{...inputStyle(name),"--tw-placeholder-color":"#495057"} as any}/>
                    <motion.div className="absolute bottom-0 left-0 h-px rounded-full" style={{background:"#dee2e6"}}
                      animate={{width:focused===name?"100%":"0%"}} transition={{duration:0.35}}/>
                  </div>
                ))}
              </div>
              {(["subject","message"] as const).map(name => (
                <div key={name} className="relative">
                  {name==="message"
                    ? <textarea id={`contact-${name}`} name={name} placeholder="Your Message" value={form.message}
                        onChange={change} rows={5} onFocus={()=>setFocused(name)} onBlur={()=>setFocused(null)}
                        className="w-full px-4 py-3.5 rounded-xl text-sm resize-none"
                        style={inputStyle(name)}/>
                    : <input id={`contact-${name}`} name={name} placeholder="Subject" value={form.subject}
                        onChange={change} onFocus={()=>setFocused(name)} onBlur={()=>setFocused(null)}
                        className="w-full px-4 py-3.5 rounded-xl text-sm"
                        style={inputStyle(name)}/>
                  }
                  <motion.div className="absolute bottom-0 left-0 h-px rounded-full" style={{background:"#dee2e6"}}
                    animate={{width:focused===name?"100%":"0%"}} transition={{duration:0.35}}/>
                </div>
              ))}
              <motion.button id="contact-send-btn" type="submit" disabled={submitting}
                whileHover={{scale:1.02,boxShadow:"0 0 24px rgba(248,249,250,0.25)"}} whileTap={{scale:0.98}}
                className="w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 transition-all shimmer-btn"
                style={{background:"#ffffff",color:"#000000"}}>
                {submitting?"Sending...":"Send Message"}<Send className="w-4 h-4"/>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;