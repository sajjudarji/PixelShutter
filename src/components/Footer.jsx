import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/Logo white.png';
import logoMain from '../assets/Logo Main.png';

export default function Footer() {
  return (
    <footer className="bg-surface py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-start md:items-stretch">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 w-full text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <Link to="/" className="block mb-4 md:mb-6">
              <img
                src={logoWhite}
                alt="LensCraft Logo"
                className="logo-white h-20 md:h-24 w-auto object-contain"
              />
              <img
                src={logoMain}
                alt="LensCraft Logo"
                className="logo-main h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-textSecondary max-w-md font-light leading-relaxed text-sm md:text-base">
              Capturing timeless moments with an artistic eye. Premium photography services for weddings, portraits, and special events.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest mb-4 md:mb-6 text-xs md:text-sm">Links</h4>
            <div className="flex flex-col space-y-3 md:space-y-4">
              <Link to="/" className="text-textSecondary hover:text-gold transition-colors text-sm tracking-wide">Home</Link>
              <Link to="/about" className="text-textSecondary hover:text-gold transition-colors text-sm tracking-wide">About Me</Link>
              <Link to="/gallery" className="text-textSecondary hover:text-gold transition-colors text-sm tracking-wide">Portfolio</Link>
              <Link to="/clients" className="text-textSecondary hover:text-gold transition-colors text-sm tracking-wide">Clients</Link>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-white font-medium uppercase tracking-widest mb-4 md:mb-6 text-xs md:text-sm">Connect</h4>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/toran_studio/" target='_blank' className="text-textSecondary hover:text-gold transition-colors p-2 md:p-0"><Instagram size={20} /></a>
              <a href="#" className="text-textSecondary hover:text-gold transition-colors p-2 md:p-0"><Twitter size={20} /></a>
              <a href="#" className="text-textSecondary hover:text-gold transition-colors p-2 md:p-0"><Facebook size={20} /></a>
              <a href="mailto:toranstudio75@gmail.com" className="text-textSecondary hover:text-gold transition-colors p-2 md:p-0"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center text-left">
          <p className="text-textSecondary text-xs md:text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Toran Studio. All rights reserved.</p>
          <div className="space-x-4 md:space-x-6 flex flex-wrap justify-start md:justify-end gap-y-2">
            <a href="#" className="text-textSecondary hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-textSecondary hover:text-white text-xs md:text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
