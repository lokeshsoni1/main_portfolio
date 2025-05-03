
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
  theme?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  iconSize = 20,
  vertical = false,
  theme = 'light'
}) => {
  const getIconColor = () => {
    switch (theme) {
      case 'dark':
        return 'text-gray-400 hover:text-teal-400';
      case 'creative':
        return 'text-indigo-400 hover:text-fuchsia-500';
      default:
        return 'text-portfolio-slate hover:text-portfolio-teal';
    }
  };

  const socialLinks = [
    { icon: <Github size={iconSize} />, url: "https://github.com/lokeshsoni1/", label: "GitHub" },
    { icon: <Linkedin size={iconSize} />, url: "https://www.linkedin.com/in/lokesh-soni-2b3b7034a/", label: "LinkedIn" },
    { icon: <Instagram size={iconSize} />, url: "https://www.instagram.com/lokesh.soni194/", label: "Instagram" },
  ];

  return (
    <ul className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${getIconColor()} transition-transform hover:scale-110 inline-block`}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
