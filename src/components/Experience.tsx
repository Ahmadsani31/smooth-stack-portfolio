
import React from 'react';
import { Calendar, Briefcase, Award, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ElementType;
}

const experiences: ExperienceItemProps[] = [
  {
    title: "Full Stack Web Developer",
    company: "Institut Teknologi Padang",
    period: "2020 - Present",
    description: [
      "Developed and maintained the university's academic information system using Laravel and MySQL.",
      "Designed and implemented a responsive front-end interface using React and TailwindCSS.",
      "Collaborated with the IT team to ensure system security and optimize database performance.",
      "Integrated payment gateways for student fee management."
    ],
    icon: Briefcase
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2018 - Present",
    description: [
      "Built custom websites and web applications for various clients across different industries.",
      "Designed and implemented e-commerce solutions using Laravel and VueJS.",
      "Created responsive, accessible, and SEO-friendly websites.",
      "Provided ongoing maintenance and support for client websites."
    ],
    icon: Code2
  },
  {
    title: "Technical Consultant",
    company: "Tech Solutions Inc.",
    period: "2019 - 2020",
    description: [
      "Provided technical consultation for web development projects.",
      "Conducted code reviews and implemented best practices for development teams.",
      "Trained junior developers on modern web technologies and methodologies.",
      "Assisted in architecture planning for large-scale web applications."
    ],
    icon: Award
  },
  {
    title: "Web Development Instructor",
    company: "CodeCamp Learning Center",
    period: "2017 - 2019",
    description: [
      "Designed and conducted web development courses for beginners and intermediate learners.",
      "Created comprehensive curriculum covering HTML, CSS, JavaScript, and PHP.",
      "Mentored students on personal projects and portfolio development.",
      "Organized coding workshops and hackathons to promote practical learning."
    ],
    icon: Calendar
  },
];

const ExperienceItem = ({ experience, index }: { experience: ExperienceItemProps, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="timeline-container"
    >
      <div className="timeline-dot border-4 border-deep-blue"></div>
      <div className="bg-card rounded-xl p-4 sm:p-6 mb-8 sm:mb-10 hover:shadow-lg hover:shadow-highlight/10 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="bg-highlight/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mx-auto sm:mx-0">
            <experience.icon className="text-highlight" size={24} />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">{experience.title}</h3>
              <span className="text-highlight">@{experience.company}</span>
            </div>
            <span className="text-gray-400 text-sm block mb-4 text-center sm:text-left">{experience.period}</span>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
              {experience.description.map((item, i) => (
                <li key={i} className="text-sm sm:text-base">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-deep-blue py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development and related fields.
          </p>
          <div className="w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
