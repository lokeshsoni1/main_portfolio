
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/utils/themeContext';

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience-1");
  
  const experiences: Experience[] = [
    {
      id: "experience-1",
      company: "Freelance",
      position: "Video Editor",
      duration: "January 2022 - Present",
      description: [
        "Created and edited professional videos for various clients including product promotions and social media content",
        "Implemented advanced transitions, color grading and special effects to enhance video quality",
        "Delivered projects within tight deadlines while maintaining high quality standards",
        "Collaborated with clients to understand their vision and requirements for each project"
      ]
    },
    {
      id: "experience-2",
      company: "Freelance",
      position: "UI/UX Designer",
      duration: "May 2021 - Present",
      description: [
        "Designed user-friendly interfaces for web and mobile applications",
        "Created wireframes, mockups and prototypes using industry standard tools",
        "Conducted user research and usability testing to improve design outcomes",
        "Collaborated with developers to ensure accurate implementation of designs"
      ]
    },
    {
      id: "experience-3",
      company: "Freelance",
      position: "Data Entry Specialist",
      duration: "June 2020 - December 2021",
      description: [
        "Managed large datasets with high accuracy and attention to detail",
        "Processed and verified data for various clients across different industries",
        "Maintained data confidentiality and security protocols",
        "Improved data entry processes resulting in 30% increase in efficiency"
      ]
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

    const elements = document.querySelectorAll('.experience-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="experience" 
      className={`py-24 px-6 ${
        theme === 'dark' 
          ? 'bg-gray-900 text-white' 
          : theme === 'creative' 
            ? 'bg-white' 
            : 'bg-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 experience-reveal ${
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
          }>04.</span> Freelance Work
        </h2>
        
        <p className={`text-lg max-w-3xl mb-12 experience-reveal ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : theme === 'creative' 
              ? 'text-gray-700' 
              : 'text-portfolio-slate'
        }`}>
          My freelance journey has equipped me with diverse skills and experience working with various clients globally.
        </p>
        
        <div className="experience-reveal">
          <Tabs 
            defaultValue="experience-1" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-4xl mx-auto"
          >
            <TabsList className={`grid sm:grid-cols-3 mb-8 ${
              theme === 'dark' 
                ? 'bg-gray-800' 
                : theme === 'creative' 
                  ? 'bg-indigo-50' 
                  : ''
            }`}>
              {experiences.map(exp => (
                <TabsTrigger 
                  key={exp.id} 
                  value={exp.id}
                  className={
                    theme === 'dark' 
                      ? 'data-[state=active]:bg-purple-900/40 data-[state=active]:text-pink-400' 
                      : theme === 'creative' 
                        ? 'data-[state=active]:bg-fuchsia-100 data-[state=active]:text-fuchsia-700' 
                        : 'data-[state=active]:bg-portfolio-teal/10 data-[state=active]:text-portfolio-teal'
                  }
                >
                  {exp.position}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map(exp => (
              <TabsContent key={exp.id} value={exp.id}>
                <Card className={`p-6 shadow-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-l-4 border-pink-500' 
                    : theme === 'creative' 
                      ? 'bg-white border-l-4 border-fuchsia-400 shadow-purple-200/30' 
                      : 'border-l-4 border-portfolio-teal'
                }`}>
                  <h3 className={`text-xl font-bold mb-1 ${
                    theme === 'dark' 
                      ? 'text-white' 
                      : theme === 'creative' 
                        ? 'text-indigo-700' 
                        : 'text-portfolio-navy'
                  }`}>
                    {exp.position}
                  </h3>
                  <p className={
                    theme === 'dark' 
                      ? 'text-pink-400 mb-4' 
                      : theme === 'creative' 
                        ? 'text-fuchsia-500 mb-4' 
                        : 'text-portfolio-teal mb-4'
                  }>{exp.duration}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={
                          theme === 'dark' 
                            ? 'text-pink-400 mr-2' 
                            : theme === 'creative' 
                              ? 'text-fuchsia-500 mr-2' 
                              : 'text-portfolio-teal mr-2'
                        }>▹</span>
                        <span className={
                          theme === 'dark' 
                            ? 'text-gray-300' 
                            : theme === 'creative' 
                              ? 'text-gray-700' 
                              : 'text-portfolio-slate'
                        }>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-16 experience-reveal">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className={`inline-flex items-center ${
              theme === 'dark' 
                ? 'text-pink-400 hover:text-pink-300' 
                : theme === 'creative' 
                  ? 'text-fuchsia-600 hover:text-fuchsia-700' 
                  : 'text-portfolio-teal hover:text-portfolio-teal/80'
            } hover:underline`}
          >
            <span>View Full Résumé</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
