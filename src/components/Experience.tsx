import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { Building2, Calendar, MapPin, ChevronRight, Briefcase, Zap, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Self-employed',
    initial: 'F',
    accentColor: 'from-amber-400 to-orange-500',
    dotColor: 'bg-amber-400',
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
    period: 'June 2023 – Jan 2026',
    location: 'Gurgaon, India',
    type: 'Full-time',
    initial: 'SB',
    accentColor: 'from-blue-400 to-cyan-500',
    dotColor: 'bg-blue-400',
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
    initial: 'M',
    accentColor: 'from-purple-400 to-pink-500',
    dotColor: 'bg-purple-400',
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
    initial: 'Q',
    accentColor: 'from-orange-400 to-yellow-500',
    dotColor: 'bg-orange-400',
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
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] -z-10" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Header */}
          <div className="max-w-4xl mb-20 text-left mx-auto">
            <span className="eyebrow-chip mb-6">
              <Briefcase size={12} />
              Career Path
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8 font-black tracking-tighter">
              Professional{' '}
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              A progression through product engineering, performance infrastructure, Web3 systems, and client-facing architecture leadership.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Company tabs */}
            <div className="flex flex-wrap gap-3 mb-12 justify-start">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-5 md:px-7 py-3.5 rounded-2xl transition-all duration-500 border ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105'
                      : 'bg-card/50 text-muted-foreground border-border/30 hover:border-primary/30 hover:bg-card hover:text-foreground'
                  }`}
                >
                  {/* Styled company initial badge */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black text-white bg-gradient-to-br ${exp.accentColor} shadow-sm shrink-0`}
                  >
                    {exp.initial}
                  </div>
                  <span className="font-bold tracking-tight text-sm">
                    {exp.company === 'Freelance' ? 'Currently (Freelance)' : exp.company}
                  </span>
                  {index === 0 && (
                    <span className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-[9px] font-black uppercase tracking-widest text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active experience card */}
            <div className="relative rounded-[2.5rem] overflow-hidden">
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${activeExp.color} blur-2xl opacity-50`} />
              <div className="relative section-shell animated-border shine-sweep p-8 md:p-12 rounded-[2.5rem]">
                <div ref={contentRef}>

                  {/* Top: role info + meta */}
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 pb-10 border-b border-white/10">
                    <div className="flex items-start gap-5">
                      {/* Large company badge */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white bg-gradient-to-br ${activeExp.accentColor} shadow-xl shrink-0`}>
                        {activeExp.initial}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-1.5 tracking-tight">
                          {activeExp.role}
                        </h3>
                        <div className="flex items-center gap-2.5 text-primary font-bold">
                          <Building2 size={16} />
                          <span className="text-lg">{activeExp.company}</span>
                        </div>
                        <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-foreground/75">
                          <span>{activeExp.type}</span>
                          <span className="h-1 w-1 rounded-full bg-primary/60" />
                          <span>{activeExp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground font-medium">
                      <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5">
                        <Calendar size={16} className="text-primary shrink-0" />
                        <span className="text-sm">{activeExp.period}</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5">
                        <MapPin size={16} className="text-primary shrink-0" />
                        <span className="text-sm">{activeExp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body: responsibilities + tech */}
                  <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-6">
                        Responsibilities & Impact
                      </h4>
                      <ul className="space-y-4">
                        {activeExp.points.map((point, index) => (
                          <li key={index} className="flex gap-4 group">
                            <div className="mt-1.5 w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-all duration-300">
                              <ChevronRight size={13} className="text-primary group-hover:text-primary-foreground" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-6">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {activeExp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-xs font-bold bg-muted/60 text-foreground rounded-xl border border-border/50
                                     hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <Zap size={17} className="text-primary group-hover:text-primary-foreground" />
                          </div>
                          <span className="font-bold text-foreground text-sm">Mission Execution</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          Consistently delivering high-impact solutions with atomic precision and a focus on long-term scalability.
                        </p>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                        <p className="text-[10px] uppercase tracking-[0.32em] text-primary/70 mb-2">Career Lens</p>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-foreground font-semibold leading-snug">
                            Building systems that scale from launch to production traffic.
                          </p>
                          <ArrowUpRight size={16} className="text-primary shrink-0" />
                        </div>
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
