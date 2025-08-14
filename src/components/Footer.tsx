import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, FileText, Shield, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="bg-red-700 p-2 rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-red-700 font-bold text-xl">MINUCST</h3>
                <p className="text-gray-400 text-sm">2026</p>
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Modelo de Naciones Unidas del Colegio Santa Teresa - 
              Formando ciudadanos globales comprometidos con la paz y la transformación social.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-red-700 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Inicio', href: '#home' },
                { name: 'Quiénes Somos', href: '#who-we-are' },
                { name: 'Acerca', href: '#about' },
                { name: 'Comités', href: '#committees' },
                { name: 'Inscripción', href: '#registration' },
                { name: 'Galería', href: '#gallery' },
                { name: 'Noticias', href: '#news' },
                { name: 'FAQ', href: '#faq' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-red-700 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Event Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Información del Evento</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>20-22 Marzo 2026</li>
              <li>Santo Domingo Este, República Dominicana</li>
              <li>Colegio Santa Teresa</li>
              <li>250+ Delegados Esperados</li>
              <li>12 Comités Oficiales</li>
              <li>Modalidades de Participación Flexibles</li>
              <li>Costo: RD$3,900</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              {[
                { icon: Mail, text: 'info@minucst.edu.do' },
                { icon: Phone, text: '+1 (809) 594-8849' },
                { icon: MapPin, text: 'Calle Jesús de Galíndez #50\nSanto Domingo Este\nRepública Dominicana' }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-2"
                >
                  <contact.icon className="w-4 h-4 text-red-700 mt-0.5" />
                  <span className="text-gray-300 whitespace-pre-line">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 MINUCST. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {[
                { name: 'Política de Privacidad', icon: Shield },
                { name: 'Términos de Uso', icon: FileText },
                { name: 'Código de Conducta', icon: Users }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  whileHover={{ scale: 1.05, color: '#dc2626' }}
                  className="hover:text-red-700 transition-colors duration-200 flex items-center space-x-1"
                >
                  <link.icon className="w-3 h-3" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;