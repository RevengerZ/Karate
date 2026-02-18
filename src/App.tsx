import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Contact from './components/Contact';
import Hanshi from './components/Hanshi';
import Shihan from './components/Shihan';
import HanshiDavid from './components/HanshiDavid';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
  const handleScroll = () => {
  const sections = ['home', 'about', 'achievements', 'events', 'hanshi', 'shihan', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
  {/* App content */}
  <Navigation activeSection={activeSection} />
  { <Hero /> }
  { <About /> }
  { <Achievements /> }
  { <Events /> }
  { <Hanshi /> }
  { <Shihan /> }
  { <Contact /> }
      <Footer />
    </div>
  );
}

export default App;
