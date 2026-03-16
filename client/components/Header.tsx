'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed py-3 top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="flex items-center font-bold text-2xl">
          <span>BrandingWorkz</span><span className="text-teal-600">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-light">
            {navLinks.map(({ href, label }) => (
              <li key={href}><a href={href} className="hover:text-teal-600 transition-colors">{label}</a></li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="hidden md:block">
          <button className="bg-black text-white px-6 font-semibold py-3 rounded-xl">Get Started</button>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-gray-900 font-light text-lg hover:text-teal-600 transition-colors py-1"
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-black text-white px-6 font-semibold py-3 rounded-xl mt-2">Get Started</button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
