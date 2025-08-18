import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

// Estados de la máquina de estados finita
type LoadingState = 'initializing' | 'logo-spinning' | 'logo-flash' | 'text-reveal' | 'page-reveal' | 'complete';

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentState, setCurrentState] = useState<LoadingState>('initializing');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  // Texto principal para animación letter-by-letter
  const mainText = "MINUCST XV";
  const themeText = "Educación por la Paz: Resiliencia y Cooperación para la Transformación Social";

  // Máquina de estados finita
  useEffect(() => {
    const stateMachine = {
      'initializing': () => {
        setTimeout(() => setCurrentState('logo-spinning'), 500);
      },
      'logo-spinning': () => {
        setTimeout(() => setCurrentState('logo-flash'), 2000);
      },
      'logo-flash': () => {
        setTimeout(() => setCurrentState('text-reveal'), 800);
      },
      'text-reveal': () => {
        setTimeout(() => setCurrentState('page-reveal'), 3000);
      },
      'page-reveal': () => {
        setTimeout(() => setCurrentState('complete'), 1500);
      },
      'complete': () => {
        onComplete();
      }
    };

    stateMachine[currentState]?.();
  }, [currentState, onComplete]);

  // Preload del logo con callback
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLogoLoaded(true);
      setProgress(25);
    };
    img.onerror = () => setLogoLoaded(true);
    img.src = '/minucst_logo_resized%201.png';
  }, []);

  // Animación de texto letter-by-letter con requestAnimationFrame
  useEffect(() => {
    if (currentState === 'text-reveal') {
      let index = 0;
      const animateText = () => {
        if (index < mainText.length) {
          setTextIndex(index);
          index++;
          setTimeout(() => {
            animationFrameRef.current = requestAnimationFrame(animateText);
          }, 100); // 100ms delay entre letras
        }
      };
      animateText();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentState, mainText.length]);

  // Efecto WebGL para destello del logo
  useEffect(() => {
    if (currentState === 'logo-flash' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 400;
      canvas.height = 400;

      let flashIntensity = 0;
      const maxIntensity = 1;
      const flashDuration = 800;
      const startTime = Date.now();

      const renderFlash = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / flashDuration, 1);
        
        // Curva cubic-bezier para suavidad
        const easeOut = 1 - Math.pow(1 - progress, 3);
        flashIntensity = maxIntensity * (1 - easeOut);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Crear gradiente radial para el destello
        const gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
        gradient.addColorStop(0, `rgba(251, 191, 36, ${flashIntensity})`);
        gradient.addColorStop(0.5, `rgba(251, 191, 36, ${flashIntensity * 0.5})`);
        gradient.addColorStop(1, `rgba(251, 191, 36, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (progress < 1) {
          requestAnimationFrame(renderFlash);
        }
      };

      renderFlash();
    }
  }, [currentState]);

  // Progreso simulado
  useEffect(() => {
    const progressStates = {
      'initializing': 10,
      'logo-spinning': 30,
      'logo-flash': 60,
      'text-reveal': 85,
      'page-reveal': 95,
      'complete': 100
    };

    const targetProgress = progressStates[currentState];
    const currentProgress = progress;
    const diff = targetProgress - currentProgress;
    
    if (diff > 0) {
      const increment = diff / 20;
      const timer = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + increment;
          if (newProgress >= targetProgress) {
            clearInterval(timer);
            return targetProgress;
          }
          return newProgress;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [currentState, progress]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)",
          transition: { 
            duration: 1.5, 
            ease: [0.23, 1, 0.32, 1]
          }
        }}
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 25%, #991b1b 50%, #dc2626 75%, #ef4444 100%)',
          willChange: 'transform, opacity, filter'
        }}
      >
        {/* Efectos de fondo futuristas */}
        <div className="absolute inset-0">
          {/* Orbes de gradiente con movimiento complejo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1.1, 1],
              opacity: [0.1, 0.3, 0.2, 0.1],
              rotate: [0, 180, 360],
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-radial from-yellow-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl"
          />
          
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.4, 1.2],
              opacity: [0.08, 0.25, 0.15, 0.08],
              rotate: [360, 180, 0],
              x: [0, -120, 80, 0],
              y: [0, 100, -60, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/15 via-red-500/8 to-transparent rounded-full blur-3xl"
          />

          {/* Líneas futuristas */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Partículas flotantes optimizadas */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Logo 3D con efectos avanzados */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ 
                opacity: logoLoaded ? 1 : 0, 
                scale: logoLoaded ? 1 : 0.5,
                rotateY: logoLoaded ? 0 : -180
              }}
              transition={{ 
                duration: 2, 
                ease: [0.23, 1, 0.32, 1],
                delay: 0.5
              }}
              className="mb-16 perspective-1000 relative"
            >
              {/* Canvas para efectos WebGL */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  width: '100%',
                  height: '100%',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%'
                }}
              />

              <motion.div
                animate={{
                  rotateY: currentState === 'logo-spinning' ? [0, 360] : 0,
                  rotateX: currentState === 'logo-spinning' ? [0, 15, -15, 0] : 0,
                  scale: currentState === 'logo-flash' ? [1, 1.1, 1] : 1,
                  z: [0, 50, 0]
                }}
                transition={{
                  rotateY: { 
                    duration: currentState === 'logo-spinning' ? 2 : 0, 
                    ease: "easeInOut" 
                  },
                  rotateX: { 
                    duration: currentState === 'logo-spinning' ? 2 : 0, 
                    ease: "easeInOut" 
                  },
                  scale: { 
                    duration: currentState === 'logo-flash' ? 0.8 : 0, 
                    ease: [0.23, 1, 0.32, 1] 
                  },
                  z: { 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className="relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)'
                }}
              >
                <motion.img
                  src="/minucst_logo_resized%201.png"
                  alt="MINUCST Logo"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto object-contain"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    imageRendering: 'crisp-edges',
                    filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4))'
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4)) brightness(1)',
                      'drop-shadow(0 30px 80px rgba(251, 191, 36, 0.6)) brightness(1.1)',
                      'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4)) brightness(1)'
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Capas de glow 3D */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-yellow-400/25 via-amber-400/10 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d', 
                    transform: 'translateZ(-30px)' 
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Texto principal con animación letter-by-letter */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.23, 1, 0.32, 1],
                delay: 1.5
              }}
              className="space-y-8"
              role="main"
              aria-live="polite"
            >
              {/* Título principal con animación letter-by-letter */}
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.8]"
                style={{ 
                  fontFamily: 'Bebas Neue, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}
              >
                {mainText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      y: 50, 
                      rotateX: -90,
                      scale: 0.5
                    }}
                    animate={{ 
                      opacity: currentState === 'text-reveal' && index <= textIndex ? 1 : 0,
                      y: currentState === 'text-reveal' && index <= textIndex ? 0 : 50,
                      rotateX: currentState === 'text-reveal' && index <= textIndex ? 0 : -90,
                      scale: currentState === 'text-reveal' && index <= textIndex ? 1 : 0.5
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                      delay: index * 0.1
                    }}
                    className="inline-block bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent"
                    style={{ 
                      transformOrigin: 'center bottom',
                      textShadow: '0 8px 32px rgba(251, 191, 36, 0.4)'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Tema oficial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: currentState === 'text-reveal' ? 1 : 0,
                  scale: currentState === 'text-reveal' ? 1 : 0.9
                }}
                transition={{ 
                  duration: 1, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 2.5
                }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-yellow-400/20 rounded-3xl p-8 md:p-12">
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent mb-4"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  >
                    {themeText.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ 
                          opacity: currentState === 'text-reveal' ? 1 : 0,
                          rotateY: currentState === 'text-reveal' ? 0 : -90
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 3.0 + index * 0.05,
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

            {/* Indicador de progreso avanzado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="mt-16"
            >
              {/* Barra de progreso con efectos */}
              <div className="w-80 h-2 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden backdrop-blur-sm border border-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full relative"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Efecto shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              {/* Texto de estado */}
              <motion.p 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-yellow-200/90 text-lg font-light mb-4"
              >
                {currentState === 'initializing' && 'Inicializando sistema diplomático...'}
                {currentState === 'logo-spinning' && 'Cargando identidad institucional...'}
                {currentState === 'logo-flash' && 'Activando protocolos de paz...'}
                {currentState === 'text-reveal' && 'Preparando experiencia transformadora...'}
                {currentState === 'page-reveal' && 'Ingresando al mundo de la diplomacia...'}
              </motion.p>

              {/* Indicadores de carga */}
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-yellow-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
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

              {/* Porcentaje */}
              <motion.div
                className="mt-4 text-yellow-300/80 text-base font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Reveal effect vertical */}
        <AnimatePresence>
          {currentState === 'page-reveal' && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ 
                duration: 1.5, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="absolute inset-0 bg-gradient-to-t from-white via-gray-100 to-white z-20"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;