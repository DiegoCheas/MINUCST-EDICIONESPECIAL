import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Car, Plane, Hotel } from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
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
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Contacto y <span className="text-yellow-400">Ubicación</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Encuentra toda la información necesaria para llegar al evento y 
            ponerte en contacto con nuestro equipo organizador.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Dirección',
                    content: 'Colegio Santa Teresa\nCalle Jesús de Galíndez #50\nSanto Domingo Este\nRepública Dominicana'
                  },
                  {
                    icon: Phone,
                    title: 'Teléfonos',
                    content: '+1 (809) 594-8849'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@minucst.edu.do\ninfo@colegiosantateresa.com.do'
                  },
                  {
                    icon: Clock,
                    title: 'Horario de Atención',
                    content: 'Lunes a Viernes / 8:00 am. a 1:00 pm.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-red-700 p-2 rounded-full">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 dark:bg-gray-700 rounded-xl p-6"
            >
              <h4 className="text-xl font-bold mb-4">Formulario de Contacto</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-white transition-all duration-200"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-white transition-all duration-200"
                  />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Asunto"
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-white transition-all duration-200"
                />
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={4}
                  placeholder="Mensaje"
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-white resize-none transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Map and Location */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Ubicación del Evento
              </h3>
              <InteractiveMap />
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">¿Cómo Llegar?</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: Car,
                    title: 'En Automóvil',
                    desc: 'Estacionamiento disponible en las instalaciones del colegio. Entrada por la C/ Leovilda del Villar, antigua Mayagüez'
                  },
                  {
                    icon: Plane,
                    title: 'Desde el Aeropuerto',
                    desc: 'Aeropuerto Internacional Las Américas (AILA) - 30 minutos en taxi.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3"
                  >
                    <item.icon className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hotels and Accommodation */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <Hotel className="w-8 h-8 inline-block mr-2 text-yellow-400" />
            Alojamiento en Santo Domingo Este
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Hotel Plaza del Este', distance: '10 minutos del evento', price: '$85 USD/noche', features: 'Desayuno incluido, WiFi gratis, centro de negocios' },
              { name: 'Residencia Universitaria', distance: '15 minutos del evento', price: '$45 USD/noche', features: 'Opción económica, habitaciones compartidas disponibles' },
              { name: 'Hotel Diplomático Este', distance: '8 minutos del evento', price: '$120 USD/noche', features: 'Servicio premium, spa, restaurante internacional' }
            ].map((hotel, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-700 dark:bg-gray-600 rounded-xl p-6"
              >
                <h4 className="font-bold text-lg mb-2">{hotel.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{hotel.distance}</p>
                <p className="text-yellow-400 font-semibold">{hotel.price}</p>
                <p className="text-gray-300 text-sm mt-2">{hotel.features}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              Ver Opciones de Alojamiento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;