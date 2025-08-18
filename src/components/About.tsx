import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
            Acerca de <span className="text-red-700">MINUCST 2026</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Una experiencia educativa única que forma ciudadanos globales comprometidos 
            con la paz, el desarrollo sostenible y la justicia internacional.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Sesión de debate MINUCST"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Excelencia Académica y Diplomática
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              MINUCST 2026 se define por su rigurosidad en el debate y su enfoque en la 
              formación de jóvenes líderes. Nuestros estudiantes asumen roles diplomáticos 
              como delegados de países miembros de la ONU, enfrentando desafíos geopolíticos 
              contemporáneos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Con doce comités cuidadosamente seleccionados y actualizados, abordamos temas 
              actuales como derechos humanos, medioambiente, inteligencia artificial, 
              conflictos armados y salud pública global.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-red-700 to-red-600 dark:from-red-800 dark:to-red-700 rounded-2xl p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">
                Una Experiencia Transformadora
              </h3>
              <p className="text-red-100 leading-relaxed mb-6">
                Durante tres días intensivos, los participantes vivirán la experiencia 
                completa de la diplomacia internacional, desde ceremonias de apertura 
                hasta sesiones plenarias y trabajo en comités especializados.
              </p>
              <ul className="space-y-3 text-red-100">
                {[
                  'Sesiones de debate académico riguroso',
                  'Actividades culturales y de networking',
                  'Comité de prensa estudiantil',
                  'Ceremonia de clausura y premiación'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { number: '250+', label: 'Delegados' },
                { number: '2+', label: 'Países' },
                { number: '12', label: 'Comités' },
                { number: '3', label: 'Días' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-3xl font-bold text-yellow-400 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-red-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;