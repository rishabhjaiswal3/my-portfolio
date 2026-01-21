import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import gsap from 'gsap';
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
  const ctaRef = useMagnetic(0.3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-display text-foreground hover:text-primary transition-colors duration-300 z-10"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.3"/>
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Center Nav - Floating Pill */}
        <div 
          className={`nav-container hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${
            isScrolled 
              ? 'bg-card/95 backdrop-blur-xl border-border/50 shadow-lg' 
              : 'bg-card/80 backdrop-blur-md border-border/30'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 
                       rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div ref={ctaRef}>
            <a
              href="#contact"
              className="px-5 py-2 ml-1 text-sm bg-primary text-primary-foreground rounded-full 
                       hover:bg-primary/90 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Right Side - Social Icons */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/30">
          {[
            { icon: Twitter, href: '#', label: 'Twitter' },
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
              <social.icon size={16} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors p-2 z-10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display text-foreground hover:text-primary transition-colors"
              style={{ 
                transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
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
            className="mt-4 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg"
          >
            Book a Call
          </a>

          {/* Mobile Social Links */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/' },
              { icon: Github, href: 'https://github.com/rishabhjaiswal3' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
