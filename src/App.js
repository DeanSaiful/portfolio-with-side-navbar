import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the mobile menu

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close the menu when a section is selected
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Disable/enable body scrolling
  };

  return (
    <div className="flex h-screen relative">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:w-1/5 bg-gray-900 text-white flex-col p-4 fixed h-full z-40">
        <h1 className="text-2xl font-bold mb-6">My Portfolio</h1>
        {/* Image section */}
        <div className='flex justify-center'>
          <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6">
            <img src="/image/wallpaper.png" alt="Logo" className="w-full h-full object-contain border rounded-full" />
          </div>
        </div>
        {/* Navigation menu */}
        <ul className="space-y-4">
          <li>
            <button onClick={() => showSection('home')} className="text-left hover:text-gray-300 w-full">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => showSection('about')} className="text-left hover:text-gray-300 w-full">
              About
            </button>
          </li>
          <li>
            <button onClick={() => showSection('projects')} className="text-left hover:text-gray-300 w-full">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => showSection('contact')} className="text-left hover:text-gray-300 w-full">
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <header className="md:hidden w-full bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 z-50">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu (Collapsing smoothly) */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-40 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 60 }} // Ensure the mobile menu is on top
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
          <li>
            <button onClick={() => showSection('home')} className="block w-full">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => showSection('about')} className="block w-full">
              About
            </button>
          </li>
          <li>
            <button onClick={() => showSection('projects')} className="block w-full">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => showSection('contact')} className="block w-full">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="w-full md:w-4/5 md:ml-[20%] p-6 overflow-y-auto mt-12 md:mt-0">
        {/* Display the active section */}
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default App;
