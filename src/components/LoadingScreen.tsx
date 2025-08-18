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
      progressValue += 1.5;
      setProgress(Math.min(progressValue, 100));

      // Cambiar mensaje cada ~15%
      const newMessageIndex = Math.floor(progressValue / 16);
      if (newMessageIndex < messages.length && newMessageIndex !== messageIndex) {
        messageIndex = newMessageIndex;
        setCurrentMessage(messages[messageIndex]);
      }

      if (progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 120); // ~12 segundos total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          filter: 'blur(10px)',
          transition: { duration: 1.2, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center overflow-hidden"
      >
        {/* Efectos de fondo cinematográficos */}
        <div className="absolute inset-0">
          {/* Gradientes animados de fondo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.3, 1, 1.3],
              opacity: [0.08, 0.3, 0.08],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-400/15 rounded-full blur-3xl"
          />

          {/* Partículas flotantes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
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
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Líneas de energía */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo 3D espectacular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ 
              opacity: logoLoaded ? 1 : 0, 
              scale: logoLoaded ? 1 : 0.3
            }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="mb-12 perspective-1000"
          >
            <div className="relative">
              <motion.img
                src="/minucst_logo_resized%201.png"
                alt="MINUCST Logo"
                className="w-80 h-80 mx-auto object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              
              {/* Destello elegante */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Brillo sutil */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-400/20 rounded-full"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Nombre completo del modelo - ESPECTACULAR */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                textShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.4)'
              }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  textShadow: [
                    '0 0 30px rgba(251, 191, 36, 0.8)',
                    '0 0 50px rgba(251, 191, 36, 1)',
                    '0 0 30px rgba(251, 191, 36, 0.8)'
                  ]
                }}
                transition={{
                  backgroundPosition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                MINUCST
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-6xl md:text-7xl lg:text-8xl mt-4"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.6)',
                    '0 0 40px rgba(251, 191, 36, 0.9)',
                    '0 0 20px rgba(251, 191, 36, 0.6)'
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
              transition={{ delay: 2.5, duration: 1 }}
              className="text-2xl md:text-3xl text-yellow-200 font-light tracking-wide"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              Modelo Internacional de las Naciones Unidas
              <br />
              <span className="text-xl md:text-2xl text-amber-300">
                Colegio Santa Teresa
              </span>
            </motion.p>
          </motion.div>

          {/* Barra de progreso cinematográfica */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mb-8"
          >
            <div className="w-96 h-3 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden backdrop-blur-sm border border-yellow-400/20">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full relative"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Efecto de brillo en la barra */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
            
            <motion.p 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-yellow-200 text-lg mb-4 min-h-[1.5rem]"
            >
              {currentMessage}
            </motion.p>
            
            <motion.div 
              className="text-yellow-300 text-2xl font-bold"
              animate={{
                scale: [1, 1.1, 1],
                textShadow: [
                  '0 0 10px rgba(251, 191, 36, 0.5)',
                  '0 0 20px rgba(251, 191, 36, 0.8)',
                  '0 0 10px rgba(251, 191, 36, 0.5)'
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

          {/* Indicadores de carga elegantes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="flex justify-center space-x-3"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-yellow-400/60 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4],
                  boxShadow: [
                    '0 0 5px rgba(251, 191, 36, 0.3)',
                    '0 0 15px rgba(251, 191, 36, 0.8)',
                    '0 0 5px rgba(251, 191, 36, 0.3)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Efectos de luz ambiental */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/4 via-transparent to-amber-400/4 rounded-full pointer-events-none"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

export default LoadingScreen