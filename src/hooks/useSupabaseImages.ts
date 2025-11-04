import { useState, useEffect } from 'react';
import { getImageUrl, saveImageUrl, uploadImage, supabase } from '../lib/supabase';

export const useSupabaseImages = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const getImage = async (key: string, defaultUrl: string): Promise<string> => {
    if (images[key]) return images[key];
    
    try {
      const url = await getImageUrl(key, defaultUrl);
      setImages(prev => ({ ...prev, [key]: url }));
      return url;
    } catch (error) {
      // Silently return default URL if Supabase is not configured
      return defaultUrl;
    }
  };

  const saveImage = async (key: string, file: File): Promise<string> => {
    if (!supabase) {
      throw new Error('Supabase not configured. Please set up your Supabase credentials.');
    }
    
    setLoading(true);
    try {
      // Subir imagen a Supabase Storage
      const imageUrl = await uploadImage(file, key);
      
      // Guardar URL en la base de datos
      await saveImageUrl(key, imageUrl);
      
      // Actualizar estado local
      setImages(prev => ({ ...prev, [key]: imageUrl }));
      
      // Disparar evento para actualizar otros componentes
      window.dispatchEvent(new CustomEvent('supabase-image-updated', { 
        detail: { key, url: imageUrl } 
      }));
      
      return imageUrl;
    } catch (error) {
      console.error('Error saving image:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { getImage, saveImage, loading, images };
};