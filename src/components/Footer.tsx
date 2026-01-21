import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl text-foreground hover:text-primary transition-colors">
            RJ<span className="text-primary">.</span>
          </a>

          {/* Credits */}
          <p className="text-muted-foreground text-sm flex items-center gap-1.5 order-3 md:order-2">
            Built with <Heart size={12} className="text-primary fill-primary" /> by Rishabh Jaiswal
          </p>

          {/* Social Links */}
          <div className="flex gap-4 order-2 md:order-3">
            <a
              href="https://github.com/rishabhjaiswal3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:rj838486@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground/50 text-xs text-center mt-8">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
