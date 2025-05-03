
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-portfolio-navy">
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-navy"
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
        <ul className="hidden md:flex gap-8">
          {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-portfolio-slate hover:text-portfolio-teal transition-colors capitalize"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t">
            <ul className="flex flex-col gap-4">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-portfolio-slate hover:text-portfolio-teal transition-colors w-full text-left py-2 capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button - Only visible on desktop */}
        <Button 
          className="hidden md:block bg-portfolio-teal text-portfolio-navy hover:bg-opacity-80"
          onClick={() => scrollTo('contact')}
        >
          Get in touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
