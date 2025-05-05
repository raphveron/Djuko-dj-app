import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="text-lg text-secondary-text">{description}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial_card">
              <div className="mb-4 flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  sizes="48px"
                  loading="lazy"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-secondary-text">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-secondary-text">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 