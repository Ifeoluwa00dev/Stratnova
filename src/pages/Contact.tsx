import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import CTASection from "../components/sections/CTASection";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          Contact Us
        </h1>
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          If you are here because you need help with marketing, advertising, website, or other technology solutions, you are at the right place. Fill the contact form or book a call.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-24 container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="bg-brand-card p-10 md:p-12 rounded-[40px] border border-white/5">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="John Adamu" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="abcde@gmail.com" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">Company Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Company Name" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/80">Service Needed <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="What do you need help with?" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">Message <span className="text-red-500">*</span></label>
                  <textarea rows={4} placeholder="Tell us more about your project and how we can support you." className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors resize-none" />
                </div>

                <button className="btn-outline group overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   <span className="relative z-10 group-hover:text-black font-black uppercase text-xs tracking-widest">Send Message</span>
                </button>
             </form>
          </div>

          {/* Booking Side placeholder */}
          <div className="bg-brand-card rounded-[40px] border border-white/5 overflow-hidden flex flex-col h-full">
             <div className="p-8 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2">
                      <img src="https://picsum.photos/seed/ox-ico/40/40" className="rounded-full grayscale" referrerPolicy="no-referrer" />
                   </div>
                   <div>
                      <h3 className="font-bold text-sm">Stratnova Ltd</h3>
                      <p className="text-xs text-brand-grey">Let's Talk About Your Business</p>
                   </div>
                </div>
                <h4 className="text-2xl font-display font-medium mb-4">Schedule a Discovery Session</h4>
                <div className="flex gap-4 text-xs text-brand-grey">
                   <div className="flex items-center gap-1">⏱️ 30m</div>
                   <div className="flex items-center gap-1">🎥 Google Meet</div>
                </div>
             </div>
             <div className="flex-grow bg-[#1A1A1A] flex items-center justify-center p-8">
                 {/* Calendar UI Mockup */}
                 <div className="w-full max-w-sm rounded-xl overflow-hidden bg-brand-dark border border-white/10">
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#222]">
                        <span className="text-sm font-bold">April 2026</span>
                        <div className="flex gap-2">
                           <button className="w-6 h-6 hover:bg-white/10 rounded">{'<'}</button>
                           <button className="w-6 h-6 hover:bg-white/10 rounded">{'>'}</button>
                        </div>
                    </div>
                    <div className="p-4 grid grid-cols-7 gap-1 text-[10px] text-center font-bold text-white/40">
                       {['SUN','MON','TUE','WED','THU','FRI','SAT'].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="p-4 grid grid-cols-7 gap-1 text-xs">
                       {Array.from({length: 30}).map((_, i) => (
                         <div key={i} className={`aspect-square flex items-center justify-center rounded-lg ${i + 1 === 20 ? 'bg-brand-gold text-black font-black' : 'hover:bg-white/5 transition-colors cursor-pointer'}`}>
                           {i + 1}
                         </div>
                       ))}
                    </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
           <ContactInfoCard 
             icon={<Phone />}
             title="Phone Number"
             value="07083845690"
           />
           <ContactInfoCard 
             icon={<Mail />}
             title="Email"
             value="oxgital@gmail.com"
           />
           <ContactInfoCard 
             icon={<MapPin />}
             title="Head Office"
             value="5 Lekki - Epe Expy, Lekki Phase 1, Lagos."
           />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ContactInfoCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="bg-brand-card p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center">
       <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-8">
          {icon}
       </div>
       <h3 className="text-2xl font-display font-medium mb-8">{title}</h3>
       <p className="text-brand-grey font-semibold">{value}</p>
    </div>
  );
}
