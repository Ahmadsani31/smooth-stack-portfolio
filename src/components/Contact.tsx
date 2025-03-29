
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactCard = ({ icon: Icon, title, value, link }: { icon: React.ElementType, title: string, value: string, link?: string }) => (
  <a 
    href={link || '#'} 
    target={link ? '_blank' : '_self'} 
    rel="noopener noreferrer"
    className="flex items-start gap-4 bg-card rounded-xl p-6 hover:shadow-lg hover:shadow-highlight/10 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="bg-highlight/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
      <Icon className="text-highlight" size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-300">{value}</p>
    </div>
  </a>
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

  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-deep-blue to-[#121726] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzEyMTcyNiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0Ljg1LTY0MC04NC44NXpNMzIwIDE0MC4wMVoiLz48L2c+PC9zdmc+')]" style={{ backgroundSize: '100% 100%', transform: 'rotate(180deg)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-highlight mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid gap-6">
              <ContactCard 
                icon={Mail}
                title="Email"
                value="your.email@example.com"
                link="mailto:your.email@example.com"
              />
              <ContactCard 
                icon={Phone}
                title="Phone"
                value="+62 812 3456 7890"
                link="tel:+6281234567890"
              />
              <ContactCard 
                icon={Github}
                title="GitHub"
                value="github.com/yourusername"
                link="https://github.com/yourusername"
              />
              <ContactCard 
                icon={Linkedin}
                title="LinkedIn"
                value="linkedin.com/in/yourusername"
                link="https://linkedin.com/in/yourusername"
              />
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-secondary/70 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-secondary/70 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 border border-secondary/70 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary/50 border border-secondary/70 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-highlight hover:bg-highlight/80 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
