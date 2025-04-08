
import React from 'react';
import { User, Code2, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-card rounded-xl p-6 shadow-lg hover:shadow-highlight/20 transition-all duration-300"
  >
    <div className="bg-highlight/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-highlight" size={24} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding bg-deep-blue relative overflow-hidden py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-highlight mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Full Stack Web Developer with <span className="text-highlight">Passion for Building</span> Robust Applications</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate and detail-oriented Full Stack Web Developer with extensive experience in building scalable, efficient, and user-friendly web applications. 
              My expertise lies in combining my technical skills with creative problem-solving to create solutions that not only meet but exceed client expectations.
            </p>
            <p className="text-gray-300 mb-6">
              With a background in both front-end and back-end development, I approach each project with a holistic view, ensuring all components work together seamlessly 
              to create an exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-highlight hover:bg-highlight/80 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-highlight/30 w-full sm:w-auto text-center">
                Get In Touch
              </a>
              <a href="#" className="border border-highlight text-highlight hover:bg-highlight/10 font-medium py-2 px-6 rounded-lg transition-all duration-300 w-full sm:w-auto text-center">
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div variants={itemVariants}>
              <AboutCard 
                icon={User}
                title="Passionate Developer"
                description="I love creating efficient and user-friendly applications that solve real-world problems."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutCard 
                icon={Code2}
                title="Clean Code Advocate"
                description="I believe in writing clean, maintainable code that stands the test of time."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutCard 
                icon={Briefcase}
                title="Professional Experience"
                description="Worked at Institut Teknologi Padang and on various freelance projects."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutCard 
                icon={Star}
                title="Continuous Learner"
                description="Always expanding my knowledge and staying updated with the latest technologies."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
