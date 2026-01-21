import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useGSAP';

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container-custom">
        <div ref={sectionRef} className="max-w-2xl mx-auto text-center">
          {/* Section Title */}
          <p className="text-primary font-mono text-lg mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a project in mind, 
            a question, or just want to say hi, my inbox is always open. I'll try my best 
            to get back to you!
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:rj838486@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span>rj838486@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <span>Bareilly, India</span>
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone size={20} />
              <span>+91-6396964517</span>
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:rj838486@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold 
                     hover:shadow-lg glow transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            <Send size={20} />
            Say Hello
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com/rishabhjaiswal3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-jaiswal-710b18169/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
