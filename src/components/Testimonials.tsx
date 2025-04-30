"use client";
import React from 'react'
import { Card } from '../../components/Card'
import { Button } from './Button'

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Amazing Experience"
            description="The DJ service was exceptional. They made our event unforgettable!"
            image="/images/testimonial-1.jpg"
            footer={
              <Button variant="primary" size="sm">
                Read More
              </Button>
            }
          />
          <Card
            title="Professional Service"
            description="Very professional and accommodating. Would definitely recommend!"
            image="/images/testimonial-2.jpg"
            footer={
              <Button variant="primary" size="sm">
                Read More
              </Button>
            }
          />
          <Card
            title="Perfect Music Selection"
            description="They understood exactly what we wanted and delivered beyond expectations."
            image="/images/testimonial-3.jpg"
            footer={
              <Button variant="primary" size="sm">
                Read More
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
} 