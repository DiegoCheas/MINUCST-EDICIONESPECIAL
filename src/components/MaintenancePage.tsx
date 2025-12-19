import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Ban } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  // Bloquear cualquier intento de navegación
  React.useEffect(() => {
    // Bloquear botón atrás
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };

    // Bloquear teclas de desarrollador
    const blockKeys = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (e.keyCode === 123 || 
          (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
          (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }
    };

    // Bloquear clic derecho
    const blockRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Bloquear selección de texto
    const blockSelection = () => {
      return false;
    };

    document.addEventListener('keydown', blockKeys);
    document.addEventListener('contextmenu', blockRightClick);
    document.addEventListener('selectstart', blockSelection);

    // Bloquear consola
    setInterval(() => {
      console.clear();
      console.log('%cSITIO BLOQUEADO', 'color: red; font-size: 50px; font-weight: bold;');
    }, 100);

    return () => {
      document.removeEventListener('keydown', blockKeys);
      document.removeEventListener('contextmenu', blockRightClick);
      document.removeEventListener('selectstart', blockSelection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-500 relative overflow-hidden select-none">
      {/* Fondo de bloqueo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23dc2626" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Icono de bloqueo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-red-600 w-32 h-32 rounded-full mx-auto flex items-center justify-center shadow-2xl border-4 border-red-400"
            >
              <Lock className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>

          {/* Título de bloqueo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-red-500">
              ACCESO
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-red-600">
              DENEGADO
            </h2>
          </motion.div>

          {/* Mensaje de bloqueo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-red-900/50 border-2 border-red-500 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <AlertTriangle className="w-12 h-12 text-red-400 mr-4" />
                </motion.div>
                <h3 className="text-3xl font-bold text-red-400">
                  SITIO COMPLETAMENTE BLOQUEADO
                </h3>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Ban className="w-12 h-12 text-red-400 ml-4" />
                </motion.div>
              </div>
              
              <div className="space-y-4 text-red-300">
                <p className="text-xl font-semibold">
                  🚫 TODOS LOS SERVICIOS HAN SIDO DESHABILITADOS
                </p>
                <p className="text-lg">
                  ❌ Base de datos desconectada<br />
                  ❌ Enlaces bloqueados<br />
                  ❌ Redes sociales inaccesibles<br />
                  ❌ Formularios deshabilitados<br />
                  ❌ Navegación bloqueada
                </p>
              </div>
            </div>
          </motion.div>

          {/* Estado del sistema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-black/70 border border-red-600 rounded-xl p-6">
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 mr-3" />
                ESTADO DEL SISTEMA
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">Sitio Web: BLOQUEADO</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">Base de Datos: DESCONECTADA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">APIs: INACTIVAS</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">Formularios: BLOQUEADOS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">Enlaces: DESHABILITADOS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300">Acceso: DENEGADO</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advertencia final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-red-400 text-lg font-bold"
          >
            <motion.p
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚠️ SISTEMA COMPLETAMENTE INOPERATIVO ⚠️
            </motion.p>
            <p className="mt-4 text-red-500">
              NO HAY ACCESO DISPONIBLE PARA NINGÚN USUARIO
            </p>
          </motion.div>

        </div>
      </div>

      {/* Efectos de bloqueo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-2 h-full bg-red-500 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-2 h-full bg-red-500 animate-pulse"></div>

      {/* Partículas de bloqueo */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
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