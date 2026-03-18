import { motion } from 'framer-motion';

export default function ImageCard({ src, alt, title, onClick }) {
  return (
    <motion.div 
      className="relative overflow-hidden group cursor-pointer"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        {title && <h3 className="text-white text-xl font-light tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>}
      </div>
    </motion.div>
  );
}
