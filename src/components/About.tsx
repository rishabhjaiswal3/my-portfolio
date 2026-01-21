import { useScrollReveal, useLineDraw } from '@/hooks/useGSAP';

const About = () => {
  const sectionRef = useScrollReveal();
  const lineRef = useLineDraw();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div ref={sectionRef} className="max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-primary font-mono text-sm">01</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">About</h2>
            <div ref={lineRef} className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="md:col-span-3 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm Rishabh, a software developer based in <span className="text-foreground">Bareilly, India</span>. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>

              <p className="leading-relaxed">
                My interest in web development started in 2020 when I decided to explore 
                how websites worked — building custom components and solving complex 
                problems taught me the foundations of <span className="text-foreground">modern web development</span>.
              </p>

              <p className="leading-relaxed">
                Fast-forward to today, I've had the privilege of working at companies like 
                <span className="text-primary"> Queppelin</span>, <span className="text-primary">Mogi IO</span>, 
                and <span className="text-primary">Surebright</span>. I specialize in building 
                scalable applications, blockchain solutions, and AI-powered tools.
              </p>

              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or solving algorithmic challenges.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    '4.5+ years of experience',
                    '10,000+ blockchain transactions',
                    '40% buffering reduction achieved',
                    'Expert in React, Node.js, Web3',
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">—</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Education</h3>
                <div className="text-muted-foreground">
                  <p className="text-foreground font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm mt-1">2018 — 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
