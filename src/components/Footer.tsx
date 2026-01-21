import { Github, Linkedin, Mail, Heart, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const email = "rj838486@gmail.com";

  return (
    <footer className="py-20 relative overflow-hidden border-t border-border/30 bg-background font-display">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start transition-all duration-500 text-left">
            <a href="#" className="font-display text-4xl text-foreground hover:text-primary transition-all duration-300 mb-4 group font-black">
              R<span className="text-primary group-hover:animate-pulse">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left leading-relaxed font-light mb-6">
              Engineering premium digital experiences with high-scale technical depth.
            </p>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-primary/5 border border-primary/20 text-foreground hover:border-primary/50 transition-all group"
            >
              <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-black tracking-tight">{email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {[
              { icon: Github, href: 'https://github.com/rishabhjaiswal3', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/', label: 'LinkedIn' },
              { icon: Send, href: 'https://t.me/Proto200', label: 'Telegram' },
              { icon: Mail, href: `mailto:${email}`, label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border/30 flex items-center justify-center text-muted-foreground 
                         hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-2 transition-all duration-500 group shadow-lg"
                aria-label={social.label}
              >
                <social.icon size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 transition-all duration-500"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-border/30 flex items-center justify-center text-muted-foreground 
                          group-hover:border-primary group-hover:text-primary transition-all duration-500 shadow-xl group-hover:-translate-y-1">
              <ArrowUp size={24} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
