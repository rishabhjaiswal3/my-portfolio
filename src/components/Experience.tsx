import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { Building2, Calendar, MapPin, ChevronRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Self-employed',
    logo: '🚀',
    points: [
      'Architecting bespoke digital solutions for global clients using MERN stack & Next.js',
      'Implementing high-performance blockchain integrations and smart contracts',
      'Consulting on cloud architecture, security, and performance optimization',
      'Delivering end-to-end products from conceptualization to deployment',
    ],
    tags: ['React', 'Node.js', 'Solidity', 'AWS', 'Next.js'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    company: 'Surebright',
    role: 'Software Development Engineer',
    period: 'June 2023 – 15 Jan 2026',
    location: 'Gurgaon, India',
    type: 'Full-time',
    logo: '🛡️',
    points: [
      'Architected real-time synchronization systems for Shopify & BigCommerce',
      'Designed high-throughput webhook processing infrastructure',
      'Engineered secure merchant data handling & auth protocols',
      'Optimized performance for global eCommerce integrations',
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redux', 'AWS'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    company: 'Mogi IO',
    role: 'Software Development Engineer',
    period: '2022 – 2023',
    location: 'New Delhi, India',
    type: 'Full-time',
    logo: '🎬',
    points: [
      'Developed low-latency adaptive bitrate streaming engine',
      'Reduced buffering by 40% using FFmpeg optimizations',
      'Designed microservice architecture with K8s & Docker',
      'Implemented Redis SDK reducing query latency by 25%',
    ],
    tags: ['Node.js', 'FFmpeg', 'Redis', 'Docker', 'Kubernetes'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    company: 'Queppelin',
    role: 'Software Development Engineer',
    period: '2021 – 2022',
    location: 'Gurgaon, India',
    type: 'Full-time',
    logo: '⛓️',
    points: [
      'Processed 10,000+ on-chain blockchain transactions',
      'Deployed gas-optimized ERC-721A Smart Contracts',
      'Developed advanced NFT marketplace mechanics',
      'Integrated DApps with mobile via Kaia & LIFF SDK',
    ],
    tags: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'The Graph'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useScrollReveal();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power4.out' }
      );
    }
  }, [activeTab]);

  const activeExp = experiences[activeTab];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] -z-10" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/10">
              <Briefcase size={12} />
              Career Path
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">Professional <span className="text-gradient font-bold">Experience</span></h2>
            <p className="text-muted-foreground text-lg">My journey through engineering leadership and high-scale technical systems.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 md:px-8 py-4 rounded-2xl transition-all duration-500 border ${activeTab === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105'
                    : 'bg-card/40 text-muted-foreground border-border/30 hover:border-primary/30 hover:bg-card hover:text-foreground'
                    }`}
                >
                  <span className="text-xl">{exp.logo}</span>
                  <span className="font-bold tracking-tight">{exp.company === 'Freelance' ? 'Currently (Freelance)' : exp.company}</span>
                </button>
              ))}
            </div>

            {/* Experience Detail Card */}
            <div className="relative p-1 md:p-1.5 rounded-[2.5rem] bg-gradient-to-br from-border/50 via-primary/20 to-border/50 shadow-2xl overflow-hidden">
              <div className="relative p-8 md:p-12 rounded-[2rem] bg-card/90 backdrop-blur-xl h-full border border-white/5">
                <div ref={contentRef}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-white/10">
                    <div>
                      <h3 className="text-4xl font-display text-foreground mb-2">{activeExp.role}</h3>
                      <div className="flex items-center gap-3 text-primary text-lg font-bold">
                        <Building2 size={20} />
                        <span>{activeExp.company}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-muted-foreground font-medium">
                      <div className="flex items-center gap-2 justify-end">
                        <Calendar size={18} className="text-primary" />
                        <span>{activeExp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <MapPin size={18} className="text-primary" />
                        <span>{activeExp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Responsibilities & Impact</h4>
                      <ul className="space-y-5">
                        {activeExp.points.map((point, index) => (
                          <li key={index} className="flex gap-4 group">
                            <div className="mt-1.5 w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-all duration-300">
                              <ChevronRight size={14} className="text-primary group-hover:text-primary-foreground" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {activeExp.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-xs font-bold bg-muted/60 text-foreground rounded-xl border border-border/50 
                                     hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <Zap size={20} className="text-primary group-hover:text-primary-foreground" />
                          </div>
                          <span className="font-bold text-foreground">Mission Execution</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          Consistently delivering high-impact solutions with atomic precision and a focus on long-term scalability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
