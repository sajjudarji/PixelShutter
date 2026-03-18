import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1554046920-90dc5828669e?auto=format&fit=crop&q=80" 
            alt="Photographer Profile" 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-48 h-32 md:h-48 bg-gold/10 border border-gold backdrop-blur-sm -z-10"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-widest mb-6 leading-tight">
            The Artist <br/><span className="text-gold">Behind the Lens</span>
          </h1>
          <div className="w-12 h-[1px] bg-gold mb-8"></div>
          <div className="space-y-6 text-textSecondary font-light leading-relaxed text-lg">
            <p>
              I believe that photography is more than just capturing light; it's about preserving the raw, authentic emotions of a single, fleeting moment.
            </p>
            <p>
              My journey started over a decade ago in the bustling streets of Paris, where I learned to observe the intricate dance between shadows and highlights. Today, I bring that fine-art sensibility to weddings, conceptual portraits, and editorial shoots.
            </p>
            <p>
              My approach is unobtrusive yet deeply intentional. I strive to create timeless imagery that speaks volumes without uttering a single word. Let's create something beautiful together.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-surface p-8 md:p-12 lg:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-snug max-w-4xl mx-auto tracking-wide">
          "A great photograph is one that fully expresses what one feels, in the deepest sense, about what is being photographed."
        </p>
        <p className="text-gold mt-8 tracking-[0.2em] uppercase text-xs font-medium">— Ansel Adams</p>
      </motion.div>

      <div className="mt-20 md:mt-32 mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-12 md:mb-16 text-center">Journey & Milestones</h2>
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12 border-l border-white/10 pl-6 md:pl-8 relative">
          {[
            { year: '2023', title: 'Winner - Int. Photography Awards', desc: 'First place in the fine-art wedding category.' },
            { year: '2020', title: 'Studio Opening', desc: 'Opened the flagship studio in the downtown creative district.' },
            { year: '2015', title: 'First Solo Exhibition', desc: '"Chasing Light", a collection of European travel portraits.' },
            { year: '2012', title: 'The Beginning', desc: 'Bought my first DSLR and discovered a lifelong passion.' }
          ].map((item, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
             >
                <div className="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 md:w-5 md:h-5 bg-surface border-2 border-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h3 className="text-gold font-medium mb-1 tracking-wider text-xl">{item.year}</h3>
                <h4 className="text-white text-lg uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="text-textSecondary font-light">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
