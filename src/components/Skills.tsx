import { useStaggerReveal, useLineDraw, useCounter } from '@/hooks/useGSAP';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'React Native', 'Next.js', 'Angular 12', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
  },
  {
    title: 'Blockchain',
    skills: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'Ethers.js', 'MetaMask'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'Nginx', 'CI/CD'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'FFmpeg', 'RabbitMQ', 'Keycloak', 'Stripe', 'OpenAI API'],
  },
];

const stats = [
  { value: 4, suffix: '.5+', label: 'Years Experience' },
  { value: 10, suffix: 'K+', label: 'Transactions' },
  { value: 40, suffix: '%', label: 'Buffering Reduced' },
  { value: 25, suffix: '%', label: 'Latency Improved' },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const counterRef = useCounter(value, 2, suffix);
  
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-display text-gradient">
        <span ref={counterRef}>{value}{suffix}</span>
      </p>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
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
          <div className="flex items-center gap-6 mb-16">
            <span className="text-primary font-mono text-sm">04</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Skills</h2>
            <div ref={lineRef} className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="skill-card p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-500 group"
              >
                <h3 className="text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/30">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
