import React from 'react';
import { Shield, AlertTriangle, Lock } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  // Disable right-click context menu
  React.useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);

    // Detect developer tools
    const detectDevTools = () => {
      const threshold = 160;
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        document.body.innerHTML = '<div style="background: #000; color: #ff0000; font-size: 24px; text-align: center; padding: 50px;">ACCESO DENEGADO - HERRAMIENTAS DE DESARROLLADOR DETECTADAS</div>';
      }
    };

    const interval = setInterval(detectDevTools, 500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-red-900 flex items-center justify-center p-4 select-none">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-red-800 border-4 border-red-600 rounded-lg p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="w-24 h-24 text-red-300" />
              <Lock className="w-12 h-12 text-red-100 absolute top-6 left-6" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-red-100 mb-4 tracking-wider">
            🚫 ACCESO DENEGADO 🚫
          </h1>
          
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
          
          <div className="bg-red-700 border-2 border-red-500 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-red-100 mb-4">
              SITIO WEB BLOQUEADO
            </h2>
            <p className="text-red-200 text-lg leading-relaxed">
              Este sitio web está temporalmente fuera de servicio por mantenimiento de seguridad.
              <br />
              <strong>NO HAY ACCESO DISPONIBLE</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-600 border border-red-400 rounded p-4">
              <h3 className="font-bold text-red-100 mb-2">🔒 SEGURIDAD</h3>
              <p className="text-red-200 text-sm">Todas las funciones están deshabilitadas</p>
            </div>
            <div className="bg-red-600 border border-red-400 rounded p-4">
              <h3 className="font-bold text-red-100 mb-2">🚫 BASE DE DATOS</h3>
              <p className="text-red-200 text-sm">Conexiones completamente bloqueadas</p>
            </div>
          </div>
          
          <div className="text-red-300 text-sm">
            <p className="mb-2">⚠️ ADVERTENCIA: Este sitio está completamente inoperativo</p>
            <p>🔐 Ninguna funcionalidad está disponible</p>
          </div>
        </div>
        
        <div className="mt-8 text-red-400 text-xs">
          <p>Sistema de bloqueo activo - Acceso restringido para todos los usuarios</p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;