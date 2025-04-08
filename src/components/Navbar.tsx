
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
    if (isOpen) {
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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm',
      scrolled ? 'bg-deep-blue/80 shadow-lg py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-highlight font-poppins">DevPortfolio</a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-foreground hover:text-highlight transition-colors duration-300 py-2 px-3"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-foreground p-3 menu-button rounded-lg hover:bg-deep-blue/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-deep-blue/95 z-40 flex flex-col md:hidden animate-fade-in mobile-menu overflow-y-auto">
          <div className="sticky top-0 z-10 bg-deep-blue border-b border-highlight/20 p-4 flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-highlight font-poppins">DevPortfolio</a>
            <button
              className="text-foreground p-2 hover:bg-deep-blue/50 rounded-md"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-[80vh]">
            <ul className="flex flex-col space-y-6 text-center w-full">
              {navItems.map((item) => (
                <li key={item.name} className="text-xl">
                  <a
                    href={item.href}
                    className="text-foreground hover:text-highlight transition-colors duration-300 px-4 py-4 block"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
