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

    // Optimized for 120Hz with passive listener
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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ultra-smooth-120hz ${
        scrolled 
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30' 
          : 'bg-transparent'
      }`}
      style={{ height: '90px' }}
    >
      {/* Marco minimalista fijo */}
      <div className={`absolute inset-0 transition-all duration-200 ultra-smooth-120hz ${
        scrolled 
          ? 'border border-gray-200/20 dark:border-gray-700/20 rounded-none' 
          : 'border-2 border-white/10 rounded-xl mx-4 mt-4 mb-4'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Tamaño fijo sin encogimiento */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center space-x-4 cursor-pointer relative z-10 ultra-smooth-120hz"
            onClick={() => handleNavClick('#home')}
          >
            <div className="relative flex items-center w-16 h-16">
              <img 
                src="/minucst_logo_resized%201.png" 
                alt="MINUCST Logo" 
                className="w-full h-full object-contain ultra-smooth-120hz"
              />
            </div>
            <div className="hidden sm:block">
              <motion.div 
                className="font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent bebas-font flex items-center space-x-2 ultra-smooth-120hz"
                style={{
                  fontSize: '2rem',
                  textShadow: '0 2px 8px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2), 0 4px 16px rgba(251, 191, 36, 0.3)',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                  filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))'
                }}
              >
                <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  MINUCST
                </span>
                <motion.span 
                  className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 2px 6px rgba(251, 191, 36, 0.5), 0 0 15px rgba(251, 191, 36, 0.3), 0 4px 12px rgba(251, 191, 36, 0.4)',
                    fontWeight: 700,
                    filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))'
                  }}
                >
                  XV
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className="transition-all duration-150 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ultra-smooth-120hz"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button - Sin contenedores */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-150 flex items-center justify-center w-12 h-12 ultra-smooth-120hz"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-150 flex items-center justify-center w-12 h-12 ultra-smooth-120hz"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg ultra-smooth-120hz"
          >
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-150 ultra-smooth-120hz"
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