import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only trigger once per session to avoid annoying users
    const triggered = sessionStorage.getItem('popupTriggered');
    if (!triggered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('popupTriggered', 'true');
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center pointer-events-none p-0 md:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 pointer-events-auto backdrop-blur-sm"
            onClick={closePopup}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative pointer-events-auto w-full max-w-lg bg-surface border border-white/10 rounded-t-3xl md:rounded-2xl p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:shadow-2xl flex flex-col"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-textSecondary hover:text-white transition-colors bg-white/5 rounded-full"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-wider mb-2">
              Let's Create<br/><span className="text-gold font-normal">Together</span>
            </h3>
            <p className="text-sm text-textSecondary mb-6 font-light tracking-wide">
              Tell us about your next project, and we'll be in touch soon.
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closePopup(); }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white placeholder:text-textSecondary/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white placeholder:text-textSecondary/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white placeholder:text-textSecondary/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={3}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white placeholder:text-textSecondary/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-black font-semibold uppercase tracking-widest py-4 rounded-lg transition-colors flex items-center justify-center min-h-[44px]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
