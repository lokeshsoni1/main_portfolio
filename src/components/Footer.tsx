
import React from 'react';
import SocialLinks from './SocialLinks';
import { useTheme } from '@/utils/themeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={
      theme === 'dark' 
        ? 'bg-gray-900 text-white py-12 px-6' 
        : theme === 'creative' 
          ? 'bg-indigo-900 text-white py-12 px-6' 
          : 'bg-portfolio-navy text-white py-12 px-6'
    }>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Lokesh Soni</h3>
            <p className={`max-w-md ${
              theme === 'dark' 
                ? 'text-gray-400' 
                : theme === 'creative' 
                  ? 'text-indigo-200' 
                  : 'text-gray-400'
            }`}>
              A passionate frontend developer building modern web applications that are fast, accessible and easy to use.
            </p>
          </div>
          
          <div>
            <SocialLinks iconSize={24} className="justify-center md:justify-end" theme={theme} />
          </div>
        </div>
        
        <div className={`border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${
          theme === 'dark' 
            ? 'border-gray-800' 
            : theme === 'creative' 
              ? 'border-indigo-800' 
              : 'border-gray-800'
        }`}>
          <p className={`text-sm mb-4 md:mb-0 ${
            theme === 'dark' 
              ? 'text-gray-400' 
              : theme === 'creative' 
                ? 'text-indigo-200' 
                : 'text-gray-400'
          }`}>
            © {currentYear} Lokesh Soni. All rights reserved.
          </p>
          
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#" 
                className={`text-sm ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-teal-400' 
                    : theme === 'creative' 
                      ? 'text-indigo-200 hover:text-fuchsia-300' 
                      : 'text-gray-400 hover:text-portfolio-teal'
                } transition-colors`}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`text-sm ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-teal-400' 
                    : theme === 'creative' 
                      ? 'text-indigo-200 hover:text-fuchsia-300' 
                      : 'text-gray-400 hover:text-portfolio-teal'
                } transition-colors`}
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`text-sm ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-teal-400' 
                    : theme === 'creative' 
                      ? 'text-indigo-200 hover:text-fuchsia-300' 
                      : 'text-gray-400 hover:text-portfolio-teal'
                } transition-colors`}
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
