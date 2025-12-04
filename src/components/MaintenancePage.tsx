import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Clock, Mail, Phone, Globe, Wrench, AlertCircle } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-red-400/10 rounded-full blur-2xl opacity-30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.img
              src="/image.png"
              alt="MINUCST Logo"
              className="w-64 h-auto mx-auto object-contain filter drop-shadow-2xl"
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                  'drop-shadow(0 0 40px rgba(251, 191, 36, 0.6))',
                  'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                ]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <span className="block bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                MINUCST
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl">
                XV
              </span>
            </h1>
          </motion.div>

          {/* Maintenance Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-gradient-to-r from-yellow-500 to-amber-500 w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-2xl"
            >
              <Settings className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/25 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertCircle className="w-8 h-8 text-yellow-400 mr-3" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Sitio en Mantenimiento
                </h2>
              </div>
              
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Estamos trabajando para mejorar tu experiencia. 
                <br />
                El sitio web estará disponible muy pronto.
              </p>

              <div className="flex items-center justify-center space-x-4 text-yellow-200">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Wrench className="w-6 h-6" />
                </motion.div>
                <span className="text-lg font-semibold">Actualizaciones en progreso...</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-xl border border-red-400/25 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3" />
                Información del Evento
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-white mb-2">📅 Fechas:</h4>
                  <p className="text-red-100">20-22 Marzo 2026</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">📍 Ubicación:</h4>
                  <p className="text-red-100">Santo Domingo Este, RD</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">🏫 Sede:</h4>
                  <p className="text-red-100">Colegio Santa Teresa</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">👥 Delegados:</h4>
                  <p className="text-red-100">250+ Esperados</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              ¿Necesitas información?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:info@minucst.edu.do"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Email</h4>
                <p className="text-red-100 text-sm">info@minucst.edu.do</p>
              </motion.a>

              <motion.a
                href="tel:+18095948849"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Teléfono</h4>
                <p className="text-red-100 text-sm">+1 (809) 594-8849</p>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Síguenos</h4>
                <p className="text-red-100 text-sm">@minucst</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-red-200 text-sm"
          >
            <p>© 2025 MINUCST XV - Modelo Internacional de las Naciones Unidas</p>
            <p className="mt-2">Colegio Santa Teresa • Santo Domingo Este, República Dominicana</p>
          </motion.div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-xl" />
      
      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default MaintenancePage;