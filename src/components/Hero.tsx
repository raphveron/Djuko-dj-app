"use client"
import React from 'react'
import Image from 'next/image'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    label: string
    href: string
  }
  backgroundImage?: string
  visualImage?: string
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  cta,
  backgroundImage,
  visualImage
}) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />
      )}

      {/* Optional: debug bg */}
      {/* <div className="absolute inset-0 bg-red-100 opacity-10 z-0" /> */}

      <div className="container-large relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-lg font-medium text-primary">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600">
                {description}
              </p>
            )}
            {cta && (
              <div className="pt-4">
                <a
                  href={cta.href}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {cta.label}
                </a>
              </div>
            )}
          </div>

          {/* Visual */}
          {visualImage && (
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src={visualImage}
                alt="Hero visual"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
