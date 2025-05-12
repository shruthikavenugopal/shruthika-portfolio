import { useEffect, useRef } from 'react';
import '../Experience.css';



const Experience = () => {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <div className="date-content">
                <span>Nov 2023 - Present</span>
              </div>
            </div>
            <div className="timeline-content">
              <h3>Software Developer</h3>
              <h4>Mindmade Technologies</h4>
              <ul className="experience-details">
                <li>Developed and maintained responsive web applications using React.js</li>
                <li>Created cross-platform mobile applications with React Native</li>
                <li>Implemented state management using Redux for complex applications</li>
                <li>Integrated third-party APIs like Razorpay and Google Maps</li>
                <li>Collaborated with design and backend teams to deliver complete solutions</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Git</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <div className="date-content education">
                <span>2017 - 2020</span>
              </div>
            </div>
            <div className="timeline-content">
              <h3>Bachelor of Information Technology</h3>
              <h4>Nehru Arts and Science College, Coimbatore</h4>
              <p>Completed a comprehensive curriculum focused on programming, web development, database management, and IT infrastructure.</p>
              <div className="tech-stack">
                <span className="tech-tag">Computer Science</span>
                <span className="tech-tag">Web Development</span>
                <span className="tech-tag">Database Systems</span>
                <span className="tech-tag">Network Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;