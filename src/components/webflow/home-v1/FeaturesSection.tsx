import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  description,
  features
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="text-lg text-secondary-text">{description}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="feature_card">
              <div className="mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-secondary-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 