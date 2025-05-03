
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on load
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const cta = ctaRef.current;

    if (heading) {
      setTimeout(() => {
        heading.classList.add('active');
      }, 300);
    }

    if (description) {
      setTimeout(() => {
        description.classList.add('active');
      }, 600);
    }

    if (cta) {
      setTimeout(() => {
        cta.classList.add('active');
      }, 900);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-portfolio-lightGray flex flex-col justify-center py-16 px-6"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <p className="text-portfolio-teal font-medium mb-2 reveal" ref={headingRef}>
            Hello, my name is
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy reveal" ref={headingRef}>
            John Doe
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-slate opacity-80 reveal" ref={headingRef}>
            I build things for the web.
          </h2>
          <p className="text-portfolio-slate max-w-lg text-lg reveal" ref={descriptionRef}>
            I'm a frontend developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal" ref={ctaRef}>
            <Button 
              className="bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80 py-6 px-8 text-lg"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 py-6 px-8 text-lg"
              onClick={scrollToProjects}
            >
              View My Projects
            </Button>
          </div>
          
          <div className="pt-8 reveal">
            <SocialLinks />
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-lg animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
