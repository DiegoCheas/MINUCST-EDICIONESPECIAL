import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, ExternalLink, Star, Sparkles, Globe, Zap, ArrowUpRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRegistration = () => {
    window.location.href = 'https://forms.gle/Yvhr4wpKbzsbbbw26';
  };

  const handleLearnMore = () => {
    const whoWeAreSection = document.getElementById('who-we-are');
    if (whoWeAreSection) {
      const offsetTop = whoWeAreSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-3xl opacity-30"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-3xl opacity-20"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.1
            }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  filter: 'drop-shadow(0 8px 16px rgba(251, 191, 36, 0.2))'
                }}
                className="inline-flex items-center bg-gradient-to-r from-yellow-500/15 to-amber-500/15 backdrop-blur-xl border border-yellow-400/25 rounded-full px-4 lg:px-8 py-2 lg:py-4 text-sm lg:text-base font-medium"
              >
                <motion.div
                  className="inline-flex items-center space-x-2 lg:space-x-3"
                  animate={{
                    filter: [
                      'brightness(1) drop-shadow(0 0 2px rgba(251, 191, 36, 0.2))',
                      'brightness(1.05) drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))',
                      'brightness(1) drop-shadow(0 0 2px rgba(251, 191, 36, 0.2))'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-4 lg:w-6 h-4 lg:h-6 text-yellow-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent font-bold">
                    Edición Especial
                  </span>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 45, 90]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-3 lg:w-5 h-3 lg:h-5 text-yellow-400" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* MINUCST Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.2))'
                }}
                className="flex justify-center lg:justify-start"
              >
                <motion.img
                  src="/minucst_logo_resized 1.png"
                  alt="MINUCST Logo"
                  className="h-32 sm:h-40 lg:h-48 xl:h-56 w-auto object-contain filter drop-shadow-lg"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop";
                  }}
                />
              </motion.div>
              
              <div className="space-y-3 lg:space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4, 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.85]"
                  style={{ 
                    fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 450,
                    letterSpacing: '0.02em'
                  }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent block"
                    whileHover={{ 
                      scale: 1.01,
                      filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.4))'
                    }}
                    animate={{
                      filter: [
                        'brightness(1) drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))',
                        'brightness(1.05) drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))',
                        'brightness(1) drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))'
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    MINUCST
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.7, 
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      filter: 'drop-shadow(0 0 18px rgba(251, 191, 36, 0.6))'
                    }}
                    className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.8]"
                    style={{ 
                      fontFamily: 'var(--font-display)',
                      fontWeight: 400,
                      letterSpacing: '0.1em'
                    }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 6px rgba(251, 191, 36, 0.4)',
                          '0 0 12px rgba(251, 191, 36, 0.5)',
                          '0 0 6px rgba(251, 191, 36, 0.4)'
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      XV
                    </motion.span>
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  className="text-base sm:text-lg lg:text-xl text-red-100 font-light leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    letterSpacing: '0.02em'
                  }}
                >
                  Modelo Internacional de las Naciones Unidas del Colegio Santa Teresa
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.9, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.01,
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))'
              }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/15 rounded-2xl lg:rounded-4xl p-4 lg:p-8 space-y-3 lg:space-y-6 shadow-xl"
            >
              <motion.h2 
                whileHover={{ scale: 1.01 }}
                className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              >
                "Educación por la Paz: Resiliencia y Cooperación para la Transformación Social"
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="text-red-100 leading-relaxed text-sm lg:text-base"
              >
                Una plataforma educativa transformadora que celebra el poder del diálogo, 
                la diplomacia y la acción juvenil en Santo Domingo Este, República Dominicana.
              </motion.p>
              
              {/* Leadership Section */}
              <div className="grid sm:grid-cols-2 gap-3 lg:gap-6 pt-3">
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.2))'
                  }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-10 lg:w-14 h-10 lg:h-14 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mx-auto mb-2 flex items-center justify-center"
                    whileHover={{ rotate: 90, scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Users className="w-5 lg:w-7 h-5 lg:h-7 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-white text-sm lg:text-base">Diego Cheas</h3>
                  <p className="text-yellow-400 text-xs font-medium">Secretario General</p>
                </motion.div>
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.2))'
                  }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-10 lg:w-14 h-10 lg:h-14 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center"
                    whileHover={{ rotate: -90, scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Users className="w-5 lg:w-7 h-5 lg:h-7 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-white text-sm lg:text-base">Natasha Guzmán</h3>
                  <p className="text-amber-400 text-xs font-medium">Secretaria General Adjunta</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-6"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 12px 24px rgba(251, 191, 36, 0.3)",
                  filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.4))'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegistration}
                className="group relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white font-bold py-4 px-6 lg:py-5 lg:px-10 rounded-xl lg:rounded-3xl transition-all duration-200 shadow-xl flex items-center justify-center space-x-2 lg:space-x-3"
              >
                <span className="text-sm lg:text-lg">Inscríbete Ahora</span>
                <motion.div
                  whileHover={{ x: 3, rotate: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ExternalLink className="w-4 lg:w-5 h-4 lg:h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: 'rgba(251, 191, 36, 0.08)',
                  borderColor: 'rgba(251, 191, 36, 0.8)',
                  filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.2))'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLearnMore}
                className="border-2 border-yellow-400/40 text-white hover:bg-yellow-400/5 hover:border-yellow-400 font-bold py-4 px-6 lg:py-5 lg:px-10 rounded-xl lg:rounded-3xl transition-all duration-200 backdrop-blur-sm"
              >
                <span className="text-sm lg:text-lg">Conoce Más</span>
              </motion.button>
            </motion.div>

            {/* Enhanced External Links Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.3, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="space-y-3"
            >
              <motion.h3 
                className="text-sm lg:text-base font-semibold text-yellow-400/80 mb-3"
                whileHover={{ scale: 1.01 }}
              >
                Enlaces Relacionados
              </motion.h3>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {/* MINUCST INSIDE Link */}
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    filter: 'drop-shadow(0 12px 24px rgba(220, 38, 38, 0.3))'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleExternalLink('https://minucstinside.com/')}
                  className="group relative overflow-hidden bg-gradient-to-br from-red-600/15 via-red-500/10 to-yellow-500/15 backdrop-blur-xl border border-red-400/25 rounded-xl p-3 lg:p-4 transition-all duration-300"
                >
                  <div className="relative z-10 flex items-center space-x-2 lg:space-x-3">
                    <motion.div 
                      className="bg-gradient-to-br from-red-500 to-yellow-500 p-1.5 lg:p-2 rounded-lg shadow-md"
                      whileHover={{ 
                        rotate: 180, 
                        scale: 1.05,
                        filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))'
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Globe className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 text-left">
                      <motion.h4 
                        className="font-bold text-white text-xs lg:text-sm mb-0.5 group-hover:text-yellow-200 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        MINUCST INSIDE
                      </motion.h4>
                      <p className="text-red-200/70 text-xs group-hover:text-yellow-100 transition-colors duration-200">
                        Exclusivamente para staff
                      </p>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 3, rotate: 30 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-red-300 group-hover:text-yellow-100 transition-colors duration-200"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Break The Silence Link */}
                <motion.button 
                  whileHover={{ 
                    scale: 1.03,
                    y: -3,
                    filter: 'drop-shadow(0 12px 24px rgba(220, 38, 38, 0.3))'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleExternalLink('https://breakthesilencexv.netlify.app/')}
                  className="group relative overflow-hidden bg-gradient-to-br from-red-600/15 via-yellow-500/10 to-red-500/15 backdrop-blur-xl border border-red-400/25 rounded-xl p-3 lg:p-4 transition-all duration-300"
                >
                  <div className="relative z-10 flex items-center space-x-2 lg:space-x-3">
                    <motion.div 
                      className="bg-gradient-to-br from-red-500 to-yellow-500 p-1.5 lg:p-2 rounded-lg shadow-md"
                      whileHover={{ 
                        rotate: 180, 
                        scale: 1.05,
                        filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))'
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Zap className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 text-left">
                      <motion.h4 
                        className="font-bold text-white text-xs lg:text-sm mb-0.5 group-hover:text-yellow-200 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        MINUCST VOICE: BREAK THE SILENCE
                      </motion.h4>
                      <p className="text-red-200/70 text-xs group-hover:text-yellow-100 transition-colors duration-200">
                        Podcast Oficial - MINUCST XV
                      </p>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 3, rotate: 30 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-red-300 group-hover:text-yellow-100 transition-colors duration-200"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut"
            }}
            className="space-y-4 lg:space-y-8 order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6">
              {[
                { icon: Award, title: 'Fechas', value: '20-22 Marzo 2026', gradient: 'from-yellow-500 to-amber-500' },
                { icon: MapPin, title: 'Ubicación', value: 'Santo Domingo Este, RD', gradient: 'from-amber-500 to-yellow-600' },
                { icon: Users, title: 'Delegados', value: '250+ Jóvenes Líderes', gradient: 'from-yellow-600 to-amber-600' },
                { icon: Award, title: 'Comités', value: '12 Especializados', gradient: 'from-amber-600 to-yellow-700' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6 + index * 0.08,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -3,
                    filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))'
                  }}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/15 rounded-xl lg:rounded-2xl p-3 lg:p-6 hover:bg-white/12 transition-all duration-200 hover:shadow-lg"
                >
                  <motion.div 
                    className={`bg-gradient-to-r ${item.gradient} w-8 lg:w-12 h-8 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-2 lg:mb-4`}
                    whileHover={{ 
                      scale: 1.08, 
                      rotate: 90,
                      filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <item.icon className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-sm lg:text-lg font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-red-100 font-medium text-xs lg:text-base">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <CountdownTimer />

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.4, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.01,
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))'
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/15 rounded-xl lg:rounded-2xl p-4 lg:p-8 shadow-xl"
            >
              <motion.h3 
                whileHover={{ scale: 1.01 }}
                className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              >
                Próximos Eventos
              </motion.h3>
              <div className="space-y-2 lg:space-y-4">
                {[
                  { event: 'Cierre de Inscripciones', date: 'Feb 28, 2026' },
                  { event: 'Sesión Informativa', date: 'Mar 1, 2026' },
                  { event: 'Ceremonia de Apertura', date: 'Mar 20, 2026' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1.6 + index * 0.08,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 5,
                      scale: 1.01,
                      backgroundColor: 'rgba(255, 255, 255, 0.12)'
                    }}
                    className="flex items-center justify-between p-2 lg:p-4 bg-white/5 rounded-lg lg:rounded-xl border border-yellow-400/8 hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-red-100 font-medium text-xs lg:text-base">{item.event}</span>
                    <motion.span 
                      whileHover={{ scale: 1.03 }}
                      className="text-yellow-400 font-bold bg-yellow-400/8 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm"
                    >
                      {item.date}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.8, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="grid grid-cols-2 gap-2 lg:gap-4"
            >
              {[
                { number: '250+', label: 'Delegados', gradient: 'from-yellow-500/15 to-amber-500/15', border: 'border-yellow-500/25' },
                { number: '2+', label: 'Países', gradient: 'from-amber-500/15 to-yellow-600/15', border: 'border-amber-500/25' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 2 + index * 0.08,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.2))'
                  }}
                  className={`text-center p-3 lg:p-6 bg-gradient-to-br ${stat.gradient} backdrop-blur-xl rounded-xl lg:rounded-2xl border ${stat.border}`}
                >
                  <motion.div 
                    className="text-xl lg:text-4xl font-black text-yellow-400 mb-1"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      textShadow: [
                        '0 0 4px rgba(251, 191, 36, 0.3)',
                        '0 0 8px rgba(251, 191, 36, 0.4)',
                        '0 0 4px rgba(251, 191, 36, 0.3)'
                      ]
                    }}
                    transition={{
                      textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.2 }
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-red-100 font-medium text-xs lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;