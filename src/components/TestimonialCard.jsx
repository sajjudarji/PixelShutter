import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ text, author, role }) {
  return (
    <motion.div 
      className="bg-surface p-10 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500"></div>
      <Quote className="text-gold w-8 h-8 mb-6 opacity-30" />
      <p className="text-textSecondary mb-8 text-lg font-light leading-relaxed">"{text}"</p>
      <div>
        <h4 className="text-white font-medium tracking-wide uppercase text-sm">{author}</h4>
        <p className="text-sm text-gold mt-1 tracking-wider">{role}</p>
      </div>
    </motion.div>
  );
}
