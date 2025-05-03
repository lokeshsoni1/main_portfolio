
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '@/utils/themeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900 shadow-md' 
            : theme === 'creative' 
              ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-purple-100' 
              : 'bg-white shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className={cn(
            "text-2xl font-bold",
            theme === 'dark' ? 'text-white' : theme === 'creative' ? 'text-indigo-600' : 'text-portfolio-navy'
          )}
        >
          Lokesh Soni
        </a>

        {/* Mobile Menu Button */}
        <button 
          className={cn("md:hidden", theme === 'dark' ? 'text-white' : theme === 'creative' ? 'text-indigo-600' : 'text-portfolio-navy')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={cn(
                    "hover:text-portfolio-teal transition-colors capitalize relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-teal after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    theme === 'dark' 
                      ? 'text-gray-300 after:bg-teal-400 hover:text-teal-400' 
                      : theme === 'creative' 
                        ? 'text-indigo-800 after:bg-fuchsia-400 hover:text-fuchsia-600' 
                        : 'text-portfolio-slate'
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <ThemeSwitcher />

          {/* CTA Button - Only visible on desktop */}
          <Button 
            className={cn(
              theme === 'dark' 
                ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' 
                : theme === 'creative' 
                  ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                  : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
            )}
            onClick={() => scrollTo('contact')}
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={cn(
            "md:hidden fixed top-16 left-0 right-0 p-4 z-50 border-t shadow-lg",
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-800' 
              : theme === 'creative' 
                ? 'bg-white/95 backdrop-blur-md border-purple-100' 
                : 'bg-white'
          )}>
            <ul className="flex flex-col gap-4 mb-4">
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className={cn(
                      "w-full text-left py-2 capitalize",
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-teal-400' 
                        : theme === 'creative' 
                          ? 'text-indigo-800 hover:text-fuchsia-600' 
                          : 'text-portfolio-slate hover:text-portfolio-teal'
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeSwitcher />
              <Button 
                size="sm"
                className={cn(
                  theme === 'dark' 
                    ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' 
                    : theme === 'creative' 
                      ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:bg-opacity-90' 
                      : 'bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80'
                )}
                onClick={() => scrollTo('contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
