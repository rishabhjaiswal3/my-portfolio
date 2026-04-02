import { Github, Linkedin, Mail, ArrowUp, Send, MessageCircle, Phone } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Toolbox', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = "rj838486@gmail.com";
  const whatsappUrl = "https://wa.me/916396964517";
  const phoneNumber = "+91 63969 64517";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-background font-display">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container-custom px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-border/20">

          {/* Col 1: Brand + Contact */}
          <div className="flex flex-col items-start">
            <a href="#" className="font-display text-5xl text-foreground hover:text-primary transition-all duration-300 mb-3 group font-black">
              R<span className="text-primary group-hover:animate-pulse">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed font-light mb-7">
              Engineering premium digital experiences with high-scale technical depth.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5 border border-primary/15 text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all group w-full"
              >
                <Mail size={15} className="text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-sm font-semibold tracking-tight truncate">{email}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-400/15 text-foreground hover:border-emerald-400/40 hover:bg-emerald-500/12 transition-all group w-full"
              >
                <Phone size={15} className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-sm font-semibold tracking-tight">{phoneNumber}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Nav links */}
          <div className="flex flex-col items-start">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social links + scroll to top */}
          <div className="flex flex-col items-start">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Connect</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Github, href: 'https://github.com/rishabhjaiswal3', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/', label: 'LinkedIn' },
                { icon: Send, href: 'https://t.me/Proto200', label: 'Telegram' },
                { icon: MessageCircle, href: whatsappUrl, label: 'WhatsApp' },
                { icon: Mail, href: `mailto:${email}`, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-border/30 flex items-center justify-center text-muted-foreground
                           hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1.5 transition-all duration-400 group shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center group-hover:border-primary group-hover:-translate-y-1 transition-all duration-300">
                <ArrowUp size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] text-muted-foreground font-light">
            © {currentYear} Rishabh Jaiswal. Crafted with precision.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[11px] text-muted-foreground">
              Available for new projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
