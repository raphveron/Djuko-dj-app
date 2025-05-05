'use client';

import React from 'react';
import HeroSection from '@/components/webflow/home-v1/HeroSection';
import { LogoGrid } from '@/components/webflow/home-v1/LogoGrid';
import { FeaturesSection } from '@/components/webflow/home-v1/FeaturesSection';
import { StatisticsSection } from '@/components/webflow/home-v1/StatisticsSection';
import { JoinSection } from '@/components/webflow/home-v1/JoinSection';
import { TestimonialsSection } from '@/components/webflow/home-v1/TestimonialsSection';

export default function HomePage() {
  // Données pour la section Hero
  const heroData = {
    title: "Enhance your financial control with Nexio",
    description: "Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises.",
    ctaText: "Get started",
    ctaLink: "http://www.temlis.com"
  };

  // Données pour la section Logos
  const logosData = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/Logo${i % 4 === 0 ? '' : `-${i % 4}`}.svg`,
    alt: `Logo ${i + 1}`
  }));

  // Données pour la section Features
  const featuresData = {
    title: "How our platform makes your workflow easier",
    description: "Our comprehensive suite of tools helps you manage your finances efficiently",
    features: [
      {
        title: "Sign up and customize",
        description: "Create your account in minutes and tailor the platform to meet your company's unique financial needs.",
        image: "/images/card_1card.webp"
      },
      {
        title: "Link Your Accounts",
        description: "Create your account in minutes and tailor the platform to meet your company's unique financial needs.",
        image: "/images/card-1_1card-1.webp"
      },
      {
        title: "Integrate Your Data",
        description: "Easily link your bank accounts, credit cards, loans, and investment accounts.",
        image: "/images/card-2_1card-2.webp"
      },
      {
        title: "Start Managing Efficiently",
        description: "Seamlessly connect your existing financial tools and import your data for a smooth transition.",
        image: "/images/card-3_1card-3.webp"
      }
    ]
  };

  // Données pour la section Statistics
  const statisticsData = {
    title: "The numbers that define our success",
    description: "Our impact in numbers",
    statistics: [
      {
        value: "95%",
        label: "Fast-Track Results"
      },
      {
        value: "20%",
        label: "Increased Efficiency"
      },
      {
        value: "36%",
        label: "Performance Leap"
      },
      {
        value: "54%",
        label: "Strategic Advantage"
      }
    ]
  };

  // Données pour la section Join
  const joinData = {
    title: "Ready to transform your financial management?",
    description: "Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.",
    ctaText: "Get started",
    ctaLink: "http://www.temlis.com"
  };

  // Données pour la section Testimonials
  const testimonialsData = {
    title: "What our clients are saying",
    description: "Our financial management platform is transforming the way people manage their money. Here's what some of our users have to say about their experience",
    testimonials: [
      {
        name: "David James",
        role: "Small Business Owner",
        avatar: "/images/profiles-8_1profiles-8.webp",
        content: "Aurion made managing our finances so easy. I can track everything in one place!"
      },
      {
        name: "Daniel Harnes",
        role: "CFO",
        avatar: "/images/profiles-7_1profiles-7.webp",
        content: "Aurion keeps us organized and on top of our budget. Love it!"
      },
      {
        name: "Maria Clayton",
        role: "Operations Manager",
        avatar: "/images/profiles-6_1profiles-6.webp",
        content: "We rely on Aurion to keep our financials transparent and organized. The donor tracking and expense categorization features are perfect for nonprofits like ours. Plus, the customer support is always there when we need help!"
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <HeroSection {...heroData} />
      <LogoGrid logos={logosData} />
      <FeaturesSection {...featuresData} />
      <StatisticsSection {...statisticsData} />
      <JoinSection {...joinData} />
      <TestimonialsSection {...testimonialsData} />
    </main>
  );
} 