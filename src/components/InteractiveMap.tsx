import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Plane } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 h-64 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-red-700 p-4 rounded-full mb-4 shadow-lg"
        >
          <MapPin className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Colegio Santa Teresa
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Calle Jesús de Galíndez<br />
          Santo Domingo Este, República Dominicana
        </p>
        
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Navigation className="w-4 h-4" />
            <span className="text-sm">Direcciones</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Car className="w-4 h-4" />
            <span className="text-sm">Parking</span>
          </motion.button>
        </div>
        
        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-yellow-500"
          >
            <Plane className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400">
        Mapa interactivo completo próximamente
      </div>
    </motion.div>
  );
};

export default InteractiveMap;