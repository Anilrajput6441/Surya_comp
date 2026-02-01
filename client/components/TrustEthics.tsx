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
    <section className="bg-[#1A1C1E] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#111113] p-10 md:p-12 rounded-[2rem] border border-[#303335] shadow-2xl relative overflow-hidden">
        
        {/* Header Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-[#242729] rounded-2xl border border-[#303335]">
            <Shield className="h-10 w-10 text-lime-400" />
          </div>
        </div>

        {/* Content Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Trust, Transparency & Ethics
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Your growth is our reputation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 bg-[#111113]/60 p-6 rounded-2xl border border-[#303335] hover:border-lime-400/30 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0" />
              <p className="text-white text-lg font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustEthics;
