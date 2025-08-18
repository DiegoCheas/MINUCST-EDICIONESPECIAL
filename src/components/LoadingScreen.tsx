import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    // Preload critical resources with progress tracking
    const preloadResources = async () => {
      const resources = [
        // Preload logo with high priority
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLogoLoaded(true);
            setLoadingProgress(25);
            setCurrentPhase(1);
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
              setLoadingProgress(50);
              setCurrentPhase(2);
              resolve();
            }).catch(() => resolve());
          } else {
            resolve();
          }
        }),
        
        // Simulate critical CSS/JS loading
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setLoadingProgress(75);
            setCurrentPhase(3);
            resolve();
          }, 1200);
        }),

        // Final resources
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setLoadingProgress(100);
            setCurrentPhase(4);
            setResourcesLoaded(true);
            resolve();
          }, 2000);
        })
      ];

      await Promise.all(resources);
    };

    preloadResources();

    // Professional exit timing
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1500); // Smooth exit duration
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const loadingTexts = [
    'Inicializando experiencia diplomática...',
    'Cargando recursos críticos...',
    'Optimizando componentes...',
    'Preparando simulación...',
    'Entrando al mundo de la diplomacia...'
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { 
              duration: 1.5, 
              ease: [0.23, 1, 0.32, 1],
              type: "tween"
            }
          }}
          className="fixed inset-0 z-[9999] overflow-hidden gpu-accelerated performance-optimized"
          style={{
            background: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 15%, #991b1b 35%, #b91c1c 55%, #dc2626 75%, #ef4444 90%, #f87171 100%)',
            willChange: 'transform, opacity, filter'
          }}
        >
          {/* Advanced 3D Background Effects */}
          <div className="absolute inset-0 gpu-accelerated">
            {/* Primary gradient orb */}
            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1.2, 1],
                opacity: [0.15, 0.4, 0.25, 0.15],
                rotate: [0, 180, 360],
                x: [0, 100, -50, 0],
                y: [0, -80, 40, 0]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-10 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/25 via-amber-500/15 to-transparent rounded-full blur-3xl gpu-accelerated"
            />
            
            {/* Secondary gradient orb */}
            <motion.div 
              animate={{ 
                scale: [1.3, 1, 1.5, 1.3],
                opacity: [0.12, 0.35, 0.18, 0.12],
                rotate: [360, 180, 0],
                x: [0, -120, 80, 0],
                y: [0, 100, -60, 0]
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-orange-500/20 via-red-500/12 to-transparent rounded-full blur-3xl gpu-accelerated"
            />

            {/* Tertiary accent orb */}
            <motion.div 
              animate={{ 
                scale: [1, 1.6, 0.8, 1],
                opacity: [0.08, 0.3, 0.15, 0.08],
                rotate: [0, -90, -180, -270, -360],
                x: [0, 150, -100, 50, 0],
                y: [0, -120, 80, -40, 0]
              }}
              transition={{ 
                duration: 35, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-400/18 via-yellow-500/10 to-transparent rounded-full blur-3xl gpu-accelerated"
            />

            {/* Advanced geometric patterns */}
            <motion.div 
              className="absolute inset-0 opacity-8"
              animate={{
                backgroundPosition: ['0% 0%', '50% 50%', '100% 100%', '0% 0%'],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }}
            />

            {/* Professional floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/25 rounded-full blur-sm gpu-accelerated"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.1, 0.6, 0.1],
                  scale: [1, 1.8, 1]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-5xl mx-auto">
              
              {/* Professional 3D logo presentation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 60, rotateX: -30 }}
                animate={{ 
                  opacity: logoLoaded ? 1 : 0, 
                  scale: logoLoaded ? 1 : 0.6, 
                  y: logoLoaded ? 0 : 60,
                  rotateX: logoLoaded ? 0 : -30
                }}
                transition={{ 
                  duration: 1.8, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.5
                }}
                className="mb-20 perspective-1000"
              >
                <motion.div
                  animate={{
                    rotateY: [0, 8, -8, 0],
                    rotateX: [0, 4, -4, 0],
                    scale: [1, 1.05, 1],
                    z: [0, 50, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.img
                    src="/minucst_logo_resized%201.png"
                    alt="MINUCST Logo"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto object-contain gpu-accelerated"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      imageRendering: 'crisp-edges',
                      filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4))'
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4)) brightness(1)',
                        'drop-shadow(0 30px 80px rgba(251, 191, 36, 0.5)) brightness(1.08)',
                        'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4)) brightness(1)'
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* 3D glow layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-amber-400/15 to-transparent rounded-full blur-3xl"
                    animate={{
                      scale: [0.6, 1.4, 0.6],
                      opacity: [0.2, 0.7, 0.2],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-20px)' }}
                  />
                  
                  {/* Secondary glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-red-400/20 via-transparent to-transparent rounded-full blur-2xl"
                    animate={{
                      scale: [1.2, 0.8, 1.2],
                      opacity: [0.15, 0.4, 0.15],
                      rotate: [360, 180, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-40px)' }}
                  />
                </motion.div>
              </motion.div>

              {/* Advanced animated typography */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 1.2
                }}
                className="space-y-12"
              >
                {/* Main title with advanced text animation */}
                <motion.h1 
                  className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-light leading-[0.75] optimize-text"
                  style={{ 
                    fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.02em'
                  }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      textShadow: [
                        '0 8px 32px rgba(251, 191, 36, 0.3)',
                        '0 12px 48px rgba(251, 191, 36, 0.5)',
                        '0 8px 32px rgba(251, 191, 36, 0.3)'
                      ]
                    }}
                    transition={{
                      backgroundPosition: { 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      },
                      textShadow: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  >
                    {/* Letter by letter animation */}
                    {'MINUCST XV'.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 1.5 + index * 0.1,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        className="inline-block"
                        style={{ transformOrigin: 'center bottom' }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.h1>

                {/* Professional subtitle with wave animation */}
                <motion.p 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.0, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: 2.5
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-100 font-light leading-relaxed max-w-6xl mx-auto px-4"
                  style={{ 
                    fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.02em'
                  }}
                >
                  {'Modelo Internacional de las Naciones Unidas del Colegio Santa Teresa'.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 2.8 + index * 0.1,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>

                {/* Professional theme presentation with morphing effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1.0, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: 3.5
                  }}
                  className="mt-16"
                >
                  <div className="bg-gradient-to-r from-white/12 via-white/8 to-white/12 backdrop-blur-2xl border border-yellow-400/25 rounded-3xl p-10 md:p-16 max-w-6xl mx-auto">
                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent mb-6"
                      animate={{
                        scale: [1, 1.03, 1],
                        filter: [
                          'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                          'brightness(1.1) drop-shadow(0 0 40px rgba(251, 191, 36, 0.6))',
                          'brightness(1) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {'"Educación por la Paz: Resiliencia y Cooperación para la Transformación Social"'.split(' ').map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, rotateY: -90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 4.0 + index * 0.08,
                            ease: [0.23, 1, 0.32, 1]
                          }}
                          className="inline-block mr-2"
                          style={{ transformOrigin: 'center' }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h2>
                  </div>
                </motion.div>
              </motion.div>

              {/* Advanced loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 0.8 }}
                className="mt-24"
              >
                {/* Progress bar with gradient animation */}
                <div className="w-96 h-2 bg-white/15 rounded-full mx-auto mb-8 overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full relative"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {/* Shimmer effect on progress bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Dynamic loading text with typewriter effect */}
                <motion.p 
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-yellow-200/95 text-xl font-light mb-6"
                >
                  <motion.span
                    key={currentPhase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {loadingTexts[currentPhase] || loadingTexts[0]}
                  </motion.span>
                </motion.p>

                {/* Professional loading dots with wave animation */}
                <div className="flex justify-center space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-yellow-400/70 rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Progress percentage */}
                <motion.div
                  className="mt-6 text-yellow-300/80 text-lg font-medium"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {loadingProgress}%
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Professional floating elements with 3D effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/25 rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  x: [0, Math.random() * 60 - 30, 0],
                  opacity: [0.1, 0.6, 0.1],
                  scale: [1, 2, 1],
                  rotateZ: [0, 360]
                }}
                transition={{
                  duration: 12 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 4,
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