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
    img.src = "/minucst_logo_resized 1 copy.png";

    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 2.5; // Progreso más lento para 4.2 segundos
      setProgress(Math.min(progressValue, 100));

      if (progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 100); // Intervalo ajustado para 4.2 segundos total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-red-800 flex items-center justify-center"
      >
        {/* Efectos de fondo completos */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-red-400/10 rounded-full blur-2xl opacity-30" />
          <div className="absolute bottom-1/3 right-1/3 w-[150px] h-[150px] bg-yellow-300/8 rounded-full blur-xl opacity-25" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          {/* Logo tamaño original */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: logoLoaded ? 1 : 0, 
              scale: logoLoaded ? 1 : 0.5
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 flex justify-center"
          >
            <motion.img
              src="/minucst_logo_resized 1 copy.png"
              alt="MINUCST Logo"
              className="w-80 h-auto object-contain filter drop-shadow-2xl gpu-accelerated"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop";
              }}
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                  'drop-shadow(0 0 60px rgba(251, 191, 36, 0.8))',
                  'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                ]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
          
          {/* Título completo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.h1 
              className="text-7xl md:text-9xl lg:text-[10rem] font-bold leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              animate={{
                textShadow: [
                  '0 0 30px rgba(251, 191, 36, 0.6)',
                  '0 0 60px rgba(251, 191, 36, 1)',
                  '0 0 30px rgba(251, 191, 36, 0.6)'
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                MINUCST
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent text-6xl md:text-8xl lg:text-[8rem] mt-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  backgroundPosition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                XV
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-yellow-100 font-light mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Modelo Internacional de las Naciones Unidas
            </motion.p>
            
            <motion.p 
              className="text-xl text-red-100"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Colegio Santa Teresa • Santo Domingo Este
            </motion.p>
          </motion.div>

          {/* Barra de progreso completa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-96 h-4 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden backdrop-blur-sm border border-white/30">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full relative overflow-hidden"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="text-yellow-200 text-3xl font-bold mb-4"
              animate={{ 
                scale: [1, 1.1, 1],
                filter: [
                  'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))',
                  'drop-shadow(0 0 30px rgba(251, 191, 36, 1))',
                  'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round(progress)}%
            </motion.div>
            
            <motion.p 
              className="text-red-100 text-lg font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Preparando la experiencia diplomática más importante del Caribe...
            </motion.p>
          </motion.div>

          {/* Elementos decorativos */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-amber-400/40 rounded-full animate-bounce" />
          <div className="absolute top-1/3 right-10 w-1 h-1 bg-red-300/50 rounded-full animate-ping" />
          <div className="absolute bottom-1/3 left-10 w-2 h-2 bg-yellow-300/30 rounded-full animate-pulse" />
        </div>

        {/* Partículas flotantes */}
        {[...Array(8)].map((_, i) => (
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
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;