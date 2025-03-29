
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TechItemProps {
  name: string;
  icon: string;
  description: string;
  category: string;
}

const techItems: TechItemProps[] = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    description: "PHP framework for web application development with elegant syntax and tools.",
    category: "backend"
  },
  {
    name: "CodeIgniter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
    description: "Lightweight PHP framework known for its small footprint and simple solutions.",
    category: "backend"
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "JavaScript library for building user interfaces with component-based architecture.",
    category: "frontend"
  },
  {
    name: "VueJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: "Progressive JavaScript framework for building UIs with an incrementally adoptable architecture.",
    category: "frontend"
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Framework for building native mobile applications using React and JavaScript.",
    category: "mobile"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Open-source relational database management system with a wide range of applications.",
    category: "database"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "High-level, interpreted programming language that conforms to ECMAScript specification.",
    category: "language"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Strongly typed programming language that builds on JavaScript with types.",
    category: "language"
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
    description: "Server-side scripting language designed for web development.",
    category: "language"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    description: "Utility-first CSS framework for rapidly building custom designs.",
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side programming.",
    category: "backend"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Distributed version control system for tracking changes in source code during development.",
    category: "tool"
  },
];

const TechItem = ({ name, icon, description }: TechItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="tech-card relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={cn(
        "flex flex-col items-center justify-center transition-all duration-300 p-4", 
        hovered ? "opacity-0" : "opacity-100"
      )}>
        <img src={icon} alt={name} className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-center">{name}</h3>
      </div>
      
      <div className={cn(
        "absolute inset-0 flex items-center justify-center p-4 text-center transition-all duration-300",
        hovered ? "opacity-100" : "opacity-0"
      )}>
        <div>
          <h3 className="text-lg font-medium text-highlight mb-2">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "language", name: "Languages" },
    { id: "mobile", name: "Mobile" },
    { id: "tool", name: "Tools" },
  ];

  const filteredTech = activeFilter === "all" 
    ? techItems 
    : techItems.filter(tech => tech.category === activeFilter);

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-b from-deep-blue to-[#121726]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the technologies I work with to build efficient, scalable, and user-friendly applications.
          </p>
          <div className="w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category.id
                  ? "bg-highlight text-white"
                  : "bg-secondary/50 text-gray-300 hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
