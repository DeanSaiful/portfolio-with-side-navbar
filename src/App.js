import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Optional for fade animations
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 768) setIsMenuOpen(false); // Close only on mobile
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle body scroll based on menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isMenuOpen]);

  return (
    <div className="flex h-screen relative">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:w-1/5 bg-gray-900 text-white flex-col p-4 fixed h-full z-40">
        <h1 className="text-2xl font-bold mb-6">My Portfolio</h1>
        <div className='flex justify-center'>
          <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6">
            <img src="/image/wallpaper.png" alt="Logo" className="w-full h-full object-contain border rounded-full" />
          </div>
        </div>
        <ul className="space-y-4">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => showSection(item)}
                className="text-left hover:text-gray-300 w-full"
                aria-current={activeSection === item ? 'page' : undefined}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <header className="md:hidden w-full bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 z-50">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-40 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button onClick={toggleMenu} className="text-white text-2xl p-2">
            ✖
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mt-10 mb-6">
            <img src="/image/wallpaper.png" alt="Logo" className="w-full h-full object-contain border rounded-full" />
          </div>
        </div>
        <ul className="space-y-4 mt-6">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => showSection(item)}
                className="block w-full text-left"
                aria-current={activeSection === item ? 'page' : undefined}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <main className="w-full md:w-4/5 md:ml-[20%] p-6 overflow-y-auto mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          )}
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}
          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          )}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
