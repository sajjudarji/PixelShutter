import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';

const categories = [
  { title: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80' },
  { title: 'Portraits', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80' },
  { title: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { title: 'Travel', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80' }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center -mt-20">
        <div className="absolute inset-0">
          <img 
            src="/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 uppercase tracking-[0.1em] leading-tight"
          >
            Captured by <br className="md:hidden" /><span className="text-gold font-normal">Kunal </span> Ravrani
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-textSecondary mb-12 font-light tracking-wide"
          >
           Documenting life through evolving lenses — from film beginnings to digital mastery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <Button to="/gallery" variant="outline" className="w-full sm:w-auto">View Gallery</Button>
            <Button to="/clients" variant="primary" className="w-full sm:w-auto">Work With Me</Button>
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
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-widest mb-4">My Expertise</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[350px] md:h-[450px] overflow-hidden cursor-pointer"
            >
              <img src={cat.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cat.title} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light uppercase tracking-[0.2em]">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-widest mb-4">Client Stories</h2>
              <div className="w-12 h-[1px] bg-gold"></div>
            </div>
            <Link to="/clients" className="text-gold uppercase tracking-widest text-xs flex items-center mt-6 md:mt-0 hover:text-white transition-colors group">
              Read All Stories <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              text="The most incredible photography experience we could have wished for. Every emotion was captured perfectly and beautifully."
              author="Emma & James"
              role="Wedding Couple"
            />
            <TestimonialCard 
              text="Professional, visionary, and an absolute joy to work with. The portraits exceeded all our expectations."
              author="Sarah Jenkins"
              role="Creative Director"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
