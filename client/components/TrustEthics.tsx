import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

const TrustEthics = () => {
  const values = [
    'No fake guarantees',
    'No hidden charges',
    'Realistic timelines',
    'Long-term partnership mindset',
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-12 rounded-[2rem] border border-gray-300 shadow-2xl relative overflow-hidden">
        
        {/* Header Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white rounded-2xl border border-gray-300">
            <Shield className="h-10 w-10 text-teal-600" />
          </div>
        </div>

        {/* Content Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Trust, Transparency & Ethics
          </h2>
          <p className="text-lg text-gray-900 font-light">
            Your growth is our reputation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-300 hover:border-teal-600/30 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
              <p className="text-gray-900 text-lg font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustEthics;
