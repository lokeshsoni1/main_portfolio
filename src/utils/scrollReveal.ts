
export const initScrollReveal = () => {
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  const getRevealElements = () => {
    return document.querySelectorAll('.reveal, .about-reveal, .project-reveal, .experience-reveal, .contact-reveal');
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
