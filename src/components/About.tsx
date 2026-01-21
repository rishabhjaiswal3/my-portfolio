import { useScrollReveal } from '@/hooks/useGSAP';
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
    title: 'Team Collaboration',
    description: 'Worked in cross-functional teams at Surebright, Mogi IO, and Queppelin delivering impactful products.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built systems handling 10,000+ blockchain transactions and 5,000+ concurrent users.',
  },
];

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 tracking-tight">
              Why You Should <span className="text-gradient">Hire Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light">
              I bring technical expertise, proven results, and a passion for building products that make a difference.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - About Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/30">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50">
                    <img src={profileImage} alt="Rishabh" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-foreground">Rishabh Jaiswal</h3>
                    <p className="text-primary font-medium">Full Stack Developer</p>
                  </div>
                  <div className="ml-auto px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium text-primary border border-primary/20">
                    4.5+ Years
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-4 text-muted-foreground mb-6">
                  <p className="leading-relaxed">
                    I'm a <span className="text-foreground font-medium">results-driven Full Stack Developer</span> with 
                    expertise in building scalable web applications, blockchain solutions, and high-performance backend systems.
                  </p>
                  <p className="leading-relaxed">
                    I've delivered impactful solutions at <span className="text-primary font-medium">Surebright</span> (eCommerce integrations), 
                    <span className="text-primary font-medium"> Mogi IO</span> (video streaming), and <span className="text-primary font-medium">Queppelin</span> (Web3 & NFT platforms).
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground mb-3">Key Achievements:</p>
                  {[
                    'Built video transcoding engine reducing buffering by 40%',
                    'Processed 10,000+ on-chain blockchain transactions',
                    'Developed Redis SDK reducing query latency by 25%',
                    'Implemented SSO reducing login time by 30%',
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Quick stats */}
                <div className="flex gap-6 mt-8 pt-6 border-t border-border/30">
                  {[
                    { value: '4.5+', label: 'Years Experience' },
                    { value: '3', label: 'Companies' },
                    { value: '15+', label: 'Projects' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center flex-1">
                      <p className="text-2xl font-display text-gradient">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Highlight Cards */}
            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="group flex gap-4 p-5 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 
                           transition-all duration-500 hover:-translate-x-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0
                                group-hover:bg-primary/20 transition-colors">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
