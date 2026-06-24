import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-900 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl font-bold text-neutral-100">
              MM<span className="text-primary-500">.</span>
            </h1>
          </ScrollLink>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              className="nav-link cursor-pointer"
            >
              {link.title}
            </ScrollLink>
          ))}
          <a 
            href={personalInfo.resumeUrl} 
            className="px-5 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </motion.nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-2xl text-neutral-300 hover:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-950 border-b border-neutral-900"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link py-2 cursor-pointer block"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </ScrollLink>
            ))}
            <a 
              href={personalInfo.resumeUrl} 
              className="btn btn-outline w-full text-center py-2"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;