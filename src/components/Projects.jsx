import { useEffect, useRef } from 'react';
import '../Project.css';
import allendreyfusImg from '../assets/images/allendreyfus.png';
import psgImg from '../assets/images/psg.png';
import tickatripImg from '../assets/images/tickatrip.jpg';
import prasannaImg from '../assets/images/prasanna-web.png';
import cakeyImg from '../assets/images/cakey.png';
import mahilImg from '../assets/images/mahil.png';


const Projects = () => {
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  // Projects data based on your resume
const projectsData = [
  {
    id: 1,
    title: "Allendreyfus",
    projectUrl: "https://allendreyfus.com/",
    description: "A content-based news website dedicated to delivering up-to-date information and insightful analysis on South African news and blogs.",
    type: "Website",
    techStack: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "Git", "Postman"],
    imageUrl: allendreyfusImg
  },
  {
    id: 2,
    title: "PSG Institute of Architecture and Planning",
    projectUrl: "https://psg.mindmadetech.in/",
    description: "Developed a responsive website for PSG Institute of Architecture...",
    type: "Website",
    techStack: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "Git", "Postman", "Cpanel"],
    imageUrl: psgImg
  },
  {
    id: 3,
    title: "Tickatrip",
    projectUrl: "https://test.tickatrip.travel/",
    description: "A comprehensive online platform for booking flights and hotels...",
    type: "Website",
    techStack: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "Cpanel", "Git", "Postman"],
    imageUrl: tickatripImg
  },
  {
    id: 4,
    title: "Prasanna Jewellers",
    projectUrl: "https://www.prasannajewellers.com/",
    description: "An e-commerce website specializing in wholesaling idols and ornaments.",
    type: "Website & Mobile App",
    techStack: ["React.js", "React Native", "CSS", "Bootstrap", "JavaScript", "Redux", "Git", "Postman", "Cpanel", "Firebase"],
    imageUrl: prasannaImg
  },
  {
    id: 5,
    title: "Cakey",
    projectUrl: "https://play.google.com/store/apps/details?id=com.sugitechnologies.cakey&hl=en",
    description: "An online shopping app for home-baked cakes...",
    type: "Mobile App",
    techStack: ["React Native", "CSS", "Bootstrap", "JavaScript", "Redux", "Git", "Postman", "Firebase", "Razorpay", "Google Maps"],
    imageUrl: cakeyImg
  },
  {
    id: 6,
    title: "Mahil Irrigation",
    projectUrl: "https://play.google.com/store/apps/details?id=com.mahil",
    description: "React Native app for ordering irrigation products...",
    type: "Mobile App (In Progress)",
    techStack: ["React Native", "CSS", "Bootstrap", "JavaScript", "Redux", "Git", "Postman", "Firebase", "Razorpay", "Google Maps"],
    imageUrl: mahilImg
  }
];


  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-filter">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Websites</button>
          <button className="filter-btn">Mobile Apps</button>
        </div>
        
        <div className="projects-grid" ref={projectsRef}>
          {projectsData.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />

                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a href="#" className="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-more">
         <a href="https://yourportfolio.com/projects" className="btn" target="_blank" rel="noopener noreferrer">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;