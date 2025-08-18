import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import About from './components/About';
import Committees from './components/Committees';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import News from './components/News';
import FAQ from './components/FAQ';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [contentReady, setContentReady] = React.useState(false);

  const handleLoadingComplete = () => {
    // Asegurar que el contenido esté completamente listo
    setTimeout(() => {
      setIsLoading(false);
      // Dar tiempo adicional para que se renderice todo
      setTimeout(() => {
        setContentReady(true);
      }, 200);
    }, 300);
  };

  // Pre-cargar todos los componentes
  React.useEffect(() => {
    // Forzar el renderizado de todos los componentes en el background
    const preloadTimer = setTimeout(() => {
      setContentReady(true);
    }, 1000);

    return () => clearTimeout(preloadTimer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 gpu-accelerated performance-optimized ultra-smooth-360hz" style={{ minHeight: '100vh', overflow: isLoading ? 'hidden' : 'auto' }}>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        
        {/* Renderizar contenido siempre, pero con opacidad controlada */}
        <div 
          className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ 
            visibility: isLoading ? 'hidden' : 'visible',
            position: isLoading ? 'absolute' : 'relative',
            width: '100%',
            minHeight: '100vh'
          }}
        >
          <Navigation />
          
          {/* Each section is now properly separated with enhanced performance */}
          <main className="relative">
            <Hero />
            
            <div className="section-separator performance-optimized">
              <WhoWeAre />
            </div>
            
            <div className="section-separator performance-optimized">
              <About />
            </div>
            
            <div className="section-separator performance-optimized">
              <Committees />
            </div>
            
            <div className="section-separator performance-optimized">
              <Registration />
            </div>
            
            <div className="section-separator performance-optimized">
              <Gallery />
            </div>
            
            <div className="section-separator performance-optimized">
              <News />
            </div>
            
            <div className="section-separator performance-optimized">
              <FAQ />
            </div>
            
            <div className="section-separator performance-optimized">
              <SocialMedia />
            </div>
            
            <div className="section-separator performance-optimized">
              <Contact />
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;