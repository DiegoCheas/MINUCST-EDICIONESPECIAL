import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, MessageCircle } from 'lucide-react';
import { COMMITTEES } from '../utils/constants';
import { useTheme } from '../contexts/ThemeContext';

const Committees: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="committees" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Comités <span className="text-red-700">Oficiales</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Doce comités especializados diseñados para abordar los desafíos más 
            relevantes de la agenda internacional contemporánea.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {COMMITTEES.map((committee, index) => (
            <motion.div 
              key={committee.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                    {committee.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {committee.description}
                  </p>
                </div>
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm"
                >
                  {index + 1}
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4 text-red-700" />
                  <span className="text-xs">{committee.delegates} delegados</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Globe className="w-4 h-4 text-red-700" />
                  <span className="text-xs">{committee.language}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center text-sm">
                    <MessageCircle className="w-4 h-4 text-red-700 mr-2" />
                    Temas de Debate
                  </h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    {committee.mode}
                  </span>
                </div>
                <div className="space-y-2">
                  {committee.topics.map((topic, topicIndex) => (
                    <motion.div 
                      key={topicIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.5 + topicIndex * 0.1 }}
                      className="bg-white dark:bg-gray-600 rounded-lg p-2 shadow-sm border-l-4 border-red-700"
                    >
                      <span className="text-gray-700 dark:text-gray-200 text-xs">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 text-sm"
              >
                Aplicar a este Comité
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Committees;