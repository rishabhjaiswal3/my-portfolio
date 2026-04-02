import { useScrollReveal, useCounter } from '@/hooks/useGSAP';
import { Code2, Rocket, Users, TrendingUp, CheckCircle2, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Expertise',
    description: 'Hands-on across React, Node.js, TypeScript, Rust, FastAPI, and modern product engineering stacks.',
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
    description: 'Built systems spanning Web3 gaming, streaming platforms, and high-concurrency user experiences.',
  },
];

const services = [
  'Architecture Design for High-Traffic Apps',
  'Blockchain & Smart Contract Engineering',
  'Cloud Native Service Deployment',
  'Performance Optimization & Security',
];

const About = () => {
  const sectionRef = useScrollReveal();
  const yearsRef = useCounter(4, 2, '.5+');
  const projectRef = useCounter(25, 2, '+');

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="container-custom relative z-10 font-display">
        <div ref={sectionRef}>
          {/* Section heading */}
          <div className="max-w-4xl mb-20 text-left">
            <span className="eyebrow-chip mb-8">The Mission</span>
            <h2 className="text-6xl md:text-8xl text-foreground mb-10 leading-[0.9] font-black tracking-tighter">
              Engineering{' '}
              <span className="text-gradient italic">Impactful</span>
              <br />
              Digital Products
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-8">
              Bridging the gap between complex architectural challenges and intuitive user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ── Left: Profile Card ── */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/25 to-accent/25 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-700" />
              <div className="relative section-shell animated-border shine-sweep p-10 md:p-12 rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-44 h-44 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute left-8 top-8 h-12 w-12 rounded-full border border-white/8 float-gentle" />

                {/* Profile header */}
                <div className="flex flex-col sm:flex-row items-center gap-7 mb-10 text-left w-full">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-[1.75rem] overflow-hidden border-4 border-muted shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                      <img src={profileImage} alt="Rishabh" className="w-full h-full object-cover scale-110" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-black text-foreground mb-1 tracking-tight">Rishabh Jaiswal</h3>
                    <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-3">Senior Software Engineer</p>
                    <div className="flex items-center gap-1.5 justify-center sm:justify-start text-muted-foreground text-xs">
                      <MapPin size={12} className="text-primary" />
                      <span>India · Remote-first</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                      {['AI Systems', 'Web3 Products', 'Streaming Infra'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-foreground/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-5 text-muted-foreground text-base mb-10 leading-relaxed font-light text-left border-l-2 border-primary/20 pl-6">
                  <p>
                    I specialize in building{' '}
                    <span className="text-foreground font-bold">high-scale distributed systems</span>{' '}
                    and{' '}
                    <span className="text-foreground font-bold">decentralized ecosystems</span>.
                  </p>
                  <p>
                    Now operating as a{' '}
                    <span className="text-primary font-bold">Full-Time Freelancer</span>, I help visionary startups and enterprises architect elite digital products.
                  </p>
                </div>

                {/* Service list */}
                <div className="grid gap-3 mb-10">
                  {services.map((text, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-foreground font-semibold text-left">
                      <div className="w-5 h-5 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20 shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className="text-sm tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-10 mt-auto">
                  <div className="text-left rounded-[1.25rem] bg-white/[0.03] border border-white/5 p-5">
                    <p className="text-4xl font-black text-gradient mb-1.5 leading-none" ref={yearsRef}>4.5+</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-left rounded-[1.25rem] bg-white/[0.03] border border-white/5 p-5">
                    <p className="text-4xl font-black text-gradient mb-1.5 leading-none" ref={projectRef}>25+</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Highlight Cards ── */}
            <div className="grid gap-6">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="skill-card group relative p-8 rounded-[2rem] bg-gradient-card border border-border/30 hover:border-primary/30
                           transition-all duration-600 hover:-translate-x-1.5 shadow-xl shadow-black/5 text-left flex flex-col justify-center overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-primary/[0.04]" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/8 transition-colors duration-700" />

                  <div className="flex gap-6 items-start relative z-10">
                    <div
                      className="w-14 h-14 rounded-[1.25rem] bg-primary/10 flex items-center justify-center shrink-0 border border-primary/15
                                group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-600"
                    >
                      <item.icon size={26} className="text-primary group-hover:text-inherit transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
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
