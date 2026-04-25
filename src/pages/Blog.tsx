import React from "react";
import { ArrowRight } from "lucide-react";
import CTASection from "../components/sections/CTASection";

const posts = [
  { 
    image: "https://picsum.photos/seed/blog1/600/400", 
    title: "Digital Marketing Strategies for Fintech Startups in Nigeria",
    desc: "Nigeria is Africa's fintech capital. The country has produced some of the continent's most successful...",
  },
  { 
    image: "https://picsum.photos/seed/blog2/600/400", 
    title: "How Fashion Brands in Nigeria Can Grow Sales Online Without Relying on Instagram Alone",
    desc: "If your Nigerian fashion brand lives and dies by Instagram, you are one algorithm change...",
  },
  { 
    image: "https://picsum.photos/seed/blog3/600/400", 
    title: "Stratnova vs Socialander: Which Digital Marketing Agency Is Better for Businesses in Nigeria?",
    desc: "You are searching for the best digital marketing agency in Nigeria. You have come across...",
  },
  { 
    image: "https://picsum.photos/seed/blog4/600/400", 
    title: "How to Attract Real Estate Clients Online as a Property Developer in Nigeria",
    desc: "Most property developers in Nigeria are not losing clients because of bad properties. They are...",
  },
  { 
    image: "https://picsum.photos/seed/blog5/600/400", 
    title: "How to Grow Your Engine Oil Business in Nigeria",
    desc: "The engine oil market in Nigeria is worth hundreds of millions of dollars. With over...",
  },
  { 
    image: "https://picsum.photos/seed/blog6/600/400", 
    title: "How Much Does Digital Marketing Cost in Nigeria? (2026 Complete Pricing Guide)",
    desc: "You have decided it is time to invest in digital marketing for your business. But...",
  },
  { 
    image: "https://picsum.photos/seed/blog7/600/400", 
    title: "GEO: How Businesses in Nigeria Can Get Found by AI in 2026",
    desc: "Something has quietly changed the way Nigerians search for information, and most businesses have not...",
  },
  { 
    image: "https://picsum.photos/seed/blog8/600/400", 
    title: "Top 15 Digital Marketing Agencies in Nigeria 2026",
    desc: "Running a business in Nigeria in 2026 is no longer just about having a great...",
  },
  { 
    image: "https://picsum.photos/seed/blog9/600/400", 
    title: "Why Programmatic Advertising Matters in Nigeria & How to Get Started",
    desc: "Programmatic advertising has become one of the most powerful shifts in digital marketing worldwide, and...",
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          Blog
        </h1>
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          Explore insights, updates, ideas, and anything new on marketing, advertising, technology, and online growth on the stratnova blog.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, idx) => (
            <div key={idx} className="group bg-brand-card rounded-[40px] border border-white/5 overflow-hidden flex flex-col hover:border-brand-gold/20 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-medium mb-6 leading-tight group-hover:text-brand-gold transition-colors">{post.title}</h3>
                <p className="text-brand-grey text-sm mb-8 flex-grow leading-relaxed">{post.desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest text-[#E2B13C] flex items-center gap-2 hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center items-center gap-2">
           <PaginationButton active>1</PaginationButton>
           <PaginationButton>2</PaginationButton>
           <PaginationButton>3</PaginationButton>
           <span className="text-brand-grey px-2">...</span>
           <PaginationButton>7</PaginationButton>
           <button className="text-sm font-bold ml-4 hover:text-brand-gold transition-colors flex items-center gap-2">
             Next <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function PaginationButton({ children, active }: { children: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
      active ? 'bg-brand-gold text-black' : 'hover:bg-white/10'
    }`}>
      {children}
    </button>
  );
}
