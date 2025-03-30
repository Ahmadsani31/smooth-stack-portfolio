
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProjectModal from './ProjectModal';

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images: ProjectImage[]; // Changed from optional to required
  technologies: string[];
  features?: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    longDescription: "An end-to-end e-commerce solution designed for small to medium businesses. The platform offers comprehensive product management, inventory tracking, shopping cart functionality, and secure payment processing with Stripe integration. The admin dashboard provides detailed analytics and reporting tools.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=E-Commerce+Platform",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=E-Commerce+Dashboard", alt: "Admin Dashboard" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=E-Commerce+Products", alt: "Product Listing" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=E-Commerce+Cart", alt: "Shopping Cart" }
    ],
    technologies: ["Laravel", "MySQL", "ReactJS", "Redux", "Stripe", "TailwindCSS", "Docker"],
    features: [
      "User authentication and role-based access control",
      "Product catalog with categories and search functionality",
      "Shopping cart and wishlist management",
      "Secure checkout with multiple payment options",
      "Order tracking and notification system"
    ],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Learning Management System",
    description: "An online learning platform for educational institutions with course management and progress tracking.",
    longDescription: "A comprehensive learning management system that enables educational institutions to create, manage, and deliver online courses. The platform includes features for course creation, enrollment management, progress tracking, assessment tools, and certification.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Learning+Management+System",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=LMS+Dashboard", alt: "LMS Dashboard" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=LMS+Courses", alt: "Course Listing" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=LMS+Progress", alt: "Student Progress" }
    ],
    technologies: ["VueJS", "Laravel", "MySQL", "TailwindCSS", "Redis", "Websockets"],
    features: [
      "Course creation and management tools",
      "Interactive lesson builder with multimedia support",
      "Student progress tracking and analytics",
      "Assessment and grading system",
      "Certificate generation and verification"
    ],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Inventory Management System",
    description: "A system to track inventory levels, orders, sales, and deliveries for small to medium businesses.",
    longDescription: "A robust inventory management solution that helps businesses efficiently track stock levels, manage orders, and optimize supply chain operations. The system provides real-time inventory updates, automated reordering, and comprehensive reporting.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Inventory+Management",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Inventory+Dashboard", alt: "Inventory Dashboard" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Inventory+Products", alt: "Product Management" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Inventory+Reports", alt: "Analytics Reports" }
    ],
    technologies: ["CodeIgniter", "MySQL", "jQuery", "Bootstrap", "Chart.js", "AJAX"],
    features: [
      "Real-time inventory tracking and alerts",
      "Purchase order and supplier management",
      "Barcode scanning integration",
      "Sales order processing and fulfillment",
      "Customizable reports and analytics"
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Healthcare Booking App",
    description: "A mobile app allowing patients to book appointments with healthcare providers.",
    longDescription: "A healthcare appointment booking application that connects patients with healthcare providers. The app streamlines the appointment scheduling process, reduces wait times, and improves patient experience through automated reminders and digital record keeping.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Healthcare+Booking+App",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Healthcare+App+Home", alt: "App Home Screen" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Healthcare+App+Booking", alt: "Booking Interface" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Healthcare+App+Profile", alt: "User Profile" }
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Express", "Redux"],
    features: [
      "Doctor search and filtering by specialty",
      "Real-time appointment availability",
      "Secure patient record management",
      "Appointment reminders and notifications",
      "Telemedicine video consultation"
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    longDescription: "A powerful task management solution designed to enhance team productivity and collaboration. The dashboard provides intuitive task organization, progress tracking, and real-time communication features to streamline project workflows.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Task+Management",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Task+Dashboard", alt: "Task Dashboard" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Task+Board", alt: "Kanban Board" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Task+Calendar", alt: "Calendar View" }
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    features: [
      "Kanban board with drag-and-drop interface",
      "Real-time updates and notifications",
      "Team collaboration and task assignment",
      "Time tracking and productivity analytics",
      "Integration with popular tools (Slack, GitHub)"
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "A web app for tracking personal finances, expenses, and creating budget plans.",
    longDescription: "A comprehensive personal finance management application that helps users track income, expenses, and savings. The app provides insightful visualizations, budget planning tools, and financial goal tracking to improve users' financial health.",
    image: "https://placehold.co/800x600/121726/8b5cf6?text=Finance+Tracker",
    images: [
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Finance+Dashboard", alt: "Finance Dashboard" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Finance+Expenses", alt: "Expense Tracking" },
      { src: "https://placehold.co/800x600/121726/8b5cf6?text=Finance+Budget", alt: "Budget Planning" }
    ],
    technologies: ["VueJS", "Firebase", "Chart.js", "TailwindCSS", "Vuex", "Cloud Functions"],
    features: [
      "Multi-account and multi-currency support",
      "Recurring transaction management",
      "Budget creation and enforcement",
      "Interactive reports and visualizations",
      "Financial goal setting and tracking"
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

const ProjectCard = ({ project, index, onClick }: { project: ProjectProps; index: number; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={cn(
        "project-card transform transition-all duration-500 h-full cursor-pointer",
        isHovered ? "scale-[1.02]" : "",
        project.featured ? "md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
        
        <motion.div 
          className={cn(
            "absolute bottom-0 right-0 p-4 transform translate-y-full opacity-0 transition-all duration-300",
            isHovered ? "translate-y-0 opacity-100" : ""
          )}
        >
          <div className="bg-highlight rounded-full p-2">
            <ArrowRight size={20} className="text-white" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const showMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 2, projects.length));
  };

  const openProjectModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <motion.section 
      id="projects" 
      className="section-padding bg-[#121726]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
          <div className="w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={() => openProjectModal(project)}
            />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={showMoreProjects}
              className="bg-transparent border border-highlight hover:bg-highlight/10 text-highlight font-medium py-2 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          open={modalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      )}
    </motion.section>
  );
};

export default Projects;
