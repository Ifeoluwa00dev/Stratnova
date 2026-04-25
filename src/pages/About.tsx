import React from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import CTASection from "../components/sections/CTASection";

const teamMembers = [
  { name: "Akeem Osungbade", role: "Chief Executive Officer", image: "https://picsum.photos/seed/team1/400/500" },
  { name: "Joshua Folorunso", role: "Chief Business Officer", image: "https://picsum.photos/seed/team2/400/500" },
  { name: "Ridwan Animashaun", role: "Chief Marketing Officer", image: "https://picsum.photos/seed/team3/400/500" },
  { name: "Olaoluwa M. Oreniwa", role: "Chief Operations Officer", image: "https://picsum.photos/seed/team4/400/500" },
  { name: "Pelumi Adifagbade", role: "Product & Design Lead", image: "https://picsum.photos/seed/team5/400/500" },
  { name: "Nnenna Orji", role: "Social Media Manager", image: "https://picsum.photos/seed/team6/400/500" },
  { name: "Faruq Animasahun", role: "Organic Growth Strategist", image: "https://picsum.photos/seed/team7/400/500" },
  { name: "Omoseni Ajadi", role: "Projects & Marketing", image: "https://picsum.photos/seed/team8/400/500" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/ox-bull/1920/1080" 
            alt="Bull pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          About <br /> <span className="text-brand-gold italic">Stratnova</span>
        </h1>
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          We Drive Measurable Results For Business In Nigeria Through Intentional Marketing, Creative Advertising and Growth-Oriented Tech Solutions
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10">
              <img src="https://picsum.photos/seed/about1/800/600" alt="Office desk" className="w-full h-full object-cover grayscale" />
           </div>
           <div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">
                Your Marketing, Advertising, and Technology Solutions Partner
              </h2>
              <p className="text-brand-grey text-lg mb-8 leading-relaxed">
                At Stratnova, we help businesses grow by combining marketing strategy, advertising execution, and technology-driven solutions. We partner with brands to strengthen their digital presence, attract the right audience, and achieve measurable business results.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mt-12">
                 <div>
                    <div className="text-4xl font-display font-bold text-brand-gold mb-1">153</div>
                    <div className="text-xs text-brand-grey uppercase font-bold tracking-widest">Projects Delivered</div>
                 </div>
                 <div>
                    <div className="text-4xl font-display font-bold text-brand-gold mb-1">50+</div>
                    <div className="text-xs text-brand-grey uppercase font-bold tracking-widest">Campaigns Launched</div>
                 </div>
                 <div>
                    <div className="text-4xl font-display font-bold text-brand-gold mb-1">70+</div>
                    <div className="text-xs text-brand-grey uppercase font-bold tracking-widest">Businesses Served</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-brand-card/30">
        <div className="container-custom text-center mb-16">
           <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
             Born to Do This
           </div>
           <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Experience Stratnova</h2>
           <p className="text-brand-grey mb-12 max-w-xl mx-auto">
             Everyday, we show-up, and live to do this. If we are not doing this, we won't be doing anything else.
           </p>
           <div className="relative aspect-video rounded-[40px] overflow-hidden group border border-white/10 max-w-5xl mx-auto">
              <img src="https://picsum.photos/seed/about2/1200/675" alt="Video cover" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="text-black fill-black ml-1" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24">
         <div className="container-custom">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                 Beyond Stratnova
               </div>
               <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight">
                  Explore Our Expanding <br /> Ecosystem
               </h2>
               <p className="text-brand-grey max-w-2xl mx-auto mb-16">
                 As we continue to grow, we are building an ecosystem of solutions designed to support businesses, professionals, and the future of digital innovation.
               </p>
               
               <div className="grid md:grid-cols-2 gap-8">
                  <EcosystemCard 
                    title="Oxtech Academy"
                    desc="Oxtech Academy is a digital skills and technology education initiative focused on equipping individuals and organizations with practical knowledge for the modern digital economy."
                  />
                  <EcosystemCard 
                    title="OxBillboards"
                    desc="OxBillboards is our billboard & OOH advertising subsidiary that connects brands with over 10,000 billboard placements across major cities in Nigeria, to increase visibility and reach."
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Structured Approach */}
      <section className="py-24 bg-brand-card/50">
         <div className="container-custom">
            <div className="text-center mb-24">
               <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Our Structured Approach to Growth</h2>
            </div>
            
            <div className="space-y-20 max-w-4xl mx-auto">
               {[
                 "Discovery & Business Understanding",
                 "Strategy & Growth Planning",
                 "Creative & Technical Execution",
                 "Campaign Launch & Implementation",
                 "Performance Tracking & Optimization",
                 "Continuous Growth & Support"
               ].map((step, idx) => (
                 <div key={idx} className="text-center">
                    <span className="text-5xl md:text-7xl font-display font-bold text-brand-gold block mb-4 italic opacity-80">
                      {idx + 1}. {step}
                    </span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-6xl font-display font-medium mb-8">Our Team</h2>
               <p className="text-brand-grey max-w-xl mx-auto">
                 We're a team of professionals, strategists, and creatives passionate about helping businesses build stronger digital presence and achieve measurable growth.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {teamMembers.map((member, idx) => (
                 <div key={idx} className="group flex flex-col items-center">
                    <div className="relative aspect-[4/5] w-full rounded-[30px] overflow-hidden mb-6 bg-brand-grey/10 border border-white/5">
                       <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                       />
                       {/* Social overlay */}
                       <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <TeamSocialIcon icon={<Linkedin className="w-4 h-4" />} />
                          <TeamSocialIcon icon={<Instagram className="w-4 h-4" />} />
                          <TeamSocialIcon icon={<Twitter className="w-4 h-4" />} />
                       </div>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-1">{member.name}</h3>
                    <p className="text-xs text-brand-grey font-bold uppercase tracking-widest">{member.role}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <CTASection />
    </div>
  );
}

function EcosystemCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-brand-card p-12 rounded-[40px] border border-white/5 text-left group relative overflow-hidden">
       <div className="relative z-10">
          <h3 className="text-3xl font-display font-medium mb-6">{title}</h3>
          <p className="text-brand-grey leading-relaxed mb-8">{desc}</p>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-brand-gold group-hover:text-brand-gold">
             <ArrowUpRight className="w-5 h-5" />
          </div>
       </div>
    </div>
  );
}

function TeamSocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-brand-gold hover:text-black transition-all">
       {icon}
    </div>
  );
}
