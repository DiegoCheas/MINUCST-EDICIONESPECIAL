import { useState, useEffect, useCallback } from 'react';

interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  width?: number;
  height?: number;
}

export const useImageOptimization = () => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [supportsAVIF, setSupportsAVIF] = useState(false);

  useEffect(() => {
    // Check WebP support
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = () => {
      setSupportsWebP(webpTest.height === 2);
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Check AVIF support
    const avifTest = new Image();
    avifTest.onload = avifTest.onerror = () => {
      setSupportsAVIF(avifTest.height === 2);
    };
    avifTest.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  }, []);

  const optimizeImageUrl = useCallback((url: string, options: ImageOptimizationOptions = {}) => {
    const { quality = 80, width, height } = options;
    
    // If it's a Pexels URL, optimize it
    if (url.includes('pexels.com')) {
      let optimizedUrl = url;
      
      // Add compression parameters
      if (!url.includes('auto=compress')) {
        optimizedUrl += (url.includes('?') ? '&' : '?') + 'auto=compress';
      }
      
      // Add format based on browser support
      if (supportsAVIF) {
        optimizedUrl += '&fm=avif';
      } else if (supportsWebP) {
        optimizedUrl += '&fm=webp';
      }
      
      // Add quality
      optimizedUrl += `&q=${quality}`;
      
      // Add dimensions if provided
      if (width && height) {
        optimizedUrl += `&w=${width}&h=${height}&fit=crop`;
      }
      
      return optimizedUrl;
    }
    
    return url;
  }, [supportsWebP, supportsAVIF]);

  return { optimizeImageUrl, supportsWebP, supportsAVIF };
};

export const useImagePreloader = (urls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setIsLoading(false);
      return;
    }

    const preloadImages = async () => {
      const imagePromises = urls.map(url => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = () => reject(url);
          img.src = url;
        });
      });

      try {
        const loaded = await Promise.allSettled(imagePromises);
        const successfullyLoaded = loaded
          .filter(result => result.status === 'fulfilled')
          .map(result => (result as PromiseFulfilledResult<string>).value);
        
        setLoadedImages(new Set(successfullyLoaded));
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [urls]);

  return { loadedImages, isLoading };
};