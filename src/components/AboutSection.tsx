
import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/utils/themeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  
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

    const elements = document.querySelectorAll('.about-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skills = [
    "HTML", "CSS", "JavaScript", "React", 
    "Next.js", "Tailwind CSS", "SQL", 
    "Git", "Figma", "UI/UX Design"
  ];

  return (
    <section 
      id="about" 
      className={`py-24 px-6 ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white' 
          : theme === 'creative' 
            ? 'bg-white' 
            : 'bg-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-12 lg:mb-0">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 about-reveal ${
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
              }>01.</span> About Me
            </h2>
            
            <div className="space-y-4">
              <p className={`text-lg about-reveal delay-100 ${
                theme === 'dark' 
                  ? 'text-gray-300' 
                  : theme === 'creative' 
                    ? 'text-gray-700' 
                    : 'text-portfolio-slate'
              }`}>
                Hello! My name is Lokesh Soni, and I love creating things that live on the internet.
              </p>
              
              <p className={`text-lg about-reveal delay-200 ${
                theme === 'dark' 
                  ? 'text-gray-300' 
                  : theme === 'creative' 
                    ? 'text-gray-700' 
                    : 'text-portfolio-slate'
              }`}>
                Fast-forward to today, I'm currently a first-year Computer Science and Engineering student at Dronacharya College. Along with web development, I specialize in video editing and UI/UX design using Figma. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              
              <div className="about-reveal delay-400">
                <p className={`text-lg font-medium mb-4 ${
                  theme === 'dark' 
                    ? 'text-white' 
                    : theme === 'creative' 
                      ? 'text-indigo-600' 
                      : 'text-portfolio-navy'
                }`}>Here are a few technologies I've been working with recently:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className={
                        theme === 'dark' 
                          ? 'bg-teal-900/20 text-teal-300 border-teal-700/50 py-1.5 px-3' 
                          : theme === 'creative' 
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 py-1.5 px-3' 
                            : 'bg-portfolio-teal/10 text-portfolio-navy border-portfolio-teal/30 py-1.5 px-3'
                      }
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative about-reveal">
              <div className={`absolute inset-0 border-2 transform translate-x-4 translate-y-4 rounded-md ${
                theme === 'dark' 
                  ? 'border-teal-500' 
                  : theme === 'creative' 
                    ? 'border-fuchsia-400' 
                    : 'border-portfolio-teal'
              }`}></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Lokesh Soni" 
                className="rounded-md relative z-10 w-full h-auto object-cover"
              />
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold z-20 ${
                theme === 'dark' 
                  ? 'text-white/70' 
                  : theme === 'creative' 
                    ? 'text-fuchsia-600/70' 
                    : 'text-portfolio-teal/70'
              }`}>
                LS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
