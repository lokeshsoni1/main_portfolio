
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection: React.FC = () => {
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
    // Handle form submission here
    console.log("Form submitted");
    // Could add toast notification here
  };

  return (
    <section id="contact" className="py-24 px-6 bg-portfolio-lightGray">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy contact-reveal">
          <span className="text-portfolio-teal">04.</span> Get In Touch
        </h2>
        
        <p className="text-lg text-portfolio-slate max-w-3xl mb-12 contact-reveal">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 contact-reveal">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-portfolio-navy mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="border-portfolio-teal/30 focus:border-portfolio-teal" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="border-portfolio-teal/30 focus:border-portfolio-teal" />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="border-portfolio-teal/30 focus:border-portfolio-teal" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="min-h-[150px] border-portfolio-teal/30 focus:border-portfolio-teal"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full contact-reveal">
              <h3 className="text-2xl font-bold text-portfolio-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-portfolio-teal mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-portfolio-navy">Email</h4>
                    <a href="mailto:hello@example.com" className="text-portfolio-slate hover:text-portfolio-teal transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-portfolio-teal mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-portfolio-navy">Phone</h4>
                    <a href="tel:+1234567890" className="text-portfolio-slate hover:text-portfolio-teal transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-portfolio-teal mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-portfolio-navy">Location</h4>
                    <p className="text-portfolio-slate">
                      San Francisco, California, USA
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h4 className="font-medium text-portfolio-navy mb-4">Connect with me</h4>
                  <SocialLinks />
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
