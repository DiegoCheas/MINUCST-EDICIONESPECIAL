import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Check, AlertCircle } from 'lucide-react';
import { useSupabaseImages } from '../hooks/useSupabaseImages';

interface AdminImageUploadProps {
  imageKey: string;
  currentImage: string;
  onImageChange: (newImageUrl: string) => void;
  className?: string;
}

const AdminImageUpload: React.FC<AdminImageUploadProps> = ({ 
  imageKey,
  currentImage, 
  onImageChange, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { saveImage, loading } = useSupabaseImages();

  // Solo mostrar si hay una query string específica de admin
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsVisible(urlParams.get('admin') === 'true');
  }, []);

  if (!isVisible) return null;

  const handleFileUpload = async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      try {
        setError(null);
        const newImageUrl = await saveImage(imageKey, file);
        onImageChange(newImageUrl);
        
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2000);
      } catch (err) {
        setError('Error al subir la imagen');
        setTimeout(() => setError(null), 3000);
      }
    } else {
      setError('Por favor selecciona una imagen válida');
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`absolute top-2 right-2 z-50 ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative bg-black/80 backdrop-blur-sm rounded-lg p-2 border-2 transition-all duration-200 ${
          isDragging ? 'border-yellow-400 bg-yellow-400/20' : 
          uploadSuccess ? 'border-green-400 bg-green-400/20' :
          error ? 'border-red-400 bg-red-400/20' :
          'border-gray-600'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileUpload(file);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={loading}
        />
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Upload className="w-5 h-5 text-blue-400" />
          </motion.div>
        ) : uploadSuccess ? (
          <Check className="w-5 h-5 text-green-400" />
        ) : error ? (
          <AlertCircle className="w-5 h-5 text-red-400" />
        ) : (
          <Upload className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-1 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        {loading ? 'Subiendo...' : 
         error ? error :
         uploadSuccess ? '¡Subido!' :
         'Arrastra o haz clic para subir imagen'}
      </div>
    </motion.div>
  );
};

export default AdminImageUpload;