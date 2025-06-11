<<<<<<< HEAD
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
=======
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi'
import allendreyfusImg from '../assets/allendreyfus.png';
import psgImg from '../assets/psg.png';
import tickatripImg from '../assets/tickatrip.jpg';
import prasannaImg from '../assets/prasanna-web.png';
import cakeyImg from '../assets/cakey.png';
import mahilImg from '../assets/mahil.png';
import PrasMbl from "../assets/prasanna-mobile.png";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')

  const projectsData = [
    {
      id: 1,
      title: "Allendreyfus",
      description: "A content-based news website delivering up-to-date information and insightful analysis on South African news and blogs.",
      image: allendreyfusImg,
      techs: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux"],
      demoLink: "https://allendreyfus.com/",
      githubLink: "#",
      category: "web"
    },
    {
      id: 2,
      title: "PSG Institute of Architecture",
      description: "A responsive website for PSG Institute of Architecture with intuitive interface for course listings, event calendars, and admission details.",
      image: psgImg,
      techs: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "cPanel"],
      demoLink: "https://psg.mindmadetech.in/",
      githubLink: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Tickatrip",
      description: "A comprehensive online platform for booking flights and hotels, as well as accessing travel-related blogs.",
      image: tickatripImg,
      techs: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "cPanel"],
      demoLink: "https://test.tickatrip.travel/",
      githubLink: "#",
      category: "web"
    },
    {
      id: 4,
      title: "Prasanna-Jewellers",
      description: "An e-commerce website specializing in wholesaling idols and ornaments.",
      image: prasannaImg,
      techs: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript", "Redux", "cPanel"],
      demoLink: "https://www.prasannajewellers.com/",
      githubLink: "#",
      category: "web"
    },
    {
      id: 5,
      title: "Prasanna-Jewellers Mobile App",
      description: "An e-commerce mobile application specializing in wholesaling idols and ornaments.",
      image: PrasMbl,
      techs: ["React Native", "CSS", "Bootstrap", "JavaScript", "Redux", "Firebase"],
      demoLink: "https://play.google.com/store/apps/details?id=com.prasannajewellsecom&hl=en",
      githubLink: "#",
      category: "mobile"
    },
    {
      id: 6,
      title: "Cakey",
      description: "A home-baked cakes online shopping app with features like product listings, secure payments, and order tracking.",
      image: cakeyImg,
      techs: ["React Native", "CSS", "JavaScript", "Redux", "Firebase", "Razorpay", "Google location"],
      demoLink: "https://play.google.com/store/apps/details?id=com.sugitechnologies.cakey&hl=en",
      githubLink: "#",
      category: "mobile"
    },
        {
      id: 7,
      title: "Mahil",
      description: "React Native app for ordering irrigation products...",
      image: mahilImg,
      techs: ["React Native", "CSS", "JavaScript", "Redux", "Firebase", "Razorpay", "Google location"],
      demoLink: "https://play.google.com/store/apps/details?id=com.mahil&hl=en",
      githubLink: "#",
      category: "mobile"
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

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
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="text-primary-500">Projects</span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-3 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'web'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Web Projects
              </button>
              <button
                onClick={() => setFilter('mobile')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'mobile'
                    ? 'bg-primary-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Mobile Apps
              </button>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 w-full p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techs.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-primary-500/20 text-primary-200 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-xs bg-gray-700/50 text-gray-200 px-2 py-1 rounded-full">
                        +{project.techs.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-primary-500 transition-colors duration-300"
                    >
                      <FiExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-primary-500 transition-colors duration-300"
                    >
                      <FiGithub size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
