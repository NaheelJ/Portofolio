import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Parallax Orb Elements
    const orb1 = document.getElementById('bg-orb-1');
    const orb2 = document.getElementById('bg-orb-2');
    
    // Config
    const particleCount = 85; // Increased for richer web
    const connectionDistance = 160;
    const mouseConnectionDistance = 280;
    
    // Smooth Mouse Lerping State
    let targetMouse = { x: -1000, y: -1000 };
    let currentMouse = { x: -1000, y: -1000 };
    const mouseRadius = 180;

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Premium tech colors mix of whites, grays, and subtle blues
        const colors = [
          'rgba(255, 255, 255, 0.4)',
          'rgba(148, 163, 184, 0.3)',
          'rgba(226, 232, 240, 0.2)',
          'rgba(56, 189, 248, 0.15)' // subtle blue tint
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if(!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Add subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }

      update() {
        // Normal slow movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction using smooth lerped mouse
        let dx = currentMouse.x - this.x;
        let dy = currentMouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // Magic distance
        const maxDistance = mouseRadius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = (forceDirectionX * force * this.density) * 0.08; // slightly stronger
        let directionY = (forceDirectionY * force * this.density) * 0.08;

        if (distance < mouseRadius) {
          // Push away smoothly
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to base position slowly if pushed too far
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.x -= dxBase * 0.01;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.y -= dyBase * 0.01;
          }
        }
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      if(!ctx) return;
      let opacityValue = 1;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            opacityValue = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Draw line to mouse if close enough
        let mouseDx = particles[a].x - currentMouse.x;
        let mouseDy = particles[a].y - currentMouse.y;
        let mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDist < mouseConnectionDistance) {
          opacityValue = 1 - (mouseDist / mouseConnectionDistance);
          ctx.strokeStyle = `rgba(180, 200, 255, ${opacityValue * 0.35})`; // Softer, more premium blue/white connection
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(currentMouse.x, currentMouse.y);
          ctx.stroke();
        }
      }
    }

    function animate() {
      if(!ctx || !canvas) return;

      if (window.innerWidth <= 768) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      // Interpolate (lerp) mouse for buttery smoothness
      if (targetMouse.x !== -1000) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      }
      
      // Update glowing orbs parallax using pure DOM for performance out of React render cycle
      if (orb1 && orb2 && targetMouse.x !== -1000) {
         const xOffset = (currentMouse.x / window.innerWidth - 0.5) * 40; // Max 40px shift
         const yOffset = (currentMouse.y / window.innerHeight - 0.5) * 40;
         orb1.style.transform = `translate3d(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px), 0)`;
         orb2.style.transform = `translate3d(calc(50% + ${-xOffset * 1.5}px), calc(50% + ${-yOffset * 1.5}px), 0)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Wait slightly to ensure layout is done
    setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
      animate();
    }, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = event.clientX;
      targetMouse.y = event.clientY;
    };
    
    // Handle scrolling so the mouse position stays relative to screen view tracking
    const handleScroll = () => {
      // Keep tracking but soft reset if scrolling very fast to prevent visual tearing
      targetMouse.x = -1000;
      targetMouse.y = -1000;
      currentMouse.x = -1000;
      currentMouse.y = -1000;
    };

    const handleMouseLeave = () => {
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dynamic base gradient map */}
      <div className="absolute inset-0 premium-ambient-bg" />
      
      {/* Floating abstract glowing orbs */}
      <div 
        id="bg-orb-1"
        className="hidden md:block absolute top-[20%] left-[20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none opacity-[0.10] md:opacity-[0.15] transition-transform duration-100 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.8) 0%, transparent 70%)",
          transform: "translate3d(-50%, -50%, 0)",
          filter: "blur(40px)"
        }}
      />
      
      <div 
        id="bg-orb-2"
        className="hidden md:block absolute bottom-[20%] right-[15%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none opacity-[0.08] md:opacity-[0.12] transition-transform duration-100 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, transparent 70%)",
          transform: "translate3d(50%, 50%, 0)",
          filter: "blur(40px)"
        }}
      />

      {/* Mobile Optimized Dynamic Glows Phase */}
      <div 
        className="md:hidden absolute top-[-5%] left-[-15%] w-[350px] h-[350px] animate-blob pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%)' }} />
      <div 
        className="md:hidden absolute top-[40%] right-[-20%] w-[380px] h-[380px] animate-blob animation-delay-2000 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)' }} />
      <div 
        className="md:hidden absolute bottom-[5%] left-[5%] w-[350px] h-[350px] animate-blob animation-delay-4000 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)' }} />
      
      {/* Particle Canvas layer over the gradients */}
      <canvas 
        ref={canvasRef} 
        className="hidden md:block absolute inset-0 pointer-events-none w-full h-full"
      />
    </div>
  );
}
