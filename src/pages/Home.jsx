import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
const categories = [
  { title: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80' },
  { title: 'Portraits', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80' },
  { title: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { title: 'Travel', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80' }
];

const heroVideos = [
  "https://cdn.coverr.co/videos/coverr-people-in-a-meeting-2544/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-a-photographer-in-a-studio-5259/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-focusing-a-camera-2144/1080p.mp4"
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);
  };

  return (
    <div className="w-full">
      {/* New Video Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-end justify-start pb-24 px-6 md:px-12 lg:px-20 overflow-hidden -mt-20 border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="wait">
            <motion.video 
              key={currentVideoIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>

          {/* Dotted Screen Mesh Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.6) 1.5px, transparent 1.5px)',
              backgroundSize: '4px 4px'
            }}
          ></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevVideo}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
        >
          &#10094;
        </button>
        <button 
          onClick={nextVideo}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
        >
          &#10095;
        </button>

        <div className="relative z-30 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider leading-tight mb-2 drop-shadow-2xl font-sans">
              Photo & Video Production<br />Company in Mumbai
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium tracking-wide drop-shadow-md">
              Creating Premium Videos for Corporate Brands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative h-[80dvh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 w-full mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 uppercase tracking-[0.1em] leading-tight"
          >
            Creating Memories<br className="md:hidden" />
            <div className="flex items-center justify-center gap-2">
              <span className="text-gold font-normal">Kunal </span> Ravrani
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-textSecondary mb-12 font-light tracking-wide"
          >
            Evolving with every frame — from analog roots to digital vision. <br />
            A visual journey from classic film to cutting-edge storytelling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <Button to="/gallery" variant="outline" className="w-full sm:w-auto">View Gallery</Button>
            <Button to="/contact" variant="primary" className="w-full sm:w-auto">Work With Me</Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-widest mb-4">Our Expertise</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        {/* Large Scrolling Hollow Text Marquee */}
        <div className="marquee-container w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden mb-16 py-6 md:py-10 border-y border-white/5 bg-background shadow-lg cursor-pointer">
          <div
            className="flex items-center font-sans font-medium text-6xl md:text-8xl tracking-[0.15em] whitespace-nowrap animate-marquee"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.25)", color: "transparent" }}
          >
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                <span className="px-8 md:px-12">SHOOT</span>
                <span className="text-white/20 tracking-tighter" style={{ WebkitTextStroke: "0" }}>——</span>
                <span className="px-8 md:px-12">VIDEO</span>
                <span className="text-white/20 tracking-tighter" style={{ WebkitTextStroke: "0" }}>——</span>
                <span className="px-8 md:px-12">DRONE</span>
                <span className="text-white/20 tracking-tighter" style={{ WebkitTextStroke: "0" }}>——</span>
                <span className="px-8 md:px-12">JIB</span>
                <span className="text-white/20 tracking-tighter" style={{ WebkitTextStroke: "0" }}>——</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container overflow-hidden relative -mx-4 md:-mx-6 lg:mx-0 cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div className="flex gap-4 md:gap-6 w-max px-4 md:px-0 py-4 animate-marquee">
            {[...categories, ...categories].map((cat, index) => (
              <div
                key={index}
                className="group relative h-[350px] md:h-[450px] overflow-hidden cursor-pointer min-w-[85vw] sm:min-w-[45vw] lg:min-w-[280px] shrink-0 rounded-sm"
              >
                <img src={cat.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cat.title} />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-light uppercase tracking-[0.2em]">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
