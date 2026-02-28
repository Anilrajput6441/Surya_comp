// components/TrustSection.jsx
import React from 'react';
import { Users, Target, MessageCircle, Shield, TrendingUp } from 'lucide-react'; // Make sure you have installed lucide-react (npm install lucide-react)
import { Check } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Marketplace experts with proven track records',
    },
    {
      icon: Target,
      title: 'End-to-End Execution',
      description: 'From setup to scale, we handle everything',
    },
    {
      icon: MessageCircle,
      title: 'Dedicated Support',
      description: 'Your own account manager, always available',
    },
    {
      icon: Shield,
      title: 'Transparent Reporting',
      description: 'Clear communication, no hidden surprises',
    },
    {
      icon: TrendingUp,
      title: 'Profit-Focused',
      description: 'Long-term profitability over vanity metrics',
    },
  ];

  return (
    // Main container with light gradient background and padding
    <section id="why-us" className="bg-white text-gray-900 py-20 md:py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Brands Trust BrandingWorkz
          </h2>
          <p className="mt-4 text-lg text-gray-900">
            We act like partners, not vendors. Your success is our success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-50 cursor-pointer border border-gray-300 transition duration-300 hover:border-teal-600 hover:shadow-xl hover:shadow-teal-600/20 group"
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-gray-900 transition duration-300 group-hover:text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-900">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The main card container */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-300 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-900">
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* Teal checkmark icon */}
                <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-900">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default TrustSection;
