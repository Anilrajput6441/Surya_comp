import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Business & Goal Understanding',
    description: 'We start by deeply understanding your business, products, and growth objectives.',
  },
  {
    number: 2,
    title: 'Marketplace / Website Setup',
    description: 'Complete setup of your seller accounts or Shopify store with all requirements.',
  },
  {
    number: 3,
    title: 'Listing & Brand Optimization',
    description: 'SEO-optimized listings, A+ content, and brand store creation.',
  },
  {
    number: 4,
    title: 'Ads Launch & Scaling',
    description: 'Strategic ad campaigns across platforms with ROI-first approach.',
  },
  {
    number: 5,
    title: 'Tracking, Optimization & Growth',
    description: 'Continuous monitoring, optimization, and scaling for sustained growth.',
  },
];

const HowWeMake = () => {
  return (
    <section id="process" className="relative bg-[#111113] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glowing Spheres */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute top-[-20%] left-[-20%] w-[40vw] h-[40vw] rounded bg-lime-400/15 blur-[120px] animate-slow-bounce"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[35vw] rounded-full bg-lime-400/10 blur-[120px] animate-slow-bounce"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light italic">
            Simple. Structured. Result-Focused.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#1A1C1E] p-8 rounded-2xl border border-[#303335] flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                <span className="text-[#111113] text-xl font-extrabold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeMake;
