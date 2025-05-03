
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal, initParallaxEffect } from '@/utils/scrollReveal';
import { ThemeProvider } from '@/utils/themeContext';
import { Toaster } from "@/components/ui/toaster";

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize scroll animations
    const scrollReveal = initScrollReveal();
    scrollReveal.setup();
    
    // Initialize parallax effects
    const cleanupParallax = initParallaxEffect();
    
    return () => {
      scrollReveal.teardown();
      cleanupParallax();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
        <Toaster />
        
        <style jsx global>
          {`
          /* Common animation styles */
          .typing-text {
            display: inline-block;
          }
          
          .typing-cursor {
            display: inline-block;
            width: 3px;
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          /* Floating shapes animation */
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(360deg);
              opacity: 0;
            }
          }
          
          .floating-shape {
            position: absolute;
            animation: float 15s linear infinite;
            z-index: 1;
          }
          
          /* Theme-specific styles */
          body.dark {
            background-color: #1A1F2C;
            color: white;
          }
          
          body.creative {
            background: linear-gradient(to right, #fdfbfb 0%, #ebedee 100%);
            color: #1e1b4b;
          }
          
          /* Staggered animation for child elements */
          .stagger {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .stagger.active {
            opacity: 1;
            transform: translateY(0);
          }
          `}
        </style>
      </div>
    </ThemeProvider>
  );
};

export default Index;
