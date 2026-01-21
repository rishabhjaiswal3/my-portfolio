import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
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
  const tiltRef = useTilt(8);
  const ctaRef = useMagnetic(0.4);

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
      const tl = gsap.timeline({ delay: 0.3 });
      
      // Blobs fade in
      tl.fromTo('.hero-blob', 
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out', stagger: 0.2 },
        0
      );
      
      // Greeting slides in
      tl.fromTo('.hero-greeting',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.5
      );

      // Name reveal with clip-path
      tl.fromTo('.hero-name',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power4.out' },
        0.7
      );

      // Title fade up
      tl.fromTo('.hero-title',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1
      );

      // Description
      tl.fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1.2
      );

      // CTA buttons stagger
      tl.fromTo('.hero-cta > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        1.4
      );

      // Image reveal
      tl.fromTo('.hero-image-wrapper',
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1.4, ease: 'power4.inOut' },
        0.8
      );

      // Social icons
      tl.fromTo('.hero-social',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        1.6
      );

      // Scroll indicator
      tl.fromTo('.scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax for blobs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      gsap.to('.hero-blob-1', { x: x * 0.5, y: y * 0.5, duration: 1, ease: 'power2.out' });
      gsap.to('.hero-blob-2', { x: x * -0.3, y: y * -0.3, duration: 1, ease: 'power2.out' });
      gsap.to('.hero-blob-3', { x: x * 0.4, y: y * -0.4, duration: 1, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Morphing Blobs */}
      <div className="hero-blob hero-blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] blob opacity-40"
           style={{ background: 'linear-gradient(135deg, hsl(185 75% 45% / 0.3), hsl(175 60% 40% / 0.15))' }} />
      <div className="hero-blob hero-blob-2 absolute bottom-1/4 right-1/4 w-[600px] h-[600px] blob-slow opacity-30"
           style={{ background: 'linear-gradient(135deg, hsl(195 70% 50% / 0.2), hsl(185 75% 45% / 0.1))' }} />
      <div className="hero-blob hero-blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blob opacity-20"
           style={{ background: 'linear-gradient(135deg, hsl(175 60% 40% / 0.25), transparent)' }} />

      {/* Subtle Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="hero-greeting text-primary font-mono text-sm tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="hero-name font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9]">
              Rishabh
              <br />
              <span className="text-gradient">Jaiswal</span>
            </h1>

            <div className="hero-title h-10">
              <span className="text-xl md:text-2xl text-muted-foreground font-light">
                {displayText}
                <span className="cursor-blink text-primary ml-0.5">|</span>
              </span>
            </div>

            <p className="hero-description text-muted-foreground max-w-lg leading-relaxed text-base">
              A passionate Software Developer with <span className="text-foreground">4.5+ years</span> of experience 
              crafting scalable web applications, blockchain solutions, and AI-powered tools. 
              Currently building exceptional digital experiences.
            </p>

            <div className="hero-cta flex flex-wrap gap-4 pt-4">
              <div ref={ctaRef}>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium 
                           transition-all duration-500 hover:shadow-lg hover:shadow-primary/25"
                >
                  Get in Touch
                </a>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-full font-medium
                         hover:border-primary/50 hover:text-primary transition-all duration-500"
              >
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/rishabhjaiswal3"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rj838486@gmail.com"
                className="hero-social text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with 3D Tilt */}
          <div className="flex justify-center lg:justify-end">
            <div ref={tiltRef} className="hero-image-wrapper relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl opacity-50 pulse-glow"
                   style={{ background: 'linear-gradient(135deg, hsl(185 75% 45% / 0.2), transparent)' }} />
              
              {/* Image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={profileImage}
                  alt="Rishabh Jaiswal"
                  className="w-full h-full object-cover"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating elements with depth */}
              <div 
                className="absolute -top-6 -right-6 px-4 py-2 glass rounded-xl text-xs font-mono text-primary floating"
                style={{ transform: 'translateZ(40px)' }}
              >
                React.js
              </div>
              <div 
                className="absolute -bottom-6 -left-6 px-4 py-2 glass rounded-xl text-xs font-mono text-primary floating-slow"
                style={{ transform: 'translateZ(30px)', animationDelay: '-3s' }}
              >
                Node.js
              </div>
              <div 
                className="absolute top-1/2 -right-10 px-4 py-2 glass rounded-xl text-xs font-mono text-primary floating"
                style={{ transform: 'translateZ(50px)', animationDelay: '-5s' }}
              >
                Web3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
