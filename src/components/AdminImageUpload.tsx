import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

interface AdminImageUploadProps {
  currentImage: string;
  onImageChange: (newImageUrl: string) => void;
  className?: string;
}

const AdminImageUpload: React.FC<AdminImageUploadProps> = ({ 
  currentImage, 
  onImageChange, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Solo mostrar si hay una query string específica de admin
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsVisible(urlParams.get('admin') === 'true');
  }, []);

  if (!isVisible) return null;

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageChange(result);
      };
      reader.readAsDataURL(file);
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
          isDragging ? 'border-yellow-400 bg-yellow-400/20' : 'border-gray-600'
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
        />
        <Upload className="w-5 h-5 text-yellow-400" />
      </motion.div>
    </motion.div>
  );
};

export default AdminImageUpload;