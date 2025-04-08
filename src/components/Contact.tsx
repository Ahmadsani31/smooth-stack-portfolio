
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ContactCard = ({ icon: Icon, title, value, link }: { icon: React.ElementType, title: string, value: string, link?: string }) => (
  <motion.a 
    whileHover={{ y: -5 }}
    href={link || '#'} 
    target={link ? '_blank' : '_self'} 
    rel="noopener noreferrer"
    className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg hover:shadow-highlight/10 transition-all duration-300"
  >
    <div className="bg-highlight/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0">
      <Icon className="text-highlight" size={20} />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-base sm:text-lg font-semibold mb-1 truncate text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base break-words">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
        variant: "default"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

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
    <section id="contact" className="section-padding bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2YxZjVmOSI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0Ljg1LTY0MC04NC44NXpNMzIwIDE0MC4wMVoiLz48L2c+PC9zdmc+')]" style={{ backgroundSize: '100% 100%', transform: 'rotate(180deg)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
          <div className="w-16 sm:w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left text-gray-800">Contact Information</h3>
            <div className="grid gap-4 sm:gap-6">
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={Mail}
                  title="Email"
                  value="your.email@example.com"
                  link="mailto:your.email@example.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={Phone}
                  title="Phone"
                  value="+62 812 3456 7890"
                  link="tel:+6281234567890"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={Github}
                  title="GitHub"
                  value="github.com/yourusername"
                  link="https://github.com/yourusername"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={Linkedin}
                  title="LinkedIn"
                  value="linkedin.com/in/yourusername"
                  link="https://linkedin.com/in/yourusername"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left text-gray-800">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-highlight resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="bg-highlight hover:bg-highlight/80 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
