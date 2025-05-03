'use client';

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function HomeV1() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero_padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="badge">
                <div className="light_line">
                  <img src="/images/arrow-left.svg" alt="" className="badge_right" />
                  <div className="light_gradient is-left"></div>
                </div>
                <div className="badge_element">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <span>Simplify your workflow</span>
                  </span>
                  <img src="/images/gradient_1gradient.webp" alt="" className="badge_gradient" />
                </div>
                <div className="light_line">
                  <img src="/images/arrow-right.svg" alt="" className="badge_right" />
                  <div className="light_gradient"></div>
                </div>
              </div>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Enhance your financial control with Nexio
            </h1>
            
            <p className="mb-8 max-w-2xl text-lg text-secondary-text">
              Streamline your business's financial management with our intuitive, scalable SaaS platform. 
              Designed for U.S. enterprises.
            </p>
            
            <Link 
              href="http://www.temlis.com" 
              className="button"
            >
              Get started
            </Link>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg_1bg.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="logos_wrap">
            <div className="logos_flex">
              <div className="logos_group">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="logos">
                    <Image 
                      src={`/images/Logo${i % 4 === 0 ? '' : `-${i % 4}`}.svg`}
                      alt={`Logo ${i + 1}`}
                      width={120}
                      height={40}
                      className="logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span>Our workflow</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              How our platform makes your workflow easier
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="feature_card">
              <div className="mb-4">
                <Image
                  src="/images/card_1card.webp"
                  alt="Sign up and customize"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sign up and customize</h3>
              <p className="text-secondary-text">
                Create your account in minutes and tailor the platform to meet your company's unique financial needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature_card">
              <h3 className="mb-2 text-xl font-semibold">Link Your Accounts</h3>
              <p className="mb-4 text-secondary-text">
                Create your account in minutes and tailor the platform to meet your company's unique financial needs.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/card-1_1card-1.webp"
                  alt="Link Your Accounts"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature_card">
              <h3 className="mb-2 text-xl font-semibold">Integrate Your Data</h3>
              <p className="mb-4 text-secondary-text">
                Easily link your bank accounts, credit cards, loans, and investment accounts.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/card-2_1card-2.webp"
                  alt="Integrate Your Data"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature_card">
              <div className="mb-4">
                <Image
                  src="/images/card-3_1card-3.webp"
                  alt="Start Managing Efficiently"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Start Managing Efficiently</h3>
              <p className="text-secondary-text">
                Seamlessly connect your existing financial tools and import your data for a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span>Our statistics</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              The numbers that define our success
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <div className="stat_card">
              <div className="mb-4 text-4xl font-bold text-primary">95%</div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Fast-Track Results</h3>
              <p className="text-sm text-secondary-text">
                Accelerate your growth journey with Datagrid's cutting-edge analytics.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="stat_card">
              <div className="mb-4 text-4xl font-bold text-primary">20%</div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Increased Efficiency</h3>
              <p className="text-sm text-secondary-text">
                Uncover hidden opportunities in your data with Datagrid's automated insights.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="stat_card">
              <div className="mb-4 text-4xl font-bold text-primary">36%</div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Performance Leap</h3>
              <p className="text-sm text-secondary-text">
                Elevate your workflows and outpace the competition using Datagrid's advanced features.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="stat_card">
              <div className="mb-4 text-4xl font-bold text-primary">54%</div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Strategic Advantage</h3>
              <p className="text-sm text-secondary-text">
                Gain a competitive edge through Datagrid's powerful, data-driven strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join_section">
        <div className="join_gradient"></div>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span>Join us</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to transform your financial management?
            </h2>
            
            <p className="mb-8 max-w-2xl mx-auto text-lg text-secondary-text">
              Streamline your business's financial management with our intuitive, scalable SaaS platform. 
              Designed for U.S. enterprises, our solutions simplify complex processes.
            </p>
            
            <Link 
              href="http://www.temlis.com" 
              className="button"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span>Testimonials</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What our clients are saying
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our financial management platform is transforming the way people manage their money. 
              Here's what some of our users have to say about their experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="mb-4 text-gray-600">
                "Aurion made managing our finances so easy. I can track everything in one place!"
              </p>
              <div className="flex items-center gap-4">
                <Image 
                  src="/images/profiles-8_1profiles-8.webp"
                  alt="David James"
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div>
                  <div className="font-semibold text-primary">David James</div>
                  <div className="text-sm text-gray-600">Small Business Owner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="mb-4 text-gray-600">
                "Aurion keeps us organized and on top of our budget. Love it!"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/profiles-7_1profiles-7.webp"
                  alt="Daniel Harnes"
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div>
                  <div className="font-semibold text-primary">Daniel Harnes</div>
                  <div className="text-sm text-gray-600">CFO</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="mb-4 text-gray-600">
                "We rely on Aurion to keep our financials transparent and organized. The donor tracking and expense categorization features are perfect for nonprofits like ours. Plus, the customer support is always there when we need help!"
              </p>
              <div className="flex items-center gap-4">
                <Image 
                  src="/images/profiles-6_1profiles-6.webp"
                  alt="Maria Clayton"
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div>
                  <div className="font-semibold text-primary">Maria Clayton</div>
                  <div className="text-sm text-gray-600">Operations Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span>Articles</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Maximizing the value of business data
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our provide valuable insights, and establish your brand as a thought leader in the financial space.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Article cards will be added here */}
          </div>
        </div>
      </section>
    </main>
  );
} 