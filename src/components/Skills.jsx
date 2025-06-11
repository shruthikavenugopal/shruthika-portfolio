<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiSmartphone, FiGitBranch, FiLayers, FiTool } from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillsData = [
    {
      category: "Web Development",
      icon: <FiCode />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Bootstrap"],
      color: "primary"
    },
    {
      category: "Mobile Development",
      icon: <FiSmartphone />,
      skills: ["React Native", "Firebase", "Push Notifications", "Location Services"],
      color: "secondary"
    },
    {
      category: "Version Control",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub"],
      color: "accent"
    },
    {
      category: "API Integration & Testing",
      icon: <FiLayers />,
      skills: ["REST APIs", "Postman"],
      color: "green"
    },
    {
      category: "Development Tools",
      icon: <FiTool />,
      skills: ["VS Code", "Firebase", "cPanel"],
      color: "yellow"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="text-primary-500">Skills</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="card hover:border-l-4 hover:border-l-primary-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20 text-${category.color}-500 dark:text-${category.color}-400 mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-badge hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
