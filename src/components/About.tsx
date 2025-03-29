
import React from 'react';
import { User, Code2, Briefcase, Star } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-highlight/20 transition-all duration-300 hover:-translate-y-1">
    <div className="bg-highlight/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-highlight" size={24} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding bg-deep-blue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-highlight mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-4">Full Stack Web Developer with <span className="text-highlight">Passion for Building</span> Robust Applications</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate and detail-oriented Full Stack Web Developer with extensive experience in building scalable, efficient, and user-friendly web applications. 
              My expertise lies in combining my technical skills with creative problem-solving to create solutions that not only meet but exceed client expectations.
            </p>
            <p className="text-gray-300 mb-6">
              With a background in both front-end and back-end development, I approach each project with a holistic view, ensuring all components work together seamlessly 
              to create an exceptional user experience. I'm constantly learning and staying up-to-date with the latest technologies and best practices in the field.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-highlight hover:bg-highlight/80 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-highlight/30">
                Get In Touch
              </a>
              <a href="#" className="border border-highlight text-highlight hover:bg-highlight/10 font-medium py-2 px-6 rounded-lg transition-all duration-300">
                Download CV
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <AboutCard 
              icon={User}
              title="Passionate Developer"
              description="I love creating efficient and user-friendly applications that solve real-world problems."
            />
            <AboutCard 
              icon={Code2}
              title="Clean Code Advocate"
              description="I believe in writing clean, maintainable code that stands the test of time."
            />
            <AboutCard 
              icon={Briefcase}
              title="Professional Experience"
              description="Worked at Institut Teknologi Padang and on various freelance projects."
            />
            <AboutCard 
              icon={Star}
              title="Continuous Learner"
              description="Always expanding my knowledge and staying updated with the latest technologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
