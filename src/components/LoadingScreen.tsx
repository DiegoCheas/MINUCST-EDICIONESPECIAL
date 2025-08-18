import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Preload critical resources with progress tracking
    const preloadResources = async () => {
      const resources = [
        // Preload logo with high priority
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLogoLoaded(true);
            setLoadingProgress(prev => prev + 25);
            resolve();
          };
          img.onerror = () => resolve();
          img.src = '/minucst_logo_resized%201.png';
        }),
        
        // Preload critical fonts
        new Promise<void>((resolve) => {
          if (document.fonts) {
            Promise.all([
              document.fonts.load('600 48px "Bebas Neue"'),
              document.fonts.load('400 16px "Space Grotesk"'),
              document.fonts.load('300 16px "Inter"')
            ]).then(() => {
              setLoadingProgress(prev => prev + 25);
              resolve();
            }).catch(() => resolve());
          } else {
            resolve();
          }
        }),
        
        // Simulate critical CSS/JS loading
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setLoadingProgress(prev => prev + 25);
            resolve();
          }, 800);
        }),

        // Final resources
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setLoadingProgress(100);
            setResourcesLoaded(true);
            resolve();
          }, 1500);
        })
      ];

      await Promise.all(resources);
    };

    preloadResources();

    // Professional exit timing
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // Smooth exit duration
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(8px)",
            transition: { 
              duration: 1.2, 
              ease: [0.23, 1, 0.32, 1],
              type: "tween"
            }
          }}
          className="fixed inset-0 z-[9999] overflow-hidden gpu-accelerated performance-optimized"
          style={{
            background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #b91c1c 50%, #dc2626 75%, #ef4444 100%)',
            willChange: 'transform, opacity, filter'
          }}
        >
          {/* Professional ambient background */}
          <div className="absolute inset-0 gpu-accelerated">
            {/* Sophisticated gradient overlays */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-yellow-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl gpu-accelerated"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.08, 0.25, 0.08],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/15 via-red-500/8 to-transparent rounded-full blur-3xl gpu-accelerated"
            />

            {/* Professional geometric patterns */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Main content container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Professional logo presentation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ 
                  opacity: logoLoaded ? 1 : 0, 
                  scale: logoLoaded ? 1 : 0.8, 
                  y: logoLoaded ? 0 : 40 
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3
                }}
                className="mb-16"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 5, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <motion.img
                    src="/minucst_logo_resized%201.png"
                    alt="MINUCST Logo"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto object-contain gpu-accelerated"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      imageRendering: 'crisp-edges',
                      filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3))'
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3)) brightness(1)',
                        'drop-shadow(0 12px 40px rgba(251, 191, 36, 0.4)) brightness(1.05)',
                        'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3)) brightness(1)'
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Professional glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent rounded-full blur-2xl"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Professional typography */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.0, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.8
                }}
                className="space-y-8"
              >
                {/* Main title with professional animation */}
                <motion.h1 
                  className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-light leading-[0.8] optimize-text"
                  style={{ 
                    fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      backgroundPosition: { 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                      textShadow: '0 4px 20px rgba(251, 191, 36, 0.3)'
                    }}
                  >
                    MINUCST XV
                  </motion.span>
                </motion.h1>

                {/* Professional subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: 1.2
                  }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-100 font-light leading-relaxed max-w-5xl mx-auto px-4"
                  style={{ 
                    fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.02em'
                  }}
                >
                  Modelo Internacional de las Naciones Unidas
                  <br />
                  <motion.span
                    animate={{
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    del Colegio Santa Teresa
                  </motion.span>
                </motion.p>

                {/* Professional theme presentation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: 1.6
                  }}
                  className="mt-12"
                >
                  <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent mb-4"
                      animate={{
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      "Educación por la Paz: Resiliencia y Cooperación para la Transformación Social"
                    </motion.h2>
                  </div>
                </motion.div>
              </motion.div>

              {/* Professional loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                className="mt-20"
              >
                {/* Progress bar */}
                <div className="w-80 h-1 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>

                {/* Loading text */}
                <motion.p 
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-yellow-200/90 text-lg font-light"
                >
                  {loadingProgress < 25 && 'Cargando recursos críticos...'}
                  {loadingProgress >= 25 && loadingProgress < 50 && 'Optimizando tipografías...'}
                  {loadingProgress >= 50 && loadingProgress < 75 && 'Preparando componentes...'}
                  {loadingProgress >= 75 && loadingProgress < 100 && 'Finalizando carga...'}
                  {loadingProgress === 100 && 'Iniciando experiencia diplomática...'}
                </motion.p>

                {/* Professional loading dots */}
                <div className="flex justify-center space-x-2 mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-yellow-400/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Professional floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
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