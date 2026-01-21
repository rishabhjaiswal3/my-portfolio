import { useScrollReveal, useLineDraw } from '@/hooks/useGSAP';
import { Sparkles, Zap, Target, Heart } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';

const highlights = [
  {
    icon: Sparkles,
    title: 'End-to-End Builder',
    description: 'From concept to deployment, I handle the full stack with precision.',
  },
  {
    icon: Zap,
    title: 'Performance Obsessed',
    description: 'Every millisecond matters. I optimize for speed and efficiency.',
  },
  {
    icon: Target,
    title: 'User-Focused',
    description: 'Building experiences that delight users and drive results.',
  },
  {
    icon: Heart,
    title: 'Passionate Learner',
    description: 'Always exploring new technologies and pushing boundaries.',
  },
];

const About = () => {
  const sectionRef = useScrollReveal();
  const lineRef = useLineDraw();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full">
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Here's what sets me apart
              <br />
              <span className="text-gradient">and makes me unique</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - About Card with Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Mini header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50">
                    <img src={profileImage} alt="Rishabh" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Learn more about me</p>
                    <p className="text-xs text-muted-foreground">Good morning! ☀️</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-full text-xs text-green-500">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Available
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    I'm <span className="text-foreground font-medium">Rishabh</span>, an experienced full-stack engineer 
                    based in <span className="text-foreground">Bareilly, India</span>. I specialize in building 
                    scalable web applications that solve real problems.
                  </p>
                  <p className="leading-relaxed">
                    With <span className="text-primary font-medium">4.5+ years</span> of experience, I've worked with 
                    companies like <span className="text-primary">Surebright</span>, <span className="text-primary">Mogi IO</span>, 
                    and <span className="text-primary">Queppelin</span> — building everything from eCommerce platforms 
                    to blockchain solutions.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source, or solving algorithmic challenges.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="flex gap-6 mt-8 pt-6 border-t border-border/30">
                  {[
                    { value: '4.5+', label: 'Years Exp' },
                    { value: '10K+', label: 'Transactions' },
                    { value: '40%', label: 'Perf Gain' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-display text-gradient">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 
                           transition-all duration-500 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                                group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo strip like Parth's site */}
          <div className="flex items-center justify-center gap-4 py-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden border border-border/30 
                         shadow-xl hover:scale-105 hover:z-10 transition-all duration-500 cursor-pointer group"
                style={{ transform: `rotate(${(i - 3) * 3}deg)` }}
              >
                <img
                  src={profileImage}
                  alt={`Photo ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: i % 2 === 0 ? 'none' : 'grayscale(100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
