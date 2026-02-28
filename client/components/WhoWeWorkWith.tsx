import React from 'react';
import { User, Calendar, Map, MessageSquare } from 'lucide-react';

const WhoWeWorkWith = () => {
  const clients = [
    'New Company Formation Seekers',
    'D2C & E-Commerce Brands',
    'Manufacturers & Wholesalers',
    'Importers & Exporters',
    'Offline Businesses Going Digital',
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Dedicated Account Manager */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">DEDICATED SUPPORT</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Your Dedicated Account Manager
          </h2>
          <p className="text-lg text-gray-900 mb-10 max-w-lg font-light leading-relaxed">
            You&apos;ll always know <span className="text-gray-900 font-medium">what&apos;s happening and why</span>. Every client gets personalized attention and clear communication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <p className="text-gray-900 text-sm font-medium leading-tight">One Dedicated Account Manager</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <p className="text-gray-900 text-sm font-medium leading-tight">Weekly / Monthly Performance Reviews</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <Map className="h-5 w-5 text-teal-600" />
              </div>
              <p className="text-gray-900 text-sm font-medium leading-tight">Clear Growth Roadmap</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <MessageSquare className="h-5 w-5 text-teal-600" />
              </div>
              <p className="text-gray-900 text-sm font-medium leading-tight">Fast Support & Clear Communication</p>
            </div>
          </div>
        </div>

        {/* Right Side: Who We Work With Card */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-300 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Work With</h3>
          <p className="text-gray-900 mb-8 text-base leading-relaxed">
            If you&apos;re serious about expanding your business globally, <span className="text-teal-600 font-medium">Lucria is for you</span>.
          </p>

          <div className="space-y-3">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-300 group hover:border-teal-600/50 transition-colors"
              >
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-900 text-base font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
