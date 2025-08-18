import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react';
import { NEWS_ITEMS } from '../utils/constants';
import { useTheme } from '../contexts/ThemeContext';

const News: React.FC = () => {
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
        staggerChildren: 0.2
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
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
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
            Noticias y <span className="text-red-700">Actualizaciones</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Mantente informado sobre las últimas novedades, anuncios importantes 
            y preparativos para MINUCST 2026.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {NEWS_ITEMS.map((item, index) => (
            <motion.article 
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className={`group cursor-pointer ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className={`relative ${index === 0 ? 'h-80' : 'h-48'}`}>
                  <img 
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {item.category}
                    </motion.span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className={`p-6 ${index === 0 ? 'space-y-4' : 'space-y-3'}`}>
                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
                    index === 0 ? 'text-base' : 'text-sm'
                  }`}>
                    {item.summary}
                  </p>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-red-700 dark:text-red-400 font-semibold transition-transform duration-200"
                  >
                    <span className="text-sm">Leer más</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                <Newspaper className="w-6 h-6 text-red-700 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Blog MINUCST
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Artículos y reflexiones escritas por participantes, organizadores 
              y expertos en relaciones internacionales.
            </p>
            <div className="space-y-4">
              {[
                { title: '"El futuro de la diplomacia juvenil"', author: 'Por María González, Delegada 2024', color: 'red' },
                { title: '"Inteligencia Artificial y Gobernanza Global"', author: 'Por Dr. Carlos Mendoza, Asesor Académico', color: 'yellow' },
                { title: '"Mi experiencia en el Consejo de Seguridad"', author: 'Por Ana Rodríguez, Delegada 2023', color: 'blue' }
              ].map((article, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`border-l-4 border-${article.color}-700 pl-4 cursor-pointer`}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{article.author}</p>
                </motion.div>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-6 text-red-700 dark:text-red-400 font-semibold hover:text-red-800 dark:hover:text-red-300 transition-colors"
            >
              Ver todos los artículos →
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-red-700 to-red-600 dark:from-red-800 dark:to-red-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              Suscríbete a Nuestro Boletín
            </h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              Recibe las últimas actualizaciones, fechas importantes y contenido 
              exclusivo directamente en tu correo electrónico.
            </p>
            <div className="space-y-4">
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-200"
              />
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Suscribirse
              </motion.button>
            </div>
            <p className="text-red-100 text-sm mt-4">
              * No compartimos tu información con terceros
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;