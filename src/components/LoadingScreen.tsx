import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Precargar el logo
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = '/minucst_logo_resized%201.png';

    // Timer para la animación de salida
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Tiempo para completar la animación de salida
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: -window.innerHeight,
            transition: { 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 35%, #dc2626 100%)'
          }}
        >
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.08, 0.25, 0.08],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-amber-400/20 rounded-full blur-3xl"
            />
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: logoLoaded ? 1 : 0, 
                scale: logoLoaded ? 1 : 0.8, 
                y: logoLoaded ? 0 : 20 
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }}
              className="mb-8"
            >
              <motion.img
                src="/minucst_logo_resized%201.png"
                alt="MINUCST Logo"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto object-contain"
                animate={{
                  filter: [
                    'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                    'brightness(1.05) drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))',
                    'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5
              }}
              className="space-y-4"
            >
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.85]"
                style={{ 
                  fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent block"
                  animate={{
                    filter: [
                      'brightness(1) drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))',
                      'brightness(1.08) drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))',
                      'brightness(1) drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MINUCST
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl leading-[0.8] mt-2"
                  style={{ 
                    fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.1em'
                  }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(251, 191, 36, 0.5)',
                      '0 0 20px rgba(251, 191, 36, 0.7)',
                      '0 0 10px rgba(251, 191, 36, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  XV
                </motion.span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8
                }}
                className="text-lg sm:text-xl lg:text-2xl text-red-100 font-light leading-relaxed max-w-2xl mx-auto px-4"
                style={{ 
                  fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 300,
                  letterSpacing: '0.02em'
                }}
              >
                Modelo Internacional de las Naciones Unidas
                <br />
                del Colegio Santa Teresa
              </motion.p>

              {/* Tema */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.1
                }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 max-w-3xl mx-auto">
                  <motion.h2 
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2"
                    animate={{
                      filter: [
                        'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))',
                        'brightness(1.05) drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))',
                        'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "Educación por la Paz: Resiliencia y Cooperación para la Transformación Social"
                  </motion.h2>
                </div>
              </motion.div>
            </motion.div>

            {/* Indicador de carga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto"
              />
              <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-yellow-200/80 text-sm mt-4 font-light"
              >
                Cargando experiencia diplomática...
              </motion.p>
            </motion.div>
          </div>

          {/* Partículas flotantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;