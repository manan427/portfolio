import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load the remaining components to improve initial load time
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const XFeatures = lazy(() => import('./components/XFeatures'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <Header />
      <Hero />
      
      <Suspense fallback={<div className="section-padding text-center text-neutral-400">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <XFeatures />
        
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;