import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('Inicializando...');

  useEffect(() => {
    const messages = [
      'Inicializando plataforma educativa...',
      'Cargando identidad institucional...',
      'Preparando experiencia diplomática...',
      'Activando protocolos internacionales...',
      'Finalizando configuración...'
    ];

    let progressValue = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {
      progressValue += 2;
      setProgress(progressValue);

      // Cambiar mensaje cada 20%
      const newMessageIndex = Math.floor(progressValue / 20);
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
    }, 100); // 10 segundos total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center"
      >
        {/* Efectos de fondo */}
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
              ease: "easeInOut"
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
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-3xl"
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.img
              src="/minucst_logo_resized%201.png"
              alt="MINUCST Logo"
              className="w-32 h-32 mx-auto object-contain mb-8"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(251, 191, 36, 0.3))'
              }}
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                MINUCST
              </span>
              <br />
              <span className="text-4xl bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                XV
              </span>
            </motion.h1>
          </motion.div>

          {/* Barra de progreso */}
          <div className="mb-8">
            <div className="w-80 h-2 bg-white/20 rounded-full mx-auto mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            <motion.p 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-yellow-200 text-lg mb-4"
            >
              {currentMessage}
            </motion.p>
            
            <div className="text-yellow-300 text-xl font-bold">
              {progress}%
            </div>
          </div>

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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;