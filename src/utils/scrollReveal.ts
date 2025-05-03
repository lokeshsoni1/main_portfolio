
export const initScrollReveal = () => {
  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Add staggered animation to child elements with .stagger class
        const staggerElements = entry.target.querySelectorAll('.stagger');
        if (staggerElements.length > 0) {
          staggerElements.forEach((element, index) => {
            setTimeout(() => {
              (element as HTMLElement).classList.add('active');
            }, 150 * index);
          });
        }
      } else {
        // Optional: Remove active class when element is not in view
        // entry.target.classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  const getRevealElements = () => {
    return document.querySelectorAll(
      '.reveal, .about-reveal, .project-reveal, .experience-reveal, .contact-reveal, .skill-reveal, .testimonial-reveal'
    );
  };

  const setupObserver = () => {
    const elements = getRevealElements();
    elements.forEach(element => observer.observe(element));
  };

  const teardownObserver = () => {
    const elements = getRevealElements();
    elements.forEach(element => observer.unobserve(element));
  };

  return {
    setup: setupObserver,
    teardown: teardownObserver
  };
};

export const initParallaxEffect = () => {
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight) {
        const speed = element.getAttribute('data-speed') || '0.2';
        const yPos = -(elementTop * parseFloat(speed));
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
