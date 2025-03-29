
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-highlight font-poppins">DevPortfolio</h2>
            <p className="text-gray-400 mt-2">Full Stack Web Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
