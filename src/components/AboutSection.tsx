
import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
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
    "HTML", "CSS", "JavaScript", "TypeScript", "React", 
    "Next.js", "Tailwind CSS", "Node.js", "Express", 
    "MongoDB", "Git", "Figma", "UI/UX Design"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy about-reveal">
              <span className="text-portfolio-teal">01.</span> About Me
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-portfolio-slate about-reveal delay-100">
                Hello! My name is John, and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try customizing a Tumblr theme — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              
              <p className="text-lg text-portfolio-slate about-reveal delay-200">
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a large corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              
              <p className="text-lg text-portfolio-slate about-reveal delay-300">
                I also recently launched a course that covers everything you need to build a web app with the MERN stack.
              </p>
              
              <div className="about-reveal delay-400">
                <p className="text-lg font-medium text-portfolio-navy mb-4">Here are a few technologies I've been working with recently:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-portfolio-teal/10 text-portfolio-navy border-portfolio-teal/30 py-1.5 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative about-reveal">
              <div className="absolute inset-0 border-2 border-portfolio-teal transform translate-x-4 translate-y-4 rounded-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Working on code" 
                className="rounded-md relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
