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
        </div>
      </div>
    </section>
  );
};

export default Hero;