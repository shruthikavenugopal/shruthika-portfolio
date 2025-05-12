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

    </div>
  )
}

export default App
