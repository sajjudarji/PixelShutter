import { motion, AnimatePresence } from 'framer-motion';
import ImageCard from './ImageCard';

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <motion.div layout className="masonry-grid">
      <AnimatePresence>
        {images.map((img) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            key={img.id}
            className="masonry-item"
          >
            <ImageCard 
              src={img.src} 
              alt={img.title} 
              title={img.title}
              onClick={() => onImageClick(img)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
