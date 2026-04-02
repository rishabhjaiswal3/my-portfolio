import { Github, ArrowUpRight, Cpu } from 'lucide-react';
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
    title: 'VideoManch.com',
    description: 'Streaming-first video platform concept with home feed, shorts, live sessions, show discovery, and category-led browsing for OTT and creator-style experiences.',
    image: projectOTT,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    featured: false,
    category: 'Streaming UI',
    impact: 'OTT-style discovery flows',
  },
  {
    title: 'OTT Streaming Platform',
    description: 'Full-stack video streaming platform with user subscriptions, role-based access, and adaptive bitrate switching.',
    image: projectOTT,
    tags: ['React', 'Node.js', 'Stripe', 'HLS'],
    featured: false,
    category: 'OTT Platform',
    impact: 'Subscriptions + playback',
  },
  {
    title: 'Vossle WebAR Platform',
    description: 'AI-powered SaaS platform for creating web-based augmented reality experiences on any smartphone browser.',
    image: projectVossle,
    tags: ['React', 'Three.js', 'WebAR', 'LIFF SDK'],
    featured: false,
    category: 'Immersive SaaS',
    impact: 'Mobile WebAR tooling',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce handling 5,000+ concurrent users with Stripe & Razorpay payments.',
    image: projectEcommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: false,
    category: 'Commerce',
    impact: 'High-concurrency storefront',
  },
  {
    title: 'Kult Games & Browser',
    description: 'AI-native on-chain gaming ecosystem spanning catalog discovery, wallet-aware gameplay, and public game surfaces for Guess The AI, Zero G Pool, Zero Dash, Robo Wars, and Highway Hustle.',
    image: projectKultGames,
    tags: ['React', 'TypeScript', 'Rust', 'FastAPI'],
    featured: false,
    category: 'Gaming Ecosystem',
    impact: 'Catalog + platform services',
  },
  {
    title: 'GUESS_THE_AI',
    description: 'A competitive AI-vs-human recognition game with wallet-based auth, streaks, leaderboards, daily challenges, and real-time progression across web and mobile-friendly gameplay.',
    image: projectAIImageGen,
    tags: ['React', 'Node.js', 'Socket.IO', 'Privy'],
    featured: false,
    category: 'Competitive Game',
    impact: 'Realtime leaderboard loops',
  },
  {
    title: 'Warzone',
    description: 'Web3 gaming experience with wallet-linked player profiles, tournament metadata sync, multiplayer-ready frontend flows, and backend services for progression and competition handling.',
    image: projectAIChatbot,
    tags: ['React', 'Express', 'MongoDB', 'Ethers.js'],
    featured: false,
    category: 'Web3 Gaming',
    impact: 'Tournament + wallet sync',
  },
  {
    title: 'AI Image Generator',
    description: 'A powerful AI-powered image generation tool using OpenAI API. Users can create stunning images from text descriptions with various artistic styles.',
    image: projectAIImageGen,
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind'],
    featured: true,
    category: 'AI Product',
    impact: 'Text-to-image workflow',
  },
  {
    title: 'AI Chatbot with Claude',
    description: 'An intelligent conversational AI chatbot powered by Anthropic Claude model. Features context-aware responses and code assistance.',
    image: projectAIChatbot,
    tags: ['React', 'Claude API', 'TypeScript', 'WebSocket'],
    featured: true,
    category: 'LLM Interface',
    impact: 'Context-aware assistant',
  },
  {
    title: 'NFTKart Marketplace',
    description: 'A decentralized NFT marketplace on Polygon chain. Features minting, trading, and auctions with MetaMask integration.',
    image: projectNFT,
    tags: ['Solidity', 'React', 'Web3.js', 'OpenSea'],
    featured: true,
    category: 'Blockchain Commerce',
    impact: 'Polygon marketplace',
  },
  {
    title: 'Video Transcoding Engine',
    description: 'Cloud-based video processing system converting raw videos into multiple quality formats (360p–1080p). Uses FFmpeg and HLS protocol to automatically adjust quality based on viewer bandwidth.',
    image: projectTranscoding,
    tags: ['FFmpeg', 'HLS', 'Node.js', 'Docker', 'AWS S3'],
    featured: true,
    category: 'Media Infrastructure',
    impact: 'Adaptive streaming engine',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  const tiltRef = useTilt(6);

  return (
    <article
      ref={tiltRef}
      className="project-item group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-gradient-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/8"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-primary/[0.04] pointer-events-none" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/6 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />

        {/* Category pill */}
        <div className="absolute left-4 top-4 px-3 py-1.5 rounded-full border border-white/10 bg-background/60 backdrop-blur-lg text-[10px] font-black uppercase tracking-[0.28em] text-white">
          {project.category}
        </div>

        {/* Impact tag bottom-left on image */}
        <div className="absolute bottom-3 left-4">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/80">{project.impact}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="relative z-10 p-6 text-left">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-display font-black tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug flex-1">
            {project.title}
          </h3>
          <a
            href="https://github.com/rishabhjaiswal3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center h-9 w-9 rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-400 hover:border-primary/35 hover:text-primary hover:bg-primary/5"
          >
            <Github size={15} />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg border border-primary/12 bg-primary/[0.05] font-mono font-bold uppercase tracking-[0.15em] text-primary/75 text-[9px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <a
          href="https://github.com/rishabhjaiswal3"
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 font-black uppercase tracking-[0.2em] text-xs text-foreground/65 transition-colors hover:text-primary"
        >
          View Build
          <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const sectionRef = useStaggerReveal('.project-item');

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute left-[10%] top-24 h-48 w-48 rounded-full border border-white/10 orbital-ring opacity-60" />
      <div className="absolute right-[8%] top-1/3 h-56 w-56 rounded-full border border-primary/10 float-gentle opacity-50" />

      <div className="container-custom relative z-10">
        <div ref={sectionRef}>
          {/* Section header */}
          <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl text-left font-display">
              <span className="eyebrow-chip mb-8">
                <Cpu size={14} className="animate-pulse" />
                Selected Work
              </span>
              <h2 className="text-6xl md:text-8xl text-foreground mb-6 leading-[0.88] font-black tracking-tighter">
                Projects That{' '}
                <span className="text-gradient italic">Ship With Intent</span>
              </h2>
              <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                A curated selection of product interfaces, AI-native experiences, gaming systems, streaming builds, and backend-heavy engineering work.
              </p>
            </div>

            <div className="section-shell shrink-0 max-w-xs px-6 py-5 text-left">
              <p className="mb-2 text-[10px] uppercase tracking-[0.38em] text-primary/80">Portfolio</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {projects.length} projects across AI, Web3, gaming, streaming, and commerce.
              </p>
            </div>
          </div>

          {/* Unified project grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
