import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Camera, Video, Star, Clock,
  Target, Sparkles, MonitorPlay, Film,
  MapPin, CheckCircle
} from 'lucide-react';
import Button from '../components/Button';
import PopupForm from '../components/PopupForm';
import InfiniteMarquee from '../components/InfiniteMarquee';

// The local videos are now served statically from the 'public/Videos' directory
const heroVideos = [
  "/Videos/1.mp4",
  "/Videos/2.mp4",
  "/Videos/3.mp4",
  "/Videos/4.mp4"
];

const workItems = [
  { type: 'video', title: 'Corporate Brand Film', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80', video: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-in-a-modern-office-1981-large.mp4' },
  { type: 'photo', title: 'Product Photography', src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80' },
  { type: 'photo', title: 'Event Coverage', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { type: 'video', title: 'Documentary', src: 'https://images.unsplash.com/photo-1623941453265-534960d3fcdd?auto=format&fit=crop&q=80', video: 'https://assets.mixkit.co/videos/preview/mixkit-dj-playing-live-at-a-festival-33827-large.mp4' },
  { type: 'photo', title: 'Portrait Session', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80' },
  { type: 'video', title: 'Commercial Ad', src: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80', video: 'https://assets.mixkit.co/videos/preview/mixkit-photographer-in-a-studio-taking-photos-of-a-model-34441-large.mp4' },
];

const whyChooseUs = [
  { icon: Camera, title: "Premium Setup", desc: "We use cinema-grade equipment to capture the highest fidelity images." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable scheduling and fast turnaround mapping out each timeline efficiently." },
  { icon: Target, title: "Detail Oriented", desc: "Obsessive focus on styling, lighting, and composition for flawless visuals." },
  { icon: Sparkles, title: "Creative Storytelling", desc: "Each project is woven into a compelling narrative that captivates audiences." },
];

const processSteps = [
  { icon: MapPin, title: "Discovery & Planning", desc: "Understanding your vision & goals" },
  { icon: Film, title: "Concept & Storyboarding", desc: "Storyboarding & planning logistics" },
  { icon: Camera, title: "Production", desc: "Shooting with top-tier gear" },
  { icon: MonitorPlay, title: "Editing", desc: "Color grading & sound design" },
  { icon: CheckCircle, title: "Delivery", desc: "Final revisions & handoff" },
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const heroRef = useRef(null);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);
  };

  return (
    <div className="w-full bg-background relative selection:bg-gold selection:text-black">
      <PopupForm />

      {/* 1. HERO SECTION (Video Background) */}
      <section ref={heroRef} className="relative h-[100dvh] md:h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="wait">
            {/* Universal Video Background */}
            <motion.video
              key={`video-${currentVideoIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover origin-center"
              src={heroVideos[currentVideoIndex]}
              autoPlay
              loop
              muted
              playsInline
            />
          </AnimatePresence>

          {/* Dotted Screen Mesh Overlay */}
          <div
            className="absolute inset-0 z-10 opacity-70"
            style={{
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.8) 1.5px, transparent 1.5px)',
              backgroundSize: '4px 4px'
            }}
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevVideo}
          className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/5 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white w-12 h-12 items-center justify-center rounded-full transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={nextVideo}
          className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/5 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white w-12 h-12 items-center justify-center rounded-full transition-all"
        >
          &#10095;
        </button>

        {/* Hero Content */}
        <div className="relative z-30 w-full max-w-7xl px-4 md:px-8 text-center pt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl mt-10 md:text-6xl lg:text-7xl font-sans font-bold text-white uppercase tracking-wider leading-tight mb-4 drop-shadow-2xl">
              Cinematic Photography &<br className="hidden md:block" /> Video Production
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-textSecondary mb-8 md:mb-12 font-medium tracking-wide max-w-2xl text-center drop-shadow-md"
          >
            Elevating your brand with premium visuals. We shoot videos and capture photos that tell a lasting story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-sm sm:max-w-none"
          >
            <Button to="/contact" variant="primary" className="w-full sm:w-auto min-h-[44px] text-[15px] px-8 py-3">
              Work With Us
            </Button>
            <Button to="/gallery" variant="outline" className="w-full sm:w-auto min-h-[44px] text-[15px] px-8 py-3 bg-black/20 backdrop-blur-sm">
              View Our Work
            </Button>
          </motion.div>
        </div>

      </section>

      {/* 2. OUR WORK SECTION */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-[0.2em] mb-4">
            Our Photography & Video Production Work
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Grid setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-surface/50 border border-white/5 cursor-pointer touch-manipulation"
              onMouseEnter={() => { if (window.innerWidth > 768 && item.type === 'video') setPlayingVideo(index) }}
              onMouseLeave={() => { if (window.innerWidth > 768) setPlayingVideo(null) }}
              onClick={() => {
                // Mobile tap to play interaction
                if (window.innerWidth <= 768 && item.type === 'video') {
                  setPlayingVideo(playingVideo === index ? null : index);
                }
              }}
            >
              {item.type === 'video' && playingVideo === index ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center pointer-events-none transform translate-y-2 md:translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                {item.type === 'video' ? (
                  <div className="mb-3 p-3 bg-gold/90 text-black rounded-full shadow-lg pointer-events-auto transition-transform hover:scale-110">
                    <Play size={18} className="ml-0.5" fill="currentColor" />
                  </div>
                ) : (
                  <div className="mb-3 p-3 bg-white/10 text-white rounded-full shadow-lg backdrop-blur-sm pointer-events-auto">
                    <Camera size={18} />
                  </div>
                )}
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/gallery" variant="outline" className="min-h-[44px] px-10 text-[14px]">
            View Full Portfolio
          </Button>
        </div>
      </section>

      {/* INFINITE MARQUEE TICKER */}
      <InfiniteMarquee />

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 md:py-32 bg-surface/50 border-y border-white/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute -left-[20%] top-[20%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto font-light">
              We bring technical precision and artistic vision to every project, ensuring your story is told powerfully.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 hover-group">
            {whyChooseUs.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background/80 border border-white/5 p-8 md:p-10 rounded-2xl hover:bg-white/[0.03] transition-colors duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-medium tracking-wide mb-4">
                  {feature.title}
                </h3>
                <p className="text-textSecondary leading-relaxed text-[15px] font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-[0.2em] mb-4">
            Our Photography & Video Production Process
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[31px] w-[1px] bg-gradient-to-b from-gold/50 via-white/10 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-10 md:gap-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex md:flex-col items-center md:text-center w-full md:w-[18%] group"
              >
                {/* Number / Icon circle */}
                <div className="relative z-10 shrink-0 mb-0 md:mb-6 mr-6 md:mr-0">
                  <div className="w-16 h-16 md:w-[88px] md:h-[88px] rounded-full bg-background border border-white/10 shadow-lg flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                    <step.icon size={28} className="text-white group-hover:text-gold transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-black rounded-full flex items-center justify-center text-xs font-bold leading-none shadow-md">
                    {i + 1}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 md:w-full">
                  <h3 className="text-[17px] md:text-lg text-white font-medium tracking-wider mb-2 uppercase text-left md:text-center leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-textSecondary font-light leading-relaxed text-left md:text-center max-w-[200px] md:max-w-none">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-surface/50 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-[0.1em] mb-6 drop-shadow-xl">
            Ready to tell your <span className="text-gold font-normal italic lowercase pr-2">story</span>?
          </h2>
          <p className="text-lg md:text-xl text-textSecondary mb-10 tracking-wide font-light">
            Let's collaborate to bring your ultimate vision to life.
          </p>
          <Button to="/contact" variant="primary" className="min-h-[50px] px-12 text-[15px] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            Start Your Project
          </Button>
        </div>
      </section>

    </div>
  );
}
