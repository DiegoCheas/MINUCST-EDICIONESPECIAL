import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe2, Award, BookOpen, Handshake } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const WhoWeAre: React.FC = () => {
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
    <section id="who-we-are" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            ¿Quiénes <span className="text-red-700">Somos?</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Somos una organización estudiantil comprometida con la formación de jóvenes líderes 
            a través de la simulación diplomática y el debate académico de alto nivel.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-80 overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center p-4">
              <img 
                src="/image copy.png"
                alt="Escudo Colegio Santa Teresa"
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Nuestra Historia y Compromiso
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              MINUCST nace del Colegio Santa Teresa como una iniciativa educativa que busca 
              formar ciudadanos globales conscientes de su responsabilidad en la construcción 
              de un mundo más justo y pacífico.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la 
              excelencia académica, la inclusión y el desarrollo de habilidades de liderazgo 
              en jóvenes de toda América Latina y el Caribe.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6"
            >
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Nuestro Impacto</h4>
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-red-700 dark:text-red-400"
                  >
                    1200+
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Delegados Formados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-white"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">
              Nuestro Equipo Organizador
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Un grupo diverso de educadores, estudiantes y profesionales comprometidos 
              con la excelencia en la educación para la paz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Diego Cheas</h4>
              <p className="text-cyan-400 font-medium mb-3">Secretario General</p>
              <p className="text-gray-300 text-sm">
                Estudiante de 6to de Secundaria con experiencia en 
                múltiples modelos de Naciones Unidas, apasionado por la diplomacia y liderazgo global.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Natasha Guzmán</h4>
              <p className="text-purple-400 font-medium mb-3">Secretaria General Adjunta</p>
              <p className="text-gray-300 text-sm">
                Estudiante de 6to de secundaria, con más de 15 participaciones en Modelos de Naciones Unidas a nivel nacional.
                Comprometida con la construcción de paz y el liderazgo transformador desde la voz estudiantil.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Equipo Académico</h4>
              <p className="text-emerald-400 font-medium mb-3">Coordinadores y Asesores</p>
              <p className="text-gray-300 text-sm">
                Profesionales y educadores especializados en relaciones internacionales y pedagogía.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid lg:grid-cols-2 gap-12"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-red-700 dark:text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nuestros Logros
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                'Reconocimiento como uno de los MUN más importantes de la República Dominicana',
                'Participación de delegados de múltiples naciones e instituciones a nivel nacional',
                'Alianzas estratégicas con instituciones educativas nacionales e internacionales'
              ].map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-red-700 dark:bg-red-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <Handshake className="w-8 h-8 text-blue-700 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nuestros Aliados
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Colegio Santa Teresa', desc: 'Institución anfitriona y fundadora' },
                { name: 'Club de Modelos y Debates', desc: 'Asesoría y organización logística' }
            
              ].map((ally, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">{ally.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{ally.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;