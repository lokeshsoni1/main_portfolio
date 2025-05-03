
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { useTheme } from '@/utils/themeContext';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.contact-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white' 
          : theme === 'creative' 
            ? 'bg-white' 
            : 'bg-portfolio-lightGray'
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 contact-reveal ${
          theme === 'dark' 
            ? 'text-white' 
            : theme === 'creative' 
              ? 'text-indigo-600' 
              : 'text-portfolio-navy'
        }`}>
          <span className={
            theme === 'dark' 
              ? 'text-teal-400' 
              : theme === 'creative' 
                ? 'text-fuchsia-500' 
                : 'text-portfolio-teal'
          }>05.</span> Get In Touch
        </h2>
        
        <p className={`text-lg max-w-3xl mb-12 contact-reveal ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : theme === 'creative' 
              ? 'text-gray-700' 
              : 'text-portfolio-slate'
        }`}>
          Need any help? Have a question? Or just want to say hi? I'm here to help and would love to hear from you!
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 contact-reveal">
            <div className={`p-8 rounded-lg shadow-md ${
              theme === 'dark' 
                ? 'bg-gray-900' 
                : theme === 'creative' 
                  ? 'bg-white shadow-purple-200/50' 
                  : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' 
                  ? 'text-white' 
                  : theme === 'creative' 
                    ? 'text-indigo-700' 
                    : 'text-portfolio-navy'
              }`}>Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className={
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-500' 
                          : theme === 'creative' 
                            ? 'border-indigo-200 focus:border-fuchsia-400' 
                            : 'border-portfolio-teal/30 focus:border-portfolio-teal'
                      } 
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className={
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-500' 
                          : theme === 'creative' 
                            ? 'border-indigo-200 focus:border-fuchsia-400' 
                            : 'border-portfolio-teal/30 focus:border-portfolio-teal'
                      } 
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      className={
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-500' 
                          : theme === 'creative' 
                            ? 'border-indigo-200 focus:border-fuchsia-400' 
                            : 'border-portfolio-teal/30 focus:border-portfolio-teal'
                      } 
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message" 
                      className={`min-h-[150px] ${
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-teal-500' 
                          : theme === 'creative' 
                            ? 'border-indigo-200 focus:border-fuchsia-400' 
                            : 'border-portfolio-teal/30 focus:border-portfolio-teal'
                      }`} 
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className={`w-full ${
                      theme === 'dark' 
                        ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' 
                        : theme === 'creative' 
                          ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                          : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 
                      'Sending...' : 
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    }
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className={`p-8 rounded-lg shadow-md h-full contact-reveal ${
              theme === 'dark' 
                ? 'bg-gray-900' 
                : theme === 'creative' 
                  ? 'bg-white shadow-purple-200/50' 
                  : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' 
                  ? 'text-white' 
                  : theme === 'creative' 
                    ? 'text-indigo-700' 
                    : 'text-portfolio-navy'
              }`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className={
                    theme === 'dark' 
                      ? 'text-teal-400 mt-1 mr-4' 
                      : theme === 'creative' 
                        ? 'text-fuchsia-500 mt-1 mr-4' 
                        : 'text-portfolio-teal mt-1 mr-4'
                  } size={20} />
                  <div>
                    <h4 className={`font-medium ${
                      theme === 'dark' 
                        ? 'text-white' 
                        : theme === 'creative' 
                          ? 'text-indigo-700' 
                          : 'text-portfolio-navy'
                    }`}>Email</h4>
                    <a 
                      href="mailto:lokeshsoniroyal1@gmail.com" 
                      className={`${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-teal-400' 
                          : theme === 'creative' 
                            ? 'text-gray-700 hover:text-fuchsia-600' 
                            : 'text-portfolio-slate hover:text-portfolio-teal'
                      } transition-colors`}
                    >
                      lokeshsoniroyal1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={
                    theme === 'dark' 
                      ? 'text-teal-400 mt-1 mr-4' 
                      : theme === 'creative' 
                        ? 'text-fuchsia-500 mt-1 mr-4' 
                        : 'text-portfolio-teal mt-1 mr-4'
                  } size={20} />
                  <div>
                    <h4 className={`font-medium ${
                      theme === 'dark' 
                        ? 'text-white' 
                        : theme === 'creative' 
                          ? 'text-indigo-700' 
                          : 'text-portfolio-navy'
                    }`}>Phone</h4>
                    <a 
                      href="tel:+918595598458" 
                      className={`${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-teal-400' 
                          : theme === 'creative' 
                            ? 'text-gray-700 hover:text-fuchsia-600' 
                            : 'text-portfolio-slate hover:text-portfolio-teal'
                      } transition-colors`}
                    >
                      +91 8595598458
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className={
                    theme === 'dark' 
                      ? 'text-teal-400 mt-1 mr-4' 
                      : theme === 'creative' 
                        ? 'text-fuchsia-500 mt-1 mr-4' 
                        : 'text-portfolio-teal mt-1 mr-4'
                  } size={20} />
                  <div>
                    <h4 className={`font-medium ${
                      theme === 'dark' 
                        ? 'text-white' 
                        : theme === 'creative' 
                          ? 'text-indigo-700' 
                          : 'text-portfolio-navy'
                    }`}>Location</h4>
                    <p className={
                      theme === 'dark' 
                        ? 'text-gray-300' 
                        : theme === 'creative' 
                          ? 'text-gray-700' 
                          : 'text-portfolio-slate'
                    }>
                      Gurugram, Haryana, India
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h4 className={`font-medium mb-4 ${
                    theme === 'dark' 
                      ? 'text-white' 
                      : theme === 'creative' 
                        ? 'text-indigo-700' 
                        : 'text-portfolio-navy'
                  }`}>Connect with me</h4>
                  <SocialLinks theme={theme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
