import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[90] flex flex-col gap-3">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+1234567890" 
        className="w-12 h-12 md:w-14 md:h-14 bg-surface/80 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-all hover:text-gold"
        aria-label="Call Us"
      >
        <Phone size={22} className="md:w-6 md:h-6" />
      </motion.a>
      
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} strokeWidth={2.5} className="md:w-[26px] md:h-[26px]" />
      </motion.a>
    </div>
  );
}
