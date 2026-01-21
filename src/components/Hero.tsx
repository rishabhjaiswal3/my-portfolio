import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Download, Briefcase, ChevronDown, Sparkles, Send } from 'lucide-react';
import gsap from 'gsap';
import { useTilt, useMagnetic, useSplitReveal } from '@/hooks/useGSAP';
import profileImage from '@/assets/profile-hero.jpg';

const titles = [
  'Full Stack Freelancer',
  'Blockchain Architect',
  'AI Systems Engineer',
  'Product Visionary',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useTilt(15);
  const ctaRef = useMagnetic(0.3);
  const nameRef = useSplitReveal();

  const telegramUrl = "https://t.me/Proto200";

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo('.hero-profile',
        { scale: 0.8, rotate: -10, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.6)' },
        0
      );

      tl.fromTo('.status-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(2)' },
        1.2
      );

      tl.fromTo('.hero-title-wrap',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.8
      );

      tl.fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1.0
      );

      tl.fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        1.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Dynamic Orbs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '-2s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] dark:opacity-[0.1]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto font-display">
        {/* Profile Section */}
        <div ref={imageRef} className="hero-profile relative inline-block mb-12" style={{ transformStyle: 'preserve-3d' }}>
          {/* Animated Rings */}
          <div className="absolute -inset-6 border border-primary/20 rounded-full animate-spin-slow" />
          <div className="absolute -inset-10 border border-dashed border-primary/10 rounded-full animate-spin-slow-reverse" />

          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-2xl opacity-40 shadow-2xl" />

          {/* Image */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden border-4 border-card shadow-2xl p-0">
            <img
              src={profileImage}
              alt="Rishabh Jaiswal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="status-badge absolute -bottom-4 right-0 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-foreground">Open for Collaboration</span>
          </div>
        </div>

        {/* Name with Split Reveal */}
        <div className="overflow-hidden mb-6">
          <h1 ref={nameRef} className="text-7xl md:text-8xl lg:text-9xl text-foreground font-black tracking-tighter leading-none">
            Rishabh <span className="text-gradient">Jaiswal</span>
          </h1>
        </div>

        {/* Subtitle - Typing */}
        <div className="hero-title-wrap h-12 mb-8 lowercase">
          <span className="text-xl md:text-3xl text-primary font-mono font-black tracking-tighter uppercase transition-all duration-300">
            {displayText}
            <span className="cursor-blink ml-1 text-primary/70">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="hero-description text-muted-foreground max-w-3xl mx-auto mb-12 text-lg md:text-2xl font-light leading-relaxed">
          Full-Stack Freelancer delivering <span className="text-foreground font-black underline decoration-primary/30 underline-offset-4 tracking-tight">Elite Digital Solutions</span> and
          blockchain scalability with <span className="text-foreground font-black">4.5+ years</span> of industry expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div ref={ctaRef} className="hero-cta">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-black text-lg 
                       transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Send size={20} className="relative z-10" />
              <span className="relative z-10">Message on Telegram</span>
            </a>
          </div>
          <a
            href="/Rishabh_Jaiswal.pdf"
            download="Rishabh_Jaiswal_Resume.pdf"
            className="hero-cta group inline-flex items-center gap-3 px-12 py-6 bg-card border border-border/50 text-foreground rounded-2xl font-black text-lg font-display
                     hover:border-primary/50 hover:bg-muted/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
          >
            <Download size={20} className="text-primary group-hover:scale-110 transition-transform" />
            Download CV
          </a>
        </div>

        {/* Floating Badges */}
        <div className="hero-description flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto opacity-60">
          {['Web3 Specialist', 'System Architect', 'UI/UX Enthusiast'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer indicator */}
      <a href="#about" className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">Deep Dive</span>
        <div className="w-8 h-12 rounded-full border-2 border-border/50 flex justify-center p-2 group-hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
