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
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen onComplete={handleLoadingComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500">
        <Navigation />
        
        <main className="relative">
          <Hero />
          <WhoWeAre />
          <About />
          <Committees />
          <Registration />
          <Gallery />
          <News />
          <FAQ />
          <SocialMedia />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;