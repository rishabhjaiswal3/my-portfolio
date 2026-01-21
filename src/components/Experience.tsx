import { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useLineDraw } from '@/hooks/useGSAP';
import gsap from 'gsap';

const experiences = [
  {
    company: 'Surebright',
    role: 'Software Development Engineer',
    period: 'June 2023 – Present',
    location: 'Gurgaon',
    points: [
      'Working extensively with eCommerce platforms including BigCommerce, Shopify, and WooCommerce',
      'Designed and implemented WooCommerce Webhooks for real-time data synchronization',
      'Developed robust backend services for high-volume webhook events with fault tolerance',
      'Ensured secure handling of merchant data following best practices for authentication',
    ],
  },
  {
    company: 'Mogi IO',
    role: 'Software Development Engineer',
    period: 'June 2023 – Present',
    location: 'New Delhi',
    points: [
      'Developed a video transcoding engine with FFmpeg for adaptive bitrate streaming, reducing buffering by 40%',
      'Built microservice-based comments system with Docker & Kubernetes for high scalability',
      'Integrated RabbitMQ for microservices communication, enhancing system scalability',
      'Implemented SSO authentication via Keycloak, reducing login time by 30%',
      'Developed Redis-based SDK, reducing query latency by 25%',
    ],
  },
  {
    company: 'Queppelin',
    role: 'Software Development Engineer',
    period: 'Nov 2021 – June 2023',
    location: 'Gurgaon',
    points: [
      'Developed payment solutions integrating Kaia Wallet and MetaMask, processing 10,000+ on-chain transactions',
      'Designed and deployed ERC-721 Smart Contracts using Solidity for NFT minting on OpenSea',
      'Implemented Gas-Optimized ERC-721A Contracts, reducing gas fees by ~20%',
      'Engineered advanced NFT marketplace features with buy, auction, and selling mechanics',
      'Led integration of LIFF SDK into DApps, enabling seamless Web3 mobile interactions',
    ],
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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef} className="max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-primary font-mono text-sm">02</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Experience</h2>
            <div ref={lineRef} className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:min-w-[180px]">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-5 py-3 text-left text-sm whitespace-nowrap transition-all duration-300 rounded-lg
                    ${activeTab === index
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                >
                  {exp.company}
                  {activeTab === index && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-full hidden md:block" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div ref={contentRef} className="flex-1 min-h-[350px]">
              <h3 className="text-xl text-foreground mb-1">
                {experiences[activeTab].role}
              </h3>
              <p className="text-primary mb-2">
                @ {experiences[activeTab].company}
              </p>
              <p className="text-muted-foreground font-mono text-sm mb-6">
                {experiences[activeTab].period} · {experiences[activeTab].location}
              </p>

              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
