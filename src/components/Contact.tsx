import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal, useMagnetic, useLineDraw } from '@/hooks/useGSAP';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const buttonRef = useMagnetic(0.4);
  const lineRef = useLineDraw();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef} className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border max-w-[100px]" />
            <span className="text-primary font-mono text-sm">05</span>
            <div ref={lineRef} className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-[100px]" />
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-muted-foreground mb-12 leading-relaxed max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind 
            or just want to say hi, I'd love to hear from you.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <a
              href="mailto:rj838486@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={16} />
              <span className="animated-underline">rj838486@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Bareilly, India</span>
            </span>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef} className="inline-block mb-16">
            <a
              href="mailto:rj838486@gmail.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-medium text-lg
                       transition-all duration-500 hover:shadow-lg hover:shadow-primary/25"
            >
              <Send size={20} />
              Say Hello
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/rishabhjaiswal3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 
                       transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 
                       transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
