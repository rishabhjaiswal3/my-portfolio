import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { useTilt, useMagnetic } from '@/hooks/useGSAP';
import profileImage from '@/assets/profile-hero.jpg';

const titles = [
  'Full Stack Developer',
  'Blockchain Developer',
  'AI Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useTilt(12);
  const ctaRef = useMagnetic(0.3);

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
      
      // Profile image scales in with rotation
      tl.fromTo('.hero-profile',
        { scale: 0, rotate: -10, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
        0
      );

      // Ring animations
      tl.fromTo('.profile-ring',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15 },
        0.3
      );

      // Status badge pops in
      tl.fromTo('.status-badge',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
        0.8
      );

      // Name reveal
      tl.fromTo('.hero-name',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        0.6
      );

      // Title typing area
      tl.fromTo('.hero-title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1.1
      );

      // Description
      tl.fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1.3
      );

      // CTA buttons
      tl.fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        1.5
      );

      // Scroll indicator
      tl.fromTo('.scroll-indicator',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        1.8
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Continuous floating animation for profile
  useEffect(() => {
    gsap.to('.hero-profile', {
      y: -10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    gsap.to('.profile-ring-1', {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.profile-ring-2', {
      rotate: -360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '-2s' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image with Rings */}
        <div ref={imageRef} className="hero-profile relative inline-block mb-8" style={{ transformStyle: 'preserve-3d' }}>
          {/* Animated rings */}
          <div className="profile-ring profile-ring-1 absolute -inset-4 border border-primary/20 rounded-full" />
          <div className="profile-ring profile-ring-2 absolute -inset-8 border border-dashed border-primary/10 rounded-full" />
          
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-50" />
          
          {/* Image container */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 p-1">
            <img
              src={profileImage}
              alt="Rishabh Jaiswal"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Status badge - Job seeking focus */}
          <div className="status-badge absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-card border border-primary/50 rounded-full text-xs font-medium">
            <Briefcase size={12} className="text-primary" />
            <span className="text-foreground">Open to Work</span>
          </div>
        </div>

        {/* Main Heading - Job focused */}
        <h1 className="hero-name font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight">
          Hi, I'm <span className="text-gradient">Rishabh Jaiswal</span>
        </h1>

        {/* Subtitle with typing effect */}
        <div className="hero-title h-8 mb-6">
          <span className="text-lg md:text-xl text-primary font-mono font-medium">
            {displayText}
            <span className="cursor-blink ml-0.5">|</span>
          </span>
        </div>

        {/* Description - Professional & Job-focused */}
        <p className="hero-description text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 text-lg">
          Full-Stack Developer with <span className="text-foreground font-semibold">4.5+ years</span> of experience 
          building scalable web applications, blockchain solutions, and high-performance systems.
        </p>
        
        {/* Key highlights for recruiters */}
        <div className="hero-description flex flex-wrap justify-center gap-3 mb-8">
          {[
            'React & Node.js',
            'TypeScript',
            'Web3 & Solidity',
            'Docker & AWS',
            'System Design',
          ].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons - Job focused */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div ref={ctaRef} className="hero-cta">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium 
                       transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <Mail size={18} />
              Hire Me
            </a>
          </div>
          <a
            href="/Rishabh_Jaiswal_Resume.pdf"
            target="_blank"
            className="hero-cta inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary rounded-full font-medium
                     hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/rishabhjaiswal3', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:rj838486@gmail.com', label: 'Email' },
          ].map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="hero-cta p-3 rounded-xl border border-border/50 text-muted-foreground 
                       hover:text-primary hover:border-primary/30 hover:bg-primary/5 
                       transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 border border-border/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
