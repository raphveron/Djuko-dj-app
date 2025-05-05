"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-body overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/Vector-116_1Vector 116.webp"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg_1-p-1600.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>

        <div className="hero-content">
          <div className="hero-badge mb-8">
            <div className="badge_element">
              <div className="badge_gradient" style={{ background: 'linear-gradient(90deg, #4d65ff, transparent)' }} />
              <Image
                src="/images/Frame-1000002213-2_2Frame 1000002213-2.webp"
                alt="Arrow"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <span className="text-sm font-medium">Welcome to REQUESTA</span>
            <div className="badge_element">
              <div className="badge_gradient" style={{ background: 'linear-gradient(-90deg, #4d65ff, transparent)' }} />
              <Image
                src="/images/Frame-1000002213-3_1-p-130x130q80.png"
                alt="Arrow"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
          </div>

          <h1 className="hero-title">
            The New Way to Request Your Favorite Songs
          </h1>
          <p className="hero-description">
            Connect with DJs instantly and make your music requests in real-time. 
            Experience the future of DJ-Client interaction.
          </p>
          <a
            href="https://request-dj-app.vercel.app/getDJs"
            className="hero-cta"
          >
            Request Your Song
            <Image
              src="/images/Frame-1000002213-1_1Frame 1000002213-1.webp"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/asdd_1-p-1080.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature_card">
              <h3 className="text-xl font-semibold mb-4 text-primary">1. Scan the QR Code</h3>
              <p className="text-secondary-text">
                The DJ displays a QR Code. Scan it to access the Request Client page and select your track.
              </p>
            </div>
            <div className="feature_card">
              <h3 className="text-xl font-semibold mb-4 text-primary">2. Propose an Amount</h3>
              <p className="text-secondary-text">
                Enter the song name, your name, and the price you're willing to pay.
              </p>
            </div>
            <div className="feature_card">
              <h3 className="text-xl font-semibold mb-4 text-primary">3. DJ Approval</h3>
              <p className="text-secondary-text">
                The DJ receives your request, accepts or rejects it, and plays your song if approved!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For DJs Section */}
      <section className="join_section px-4">
        <div className="join_gradient" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            For DJs
          </h2>
          <p className="text-secondary-text max-w-3xl mx-auto mb-8">
            Manage all your requests with a simple and intuitive interface. Accept, reject, or mark them as played. 
            Get a unique QR Code so your clients can make their requests in just a few clicks!
          </p>
          <a
            href="/signUpDJ"
            className="hero-cta"
          >
            Sign Up as a DJ
            <Image
              src="/images/Frame-1000002213-1_1Frame 1000002213-1.webp"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Ready to Kick Off the Party?
          </h2>
          <p className="text-secondary-text mb-8">
            Join us and deliver a unique musical experience to your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-lg transition-all duration-300 hover:bg-gray-200"
            >
              Log In
            </a>
            <a
              href="/signUpDJ"
              className="hero-cta"
            >
              Create a DJ Account
              <Image
                src="/images/Frame-1000002213-1_1Frame 1000002213-1.webp"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center text-sm text-secondary-text">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2025 REQUESTA. All rights reserved.</p>
          <p className="mt-2">
            <a href="/getDJs" className="text-primary hover:text-primary-light transition-colors">
              View the list of DJs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
