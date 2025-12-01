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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out gpu-accelerated ${
        scrolled 
          ? 'bg-red-700/95 backdrop-blur-2xl shadow-lg border-b border-red-600/20' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: '88px',
        willChange: 'transform',
        zIndex: 40
      }}
    >
      
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo y título - PROFESIONAL Y TÉCNICO */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center cursor-pointer relative z-10"
            onClick={() => handleNavClick('#home')}
            style={{ gap: '1.25rem' }}
          >
            {/* Logo con mejor presentación */}
            <div className="relative flex items-center">
              <motion.img 
                src="/image.png"
                alt="MINUCST Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  filter: scrolled 
                    ? 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))' 
                    : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.08,
                  filter: 'drop-shadow(0 6px 16px rgba(220, 38, 38, 0.4))'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                loading="eager"
                onError={(e) => {
                  console.warn('Navigation logo failed to load');
                }}
              />
            </div>
            
            {/* Título MINUCST XV - Más elegante y formal */}
            <div className="hidden sm:block">
              <motion.div 
                className="font-bold flex flex-col"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className={`text-2xl sm:text-3xl md:text-3xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-white' 
                      : 'text-white'
                  }`}
                  style={{
                    textShadow: scrolled 
                      ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.5)',
                    fontWeight: 800
                  }}
                >
                  MINUCST XV
                </motion.span>
                <motion.span 
                  className={`text-xs font-medium transition-all duration-300 ${
                    scrolled 
                      ? 'text-white/80' 
                      : 'text-yellow-200'
                  }`}
                  style={{
                    letterSpacing: '0.1em',
                    marginTop: '-2px'
                  }}
                >
                  EDICIÓN ESPECIAL 2026
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Navegación Desktop - TÉCNICA Y RIGUROSA */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -1,
                  backgroundColor: scrolled 
                    ? 'rgba(220, 38, 38, 0.08)' 
                    : 'rgba(255, 255, 255, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  scrolled 
                    ? 'text-white/90 hover:text-white hover:bg-red-600/50' 
                    : 'text-white/90 hover:text-white'
                }`}
                style={{
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  border: scrolled 
                    ? '1px solid rgba(255, 255, 255, 0.1)' 
                    : '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Controles - PERFECTAMENTE ALINEADOS */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={toggleTheme}
              className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-white/80 hover:text-white hover:bg-red-600/50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              style={{
                backdropFilter: 'blur(8px)',
                border: scrolled 
                  ? '1px solid rgba(255, 255, 255, 0.2)' 
                  : '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-white/80 hover:text-white hover:bg-red-600/50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              style={{
                backdropFilter: 'blur(8px)',
                border: scrolled 
                  ? '1px solid rgba(255, 255, 255, 0.2)' 
                  : '1px solid rgba(255, 255, 255, 0.2)'
              }}
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-700/30 shadow-xl"
            className="lg:hidden bg-red-700/95 backdrop-blur-2xl border-t border-red-600/30 shadow-xl"
          >
            <div className="px-6 py-6 space-y-2 max-h-80 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-5 py-4 text-base font-semibold text-white/90 hover:text-white hover:bg-red-600/50 rounded-xl transition-all duration-300"
                  style={{ 
                    minHeight: '52px',
                    border: '1px solid transparent',
                    backdropFilter: 'blur(4px)'
                  }}
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