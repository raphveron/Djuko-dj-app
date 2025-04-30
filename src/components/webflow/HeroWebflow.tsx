"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface HeroWebflowProps {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundImage: string;
  visualImage: string;
}

export const HeroWebflow: React.FC<HeroWebflowProps> = ({
  title,
  subtitle,
  description,
  cta,
  backgroundImage,
  visualImage,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="relative overflow-hidden min-h-[80vh] flex items-center"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container-large py-16 md:py-24">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-primary">{subtitle}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              {cta.label}
            </a>
          </motion.div>

          {/* Visual Image */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16 aspect-video w-full max-w-4xl mx-auto"
          >
            <Image
              src={visualImage}
              alt="Product dashboard preview"
              fill
              className="object-contain"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 