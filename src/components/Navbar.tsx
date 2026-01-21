import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useMagnetic } from '@/hooks/useGSAP';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Toolbox', href: '#skills' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ctaRef = useMagnetic(0.3);

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
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-display text-foreground hover:text-primary transition-colors duration-300 z-10 flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            <span className="text-primary font-bold">R</span>
          </div>
          <span className="hidden sm:inline font-bold tracking-tight">Rishabh<span className="text-primary">.</span></span>
        </a>

        {/* Center Nav - Floating Pill */}
        <div
          className={`nav-container hidden md:flex items-center gap-1 px-4 py-2 rounded-full border transition-all duration-500 ${isScrolled
              ? 'bg-card/90 backdrop-blur-xl border-border/50 shadow-lg'
              : 'bg-transparent border-transparent'
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground 
                       rounded-full transition-all duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div ref={ctaRef} className="ml-2">
            <a
              href="#contact"
              className="px-5 py-2 text-sm bg-primary text-primary-foreground rounded-full 
                       hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side - Actions */}
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

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-muted-foreground 
                     hover:text-primary transition-all duration-300 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-lg shadow-primary/20"
          >
            Get in Touch
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
