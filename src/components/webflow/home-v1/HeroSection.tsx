import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({ title, description, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="hero-container">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-particles" />
        <div className="hero-gradient" />
        <Image
          src="/images/bg_1-p-1080.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge mb-8">
          <div className="badge_element">
            <div className="badge_gradient" style={{ background: 'linear-gradient(90deg, #4d65ff, transparent)' }} />
            <Image
              src="/images/Frame-1000002213-2_2Frame 1000002213-2.webp"
              alt="Arrow"
              width={16}
              height={16}
              className="relative z-10 w-4 h-4"
            />
          </div>
          <span className="text-sm font-medium">Welcome to Djuko</span>
          <div className="badge_element">
            <div className="badge_gradient" style={{ background: 'linear-gradient(-90deg, #4d65ff, transparent)' }} />
            <Image
              src="/images/Frame-1000002213-3_1-p-130x130q80.png"
              alt="Arrow"
              width={16}
              height={16}
              className="relative z-10 w-4 h-4"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          {title}
        </h1>

        {/* Description */}
        <p className="hero-description">
          {description}
        </p>

        {/* CTA Button */}
        <Link href={ctaLink} className="hero-cta">
          {ctaText}
          <Image
            src="/images/Frame-1000002213-1_1Frame 1000002213-1.webp"
            alt="Arrow"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </Link>
      </div>
    </section>
  );
} 