
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=E-Commerce+Platform",
    technologies: ["Laravel", "MySQL", "ReactJS", "Redux", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Learning Management System",
    description: "An online learning platform for educational institutions with course management and progress tracking.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Learning+Management+System",
    technologies: ["VueJS", "Laravel", "MySQL", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Inventory Management System",
    description: "A system to track inventory levels, orders, sales, and deliveries for small to medium businesses.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Inventory+Management",
    technologies: ["CodeIgniter", "MySQL", "jQuery", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Healthcare Booking App",
    description: "A mobile app allowing patients to book appointments with healthcare providers.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Healthcare+Booking+App",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Task+Management",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "A web app for tracking personal finances, expenses, and creating budget plans.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Finance+Tracker",
    technologies: ["VueJS", "Firebase", "Chart.js", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "project-card transform transition-all duration-500 h-full",
        isHovered ? "scale-[1.02]" : "",
        project.featured ? "md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-deep-blue to-transparent opacity-90 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-75"
        )}></div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-secondary/50 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-secondary/50 text-gray-300 px-2 py-1 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex gap-4 mt-4">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-highlight hover:text-highlight/80 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-highlight hover:text-highlight/80 transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
        
        <div className={cn(
          "absolute bottom-0 right-0 p-4 transform translate-y-full opacity-0 transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : ""
        )}>
          <div className="bg-highlight rounded-full p-2">
            <ArrowRight size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 2, projects.length));
  };

  return (
    <section id="projects" className="section-padding bg-[#121726]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
          <div className="w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="text-center">
            <button
              onClick={showMoreProjects}
              className="bg-transparent border border-highlight hover:bg-highlight/10 text-highlight font-medium py-2 px-6 rounded-lg transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
