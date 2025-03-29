
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

  return (
    <nav className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm',
      scrolled ? 'bg-deep-blue/80 shadow-lg py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-highlight font-poppins">DevPortfolio</a>
        
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
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-deep-blue/95 z-40 flex flex-col items-center justify-center md:hidden animate-fade-in">
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item.name} className="text-xl">
                <a
                  href={item.href}
                  className="text-foreground hover:text-highlight transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
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
