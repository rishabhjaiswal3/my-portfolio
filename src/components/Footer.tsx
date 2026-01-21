import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Credits */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> by Rishabh Jaiswal
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/rishabhjaiswal3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rj838486@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
