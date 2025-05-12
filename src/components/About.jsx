import { useEffect, useRef } from 'react';
import '../About.css';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once we've shown the element, no need to observe it again
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm <span className="highlight">Shruthika V</span>, a passionate software developer specializing in web and mobile application development using React.js and React Native.
            </p>
            <p>
              I currently work at <span className="highlight">Mindmade Technologies</span> as a Software Developer, where I've been building innovative solutions since November 2023. With a background in Information Technology from Nehru Arts and Science College in Coimbatore, I combine technical expertise with creative problem-solving to deliver high-quality applications.
            </p>
            <p>
              My expertise lies in developing responsive websites and intuitive mobile applications that provide exceptional user experiences. I'm particularly skilled in React ecosystem technologies, working with REST APIs, and implementing modern frontend architectures.
            </p>
            <p>
              I'm passionate about creating seamless digital experiences and continuously expanding my knowledge in emerging technologies. When I'm not coding, I enjoy [Your hobbies or interests].
            </p>
            <div className="about-details">
              <div className="about-detail">
                <h4>Location</h4>
                <p>Singanallur, Coimbatore, India</p>
              </div>
              <div className="about-detail">
                <h4>Email</h4>
                <p>shruthikavenugopal1630@gmail.com</p>
              </div>
              <div className="about-detail">
                <h4>Languages</h4>
                <p>Tamil, Malayalam, English</p>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="dev-icons">
              <div className="icon-wrapper">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-firebase-plain colored"></i>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;