
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
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, cart functionality, and payment integration using Stripe.",
      longDescription: "This comprehensive e-commerce platform was built from the ground up to provide a seamless shopping experience. Features include user authentication with multiple roles, a dynamic product catalog with filtering and search capabilities, an intuitive cart system with persistent storage, and secure payment processing through Stripe integration. The admin dashboard provides powerful tools for inventory management, order processing, and analytics tracking. The responsive design ensures a great user experience across all devices, while optimized image loading and code splitting techniques maintain fast page load times even on slower connections.",
      image: "https://images.unsplash.com/photo-1509395452344-005c7d74c555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux", "JWT"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "project2",
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop interfaces, task categorization, and real-time updates.",
      longDescription: "This task management application helps teams collaborate effectively with intuitive drag-and-drop interfaces and real-time updates. The app features customizable boards and columns, detailed task cards with comments and attachments, deadline notifications, and comprehensive progress tracking. Team collaboration is enhanced through permission controls, activity logs, and @ mentions. The application was designed with a focus on performance, implementing optimistic UI updates and efficient state management to ensure smooth operation even with hundreds of tasks.",
      image: "https://images.unsplash.com/photo-1496059356248-96a5466d847d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS", "dnd-kit", "TypeScript"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "project3",
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current and forecasted weather data using OpenWeatherMap API with location search.",
      longDescription: "This weather dashboard provides comprehensive weather information with a beautiful, intuitive interface. Users can search for locations worldwide, view detailed current conditions, and check hourly and 7-day forecasts. The application features interactive charts for temperature, precipitation, and wind trends, as well as customizable units (Celsius/Fahrenheit) and themes. Weather alerts and notifications can be enabled for severe weather conditions. The progressive web app capabilities allow offline access to previously viewed forecasts, while geolocation integration provides instant local weather data.",
      image: "https://images.unsplash.com/photo-1542435593-5aafa45744cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "API Integration", "PWA"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: "project4",
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking app that allows users to record workouts, track progress, and set fitness goals.",
      longDescription: "This fitness tracking application helps users achieve their health and fitness goals through detailed workout logging, progress visualization, and personalized recommendations. Users can create custom workout routines, track sets, reps, and weights, and view their progress through interactive charts and graphs. The app includes a built-in exercise library with instructional videos, body measurement tracking, and achievement badges for motivation. Social features allow users to connect with friends, share achievements, and participate in challenges. A nutrition tracker component helps users maintain a balanced diet alongside their fitness routine.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React Native", "Firebase", "Redux", "ChartJS", "NodeJS"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
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
