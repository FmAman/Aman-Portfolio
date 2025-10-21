import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Connect from './sections/Connect.jsx';
import Footer from './sections/Footer.jsx';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Connect' },
];

function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  console.log(entries);

        if (visibleEntries.length > 0) {
          const newActiveSection = visibleEntries[0].target.id;
          setActiveSection((prev) => (prev === newActiveSection ? prev : newActiveSection));
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.1,
      },
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);      
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(hash);
    }
  }, []);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <>
      <Navbar sections={SECTIONS} activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onViewProjects={() => handleNavigate('projects')} onContact={() => handleNavigate('connect')} />
        <About />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

export default App;
