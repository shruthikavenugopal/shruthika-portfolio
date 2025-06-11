<<<<<<< HEAD
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
const viteLogo = `${import.meta.env.BASE_URL}vite.svg`; 
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Skills from './components/Skills'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [count, setCount] = useState(0)

  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
        <Footer />

=======
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
