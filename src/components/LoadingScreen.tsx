import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources in parallel
    const preloadResources = async () => {
      const promises = [
        // Preload logo with high priority
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLogoLoaded(true);
            resolve();
          };
          img.onerror = () => resolve(); // Fallback
          img.src = '/minucst_logo_resized%201.png';
        }),
        
        // Preload critical fonts
        new Promise<void>((resolve) => {
          if (document.fonts) {
            document.fonts.load('600 48px "Bebas Neue"').then(() => resolve()).catch(() => resolve());
          } else {
            resolve();
          }
        }),
        
        // Simulate critical resource loading
        new Promise<void>((resolve) => {
          setTimeout(resolve, 100); // Minimal delay for smooth experience
        })
      ];

      await Promise.all(promises);
      setResourcesLoaded(true);
    };

    preloadResources();

    // Optimized timer for smooth exit
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400); // Match exit animation duration
    }, 2200); // Reduced total time for better UX

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
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1], // Optimized cubic-bezier
              type: "tween"
            }
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center overflow-hidden gpu-accelerated performance-optimized"
          style={{
            background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 35%, #dc2626 100%)',
            willChange: 'transform, opacity'
          }}
        >
          {/* Optimized background elements with reduced complexity */}
          <div className="absolute inset-0 gpu-accelerated">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.08, 0.2, 0.08],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-[300px] h-[300px] bg-yellow-500/15 rounded-full blur-3xl gpu-accelerated"
            />
            <motion.div 
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.06, 0.15, 0.06],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-[250px] h-[250px] bg-amber-400/12 rounded-full blur-3xl gpu-accelerated"
            />
          </div>

          {/* Minimal grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-3"
            animate={{
              backgroundPosition: ['0% 0%', '20% 20%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='15' cy='15' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Main content with responsive scaling */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Logo with high resolution and responsive sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ 
                opacity: logoLoaded ? 1 : 0, 
                scale: logoLoaded ? 1 : 0.8, 
                y: logoLoaded ? 0 : 30 
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2
              }}
              className="mb-12"
            >
              <motion.img
                src="/minucst_logo_resized%201.png"
                alt="MINUCST Logo"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto object-contain gpu-accelerated"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  imageRendering: 'crisp-edges'
                }}
                animate={{
                  filter: [
                    'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                    'brightness(1.03) drop-shadow(0 0 25px rgba(251, 191, 36, 0.4))',
                    'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Responsive typography with scalable design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.23, 1, 0.32, 1],
                delay: 0.4
              }}
              className="space-y-6"
            >
              {/* Main title with responsive scaling */}
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light leading-[0.85] optimize-text"
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
                      'brightness(1.06) drop-shadow(0 0 12px rgba(251, 191, 36, 0.5))',
                      'brightness(1) drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MINUCST XV
                </motion.span>
              </motion.h1>

              {/* Subtitle with responsive text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.6
                }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-red-100 font-light leading-relaxed max-w-4xl mx-auto px-4"
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

              {/* Theme with elegant styling */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.8
                }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                  <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2"
                    animate={{
                      filter: [
                        'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))',
                        'brightness(1.04) drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))',
                        'brightness(1) drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))'
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "Educación por la Paz: Resiliencia y Cooperación para la Transformación Social"
                  </motion.h2>
                </div>
              </motion.div>
            </motion.div>

            {/* Optimized loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: resourcesLoaded ? 1 : 0.7 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              className="mt-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto"
              />
              <motion.p 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-yellow-200/80 text-sm mt-4 font-light"
              >
                {resourcesLoaded ? 'Iniciando experiencia diplomática...' : 'Cargando recursos...'}
              </motion.p>
            </motion.div>
          </div>

          {/* Minimal floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-yellow-400/25 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, Math.random() * 15 - 7.5, 0],
                  opacity: [0.15, 0.4, 0.15],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
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