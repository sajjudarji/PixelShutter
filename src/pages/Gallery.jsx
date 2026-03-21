import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid';

const galleryImages = [
  { id: 1, category: 'Corporate', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', title: 'Timeless Vows' },
  { id: 2, category: 'Weddings', src: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&q=80', title: 'Urban Elegance' },
  { id: 4, category: 'Event', src: 'https://images.unsplash.com/photo-1540039155732-6761b54cbaca?auto=format&fit=crop&q=80', title: 'Gala Night' },
  { id: 5, category: 'Celebrities', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', title: 'The First Dance' },
  { id: 6, category: 'Products', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80', title: 'Studio Session' },
  { id: 7, category: 'Maternity', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80', title: 'Desert Wander' },
  { id: 8, category: 'Interiors', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', title: 'Concert Lights' }
];

const categories = ['All', 'Corporate', 'Weddings', 'Celebrities', 'Products', 'Maternity', 'Event', "Interiors"];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-widest mb-4 md:mb-6">Portfolio</h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8 md:mb-12"></div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${filter === cat ? 'border-gold text-gold' : 'border-transparent text-textSecondary hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <GalleryGrid images={filteredImages} onImageClick={setSelectedImage} />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
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
              className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white z-50 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-4 md:px-8"
            >
              <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase">{selectedImage.title}</h3>
              <p className="text-gold mt-2 uppercase tracking-[0.2em] text-[10px] md:text-xs">{selectedImage.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
