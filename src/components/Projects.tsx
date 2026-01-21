import { ExternalLink, Github, Sparkles, Globe } from 'lucide-react';
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
    description:
      'A powerful AI-powered image generation tool using OpenAI API. Users can create stunning images from text descriptions with various artistic styles.',
    image: projectAIImageGen,
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
    featured: true,
    isAI: true,
  },
  {
    title: 'AI Chatbot with Claude',
    description:
      'An intelligent conversational AI chatbot powered by Anthropic Claude model. Features context-aware responses and code assistance.',
    image: projectAIChatbot,
    tags: ['React', 'Claude API', 'TypeScript', 'WebSocket'],
    featured: true,
    isAI: true,
  },
  {
    title: 'NFTKart Marketplace',
    description:
      'A decentralized NFT marketplace on Polygon chain. Features minting, trading, and auctions with MetaMask integration.',
    image: projectNFT,
    tags: ['Solidity', 'React', 'Web3.js', 'OpenSea'],
    featured: true,
  },
  {
    title: 'Video Transcoding Engine',
    description:
      'Cloud-based video processing system converting raw videos into multiple quality formats (360p–1080p). Uses FFmpeg and HLS protocol to automatically adjust quality based on viewer bandwidth—eliminating buffering by 40%.',
    image: projectTranscoding,
    tags: ['FFmpeg', 'HLS', 'Node.js', 'Docker', 'AWS S3'],
    featured: true,
  },
  {
    title: 'Kult Games',
    description:
      'Modern gaming platform with competitive esports features, tournament management, and community engagement.',
    image: projectKultGames,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    featured: false,
    isWeb: true,
  },
  {
    title: 'OTT Streaming Platform',
    description:
      'Full-stack video streaming platform with user subscriptions, role-based access, and adaptive bitrate switching.',
    image: projectOTT,
    tags: ['React', 'Node.js', 'Stripe', 'HLS'],
    featured: false,
  },
  {
    title: 'Vossle WebAR Platform',
    description:
      'AI-powered SaaS platform for creating web-based augmented reality experiences on any smartphone browser.',
    image: projectVossle,
    tags: ['React', 'Three.js', 'WebAR', 'LIFF SDK'],
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce handling 5,000+ concurrent users with Stripe & Razorpay payments.',
    image: projectEcommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: false,
  },
];

const FeaturedProject = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const tiltRef = useTilt(6);
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid md:grid-cols-12 gap-6 items-center ${isReversed ? 'md:text-right' : ''}`}
    >
      {/* Project Image */}
      <div className={`md:col-span-7 ${isReversed ? 'md:order-2' : ''}`}>
        <div ref={tiltRef} className="relative group" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
          <div className="relative overflow-hidden rounded-xl border border-border/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`md:col-span-5 ${isReversed ? 'md:order-1 md:text-left' : ''}`}>
        <div className="space-y-4">
          <div className={`flex items-center gap-3 ${isReversed ? 'md:justify-start' : ''}`}>
            <p className="text-primary font-mono text-xs uppercase tracking-widest">Featured</p>
            {project.isAI && (
              <span className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full text-xs text-primary">
                <Sparkles size={10} />
                AI
              </span>
            )}
            {project.isWeb && (
              <span className="flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-full text-xs text-accent">
                <Globe size={10} />
                Web
              </span>
            )}
          </div>
          
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            {project.title}
          </h3>
          
          <div className="p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30">
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>
          
          <div className={`flex flex-wrap gap-2 ${isReversed ? 'md:justify-start' : ''}`}>
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
          
          <div className={`flex gap-4 pt-2 ${isReversed ? 'md:justify-start' : ''}`}>
            <button className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg" aria-label="GitHub">
              <Github size={18} />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg" aria-label="Live">
              <ExternalLink size={18} />
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
          <div className="flex items-center gap-6 mb-20">
            <span className="text-primary font-mono text-sm">03</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Work</h2>
            <div ref={lineRef} className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-32">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div key={project.title} className="project-item">
                  <FeaturedProject project={project} index={index} />
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="mt-32">
            <h3 className="font-display text-2xl text-foreground text-center mb-12">Other Projects</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div 
                    key={project.title} 
                    className="project-item group p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 flex items-center justify-center text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                          <Github size={16} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
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
