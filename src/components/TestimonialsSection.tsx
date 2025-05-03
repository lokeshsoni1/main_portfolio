
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/utils/themeContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      text: "Working with Lokesh was a fantastic experience. His attention to detail and ability to translate our vision into reality exceeded our expectations. The website he designed for us not only looks beautiful but performs exceptionally well.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupX",
      text: "Lokesh is a true professional. He took our complex requirements and delivered a clean, intuitive interface that our users love. His technical expertise and problem-solving skills were invaluable to our project's success.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "DesignHub",
      text: "I've worked with many developers, but Lokesh stands out for his creativity and technical prowess. He doesn't just code—he crafts experiences. The website he built for us has significantly increased our conversion rates and user engagement.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateCo",
      text: "Lokesh's work ethic and skill set are truly impressive. He tackled our project challenges with innovative solutions and delivered ahead of schedule. His ability to communicate complex technical concepts in simple terms made the process smooth and enjoyable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.testimonial-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className={`py-24 px-6 ${theme}`}>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-navy dark:text-white creative:text-indigo-600 testimonial-reveal">
          <span className="text-portfolio-teal dark:text-teal-400 creative:text-fuchsia-500">04.</span> Testimonials
        </h2>
        
        <p className="text-lg text-portfolio-slate dark:text-gray-300 creative:text-gray-700 max-w-3xl mb-12 testimonial-reveal">
          Here's what people have to say about working with me.
        </p>
        
        <div className="testimonial-reveal">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className={`h-full border-none shadow-lg mx-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : theme === 'creative' ? 'bg-gradient-to-br from-purple-50 to-indigo-100' : 'bg-white'}`}>
                    <CardContent className="p-6">
                      <Quote className="text-portfolio-teal dark:text-teal-400 creative:text-fuchsia-500 mb-4" size={24} />
                      <p className="mb-6 italic">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-portfolio-navy dark:text-white creative:text-indigo-600">{testimonial.name}</h4>
                          <p className="text-sm text-portfolio-slate dark:text-gray-300 creative:text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative left-0 translate-y-0" />
              <CarouselNext className="relative right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
