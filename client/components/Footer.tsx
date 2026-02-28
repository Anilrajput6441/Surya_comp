import React from 'react';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              BrandingWorkz<span className="text-teal-600">.</span>
            </h2>
            <p className="text-gray-900 text-sm leading-relaxed max-w-xs">
              Your Complete E-Commerce Growth Partner. Build, Launch, Scale with transparency and expertise.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:border-teal-600/50 transition-colors">
                <Twitter className="h-5 w-5 text-gray-900" />
              </a>
              <a href="#" className="p-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:border-teal-600/50 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-900" />
              </a>
              <a href="#" className="p-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:border-teal-600/50 transition-colors">
                <Instagram className="h-5 w-5 text-gray-900" />
              </a>
              <a href="#" className="p-2.5 bg-gray-100 border border-gray-300 rounded-lg hover:border-teal-600/50 transition-colors">
                <Mail className="h-5 w-5 text-gray-900" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Amazon Services</a></li>
              <li><a href="#services" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Marketplace Management</a></li>
              <li><a href="#services" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Shopify Development</a></li>
              <li><a href="#services" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Performance Marketing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-gray-900 text-sm hover:text-teal-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Stay Updated</h3>
            <p className="text-gray-900 text-sm">Subscribe for business tips and insights.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="flex-grow bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 p-3 rounded-xl transition-colors shadow-lg shadow-teal-600/20"
              >
                <Mail className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:row items-center justify-center text-center">
          <p className="text-gray-500 text-xs font-light">
            © {currentYear} Lucria. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
