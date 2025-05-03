
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  iconSize = 20,
  vertical = false 
}) => {
  const socialLinks = [
    { icon: <Github size={iconSize} />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={iconSize} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={iconSize} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={iconSize} />, url: "https://instagram.com", label: "Instagram" },
    { icon: <Globe size={iconSize} />, url: "https://yourwebsite.com", label: "Website" },
  ];

  return (
    <ul className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
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
