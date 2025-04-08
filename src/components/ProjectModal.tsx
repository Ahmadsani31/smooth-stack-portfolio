
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    images: ProjectImage[];
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    features?: string[];
  };
}

const ProjectModal = ({ open, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto bg-white border border-gray-200 p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative"
        >
          {/* Hidden for screen readers but satisfies the accessibility requirement */}
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">{project.description}</DialogDescription>
          
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <DialogClose className="text-gray-500 hover:text-gray-800 p-2">
              <X size={24} />
            </DialogClose>
          </div>

          <div className="p-6">
            {/* Carousel */}
            <Carousel className="w-full mb-8">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-1">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-4">
                <CarouselPrevious className="relative static left-auto translate-y-0 bg-highlight/10 border-highlight/30 text-highlight hover:bg-highlight/20" />
                <CarouselNext className="relative static right-auto translate-y-0 bg-highlight/10 border-highlight/30 text-highlight hover:bg-highlight/20" />
              </div>
            </Carousel>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 text-highlight">Description</h3>
              <p className="text-gray-700">{project.longDescription || project.description}</p>
            </div>

            {/* Features if available */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-highlight">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 text-highlight">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech}
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-4 py-2 rounded-md transition-colors hover:bg-highlight/80"
                >
                  View Live Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors hover:bg-gray-300"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
