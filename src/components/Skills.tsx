import { useStaggerReveal, useLineDraw, useCounter } from '@/hooks/useGSAP';
import { Wrench, Code, Database, Blocks, Cloud, Settings, Zap, Cpu, Globe } from 'lucide-react';

const toolbox = [
  {
    category: 'Frontend',
    icon: Code,
    tools: ['React.js', 'React Native', 'Next.js', 'Angular 12', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    category: 'Backend',
    icon: Cpu,
    tools: ['Node.js', 'Express.js', 'Python', 'NestJS', 'GraphQL', 'REST APIs'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    category: 'Databases',
    icon: Database,
    tools: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Blockchain',
    icon: Blocks,
    tools: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'Ethers.js', 'MetaMask'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    category: 'DevOps',
    icon: Cloud,
    tools: ['Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'Nginx', 'CI/CD'],
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    category: 'Tools',
    icon: Settings,
    tools: ['Git', 'FFmpeg', 'RabbitMQ', 'Keycloak', 'Stripe', 'OpenAI API'],
    color: 'from-rose-500/20 to-red-500/20',
  },
];

const stats = [
  { value: 4, suffix: '.5+', label: 'Years Experience', icon: Zap },
  { value: 10, suffix: 'K+', label: 'Blockchain Txns', icon: Blocks },
  { value: 40, suffix: '%', label: 'Buffering Reduced', icon: Globe },
  { value: 25, suffix: '%', label: 'Latency Improved', icon: Cpu },
];

const StatCounter = ({ value, suffix, label, icon: Icon }: typeof stats[0]) => {
  const counterRef = useCounter(value, 2, suffix);
  
  return (
    <div className="relative group p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 
                  transition-all duration-500 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 
                    group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center 
                      group-hover:bg-primary/20 transition-colors">
          <Icon size={24} className="text-primary" />
        </div>
        <p className="text-3xl md:text-4xl font-display text-gradient mb-2">
          <span ref={counterRef}>{value}{suffix}</span>
        </p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useStaggerReveal('.skill-card');
  const lineRef = useLineDraw();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full">
              <Wrench size={12} />
              Toolbox
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              My toolkit spans from frontend to blockchain — everything needed to build modern web applications.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>

          {/* Toolbox Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolbox.map((category, i) => (
              <div
                key={category.category}
                className={`skill-card group relative p-6 rounded-2xl bg-card/50 border border-border/30 
                          hover:border-primary/30 transition-all duration-500 overflow-hidden`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center 
                                  group-hover:bg-primary/20 transition-colors">
                      <category.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1.5 text-xs font-mono bg-muted/50 text-muted-foreground rounded-lg
                                 border border-border/30 hover:border-primary/30 hover:text-primary transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
