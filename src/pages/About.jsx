import { motion } from 'framer-motion';
import { Target, Eye, Camera, Film, Users, Award } from 'lucide-react';
import { About3D } from '../components/Page3DAnimations';

const stats = [
  { label: "Years of Legacy", value: "45+" },
  { label: "Premium Projects", value: "1000+" },
  { label: "Trusted Brands", value: "50+" },
  { label: "Creative Visions", value: "100%" },
];

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To capture unscripted moments and translate them into timeless visuals that feel honest and deeply personal. We aim to document life in its rawest form through precise vision and cinematic fidelity."
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the leading creative production agency synonymous with emotional storytelling, building bridges through lenses, and evolving constantly from classic film to cutting-edge digital formats."
  }
];

const journey = [
  {
    year: '1979',
    title: 'The Beginning',
    desc: 'My father began his journey in photography, laying the foundation for our visual legacy.'
  },
  {
    year: '1997',
    title: 'Joining the Legacy',
    desc: 'I joined my father’s business, introducing new perspectives while continuing and evolving the craft.'
  },
  {
    year: '2001',
    title: 'Digital Transition',
    desc: 'We fully embraced digital photography, adapting to a new era of visual storytelling without losing the analog soul.'
  },
  {
    year: '2026',
    title: 'Our Clients Today',
    desc: 'Trusted by Jamnalal Bajaj Foundation, IMC Ladies Wing, K Raheja Group, and the Indian Pharma Association — built on passion and trust.'
  }
];

export default function About() {
  return (
    <div className="w-full bg-background relative selection:bg-gold selection:text-black overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] md:h-[65vh] min-h-[400px] flex items-center justify-center border-b border-white/10">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="About Us Hero Photography"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent" />
          {/* Subtle noise mesh */}
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
            className="text-4xl md:text-6xl lg:text-[80px] font-sans font-bold text-white uppercase tracking-wider drop-shadow-2xl"
          >
            About <span className="font-light text-gold text-edge-outline">Studio</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[2px] bg-gold mx-auto mt-6 mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-textSecondary font-light tracking-widest uppercase max-w-2xl mx-auto drop-shadow-md"
          >
            Crafting Cinematic Narratives Since 1979
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE (The Artist) */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <About3D />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6 border border-gold/30 z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 rounded-sm"></div>
            <img
              src="/images/about_profile.jpg"
              alt="Photographer Profile"
              className="relative z-10 w-full h-[450px] md:h-[650px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 md:w-48 h-32 md:h-48 bg-gold/10 border border-gold backdrop-blur-md z-20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5"
          >
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.1em] leading-tight mb-6">
              The Artist <br className="hidden md:block"/>
              <span className="text-gold font-normal">Behind the Lens</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-10"></div>
            
            <div className="space-y-6 text-textSecondary font-light leading-relaxed text-[17px] md:text-lg">
              <p>
                Photography, to me, is not just about light — it’s about feeling. The quiet, unscripted moments. The emotions that exist for a second and live forever through a frame.
              </p>
              <p>
                My journey began over two decades ago, shaped by observing life in its rawest form — learning how light, shadow, and human connection come together to tell stories without words.
              </p>
              <p>
                Today, I approach every event with the same intention: to create images that feel honest, timeless, and deeply personal.
              </p>
              <p className="pl-4 border-l-2 border-gold/50 italic text-white/80">
                "Unobtrusive in presence, precise in vision — I document, not direct. Let’s create something that lasts beyond the moment."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. IMPACT STATS */}
      <section className="py-16 md:py-24 bg-surface/40 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center border-none"
              >
                <h3 className="text-4xl md:text-6xl font-sans font-bold text-white mb-2 drop-shadow-lg tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base text-gold uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {missionVision.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-surface border border-white/5 p-10 md:p-16 rounded-2xl hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-gold/10 transition-colors duration-500" />
              
              <item.icon size={48} className="text-gold mb-8 stroke-[1px] group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-6">
                {item.title}
              </h3>
              <p className="text-textSecondary font-light leading-relaxed text-[15px] md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. THE JOURNEY (Timeline) */}
      <section className="py-20 md:py-32 bg-background relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.1em] mb-4">
              Our <span className="text-gold font-normal">Journey</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="space-y-12 md:space-y-16 border-l border-gold/30 pl-8 md:pl-12 relative">
            <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-gold via-gold/50 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[42px] md:-left-[60px] top-1.5 md:top-2 w-5 h-5 md:w-6 md:h-6 bg-surface border-2 border-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:bg-gold transition-colors duration-300"></div>
                
                <h3 className="text-gold font-medium mb-2 md:mb-3 tracking-[0.2em] text-xl md:text-2xl drop-shadow-md">
                  {item.year}
                </h3>
                <h4 className="text-white text-xl md:text-2xl font-light uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-textSecondary font-light leading-relaxed text-[15px] md:text-lg max-w-2xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUOTE SECTION */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-surface/50 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gold/5 blur-[120px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <Camera size={40} className="mx-auto text-gold mb-8 opacity-50" strokeWidth={1}/>
          <p className="text-2xl md:text-4xl text-white font-light italic leading-snug tracking-wide text-center">
            "What I like about photographs is that they capture a moment that’s gone forever."
          </p>
          <div className="mt-8">
            <span className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-medium">
              — Karl Lagerfeld
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
