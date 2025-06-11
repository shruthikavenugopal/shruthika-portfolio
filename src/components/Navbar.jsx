<<<<<<< HEAD
import { useState, useEffect } from 'react';
import '../Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#home"><code>&lt;Shruthika V /&gt;</code></a>
        </div>
        
        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="text-xl font-bold text-primary-600 dark:text-primary-400"
          >
            Shruthika V
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link block py-2"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
