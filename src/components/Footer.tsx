
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-400 max-w-md">
              A passionate frontend developer building modern web applications that are fast, accessible and easy to use.
            </p>
          </div>
          
          <div>
            <SocialLinks iconSize={24} className="justify-center md:justify-end" />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-portfolio-teal transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-portfolio-teal transition-colors text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-portfolio-teal transition-colors text-sm">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
