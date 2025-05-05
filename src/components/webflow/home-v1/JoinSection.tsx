import React from 'react';
import Link from 'next/link';

interface JoinSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const JoinSection: React.FC<JoinSectionProps> = ({
  title,
  description,
  ctaText,
  ctaLink
}) => {
  return (
    <section className="relative py-16">
      <div className="join_gradient"></div>
      <div className="container mx-auto px-4">
        <div className="join_section">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">{title}</h2>
            <p className="mb-8 text-lg text-secondary-text">{description}</p>
            <Link 
              href={ctaLink} 
              className="button"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 