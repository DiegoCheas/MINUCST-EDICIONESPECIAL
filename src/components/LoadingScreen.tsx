import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Precargar el logo
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = "/minucst_logo_resized%201.png";

    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10; // Mucho más rápido
      setProgress(Math.min(progressValue, 100));

      if (progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 200); // Reducido de 500ms a 200ms
      }
    }, 50); // Reducido de 80ms a 50ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.3, ease: "easeOut" } // Reducido de 0.8s
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center"
      >
        {/* Efectos de fondo mínimos */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-2xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-[150px] h-[150px] bg-amber-400/8 rounded-full blur-2xl opacity-40" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          {/* Logo optimizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: logoLoaded ? 1 : 0, 
              scale: logoLoaded ? 1 : 0.8
            }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Reducido
            className="mb-6 flex justify-center"
          >
            <img
              src="/minucst_logo_resized%201.png"
              alt="MINUCST Logo"
              className="w-48 h-48 object-contain" // Reducido de 256px
              loading="eager"
            />
          </motion.div>
          
          {/* Título simplificado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }} // Reducido
            className="mb-8"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold leading-tight mb-3"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                MINUCST
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-5xl mt-1">
                XV
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-yellow-200 font-light">
              Modelo Internacional de las Naciones Unidas
            </p>
          </motion.div>

          {/* Barra de progreso simplificada */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mb-4"
          >
            <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            
            <div className="text-yellow-300 text-lg font-bold">
              {Math.round(progress)}%
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;