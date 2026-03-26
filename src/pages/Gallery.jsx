import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Camera } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid';
import Button from '../components/Button';
import { Gallery3D } from '../components/Page3DAnimations';

// Diverse High Quality Unsplash Images for Portfolio
const galleryImages = [
  { id: 1, category: 'Corporate', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80', title: 'Boardroom Vision' },
  { id: 2, category: 'Weddings', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', title: 'Timeless Vows' },
  { id: 3, category: 'Weddings', src: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&q=80', title: 'Urban Elegance' },
  { id: 4, category: 'Events', src: 'https://images.unsplash.com/photo-1540039155732-6761b54cbaca?auto=format&fit=crop&q=80', title: 'Gala Night' },
  { id: 5, category: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80', title: 'Tech Conference' },
  { id: 6, category: 'Products', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80', title: 'Minimal Audio' },
  { id: 7, category: 'Products', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80', title: 'Watch Concept' },
  { id: 8, category: 'Portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80', title: 'Studio Session' },
  { id: 9, category: 'Portraits', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', title: 'Natural Light' },
  { id: 10, category: 'Architecture', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', title: 'Concert Lights' },
  { id: 11, category: 'Architecture', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', title: 'Corporate Facade' },
  { id: 12, category: 'Corporate', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80', title: 'Startup Culture' },
];

const categories = ['All', 'Corporate', 'Weddings', 'Events', 'Portraits', 'Products', 'Architecture'];

const specializedServices = [
  {
    title: "Corporate & Industrial Photography",
    description: "Convey your brand's true identity. We capture the essence of your workspaces, manufacturing processes, and boardroom dynamics to build trust with your stakeholders.",
    features: ["Executive Headshots", "Facility & Industrial Tours", "Annual Report Imagery"],
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80",
    reverse: false
  },
  {
    title: "Wedding & Pre-Wedding Shoots",
    description: "We don't just take pictures; we capture love stories. Our unobtrusive, cinematic wedding photography guarantees timeless memories you'll cherish forever.",
    features: ["Candid & Traditional", "Cinematic Pre-Wedding", "Exclusive Albums"],
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80",
    reverse: true
  },
  {
    title: "Product & Commercial",
    description: "Make your products unignorable. Whether for e-commerce, print, or massive billboard campaigns, we deliver pixel-perfect styling and lighting.",
    features: ["E-Commerce White-Background", "Creative Lifestyle Shoots", "Food & Apparel"],
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
    reverse: false
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="w-full bg-background relative selection:bg-gold selection:text-black min-h-screen overflow-x-hidden">
      <Gallery3D />

      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] md:h-[60vh] min-h-[400px] flex items-center justify-center border-b border-white/10">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1554046920-f19159040375?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Photography Services Hero"
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
            className="text-3xl md:text-5xl lg:text-[70px] font-sans font-bold text-white uppercase tracking-wider drop-shadow-2xl leading-tight mt-48"
          >
            Photography <span className="font-light text-gold text-edge-outline">Services</span> <br className="hidden md:block" /> In Mumbai
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
            className="text-lg md:text-xl text-textSecondary font-light tracking-wide max-w-2xl mx-auto drop-shadow-md"
          >
            Award-winning visuals capturing life, brands, and love in high-definition.
          </motion.p>
        </div>
      </section>

      {/* 2. SPECIALIZED SERVICES (Alternating Blocks) */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-light text-white uppercase tracking-[0.1em] mb-4">
            Our <span className="text-gold font-normal">Expertise</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="space-y-24 md:space-y-32">
          {specializedServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col gap-10 lg:gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 border border-gold/30 z-0 rounded-sm"></div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="relative z-10 w-full aspect-[4/3] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <Camera size={32} className="text-gold/50 mb-6" strokeWidth={1} />
                <h3 className="text-2xl md:text-4xl text-white font-light tracking-widest uppercase mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-textSecondary font-light leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/90 font-light tracking-wide text-[15px] md:text-base">
                      <CheckCircle2 size={18} className="text-gold mr-4 hidden md:block shrink-0" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-4 md:hidden shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant="outline" className="min-h-[44px] px-8 py-3 text-[14px]">
                  Enquire Now
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PORTFOLIO MASANRY GRID GALLERY */}
      <section className="py-20 md:py-32 bg-surface/30 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-6">
              Full <span className="text-gold font-normal">Portfolio</span>
            </h2>
            <p className="text-textSecondary text-lg font-light max-w-2xl mx-auto mb-10">Browse through our curated collection of successful shoots.</p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs md:text-[13px] uppercase tracking-[0.15em] px-5 py-2.5 rounded-full border transition-all duration-300 ${filter === cat
                    ? 'border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'border-white/10 text-textSecondary hover:border-white/30 hover:text-white bg-transparent'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <GalleryGrid images={filteredImages} onImageClick={setSelectedImage} />

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-surface/50 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gold/5 blur-[120px]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.1em] mb-6 drop-shadow-xl">
            Book Your Next <br className="md:hidden" /><span className="text-gold font-normal italic lowercase pr-1">Shoot</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary mb-10 tracking-wide font-light">
            We are currently accepting bookings for 2026-2027.
          </p>
          <Button to="/contact" variant="primary" className="min-h-[50px] px-12 text-[15px] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            Contact Studio
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-gold transition-colors z-[60] bg-black/50 md:bg-transparent rounded-full p-2 md:p-0"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl relative z-40"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white z-50 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-4 md:px-8 pointer-events-none"
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase drop-shadow-lg">{selectedImage.title}</h3>
              <p className="text-gold mt-3 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold drop-shadow-md">{selectedImage.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
