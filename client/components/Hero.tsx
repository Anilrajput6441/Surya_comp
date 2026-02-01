// components/HeroSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react'; // You might need to install lucide-react (npm install lucide-react)

const Hero = () => {
  return (
    // Main container with dark background and centered content
    <section className="bg-[#111113] text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-8 text-center">
        
        {/* Top Kicker/Badge */}
        <div className="inline-flex items-center font-extralight text-gray-400 gap-2 px-4 py-2 rounded-full bg-[#1A1C1E] border border-[#303335] mb-8 animate-fade-in" x-file-name="Hero" x-line-number="16" x-component="div" x-id="Hero_16" x-dynamic="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DAFF00" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className="lucide lucide-sparkles w-4 h-4 text-accent-primary" aria-hidden="true" x-file-name="Hero" x-line-number="17" x-component="Sparkles" x-id="Hero_17" x-dynamic="false"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><span className="text-sm text-gray-200" x-file-name="Hero" x-line-number="18" x-component="span" x-id="Hero_18" x-dynamic="false">Your Complete E-Commerce Growth Partner</span></div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Build. Launch. Scale
          <br className="hidden sm:inline" />
          <span className="text-gray-400">Across Marketplaces & D2C</span>
        </h1>

        {/* Subtitle/Description */}
        <p className="max-w-2xl mx-auto font-extralight md:text-xl text-gray-200 mb-10">
          We help brands and sellers start, manage, and scale profitable online businesses across <span className='font-semibold text-gray-400'> Amazon, Flipkart, Myntra, Etsy, Walmart, and Shopify </span>with transparency, expertise, and a long-term growth mindset.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="flex items-center px-8 py-3 text-lg font-semibold rounded-lg shadow-lg bg-[#DAFF00] text-black hover:bg-[#d9ff00ea] transition duration-300"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#"
            className="px-8 py-3 text-lg font-semibold rounded-lg shadow-md border border-gray-600 text-white hover:bg-gray-800 transition duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Bottom text/disclaimer */}
        <p className="mt-16 text-sm text-gray-500">
          Looking for a genuine team, not fake promises? <span className="text-lime-400">You&apos;re in the right place.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

