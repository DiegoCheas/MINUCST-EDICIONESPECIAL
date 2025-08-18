import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };

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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - (scrolled ? 70 : 80);
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30' 
          : 'bg-transparent'
      }`}
      style={{
        height: scrolled ? '70px' : '80px',
      }}
    >
      {/* Marco minimalista */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? 'border border-gray-200/20 dark:border-gray-700/20 rounded-none' 
          : 'border-2 border-white/10 rounded-xl mx-4 mt-4'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer relative z-10"
            onClick={() => handleNavClick('#home')}
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                width: scrolled ? '32px' : '40px',
                height: scrolled ? '32px' : '40px',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img 
                src="/minucst_logo_resized%201.png" 
                alt="MINUCST Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.h1 
                className="font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent bebas-font"
                animate={{
                  fontSize: scrolled ? '1.25rem' : '1.5rem',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  textShadow: '0 2px 4px rgba(251, 191, 36, 0.3)',
                }}
              >
                MINUCST
              </motion.h1>
              <motion.p 
                className="font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
                animate={{
                  fontSize: scrolled ? '0.75rem' : '0.875rem',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  textShadow: '0 1px 2px rgba(251, 191, 36, 0.3)',
                }}
              >
                XV
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className={`transition-all duration-300 rounded-lg ${
                  scrolled 
                    ? 'px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50' 
                    : 'px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`rounded-lg bg-gray-100/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-200 ${
                scrolled ? 'p-1.5' : 'p-2'
              }`}
              animate={{
                width: scrolled ? '36px' : '40px',
                height: scrolled ? '36px' : '40px',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden rounded-lg bg-gray-100/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-200 ${
                scrolled ? 'p-1.5' : 'p-2'
              }`}
              animate={{
                width: scrolled ? '36px' : '40px',
                height: scrolled ? '36px' : '40px',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
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