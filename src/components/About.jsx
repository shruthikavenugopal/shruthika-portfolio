<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiCode, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const information = [
    { icon: <FiUser />, label: 'Name', value: 'Shruthika V' },
    { icon: <FiCode />, label: 'Role', value: 'Software Developer' },
    { icon: <FiPhone />, label: 'Phone', value: '7558191630' },
    { icon: <FiMail />, label: 'Email', value: 'shruthikavenugopal1630@gmail.com' },
    { icon: <FiMapPin />, label: 'Location', value: 'Singanallur, Coimbatore-641005' },
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="section-title">
            About <span className="text-primary-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Shruthika V, a passionate Software Developer with experience in creating responsive 
                web applications and mobile solutions. I specialize in modern JavaScript frameworks, 
                particularly React.js and React Native.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Currently working at Mindmade Technologies, I've developed various web and mobile 
                applications, focusing on creating intuitive user interfaces and implementing 
                complex functionalities.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I enjoy solving real-world problems through code and continuously learning new 
                technologies to enhance my skill set.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {information.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="mr-4 text-primary-500 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
