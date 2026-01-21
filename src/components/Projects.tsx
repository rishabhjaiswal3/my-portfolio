import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Globe, ArrowUpRight, Layers } from 'lucide-react';
import { useStaggerReveal, useLineDraw, useTilt } from '@/hooks/useGSAP';

import projectAIImageGen from '@/assets/project-ai-image-gen.jpg';
import projectAIChatbot from '@/assets/project-ai-chatbot.jpg';
import projectNFT from '@/assets/project-nft-marketplace.jpg';
import projectOTT from '@/assets/project-ott-platform.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectTranscoding from '@/assets/project-transcoding.jpg';
import projectVossle from '@/assets/project-vossle.jpg';
import projectKultGames from '@/assets/project-kult-games.jpg';

const projects = [
  {
    title: 'AI Image Generator',
    description: 'A powerful AI-powered image generation tool using OpenAI API. Users can create stunning images from text descriptions with various artistic styles.',
    image: projectAIImageGen,
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
    featured: true,
    isAI: true,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'AI Chatbot with Claude',
    description: 'An intelligent conversational AI chatbot powered by Anthropic Claude model. Features context-aware responses and code assistance.',
    image: projectAIChatbot,
    tags: ['React', 'Claude API', 'TypeScript', 'WebSocket'],
    featured: true,
    isAI: true,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'NFTKart Marketplace',
    description: 'A decentralized NFT marketplace on Polygon chain. Features minting, trading, and auctions with MetaMask integration.',
    image: projectNFT,
    tags: ['Solidity', 'React', 'Web3.js', 'OpenSea'],
    featured: true,
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Video Transcoding Engine',
    description: 'Cloud-based video processing system converting raw videos into multiple quality formats (360p–1080p). Uses FFmpeg and HLS protocol to automatically adjust quality based on viewer bandwidth—eliminating buffering by 40%.',
    image: projectTranscoding,
    tags: ['FFmpeg', 'HLS', 'Node.js', 'Docker', 'AWS S3'],
    featured: true,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Kult Games',
    description: 'Modern gaming platform with competitive esports features, tournament management, and community engagement.',
    image: projectKultGames,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    featured: false,
    isWeb: true,
  },
  {
    title: 'OTT Streaming Platform',
    description: 'Full-stack video streaming platform with user subscriptions, role-based access, and adaptive bitrate switching.',
    image: projectOTT,
    tags: ['React', 'Node.js', 'Stripe', 'HLS'],
    featured: false,
  },
  {
    title: 'Vossle WebAR Platform',
    description: 'AI-powered SaaS platform for creating web-based augmented reality experiences on any smartphone browser.',
    image: projectVossle,
    tags: ['React', 'Three.js', 'WebAR', 'LIFF SDK'],
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce handling 5,000+ concurrent users with Stripe & Razorpay payments.',
    image: projectEcommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: false,
  },
];

const FlipCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[420px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border/30"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-3">
              {project.isAI && (
                <span className="flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                  <Sparkles size={10} />
                  AI
                </span>
              )}
              {project.isWeb && (
                <span className="flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-full text-xs text-accent">
                  <Globe size={10} />
                  Web
                </span>
              )}
            </div>
            <h3 className="text-xl font-display text-foreground mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-muted/50 text-muted-foreground rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Flip indicator */}
          <div className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border/30 
                        opacity-0 group-hover:opacity-100 transition-opacity">
            <Layers size={16} className="text-primary" />
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/30 bg-card p-6 flex flex-col rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color || 'from-primary/10 to-accent/10'} opacity-50`} />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-display text-foreground">{project.title}</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Github size={16} />
                </button>
                <button className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium 
                           flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              View Project
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useStaggerReveal('.project-item');
  const lineRef = useLineDraw();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full">
              Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A collection of projects I've worked on — from AI tools to blockchain solutions.
              Hover over cards to see more details.
            </p>
          </div>

          {/* Featured Projects - Flip Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div key={project.title} className="project-item">
                  <FlipCard project={project} index={index} />
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-display text-foreground text-center mb-8">Other Projects</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div 
                    key={project.title} 
                    className="project-item group p-5 rounded-xl bg-card/50 border border-border/30 
                             hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                          <Github size={16} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs font-mono text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
