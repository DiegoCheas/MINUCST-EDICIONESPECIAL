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

  const handleLoadingComplete = () => {
    // Pequeño delay para asegurar transición suave
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 gpu-accelerated performance-optimized ultra-smooth-360hz">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        
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
    </ThemeProvider>
  );
}

export default App;