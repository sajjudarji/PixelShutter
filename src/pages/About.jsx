import { motion } from 'framer-motion';
import photographerProfile from '../assets/about_profile.jpg';

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
            src={photographerProfile}
            alt="Photographer Profile"
            className="w-full h-[400px] md:h-[600px] object-cover cursor-pointer object-center rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-48 h-32 md:h-48 bg-gold/10 border border-gold backdrop-blur-sm -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-widest mb-6 leading-tight">
            The Artist <br /><span className="text-gold">Behind the Lens</span>
          </h1>
          <div className="w-12 h-[1px] bg-gold mb-8"></div>
          <div className="space-y-6 text-textSecondary font-light leading-relaxed text-lg">
            <p>
              Photography, to me, is not just about light — it’s about feeling. The quiet, unscripted moments. The emotions that exist for a second and live forever through a frame.            </p>
            <p>
              My journey began over two decade ago, shaped by observing life in its rawest form — learning how light, shadow, and human connection come together to tell stories without words.            </p>
            <p>
              Today, I approach every event with the same intention: to create image that feels honest, timeless, and deeply personal.</p>
            <p>
              Unobtrusive in presence, precise in vision — I document, not direct.
              Let’s create something that lasts beyond the moment.</p>
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
          "What I like about photographs is that they capture a moment that’s gone forever."
        </p>
        <p className="text-gold mt-8 tracking-[0.2em] uppercase text-xs font-medium">— Karl Lagerfeld</p>
      </motion.div>

      <div className="mt-20 md:mt-32 mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-12 md:mb-16 text-center">Our Journey...</h2>
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12 border-l border-white/10 pl-6 md:pl-8 relative">
          {[
            {
              year: '1979',
              title: 'The Beginning',
              desc: 'My father began his journey in photography, laying the foundation for our legacy.'
            },
            {
              year: '1997',
              title: 'Joining the Legacy',
              desc: 'I joined my father’s business, continuing and evolving the craft.'
            },
            {
              year: '2001',
              title: 'Digital Transition',
              desc: 'We embraced digital photography, adapting to a new era of visual storytelling.'
            },
            {
              year: '2026',
              title: 'Our Clients Today',
              desc: 'Trusted by Jamnalal Bajaj Foundation, IMC Ladies Wing, K Raheja Group, and the Indian Pharmaceutical Association — built on passion, experience, and trust.'
            }
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
