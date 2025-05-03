
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("experience-1");
  
  const experiences: Experience[] = [
    {
      id: "experience-1",
      company: "Tech Corp",
      position: "Senior Frontend Developer",
      duration: "January 2022 - Present",
      description: [
        "Led the frontend development of a React-based SaaS platform, improving load times by 40% through code optimization",
        "Collaborated with designers to implement responsive UI components with Tailwind CSS",
        "Mentored junior developers and conducted code reviews to ensure high-quality deliverables",
        "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 50%"
      ]
    },
    {
      id: "experience-2",
      company: "Web Solutions",
      position: "Frontend Developer",
      duration: "May 2019 - December 2021",
      description: [
        "Developed and maintained multiple client websites using React, Next.js, and Tailwind CSS",
        "Converted design mockups into responsive, accessible websites with a focus on performance",
        "Built reusable component libraries that improved development speed by 30%",
        "Integrated third-party APIs for payment processing, analytics, and CMS functionality"
      ]
    },
    {
      id: "experience-3",
      company: "Creative Agency",
      position: "Web Developer",
      duration: "June 2016 - April 2019",
      description: [
        "Created interactive landing pages and marketing sites for high-profile clients",
        "Maintained and updated existing client websites, adding new features and improving performance",
        "Collaborated with the creative team to ensure technical feasibility of UI/UX designs",
        "Implemented tracking and analytics tools to provide clients with actionable insights"
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
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy experience-reveal">
          <span className="text-portfolio-teal">03.</span> Where I've Worked
        </h2>
        
        <p className="text-lg text-portfolio-slate max-w-3xl mb-12 experience-reveal">
          My professional journey has equipped me with a diverse skill set and experience working in various environments.
        </p>
        
        <div className="experience-reveal">
          <Tabs 
            defaultValue="experience-1" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-4xl mx-auto"
          >
            <TabsList className="grid sm:grid-cols-3 mb-8">
              {experiences.map(exp => (
                <TabsTrigger 
                  key={exp.id} 
                  value={exp.id}
                  className="data-[state=active]:bg-portfolio-teal/10 data-[state=active]:text-portfolio-teal"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map(exp => (
              <TabsContent key={exp.id} value={exp.id}>
                <Card className="p-6 border-l-4 border-portfolio-teal shadow-md">
                  <h3 className="text-xl font-bold text-portfolio-navy mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-portfolio-teal mb-4">{exp.duration}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-portfolio-teal mr-2">▹</span>
                        <span className="text-portfolio-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-16 experience-reveal">
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center text-portfolio-teal hover:underline">
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
