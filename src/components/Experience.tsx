import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useGSAP';

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
      'Ensured secure handling of merchant data following best practices for authentication and validation',
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
      'Integrated Stripe & Razorpay for seamless payment processing',
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

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where I've Worked</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 md:border-l-2 border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300
                    ${activeTab === index
                      ? 'text-primary bg-primary/10 md:border-l-2 md:-ml-[2px] border-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 min-h-[400px]">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {experiences[activeTab].role}{' '}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>

                <p className="text-muted-foreground font-mono text-sm">
                  {experiences[activeTab].period} | {experiences[activeTab].location}
                </p>

                <ul className="space-y-4 pt-4">
                  {experiences[activeTab].points.map((point, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
