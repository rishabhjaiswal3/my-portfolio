import { useState } from 'react';
import { Github, Sparkles, Globe, ArrowUpRight, Layers, Terminal, Code2, Cpu } from 'lucide-react';
import { useStaggerReveal, useTilt } from '@/hooks/useGSAP';

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
    description: 'Cloud-based video processing system converting raw videos into multiple quality formats (360p–1080p). Uses FFmpeg and HLS protocol to automatically adjust quality based on viewer bandwidth.',
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
  const tiltRef = useTilt(12);

  return (
    <div
      ref={tiltRef}
      className="relative h-[580px] perspective-[2000px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] preserve-3d ${isFlipped ? 'rotate-y-180' : ''
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-card"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 group-hover:rotate-1"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10 translate-z-20 text-left">
            <div className="flex items-center gap-3 mb-6 font-display">
              <div className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                {project.isAI ? 'Neural Architecture' : 'Distributed System'}
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <h3 className="text-4xl md:text-5xl font-display text-white font-black mb-6 tracking-tight leading-[1.1]">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>

            <div className="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="px-4 py-2 text-[10px] font-mono font-bold bg-white/5 backdrop-blur-md text-white/70 rounded-xl border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-[3rem] overflow-hidden border-2 border-primary/30 bg-card p-10 md:p-12 flex flex-col rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
            <div className="grid-bg h-full w-full" />
          </div>

          <div className="relative z-10 flex flex-col h-full text-left">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Code2 size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-display text-foreground font-black tracking-tight leading-none">{project.title}</h3>
              </div>
              <a
                href="https://github.com/rishabhjaiswal3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-500 border border-border"
              >
                <Github size={20} />
              </a>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed flex-1 mb-8 overflow-y-auto pr-2 custom-scrollbar">
              {project.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">Core Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 text-[10px] font-mono font-bold bg-muted text-foreground/80 rounded-xl border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://github.com/rishabhjaiswal3"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-xl shadow-primary/20
                               flex items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-500 font-display"
              >
                View Codebase
                <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useStaggerReveal('.project-item');

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
            <div className="max-w-3xl text-left font-display">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 rounded-full border border-primary/20">
                <Cpu size={14} className="animate-pulse" />
                Featured Deployments
              </span>
              <h2 className="text-7xl md:text-9xl text-foreground mb-10 leading-[0.85] font-black tracking-tighter">
                Crafting <br />
                <span className="text-gradient italic">Digital</span> <br />
                Experiences
              </h2>
            </div>
            <div className="max-w-sm pb-4 text-left">
              <p className="text-muted-foreground text-xl font-light leading-relaxed border-l-2 border-primary/30 pl-8">
                A selection of high-impact engineering projects, where design meets extreme technical complexity.
              </p>
            </div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-40">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div key={project.title} className="project-item">
                  <FlipCard project={project} index={index} />
                </div>
              ))}
          </div>

          {/* Other Projects Section */}
          <div className="pt-32 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-20 text-left font-display">
              <div>
                <h3 className="text-5xl md:text-6xl text-foreground font-black tracking-tight mb-4">Other Projects</h3>
                <p className="text-muted-foreground text-xl font-light italic opacity-60">Experimentation and smaller builds</p>
              </div>
              <a
                href="https://github.com/rishabhjaiswal3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-primary font-black text-lg hover:mr-2 transition-all"
              >
                Archive <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Columnar List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.title}
                    className="project-item group relative p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-2xl border border-border/50 
                             hover:border-primary/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex items-center justify-between mb-12">
                      <div className="w-16 h-16 rounded-[1.25rem] bg-muted/50 text-primary border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 flex items-center justify-center shadow-xl">
                        <Terminal size={28} />
                      </div>
                      <a
                        href="https://github.com/rishabhjaiswal3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted/50 text-foreground/40 hover:text-primary transition-all duration-500 border border-border/50 hover:border-primary/30"
                      >
                        <Github size={20} />
                      </a>
                    </div>

                    <h4 className="text-2xl font-display text-foreground font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-base leading-relaxed mb-12 font-light line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-3 py-1.5 rounded-xl border border-primary/20">
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
