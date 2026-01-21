import { useScrollReveal } from '@/hooks/useGSAP';

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm Rishabh, a software developer based in <span className="text-primary">Bareilly, India</span>. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>

              <p className="text-lg leading-relaxed">
                My interest in web development started back in 2020 when I decided to explore 
                how websites worked — turns out building custom components and solving complex 
                problems taught me a lot about <span className="text-primary">HTML, CSS, and JavaScript</span>!
              </p>

              <p className="text-lg leading-relaxed">
                Fast-forward to today, I've had the privilege of working at companies like 
                <span className="text-primary"> Queppelin</span>, <span className="text-primary">Mogi IO</span>, 
                and <span className="text-primary">Surebright</span>. I specialize in building 
                scalable applications, blockchain solutions, and AI-powered tools.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or solving algorithmic challenges on LeetCode.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4">
              <div className="p-6 bg-gradient-card rounded-xl border border-border/50">
                <h3 className="text-primary font-mono text-sm mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>3+ years of experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>10,000+ transactions processed on blockchain</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>40% reduction in buffering with transcoding engine</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>Expert in React, Node.js, and Web3</span>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className="p-6 bg-gradient-card rounded-xl border border-border/50">
                <h3 className="text-primary font-mono text-sm mb-4">Education</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">B.Tech in Computer Science</p>
                  <p className="text-sm">2018 - 2022</p>
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
