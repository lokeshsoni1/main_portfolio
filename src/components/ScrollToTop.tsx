
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed bottom-6 right-6 z-50 p-3 bg-portfolio-teal rounded-full shadow-lg hover:bg-opacity-90 focus:outline-none"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-portfolio-navy" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
