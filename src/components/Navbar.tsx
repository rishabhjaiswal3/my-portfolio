import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useMagnetic } from '@/hooks/useGSAP';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Toolbox', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ctaRef = useMagnetic(0.3);
  const whatsappUrl = 'https://wa.me/916396964517';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mounted) {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.nav-container',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      tl.fromTo('.nav-social',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' },
        0.5
      );
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className={`z-10 flex items-center gap-2.5 px-3 py-2 rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'bg-card/85 backdrop-blur-2xl border-border/50 shadow-2xl'
              : 'bg-card/35 backdrop-blur-xl border-white/5'
          }`}
        >
          <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center border border-primary/25 shadow-sm">
            <span className="text-primary font-black text-sm">R</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold tracking-tight text-foreground text-sm hover:text-primary transition-colors">Rishabh<span className="text-primary">.</span></span>
            <p className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground">Engineering Portfolio</p>
          </div>
        </a>

        <div
          className={`nav-container hidden md:flex items-center gap-1 px-4 py-2 rounded-full border transition-all duration-500 ${isScrolled
              ? 'bg-card/85 backdrop-blur-2xl border-border/50 shadow-2xl'
              : 'bg-card/35 backdrop-blur-xl border-white/5'
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground 
                       rounded-full transition-all duration-300 font-medium hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div ref={ctaRef} className="ml-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm bg-primary text-primary-foreground rounded-full 
                       hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 px-2 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-border/30">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/rishabhjaiswal3', label: 'GitHub' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-muted-foreground 
                     hover:text-primary transition-all duration-300 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display text-foreground hover:text-primary transition-all duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 100}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-lg shadow-primary/20"
          >
            WhatsApp Me
          </a>

          {/* Mobile Social Links */}
          <div className="flex gap-6 mt-8">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/' },
              { icon: Github, href: 'https://github.com/rishabhjaiswal3' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                style={{
                  transitionDelay: isOpen ? `${(navLinks.length + i) * 100}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
