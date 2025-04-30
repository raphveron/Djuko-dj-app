"use client";
import React from 'react'
import { cn } from '../../../utils/cn'
import { Header } from '../../../components/Header'
import { Hero } from '../../../components/Hero'
import { Card } from '../../../components/Card'
import { SectionHeader } from '../../components/SectionHeader'
import { Footer } from '../../components/Footer'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero
          title="Enhance your financial control with Nexio"
          subtitle="Simplify your workflow"
          description="Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises."
          cta={{
            label: "Get started",
            href: "http://www.temlis.com"
          }}
          backgroundImage="/images/bg_1bg.webp"
          visualImage="/images/dash_1dash.webp"
        />

        {/* Logos Section */}
        <section className="py-16">
          <div className="container-large">
            <div className="flex flex-wrap justify-center gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-24 h-12 relative">
                  <Image
                    src={`/images/Logo${i % 4 === 0 ? '' : `-${i % 4}`}.svg`}
                    alt="Partner logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container-large">
            <SectionHeader
              title="How our platform makes your workflow easier"
              subtitle="Our workflow"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
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
              ].map((feature, index) => (
                <Card
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  variant="elevated"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gray-50">
          <div className="container-large">
            <SectionHeader
              title="The numbers that define our success"
              subtitle="Our statistics"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  number: "95%",
                  title: "Fast-Track Results",
                  description: "Accelerate your growth journey with Datagrid's cutting-edge analytics."
                },
                {
                  number: "20%",
                  title: "Increased Efficiency",
                  description: "Uncover hidden opportunities in your data with Datagrid's automated insights."
                },
                {
                  number: "36%",
                  title: "Performance Leap",
                  description: "Elevate your workflows and outpace the competition using Datagrid's advanced features."
                },
                {
                  number: "54%",
                  title: "Strategic Advantage",
                  description: "Gain a competitive edge through Datagrid's powerful, data-driven strategies."
                }
              ].map((stat, index) => (
                <Card
                  key={index}
                  title={stat.title}
                  description={stat.description}
                  footer={
                    <div className="text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                  }
                  variant="flat"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-24">
          <div className="container-large">
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <SectionHeader
                  title="Ready to transform your financial management?"
                  subtitle="Join us"
                  description="Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes."
                  align="center"
                />
                <div className="mt-8">
                  <a
                    href="http://www.temlis.com"
                    className={cn(
                      'inline-flex items-center justify-center',
                      'px-6 py-3 rounded-lg',
                      'bg-primary text-white font-medium',
                      'hover:bg-primary/90 transition-colors'
                    )}
                  >
                    Get started
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/card2_1card2.webp"
                  alt="Background"
                  fill
                  className="object-cover opacity-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="container-large">
            <SectionHeader
              title="What our clients are saying"
              subtitle="Testimonials"
              description="Our financial management platform is transforming the way people manage their money. Here's what some of our users have to say about their experience"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  quote: "Aurion made managing our finances so easy. I can track everything in one place!",
                  author: "David James",
                  role: "Small Business Owner",
                  image: "/images/profiles-8_1profiles-8.webp"
                },
                {
                  quote: "Aurion keeps us organized and on top of our budget. Love it!",
                  author: "Daniel Harnes",
                  role: "CFO",
                  image: "/images/profiles-7_1profiles-7.webp"
                },
                {
                  quote: "We rely on Aurion to keep our financials transparent and organized. The donor tracking and expense categorization features are perfect for nonprofits like ours. Plus, the customer support is always there when we need help!",
                  author: "Maria Clayton",
                  role: "Operations Manager",
                  image: "/images/profiles-6_1profiles-6.webp"
                }
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  variant="flat"
                  className="relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <Image
                      src="/images/Frame-1000002072_1.svg"
                      alt="Quote icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-24">
          <div className="container-large">
            <SectionHeader
              title="Maximizing the value of business data"
              subtitle="Articles"
              description="Our provide valuable insights, and establish your brand as a thought leader in the financial space."
              align="center"
            />
            <div className="mt-12">
              {/* Slider component would go here */}
              <div className="text-center text-gray-500">
                Articles slider coming soon
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage 