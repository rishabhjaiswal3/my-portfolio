import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useMagnetic } from '@/hooks/useGSAP';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useMagnetic(0.3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo('.nav-logo',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    );
    
    tl.fromTo('.nav-item',
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' },
      0.3
    );
    
    tl.fromTo('.nav-cta',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
      0.6
    );
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass py-4' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <div ref={logoRef}>
          <a
            href="#"
            className="nav-logo text-2xl font-display text-foreground hover:text-primary transition-colors duration-300"
          >
            RJ<span className="text-primary">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Rishabh_Jaiswal_Resume.pdf"
            target="_blank"
            className="nav-cta px-5 py-2.5 text-sm border border-primary/50 text-primary rounded-full 
                     hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-border/30 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-6 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Rishabh_Jaiswal_Resume.pdf"
            target="_blank"
            className="mt-4 px-5 py-3 border border-primary/50 text-primary rounded-full text-center 
                     hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
