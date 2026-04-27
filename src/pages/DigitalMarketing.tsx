import React from 'react';
import { MailOpen, ContactRound, Globe, } from "lucide-react";


const services = [
  {icon: MailOpen, title: "Email Marketing", desc: ""},
  {icon: ContactRound, title: "Lead generation", desc: ""},
  {icon: Globe, title: "Social Media Ads", desc: ""},
  // {icon: , title: "", desc: ""},
  // {icon: , title: "", desc: ""}
]

const DigitalMarketing = () => {
  return (
    <div>
        <div className="pt-20">
            {/*Header*/}

            <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          Digital Marketing 
         </h1> 
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatem suscipit libero dolorem molestiae rerum consectetur, quia sapiente est minima quos explicabo nostrum, officia quae magni doloribus consequatur quod nisi.
        </p>
      </section>


      {/* Subcategories section */}
      
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-card p-12 rounded-[40px] border border-white/5 flex flex-col items-center text-center group hover:border-brand-gold/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-6">{service.title}</h3>
              <p className="text-brand-grey mb-8 flex-grow leading-relaxed">{service.desc}</p>
              <button className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
        </div>
      
    </div>
  )
}

export default DigitalMarketing
