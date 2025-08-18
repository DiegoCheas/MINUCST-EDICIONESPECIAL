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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ultra-smooth-360hz ${
        scrolled 
          ? 'bg-white/96 dark:bg-gray-900/96 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: '70px',
        willChange: 'transform, opacity, background-color'
      }}
    >
      {/* Línea separadora elegante - solo visible cuando scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-200 ultra-smooth-360hz ${
        scrolled 
          ? 'bg-gradient-to-r from-transparent via-gray-200/30 dark:via-gray-700/30 to-transparent opacity-100' 
          : 'opacity-0'
      }`} />
      
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo y título - PROFESIONAL Y TÉCNICO */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center cursor-pointer relative z-10 ultra-smooth-360hz"
            onClick={() => handleNavClick('#home')}
            style={{ gap: '1rem' }}
          >
            {/* Logo TAMAÑO CORRECTO */}
            <div className="relative flex items-center">
              <motion.img 
                src="/minucst_logo_resized%201.png" 
                alt="MINUCST Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain ultra-smooth-360hz"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  imageRendering: 'crisp-edges',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
                whileHover={{ 
                  scale: 1.03,
                  filter: 'drop-shadow(0 4px 12px rgba(251, 191, 36, 0.2))'
                }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              />
            </div>
            
            {/* Título MINUCST XV - JUNTO Y PROFESIONAL */}
            <div className="hidden sm:block">
              <motion.div 
                className="font-bold flex items-center ultra-smooth-360hz"
                style={{
                  fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  lineHeight: 1
                }}
                whileHover={{ 
                  scale: 1.01,
                  filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))'
                }}
                transition={{ duration: 0.15 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl"
                  animate={{
                    filter: [
                      'brightness(1) drop-shadow(0 0 6px rgba(251, 191, 36, 0.3))',
                      'brightness(1.04) drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))',
                      'brightness(1) drop-shadow(0 0 6px rgba(251, 191, 36, 0.3))'
                    ]
                  }}
                  transition={{
                    filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    textShadow: '0 2px 8px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2)',
                    WebkitTextStroke: '0.5px rgba(251, 191, 36, 0.1)'
                  }}
                >
                  MINUCST XV
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Navegación Desktop - TÉCNICA Y RIGUROSA */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.01, duration: 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -1,
                  backgroundColor: 'rgba(251, 191, 36, 0.08)',
                  color: '#dc2626'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(item.href)}
                className="transition-all duration-100 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 ultra-smooth-360hz"
                style={{
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Controles - PERFECTAMENTE ALINEADOS */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1, ease: [0.23, 1, 0.32, 1] }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-100 flex items-center justify-center ultra-smooth-360hz w-10 h-10 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 transition-all duration-100 flex items-center justify-center ultra-smooth-360hz w-10 h-10 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - PROFESIONAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg ultra-smooth-360hz"
          >
            <div className="px-4 py-4 space-y-1 max-h-80 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ scale: 1.01, x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-100 ultra-smooth-360hz"
                  style={{ minHeight: '44px' }}
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