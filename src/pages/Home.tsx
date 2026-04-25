import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Phone, MessageSquare, Search, BarChart3, Globe, Code, PenTool, Hash, Megaphone, Smartphone, Star, ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/sections/CTASection";
import ImageAutoScroller from "../components/sections/ImageAutoScroller";
import Logoscroller from "../components/sections/Logoscroller";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
        {/* Background Animation/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark" />
          <img 
            src="https://picsum.photos/seed/ox-hero/1920/1080?brightness=20" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Digital Marketing & Advertising Agency in Nigeria
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-8 leading-[0.95]"
          >
            We Drive Measurable Results Through Marketing, Advertising and Tech Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-grey text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            We help businesses move beyond the "activity-only" mindset, turning their marketing into coordinated growth systems that deliver measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-outline group hover:border-brand-gold">
              <Phone className="w-4 h-4 group-hover:text-brand-gold transition-colors" />
              <span className="group-hover:text-brand-gold transition-colors">Get In Touch</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ImageAutoScroller/>

      {/* Trusted By Section */}
      <Logoscroller/>

      {/* Data Driven Solutions Section */}
      <section className="py-24 container-custom grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
          <img 
            src="https://picsum.photos/seed/ox-team/800/800" 
            alt="Data driven solutions" 
            className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-brand-gold pl-4">
             About Us
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight">
            Data-driven Solutions for Your Business
          </h2>
          <p className="text-brand-grey text-lg mb-8 leading-relaxed">
            At Stratnova, we help businesses build connected digital systems designed to attract the right audience and drive measurable growth.
          </p>
          <p className="text-brand-grey mb-12">
            Our approach is simple: We focus on strategies that deliver long-term growth and meaningful results, not scattered campaigns or vanity metrics. It's time your marketing worked as hard as you do, so let's make it happen.
          </p>
          <Link to="/about" className="btn-outline inline-flex group gap-2 hover:border-brand-gold">
            Learn More <ArrowUpRight className="w-4 h-4 group-hover:text-brand-gold transition-colors" />
          </Link>
        </div>
      </section>

      {/* 3 Ways We Help */}
      <section className="py-24 bg-brand-card/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">
               Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
              3 Ways We Help Businesses Drive Measurable Results
            </h2>
            <p className="text-brand-grey">
              Our solutions combine marketing, advertising, and technology to help businesses grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Megaphone className="w-6 h-6" />}
              title="Marketing & Advertising Solutions"
              desc="We design high-performance marketing and advertising campaigns that increase brand visibility, attract the right audience, and drive measurable business growth."
            />
            <ServiceCard 
              icon={<Code className="w-6 h-6" />}
              title="Website, IT, & Tech Solutions"
              desc="We design modern websites, digital platforms, and technology solutions that streamline operations, enhance user experience, and support scalable business growth."
            />
            <ServiceCard 
              icon={<Globe className="w-6 h-6" />}
              title="Online Presence Optimization"
              desc="We optimize your online presence across search engines, social media platforms, and digital listings to improve visibility, credibility, and customer discovery."
            />
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section className="py-24">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                 <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-brand-gold pl-4">
                    Case Studies
                 </div>
                 <h2 className="text-4xl md:text-5xl font-display font-medium">
                    Real Results from Our Client Projects
                 </h2>
              </div>
              <Link to="/projects" className="text-brand-gold font-bold flex items-center gap-2 hover:underline">
                 All Case Studies <ArrowUpRight className="w-4 h-4" />
              </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <ProjectCard 
                image="https://picsum.photos/seed/ox-p1/600/400"
                title="How Strategic Marketing Fueled Cudium's Growth"
              />
              <ProjectCard 
                image="https://picsum.photos/seed/ox-p2/600/400"
                title="Elevating MRS Oil's Brand Through Strategic Visual Storytelling"
              />
              <ProjectCard 
                image="https://picsum.photos/seed/ox-p3/600/400"
                title="How We Launched Tursan Energy into the Nigerian Market"
              />
           </div>
        </div>
      </section>

      {/* Customized Solutions Grid */}
      <section className="py-24 bg-brand-card/30">
        <div className="container-custom">
           <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">
                 What We Do
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
                 Our Customized Solutions for The Growth of Your Business
              </h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Digital Marketing", icon: <Megaphone /> },
                { name: "Social Media Marketing", icon: <Hash /> },
                { name: "Ads Management", icon: <BarChart3 /> },
                { name: "Search Engine Optimization", icon: <Search /> },
                { name: "PPC Marketing", icon: <PenTool /> },
                { name: "Billboard Advertising", icon: <Globe /> },
                { name: "Website Development", icon: <Code /> },
                { name: "Product Design (UI/UX)", icon: <PenTool /> },
                { name: "Branding & Design", icon: <Star /> },
                { name: "Tech Solutions", icon: <Code /> },
                { name: "Corporate Comms", icon: <MessageSquare /> },
                { name: "Digital PR", icon: <Globe /> },
                { name: "Reputation Management", icon: <Star /> },
                { name: "Brand Development", icon: <BarChart3 /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-brand-gold/10 hover:border-brand-gold/20 transition-all cursor-default">
                  <div className="text-brand-gold">{item.icon}</div>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">
                 FAQs
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Frequently Asked Questions</h2>
           </div>
           
           <div className="space-y-4">
              <AccordionItem 
                question="What services does Stratnova provide?"
                answer="We provide marketing, advertising, design, and technology solutions that help businesses strengthen their digital presence and achieve measurable growth. Our services include digital marketing, advertising management, website development, branding, SEO, digital PR, and technology solutions."
              />
              <AccordionItem 
                question="What type of businesses do you work with?"
                answer="We work with a wide range of businesses, from startups to established enterprises across various industries including fintech, real estate, oil & gas, hospitality, and more."
              />
              <AccordionItem 
                question="What makes Stratnova different from other agencies?"
                answer="We focus on data-driven results and long-term growth rather than vanity metrics. Our approach combines tech, design and strategy to create holistic growth systems."
              />
           </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-brand-card p-10 rounded-[32px] border border-white/5 flex flex-col items-center text-center group hover:border-brand-gold/20 transition-all">
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-medium mb-6">{title}</h3>
      <p className="text-brand-grey mb-8">{desc}</p>
      <Link to="/services" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function ProjectCard({ image, title }: { image: string, title: string }) {
  return (
    <div className="group">
       <div className="aspect-[4/3] rounded-[32px] overflow-hidden border border-white/5 mb-6">
          <img src={image} alt={title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
       </div>
       <h3 className="text-xl font-display font-medium mb-4">{title}</h3>
       <Link to="/projects" className="btn-outline w-full hover:bg-brand-gold hover:text-black hover:border-brand-gold">
          View Project <ArrowRight className="w-4 h-4" />
       </Link>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-brand-card rounded-2xl border border-white/5 overflow-hidden">
       <button 
         className="w-full px-8 py-6 flex items-center justify-between text-left font-semibold text-lg"
         onClick={() => setIsOpen(!isOpen)}
       >
         {question}
         {isOpen ? <Minus className="text-brand-gold" /> : <Plus className="text-brand-gold" />}
       </button>
       {isOpen && (
         <div className="px-8 pb-6 text-brand-grey leading-relaxed">
            {answer}
         </div>
       )}
    </div>
  );
}
