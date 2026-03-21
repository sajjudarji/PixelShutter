import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-0 min-h-screen flex flex-col relative bg-transparent">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold/50"></div>
            <p className="text-gold tracking-[0.2em] text-xs font-medium uppercase">
              Availability: Limited for 2024
            </p>
            <div className="w-8 h-[1px] bg-gold/50"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider mb-6">
            Connect <span className="text-gold">With Us</span>
          </h1>

          <p className="text-textSecondary max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base mb-16">
            Translating visions into cinematic reality. Share your narrative with us, and let's craft something timeless.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-left space-y-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <label className="block text-white/50 text-xs tracking-widest uppercase mb-2 group-focus-within:text-gold transition-colors">Mobile Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors font-light"
              />
            </div>

            <div className="group">
              <label className="block text-white/50 text-xs tracking-widest uppercase mb-2 group-focus-within:text-gold transition-colors">Purpose</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light appearance-none cursor-pointer">
                <option value="editorial" className="bg-surface text-white">Editorial / Fashion</option>
                <option value="wedding" className="bg-surface text-white">Wedding / Elopement</option>
                <option value="portrait" className="bg-surface text-white">Portrait / Lifestyle</option>
                <option value="commercial" className="bg-surface text-white">Commercial</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-white/50 text-xs tracking-widest uppercase mb-2 group-focus-within:text-gold transition-colors">Inquiry</label>
            <textarea
              rows="4"
              placeholder="Describe the atmosphere of your project..."
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors font-light resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              className="bg-gold text-black px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-white transition-colors duration-300"
            >
              Send Inquiry
            </button>
          </div>
        </motion.form>
      </div>

      {/* Map Section */}
      <div className="mt-32 relative h-[500px] w-full flex-grow overflow-hidden">
        {/* Gradient Mask to fade into background at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* The Map Background */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-200 pointer-events-none"
        />

        {/* Contact/Location Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-20 flex items-center justify-center mt-20"
        >
          <div className="bg-surface/90 backdrop-blur-md border border-white/10 p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-white tracking-[0.2em] text-sm md:text-base font-medium uppercase mb-2">Toran  Studio</h3>
            <p className="text-textSecondary text-xs md:text-sm font-light tracking-wide">Malad(East), Mumbai 400097</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
