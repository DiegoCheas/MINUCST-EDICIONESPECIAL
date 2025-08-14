import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Registration: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleRegistration = () => {
    // Redirigir al Google Forms en la misma pestaña
    window.location.href = 'https://forms.gle/Yvhr4wpKbzsbbbw26';
  };

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
    <>
      <section id="registration" className="py-20 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 transition-colors duration-300">
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
              <span className="text-red-700">Inscripción</span> MINUCST 2026
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Únete a la experiencia diplomática más importante del Caribe y forma parte 
              de una comunidad de jóvenes líderes comprometidos con la paz mundial.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Inscripción General
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Participación como delegado en uno de nuestros 12 comités especializados
                </p>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold text-red-700 mb-6"
                >
                  RD$3,900
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Incluye:</h4>
                  <div className="space-y-3">
                    {[
                      'Materiales de trabajo completos',
                      'Almuerzo todos los días del evento',
                      'Certificado oficial de participación',
                      'Acceso a todos los eventos sociales'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Beneficios adicionales:</h4>
                  <div className="space-y-3">
                    {[
                      'Networking con delegados internacionales',
                      'Sesiones de capacitación pre-evento',
                      'Acceso a plataforma digital exclusiva',
                      'Oportunidades de becas para futuros eventos'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegistration}
                className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-3"
              >
                <FileText className="w-5 h-5" />
                <span className="text-lg">Comenzar Inscripción</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                Serás redirigido al formulario oficial de Google Forms
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Proceso de Inscripción
                </h3>
                <div className="space-y-6">
                  {[
                    { step: 1, title: 'Completa el Formulario', desc: 'Llena todos los datos requeridos en el formulario oficial de inscripción.' },                
                    { step: 2, title: 'Realiza el Pago', desc: 'Confirma tu inscripción con el pago de RD$3,900.' },
                    { step: 3, title: 'Confirmación', desc: 'Recibe tu confirmación y materiales preparatorios.' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm"
                      >
                        {item.step}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Fechas Importantes
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Inscripción Temprana', desc: '15% de descuento', date: 'Hasta Dic 31, 2025', color: 'red' },
                    { title: 'Inscripción Regular', desc: 'Precio estándar', date: 'Hasta Feb 15, 2026', color: 'gray' },
                    { title: 'Cierre de Inscripciones', desc: 'Fecha límite', date: 'Feb 28, 2026', color: 'red' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-r ${
                        item.color === 'red' 
                          ? 'from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20' 
                          : 'from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600'
                      } rounded-xl p-6`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Calendar className={`w-6 h-6 ${item.color === 'red' ? 'text-red-700' : 'text-gray-700 dark:text-gray-300'}`} />
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                          </div>
                        </div>
                        <div className={`${item.color === 'red' ? 'text-red-700' : 'text-gray-700 dark:text-gray-300'} font-bold`}>
                          {item.date}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Registration;