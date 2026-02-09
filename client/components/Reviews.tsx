// client/components/Reviews.tsx
import React from 'react';
import { Star } from 'lucide-react';

const reviewData = [
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Founder",
    company: "ZestKart India",
    rating: 5,
    content: "The localized checkout experience they built for us has significantly reduced drop-offs. Their understanding of the Indian consumer mindset is truly impressive.",
    avatar: "AM"
  },
  {
    id: 5,
    name: "Ananya Iyer",
    role: "Marketing Head",
    company: "AyurLife",
    rating: 5,
    content: "Fantastic work on our D2C storefront. We saw a 3x jump in orders from Tier-2 cities after the site optimization and language vernacular support.",
    avatar: "AI"
  },
  {
    id: 6,
    name: "Vikram Malhotra",
    role: "CEO",
    company: "Malhotra Logistics",
    rating: 4,
    content: "Robust fleet management dashboard. It’s simplified our pan-India operations. Support is prompt, though the initial setup phase was quite intense.",
    avatar: "VM"
  },
  {
    id: 7,
    name: "Sneha Kapoor",
    role: "Product Lead",
    company: "FinDost",
    rating: 5,
    content: "The UPI integration and seamless KYC flow they developed has made our app the highest-rated in the fintech category. Exceptional technical depth.",
    avatar: "SK"
  },
  {
    id: 8,
    name: "Rohan Deshmukh",
    role: "E-commerce Manager",
    company: "Urban Threads",
    rating: 5,
    content: "Our Big Billion Days sale went off without a single hitch. The scalable architecture they built handled the massive traffic surge beautifully.",
    avatar: "RD"
  },
  {
    id: 9,
    name: "Ishani Gupta",
    role: "Creative Director",
    company: "Vivid Studio",
    rating: 4,
    content: "A perfect blend of aesthetics and functionality. They really helped us bring our luxury brand's story to life for a global audience.",
    avatar: "IG"
  },
  {
    id: 10,
    name: "Karan Singh",
    role: "Operations Director",
    company: "Bharat Solar",
    rating: 5,
    content: "Their custom ERP solution has automated our entire supply chain. It's rare to find a partner that delivers this kind of ROI within a single year.",
    avatar: "KS"
  },
  {
    id: 11,
    name: "Aditi Rao",
    role: "Founder",
    company: "The Chai Collective",
    rating: 5,
    content: "From wireframes to the final launch, the process was transparent and professional. They helped us scale from a local shop to a national brand.",
    avatar: "AR"
  },
  {
    id: 12,
    name: "Siddharth Verma",
    role: "CTO",
    company: "TechNexus",
    rating: 4,
    content: "Very clean documentation and high-quality code. They integrated our legacy systems with the new cloud infrastructure quite efficiently.",
    avatar: "SV"
  },
  {
    id: 13,
    name: "Pooja Reddy",
    role: "Head of Growth",
    company: "QuickGrocer",
    rating: 5,
    content: "The real-time inventory tracking system is a lifesaver. Our delivery efficiency has improved by 40% since the new platform went live.",
    avatar: "PR"
  }
];


const ReviewCard = ({ review }: { review: typeof reviewData[0] }) => (
  <div className="bg-[#1A1C1E] p-8 rounded-2xl border border-[#303335] hover:border-lime-400/30 transition-all duration-300">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center text-lime-400 font-bold">
          {review.avatar}
        </div>
        <div>
          <h3 className="text-white font-medium">{review.name}</h3>
          <p className="text-gray-400 text-sm">{review.role} at {review.company}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < review.rating ? 'text-lime-400 fill-current' : 'text-gray-600'}`} 
          />
        ))}
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed">{review.content}</p>
  </div>
);

const Reviews = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Trusted by Growing Brands</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our clients say about their experience partnering with us
          </p>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-styled">
          {reviewData.map(review => (
            <div key={review.id} className="flex-shrink-0  w-[350px] md:w-[400px]">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

