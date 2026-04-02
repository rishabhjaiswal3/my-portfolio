import { useStaggerReveal, useCounter } from '@/hooks/useGSAP';
import { Wrench, Code, Database, Blocks, Cloud, Settings, Zap, Cpu, Globe, Rocket } from 'lucide-react';

const toolbox = [
  {
    category: 'Frontend',
    icon: Code,
    tools: ['React.js', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    category: 'Backend',
    icon: Cpu,
    tools: ['Node.js', 'Express.js', 'Rust', 'Axum', 'Python', 'FastAPI'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    category: 'Databases',
    icon: Database,
    tools: ['MongoDB', 'Redis', 'PostgreSQL', 'MySQL', 'Mongoose', 'AWS S3'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Web3 & Auth',
    icon: Blocks,
    tools: ['Solidity', 'Viem', 'Ethers.js', 'Privy', 'Wagmi', 'MetaMask'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    category: 'DevOps',
    icon: Cloud,
    tools: ['Docker', 'Kubernetes', 'AWS', 'Nginx', 'CI/CD', 'Uvicorn'],
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    category: 'Realtime & Media',
    icon: Settings,
    tools: ['Socket.IO', 'FFmpeg', 'HLS', 'React Query', 'Three.js', 'OpenAI API'],
    color: 'from-rose-500/20 to-red-500/20',
  },
];

const stats = [
  { value: 4, suffix: '.5+', label: 'Years Experience', icon: Zap },
  { value: 10, suffix: 'K+', label: 'Blockchain Txns', icon: Blocks },
  { value: 40, suffix: '%', label: 'Buffering Reduced', icon: Globe },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Rocket },
];

const StatCounter = ({ value, suffix, label, icon: Icon }: typeof stats[0]) => {
  const counterRef = useCounter(value, 2, suffix);

  return (
    <div className="relative group p-8 md:p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/30 hover:border-primary/30 
                  transition-all duration-700 text-left shadow-2xl shadow-black/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="w-12 h-12 mb-10 rounded-2xl bg-primary/10 flex items-center justify-center 
                      group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
          <Icon size={22} className="text-primary group-hover:text-inherit" />
        </div>
        <div>
          <p className="text-5xl md:text-6xl font-display font-black text-foreground mb-3 tracking-tighter">
            <span ref={counterRef}>{value}{suffix}</span>
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground font-display">{label}</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useStaggerReveal('.skill-card');

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/10">
      <div className="absolute inset-0 bg-gradient-mesh opacity-35" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -z-10" />

      <div className="container-custom relative z-10 font-display">
        <div ref={sectionRef}>
          <div className="max-w-4xl mb-24 text-left">
            <span className="eyebrow-chip mb-8">
              <Wrench size={14} />
              The Infrastructure
            </span>
            <h2 className="text-6xl md:text-8xl text-foreground mb-10 leading-[0.9] font-black tracking-tighter">
              Elite Tech Stack & <br /> <span className="text-gradient italic font-bold">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-10">
              Battle-tested frameworks and languages for architecting resilient, high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolbox.map((category, i) => (
              <div
                key={category.category}
                className={`skill-card group relative p-12 rounded-[3rem] bg-gradient-card shadow-2xl border border-border/30 
                          hover:border-primary/40 transition-all duration-700 overflow-hidden flex flex-col text-left shine-sweep`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-primary/[0.05]" />
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 
                               group-hover:opacity-40 transition-opacity duration-700 blur-3xl -translate-y-1/2 translate-x-1/2`} />
                <div className="absolute left-8 top-8 h-12 w-12 rounded-full border border-white/5 float-gentle opacity-60" />

                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-muted/50 border border-white/5 flex items-center justify-center 
                                  group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                      <category.icon size={28} className="text-primary group-hover:text-inherit" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-primary/70 mb-2">Capability</p>
                      <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-5 py-2.5 text-xs font-black bg-muted/60 text-muted-foreground rounded-2xl
                                 border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-white dark:hover:bg-black transition-all duration-500 uppercase tracking-widest"
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
