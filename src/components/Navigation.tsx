import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      x: -20
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.1
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gpu-accelerated glass-morphism ${
          scrolled 
            ? 'bg-gradient-to-r from-red-900/95 to-red-800/95 backdrop-blur-3xl shadow-2xl border-b border-white/10' 
            : 'bg-gradient-to-r from-red-900/80 to-red-800/80 backdrop-blur-2xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg overflow-hidden border border-white/20"
              whileHover={{ 
                scale: 1.03,
                filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
              onClick={() => handleMenuClick('#home')}
            >
              <motion.div 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-xl shadow-lg overflow-hidden"
                whileHover={{ rotate: 5, scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <motion.h1 
                  className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent font-normal text-xl tracking-tight optimize-text"
                  style={{ 
                    fontFamily: 'Times New Roman, serif',
                    fontWeight: 400,
                    letterSpacing: '0.02em'
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  MINUCST XV
                </motion.h1>
              <img 
                src="/minucst_logo_resized 1.png" 
                alt="MINUCST Logo" 
                className="w-8 h-8 object-contain"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.05 + 0.2,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  onClick={() => handleMenuClick(item.href)}
                  className={`text-white/95 hover:text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/8 backdrop-blur-sm relative group desktop-interactive ${
                    activeSection === item.href.substring(1) ? 'text-yellow-400 bg-white/8' : ''
                  }`}
                  whileHover={{ 
                    scale: 1.03,
                    y: -1,
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.href.substring(1) ? '100%' : 0 
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 to-amber-400/8 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 180,
                  filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-white/8 hover:bg-white/15 transition-all duration-200 backdrop-blur-sm desktop-interactive ml-2"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Sun className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Moon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/8 hover:bg-white/15 transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <Sun className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-yellow-400" />
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 p-2 rounded-xl bg-white/8 backdrop-blur-sm border border-white/15 transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden mobile-menu bg-red-800/95 backdrop-blur-3xl border-t border-white/8 rounded-b-2xl mb-2 shadow-xl overflow-hidden glass-morphism"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      variants={itemVariants}
                      onClick={() => handleMenuClick(item.href)}
                      className={`text-white/95 hover:text-yellow-400 hover:bg-white/8 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 w-full text-left desktop-interactive ${
                        activeSection === item.href.substring(1) ? 'text-yellow-400 bg-white/8' : ''
                      }`}
                      whileHover={{ 
                        x: 6,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;