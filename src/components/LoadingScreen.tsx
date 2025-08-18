import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('Inicializando plataforma educativa...');
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Precargar el logo
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = "/minucst_logo_resized%201.png";

    const messages = [
      'Inicializando plataforma educativa de excelencia...',
      'Cargando identidad institucional del Colegio Santa Teresa...',
      'Preparando experiencia diplomática internacional...',
      'Activando protocolos de Naciones Unidas...',
      'Configurando ambiente de liderazgo global...',
      'Finalizando preparativos para MINUCST XV...'
    ];

    let progressValue = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {
      progressValue += 2;
      setProgress(Math.min(progressValue, 100));

      // Cambiar mensaje cada ~16%
      const newMessageIndex = Math.floor(progressValue / 16);
      if (newMessageIndex < messages.length && newMessageIndex !== messageIndex) {
        messageIndex = newMessageIndex;
        setCurrentMessage(messages[messageIndex]);
      }

      if (progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 80); // Más rápido

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.02,
          filter: 'blur(8px)',
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center overflow-hidden"
      >
        {/* Efectos de fondo optimizados */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.25, 0.08]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-3xl"
          />

          {/* Partículas reducidas */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-400/25 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random(),
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo optimizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: logoLoaded ? 1 : 0, 
              scale: logoLoaded ? 1 : 0.5
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="/minucst_logo_resized%201.png"
                alt="MINUCST Logo"
                className="w-64 h-64 object-contain"
                style={{ transform: 'scaleX(-1)' }}
                loading="eager"
              />
              
              {/* Destello optimizado */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Título optimizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
              }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                MINUCST
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl mt-2"
                animate={{
                  textShadow: [
                    '0 0 15px rgba(251, 191, 36, 0.5)',
                    '0 0 25px rgba(251, 191, 36, 0.8)',
                    '0 0 15px rgba(251, 191, 36, 0.5)'
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
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl md:text-2xl text-yellow-200 font-light tracking-wide"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
              }}
            >
              Modelo Internacional de las Naciones Unidas
              <br />
              <span className="text-lg md:text-xl text-amber-300">
                Colegio Santa Teresa
              </span>
            </motion.p>
          </motion.div>

          {/* Barra de progreso optimizada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-80 h-2.5 bg-white/10 rounded-full mx-auto mb-4 overflow-hidden backdrop-blur-sm border border-yellow-400/20">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full relative"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
            
            <motion.p 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-yellow-200 text-base mb-3 min-h-[1.2rem]"
            >
              {currentMessage}
            </motion.p>
            
            <motion.div 
              className="text-yellow-300 text-xl font-bold"
              animate={{
                textShadow: [
                  '0 0 8px rgba(251, 191, 36, 0.4)',
                  '0 0 15px rgba(251, 191, 36, 0.7)',
                  '0 0 8px rgba(251, 191, 36, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {Math.round(progress)}%
            </motion.div>
          </motion.div>

          {/* Indicadores optimizados */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex justify-center space-x-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 bg-yellow-400/50 rounded-full"
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
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;