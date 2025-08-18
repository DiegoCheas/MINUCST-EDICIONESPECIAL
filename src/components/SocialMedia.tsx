import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Globe, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SocialMedia: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
      description: 'Síguenos en Facebook para actualizaciones diarias'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
      description: 'Fotos y momentos especiales del evento'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'from-sky-500 to-blue-600',
      hoverColor: 'hover:from-sky-400 hover:to-blue-500',
      description: 'Noticias y actualizaciones en tiempo real'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      description: 'Red profesional y oportunidades académicas'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-500 hover:to-red-600',
      description: 'Videos, conferencias y contenido educativo'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-400 hover:to-green-500',
      description: 'Grupo oficial para participantes'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:info@minucst.edu.do',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-500 hover:to-gray-600',
      description: 'Contacto directo con el equipo organizador'
    },
    {
      name: 'Sitio Web',
      icon: Globe,
      url: '#',
      color: 'from-indigo-600 to-purple-600',
      hoverColor: 'hover:from-indigo-500 hover:to-purple-500',
      description: 'Portal oficial del Colegio Santa Teresa'
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
    <section id="social-media" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
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
            Síguenos en <span className="text-red-700">Redes Sociales</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Mantente conectado con MINUCST 2026. Síguenos en todas nuestras plataformas 
            para recibir actualizaciones, contenido exclusivo y formar parte de nuestra comunidad global.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <motion.div 
                className={`bg-gradient-to-r ${social.color} ${social.hoverColor} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <social.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                {social.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {social.description}
              </p>
              
              <motion.div 
                className="mt-4 text-red-700 dark:text-red-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                Seguir →
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-red-700 to-yellow-600 rounded-2xl p-12 text-center text-white"
        >
          <motion.h3 
            className="text-3xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            ¡Únete a Nuestra Comunidad Digital!
          </motion.h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Sé parte de la conversación global sobre diplomacia, paz y liderazgo juvenil. 
            Comparte tu experiencia y conecta con delegados de todo el mundo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              #MINUCSTXV
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              #EducacionPorLaPaz
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors duration-200"
            >
              #JovenesLideres
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;