
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // Disable parallax effect on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden pt-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-72 md:w-96 h-72 md:h-96 rounded-full bg-highlight/30 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-72 md:w-96 h-72 md:h-96 rounded-full bg-purple-700/30 bottom-10 right-10 blur-3xl"></div>
        <div className="absolute w-52 md:w-64 h-52 md:h-64 rounded-full bg-blue-500/30 bottom-40 left-1/4 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              <span className="block mb-2">Hello, I'm</span>
              <span className="text-highlight sm:typing-effect overflow-hidden whitespace-nowrap">Full Stack Web Developer</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mt-6 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              I build modern web applications with clean, efficient code and outstanding user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <a href="#projects" className="bg-highlight hover:bg-highlight/80 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-highlight/30 w-full sm:w-auto text-center">
                View Projects
              </a>
              <a href="#contact" className="border border-highlight text-highlight hover:bg-highlight/10 font-medium py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center">
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div 
            ref={parallaxRef} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 relative parallax order-1 lg:order-2"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-highlight to-purple-800 rounded-full mx-auto flex items-center justify-center overflow-hidden">
              <div className="absolute inset-1 bg-deep-blue rounded-full flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x600/1a1e2d/8b5cf6?text=Your+Photo"
                  alt="Developer Portrait" 
                  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.a 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          href="#about" 
          className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-400 hover:text-highlight transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
