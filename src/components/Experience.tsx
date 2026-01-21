import { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useLineDraw } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { Building2, Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Surebright',
    role: 'Software Development Engineer',
    period: 'June 2023 – Present',
    location: 'Gurgaon',
    type: 'Full-time',
    logo: '🛡️',
    points: [
      'Working extensively with eCommerce platforms including BigCommerce, Shopify, and WooCommerce',
      'Designed and implemented WooCommerce Webhooks for real-time data synchronization',
      'Developed robust backend services for high-volume webhook events with fault tolerance',
      'Ensured secure handling of merchant data following best practices for authentication',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    company: 'Mogi IO',
    role: 'Software Development Engineer',
    period: 'June 2022 – June 2023',
    location: 'New Delhi',
    type: 'Full-time',
    logo: '🎬',
    points: [
      'Developed a video transcoding engine with FFmpeg for adaptive bitrate streaming, reducing buffering by 40%',
      'Built microservice-based comments system with Docker & Kubernetes for high scalability',
      'Integrated RabbitMQ for microservices communication, enhancing system scalability',
      'Implemented SSO authentication via Keycloak, reducing login time by 30%',
      'Developed Redis-based SDK, reducing query latency by 25%',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    company: 'Queppelin',
    role: 'Software Development Engineer',
    period: 'Nov 2021 – June 2022',
    location: 'Gurgaon',
    type: 'Full-time',
    logo: '⛓️',
    points: [
      'Developed payment solutions integrating Kaia Wallet and MetaMask, processing 10,000+ on-chain transactions',
      'Designed and deployed ERC-721 Smart Contracts using Solidity for NFT minting on OpenSea',
      'Implemented Gas-Optimized ERC-721A Contracts, reducing gas fees by ~20%',
      'Engineered advanced NFT marketplace features with buy, auction, and selling mechanics',
      'Led integration of LIFF SDK into DApps, enabling seamless Web3 mobile interactions',
    ],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useScrollReveal();
  const lineRef = useLineDraw();
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate content when tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  const activeExp = experiences[activeTab];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full">
              <Briefcase size={12} />
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Where I've Worked
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Building impactful solutions across eCommerce, streaming, and blockchain industries.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Company Tabs - Horizontal scrollable pills */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide justify-center">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap transition-all duration-300 border ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card/50 text-muted-foreground border-border/30 hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  <span className="text-lg">{exp.logo}</span>
                  <span className="font-medium">{exp.company}</span>
                </button>
              ))}
            </div>

            {/* Experience Card */}
            <div className={`relative p-8 rounded-2xl bg-card border border-border/30 overflow-hidden`}>
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeExp.color} opacity-30`} />
              
              <div ref={contentRef} className="relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display text-foreground mb-1">
                      {activeExp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Building2 size={16} />
                      <span>@ {activeExp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{activeExp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{activeExp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {activeExp.points.map((point, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <ChevronRight size={16} className="text-primary mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                  {activeTab === 0 && ['BigCommerce', 'Shopify', 'WooCommerce', 'Node.js', 'Webhooks'].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                  {activeTab === 1 && ['FFmpeg', 'Docker', 'Kubernetes', 'RabbitMQ', 'Redis', 'Keycloak'].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                  {activeTab === 2 && ['Solidity', 'Web3.js', 'MetaMask', 'ERC-721', 'OpenSea', 'LIFF SDK'].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline dots */}
            <div className="flex justify-center gap-2 mt-6">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === index ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
