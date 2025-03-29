
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-highlight/30 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-purple-700/30 bottom-10 right-10 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-blue-500/30 bottom-40 left-1/4 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block mb-2">Hello, I'm</span>
              <span className="text-highlight typing-effect overflow-hidden whitespace-nowrap">Full Stack Web Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              I build modern web applications with clean, efficient code and outstanding user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <a href="#projects" className="bg-highlight hover:bg-highlight/80 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-highlight/30">
                View Projects
              </a>
              <a href="#contact" className="border border-highlight text-highlight hover:bg-highlight/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
          <div ref={parallaxRef} className="lg:w-1/2 relative parallax">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-highlight to-purple-800 rounded-full mx-auto flex items-center justify-center overflow-hidden">
              <div className="absolute inset-1 bg-deep-blue rounded-full flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x600/1a1e2d/8b5cf6?text=Your+Photo"
                  alt="Developer Portrait" 
                  className="rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-400 hover:text-highlight transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
