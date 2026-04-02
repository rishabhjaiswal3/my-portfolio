import { useEffect, useRef, useState } from 'react';
import { Download, Sparkles, Send, ArrowUpRight, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useTilt, useMagnetic } from '@/hooks/useGSAP';
import profileImage from '@/assets/profile-hero.jpg';

const titles = [
  'Full Stack Freelancer',
  'Blockchain Architect',
  'AI Systems Engineer',
  'Product Visionary',
];

const heroStats = [
  { value: '25+', label: 'Products Shipped' },
  { value: '4.5+', label: 'Years Experience' },
  { value: 'Web3 + AI', label: 'Core Focus' },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useTilt(10);
  const ctaRef = useMagnetic(0.3);

  const telegramUrl = 'https://t.me/Proto200';

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

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.hero-profile',
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out' }, 0
      );
      tl.fromTo('.hero-name',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }, 0.2
      );
      tl.fromTo('.hero-title-wrap',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5
      );
      tl.fromTo('.hero-description',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.65
      );
      tl.fromTo('.hero-cta',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' }, 0.8
      );
      tl.fromTo('.status-badge',
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(2)' }, 0.9
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.1] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">

        {/* ── TOP STRIP: eyebrow + location ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
          <span className="eyebrow-chip">
            <Sparkles size={11} className="text-primary" />
            Building High-Performance Digital Products
          </span>
          <div className="hero-description hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/5 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
            <MapPin size={11} className="text-primary" />
            India · Available Worldwide
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 xl:gap-16 items-start">

          {/* LEFT: all text */}
          <div className="min-w-0">

            {/* Name — single line, fluid size */}
            <div className="hero-name mb-5 overflow-hidden">
              <h1
                className="font-display font-black tracking-[-0.04em] leading-[0.88] whitespace-nowrap"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
              >
                Rishabh{' '}
                <span className="text-gradient">Jaiswal</span>
              </h1>
            </div>

            {/* Typing role */}
            <div className="hero-title-wrap flex items-center gap-3 mb-7 h-9">
              <div className="w-8 h-px bg-primary/50" />
              <span className="text-base md:text-lg text-primary font-mono font-black tracking-widest uppercase">
                {displayText}
                <span className="cursor-blink ml-0.5 text-primary/50">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="hero-description text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">
              Full-stack engineer designing{' '}
              <span className="text-foreground font-semibold">premium product experiences</span>,
              high-scale backends, and AI/Web3 systems for ambitious startups and internet-first brands.
            </p>

            {/* Skill pills */}
            <div className="hero-description flex flex-wrap gap-2.5 mb-10">
              {['Web3 Specialist', 'System Architect', 'UI/UX Enthusiast'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-card/40 backdrop-blur-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/70">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div ref={ctaRef} className="hero-cta">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-black text-sm
                           transition-all duration-400 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-400 rounded-xl" />
                  <Send size={15} className="relative z-10" />
                  <span className="relative z-10">Message on Telegram</span>
                </a>
              </div>

              <a
                href="#projects"
                className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 bg-card/60 border border-border/50 text-foreground rounded-xl font-black text-sm
                         hover:border-primary/40 hover:bg-card transition-all duration-400 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Explore Projects
                <ArrowUpRight size={15} className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/Rishabh_Jaiswal.pdf"
                download="Rishabh_Jaiswal_Resume.pdf"
                className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-border/40 text-muted-foreground rounded-xl font-black text-sm
                         hover:border-primary/30 hover:text-foreground transition-all duration-400 hover:-translate-y-0.5"
              >
                <Download size={15} className="text-primary group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </div>

            {/* Stats row */}
            <div className="hero-cta grid grid-cols-3 gap-px bg-border/20 rounded-2xl overflow-hidden border border-border/20 max-w-lg">
              {heroStats.map((item, i) => (
                <div
                  key={item.label}
                  className={`bg-card/30 backdrop-blur-sm px-5 py-5 text-left ${i < 2 ? 'border-r border-border/20' : ''}`}
                >
                  <p className="text-2xl md:text-3xl font-black tracking-tight text-foreground font-display leading-none mb-2">{item.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: profile image */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <div
              ref={imageRef}
              className="hero-profile relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-[2.5rem] blur-3xl scale-110 opacity-40" />

              {/* Spinning ring */}
              <div className="absolute -inset-5 border border-primary/12 rounded-full animate-spin-slow" />
              <div className="absolute -inset-10 border border-dashed border-primary/6 rounded-full animate-spin-slow-reverse" />

              {/* Image frame */}
              <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] xl:w-[360px] xl:h-[360px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src={profileImage}
                  alt="Rishabh Jaiswal"
                  className="w-full h-full object-cover"
                />
                {/* subtle inner gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
              </div>

              {/* Status badge — bottom center */}
              <div className="status-badge absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 bg-card/95 backdrop-blur-xl border border-primary/25 rounded-xl shadow-xl whitespace-nowrap">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-foreground">Open for Collaboration</span>
              </div>

              {/* Tech pill — top left */}
              <div className="absolute -top-4 -left-2 lg:-left-6 px-3 py-1.5 bg-card/90 backdrop-blur-xl border border-accent/25 rounded-xl shadow-lg float-gentle">
                <span className="text-[9px] font-black uppercase tracking-widest text-accent">AI · Web3 · Cloud</span>
              </div>

              {/* Experience badge — right side */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-6 px-3 py-2 bg-card/90 backdrop-blur-xl border border-primary/20 rounded-xl shadow-lg float-gentle" style={{ animationDelay: '-3s' }}>
                <p className="text-lg font-black text-gradient leading-none">4.5+</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Yrs Exp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.35em] text-muted-foreground group-hover:text-primary transition-colors">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-border/50 flex justify-center pt-2 group-hover:border-primary/50 transition-colors">
          <div className="w-1 h-2.5 bg-primary rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
