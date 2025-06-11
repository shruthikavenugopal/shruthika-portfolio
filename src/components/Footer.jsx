<<<<<<< HEAD
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
// import '../Footer.css'


// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-teal-400 mb-4 md:mb-0">
            <span className="text-white">Shruthika</span>V
          </div>
          
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shruthika V. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/shruthikavenugopal" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/shruthika-v-1620442b2/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shruthikavenugopal1630@gmail.com" className="text-white/70 hover:text-white transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Shruthika V</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate software developer dedicated to creating engaging user 
              experiences with modern web and mobile technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                 href="https://github.com/shruthikavenugopal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                  href="https://www.linkedin.com/in/shruthika-v-1620442b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:shruthikavenugopal1630@gmail.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <a 
                href="tel:7558191630" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Phone"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-400">shruthikavenugopal1630@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-400">7558191630</span>
              </li>
              <li className="flex items-start">
                <FiLinkedin className="mt-1 mr-3 text-primary-400" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                  linkedin.com/in/shruthikav
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {currentYear} Shruthika V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
>>>>>>> 7835ade523884f7d5ef7706aa9114e761027d99a
