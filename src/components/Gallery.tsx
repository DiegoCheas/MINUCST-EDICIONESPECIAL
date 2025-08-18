import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Image as ImageIcon, Users, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const photos = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Sesión plenaria de apertura MINUCST 2024',
      category: 'sessions'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Debate intenso en el Consejo de Seguridad',
      category: 'debates'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Trabajo colaborativo en comités',
      category: 'committees'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Delegados durante la pausa para almuerzo',
      category: 'social'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Ceremonia de clausura y premiación',
      category: 'ceremony'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Networking entre delegados internacionales',
      category: 'social'
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'María González',
      country: 'México',
      quote: 'MINUCST transformó mi perspectiva sobre la diplomacia internacional.',
      videoThumbnail: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      name: 'Carlos Mendez',
      country: 'Colombia',
      quote: 'La calidad académica y el nivel de debate es excepcional.',
      videoThumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      name: 'Ana Rodríguez',
      country: 'Argentina',
      quote: 'Una plataforma para formar líderes comprometidos con la paz.',
      videoThumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

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
    <section id="gallery" className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
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
            Galería <span className="text-yellow-400">MINUCST</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Revive los momentos más importantes de nuestras ediciones anteriores 
            y descubre la experiencia única que te espera.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800 dark:bg-gray-700 rounded-full p-2 flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'photos' 
                  ? 'bg-red-700 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              <span>Fotografías</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'testimonials' 
                  ? 'bg-red-700 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Testimonios</span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {photos.map((photo, index) => (
                <motion.div 
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1517048676732-d65bc937f952' :
                        index === 1 ? '1522202176988-66273c2fd55f' :
                        index === 2 ? '1515187479132-8fdb7819f6b5' :
                        index === 3 ? '1521737604893-d14cc237f11d' :
                        index === 4 ? '1507003211169-0a1dd7ef0a50' :
                        '1522071820677-1b726e50246a'
                      }?w=800&h=400&fit=crop&crop=center`}
                      alt={photo.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 dark:bg-gray-700 rounded-xl p-6 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1494790108755-74612f64eac4' :
                        index === 1 ? '1507003211169-0a1dd7ef0a50' :
                        '1521737604893-d14cc237f11d'
                      }?w=600&h=300&fit=crop&crop=center`}
                      alt={`Testimonio de ${testimonial.name}`}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="bg-red-700 rounded-full p-3 group-hover:scale-110 transition-transform duration-200"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-700 to-yellow-600 rounded-2xl p-12">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">
              ¡Forma Parte de la Historia!
            </h3>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Únete a cientos de jóvenes líderes que han transformado su futuro 
              a través de MINUCST. Tu experiencia podría ser la próxima en aparecer aquí.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-colors duration-200"
            >
              Inscríbete Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;