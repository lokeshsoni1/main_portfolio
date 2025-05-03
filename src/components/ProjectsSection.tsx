import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: "project1",
      title: "Simple Calculator (Python)",
      description: "Created a basic calculator using Python that can perform addition, subtraction, multiplication, and division.",
      longDescription: "This Python calculator was one of my first programming projects. It features a simple command-line interface that allows users to perform basic arithmetic operations. The application handles input validation, preventing errors from invalid inputs, and includes a memory function to store previous results. Despite its simplicity, this project helped me understand fundamental programming concepts like functions, conditional statements, and user input handling in Python.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["Python", "Command Line", "Arithmetic Logic"],
      demoUrl: "https://github.com/lokeshsoni",
      githubUrl: "https://github.com/lokeshsoni",
      featured: true
    },
    {
      id: "project2",
      title: "Portfolio Website",
      description: "This portfolio website is my first front-end web development project to showcase my skills and learning journey.",
      longDescription: "This portfolio website represents my journey into front-end web development. Built with React and Tailwind CSS, it features a responsive design, theme switching capability, and smooth animations. The site includes sections for showcasing my projects, skills, and testimonials from clients. Building this portfolio helped me understand component-based architecture, responsive design principles, and how to create engaging user interfaces. The theme switching feature demonstrates my understanding of React context and state management.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
      demoUrl: "https://github.com/lokeshsoni",
      githubUrl: "https://github.com/lokeshsoni",
      featured: true
    },
    {
      id: "project3",
      title: "Milk Planner",
      description: "It is a web app to track daily milk usage, delivery, and total cost efficiently & print the Monthly Bill.",
      longDescription: "The Milk Planner is a practical web application designed to solve a common household problem - tracking milk deliveries and payments. Users can log daily deliveries, record usage, and generate monthly bills. The application calculates costs automatically based on quantity and rates. It features a clean, intuitive interface that makes data entry simple, and a reporting system that provides insights into consumption patterns. This project demonstrates my ability to create practical solutions for everyday problems using web technologies.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      demoUrl: "https://github.com/lokeshsoni",
      githubUrl: "https://github.com/lokeshsoni",
      featured: false
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
    <section 
      id="projects" 
      className={`py-24 px-6 ${
        theme === 'dark' 
          ? 'bg-gray-900 text-white' 
          : theme === 'creative' 
            ? 'bg-gradient-to-br from-indigo-50 to-purple-100' 
            : 'bg-portfolio-lightGray'
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 project-reveal ${
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
          }>02.</span> Projects I've Built
        </h2>
        
        <p className={`text-lg max-w-3xl mb-12 project-reveal ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : theme === 'creative' 
              ? 'text-gray-700' 
              : 'text-portfolio-slate'
        }`}>
          A selection of projects I've worked on, showcasing my skills and experience in web development and design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`overflow-hidden shadow-lg project-reveal border-none cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white' 
                  : theme === 'creative' 
                    ? 'bg-white shadow-purple-200/50' 
                    : 'bg-white'
              }`} 
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' 
                    ? 'text-white' 
                    : theme === 'creative' 
                      ? 'text-indigo-700' 
                      : 'text-portfolio-navy'
                }`}>{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className={`mb-4 ${
                  theme === 'dark' 
                    ? 'text-gray-300' 
                    : theme === 'creative' 
                      ? 'text-gray-700' 
                      : 'text-portfolio-slate'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={
                        theme === 'dark' 
                          ? 'bg-teal-900/20 text-teal-300 border-teal-700/50' 
                          : theme === 'creative' 
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                            : 'bg-portfolio-teal/10 text-portfolio-navy border-portfolio-teal/30'
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={
                    theme === 'dark' 
                      ? 'border-teal-500 text-teal-400 hover:bg-teal-900/30' 
                      : theme === 'creative' 
                        ? 'border-fuchsia-400 text-fuchsia-600 hover:bg-fuchsia-50' 
                        : 'border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10'
                  }
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center" onClick={(e) => e.stopPropagation()}>
                    <Globe className="mr-1" size={16} />
                    Live Demo
                  </a>
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={
                    theme === 'dark' 
                      ? 'border-teal-500 text-teal-400 hover:bg-teal-900/30' 
                      : theme === 'creative' 
                        ? 'border-fuchsia-400 text-fuchsia-600 hover:bg-fuchsia-50' 
                        : 'border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10'
                  }
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center" onClick={(e) => e.stopPropagation()}>
                    <Github className="mr-1" size={16} />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 project-reveal">
          <Button 
            className={
              theme === 'dark' 
                ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' 
                : theme === 'creative' 
                  ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                  : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
            }
          >
            <a href="https://github.com/lokeshsoni" target="_blank" rel="noopener noreferrer">
              See More Projects
            </a>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className={`sm:max-w-3xl overflow-auto max-h-[85vh] ${
          theme === 'dark' 
            ? 'bg-gray-800 text-white border-gray-700' 
            : theme === 'creative' 
              ? 'bg-white border-purple-200' 
              : 'bg-white'
        }`}>
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className={
                  theme === 'dark' 
                    ? 'text-white' 
                    : theme === 'creative' 
                      ? 'text-indigo-700' 
                      : 'text-portfolio-navy'
                }>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="mb-6 rounded-md overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <DialogDescription className={`text-base mb-4 ${
                theme === 'dark' 
                  ? 'text-gray-300' 
                  : theme === 'creative' 
                    ? 'text-gray-700' 
                    : 'text-portfolio-slate'
              }`}>
                {selectedProject.longDescription}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className={
                      theme === 'dark' 
                        ? 'bg-teal-900/20 text-teal-300 border-teal-700/50' 
                        : theme === 'creative' 
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                          : 'bg-portfolio-teal/10 text-portfolio-navy border-portfolio-teal/30'
                    }
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 justify-end">
                <Button 
                  variant="outline" 
                  className={
                    theme === 'dark' 
                      ? 'border-teal-500 text-teal-400 hover:bg-teal-900/30' 
                      : theme === 'creative' 
                        ? 'border-fuchsia-400 text-fuchsia-600 hover:bg-fuchsia-50' 
                        : 'border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10'
                  }
                >
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2" size={16} />
                    View Source
                  </a>
                </Button>
                <Button 
                  className={
                    theme === 'dark' 
                      ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' 
                      : theme === 'creative' 
                        ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                        : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
                  }
                >
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
