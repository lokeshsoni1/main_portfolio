
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg focus:outline-none transition-all hover:scale-110 ${
            theme === 'dark' 
              ? 'bg-teal-500 text-gray-900 shadow-teal-500/20' 
              : theme === 'creative' 
                ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-fuchsia-500/20' 
                : 'bg-portfolio-teal text-portfolio-navy shadow-portfolio-teal/20'
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
