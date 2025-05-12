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