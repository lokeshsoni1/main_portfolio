
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, cart functionality, and payment integration using Stripe.",
      image: "https://images.unsplash.com/photo-1509395452344-005c7d74c555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop interfaces, task categorization, and real-time updates.",
      image: "https://images.unsplash.com/photo-1496059356248-96a5466d847d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS", "dnd-kit"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current and forecasted weather data using OpenWeatherMap API with location search.",
      image: "https://images.unsplash.com/photo-1542435593-5aafa45744cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "API Integration"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    }
  ];

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

    const elements = document.querySelectorAll('.project-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-portfolio-lightGray">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy project-reveal">
          <span className="text-portfolio-teal">02.</span> Projects I've Built
        </h2>
        
        <p className="text-lg text-portfolio-slate max-w-3xl mb-12 project-reveal">
          A selection of projects I've worked on, showcasing my skills and experience in web development and design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg project-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold text-portfolio-navy">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-portfolio-teal/10 text-portfolio-navy border-portfolio-teal/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button size="sm" variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Globe className="mr-1" size={16} />
                    Live Demo
                  </a>
                </Button>
                
                <Button size="sm" variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-1" size={16} />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 project-reveal">
          <Button className="bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              See More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
