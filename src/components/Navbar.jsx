import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Work ', path: '/work-video' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-background/95 backdrop-blur-md py-1.5 md:py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-black/80 to-transparent py-2.5 md:py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="z-50 flex items-center">
          <img
            src="/images/Logo white.png"
            alt="LensCraft Logo"
            className="logo-white h-9 md:h-11 w-auto object-contain transition-all duration-300"
          />
          <img
            src="/images/Logo Main.png"
            alt="LensCraft Logo"
            className="logo-main h-9 md:h-11 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-medium uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300 ${location.pathname === link.path ? 'text-gold' : 'text-textSecondary'}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="text-textSecondary hover:text-gold transition-colors focus:outline-none p-1" aria-label="Toggle Theme">
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2 z-50 bg-surface/80 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1 shadow-lg">
          <button onClick={toggleTheme} className="text-white hover:text-gold transition-colors p-2 focus:outline-none" aria-label="Toggle theme">
            {isLight ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <button
            className="text-white hover:text-gold transition-colors p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 w-full h-[100dvh] bg-background/90  backdrop-blur-2xl flex flex-col justify-center items-center space-y-10 md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <Link
                  to={link.path}
                  className="text-3xl font-light uppercase tracking-[0.2em] text-white hover:text-gold transition-colors block py-2"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
