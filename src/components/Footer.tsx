
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-highlight font-poppins">DevPortfolio</h2>
            <p className="text-gray-600 mt-2">Full Stack Web Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-highlight transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-highlight transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-highlight transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-highlight transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} - All Rights Reserved</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
