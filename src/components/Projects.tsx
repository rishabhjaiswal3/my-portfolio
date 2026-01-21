import { ExternalLink, Github, Sparkles, Globe } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useGSAP';

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
      'A powerful AI-powered image generation tool using OpenAI API. Users can create stunning images from text descriptions with various artistic styles and customization options.',
    image: projectAIImageGen,
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    featured: true,
    isAI: true,
  },
  {
    title: 'AI Chatbot with Claude',
    description:
      'An intelligent conversational AI chatbot powered by Anthropic Claude model. Features context-aware responses, code assistance, and natural language processing for seamless interactions.',
    image: projectAIChatbot,
    tags: ['React', 'Claude API', 'TypeScript', 'WebSocket'],
    featured: true,
    isAI: true,
  },
  {
    title: 'NFTKart Marketplace',
    description:
      'A decentralized NFT marketplace built on Polygon chain. Features NFT minting, buying, selling, and auctions with MetaMask integration and ERC-721A smart contracts for gas optimization.',
    image: projectNFT,
    tags: ['Solidity', 'React', 'Web3.js', 'OpenSea'],
    featured: true,
  },
  {
    title: 'Video Transcoding Engine',
    description:
      'A cloud-based video processing system that converts raw videos into multiple quality formats (360p, 480p, 720p, 1080p) for seamless streaming. Uses FFmpeg for encoding and HLS (HTTP Live Streaming) protocol to automatically adjust video quality based on viewer\'s internet speed—eliminating buffering by 40%.',
    image: projectTranscoding,
    tags: ['FFmpeg', 'HLS', 'Node.js', 'Docker', 'AWS S3'],
    featured: true,
  },
  {
    title: 'Kult Games',
    description:
      'A modern gaming platform website with competitive esports features, tournament management, and community engagement. Built with cutting-edge web technologies for optimal performance and user experience.',
    image: projectKultGames,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    isWeb: true,
  },
  {
    title: 'OTT Streaming Platform',
    description:
      'Full-stack video streaming platform with user subscriptions, role-based access, and adaptive bitrate switching. Integrated Stripe payments and real-time video streaming.',
    image: projectOTT,
    tags: ['React', 'Node.js', 'Stripe', 'HLS'],
    featured: false,
  },
  {
    title: 'Vossle WebAR Platform',
    description:
      'AI-powered cloud-based SaaS platform for creating web-based augmented reality experiences. Reach millions of users with App-less AR on any smartphone browser.',
    image: projectVossle,
    tags: ['React', 'Three.js', 'WebAR', 'LIFF SDK'],
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution handling 5,000+ concurrent users. Features secure payment processing with Stripe & Razorpay, real-time inventory, and webhook-based order tracking.',
    image: projectEcommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useStaggerReveal('.project-item');

  return (
    <section id="projects" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom">
        <div ref={sectionRef}>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Things I've Built</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className={`project-item grid md:grid-cols-12 gap-4 items-center ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`md:col-span-7 ${
                      index % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-primary rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`md:col-span-5 ${
                      index % 2 === 1 ? 'md:order-1 md:text-left' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <p className="text-primary font-mono text-sm">Featured Project</p>
                        {project.isAI && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                            <Sparkles size={12} />
                            AI Powered
                          </span>
                        )}
                        {project.isWeb && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-full text-xs text-accent-foreground">
                            <Globe size={12} />
                            Web Project
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-6 bg-gradient-card rounded-xl border border-border/50">
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-start' : ''}`}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={`flex gap-4 pt-2 ${index % 2 === 1 ? 'md:justify-start' : ''}`}>
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View on GitHub">
                          <Github size={20} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View Live">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">Other Notable Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div key={project.title} className="project-item project-card p-6 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 flex items-center justify-center text-primary">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                        </svg>
                      </div>
                      <div className="flex gap-4">
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View on GitHub">
                          <Github size={20} />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View Live">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
