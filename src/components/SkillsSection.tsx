
import React, { useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';

interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  color?: string;
}

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  
  const frontendSkills: Skill[] = [
    { name: 'HTML', percentage: 90, color: '#E34F26' },
    { name: 'CSS', percentage: 85, color: '#1572B6' },
    { name: 'JavaScript', percentage: 90, color: '#F7DF1E' },
    { name: 'React', percentage: 85, color: '#61DAFB' },
    { name: 'TypeScript', percentage: 80, color: '#3178C6' },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 80, color: '#339933' },
    { name: 'Express', percentage: 75, color: '#000000' },
    { name: 'MongoDB', percentage: 70, color: '#47A248' },
    { name: 'REST API', percentage: 85, color: '#0096c7' },
    { name: 'SQL', percentage: 70, color: '#4479A1' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Git', percentage: 85, color: '#F05032' },
    { name: 'UI/UX Design', percentage: 80, color: '#FF7A59' },
    { name: 'Agile', percentage: 75, color: '#83B81A' },
    { name: 'Testing', percentage: 65, color: '#9F44D3' },
    { name: 'DevOps', percentage: 60, color: '#0072C6' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const bar = entry.target.querySelector('.skill-bar-fill');
              if (bar) {
                const percentage = bar.getAttribute('data-percentage');
                (bar as HTMLElement).style.width = `${percentage}%`;
              }
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-bar');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const renderSkill = (skill: Skill, index: number) => (
    <div key={skill.name} className="mb-6 skill-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden skill-bar dark:bg-gray-700">
        <div 
          className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
          data-percentage={skill.percentage}
          style={{ width: '0%', backgroundColor: skill.color }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className={`py-24 px-6 ${theme}`}>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy dark:text-white creative:text-indigo-600 skill-reveal">
          <span className="text-portfolio-teal dark:text-teal-400 creative:text-fuchsia-500">03.</span> My Skills
        </h2>
        
        <p className="text-lg text-portfolio-slate dark:text-gray-300 creative:text-gray-700 max-w-3xl mb-12 skill-reveal">
          I've worked with a variety of technologies in the web development world. Here's a glimpse into my technical expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="skill-reveal">
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy dark:text-white creative:text-indigo-600">Frontend Development</h3>
            {frontendSkills.map((skill, index) => renderSkill(skill, index))}
          </div>
          
          <div className="skill-reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy dark:text-white creative:text-indigo-600">Backend Development</h3>
            {backendSkills.map((skill, index) => renderSkill(skill, index))}
          </div>
          
          <div className="skill-reveal" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy dark:text-white creative:text-indigo-600">Other Skills</h3>
            {otherSkills.map((skill, index) => renderSkill(skill, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
