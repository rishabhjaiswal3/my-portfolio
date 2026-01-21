import { Mail, MapPin, Send, Github, Linkedin, Twitter, ArrowUpRight, Calendar, MessageSquare } from 'lucide-react';
import { useScrollReveal, useMagnetic, useLineDraw } from '@/hooks/useGSAP';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const buttonRef = useMagnetic(0.3);
  const lineRef = useLineDraw();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full">
              <MessageSquare size={12} />
              Contact
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind 
              or just want to say hi, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <a
              href="mailto:rj838486@gmail.com"
              className="group p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 
                       transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                              group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary 
                                                  transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                Email Me
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                rj838486@gmail.com
              </p>
            </a>

            {/* Book a Call Card */}
            <a
              href="#"
              className="group p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 
                       transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                              group-hover:bg-primary/20 transition-colors">
                  <Calendar size={24} className="text-primary" />
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary 
                                                  transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                Book a Call
              </h3>
              <p className="text-muted-foreground text-sm">
                Schedule a 30-min intro call
              </p>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
            <MapPin size={16} />
            <span>Based in Bareilly, India</span>
            <span className="text-primary">•</span>
            <span>Available worldwide</span>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <div ref={buttonRef} className="inline-block">
              <a
                href="mailto:rj838486@gmail.com"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground 
                         rounded-full font-medium text-lg transition-all duration-500 
                         hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <Send size={20} />
                Say Hello
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/rishabhjaiswal3', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border/30 text-muted-foreground 
                         hover:text-primary hover:border-primary/30 hover:bg-primary/5
                         transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
