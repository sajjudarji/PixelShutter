import { motion } from 'framer-motion';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';

const clients = [
  { name: 'Vogue', logo: 'VG' },
  { name: 'Harper\'s Bazaar', logo: 'HB' },
  { name: 'Kinfolk', logo: 'KF' },
  { name: 'Cereal', logo: 'CR' },
  { name: 'GQ', logo: 'GQ' },
  { name: 'Monocle', logo: 'MN' },
];

export default function Clients() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-widest mb-6">Trusted By</h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-16"></div>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-32 bg-surface flex items-center justify-center border border-white/5 hover:border-gold/30 hover:bg-surface/80 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-3xl text-textSecondary font-serif italic group-hover:text-gold transition-colors">{client.logo}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-20 md:mb-32 border border-white/10 group bg-surface">
        <div className="h-[300px] md:h-[400px] lg:h-auto overflow-hidden relative">
          <img 
             src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80" 
             alt="Vogue Editorial" 
             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h4 className="text-gold uppercase tracking-[0.2em] mb-4 text-xs font-medium">Featured Case Study</h4>
          <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-6 leading-tight">Vogue Editorial<br/>Spring '23</h2>
          <p className="text-textSecondary font-light leading-relaxed mb-8 md:mb-10 text-base md:text-lg border-l border-gold/30 pl-4 md:pl-6">
            A deep dive into the creative process behind the cover shoot for the Spring 2023 issue. An exploration of natural light and raw textures to bring contemporary fashion to life.
          </p>
          <div className="w-full">
             <Button variant="outline" className="w-full sm:w-auto">Read Full Story</Button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20 md:mb-32">
        <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-12 md:mb-16 text-center">Words of Praise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TestimonialCard 
             text="A visionary talent. The resulting images were nothing short of cinematic masterpieces. Unparalleled eye for detail." 
             author="Elena Rostova" 
             role="Fashion Editor"
          />
          <TestimonialCard 
             text="Captured the essence of our wedding day so perfectly. We are forever grateful for these beautiful heirlooms." 
             author="Mark & Sophie" 
             role="Client"
          />
          <TestimonialCard 
             text="The most professional and intuitive photographer I've worked with in my 15-year career. Absolutely brilliant." 
             author="David Chen" 
             role="Director"
          />
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-b from-surface to-background border border-white/10 py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-[1px] bg-gold"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-widest mb-6 leading-tight">Ready to <span className="text-gold">Create?</span></h2>
        <p className="text-textSecondary mb-10 md:mb-12 max-w-2xl mx-auto font-light text-base md:text-lg tracking-wide">
          Whether it's an intimate wedding, an editorial campaign, or a personal branding session, I'd love to hear about your vision.
        </p>
        <Button variant="primary" className="w-full sm:w-auto">Get in Touch</Button>
      </motion.div>
    </div>
  );
}
