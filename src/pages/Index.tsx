
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Fix for vh units on mobile browsers
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Add passive event listener for improved mobile scrolling performance
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          // Add offset for fixed header
          const offset = 80;
          const headerHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - Math.max(offset, headerHeight);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          
          // Update URL without scrolling
          if (history.pushState) {
            history.pushState(null, '', `#${id}`);
          } else {
            location.hash = `#${id}`;
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Handle modal open state for body scroll locking
    const handleModalState = () => {
      const modalOpen = document.querySelector('[role="dialog"]');
      if (modalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    };
    
    // Create a mutation observer to watch for modal changes
    const observer = new MutationObserver(handleModalState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', setVH);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default Index;
