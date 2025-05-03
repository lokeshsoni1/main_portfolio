
import React, { useEffect } from 'react';
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
      role: "Business Owner",
      company: "Creative Solutions",
      text: "Lokesh created an amazing promotional video for my business. His attention to detail and creativity exceeded my expectations. The video has significantly increased engagement on our social media platforms.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "TechFlow",
      text: "Working with Lokesh on our UI/UX design was a fantastic experience. He understood our vision perfectly and delivered designs that were both beautiful and functional. Our users love the new interface!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Global Reach",
      text: "Lokesh's data entry work was incredibly accurate and efficient. He processed thousands of records for us without a single error and completed the project ahead of schedule. I highly recommend his services!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Content Creator",
      company: "Visual Media",
      text: "The video editing work Lokesh did for my YouTube channel transformed my content. His creative transitions and perfect timing sense made my videos much more engaging. My subscriber count has grown by 40% since working with him!",
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
          <span className="text-portfolio-teal dark:text-pink-400 creative:text-fuchsia-500">05.</span> Client Testimonials
        </h2>
        
        <p className="text-lg text-portfolio-slate dark:text-gray-300 creative:text-gray-700 max-w-3xl mb-12 testimonial-reveal">
          Here's what my clients have to say about working with me.
        </p>
        
        <div className="testimonial-reveal">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className={`h-full border-none shadow-lg mx-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white' 
                      : theme === 'creative' 
                        ? 'bg-gradient-to-br from-purple-50 to-indigo-100' 
                        : 'bg-white'
                  }`}>
                    <CardContent className="p-6">
                      <Quote className={`mb-4 ${
                        theme === 'dark' 
                          ? 'text-pink-400' 
                          : theme === 'creative' 
                            ? 'text-fuchsia-500' 
                            : 'text-portfolio-teal'
                      }`} size={24} />
                      <p className="mb-6 italic">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className={`font-bold ${
                            theme === 'dark' 
                              ? 'text-white' 
                              : theme === 'creative' 
                                ? 'text-indigo-600' 
                                : 'text-portfolio-navy'
                          }`}>{testimonial.name}</h4>
                          <p className={`text-sm ${
                            theme === 'dark' 
                              ? 'text-gray-300' 
                              : theme === 'creative' 
                                ? 'text-gray-600' 
                                : 'text-portfolio-slate'
                          }`}>
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
