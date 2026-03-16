'use client';

import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    goals: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      if(response){
        toast.success('Message sent successfully!');
      } 
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        goals: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-white text-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4">GET STARTED</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">Ready to Start?</h2>
          <p className="text-xl text-gray-900 mb-12">
            Let&apos;s grow your business in new markets the <span className="text-teal-600 font-semibold italic">right way</span>.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="p-3 bg-gray-100 border border-gray-300 rounded-xl mr-5">
                <ArrowRight className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900">Build Strong</h3>
                <p className="text-gray-900 font-light mt-1">Solid foundations for sustainable growth</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 bg-gray-100 border border-gray-300 rounded-xl mr-5">
                <ArrowRight className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900">Scale Smart</h3>
                <p className="text-gray-900 font-light mt-1">Data-driven decisions for profitable scaling</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 bg-gray-100 border border-gray-300 rounded-xl mr-5">
                <ArrowRight className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900">Grow Consistently</h3>
                <p className="text-gray-900 font-light mt-1">Long-term partnership for continuous growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-300 shadow-2xl">
          <h3 className="text-3xl font-medium text-gray-900 mb-3">Contact Us Today</h3>
          <p className="text-gray-900 mb-8 font-light">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="businessType"
                placeholder="Business Type (e.g., D2C Brand, Manufacturer)"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="goals"
                placeholder="Tell us about your business goals..."
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-teal-600/10"
            >
              <Send className={`h-5 w-5 ${status === 'loading' ? 'animate-pulse' : ''}`} />
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
