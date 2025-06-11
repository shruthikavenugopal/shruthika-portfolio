<<<<<<< HEAD
import { useEffect, useRef } from 'react';
import '../Hero.css';

const Hero = () => {
  const typingTextRef = useRef(null);
  
  useEffect(() => {
    const textElement = typingTextRef.current;
    const texts = [ 'Software Developer', 'Web Developer', 'Mobile Developer' ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      // Speed adjustments
      if (isDeleting) {
        typingDelay = 80;
      } else if (charIndex === currentText.length) {
        // Pause at the end of typing
        typingDelay = 1500;
        isDeleting = true;
      } else if (charIndex === 0) {
        // Move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500;
      } else {
        typingDelay = 150;
      }
      
      setTimeout(type, typingDelay);
    };
    
    // Start the typing effect
    setTimeout(type, 1000);
    
    // No need for cleanup as component won't unmount
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">Shruthika V</h1>
            <h2 className="title">
              <span className="prefix">I'm a </span>
              <span className="typing-text" ref={typingTextRef}></span>
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              Passionate about creating engaging experiences for both web and mobile platforms
              using modern technologies like React and React Native.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-block">
<pre>
  <code>
{`const Developer = () => ({
  name: "Shruthika V",
  skills: ["React", "React Native"],
  focus: "Creating awesome apps",
  contact: () => ({
    email: "shruthikavenugopal1630@gmail.com",
    location: "Coimbatore, India"
  })
});`}
  </code>
</pre>


            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
=======
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import coding from "../assets/coding.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-300/20 dark:bg-secondary-900/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-primary-500">Shruthika</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Passionate full-stack developer specialized in creating modern,
              responsive web applications and mobile solutions with React.js and
              React Native.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn btn-primary flex items-center gap-2"
              >
                Contact Me <FiArrowRight />
              </a>
              <a
                href="#projects"
                className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                View Projects
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/shruthikavenugopal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shruthika-v-1620442b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="/Shruthikav_resume.pdf"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <FiDownload size={16} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={coding}
                alt="Shruthika V"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
