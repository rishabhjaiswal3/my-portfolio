import { useStaggerReveal } from '@/hooks/useGSAP';

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
    title: 'Blockchain & Web3',
    skills: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'Ethers.js', 'MetaMask'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'DigitalOcean', 'Nginx', 'CI/CD'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'FFmpeg', 'RabbitMQ', 'Keycloak', 'Stripe', 'OpenAI API'],
  },
];

const Skills = () => {
  const sectionRef = useStaggerReveal('.skill-card');

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom">
        <div ref={sectionRef}>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="skill-card p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tech-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '10K+', label: 'Transactions Processed' },
              { number: '40%', label: 'Buffering Reduced' },
              { number: '25%', label: 'Latency Improved' },
            ].map((stat) => (
              <div key={stat.label} className="text-center skill-card">
                <p className="text-4xl md:text-5xl font-bold text-gradient">{stat.number}</p>
                <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
