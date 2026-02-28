// app/services/page.tsx or components/ServicesPage.tsx

'use client'; // Use client directive if you need interactivity, otherwise it can be a server component

import { Check, ShoppingCart, Globe, Store, Megaphone, ArrowRight } from 'lucide-react';

interface MarketplaceItem {
  name: string;
  description: string;
}

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  items?: string[];
  type: 'list' | 'marketplace' | 'pills' | 'shopify';
  footerBanner?: string;
  platforms?: string[];
  strategy?: string[];
}

const servicesData: ServiceItem[] = [
 
  {
    id: 1,
    name: 'Amazon Services',
    description: 'India & Global',
    icon: ShoppingCart,
    type: 'list',
    items: [
      'Amazon Seller Account Creation',
      'Brand & Category Approval',
      'Product Listing (SEO-Optimized)',
      'Correct Pricing & Margin Strategy',
      'Amazon Prime / FBA Enrollment',
      'A+ Content & Brand Store Creation',
      'Amazon Advertising (SP, SB, SD)',
      'Account Health & Performance Management',
      'Seller Education for Smooth Operations',
    ],
  },
  {
    id: 2,
    name: 'Multi-Marketplace',
    description: 'One team, zero confusion',
    icon: Globe,
    type: 'marketplace',
  },
   {
    id: 3,
    name: 'Shopify Development',
    description: 'D2C Websites That Sell',
    icon: Store,
    type: 'shopify',
    items: [
      'Shopify Store Setup (Custom Design)',
      'Product Upload & Collections',
      'Payment Gateway & Shipping Setup',
      'Mobile-Optimized UI/UX',
      'SEO-Ready Product Pages',
    ],
    footerBanner: 'Your website won\'t just look good — it will sell.',
  },
  {
    id: 4,
    name: 'Performance Marketing',
    description: 'ROI-First Mindset',
    icon: Megaphone,
    type: 'pills',
    platforms: [
      'Google Ads (Search, Display, Shopping)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads (Global Reach)',
      'Marketplace Ads (Amazon & Flipkart)',
    ],
    strategy: [
      'Funnel-Based Campaign Structure',
      'Data-Driven Decisions',
      'Continuous Testing & Optimization',
      'Transparent Performance Reports',
    ],
  },
];

const marketplacesData: MarketplaceItem[] = [
  { name: 'Flipkart', description: 'Seller Setup & Optimization' },
  { name: 'Myntra', description: 'Brand Onboarding & Cataloging' },
  { name: 'Etsy', description: 'Store Creation & Listing Optimization' },
  { name: 'Walmart', description: 'Seller Account & Product Upload' },
];

const ServicesPage: React.FC = () => {
  return (
    <div id="services" className="min-h-screen bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">OUR SERVICES</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Complete E-Commerce Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-900 mx-auto leading-relaxed">
            From seller account creation to ads scaling, from Shopify websites to multi-marketplace expansion — we handle everything under one roof.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-300 flex flex-col">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl mr-5">
                  <service.icon className="h-7 w-7 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 leading-tight">{service.name}</h2>
                  <p className="text-gray-900 font-light">{service.description}</p>
                </div>
              </div>

              <div className="flex-grow">
                {service.type === 'list' || service.type === 'shopify' ? (
                  <ul className="space-y-4 mb-8">
                    {service.items?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {service.type === 'shopify' && service.footerBanner && (
                  <div className="mt-auto p-4 bg-white rounded-xl border border-gray-300">
                    <p className="text-gray-900 font-light text-center">
                      {service.footerBanner.split('—')[0]} — <span className="text-teal-600">{service.footerBanner.split('—')[1]}</span>
                    </p>
                  </div>
                )}

                {service.type === 'pills' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-gray-900 font-light mb-4">Platforms We Manage:</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.platforms?.map((platform, idx) => (
                          <div key={idx} className="px-4 py-2 bg-white border border-gray-300 rounded-full font-light text-sm text-gray-900">
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-light mb-4">Our Strategy:</h3>
                      <ul className="space-y-3">
                        {service.strategy?.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-900 text-sm font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {service.type === 'marketplace' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {marketplacesData.map((marketplace, index) => (
                      <div key={index} className="bg-white p-5 rounded-xl border border-gray-300">
                        <h3 className="font-light text-gray-900 text-lg">{marketplace.name}</h3>
                        <p className="text-gray-900 font-light text-sm mt-2 leading-relaxed">{marketplace.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
