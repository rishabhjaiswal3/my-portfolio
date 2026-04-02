import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight, Calendar, MessageSquare, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { useScrollReveal, useMagnetic, useStaggerReveal } from '@/hooks/useGSAP';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const magneticPillRef = useMagnetic(0.2);
  const socialRef = useStaggerReveal('.social-icon-item');

  const email = "rj838486@gmail.com";
  const telegramUrl = "https://t.me/Proto200";
  const whatsappUrl = "https://wa.me/916396964517";
  const phoneNumber = "+91 63969 64517";
  const calendarUrl = `mailto:${email}?subject=Schedule%20a%20Meeting&body=Hi%20Rishabh,%20I'd%20like%20to%20schedule%20a%20meeting%20to%20discuss...`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Improvised Background Dynamics */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[250px] -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none" />

      <div className="container-custom relative z-10 font-display">
        <div ref={sectionRef} className="max-w-6xl mx-auto text-center md:text-left">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl text-left">
              <span className="eyebrow-chip mb-8">
                <MessageSquare size={12} />
                Get in Touch
              </span>
              <h2 className="text-7xl md:text-9xl text-foreground font-black tracking-tighter leading-[0.8] mb-10">
                Let's <br />
                <span className="text-gradient font-bold italic">Connect</span>
              </h2>
              <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                I'm currently scouting for ambitious projects and engineering challenges.
                Whether it's a new venture or a technical deep-dive, my inbox is open.
              </p>
            </div>

            {/* Magnetic Pill */}
            <div ref={magneticPillRef} className="hidden lg:block">
              <div className="w-64 h-64 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center p-4 group">
                <a
                  href={`mailto:${email}`}
                  className="w-full h-full rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center gap-2 shadow-2xl shadow-primary/30 group-hover:scale-105 transition-transform duration-500"
                >
                  <Mail size={32} />
                  <span className="font-black tracking-widest uppercase text-xs">Email Me</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start" ref={socialRef}>
            {/* Left Column - Large CTA */}
            <div className="lg:col-span-8 social-icon-item">
              <div className="group relative p-12 md:p-16 rounded-[3rem] bg-card/40 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-hidden text-left">
                <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={200} />
                </div>

                <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
                  Have a vision for <br />
                  <span className="text-primary italic">something big?</span>
                </h3>

                <div className="flex flex-wrap gap-6 mb-12">
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-10 py-6 bg-primary text-primary-foreground rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:-translate-y-2 transition-all duration-500"
                  >
                    <Send size={24} />
                    Start Messaging
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-10 py-6 bg-emerald-500/15 text-foreground rounded-2xl font-black text-xl border border-emerald-400/20 hover:bg-emerald-500/20 hover:-translate-y-2 transition-all duration-500"
                  >
                    <MessageCircle size={24} className="text-emerald-400" />
                    WhatsApp Me
                  </a>
                  <a
                    href={calendarUrl}
                    className="flex items-center gap-4 px-10 py-6 bg-white/5 text-foreground rounded-2xl font-black text-xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                  >
                    <Calendar size={24} className="text-primary" />
                    Book Intro Call
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-8 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>Based in India • Working Worldwide</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone size={18} className="text-emerald-400" />
                    <span>{phoneNumber}</span>
                  </a>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <div className="flex items-center gap-2">
                    <span className="text-primary tracking-widest uppercase text-[10px] font-black">SLA:</span>
                    <span>&lt; 24 Hours Reply</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="lg:col-span-4 h-full">
              <div className="flex flex-col gap-4 h-full">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/rishabhjaiswal3' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishabh-jaiswal-710b18169/' },
                  { icon: Send, label: 'Telegram', href: telegramUrl },
                  { icon: MessageCircle, label: 'WhatsApp', href: whatsappUrl },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-item group bg-card/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex items-center justify-between hover:border-primary/30 transition-all duration-500 hover:-translate-x-2"
                  >
                    <div className="flex items-center gap-6 text-left">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <social.icon size={26} />
                      </div>
                      <span className="text-2xl font-black text-foreground">{social.label}</span>
                    </div>
                    <ArrowUpRight size={24} className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
