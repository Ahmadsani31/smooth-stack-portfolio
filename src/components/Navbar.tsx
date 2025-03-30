
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm',
      scrolled ? 'bg-deep-blue/80 shadow-lg py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-highlight font-poppins">DevPortfolio</a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-foreground hover:text-highlight transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-foreground p-2 menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-deep-blue/95 z-40 flex flex-col items-center justify-center md:hidden animate-fade-in mobile-menu">
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
            <a href="#home" className="text-xl font-bold text-highlight font-poppins">DevPortfolio</a>
            <button
              className="text-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 text-center mt-16">
            {navItems.map((item) => (
              <li key={item.name} className="text-xl">
                <a
                  href={item.href}
                  className="text-foreground hover:text-highlight transition-colors duration-300 px-4 py-2 block"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
