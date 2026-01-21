import { useScrollReveal, useCounter } from '@/hooks/useGSAP';
import { Code2, Rocket, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Expertise',
    description: 'Proficient in React, Node.js, TypeScript, and modern frameworks with hands-on production experience.',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Reduced video buffering by 40% and query latency by 25% through optimized architectures.',
  },
  {
    icon: Users,
    title: 'Freelance Architect',
    description: 'Now delivering bespoke high-scale solutions for global clients with extreme technical depth.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built systems handling 10,000+ blockchain transactions and 5,000+ concurrent users.',
  },
];

const About = () => {
  const sectionRef = useScrollReveal();
  const yearsRef = useCounter(4, 2, '.5+');
  const projectRef = useCounter(25, 2, '+');

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="container-custom relative z-10 font-display">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="max-w-4xl mb-24 text-left">
            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 rounded-full border border-primary/20">
              The Mission
            </span>
            <h2 className="text-6xl md:text-8xl text-foreground mb-10 leading-[0.9] font-black tracking-tighter">
              Engineering <span className="text-gradient italic">Impactful</span> <br /> Digital Products
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-8">
              Bridging the gap between complex architectural challenges and intuitive user experiences.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* Left - Personal Card */}
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative p-12 md:p-16 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div>
                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row items-center gap-8 mb-12 text-left w-full">
                    <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-4 border-muted shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 shrink-0">
                      <img src={profileImage} alt="Rishabh" className="w-full h-full object-cover scale-110" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-4xl font-black text-foreground mb-2 tracking-tight">Rishabh Jaiswal</h3>
                      <p className="text-primary font-black uppercase tracking-widest text-[10px]">Senior Software Engineer</p>
                    </div>
                  </div>

                  {/* Professional Story */}
                  <div className="space-y-8 text-muted-foreground text-xl mb-12 leading-relaxed font-light text-left">
                    <p>
                      I specialize in building <span className="text-foreground font-black">high-scale distributed systems</span> and
                      <span className="text-foreground font-black"> decentralized ecosystems</span>.
                    </p>
                    <p>
                      Now operating as a <span className="text-primary font-black">Full-Time Freelancer</span>, I help visionary startups and enterprises architect elite digital products.
                    </p>
                  </div>

                  {/* Achievement Checklist */}
                  <div className="grid gap-5 mb-12">
                    {[
                      'Architecture Design for High-Traffic Apps',
                      'Blockchain & Smart Contract Engineering',
                      'Cloud Native Service Deployment',
                      'Performance Optimization & Security',
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 text-foreground font-bold text-left">
                        <div className="w-6 h-6 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 shrink-0">
                          <CheckCircle2 size={14} className="text-primary" />
                        </div>
                        <span className="text-sm tracking-tight">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic Stats Row */}
                <div className="flex gap-10 border-t border-white/10 pt-12">
                  <div className="text-left flex-1">
                    <p className="text-5xl font-black text-gradient mb-2 leading-none" ref={yearsRef}>4.5+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-5xl font-black text-gradient mb-2 leading-none" ref={projectRef}>25+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Value Pillars */}
            <div className="grid gap-8 h-full">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/30 
                           transition-all duration-700 hover:-translate-x-2 shadow-2xl shadow-black/5 text-left flex flex-col justify-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex gap-8 items-start">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center shrink-0
                                  group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
                      <item.icon size={36} className="text-primary group-hover:text-inherit" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
