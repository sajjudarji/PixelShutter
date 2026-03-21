import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Play } from 'lucide-react';

const videoProjects = [
  {
    id: 1,
    title: "Corporate Excellence",
    category: "Brand Film",
    embedUrl: "https://player.vimeo.com/video/494252666?title=0&byline=0&portrait=0", 
  },
  {
    id: 2,
    title: "The Elegant Knot",
    category: "Wedding Cinematic",
    embedUrl: "https://player.vimeo.com/video/336812686?title=0&byline=0&portrait=0",
  },
  {
    id: 3,
    title: "Automotive Motion",
    category: "Commercial Ad",
    embedUrl: "https://player.vimeo.com/video/116964893?title=0&byline=0&portrait=0",
  },
  {
    id: 4,
    title: "Symphony of Lights",
    category: "Event Coverage",
    embedUrl: "https://player.vimeo.com/video/293964956?title=0&byline=0&portrait=0",
  },
  {
    id: 5,
    title: "Desert Aesthetics",
    category: "Fashion Editorial",
    embedUrl: "https://player.vimeo.com/video/285497298?title=0&byline=0&portrait=0",
  },
  {
    id: 6,
    title: "The Art of Plating",
    category: "Food Documentary",
    embedUrl: "https://player.vimeo.com/video/140081640?title=0&byline=0&portrait=0",
  }
];

export default function WorkVideo() {
  return (
    <div className="w-full bg-background relative selection:bg-gold selection:text-black min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[35vh] md:h-[45vh] min-h-[350px] flex items-center justify-center border-b border-white/10">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover grayscale-[30%]"
            alt="Work Video Hero"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div 
            className="absolute inset-0 z-10 opacity-30"
            style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.8) 1.5px, transparent 1.5px)', backgroundSize: '4px 4px' }}
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl px-4 md:px-8 text-center pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-[70px] font-sans font-bold text-white uppercase tracking-wider drop-shadow-2xl leading-tight"
          >
            Video <span className="font-light text-gold text-edge-outline">Portfolio</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[2px] bg-gold mx-auto mt-6 md:mt-8 mb-6 md:mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-textSecondary font-light tracking-widest uppercase max-w-2xl mx-auto drop-shadow-md"
          >
            A Selection of Our Best Cinematic Works
          </motion.p>
        </div>
      </section>

      {/* 2. VIDEO GRID GALLERY */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {videoProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.2 }}
              className="group relative"
            >
              <div className="relative w-full aspect-video bg-black/50 border border-white/5 shadow-2xl overflow-hidden rounded-sm hover:border-gold/30 transition-colors duration-500">
                <iframe
                  src={project.embedUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl text-white font-light uppercase tracking-widest mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-textSecondary text-sm uppercase tracking-[0.2em] font-medium">
                    <Play size={12} className="mr-2 text-gold" fill="currentColor"/>
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 md:mt-24 text-center">
          <Button to="/contact" variant="outline" className="min-h-[44px] px-10 text-[14px]">
            Discuss Your Video Project
          </Button>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-20 bg-surface/30 border-t border-white/5 relative text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-6">
            Looking for <span className="text-gold">Photography</span>?
          </h2>
          <Button to="/gallery" variant="outline" className="min-h-[44px] px-10 text-[14px]">
            View Photo Gallery
          </Button>
        </div>
      </section>

    </div>
  );
}
