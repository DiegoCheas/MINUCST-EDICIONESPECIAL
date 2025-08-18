import { useState, useEffect } from 'react';

interface ImageStorage {
  [key: string]: string;
}

export const useImageStorage = () => {
  const [images, setImages] = useState<ImageStorage>({});

  useEffect(() => {
    // Cargar imágenes guardadas al iniciar
    const savedImages = localStorage.getItem('minucst-admin-images');
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (error) {
        console.error('Error loading saved images:', error);
      }
    }
  }, []);

  const saveImage = (key: string, imageUrl: string) => {
    const newImages = { ...images, [key]: imageUrl };
    setImages(newImages);
    localStorage.setItem('minucst-admin-images', JSON.stringify(newImages));
  };

  const getImage = (key: string, defaultImage: string) => {
    return images[key] || defaultImage;
  };

  return { saveImage, getImage };
};