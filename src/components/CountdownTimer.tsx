import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap, Star, Sparkles } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-03-20T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };

        setTimeLeft(newTime);
        
        // Trigger pulse animation when seconds change
        if (newTime.seconds !== timeLeft.seconds) {
          setPulseKey(prev => prev + 1);
        }
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    setIsLoaded(true);
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [timeLeft.seconds]);

  const timeUnits = [
    { key: 'days', value: timeLeft.days, label: 'Días', color: 'from-red-500 to-red-600', glow: 'rgba(239, 68, 68, 0.3)' },
    { key: 'hours', value: timeLeft.hours, label: 'Horas', color: 'from-yellow-500 to-amber-500', glow: 'rgba(251, 191, 36, 0.3)' },
    { key: 'minutes', value: timeLeft.minutes, label: 'Min', color: 'from-amber-500 to-orange-500', glow: 'rgba(245, 158, 11, 0.3)' },
    { key: 'seconds', value: timeLeft.seconds, label: 'Seg', color: 'from-orange-500 to-red-500', glow: 'rgba(249, 115, 22, 0.3)' }
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    initial: { 
      y: 10, 
      opacity: 0,
      scale: 0.9
    },
    animate: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      y: -10, 
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="relative bg-gradient-to-br from-black/20 via-black/15 to-black/8 backdrop-blur-3xl border border-yellow-400/25 rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-center gpu-accelerated glass-morphism overflow-hidden"
      whileHover={{ 
        scale: 1.01,
        filter: 'drop-shadow(0 12px 24px rgba(251, 191, 36, 0.2))',
        borderColor: 'rgba(251, 191, 36, 0.4)'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
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

      {/* Subtle pulsing border effect */}
      <motion.div
        key={pulseKey}
        className="absolute inset-0 border-2 border-yellow-400/30 rounded-2xl lg:rounded-3xl"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: 1.03, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center justify-center mb-6 lg:mb-10 relative"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          className="relative"
        >
          <Clock className="w-6 lg:w-10 h-6 lg:h-10 text-yellow-400 mr-3" />
          <motion.div
            className="absolute inset-0 bg-yellow-400/15 rounded-full blur-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.h3 
          className="text-xl lg:text-3xl font-bold text-white optimize-text"
          whileHover={{ 
            scale: 1.03,
            filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
          }}
        >
          Cuenta Regresiva
        </motion.h3>

        <motion.div
          className="absolute -right-3 -top-3"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>
      </motion.div>
      
      {/* Countdown grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-4 gap-3 lg:gap-6"
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.key}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              filter: `drop-shadow(0 10px 20px ${unit.glow})`
            }}
            className="relative group desktop-interactive"
          >
            {/* Background glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${unit.color} rounded-xl lg:rounded-2xl blur-lg opacity-15`}
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ 
                duration: 3 + index * 0.4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main container */}
            <motion.div
              className={`relative bg-gradient-to-br ${unit.color} backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-5 shadow-lg border border-white/15 overflow-hidden`}
              whileHover={{ 
                boxShadow: `0 15px 30px ${unit.glow}`,
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />

              {/* Number display */}
              <div className="relative h-8 lg:h-12 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${unit.key}-${unit.value}`}
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-2xl lg:text-4xl font-black text-white optimize-text"
                    style={{ 
                      textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))'
                    }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Label */}
              <motion.div 
                className="text-xs lg:text-base text-white/90 font-bold mt-2 capitalize optimize-text"
                whileHover={{ scale: 1.03 }}
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
              >
                {unit.label}
              </motion.div>

              {/* Progress indicator */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/25 rounded-full"
                initial={{ width: '0%' }}
                animate={{ 
                  width: unit.key === 'seconds' ? `${(60 - unit.value) / 60 * 100}%` : '100%'
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Floating icon */}
              <motion.div
                className="absolute top-1.5 right-1.5 opacity-15"
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.7, 1.1, 0.7]
                }}
                transition={{ 
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-2 h-2 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer message */}
      <motion.div
        variants={itemVariants}
        className="mt-6 lg:mt-10 relative"
      >
        <motion.p 
          className="text-base lg:text-lg text-yellow-200/90 font-bold optimize-text"
          animate={{ 
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ¡El futuro de la diplomacia comienza pronto!
        </motion.p>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute -left-4 top-1/2 transform -translate-y-1/2"
          animate={{ 
            x: [0, 3, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute -right-4 top-1/2 transform -translate-y-1/2"
          animate={{ 
            x: [0, -3, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Ambient lighting effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/4 via-transparent to-amber-400/4 rounded-2xl lg:rounded-3xl pointer-events-none"
        animate={{ 
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default CountdownTimer;