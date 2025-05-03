
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';
import { useTheme } from '@/utils/themeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ['Developer', 'Designer', 'Video Editor', 'UI/UX Expert'];
  
  // Typing animation effect
  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let charIndex = 0;
    let typingInterval: number;
    let isDeleting = false;
    let pauseBeforeDelete = false;
    
    const type = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(prev => prev.slice(0, -1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      } else if (pauseBeforeDelete) {
        // Pause before starting to delete
        pauseBeforeDelete = false;
        isDeleting = true;
        setTimeout(type, 1500); // Pause for 1.5 seconds
        return;
      } else {
        // Typing text
        const nextChar = phrase[charIndex];
        setTypedText(prev => prev + nextChar);
        charIndex++;
        
        if (charIndex === phrase.length) {
          pauseBeforeDelete = true;
        }
      }
      
      // Set the speed of typing/deleting
      const speed = isDeleting ? 80 : pauseBeforeDelete ? 1500 : 120;
      typingInterval = window.setTimeout(type, speed);
    };
    
    typingInterval = window.setTimeout(type, 200);
    
    return () => {
      clearTimeout(typingInterval);
    };
  }, [currentPhraseIndex]);

  // Simple animation on load
  useEffect(() => {
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
    
    // Initialize floating shapes
    const createFloatingShape = () => {
      const shape = document.createElement('div');
      const size = Math.random() * 80 + 20; // 20-100px
      const xPos = Math.random() * 100; // 0-100%
      const duration = Math.random() * 20 + 10; // 10-30s
      const delay = Math.random() * 5; // 0-5s
      
      shape.className = 'absolute rounded-full opacity-20 floating-shape';
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.left = `${xPos}%`;
      shape.style.top = '-100px';
      shape.style.animationDuration = `${duration}s`;
      shape.style.animationDelay = `${delay}s`;
      
      // Different colors based on theme
      if (theme === 'dark') {
        shape.style.background = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 155 + 100)}, 0.2)`;
      } else if (theme === 'creative') {
        shape.style.background = `linear-gradient(135deg, rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, 0.3), rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, 0.3))`;
      } else {
        shape.style.background = `rgba(100, 255, 218, ${Math.random() * 0.3 + 0.1})`; // portfolio-teal with varying opacity
      }
      
      const container = document.querySelector('#floating-shapes');
      if (container) container.appendChild(shape);
      
      // Remove shape after animation completes
      setTimeout(() => {
        if (container?.contains(shape)) container.removeChild(shape);
        createFloatingShape(); // Create a new shape
      }, (duration + delay) * 1000);
    };
    
    // Create initial shapes
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createFloatingShape(), i * 500);
    }
  }, [theme]);

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
      className={`relative min-h-screen flex flex-col justify-center py-16 px-6 overflow-hidden ${
        theme === 'dark' 
          ? 'bg-[#1A1F2C] text-white' 
          : theme === 'creative' 
            ? 'bg-gradient-to-br from-indigo-50 to-purple-100' 
            : 'bg-portfolio-lightGray'
      }`}
    >
      {/* Floating shapes container */}
      <div id="floating-shapes" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="lg:w-1/2 space-y-8">
          <p className={`font-medium mb-2 reveal ${
            theme === 'dark' 
              ? 'text-pink-400' 
              : theme === 'creative' 
                ? 'text-fuchsia-500' 
                : 'text-portfolio-teal'
          }`} ref={headingRef}>
            Hello, my name is
          </p>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold reveal ${
            theme === 'dark' 
              ? 'text-white' 
              : theme === 'creative' 
                ? 'text-indigo-600' 
                : 'text-portfolio-navy'
          }`} ref={headingRef}>
            Lokesh Soni
          </h1>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold opacity-80 reveal flex ${
            theme === 'dark' 
              ? 'text-gray-300' 
              : theme === 'creative' 
                ? 'text-indigo-500' 
                : 'text-portfolio-slate'
          }`} ref={headingRef}>
            I'm a{' '}
            <span className={`ml-2 typing-text ${
              theme === 'dark' 
                ? 'text-pink-400' 
                : theme === 'creative' 
                  ? 'text-fuchsia-500' 
                  : 'text-portfolio-teal'
            }`}>
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h2>
          <p className={`max-w-lg text-lg reveal ${
            theme === 'dark' 
              ? 'text-gray-300' 
              : theme === 'creative' 
                ? 'text-gray-700' 
                : 'text-portfolio-slate'
          }`} ref={descriptionRef}>
            I specialize in creating engaging digital experiences through web development, UI/UX design, and video editing. My goal is to deliver exceptional quality work that exceeds client expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal" ref={ctaRef}>
            <Button 
              className={`py-6 px-8 text-lg ${
                theme === 'dark' 
                  ? 'bg-purple-600 text-white hover:bg-purple-500' 
                  : theme === 'creative' 
                    ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                    : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
              }`}
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className={`py-6 px-8 text-lg ${
                theme === 'dark' 
                  ? 'border-pink-500 text-pink-400 hover:bg-gray-800' 
                  : theme === 'creative' 
                    ? 'border-fuchsia-500 text-fuchsia-700 hover:bg-purple-50' 
                    : 'border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10'
              }`}
              onClick={scrollToProjects}
            >
              View My Projects
            </Button>
          </div>
          
          <div className="pt-8 reveal">
            <SocialLinks theme={theme} />
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-lg animate-fadeIn ${
            theme === 'dark' 
              ? 'border-pink-500 shadow-pink-500/20' 
              : theme === 'creative' 
                ? 'border-fuchsia-400 shadow-fuchsia-400/20' 
                : 'border-portfolio-teal shadow-portfolio-teal/20'
          }`}>
            <img 
              src="/lovable-uploads/f5fc9d04-87c1-4eae-b508-3d9cf9ad0459.png" 
              alt="Lokesh Soni"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
