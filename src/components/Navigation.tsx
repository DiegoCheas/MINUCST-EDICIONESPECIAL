import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
    };

    // Optimized for 360Hz with passive listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Quiénes Somos', href: '#who-we-are' },
    { name: 'Acerca', href: '#about' },
    { name: 'Comités', href: '#committees' },
    { name: 'Inscripción', href: '#registration' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Noticias', href: '#news' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Redes Sociales', href: '#social-media' },
    { name: 'Contacto', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ultra-smooth-360hz ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: '100px',
        padding: '0 clamp(1rem, 5vw, 3rem)', // Dynamic responsive padding
        willChange: 'transform, opacity, background-color'
      }}
    >
      {/* Elegant separator line - only visible when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ultra-smooth-360hz ${
        scrolled 
          ? 'bg-gradient-to-r from-transparent via-gray-200/40 dark:via-gray-700/40 to-transparent opacity-100' 
          : 'opacity-0'
      }`} />
      
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full" style={{ gap: 'clamp(1rem, 3vw, 2rem)' }}>
          
          {/* Logo and title with proportional spacing */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center cursor-pointer relative z-10 ultra-smooth-360hz"
            onClick={() => handleNavClick('#home')}
            style={{ 
              gap: 'clamp(0.75rem, 2vw, 1.5rem)', // Dynamic spacing
              padding: 'clamp(0.5rem, 1vw, 1rem) 0' // Vertical padding
            }}
          >
            {/* Logo with high resolution */}
            <div className="relative flex items-center">
              <img 
                src="/minucst_logo_resized%201.png" 
                alt="MINUCST Logo" 
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain ultra-smooth-360hz"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  imageRendering: 'crisp-edges',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
              />
            </div>
            
            {/* Title without container - directly on background */}
            <div className="hidden sm:block">
              <motion.div 
                className="font-bold flex items-center ultra-smooth-360hz"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', // Responsive scaling
                  fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  lineHeight: 1
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.4))'
                  }}
                  animate={{
                    filter: [
                      'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))',
                      'brightness(1.04) drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))',
                      'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))'
                    ]
                  }}
                  transition={{
                    filter: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 }
                  }}
                  style={{
                    textShadow: '0 2px 8px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2)',
                    filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))'
                  }}
                >
                  MINUCST XV
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation with fluid grid */}
          <div className="hidden lg:flex items-center" style={{ gap: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className="transition-all duration-200 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ultra-smooth-360hz"
                style={{
                  padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(0.75rem, 1.5vw, 1rem)', // Dynamic padding
                  minHeight: '44px' // Touch target
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu - Centered without containers */}
          <div className="flex items-center" style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-200 flex items-center justify-center ultra-smooth-360hz"
              style={{
                width: 'clamp(44px, 8vw, 48px)',
                height: 'clamp(44px, 8vw, 48px)',
                borderRadius: '50%'
              }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-200 flex items-center justify-center ultra-smooth-360hz"
              style={{
                width: 'clamp(44px, 8vw, 48px)',
                height: 'clamp(44px, 8vw, 48px)',
                borderRadius: '50%'
              }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with optimized animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg ultra-smooth-360hz"
          >
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 ultra-smooth-360hz"
                  style={{ minHeight: '48px' }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;