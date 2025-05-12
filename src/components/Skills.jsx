import { useState, useEffect, useRef } from 'react';
import '../Skills.css';


const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 95 },
        { name: "Redux", level: 80 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Firebase", level: 80 },
        { name: "Razorpay Integration", level: 75 },
        { name: "Google Maps API", level: 70 }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "cPanel", level: 80 }
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div 
              className={`skill-category ${isVisible ? 'visible' : ''}`} 
              style={{ animationDelay: `${index * 0.2}s` }}
              key={category.title}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;