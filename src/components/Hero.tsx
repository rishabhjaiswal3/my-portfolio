import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
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
  const imageRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
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
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-greeting',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-name',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        '.hero-title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 }
      );

      gsap.fromTo(
        '.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.9 }
      );

      gsap.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.1 }
      );

      gsap.fromTo(
        '.hero-image',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        '.scroll-indicator',
        { y: 0, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.5 }
      );

      gsap.to('.scroll-indicator', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        x,
        y,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden grid-bg noise-overlay"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating" style={{ animationDelay: '-3s' }} />

      <div className="container-custom section-padding pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="hero-greeting text-primary font-mono text-lg">
              Hello, my name is
            </p>

            <h1 className="hero-name text-5xl md:text-7xl font-bold text-foreground">
              Rishabh Jaiswal
            </h1>

            <div className="hero-title h-12">
              <span className="text-2xl md:text-4xl text-muted-foreground">
                {displayText}
                <span className="cursor-blink text-primary">|</span>
              </span>
            </div>

            <p className="hero-description text-lg text-muted-foreground max-w-xl leading-relaxed">
              A passionate Software Developer with 3+ years of experience building 
              scalable web applications, blockchain solutions, and AI-powered tools. 
              Currently crafting exceptional digital experiences at{' '}
              <span className="text-primary">Surebright</span> &{' '}
              <span className="text-primary">Mogi IO</span>.
            </p>

            <div className="hero-cta flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold 
                         hover:shadow-lg glow transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold
                         hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-cta flex gap-6 pt-6">
              <a
                href="https://github.com/rishabhjaiswal3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rj838486@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div ref={imageRef} className="hero-image relative">
              {/* Glowing border */}
              <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-lg opacity-50 pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/50">
                <img
                  src={profileImage}
                  alt="Rishabh Jaiswal"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg text-sm font-mono text-primary floating">
                React.js
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-lg text-sm font-mono text-primary floating" style={{ animationDelay: '-2s' }}>
                Node.js
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 glass rounded-lg text-sm font-mono text-primary floating" style={{ animationDelay: '-4s' }}>
                Web3
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-mono">Scroll Down</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
